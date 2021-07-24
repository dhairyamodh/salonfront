import React, { useContext } from 'react';
import { openModal } from '@redq/reuse-modal';
import '@redq/reuse-modal/lib/index.css';
import { FormattedMessage } from 'react-intl';
import { Scrollbar } from '../../components/scrollbar/scrollbar';
import Drawer from '../../components/drawer/drawer';
import { Button } from '../../components/button/button';
import NavLink from '../../components/nav-link/nav-link';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import AuthenticationForm from '../../features/authentication-form';
import {
  DrawerBody,
  HamburgerIcon,
  DrawerContentWrapper,
  DrawerClose,
  DrawerProfile,
  LogoutView,
  LoginView,
  UserAvatar,
  UserDetails,
  DrawerMenu,
  DrawerMenuItem,
  UserOptionMenu,
} from './header.style';
import UserImage from 'assets/images/user.jpg';
import {
  MOBILE_DRAWER_MENU,
  PROFILE_PAGE,
} from 'site-settings/site-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../../redux/actions/appActions';
import { signIn, signOut } from '../../redux/actions/authActions';
import { useHistory } from 'react-router-dom';

const MobileDrawer = () => {
  const history = useHistory()
  const isDrawerOpen = useSelector(state => state.app.isDrawerOpen);
  const dispatch = useDispatch();
  const { isAuthenticated, name, email } = useSelector(state => state.auth)
  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch(toggleDrawer());
  }, [dispatch]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      dispatch(signOut());
      history.push('/');
    }
  };

  const signInOutForm = () => {
    dispatch(toggleDrawer());

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

  return (
    <Drawer
      width='316px'
      drawerHandler={
        <HamburgerIcon>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      }
      open={isDrawerOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <DrawerClose>
          <CloseIcon />
        </DrawerClose>
      }
    >
      <DrawerBody>
        <Scrollbar className='drawer-scrollbar'>
          <DrawerContentWrapper>
            <DrawerProfile>
              {isAuthenticated ? (
                <LoginView>
                  {/* <UserAvatar>
                    <img src={UserImage} alt='user_avatar' />
                  </UserAvatar> */}
                  <UserDetails>
                    <h3>{name}</h3>
                    <span>{email}</span>
                  </UserDetails>
                </LoginView>
              ) : (
                <LogoutView>
                  <Button variant='primary' onClick={signInOutForm}>
                    <FormattedMessage
                      id='mobileSignInButtonText'
                      defaultMessage='Login'
                    />
                  </Button>
                </LogoutView>
              )}
            </DrawerProfile>

            <DrawerMenu>
              {MOBILE_DRAWER_MENU.map((item) => {
                if (item.isAuthorized) {
                  return isAuthenticated && (

                    <DrawerMenuItem key={item.id}>
                      <NavLink
                        onClick={toggleHandler}
                        href={item.href}
                        label={item.defaultMessage}
                        intlId={item.id}
                        className='drawer_menu_item'
                      />
                    </DrawerMenuItem>
                  )
                } else {
                  return (
                    <DrawerMenuItem key={item.id}>
                      <NavLink
                        onClick={toggleHandler}
                        href={item.href}
                        label={item.defaultMessage}
                        intlId={item.id}
                        className='drawer_menu_item'
                      />
                    </DrawerMenuItem>
                  )
                }
              })}
            </DrawerMenu>

            {isAuthenticated && (
              <UserOptionMenu>
                {/* <DrawerMenuItem>
                  <NavLink
                    href={PROFILE_PAGE}
                    onClick={toggleHandler}
                    label='Your Account Settings'
                    className='drawer_menu_item'
                    intlId='navlinkAccountSettings'
                  />
                </DrawerMenuItem> */}
                <DrawerMenuItem>
                  <div onClick={handleLogout} className='drawer_menu_item'>
                    <span className='logoutBtn'>
                      <FormattedMessage
                        id='navlinkLogout'
                        defaultMessage='Logout'
                      />
                    </span>
                  </div>
                </DrawerMenuItem>
              </UserOptionMenu>
            )}
          </DrawerContentWrapper>
        </Scrollbar>
      </DrawerBody>
    </Drawer>
  );
};

export default MobileDrawer;
