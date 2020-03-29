type Numbertypes = 'all' | '+' | '-';
type Thousandmark = '+' | '-';
type Trimtypes = 'all' | 'left' | 'right' | 'around' | 'middle';
type Transcases = 'capitalize' | 'upper' | 'lower';
type Lettertypes = 'upper' | 'lower';

export as namespace sUtils;
export = sUtils;

/* two object value is equal */
declare function typeIsEqual (target1: object, target2: object): boolean;
/* judge this target type */
declare namespace typeIs {
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
declare function stringTrim (string: string, type?: Trimtypes): string;

/* transform word */
declare function stringTransCase (string: string, type?: Transcases): string;

/* generate random color */
declare function stringColor (isRgb?: boolean): string;

/* transform 16 color to rgb */
declare function stringColor16ToRgb (string: string): string;

/* transform rgb to 16 color */
declare function stringColorRgbTo16 (string: string): string;

/* transform number value to word value */
declare function stringNumToLetter (length: number, type?: Lettertypes): string;



/* is integer */
declare function rgIsInteger (number: any, type?: Numbertypes): boolean;

/* is float */
declare function rgIsFloat (number: any, type?: Numbertypes): boolean;

/* is phone */
declare function rgIsPhone (string: any): boolean;

/* is tel */
declare function rgIsTel (string: any): boolean;

/* is tel or mobile */
declare function rgIsTelOrMobile (string: any): boolean;

/* is chinese */
declare function rgIsChinese (string: any): boolean;

/* is email */
declare function rgIsEmail (string: any): boolean;

/* is id card */
declare function rgIsID (string: any): boolean;

/* is url */
declare function rgIsUrl (string: any): boolean;

/* is pc */
declare function rgIsPC (string: any): boolean;

/* tes current browser type */
declare function rgBrowserType (test360?: boolean): string;

/* add or delete thousand mark */
declare function rgThousandMark (string: any, type?: Thousandmark): string;

/* allow inputing integer */
declare function rgAllowInteger (string: string | number, length?: number, type?: Numbertypes): string;

/* allow inputing float */
declare function rgAllowFloat (string: string | number, floatLength?: number, type?: Numbertypes, integerLength?: number): string;
