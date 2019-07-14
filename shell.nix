let
  pkgs = import ./nixops/nixpkgs.nix;
  app = import ./nixops/app.nix;
  nodejs = app.nodejs pkgs;
in

pkgs.mkShell {
  name = "betting-game-frontend";

  buildInputs = [
    nodejs
    pkgs.git-crypt
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin:$PATH"

    mkdir -p .env-bins
    ln -snf ${nodejs}/bin/node .env-bins/node
    ln -snf ${nodejs}/bin/npm .env-bins/npm
  '';
}
