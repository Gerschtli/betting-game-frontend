let
  app = import ./app.nix;
in

{
  network.description = app.description;

  bgf =
    { config, lib, pkgs, ... }:
    lib.mkMerge [
      {
        deployment = {
          targetEnv = "container";
          container.host = "app.betting-game";
        };
      }

      {
        networking.firewall = {
          enable = true;
          allowedTCPPorts = [ 80 ];
          allowPing = true;
        };

        services.nginx = {
          enable = true;
          recommendedOptimisation = true;
          recommendedGzipSettings = true;

          virtualHosts."betting-game-frontend" = {
            root = import ../.;
            locations = {
              "/".tryFiles = "$uri /index.html";

              "~* (?:\.(?:html|json)|service-worker\.js)$".extraConfig = ''
                add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
                expires off;
                proxy_no_cache 1;
              '';

              "^~ /img/icons/".extraConfig = ''
                add_header Cache-Control 'public, must-revalidate';
                expires 1M;
              '';

              "~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$".extraConfig = ''
                add_header Cache-Control "public";
                expires 1M;
              '';

              "~* \.(?:css|js)$".extraConfig = ''
                add_header Cache-Control "public";
                expires 1y;
              '';
            };
          };
        };
      }
    ];
}
