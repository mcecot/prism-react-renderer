// @flow
// Converted automatically using ./tools/themeFromVsCode

import type { PrismTheme } from "../types";

var theme: PrismTheme = {
  plain: {
    backgroundColor: "#002b36"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(101, 123, 131)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string"],
      style: {
        color: "rgb(42, 161, 152)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(211, 54, 130)"
      }
    },
    {
      types: ["variable", "function", "tag"],
      style: {
        color: "rgb(38, 139, 210)"
      }
    },
    {
      types: ["class-name", "keyword", "char", "constant", "changed"],
      style: {
        color: "rgb(203, 75, 22)"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "rgb(133, 153, 0)"
      }
    },
    {
      types: ["builtin"],
      style: {
        color: "rgb(181, 137, 0)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(147, 161, 161)"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(220, 50, 47)"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(33, 145, 134)"
      }
    }
  ]
};

module.exports = theme;
