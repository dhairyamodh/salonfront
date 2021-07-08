import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { ArrowNext } from 'assets/icons/ArrowNext';
import { ArrowPrev } from 'assets/icons/ArrowPrev';
import { useSelector } from 'react-redux';
import { ServerUrl } from '../../constants';

const CategoryTitle = styled.h5`
  text-transform: capitalize;
  color: white;
  @media (max-width: 768px) {
   
  }
`;

const CategorySubTitle = styled.p`
  color: white;
  @media (max-width: 768px) {
   
  }
`;

const CategoryCard = styled.div`
  margin: 10px;
  width: auto;
  border-radius: 10px;
  height: auto;
  display:flex;
background: rgba( 255, 255, 255, 0.4 );
    
  transition: 0.25s all ease-in-out;
  cursor:pointer;
  &:hover {
    background-color:white;
    transform: scale(1.05);
  box-shadow: ${themeGet('shadows.base', '0 8px 35px rgba(0, 0, 0, 0.5)')};
    ${CategoryTitle} {
      color:#000;
    }
    ${CategorySubTitle} {
        color:#000;
      }
  }
  @media (max-width: 768px) {
    
  }
`;

const CategoryImageContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 768px) {
    
  }
`;

const CategoryImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
  object-fit:cover;
  margin: 5px;
  @media (max-width: 768px) {
    
  }
`;

const CategoryCardWrapper = styled.div`
  padding: 20px;
  display:flex;
  justify-content:space-around;
  align-items:flex-start;
  flex-direction:column;
  @media (max-width: 768px) {
    
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
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
export default function CategoryCarousel({
    data,
    deviceType: { mobile, tablet, desktop },
    component,
    autoPlay = false,
    infinite = true,
    customLeftArrow,
    customRightArrow,
    itemClass,
    isRtl,
    categoryImage, categoryName
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
            >
                {data.map((item, index) => {
                    return (
                        <CategoryCard>
                            <CategoryImageContainer>
                                <CategoryImage
                                    alt={item.categoryName}
                                    src={ServerUrl + item.categoryImage}
                                />
                            </CategoryImageContainer>
                            <CategoryCardWrapper>
                                <CategoryTitle>{item.categoryName}</CategoryTitle>
                                <CategorySubTitle>12 Services</CategorySubTitle>
                            </CategoryCardWrapper>
                        </CategoryCard>
                    );
                })}
            </Carousel>
        </div>
    );
}
