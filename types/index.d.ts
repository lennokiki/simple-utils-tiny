type Numbertypes = 'all' | '+' | '-';
type Thousandmark = '+' | '-';
type Trimtypes = 'all' | 'left' | 'right' | 'around' | 'middle';
type Transcases = 'capitalize' | 'upper' | 'lower';
type Lettertypes = 'upper' | 'lower';

export as namespace sUtils;

/* two object value is equal */
export declare function typeIsEqual (target1: object, target2: object): boolean;
/* judge this target type */
export declare namespace typeIs {
  /* string */
  function isString (targert: any): boolean;
  /* is number */
  function isNumber (targert: any): boolean;
  /* is function */
  function isFunction (targert: any): boolean;
  /* is boolean */
  function isBoolean (targert: any): boolean;
  /*  is object */
  function isObject (targert: any): boolean;
  /* is array */
  function isArray (targert: any): boolean;
  /* is regexp */
  function isRegExp (targert: any): boolean;
  /* is arguments */
  function isArguments (targert: any): boolean;
  /* is date */
  function isDate (targert: any): boolean;
  /* is symbol */
  function isSymbol (targert: any): boolean;
  /* is error */
  function isError (targert: any): boolean;
  /* is promise */
  function isPromise (targert: any): boolean;
  /* is set */
  function isSet (targert: any): boolean;
}


/* trim space */
export declare function stringTrim (string: string, type?: Trimtypes): string;

/* transform word */
export declare function stringTransCase (string: string, type?: Transcases): string;

/* generate random color */
export declare function stringColor (isRgb?: boolean): string;

/* transform 16 color to rgb */
export declare function stringColor16ToRgb (string: string): string;

/* transform rgb to 16 color */
export declare function stringColorRgbTo16 (string: string): string;

/* transform number value to word value */
export declare function stringNumToLetter (length: number, type?: Lettertypes): string;



/* is integer */
export declare function rgIsInteger (number: any, type?: Numbertypes): boolean;

/* is float */
export declare function rgIsFloat (number: any, type?: Numbertypes): boolean;

/* is phone */
export declare function rgIsPhone (string: any): boolean;

/* is tel */
export declare function rgIsTel (string: any): boolean;

/* is tel or mobile */
export declare function rgIsTelOrMobile (string: any): boolean;

/* is chinese */
export declare function rgIsChinese (string: any): boolean;

/* is email */
export declare function rgIsEmail (string: any): boolean;

/* is id card */
export declare function rgIsID (string: any): boolean;

/* is url */
export declare function rgIsUrl (string: any): boolean;

/* is pc */
export declare function rgIsPC (string: any): boolean;

/* tes current browser type */
export declare function rgBrowserType (test360?: boolean): string;

/* add or delete thousand mark */
export declare function rgThousandMark (string: any, type?: Thousandmark): string;

/* allow inputing integer */
export declare function rgAllowInteger (string: string | number, length?: number, type?: Numbertypes): string;

/* allow inputing float */
export declare function rgAllowFloat (string: string | number, floatLength?: number, type?: Numbertypes, integerLength?: number): string;
