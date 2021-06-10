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
} from 'assets/styles/pages.style';

import CartPopUp from '../features/carts/cart-popup'

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

const PAGE_TYPE = 'grocery';

export default function Home({ deviceType }) {
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });
  return (
    <Modal>
      <MobileBanner intlTitleId="Giving Shine to your Style" />
      <Banner imageUrl={Saloon} intlTitleId="Giving Shine to your Style"
        intlDescriptionId="We strive to reach beyond the roots (of hair), and into the refinement and healing of one’s core self." />
      <OfferSection>
        <div style={{ margin: '0 -10px' }}>
          <Carousel deviceType={deviceType} data={siteOffers} />
        </div>
      </OfferSection>
      <MobileCarouselDropdown>
        <SidebarCategory deviceType={deviceType} />
      </MobileCarouselDropdown>
      <MainContentArea>
        <SidebarSection>
          <SidebarCategory deviceType={deviceType} />
        </SidebarSection>
        <ContentSection>
          <div ref={targetRef}>
            <ProductGrid

              deviceType={deviceType}
              fetchLimit={20}
            />
          </div>
        </ContentSection>
      </MainContentArea>

      <CartPopUp deviceType={deviceType} />
    </Modal>
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
