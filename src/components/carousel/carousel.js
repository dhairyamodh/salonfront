import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { ArrowNext } from 'assets/icons/ArrowNext';
import { ArrowPrev } from 'assets/icons/ArrowPrev';
import { useSelector } from 'react-redux';
import { Button } from 'components/button/button';
import GiftCard from 'components/gift-card/gift-card';
import couponImg from 'assets/images/coupon.png'
// const Item = styled('div')`
//   height: 200px;
//   width: 100%;
//   color: ${themeGet('colors.primary.regular', '#009E7F')};
//   padding: 0;
//   margin: 10px 0;
//   display:flex;
//   border-radius: 20px;
// background: ${themeGet('colors.primary.regular', '#009E7F')};

//   @media only screen and (max-width: 990px) {
//     height: 150px;
//   }
// `;

// const Image = styled('img')`
//   position:absolute;
//   border-radius:20px;
//   width: 100%;
//   height: 100%;
//   object-fit:cover;
//   top:0;
// `;

// const CardContent = styled('div')`
// position: relative;
// padding: 20px;
// width: 40%;
// height: 100%;
// border-radius: 20px 0 0 20px;
// background: ${themeGet('colors.secondary.regular')};
// z-index: 3;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// color: #fff;
// border-right: 2px dashed #eee;
// transition: 0.25s all ease-in-out;
// `;

// const CardRight = styled('div')`
// position: relative;
// padding: 20px;
// width: 60%;
// height: 100%;
// z-index: 3;
// display: flex;
// border-radius: 0 20px 20px 0;
// flex-direction: column;
// justify-content: center;
// align-items: flex-start;
// color: #fff;
// transition: 0.25s all ease-in-out;
// &:hover{
//   background: ${themeGet('colors.primary.regular')};
// }
// &:before{
//   content: '';
//   width: 21px;
//   height: 21px;
//   background-color: #fff;
//   border-radius: 50%;
//   position: absolute;
//   left: -10px;
//   top: -10px;
// }
// &:after{
//   content: '';
//   width: 21px;
//   height: 21px;
//   background-color: #fff;
//   border-radius: 50%;
//   position: absolute;
//   left: -10px;
//   bottom: -10px;
// }
// `;

// const Discount = styled('h4')`
// padding: 5px;
// @media only screen and (max-width: 990px) {
//   font-size: 18px;
// }
// `;

// const Title = styled('h5')`
// padding: 5px;
// font-size: 23px;
// @media only screen and (max-width: 990px) {
//   font-size: 18px;
// }
// `;


// const Subtitle = styled('p')`
// padding:0 5px 10px 5px;
// color:${themeGet('colors.gray.200',)};
// @media only screen and (max-width: 990px) {
//   font-size: 12px;
// }
// `;

const ButtonPrev = styled('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${themeGet('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 40%;
  z-index: 99;
`;

const ButtonNext = styled('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${themeGet('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 40%;
  right: 0px;
  z-index: 99;
`;

const ButtonGroupWrapper = styled('div')``;

const PrevButton = ({ onClick, children }) => {
  return (
    <ButtonPrev
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="prevButton"
    >
      {children}
    </ButtonPrev>
  );
};
const NextButton = ({ onClick, children }) => {
  return (
    <ButtonNext
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="nextButton"
    >
      {children}
    </ButtonNext>
  );
};

const ButtonGroup = ({ next, previous }) => {
  const { isRtl } = useSelector(state => state.language);

  return (
    <ButtonGroupWrapper>
      {isRtl ? (
        <>
          <NextButton onClick={() => next()} className="rtl">
            <ArrowPrev />
          </NextButton>
          <PrevButton onClick={() => previous()}>
            <ArrowNext />
          </PrevButton>
        </>
      ) : (
        <>
          <PrevButton onClick={() => previous()}>
            <ArrowPrev />
          </PrevButton>
          <NextButton onClick={() => next()}>
            <ArrowNext />
          </NextButton>
        </>
      )}

      {/* if prop isRtl true swap prev and next btn */}
    </ButtonGroupWrapper>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function CustomCarousel({
  data,
  deviceType,
  component,
  autoPlay = false,
  infinite = true,
  customLeftArrow,
  customRightArrow,
  itemClass,
  isRtl,
  ...props
}) {


  return (
    <div dir="ltr">
      <Carousel
        arrows={false}
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
        infinite={infinite}
        containerClass="container-with-dots"
        itemClass={itemClass}
        autoPlay={autoPlay}
        autoPlaySpeed={3000}
        renderButtonGroupOutside={true}
        additionalTransfrom={0}
        customButtonGroup={<ButtonGroup />}
        deviceType={deviceType}
        {...props}
      // use dir ltr when rtl true
      >
        {data.map((item, index) => {
          if (component) return component(item);
          return (
            <div style={{ borderRadius: 10, padding: '10px 20px', overflow: 'hidden' }} key={index}>
              <GiftCard discount="20" title="dkjfkdj" subtitle="skjdksj" image={couponImg} code="dkjksjd" />
              {/* <Item>
                <CardContent>
                  <Discount>20% Off</Discount>
                  <Button variant="white" >
                    Show Code
                  </Button>
                </CardContent>
                <CardRight>
                  <Title>Offer {index} Title</Title>
                  <Subtitle>Offer {index} sub title</Subtitle>
                </CardRight>
              </Item> */}
              {/* <img
                  key={item.id}
                  src={item.imgSrc}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    position: 'relative',
                  }}
                /> */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
