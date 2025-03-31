import { rem } from "./helpers";

/*
 pedi pro chat gpt me ensinar sobre padroes de tipografia e o chat trouxe que existe uma escala com Minor Third, Major Third, Perfect Fourth, Golden Ratio e eu estou considerando a escala 1.25 Major Third e tirei os tamanhos desse site https://typescale.com/
*/

export const DefaultAppFonts = {
  body: {
    p: {
      base: rem(1),
    },
  },
  title: {
    h6: {
      base: rem(1.25),
    },
    h5: {
      base: rem(1.563),
    },
    h4: {
      base: rem(1.953),
    },
    h3: {
      base: rem(2.441),
    },
    h2: {
      base: rem(3.052),
    },
    h1: {
      base: rem(3.815),
    },
  },
};
