type Numbertypes = 'all' | '+' | '-';
type Thousandmark = '+' | '-';

declare module 'simple-utis-tiny' {
  /* is integer */
  export function rgIsInteger (number: any, type?: Numbertypes): boolean;

  /* is float */
  export function rgIsFloat (number: any, type?: Numbertypes): boolean;

  /* is phone */
  export function rgIsPhone (string: any): boolean;

  /* is tel */
  export function rgIsTel (string: any): boolean;

  /* is tel or mobile */
  export function rgIsTelOrMobile (string: any): boolean;

  /* is chinese */
  export function rgIsChinese (string: any): boolean;

  /* is email */
  export function rgIsEmail (string: any): boolean;

  /* is id card */
  export function rgIsID (string: any): boolean;

  /* is url */
  export function rgIsUrl (string: any): boolean;

  /* is pc */
  export function rgIsPC (string: any): boolean;

  /* tes current browser type */
  export function rgBrowserType (test360?: boolean): string;

  /* add or delete thousand mark */
  export function rgThousandMark (string: any, type?: Thousandmark): string;

  /* allow inputing integer */
  export function rgAllowInteger (string: string | number, length?: number, type?: Numbertypes): string;

  /* allow inputing float */
  export function rgAllowFloat (string: string | number, floatLength?: number, type?: Numbertypes, integerLength?: number): string;

}
