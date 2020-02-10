import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;

    colors: {
      default: string;
      primary: string;
      white: string;
      green: string;
      secondary: string;
      red: string;
    };
  }
}
