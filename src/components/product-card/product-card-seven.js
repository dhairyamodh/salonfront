import React from 'react';
import { AddItemToCart } from 'components/add-item-to-cart';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Box } from 'components/box';
import { ServerUrl } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer,
} from 'assets/styles/product-single.style';
import { openModal } from '@redq/reuse-modal';
import ProductDetails from 'components/product-details/product-details-one/product-details-one'
import { getSerivceById } from 'redux/actions/serviceActions';
// import ProductDetailsBook from 'components/product-details/product-details-two/product-details-two'
import { variant as _variant } from 'styled-system';

const Icon = styled.p(
  {
    marginRight: 5,
    paddingTop: 2,
  }
);
const Card = styled.div((props) => css({
  backgroundColor: '#fff',
  // overflow: 'hidden',
  // borderRadius: 15,
  // border: '1px solid #f3f3f3',
  display: 'flex',
  flexDirection: 'column',
  transition: '0.3s ease-in-out',
  cursor: 'pointer',
  // boxShadow: '2px 31px 62px -25px rgba(0, 0, 0, 0.2)',

  ':hover': {
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-5px)',
  },
  '@media screen and (max-width: 768px)': {
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    ...!props.normal && {
      '&:last-child': {
        paddingRight: 20,
      },
      '&:first-child': {
        paddingLeft: 20,
      }
    },

    // overflow: 'auto',
  },

}));
const ImageWrapper = styled.div((props) =>
  css({
    height: 150,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    overflow: 'hidden',


    '@media screen and (max-width: 1280px)': {
      height: 250,
    },

    '@media screen and (max-width: 990px)': {
      width: props.normal ? '100%' : 250,
      height: 150,
      objectFit: 'cover'

    },
  }));

const Image = styled.img({
  maxWidth: '100%',
  maxHeight: '100%',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 20,

});
const Discount = styled.div(
  css({
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'secondary.regular',
    color: '#fff',
    overflow: 'hidden',
    padding: '0.25rem 0.5rem',
    fontSize: 12,
    borderRadius: 20,
    pointerEvents: 'none',
  })
);

const EstimatedTime = styled.div(
  css({
    backgroundColor: 'secondaryLight.regular',
    color: 'secondary.regular',
    overflow: 'hidden',
    padding: '0.25rem 0.5rem',
    fontSize: 12,
    borderRadius: 20,
    fontWeight: 'bold',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center'
  })
);

const Title = styled.h5(css({
  marginBottom: 10,
  color: 'primary.regular',
  fontSize: 'semibase',
  fontWeight: 'semiBold',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

const PriceWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
});

const PriceContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Price = styled.span(
  css({
    color: 'text.bold',
    fontSize: 18,
    fontWeight: 'semiBold',
    lineHeight: 1,
  })
);

const SalePrice = styled.span(
  css({
    color: 'text.regular',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 'regular',
    padding: '0 5px',
    overflow: 'hidden',
    position: 'relative',
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',

    ':before': {
      content: '""',
      width: '100%',
      height: 1,
      display: 'inline-block',
      backgroundColor: 'text.regular',
      position: 'absolute',
      top: '50%',
      left: 0,
    },
  })
);

export const ProductCard = ({ data, deviceType, normal }) => {
  const { name: title, salonId, _id, discount, imageSrc: image, price: price, salePrice, estimatedTime } = data;
  const { currencySymbol } = useSelector(state => state.salon.salonData)
  const { serviceDetails: product } = useSelector(state => state.service)
  const dispatch = useDispatch()
  const { mobile, tablet, desktop } = deviceType

  const handleModal = () => {
    dispatch(getSerivceById(salonId, undefined, _id)).then((res) => {
      if (res.payload.status == 200) {
        let width = '100%'
        if (desktop) {
          width = '70%'
        }
        const data = res.payload.data.data

        openModal({
          show: true,
          overlayClassName: 'quick-view-overlay',
          closeOnClickOutside: true,
          component: data ? serviceModal : loadingModal,
          closeComponent: '',
          config: {
            enableResizing: false,
            disableDragging: true,
            className: 'modal',
            width: width,
            height: 'auto',
          },
        });
      }
    })

    const serviceModal = () => {
      return (
        <Modal>
          <ProductSingleWrapper>
            <ProductSingleContainer>
              <ProductDetails product={data} deviceType={deviceType} />
            </ProductSingleContainer>
          </ProductSingleWrapper>
        </Modal>
      )
    }


  };

  const loadingModal = () => {
    return (
      <div>Loading...</div>
    )
  }




  return (
    <Card normal={normal} className="product-card" onClick={() => handleModal()}>
      <ImageWrapper normal={normal}>
        <Image src={ServerUrl + image} alt={title} className="product-image" />
        {discount ? <Discount>{discount}%</Discount> : null}
      </ImageWrapper>
      <Box py={20} pb={20}>
        <Title>{title}</Title>
        <PriceWrapper>
          <PriceContainer>
            <Price>{currencySymbol} {salePrice}</Price>
            {discount ? <SalePrice>${price}</SalePrice> : null}
          </PriceContainer>
          <EstimatedTime><Icon variant="full">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0H4V1.33333H8V0ZM5.33333 8.66667H6.66667V4.66667H5.33333V8.66667ZM10.6867 4.26L11.6333 3.31333C11.3467 2.97333 11.0333 2.65333 10.6933 2.37333L9.74667 3.32C8.71333 2.49333 7.41333 2 6 2C2.68667 2 0 4.68667 0 8C0 11.3133 2.68 14 6 14C9.32 14 12 11.3133 12 8C12 6.58667 11.5067 5.28667 10.6867 4.26ZM6 12.6667C3.42 12.6667 1.33333 10.58 1.33333 8C1.33333 5.42 3.42 3.33333 6 3.33333C8.58 3.33333 10.6667 5.42 10.6667 8C10.6667 10.58 8.58 12.6667 6 12.6667Z" fill="currentColor" />
            </svg>


          </Icon>{estimatedTime}</EstimatedTime>
        </PriceWrapper>
        <AddItemToCart data={data} variant="full" buttonText="Add Service" />
      </Box>
    </Card>
  );
};
