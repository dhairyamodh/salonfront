import React, { useState } from 'react';
import { openModal, closeModal } from '@redq/reuse-modal';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer,
} from 'assets/styles/product-single.style';
import ProductDetails from 'components/product-details/product-details-one/product-details-one'
import MobileDrawer from './mobile-drawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchModalWrapper,
  SearchModalClose,
  SearchModalContainer,
  ItemContainer,
  Item,
  ItemImageContainer,
  ItemImage,
  Title,
  SubTitle,
  ItemContent,
  LoaderContainer
} from './header.style';
import Search from '../../features/search/search';

import { SearchIcon } from '../../assets/icons/SearchIcon';
import { ShoppingBag } from '../../assets/icons/ShoppingBag';
import { LongArrowLeft } from '../../assets/icons/LongArrowLeft';
import Logo from '../../layouts/logo/logo';
import useDimensions from '../../utils/useComponentSize';
import { useSelector, useDispatch } from 'react-redux';
import { RootUrl, ServerUrl } from '../../constants';
import Cart from '../../features/carts/cart';
import Loader from '../../components/loader/loader'
import axios from 'axios';
import { getSerivceById } from '../../redux/actions/serviceActions';


const SearchModal = ({ deviceType }) => {
  const [searchTerm, setSearchTerm] = useState()
  const dispatch = useDispatch();
  const { salonId } = useSelector(state => state.salon)
  const [state, setState] = useState({ isLoading: false, searchResults: [] })
  const { isLoading, searchResults } = state
  const onSubmit = (value) => {
    handleSearch(value)
    // closeModal();
  };
  const handleOnChange = (e) => {
    e.preventDefault()
    const { value } = e.target;
    handleSearch(value)

    // dispatch(setSearchTerm(value));
  };

  const serviceModal = ({ data }) => {

    return (
      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            <ProductDetails product={data} deviceType={deviceType} />
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    )
  }
  const handleItemClick = (id) => {
    dispatch(getSerivceById(salonId, undefined, id)).then((res) => {
      if (res.payload.status == 200) {

        const data = res.payload.data.data

        openModal({
          show: true,
          overlayClassName: 'quick-view-overlay',
          closeOnClickOutside: true,
          component: data ? serviceModal : loadingModal,
          componentProps: { data: data },
          closeComponent: '',
          config: {
            enableResizing: false,
            disableDragging: true,
            className: 'modal',
            width: '100%',
            height: 'auto',
          },
        });
      }
    })
  }
  const handleSearch = async (value) => {
    if (value && value.length > 1) {
      setState({ isLoading: true, searchResults: [] })
      await axios.get(`${RootUrl}/services/search?salonId=${salonId}&searchTerm=${value}`).then((res) => {
        if (res.status == 200) {
          setState({ isLoading: false, searchResults: res.data.data })
        }
      })
      // console.log("value", value);
      // setSearchTerm(value)
      // handleSearch(value)
      // dispatch(searchService(salonId, undefined, value))


    }
  }
  return (
    <SearchModalWrapper>
      <SearchModalContainer>
        <SearchModalClose type='submit' onClick={() => closeModal()}>
          <LongArrowLeft />
        </SearchModalClose>
        <Search
          className='header-modal-search'
          showButtonText={false}
          onSubmit={onSubmit}
          value={searchTerm}
          handleOnChange={handleOnChange}
        />
      </SearchModalContainer>
      <ItemContainer>
        {isLoading &&
          <LoaderContainer>
            <Loader ></Loader>
          </LoaderContainer>}
        {
          searchResults.map((result) => {
            return (
              <Item onClick={() => handleItemClick(result.id)}>
                <ItemImageContainer>
                  <ItemImage src={ServerUrl + result.imageSrc} />
                </ItemImageContainer>
                <ItemContent>
                  <Title>{result.name}</Title>
                  <SubTitle>₹ {result.salePrice}</SubTitle>
                </ItemContent>
              </Item>
            )
          })
        }

      </ItemContainer>
    </SearchModalWrapper>
  );
};

const MobileHeader = ({ className, deviceType }) => {
  const { logo: LogoImage } = useSelector(state => state.salon.salonData)

  const [mobileHeaderRef, dimensions] = useDimensions();

  const handleSearchModal = () => {
    openModal({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%',
      },
      closeOnClickOutside: true,
      component: SearchModal,
      componentProps: { deviceType: deviceType },
      closeComponent: () => <div />,
    });
  };

  const handleCartModal = () => {
    openModal({
      show: true,
      config: {
        className: 'cartPopup',
        width: 'auto',
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        transition: {
          tension: 360,
          friction: 40,
        },
      },
      closeOnClickOutside: true,
      component: Cart,
      closeComponent: () => <div />,
      componentProps: { onCloseBtnClick: closeModal, scrollbarHeight: 330 },
    });
  };


  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className} ref={mobileHeaderRef}>
        <DrawerWrapper>
          <MobileDrawer />
        </DrawerWrapper>

        {LogoImage && <LogoWrapper>
          <Logo imageUrl={ServerUrl + LogoImage} />
        </LogoWrapper>}
        {/* <SearchWrapper
          onClick={handleCartModal}
          className='searchIconWrapper'
        >
          <ShoppingBag />
        </SearchWrapper> */}
        <SearchWrapper
          onClick={handleSearchModal}
          className='searchIconWrapper'
        >
          <SearchIcon />
        </SearchWrapper>
      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
