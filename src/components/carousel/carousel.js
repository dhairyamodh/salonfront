import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { ArrowNext } from 'assets/icons/ArrowNext';
import { ArrowPrev } from 'assets/icons/ArrowPrev';
import { useSelector } from 'react-redux';

const Item = styled('div')`
  height: 200px;
  width: 100%;
  background-color: ${themeGet('colors.white', '#ffffff')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  position:relative;
  display:inline-block;
  box-shadow: ${themeGet('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  &:after {
    content:'';
  position:absolute;
  border-radius: 10px;
  left:0; top:0;
  width:100%; 
  height:100%;
  display:inline-block;
  background: -webkit-linear-gradient(left, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%);
  background: -o-linear-gradient(left, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%);
  background: -ms-linear-gradient(left, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%);
  background: linear-gradient(to right, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%); 
  }
  @media only screen and (max-width: 990px) {
    height: 150px;
  }
`;

const Image = styled('img')`
  position:absolute;
  border-radius:10px;
  width: 100%;
  height: 100%;
  object-fit:cover;
  top:0;
`;

const CardContent = styled('div')`
position: relative;
padding: 20px;
width: 100%;
height: 100%;
z-index: 3;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
color: #fff;
`;

const Title = styled('h5')`
padding: 5px;
font-size: 23px;
@media only screen and (max-width: 990px) {
  font-size: 18px;
}
`;


const Subtitle = styled('p')`
padding:0 5px;
color:${themeGet('colors.gray.200',)};
@media only screen and (max-width: 990px) {
  font-size: 12px;
}
`;

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
  top: 50%;
  left: 40px;
  margin-top: -20px;
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
  top: 50%;
  right: 40px;
  margin-top: -20px;
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
    items: 3,
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
  deviceType: { mobile, tablet, desktop },
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
        {...props}
      // use dir ltr when rtl true
      >
        {data.map((item, index) => {
          if (component) return component(item);
          return (
            <div style={{ borderRadius: 10, padding: '0 15px', overflow: 'hidden' }} key={index}>

              <Item>
                <CardContent>
                  <Title>Offer {index} Title</Title>
                  <Subtitle>Offer {index} sub title</Subtitle>
                </CardContent>
                <Image
                  key={item.id}
                  src={item.imgSrc}
                  alt={item.alt}
                />
              </Item>
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
