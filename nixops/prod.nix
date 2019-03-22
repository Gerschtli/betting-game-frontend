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
            locations."/".tryFiles = "$uri /index.html";
          };
        };
      }
    ];
}
