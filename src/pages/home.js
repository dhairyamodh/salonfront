import { Banner } from '../components/banner/banner';
import { ProductGrid } from '../components/product-grid/product-grid-three';
import { Modal } from '@redq/reuse-modal';
import styled from 'styled-components';
import css from '@styled-system/css';
import SidebarCategory from '../layouts/sidebar/sidebar';
import Saloon from '../assets/images/banner/saloon.jpg';
import Carousel from '../components/carousel/carousel';
import { siteOffers } from '../site-settings/site-offers';
import { MobileBanner } from '../components/banner/mobile-banner';
import { useRefScroll } from 'utils/use-ref-scroll';
import { Button } from 'components/button/button';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
  CategoryContent,
  CategoryContainer,
  HeaderSubTitle,
  HeaderContainer,
  HeaderWrapper,
  OfferContainer,
  OfferCard,
  OfferItem,
  OfferImage,
  OfferTitle,
  OfferSubtitle
} from 'assets/styles/pages.style';

import CartPopUp from '../features/carts/cart-popup'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCategorySerivces, getTrendingSerivces } from '../redux/actions/serviceActions'
import { ServerUrl } from '../constants';
import CategoryCarousel from '../components/carousel/CategoryCarousel';
import { useHistory } from 'react-router-dom';

// const bannerSlides = [
//   {
//     img: GroceryImgOne,
//     alt: 'Slide One',
//   },
//   {
//     img: GroceryImgTwo,
//     alt: 'Slide Two',
//   },
// ];



export default function Home({ deviceType }) {
  const shop = useSelector(state => state.salon.salonData)
  const { allServices: data } = useSelector(state => state.service)
  const { salonId } = useSelector(state => state.salon)
  const { allCategories } = useSelector(state => state.category)
  const [loading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory()
  const getSerivces = () => {
    setIsLoading(true)
    dispatch(getTrendingSerivces(salonId, undefined, true,)).then((res) => {
      if (res.payload.status === 200) {
        setIsLoading(false)
      }
    }).catch((err) => {
      setIsLoading(true)
    });
  }
  // const handleLoadMore = () => {
  //   setPage(page + 1)
  // };
  useEffect(() => {
    getSerivces()
  }, [])
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });


  // const CategoryCarousel = () => {
  //   return (allCategories.map((category, index) =>
  //     <CategoryCard>
  //       <CategoryImageContainer>
  //         <CategoryImage
  //           key={index}
  //           alt={category.categoryName}
  //           src={ServerUrl + category.categoryImage}
  //         />
  //       </CategoryImageContainer>
  //       <CategoryCardWrapper>
  //         <CategoryTitle>{category.categoryName}</CategoryTitle>
  //         <CategorySubTitle>12 Services</CategorySubTitle>
  //       </CategoryCardWrapper>
  //     </CategoryCard>
  //   ))
  // }

  return (
    <Modal>
      <MobileBanner intlTitleId={shop?.tagLine || 'adasd'} />
      <Banner imageUrl={Saloon} intlTitleId={shop?.tagLine || 'dasd'}
      />
      <CategoryContent>

        <HeaderContainer>
          <HeaderWrapper>
            <h3>Categories</h3>
          </HeaderWrapper>
        </HeaderContainer>
        <CategoryContainer>
          <CategoryCarousel data={allCategories} deviceType={deviceType} />
        </CategoryContainer>
      </CategoryContent >

      <MobileCarouselDropdown>
        <SidebarCategory deviceType={deviceType} />
      </MobileCarouselDropdown>
      <OfferSection>
        <HeaderContainer>
          <HeaderWrapper>
            <h3>Latest Offers</h3>
          </HeaderWrapper>
          <Button variant="secondary" onClick={() => history.push('/offers-deals/offers')}>
            View All +
          </Button>
        </HeaderContainer>
        <OfferContainer>
          {siteOffers.map((item, index) => {
            return (
              <>
                <OfferItem>
                  <OfferCard>
                    <OfferTitle>Offer {index} Title</OfferTitle>
                    <OfferSubtitle>Offer {index} sub title</OfferSubtitle>
                    <Button variant="white" >
                      Book Now
                    </Button>
                  </OfferCard>
                  <OfferImage
                    key={item.id}
                    src={item.imgSrc}
                    alt={item.alt}
                  />
                </OfferItem>

              </>
            );
          }).slice(0, 2)}
        </OfferContainer>
      </OfferSection>
      <MainContentArea>
        <HeaderContainer>
          <HeaderWrapper>
            <HeaderSubTitle>Our Services</HeaderSubTitle>
            <h3>Top Trending Services</h3>
          </HeaderWrapper>
        </HeaderContainer>
        {/* <SidebarSection>
          <SidebarCategory setFilterService={setFilterService} deviceType={deviceType} />
        </SidebarSection> */}
        {/* <ContentSection> */}
        <div ref={targetRef}>
          <ProductGrid data={data}
            deviceType={deviceType}
            loading={loading}
          // handleLoadMore={handleLoadMore}
          />
        </div>
        {/* </ContentSection> */}
      </MainContentArea>

      <OfferSection>
        <HeaderContainer>
          <HeaderWrapper>
            <h3>Limited Time Deals</h3>
          </HeaderWrapper>
          <Button variant="secondary" onClick={() => history.push('/offers-deals/deals')} >
            View All +
          </Button>
        </HeaderContainer>
        <div style={{ width: '100%', position: 'relative', height: '100%' }}>
          <Carousel deviceType={deviceType} data={siteOffers} />
        </div>
      </OfferSection>
      <CartPopUp deviceType={deviceType} />
    </Modal >
  );
}

const ContentArea = styled.div(
  css({
    overflow: 'hidden',
    // padding: ['68px 0 100px', '68px 0 50px', '110px 2rem 50px'],
    // padding: ['0px 0 100px', '68px 0 0px',],
    display: 'grid',
    minHeight: '100vh',
    gridColumnGap: '10px',
    gridRowGap: ['15px', '20px', '0'],
    gridTemplateColumns: [
      'minmax(0, 1fr)',
      'minmax(0, 1fr)',
      '300px minmax(0, 1fr)',
    ],
    backgroundColor: '#f9f9f9',
  })
);
