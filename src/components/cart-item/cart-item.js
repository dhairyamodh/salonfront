import React from "react";
import { Counter } from "components/counter/counter";
import { CloseIcon } from "assets/icons/CloseIcon";
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
import { useSelector } from "react-redux";


export const CartItem = ({
  data,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  const { currencySymbol: CURRENCY } = useSelector(state => state.shop.salonData)
  const { name, categoryName, imageSrc, salePrice, quantity } = data;
  return (
    <ItemBox>
      {/* <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant="lightVertical"
      /> */}
      <Image src={ServerUrl + imageSrc} />
      <Information>
        <Name>{name}</Name>
        <Weight>{categoryName}</Weight>
        {/* <Price>
          {CURRENCY}
          {salePrice}
        </Price> */}
        {/* <Weight>
          {quantity} X {salePrice}
        </Weight> */}
      </Information >
      <Total>
        {CURRENCY} {(quantity * salePrice).toFixed(2)}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox >
  );
};
