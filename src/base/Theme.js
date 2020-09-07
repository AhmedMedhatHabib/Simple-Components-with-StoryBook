import { COLORS_VALUES as colors } from './Colors';
import media from './Media';
import space from './Space';
import {
  FONT_SIZES as fontSizes,
  LINE_HEIGHTS as lineHeights,
  FONT_WEIGHTS as fontWeights,
} from './Typography';

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
};

const theme = {
  media,
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  space,
};

export default theme;
