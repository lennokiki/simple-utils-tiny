import { typeIsEqual, typeIs } from './files/type.js';
import { stringTrim, stringTransCase } from './files/string.js';
import { rgIsInteger, rgIsFloat, rgIsPhone, rgIsTel, rgIsTelOrMobile, rgIsChinese, rgIsEmail, rgIsID,
  rgIsUrl, rgIsPC, rgThousandMark, rgBrowserType, rgAllowInteger, rgAllowFloat } from './files/regexp.js';

var sUtils = {
  typeIsEqual,
  typeIs,
  stringTrim,
  stringTransCase,
  rgIsInteger,
  rgIsFloat,
  rgIsPhone,
  rgIsTel,
  rgIsChinese,
  rgIsTelOrMobile,
  rgIsEmail,
  rgIsID,
  rgIsUrl,
  rgIsPC,
  rgThousandMark,
  rgBrowserType,
  rgAllowInteger,
  rgAllowFloat
}

export { typeIsEqual, typeIs, stringTrim, stringTransCase, rgIsInteger, rgIsFloat, rgIsPhone, rgIsTel, rgIsChinese,
  rgIsEmail, rgIsID, rgIsUrl, rgIsPC, rgThousandMark, rgBrowserType, rgAllowInteger, rgAllowFloat, rgIsTelOrMobile }

export default sUtils
