import styled from 'styled-components';
import css from '@styled-system/css';
import { variant } from 'styled-system';
export const RemoveBox = styled.div(
  css({
    display: 'flex',
    backgroundColor: 'danger.lighter',
    color: 'danger.regular',
    fontSize: 'base',
    fontWeight: 'bold',
  }),
  {
    borderRadius: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flexShrink: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  variant({
    variants: {
      horizontal: {
        width: 104,
        height: 36,
      },
      vertical: {
        width: 30,
        height: 90,
        flexDirection: 'column-reverse',
      },
      lightHorizontal: {
        width: 104,
        height: 36,
        backgroundColor: 'gray.200',
        color: 'text.bold',
      },
      lightVertical: {
        width: 30,
        height: 90,
        flexDirection: 'column-reverse',
        backgroundColor: 'gray.200',
        color: 'text.bold',
      },
      altHorizontal: {
        width: 104,
        height: 36,
        borderRadius: '6px',
      },
      altVertical: {
        width: 30,
        height: 90,
        borderRadius: '6px',
      },
      full: {
        width: '100%',
        height: 36,
        borderRadius: '6px',
      },
    },
  })
);

export const RemoveButton = styled.button((props) =>
  css({
    width: '100%',
    border: 'none',
    fontWeight: 'bold',
    fontSize: props.base ? ["base"] : undefined,
    backgroundColor: 'transparent',
    color: 'danger.regular',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 10,
    cursor: 'pointer',
    transition: '0.2s ease-in-out',
    '&:hover, &:focus': {
      outline: 'none',
      backgroundColor: 'danger.regular',
      color: 'white',
    },
  }),
  variant({
    variants: {
      lightHorizontal: {
        color: 'text.regular',
      },
      lightVertical: {
        color: 'text.regular',
      },
    },
  })
);

export const CounterValue = styled.span({
  pointerEvents: 'none',
});
CounterValue.displayName = 'CounterValue';
RemoveButton.displayName = 'RemoveButton';
RemoveBox.displayName = 'RemoveBox';
RemoveBox.defaultProps = {
  variant: 'horizontal',
};
