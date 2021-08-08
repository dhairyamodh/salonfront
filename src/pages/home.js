import { Banner } from '../components/banner/banner';
import { ProductGrid } from '../components/product-grid/product-grid-three';
import { Modal } from '@redq/reuse-modal';
import Saloon from '../assets/images/banner/saloon.jpg';
import Carousel from '../components/carousel/carousel';
import { MobileBanner } from '../components/banner/mobile-banner';
import { Button } from 'components/button/button';
import { Input, Textarea } from "components/forms/input";
// import { UPDATE_ME } from 'graphql/mutation/me';
import { FormattedMessage } from "react-intl";
import { Label } from "components/forms/label";
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
  CategoryContent,
  CategoryContainer,
  ModalHeader,
  ModalBody,
  ModalTitle,
  OfferContainer,
  OfferCard,
  OfferItem,
  OfferImage,
  OfferTitle,
  OfferSubtitle,
  Image,
  ModalHeaderContent,
  ModalWarpper
} from 'assets/styles/pages.style';

import CartPopUp from '../features/carts/cart-popup'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTrendingSerivces } from '../redux/actions/serviceActions'
import { ServerUrl } from '../constants';
import CategoryCarousel from '../components/carousel/CategoryCarousel';
import { useHistory } from 'react-router-dom';
import HeadingTitle from '../components/heading/headingTitle';
import { getCategory } from '../redux/actions/categoryActions';
import { getDeals, getOffers } from '../redux/actions/offerDealActions';
import CustomModal from '../components/modal/customModal';
import { toggleModal } from '../redux/actions/appActions';

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
  const { deals, offers } = useSelector(state => state.offerDeal)
  const [loading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory()
  const { desktop, tablet, mobile } = deviceType;
  const isOpen = useSelector(state => state.app.isModalOpen)

  const getSerivces = () => {
    setIsLoading(true)
    dispatch(getCategory(salonId, undefined, true,))
    dispatch(getTrendingSerivces(salonId, undefined, true,)).then((res) => {
      if (res.payload.status === 200) {
        setIsLoading(false)
      }
    }).catch((err) => {
      setIsLoading(true)
    });
  }
  const getOffersDeals = () => {
    dispatch(getDeals(salonId, undefined, true))
    dispatch(getOffers(salonId, undefined, true))
  }
  // const handleLoadMore = () => {
  //   setPage(page + 1)
  // };
  useEffect(() => {
    getSerivces()
    getOffersDeals()
  }, [])


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

  const NewsLetter = () => {
    return (
      <Modal>
        <ModalHeader>
          <Image src={Saloon} />
          <ModalHeaderContent>
            <ModalWarpper>
              <ModalTitle>Dont miss out.</ModalTitle>
              <p>Sign up for our newsletter to stay in the loop.</p>
            </ModalWarpper>
          </ModalHeaderContent>
        </ModalHeader>

        <ModalBody>

          <Input
            type="text"
            label="Name"
            name="name"
            placeholder="Email Address"
            value=""
            onChange={() => { }}
            backgroundColor="#F7F7F7"
            height="48px"
            required
          // intlInputLabelId="profileNameField"
          />
          <Button size="big" style={{ width: "auto" }} onClick={() => { }}>
            Subscribe
          </Button>
        </ModalBody>
      </Modal>
    )
  }

  return (
    <Modal>
      <MobileBanner imageUrl={Saloon} intlTitleId={shop?.tagLine || 'adasd'} />
      <Banner imageUrl={Saloon} intlTitleId={shop?.tagLine || 'dasd'}
      />
      {allCategories?.length > 0 && (
        <CategoryContent>
          <HeadingTitle title="Categories" deviceType={deviceType} />
          <CategoryContainer>
            <CategoryCarousel data={allCategories} deviceType={deviceType} />
          </CategoryContainer>
        </CategoryContent >
      )}

      {offers?.length > 0 && (

        <OfferSection>
          <HeadingTitle title="Latest Offers" deviceType={deviceType} buttonText="View All" buttonOnClick={() => history.push('/offers-deals/offers')} />

          <OfferContainer>
            {offers?.map((offer, index) => {
              return (
                <>
                  <OfferItem>
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
                  </OfferItem>

                </>
              );
            }).slice(0, mobile ? 5 : 2)}
          </OfferContainer>
        </OfferSection>
      )}
      <MainContentArea>
        <HeadingTitle title="Top Trending Services" subTitle="Our Services" deviceType={deviceType} />

        <ProductGrid data={data}
          deviceType={deviceType}
          loading={loading}

        />
      </MainContentArea>
      {deals?.length > 0 && (
        <OfferSection>
          <HeadingTitle title="Limited Time Deals" deviceType={deviceType} buttonText="View All" buttonOnClick={() => history.push('/offers-deals/deals')} />

          <div style={{ width: '100%', position: 'relative', height: '100%' }}>
            <Carousel deviceType={deviceType} data={deals} />
          </div>
        </OfferSection>
      )}
      <CartPopUp deviceType={deviceType} />
      <CustomModal component={NewsLetter} isOpen={isOpen} isClose={() => dispatch(toggleModal())} />
    </Modal >
  );
}

