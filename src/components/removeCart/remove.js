import React from 'react';
import { Plus, Minus } from 'assets/icons/PlusMinus';
import { RemoveBox, RemoveButton, CounterValue } from './remove.style';
import { CloseIcon } from "assets/icons/CloseIcon";

export const Remove = ({
  onDecrement,
  onIncrement,
  value,
  variant,
  className,
  base,
  isIcon
}) => {
  return (
    // <RemoveBox variant={variant} className={className}>
    <RemoveButton
      onClick={onDecrement}
      variant={variant}
      base={base}
      className='control-button'
    >
      {isIcon && <CloseIcon style={{ marginRight: 10 }} />}
      <span>Remove Service</span>
    </RemoveButton>
    // </RemoveBox>
  );
};
