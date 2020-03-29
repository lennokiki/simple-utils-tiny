declare module "simple-utils-tiny" {
  /* two object value is equal */
  export function typeIsEqual (target1: object, target2: object): boolean;
  /* judge this target type */
  export namespace typeIs {
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
}
