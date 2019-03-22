with import ./nixops/nixpkgs.nix;

stdenv.mkDerivation rec {
  name = "betting-game-frontend";
  src = ./dist;

  noBuild = true;

  installPhase = ''
    mkdir $out
    cp -R . $out
  '';
}
