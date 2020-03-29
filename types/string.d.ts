type Trimtypes = 'all' | 'left' | 'right' | 'around' | 'middle';
type Transcases = 'capitalize' | 'upper' | 'lower';
type Lettertypes = 'upper' | 'lower';

declare module 'simple-utils-tiny' {
  /* trim space */
  export function stringTrim (string: string, type?: Trimtypes): string;

  /* transform word */
  export function stringTransCase (string: string, type?: Transcases): string;

  /* generate random color */
  export function stringColor (isRgb?: boolean): string;

  /* transform 16 color to rgb */
  export function stringColor16ToRgb (string: string): string;

  /* transform rgb to 16 color */
  export function stringColorRgbTo16 (string: string): string;

  /* transform number value to word value */
  export function stringNumToLetter (length: number, type?: Lettertypes): string;
}
