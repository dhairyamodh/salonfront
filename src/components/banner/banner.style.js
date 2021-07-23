import styled from 'styled-components';
import { Row as Rows, Col as Cols } from 'react-styled-flexboxgrid';

import {
  background,
  compose,
  space,
  color,
  layout,
  position,
  flexbox,
  border,
} from 'styled-system';
import css from '@styled-system/css';

export const Box = styled.div(
  css({
    height: ['auto', 'auto', '600px', '100vh'],
  }),
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    // backgroundColor: #f7f7f7;

    '@media (max-width: 990px)': {
      padding: '80px 0 25px',
    },
  },
  compose(space, color, layout, position, flexbox, border)
);
export const Image = styled.div(
  css({
    backgroundSize: ['cover'],
  }),
  {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    '@media (max-width: 990px) and (min-width: 768px)': {
      backgroundPosition: 'inherit',
    },
  },
  background
);

export const Content = styled.div(
  css({
    px: ['20px', '20px', '15px'],
    pt: [0],
  }),
  {
    position: 'relative',
    zIndex: 2,
    width: '100%',
  }
);
export const Title = styled.h2(
  css({
    fontSize: [17, '2xl', 45],
    color: 'text.bold',
    fontWeight: 'bold',
  }),
  {
    padding: 30,
    textTransform: 'uppercase',
    color: "primary.regular",
    textAlign: 'left',
  }
);

export const subTitle = styled.h2(
  css({
    fontSize: 20,
    color: 'text.bold',
    fontWeight: 'bold',
  }),
  {
    padding: 30,
    textTransform: 'uppercase',
    color: "primary.regular",
    textAlign: 'left',
  }
);
export const Description = styled.p(
  css({
    fontSize: ['base', 'md'],
    color: 'text.regular',
    marginBottom: [null, null, 60],
    display: ['block'],
    fontWeight: 'regular',
    lineHeight: 'body',
    textAlign: ['left', 'left', 'center'],

    '@media (max-width: 990px)': {
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: '15px',
    },
  })
);

export const ContentRow = styled.div(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,

    button: {
      padding: 0,

      ':before': {
        content: '""',
        width: 5,
        height: 5,
        display: 'block',
        borderRadius: '50%',
        backgroundColor: 'yellow.regular',
        marginRight: '7px',
      },
    },
  })
);

export const SearchWrapper = styled.div(
  css({
    display: 'flex',
    justifyContent: 'center',
  })
);

export const SliderNav = styled.button(
  css({
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'text.bold',
    backgroundColor: 'white',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)',
    outline: 0,
    padding: 0,
    border: 0,
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    marginTop: '-15px',
    zIndex: 1,
    cursor: 'pointer',

    svg: {
      width: 18,
      maxHeight: 18,
    },

    '&.banner-slider-prev': {
      left: 20,
    },

    '&.banner-slider-next': {
      right: 20,
    },
  })
);

export const Row = styled(Rows)`
  margin-bottom: 0px;

  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 30px;
  }
`;

export const Col = styled(Cols)`
  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 0px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const SearchContainer = styled.div(
  css({
    position: 'absolute',
    bottom: '5%',
    width: 'auto',
    height: 'auto',
    background: 'rgba( 255, 255, 255, 0.5 )',
    backdropFilter: 'blur(4px)',
    padding: 20,
    borderRadius: '20px',

    h5: {
      color: '#000',
      paddingBottom: 10,
    }
  })
)
