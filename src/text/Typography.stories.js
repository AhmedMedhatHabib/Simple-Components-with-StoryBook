import React from 'react';

import Text from './Text';
import { Heading, Subheading, Title, Caption } from './BackwardTypography';
import { COLORS, COLORS_VALUES } from '../base/Colors';

export default {
  title: 'Typography',
  component: Text,
};

export const Typography = () => (
  <>
    <Title color={COLORS_VALUES[COLORS.HELP_TEXT]}>Title</Title>
    <Heading color={COLORS_VALUES[COLORS.PRIMARY_BLUE]}>Heading</Heading>
    <Subheading color={COLORS_VALUES[COLORS.TEXT]}>Subheading</Subheading>
    <Caption color={COLORS_VALUES[COLORS.BORDER]}>Caption</Caption>
  </>
);
