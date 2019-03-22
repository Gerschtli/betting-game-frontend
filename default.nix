let
  pkgs = import ./nixops/nixpkgs.nix;
  app = import ./nixops/app.nix;
  nodejs = app.nodejs pkgs;

  nodePackages = import ./composition.nix {
    inherit pkgs nodejs;
  };

  overriddenPackages = nodePackages // {
    package = nodePackages.package.override {
      src = builtins.filterSource
        (path: type: type != "directory" || baseNameOf path != "node_modules")
        ./.;
    };
  };
in

pkgs.stdenv.mkDerivation rec {
  name = "betting-game-frontend";
  src = overriddenPackages.package;

  buildInputs = [ pkgs.bash ];

  buildPhase = ''
    ${nodejs}/bin/npm --prefix lib/node_modules/${name} run build
  '';

  installPhase = ''
    mkdir $out
    cp -R lib/node_modules/${name}/dist $out
  '';
}
