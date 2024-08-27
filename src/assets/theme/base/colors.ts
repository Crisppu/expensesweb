/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * The base colors for the Soft UI Dashboard React.
 * You can add new color using this file.
 * You can customized the colors for the entire Soft UI Dashboard React using thie file.
 */

interface Colors {
  background: {
    default: string;
  };
  text: {
    main: string;
    focus: string;
  };
  transparent: {
    main: string;
  };
  white: {
    main: string;
    focus: string;
  };
  black: {
    light: string;
    main: string;
    focus: string;
  };
  primary: {
    main: string;
    focus: string;
  };
  secondary: {
    main: string;
    focus: string;
  };
  info: {
    main: string;
    focus: string;
  };
  success: {
    main: string;
    focus: string;
  };
  warning: {
    main: string;
    focus: string;
  };
  error: {
    main: string;
    focus: string;
  };
  light: {
    main: string;
    focus: string;
  };
  dark: {
    main: string;
    focus: string;
  };
  grey: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  gradients: {
    primary: {
      main: string;
      state: string;
    };
    secondary: {
      main: string;
      state: string;
    };
    info: {
      main: string;
      state: string;
    };
    success: {
      main: string;
      state: string;
    };
    warning: {
      main: string;
      state: string;
    };
    error: {
      main: string;
      state: string;
    };
    light: {
      main: string;
      state: string;
    };
    dark: {
      main: string;
      state: string;
    };
  };
  socialMediaColors: {
    facebook: {
      main: string;
      dark: string;
    };
    twitter: {
      main: string;
      dark: string;
    };
    instagram: {
      main: string;
      dark: string;
    };
    linkedin: {
      main: string;
      dark: string;
    };
    pinterest: {
      main: string;
      dark: string;
    };
    youtube: {
      main: string;
      dark: string;
    };
    vimeo: {
      main: string;
      dark: string;
    };
    slack: {
      main: string;
      dark: string;
    };
    dribbble: {
      main: string;
      dark: string;
    };
    github: {
      main: string;
      dark: string;
    };
    reddit: {
      main: string;
      dark: string;
    };
    tumblr: {
      main: string;
      dark: string;
    };
  };
  alertColors: {
    primary: {
      main: string;
      state: string;
      border: string;
    };
    secondary: {
      main: string;
      state: string;
      border: string;
    };
    info: {
      main: string;
      state: string;
      border: string;
    };
    success: {
      main: string;
      state: string;
      border: string;
    };
    warning: {
      main: string;
      state: string;
      border: string;
    };
    error: {
      main: string;
      state: string;
      border: string;
    };
    light: {
      main: string;
      state: string;
      border: string;
    };
    dark: {
      main: string;
      state: string;
      border: string;
    };
  };
  badgeColors: {
    primary: {
      background: string;
      text: string;
    };
    secondary: {
      background: string;
      text: string;
    };
    info: {
      background: string;
      text: string;
    };
    success: {
      background: string;
      text: string;
    };
    warning: {
      background: string;
      text: string;
    };
    error: {
      background: string;
      text: string;
    };
    light: {
      background: string;
      text: string;
    };
    dark: {
      background: string;
      text: string;
    };
  };
  inputColors: {
    borderColor: {
      main: string;
      focus: string;
    };
    boxShadow: string;
    error: string;
    success: string;
  };
  sliderColors: {
    thumb: {
      borderColor: string;
    };
  };
  circleSliderColors: {
    background: string;
  };
  tabs: {
    indicator: {
      boxShadow: string;
    };
  };
}



