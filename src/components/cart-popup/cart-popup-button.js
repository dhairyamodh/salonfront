import React from 'react';
import {
  CartPopupButtonStyled,
  ButtonImgBox,
  ItemCount,
  PriceBox,
  CartPopupBoxButton,
  PriceBoxAlt,
  TotalItems,
} from './cart-popup.style';
import { ShoppingBag } from 'assets/icons/ShoppingBag';
import { useSelector } from 'react-redux';


const CartPopupButton = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className,
}) => (
  <CartPopupButtonStyled style={style} onClick={onClick} className={className}>
    <ButtonImgBox>
      <ShoppingBag />
    </ButtonImgBox>
    <ItemCount>
      {itemCount} {itemPostfix}
    </ItemCount>
    <PriceBox>
      {pricePrefix}
      {/* {price} */}
      {parseFloat(`${price}`).toFixed(2)}
    </PriceBox>
  </CartPopupButtonStyled>
);



export const BoxedCartButton = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix,
  style,
  onClick,
  className,
}) => (
  <CartPopupBoxButton style={style} onClick={onClick} className={className}>
    <TotalItems>
      <ShoppingBag />
      {itemCount} {itemPostfix}
    </TotalItems>
    <PriceBoxAlt>
      {pricePrefix} {parseFloat(`${price}`).toFixed(2)}
    </PriceBoxAlt>
  </CartPopupBoxButton>
);

export default CartPopupButton;
