import React, { useEffect, useState } from 'react';
import CartPopUp from 'features/carts/cart-popup';
import { Modal } from '@redq/reuse-modal';
import { useParams } from 'react-router-dom';

import {
  OfferPageWrapper,
  ProductsRow,
  MainContentArea,
  ProductsCol,
  HeadingTitle,
  OfferCard,
  OfferItem,
  OfferImage,
  OfferTitle,
  OfferSubtitle,
  OfferContainer
} from 'assets/styles/pages.style';
import { Button } from 'components/button/button';
import GiftCard from 'components/gift-card/gift-card';
import ErrorMessage from 'components/error-message/error-message'
import { siteOffers } from '../site-settings/site-offers';
import Tabs from 'components/tabs/tabs';


const OffersDeals = ({ deviceType }) => {
  // if (error) return <ErrorMessage message={error.message} />;
  const tabsData = [
    { title: 'offers' },
    { title: 'deals' },
  ]
  const { value } = useParams()
  const [active, setAcive] = useState()
  const handleClick = (title) => {
    setAcive(title)
  }
  const Deals = () => {
    return (<ProductsRow>
      {siteOffers && siteOffers
        ? siteOffers.map((coupon) => (
          <ProductsCol key={coupon.id}>
            <GiftCard discount="20" title="dkjfkdj" subtitle="skjdksj" code="dkjksjd" />
          </ProductsCol>
        ))
        : null}
    </ProductsRow>)
  }



  useEffect(() => {
    handleClick(value)
  }, [value])

  const Offers = () => {
    return (
      <OfferContainer style={{ paddingTop: 30 }}>
        {siteOffers.map((item, index) => {
          return (
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

          );
        })}
      </OfferContainer>

    )
  }

  return (
    <Modal>
      <OfferPageWrapper>
        <MainContentArea>
          <HeadingTitle>Offers & Deals</HeadingTitle>
          <Tabs data={tabsData} active={active} onclick={handleClick} />
          <div style={{ width: '100%' }}>
            {
              (active === 'deals') ? <Deals /> : <Offers />

            }

          </div>
        </MainContentArea>

      </OfferPageWrapper>
      <CartPopUp deviceType={deviceType} />
    </Modal>
  );
};

export default OffersDeals;
