let
  app = import ./app.nix;
  appDir = "/var/www/${app.name}";

  user = "worker";
  uid = 1100;
in

{
  network.description = app.description;

  bgf =
    { config, lib, pkgs, ... }:
    lib.mkMerge [
      {
        deployment = {
          targetEnv = "virtualbox";

          virtualbox = {
            memorySize = 1024;
            headless = true;

            sharedFolders.${app.name} = {
              hostPath = toString ../.;
              readOnly = false;
            };
          };
        };

        fileSystems.${appDir} = {
          device = app.name;
          fsType = "vboxsf";
          options = [ "uid=${toString uid}" "gid=${toString uid}" ];
        };

        virtualisation.virtualbox.guest.enable = true;
      }

      {
        networking.firewall = {
          enable = true;
          allowedTCPPorts = [ 8080 ];
          allowPing = true;
        };

        systemd.services.vue-server = {
          description = "Vue Development Server";
          after = [ "network.target" ];
          wantedBy = [ "multi-user.target" ];
          path = with pkgs; [ bash ];
          environment = {
            NODE_ENV = "development";
          };
          serviceConfig = {
            ExecStart = ''
              ${app.nodejs pkgs}/bin/npm --prefix ${appDir} --scripts-prepend-node-path=true run serve
            '';
            User = user;
            Restart = "always";
          };
        };

        users = {
          groups.${user} = {
            gid = uid;
          };

          users.${user} = {
            inherit uid;
            createHome = true;
            group = user;
            home = "/home/${user}";
            isSystemUser = true;
            useDefaultShell = true;
          };
        };
      }
    ];
}
