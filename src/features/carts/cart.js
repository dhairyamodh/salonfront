import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { CURRENCY } from 'utils/constant';
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

  const [hasCoupon, setCoupon] = useState(false);
  const { isRtl } = useSelector(state => state.app);
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
                  defaultMessage='No products found'
                />
              </NoProductMsg>
            </>
          )}
        </ItemWrapper>
      </Scrollbar>

      <CheckoutButtonWrapper>


        {cartItemsCount !== 0 ? (
          <Link to='/checkout'>
            <CheckoutButton onClick={onCloseBtnClick}>
              <>
                <Title>
                  <FormattedMessage
                    id='nav.checkout'
                    defaultMessage='Checkout'
                  />
                </Title>
                <PriceBox>
                  {CURRENCY}
                  {calculatePrice()}
                </PriceBox>
              </>
            </CheckoutButton>
          </Link>
        ) : (
          <CheckoutButton>
            <>
              <Title>
                <FormattedMessage id='nav.checkout' defaultMessage='Checkout' />
              </Title>
              <PriceBox>
                {CURRENCY}
                {calculatePrice()}
              </PriceBox>
            </>
          </CheckoutButton>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default Cart;
