import React, { useEffect } from 'react';
import { openModal } from '@redq/reuse-modal';
import '@redq/reuse-modal/lib/index.css';
import AuthenticationForm from '../../features/authentication-form';
import { RightMenu } from './menu/right-menu/right-menu';
import { LeftMenu } from './menu/left-menu/left-menu';
import HeaderWrapper from './header.style';
// import UserImage from 'assets/images/user.jpg';
import Search from 'features/search/search';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../redux/actions/authActions';
import { ServerUrl } from '../../constants';
import { useHistory } from 'react-router-dom';


const Header = ({ className }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      dispatch(signOut());
      history.push('/');
    }
  };

  const handleJoin = () => {
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'modal',
        width: 458,
        height: 'auto',
      },
    });
  };

  const { logo: LogoImage } = useSelector(state => state.salon.salonData)

  const { name } = useSelector(state => state.auth)


  return (
    <HeaderWrapper className={className} id="layout-header">
      {LogoImage && <LeftMenu logo={ServerUrl + LogoImage} />}
      <Search minimal={false} className="headerSearch" />
      <RightMenu
        isAuthenticated={isAuthenticated}
        onJoin={handleJoin}
        onLogout={handleLogout}
        userName={name}
      // avatar={UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
