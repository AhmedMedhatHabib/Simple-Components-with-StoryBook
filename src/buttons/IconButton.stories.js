import React from 'react';

import IconButton from './IconButton';
import IconsStore from '../icon/IconsStore';
import Icons from '../assets/fonts';

export default {
    title: 'buttons/Icon Button',
    component: IconButton,
    args: {
      icon: new IconsStore(Icons).getIcon('upload'),
      iconWidth: 15,
      onClick: () => {},
      border: "1px solid",
    }
};

const Template = args => <IconButton {...args} />;

export const ActiveIconButton = Template.bind({});          

export const DisabledIconButton = Template.bind({});            
DisabledIconButton.args = {
  disabled: true,
};