const colors: Colors = {
  primary: {
    main: "#cb0c9f",
    focus: "#cb0c9f",
  },
  secondary: {
    main: "#8392ab",
    focus: "#8392ab",
  },
  error: {
    main: "#ea0606",
    focus: "#ea0606",
  },
  warning: {
    main: "#fbcf33",
    focus: "#fbcf33",
  },
  info: {
    main: "#17c1e8",
    focus: "#17c1e8",
  },
  success: {
    main: "#82d616",
    focus: "#82d616",
  },
  background: {
    default: "#f8f9fa",
  },
  text: {
    main: "#67748e",
    focus: "#67748e",
  },
  // Propiedades adicionales de PaletteOptions(se configuran de forma opcional):

  transparent: {
    main: "transparent",
  },
  white: {
    main: "#ffffff",
    focus: "#ffffff",
  },
  black: {
    light: "#141414",
    main: "#000000",
    focus: "#000000",
  },
  light: {
    main: "#e9ecef",
    focus: "#e9ecef",
  },
  dark: {
    main: "#344767",
    focus: "#344767",
  },
  grey: {
    100: "#f8f9fa",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },
  gradients: {
    primary: {
      main: "#7928ca",
      state: "#ff0080",
    },
    secondary: {
      main: "#627594",
      state: "#a8b8d8",
    },
    info: {
      main: "#2152ff",
      state: "#21d4fd",
    },
    success: {
      main: "#17ad37",
      state: "#98ec2d",
    },
    warning: {
      main: "#f53939",
      state: "#fbcf33",
    },
    error: {
      main: "#ea0606",
      state: "#ff667c",
    },
    light: {
      main: "#ced4da",
      state: "#ebeff4",
    },
    dark: {
      main: "#141727",
      state: "#3a416f",
    },
  },
  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },
    twitter: {
      main: "#55acee",
      dark: "#3ea1ec",
    },
    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },
    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },
    pinterest: {
      main: "#cc2127",
      dark: "#b21d22",
    },
    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },
    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },
    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },
    dribbble: {
      main: "#ea4c89",
      dark: "#e73177",
    },
    github: {
      main: "#24292e",
      dark: "#171a1d",
    },
    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },
    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },
  alertColors: {
    primary: {
      main: "#7928ca",
      state: "#d6006c",
      border: "#efb6e2",
    },
    secondary: {
      main: "#627594",
      state: "#8ca1cb",
      border: "#dadee6",
    },
    info: {
      main: "#2152ff",
      state: "#02c6f3",
      border: "#b9ecf8",
    },
    success: {
      main: "#17ad37",
      state: "#84dc14",
      border: "#daf3b9",
    },
    warning: {
      main: "#f53939",
      state: "#fac60b",
      border: "#fef1c2",
    },
    error: {
      main: "#ea0606",
      state: "#ff3d59",
      border: "#f9b4b4",
    },
    light: {
      main: "#ced4da",
      state: "#d1dae6",
      border: "#f8f9fa",
    },
    dark: {
      main: "#141727",
      state: "#2c3154",
      border: "#c2c8d1",
    },
  },
  badgeColors: {
    primary: {
      background: "#f883dd",
      text: "#a3017e",
    },
    secondary: {
      background: "#e4e8ed",
      text: "#5974a2",
    },
    info: {
      background: "#abe9f7",
      text: "#08a1c4",
    },
    success: {
      background: "#cdf59b",
      text: "#67b108",
    },
    warning: {
      background: "#fef5d3",
      text: "#fbc400",
    },
    error: {
      background: "#fc9797",
      text: "#bd0000",
    },
    light: {
      background: "#ffffff",
      text: "#c7d3de",
    },
    dark: {
      background: "#8097bf",
      text: "#1e2e4a",
    },
  },
  inputColors: {
    borderColor: { main: "#d2d6da", focus: "#35d1f5" },
    boxShadow: "#81e3f9",
    error: "#fd5c70",
    success: "#66d432",
  },
  sliderColors: {
    thumb: { borderColor: "#d9d9d9" },
  },
  circleSliderColors: {
    background: "#d3d3d3",
  },
  tabs: {
    indicator: { boxShadow: "#ddd" },
  },
};

export default colors;