with import <nixpkgs> { };

stdenv.mkDerivation {
  name = "betting-game-frontend";

  buildInputs = [ nodejs-10_x ];
}
