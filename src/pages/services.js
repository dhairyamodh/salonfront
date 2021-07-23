import { Banner } from '../components/banner/banner';
import { ProductGrid } from '../components/product-grid/product-grid-two';
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
  MobileCarouselDropdown,
} from 'assets/styles/services.style';

import {
  HeadingTitle
} from 'assets/styles/pages.style';
import { FormattedMessage } from "react-intl";


import CartPopUp from '../features/carts/cart-popup'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCategorySerivces } from '../redux/actions/serviceActions'
import { useParams } from 'react-router-dom';
import Pagination from '../components/pagination/pagination';




export default function Services({ deviceType }) {
  const { allServices: data } = useSelector(state => state.service)
  const [loading, setIsLoading] = useState(true)
  const { salonId } = useSelector(state => state.salon)
  const { id } = useParams()
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const countPerPage = 16
  const [collection, setCollection] = useState(data.slice(0, countPerPage));
  const getSerivces = () => {
    setIsLoading(true)
    dispatch(getCategorySerivces(salonId, undefined, id, true)).then((res) => {
      if (res.payload.status === 200) {
        setIsLoading(false)
        setCollection(res.payload.data.data.slice(0, countPerPage))
      }
    }).catch((err) => {
      setIsLoading(true)
    });

  }
  // const handleLoadMore = () => {
  //   setPage(page + 1)
  // };

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(data.slice(from, to));
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    getSerivces()

  }, [id])

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

      <MainContentArea>
        <HeadingTitle>Services</HeadingTitle>

        <MobileCarouselDropdown>
          <SidebarCategory deviceType={deviceType} />
        </MobileCarouselDropdown>
        <SidebarSection>
          <SidebarCategory newcategoryId={id} deviceType={deviceType} />
        </SidebarSection>
        <ContentSection>
          <ProductGrid data={collection}
            deviceType={deviceType}
            loading={loading}
          // handleLoadMore={handleLoadMore}
          />
          {data.length > 0 &&
            <Pagination updatePage={updatePage} currentPage={currentPage} countPerPage={countPerPage} total={data.length} />}
        </ContentSection>
      </MainContentArea>

      <CartPopUp deviceType={deviceType} />
    </Modal>
  );
}
