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
  OfferItemNormal,
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
import { useDispatch, useSelector } from 'react-redux';
import { getDeals, getOffers } from '../redux/actions/offerDealActions';
import { ServerUrl } from '../constants';


const OffersDeals = ({ deviceType }) => {
  // if (error) return <ErrorMessage message={error.message} />;
  const tabsData = [
    { title: 'offers' },
    { title: 'deals' },
  ]
  const { salonId } = useSelector(state => state.salon)
  const { deals, offers } = useSelector(state => state.offerDeal)

  const { value } = useParams()
  const [active, setAcive] = useState()
  const handleClick = (title) => {
    setAcive(title)
  }
  const dispatch = useDispatch()

  const Deals = () => {
    return (<ProductsRow>
      {deals && deals
        ? deals.map((coupon) => (
          <ProductsCol key={coupon.id}>
            <GiftCard discount={coupon.dealDiscount} title={coupon.dealTitle} subtitle={coupon.dealSubTitle} code={coupon.dealCode} />
          </ProductsCol>
        ))
        : null}
    </ProductsRow>)
  }

  const getOfferDeal = () => {
    dispatch(getOffers(salonId, undefined, true))
    dispatch(getDeals(salonId, undefined, true))
  }


  useEffect(() => {
    handleClick(value)
    getOfferDeal()
  }, [value])

  const Offers = () => {
    return (
      <OfferContainer normal={true} >
        {offers?.map((offer, index) => {
          return (
            <OfferItemNormal>
              <OfferCard>
                <OfferTitle>{offer.offerTitle}</OfferTitle>
                <OfferSubtitle>{offer.offerSubTitle}</OfferSubtitle>
                <Button variant="white" >
                  Book Now
                </Button>
              </OfferCard>
              <OfferImage
                key={offer.id}
                src={ServerUrl + offer.offerImage}
              />
            </OfferItemNormal>

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
          <div style={{ width: '100%', padding: 20 }}>
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
