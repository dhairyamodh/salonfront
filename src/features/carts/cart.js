import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CartPopupBody,
  PopupHeader,
  PopupItemCount,
  CloseButton,
  PromoCode,
  CheckoutButtonWrapper,
  CheckoutButton,
  Title,
  PriceBox,
  NoProductMsg,
  NoProductImg,
  ItemWrapper,
  CouponBoxWrapper,
  CouponCode,
} from './cart.style';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { ShoppingBagLarge } from 'assets/icons/ShoppingBagLarge';
import { NoCartBag } from 'assets/icons/NoCartBag';
import { FormattedMessage } from 'react-intl';

import { Scrollbar } from 'components/scrollbar/scrollbar';
import {

  addItem,
  removeItem,
  removeItemFromCart,
  cartItemsTotalPrice
} from 'redux/actions/cartActions'
import { CartItem } from 'components/cart-item/cart-item';
import { useDispatch, useSelector } from 'react-redux';


const Cart = ({
  style,
  className,
  onCloseBtnClick,
  scrollbarHeight,
}) => {

  const history = useHistory()
  const { currencySymbol: CURRENCY } = useSelector(state => state.shop.salonData)
  const cart = useSelector(state => state.cart.items)
  const calculatePrice = () =>
    cartItemsTotalPrice(cart).toFixed(2);
  const dispatch = useDispatch()
  const cartItemsCount = cart.length
  return (
    <CartPopupBody className={className} style={style}>
      <PopupHeader>
        <PopupItemCount>
          <ShoppingBagLarge width='19px' height='24px' />
          <span>
            {cartItemsCount}
            &nbsp;
            {cartItemsCount > 1 ? (
              <FormattedMessage id='cartItems' defaultMessage='items' />
            ) : (
              <FormattedMessage id='cartItem' defaultMessage='item' />
            )}
          </span>
        </PopupItemCount>

        <CloseButton onClick={onCloseBtnClick}>
          <CloseIcon />
        </CloseButton>
      </PopupHeader>

      <Scrollbar className='cart-scrollbar'>
        <ItemWrapper className='items-wrapper'>
          {!!cartItemsCount ? (
            cart.map((item) => (
              <CartItem
                key={`cartItem-${item.id}`}
                onIncrement={() => dispatch(addItem(item))}
                onDecrement={() => dispatch(removeItem(item))}
                onRemove={() => dispatch(removeItemFromCart(item))}
                data={item}
              />
            ))
          ) : (
            <>
              <NoProductImg>
                <NoCartBag />
              </NoProductImg>
              <NoProductMsg>
                <FormattedMessage
                  id='noProductFound'
                  defaultMessage='No services found'
                />
              </NoProductMsg>
            </>
          )}
        </ItemWrapper>
      </Scrollbar>

      <CheckoutButtonWrapper>


        {cartItemsCount !== 0 ? (
          <a onClick={() => history.push('/booking')}>
            <CheckoutButton onClick={onCloseBtnClick}>
              <>
                <Title>
                  <FormattedMessage
                    id='nav.checkoutButton'
                    defaultMessage='Continue'
                  />
                </Title>
                <PriceBox>
                  {CURRENCY}&nbsp;{calculatePrice()}
                </PriceBox>
              </>
            </CheckoutButton>
          </a>
        ) : (
          <CheckoutButton>
            <>
              <Title>
                <FormattedMessage id='nav.checkoutButton' defaultMessage='Checkout' />
              </Title>
              <PriceBox>
                {CURRENCY}&nbsp;{calculatePrice()}
              </PriceBox>
            </>
          </CheckoutButton>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default Cart;
