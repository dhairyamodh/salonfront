import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import { LayoutWrapper } from './layout.style';
import { isCategoryPage } from './is-home-page';
import MobileHeader from './header/mobile-header'
import { useLocation } from 'react-router';


const Layout = ({
  className,
  children,
  deviceType,
  token,
}) => {
  const [isSticky, setSticky] = useState(true)
  const { pathname, query } = useLocation();

  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 800) {
  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // });

  const isHomePage = isCategoryPage(query) || pathname === '/bakery';
  return (
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      <Sticky enabled={isSticky} innerZ={1001}>
        <MobileHeader
          className={`${isSticky ? 'sticky' : 'unSticky'} home desktop`}
          deviceType={deviceType}
        />

        <Header
          className={`${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''
            }`}
        />
      </Sticky>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
