import React from 'react';
import { useLocation } from 'react-router-dom';
import { openModal, closeModal } from '@redq/reuse-modal';
import MobileDrawer from './mobile-drawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  SearchWrapper,
  SearchModalWrapper,
  SearchModalClose,
} from './header.style';
import Search from '../../features/search/search';

import { SearchIcon } from '../../assets/icons/SearchIcon';
import { LongArrowLeft } from '../../assets/icons/LongArrowLeft';
import Logo from '../../layouts/logo/logo';
import { isCategoryPage } from '../is-home-page';
import useDimensions from '../../utils/useComponentSize';
import { useSelector } from 'react-redux';
import { ServerUrl } from '../../constants';


const SearchModal = () => {
  const onSubmit = () => {
    closeModal();
  };
  return (
    <SearchModalWrapper>
      <SearchModalClose type='submit' onClick={() => closeModal()}>
        <LongArrowLeft />
      </SearchModalClose>
      <Search
        className='header-modal-search'
        showButtonText={false}
        onSubmit={onSubmit}
      />
    </SearchModalWrapper>
  );
};

const MobileHeader = ({ className }) => {
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
      closeOnClickOutside: false,
      component: SearchModal,
      closeComponent: () => <div />,
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
