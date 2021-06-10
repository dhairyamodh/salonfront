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
import LogoImage from 'assets/images/logo.svg';

import { SearchIcon } from '../../assets/icons/SearchIcon';
import { LongArrowLeft } from '../../assets/icons/LongArrowLeft';
import Logo from '../../layouts/logo/logo';
import { isCategoryPage } from '../is-home-page';
import useDimensions from '../../utils/useComponentSize';


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
  const { pathname, query } = useLocation();

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
  const type = pathname === '/' ? 'restaurant' : query;

  const isHomePage = isCategoryPage(type);

  return (
    <MobileHeaderWrapper>
      <MobileHeaderInnerWrapper className={className} ref={mobileHeaderRef}>
        <DrawerWrapper>
          <MobileDrawer />
        </DrawerWrapper>

        <LogoWrapper>
          <Logo imageUrl={LogoImage} alt='shop logo' />
        </LogoWrapper>

        {/* {isHomePage ? ( */}
        <SearchWrapper
          onClick={handleSearchModal}
          className='searchIconWrapper'
        >
          <SearchIcon />
        </SearchWrapper>
        {/* ) : null} */}
      </MobileHeaderInnerWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
