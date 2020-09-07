import React from 'react';

import Button from './Button';
import { COLORS } from '../base/Colors';
import IconsStore from '../icon/IconsStore';
import Icons from '../assets/fonts';

export default {
    title: 'buttons/Button',
    component: Button,
    args: {
      primary: true,
      color: COLORS.PRIMARY_BLUE,
      isLoading: false,
      onClick: () => {},
      children: 'Button'
    }
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});      

export const Secondary = Template.bind({});       
Secondary.args = {
  primary: false,
};

export const Success = Template.bind({}); 
Success.args = {
  primary: false,
  color: COLORS.SUCCESS,
};

export const Danger = Template.bind({});      
Danger.args = {
  color: COLORS.PRIMARY_RED,
};

export const DisabledPrimary = Template.bind({});          
DisabledPrimary.args = {
  disabled: true,
};

export const DisabledSecondary = Template.bind({});         
DisabledSecondary.args = {
  primary: false,
  disabled: true,
};

export const LoadingPrimary = Template.bind({});
LoadingPrimary.args = {
  isLoading: true,
};

export const LoadingSecondary = Template.bind({});
LoadingSecondary.args = {
  primary: false,
  isLoading: true,
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  icon: new IconsStore(Icons).getIcon('upload'),
};

export const ReversedButtonWithIcon = Template.bind({});
ReversedButtonWithIcon.args = {
  icon: new IconsStore(Icons).getIcon('upload'),
  reverse: true,
};
