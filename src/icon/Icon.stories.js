import React from 'react';

import Icon from './Icon';
import IconsStore from '../icon/IconsStore';
import Icons from '../assets/fonts';
import { COLORS } from '../base/Colors';

export default {
  title: 'Icon',
  component: Icon,
  args: {
    icon: new IconsStore(Icons).getIcon('upload'),
    width: 16,
    color: COLORS.PRIMARY_BLUE
  }
};

const Template = args => <Icon {...args} />;

export const UploadIcon = Template.bind({});  
