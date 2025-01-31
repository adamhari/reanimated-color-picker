import * as colorConversion from './colorConversion';
import * as colorInformation from './colorInformation';
import * as colorManipulation from './colorManipulation';
import * as colorUtilities from './colorUtilities';

const colorKit = { ...colorConversion, ...colorInformation, ...colorManipulation, ...colorUtilities };
export default colorKit;
