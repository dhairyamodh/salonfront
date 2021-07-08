import { Button } from 'components/button/button';
// import {
//   ProductDetailsWrapper,
//   ProductPreview,
//   ProductInfo,
//   ProductTitlePriceWrapper,
//   ProductTitle,
//   BackButton,
//   ProductWeight,
//   ProductDescription,
//   ButtonText,
//   ProductMeta,
//   ProductCartWrapper,
//   ProductPriceWrapper,
//   ProductPrice,
//   SalePrice,
//   ProductCartBtn,
//   MetaSingle,
//   MetaItem,
//   RelatedItems,
// } from './product-details-one.style';

import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  ProductDescription,
  ButtonText,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductTimeWrapper,
  ProductTimeTitle,
  ProductTime,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaTitle,
  MetaSingle,
  MetaItem,
  RelatedItems,
} from '../product-details-four/product-details-four.style';
import { LongArrowLeft } from 'assets/icons/LongArrowLeft';
import { CartIcon } from 'assets/icons/CartIcon';
import ReadMore from 'components/truncate/truncate';
import CarouselWithCustomDots from 'components/multi-carousel/multi-carousel';
import { FormattedMessage } from 'react-intl';
import { Counter } from 'components/counter/counter';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, } from '../../../redux/actions/cartActions'
import { ServerUrl } from '../../../constants';
import { Remove } from 'components/removeCart/remove';



const ProductDetails = ({
  product,
  deviceType,
}) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.items)
  const isInCart = (id) => {
    return cart?.some((item) => item.id === id);
  };
  const getItem = (id) => {
    return cart?.find((item) => item.id === id);
  };
  const data = product;
  const { currencySymbol: CURRENCY } = useSelector(state => state.shop.salonData)

  const handleAddClick = (e) => {
    e.stopPropagation();
    dispatch(addItem(data));
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    dispatch(removeItem(data));
  };

  const isRtl = false


  return (
    <>
      <ProductDetailsWrapper className='product-card' dir='ltr'>

        <ProductPreview>
          <CarouselWithCustomDots
            items={[ServerUrl + product?.imageSrc]}
            deviceType={deviceType}
          />
        </ProductPreview>

        <ProductInfo dir='ltr'>
          <ProductTitlePriceWrapper>
            <ProductTitle>{product?.name}</ProductTitle>
          </ProductTitlePriceWrapper>

          <ProductTimeWrapper>
            <ProductTimeTitle>Estimated Time : &nbsp;</ProductTimeTitle>
            <ProductTime>{product?.estimatedTime}</ProductTime>
          </ProductTimeWrapper>



          <ProductDescription>
            <ReadMore character={230}>{product?.description}</ReadMore>
          </ProductDescription>

          <ProductCartWrapper>
            <ProductPriceWrapper>
              <ProductPrice>
                {CURRENCY} {product?.salePrice}
              </ProductPrice>

              {product?.discount ? (
                <SalePrice>
                  {CURRENCY}
                  {product.price}
                </SalePrice>
              ) : null}
            </ProductPriceWrapper>
            <ProductCartBtn>
              {!isInCart(data?._id) ? (
                <Button
                  className='cart-button'
                  variant='primary'
                  size='big'
                  onClick={handleAddClick}
                >
                  <CartIcon mr={2} />
                  <ButtonText>
                    <FormattedMessage
                      id='addToCartButton'
                      defaultMessage='Add Service'
                    />
                  </ButtonText>
                </Button>
              ) : (
                <Remove onDecrement={handleRemoveClick} className='card-counter' isIcon variant='altHorizontal' base='base' />

                // <Counter
                //   value={getItem(data?._id).quantity}
                //   onDecrement={handleRemoveClick}
                //   onIncrement={handleAddClick}
                //   className='card-counter'
                //   variant='altHorizontal'
                // />
              )}
            </ProductCartBtn>
          </ProductCartWrapper>

          <ProductMeta>
            <MetaSingle>
              {product?.categoryName &&
                <MetaItem>{product?.categoryName}</MetaItem>}
            </MetaSingle>
          </ProductMeta>
        </ProductInfo>


      </ProductDetailsWrapper>

    </>
  );
};

export default ProductDetails;
