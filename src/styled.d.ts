import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      default: string;
      primary: string;
      secondary: string;
    };
  }
}
