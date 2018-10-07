import { Type_isEqual, Type_is } from './files/Type.js';
import { String_trim, String_transCase } from './files/String.js';
import { RegExp_isInteger, RegExp_isFloat, RegExp_isPhone, RegExp_isTel, RegExp_isChinese, RegExp_isEmail, RegExp_isID, 
  RegExp_isUrl, RegExp_isPC, RegExp_thousandMark, RegExp_browserType, RegExp_allowInteger, RegExp_allowFloat } from './files/RegExp.js';

var sUtils = {
  Type_isEqual,
  Type_is,
  String_trim,
  String_transCase,
  RegExp_isInteger,
  RegExp_isFloat,
  RegExp_isPhone,
  RegExp_isTel,
  RegExp_isChinese,
  RegExp_isEmail,
  RegExp_isID,
  RegExp_isUrl,
  RegExp_isPC,
  RegExp_thousandMark,
  RegExp_browserType,
  RegExp_allowInteger,
  RegExp_allowFloat
}

export { Type_isEqual,  Type_is, String_trim, String_transCase, RegExp_isInteger, RegExp_isFloat, RegExp_isPhone, RegExp_isTel, RegExp_isChinese, 
  RegExp_isEmail, RegExp_isID, RegExp_isUrl, RegExp_isPC, RegExp_thousandMark, RegExp_browserType, RegExp_allowInteger, RegExp_allowFloat }

export default sUtils
