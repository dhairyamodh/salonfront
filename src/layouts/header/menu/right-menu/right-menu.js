import React from 'react';
import dynamic from 'next/dynamic';

import { HelpIcon } from 'assets/icons/HelpIcon';
import { RightMenuBox } from './right-menu.style';
import AuthMenu from '../auth-menu'


export const RightMenu = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin,
  userName
}) => {
  return (
    <RightMenuBox>


      <AuthMenu
        avatar={avatar}
        onJoin={onJoin}
        onLogout={onLogout}
        isAuthenticated={isAuthenticated}
        userName={userName}
      />
    </RightMenuBox>
  );
};
