import React from 'react';

import Spinner from './Spinner';
import { COLORS, COLORS_VALUES } from '../base/Colors';

export default {
  title: 'Spinner',
  component: Spinner,
};

export const LoadingSpinners = () => (
  <>
    <Spinner radius={8} color={COLORS_VALUES[COLORS.DANGER]} ml={2} mr={2} />
    <Spinner radius={16} color={COLORS_VALUES[COLORS.HELP_TEXT]} ml={2} mr={2} />
    <Spinner radius={32} color={COLORS_VALUES[COLORS.BORDER]} ml={2} mr={2} />
    <Spinner radius={64} color={COLORS_VALUES[COLORS.PRIMARY_BLUE]} ml={2} mr={2} />
    <Spinner radius={128} color={COLORS_VALUES[COLORS.WARNING]} ml={2} mr={2} />
    <Spinner radius={256} color={COLORS_VALUES[COLORS.TEXT]} ml={2} mr={2} />
  </>
);
