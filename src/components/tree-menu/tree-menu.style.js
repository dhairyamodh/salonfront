import styled from 'styled-components';
import css from '@styled-system/css';
import { animated } from 'react-spring';
export const Header = styled.header(
  (props) =>
    css({
      fontSize: props.depth === 'parent' ? ['base'] : ['base'],
      fontWeight: 'medium',
      display: 'flex',
      alignItems: 'center',
      marginBottom: props.depth === 'parent' ? 12 : 0,
      color:
        props.open
          ? 'primary.regular'
          : 'text.bold',

      cursor: 'pointer',
      transition: '0.15s ease-in-out',
      padding: '10px 10px',
      marginLeft: null,
      borderRadius: 50,
      border: '1px solid',
      borderColor: 'transparent',
      ...props.open && {
        color: 'text.bold',
        backgroundColor: 'secondaryLight.regular',
        border: '1px solid',
        borderColor: 'secondary.regular',
      },
      transition: 'all 0.3s ease',
      textTransform: 'capitalize',

      '.toggleButton': {
        color: props.open ? 'primary.regular' : 'text.bold',
        padding: '0 5px',
        marginLeft: 'auto',
        height: 'auto',
        transition: 'transform 0.3s',
        transform: props.open ? 'rotate(90deg)' : '',
      },
      '.iconImage': {
        // border: '2px solid white',
        transition: 'all 0.3s ease',
        borderRadius: 200,
      },



      '&:hover': {
        color: 'text.bold',
        backgroundColor: 'secondaryLight.regular',
        border: '1px solid',
        borderColor: 'secondary.regular',
        // '.iconImage': {
        //   borderColor: 'text.bold',
        // },
      },
    }),
  {
    outline: 0,
  }
);

export const IconWrapper = styled.div(
  (props) =>
    css({
      // width: props.depth === 'child' ? 10 : 40,
      // height: 40,
      marginRight: props.depth === 'child' ? '8px' : 15,

      svg: {
        maxWidth: '100%',
        maxHeight: 20,
        height: props.depth === 'child' ? '2px' : 'auto',
      },
    }),
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  }
);

export const Title = styled.span({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  overflow: 'hidden',
});

export const Content = styled(animated.div)({
  willChange: 'transform, opacity, height',
  borderLeft: 0,
  overflow: 'hidden',
});

export const Frame = styled.div(
  (props) =>
    css({
      // marginBottom: props.depth === 'parent' ? 15 : 10,
      backgroundColor: props.open
        ? 'primary.regular'
        : 'white',
      // borderBottomWidth: '1px',
      // borderBottomStyle: 'solid',
      // borderBottomColor: 'gray.600',

    }),
  {
    position: 'relative',

    overflowX: 'hidden',
  }
);
