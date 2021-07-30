import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { ArrowNext } from 'assets/icons/ArrowNext';
import { ArrowPrev } from 'assets/icons/ArrowPrev';
import { useSelector } from 'react-redux';
import { ServerUrl } from '../../constants';
import { useHistory } from 'react-router-dom';
import { CategoryTitle, CategorySubTitle, CategoryCard, CategoryImageContainer, CategoryImage, CategoryCardWrapper, ButtonPrev, ButtonNext, MobileCategoryCard, MobileCategoryCardWrapper, MobileCategoryImage, MobileCategoryImageContainer, MobileCategoryTitle } from './categoryCarousel.style'

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
        items: 5,
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
    deviceType,
    autoPlay = false,
    infinite = true,
    itemClass,
}) {
    const history = useHistory()
    const handleNavigate = (link) => {
        history.push(link)
    }
    const { desktop, tablet, mobile } = deviceType;

    return (
        <>
            {
                mobile ?
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'auto', paddingBottom: 10 }}>
                        {(data.map((item, index) => {
                            return (
                                <MobileCategoryCard onClick={() => handleNavigate(`/services/${item._id}`)}>
                                    <MobileCategoryImageContainer>
                                        <MobileCategoryImage
                                            alt={item.categoryName}
                                            src={ServerUrl + item.categoryImage}
                                        />
                                    </MobileCategoryImageContainer>
                                    <MobileCategoryCardWrapper>
                                        <MobileCategoryTitle>{item.categoryName}</MobileCategoryTitle>

                                    </MobileCategoryCardWrapper>
                                </MobileCategoryCard>
                            );
                        }))}
                    </div>
                    :
                    (<div dir="ltr">
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
                        >
                            {data.map((item, index) => {
                                return (
                                    <CategoryCard onClick={() => handleNavigate(`/services/${item._id}`)}>
                                        <CategoryImageContainer>
                                            <CategoryImage
                                                alt={item.categoryName}
                                                src={ServerUrl + item.categoryImage}
                                            />
                                        </CategoryImageContainer>
                                        <CategoryCardWrapper>
                                            <CategoryTitle>{item.categoryName} </CategoryTitle>
                                            <CategorySubTitle>{item.totalServices} {item.totalServices > 1 ? `Services` : `Service`} </CategorySubTitle>
                                        </CategoryCardWrapper>
                                    </CategoryCard>
                                );
                            })}
                        </Carousel>
                    </div>)
            }
        </>

    );
}
