import React from "react";
import { Counter } from "components/counter/counter";
import { CloseIcon } from "assets/icons/CloseIcon";
import { CURRENCY } from "utils/constant";
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Weight,
  Total,
  RemoveButton,
} from "./cart-item.style";
import { ServerUrl } from "../../constants";


export const CartItem = ({
  data,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  const { title, imageSrc, price, quantity } = data;
  return (
    <ItemBox>
      <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant="lightVertical"
      />
      <Image src={ServerUrl + imageSrc} />
      <Information>
        <Name>{title}</Name>
        <Price>
          {CURRENCY}
          {price}
        </Price>
        <Weight>
          {quantity} X {price}
        </Weight>
      </Information>
      <Total>
        {CURRENCY}
        {(quantity * price).toFixed(2)}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};
