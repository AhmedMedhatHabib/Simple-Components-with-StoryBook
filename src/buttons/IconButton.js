import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  width,
  height,
  minHeight,
  minWidth,
  color,
  border,
  borderColor,
  space,
} from 'styled-system';

import Icon, { iconPropTypes } from '../icon/Icon';
import { COLORS, COLORS_VALUES } from '../base/Colors';

const StyledButton = styled.button`
  ${height};
  ${minHeight};
  ${width};
  ${minWidth};
  ${border};
  ${borderColor};
  ${color};
  ${space};
  border-radius: 50%;
  outline: none;
  align-items: center;
  display: flex;
  justify-content: center;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

const IconButton = props => {
  const [iconColor, setIconColor] = useState(
    props.disabled ? COLORS_VALUES[COLORS.WHITE] : COLORS_VALUES[COLORS.PRIMARY_BLUE]
  );
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState(
    props.disabled ? COLORS_VALUES[COLORS.DISABLED] : COLORS_VALUES[COLORS.WHITE]
  );

  const buttonBorderColor = props.disabled ? COLORS_VALUES[COLORS.DISABLED] : COLORS_VALUES[COLORS.PRIMARY_BLUE];

  const onMouseOver = () => {
    changeButtonColors({
      iconColor: COLORS_VALUES[COLORS.WHITE],
      buttonBackgroundColor: COLORS_VALUES[COLORS.PRIMARY_BLUE],
    });
  };

  const onMouseOut = () => {
    changeButtonColors({
      iconColor: COLORS_VALUES[COLORS.PRIMARY_BLUE],
      buttonBackgroundColor: COLORS_VALUES[COLORS.WHITE],
    });
  };

  const changeButtonColors = ({ iconColor, buttonBackgroundColor }) => {
    // If the button is disabled no more to update the state
    const { disabled } = props;
    if (disabled) {
      return;
    }

    setIconColor(iconColor);
    setButtonBackgroundColor(buttonBackgroundColor);
  };

  const { radius, icon } = props;
  return (
    <StyledButton
      {...props}
      height={radius}
      minHeight={radius}
      width={radius}
      minWidth={radius}
      borderColor={buttonBorderColor}
      bg={buttonBackgroundColor}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
    >
      <Icon icon={icon} width={16} color={iconColor} />
    </StyledButton>
  );
}

export default IconButton;

IconButton.propTypes = {
  radius: PropTypes.number,
  disabled: PropTypes.bool,
  icon: iconPropTypes.isRequired,
};

IconButton.defaultProps = {
  radius: 40,
  disabled: false,
};