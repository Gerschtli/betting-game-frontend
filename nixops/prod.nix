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
                expires -1;
              '';

              "~* \.(?:jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc)$".extraConfig = ''
                expires 1M;
                access_log off;
                add_header Cache-Control "public";
              '';

              "~* \.(?:css|js)$".extraConfig = ''
                expires 1y;
                access_log off;
                add_header Cache-Control "public";
              '';
            };
          };
        };
      }
    ];
}
