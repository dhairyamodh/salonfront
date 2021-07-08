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
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
  CategoryContent,
  HeaderTitle,
  CategoryContainer,
  HeaderSubTitle
} from 'assets/styles/pages.style';

import CartPopUp from '../features/carts/cart-popup'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCategorySerivces } from '../redux/actions/serviceActions'
import { ServerUrl } from '../constants';
import CategoryCarousel from '../components/carousel/CategoryCarousel';

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
  const { allServices: data, totalServices } = useSelector(state => state.service)
  const [filterService, setFilterService] = useState()
  const [page, setPage] = useState(1)
  const [loading, setIsLoading] = useState(true)
  const fetchLimit = 12
  const { salonId } = useSelector(state => state.salon)
  const { allCategories } = useSelector(state => state.category)

  const dispatch = useDispatch();
  const getSerivces = (filterService, page) => {
    setIsLoading(true)
    dispatch(getCategorySerivces(salonId, undefined, filterService, true, fetchLimit, page)).then((res) => {
      if (res.payload.status === 200) {
        setIsLoading(false)
      }
    }).catch((err) => {
      setIsLoading(true)
    });
  }
  const handleLoadMore = () => {
    setPage(page + 1)
  };
  useEffect(() => {
    if (filterService) {
      setPage(1)
    }
    getSerivces(filterService, page)
  }, [filterService, page])
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
      <OfferSection>
        <HeaderTitle>Our Deals & Offers</HeaderTitle>
        <div style={{ margin: '0 -10px' }}>
          <Carousel deviceType={deviceType} data={siteOffers} />
        </div>
      </OfferSection>
      <MobileCarouselDropdown>
        <SidebarCategory setFilterService={setFilterService} deviceType={deviceType} />
      </MobileCarouselDropdown>
      <CategoryContent>

        <HeaderTitle>Top Categories</HeaderTitle>
        <CategoryContainer>
          <CategoryCarousel data={allCategories} deviceType={deviceType} />
        </CategoryContainer>
      </CategoryContent >
      <MainContentArea>
        <HeaderSubTitle>Our Services</HeaderSubTitle>
        <HeaderTitle>Top Trending Services</HeaderTitle>

        {/* <SidebarSection>
          <SidebarCategory setFilterService={setFilterService} deviceType={deviceType} />
        </SidebarSection> */}
        <ContentSection>
          <div ref={targetRef}>
            <ProductGrid data={data}
              totalServices={totalServices}
              deviceType={deviceType}
              loading={loading}
              handleLoadMore={handleLoadMore}
            />
          </div>
        </ContentSection>
      </MainContentArea>

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
