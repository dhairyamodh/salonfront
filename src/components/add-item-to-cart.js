import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Counter } from './counter/counter';
import { variant as _variant } from 'styled-system';
import { Box } from './box';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, } from '../redux/actions/cartActions'
import { cartAnimation } from '../utils/cart-animation';
const Icon = styled.span(
  _variant({
    variants: {
      full: {
        px: 3,
        height: 36,
        backgroundColor: '#e6e6e6',
        display: 'flex',
        transition: '0.35s ease-in-out',
        alignItems: 'center',
      },
    },
  })
);
const Button = styled.button(
  css({
    width: 36,
    height: 36,
    borderRadius: 6,
    transition: '0.35s ease-in-out',
    backgroundColor: '#fff',
    border: '1px solid',
    borderColor: '#e6e6e6',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'primary.regular',
      borderColor: 'primary.regular',
      color: '#fff',
    },
  }),
  _variant({
    variants: {
      full: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        padding: 0,
        border: 'none',
        overflow: 'hidden',
        ':hover': {
          backgroundColor: 'primary.hover',
          borderColor: 'primary.hover',
          color: '#fff',
          [Icon]: {
            backgroundColor: 'primary.regular',
            color: '#fff',
          },
        },
      },
    },
  })
);

export const AddItemToCart = ({ data, variant, buttonText }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.items)
  const isInCart = (id) => {
    return cart?.some((item) => item.id === id);
  };
  const getItem = (id) => {
    return cart?.find((item) => item.id === id);
  };
  const handleAddClick = (e) => {
    e.stopPropagation();
    dispatch(addItem(data))
    if (!isInCart(data.id)) {
      cartAnimation(e);
    }
  };
  const handleRemoveClick = (e) => {
    e.stopPropagation();
    dispatch(removeItem(data))

  };
  return !isInCart(data.id) ? (
    <Button
      aria-label="add item to cart"
      onClick={handleAddClick}
      variant={variant}
    >
      {!!buttonText && <Box flexGrow={1}>{buttonText}</Box>}
      <Icon variant={variant}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <path
            data-name="Path 9"
            d="M143.407,137.783h-1.25v4.375h-4.375v1.25h4.375v4.375h1.25v-4.375h4.375v-1.25h-4.375Z"
            transform="translate(-137.782 -137.783)"
            fill="currentColor"
          />
        </svg>
      </Icon>
    </Button>
  ) : (
    <Counter
      value={getItem(data.id).quantity}
      onDecrement={handleRemoveClick}
      onIncrement={handleAddClick}
      className="card-counter"
      variant={variant || 'altHorizontal'}
    />
  );
};
