let
  pkgs = import ./nixops/nixpkgs.nix;
  app = import ./nixops/app.nix;
in

pkgs.mkShell {
  name = "betting-game-frontend";

  buildInputs = [
    (app.nodejs pkgs)
    pkgs.git-crypt
    pkgs.nodePackages.node2nix
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin:$PATH"
  '';
}
