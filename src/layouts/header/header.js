import React from 'react';
import { openModal } from '@redq/reuse-modal';
import '@redq/reuse-modal/lib/index.css';
import AuthenticationForm from '../../features/authentication-form';
import { RightMenu } from './menu/right-menu/right-menu';
import { LeftMenu } from './menu/left-menu/left-menu';
import HeaderWrapper from './header.style';
import LogoImage from 'assets/images/logo.svg';
import UserImage from 'assets/images/user.jpg';
import { isCategoryPage } from '../is-home-page';
import Search from 'features/search/search';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { signIn, signOut } from '../../redux/actions/authActions';

const Header = ({ className, history }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      dispatch(signOut());
      history.push('/');
    }
  };

  const handleJoin = () => {
    dispatch(signIn());
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };
  const { pathname, query } = useLocation();
  const showSearch = isCategoryPage(query)
  return (
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
      <Search minimal={true} className="headerSearch" />
      <RightMenu
        isAuthenticated={isAuthenticated}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
