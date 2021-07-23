import React from 'react';
import { Button } from 'components/button/button';
import { FormattedMessage } from 'react-intl';
import Popover from 'components/popover/popover';
import { AuthorizedMenu } from './authorized-menu';
import styled from 'styled-components';
import css from '@styled-system/css';

const UserName = styled.h6(
  css({
    textTransform: 'capitalize',
    color: 'secondary.regular',
  })
)

const AuthMenu = ({ isAuthenticated, onJoin, onLogout, avatar, userName }) => {

  return !isAuthenticated ? (
    <Button variant="secondary" onClick={onJoin}>
      <FormattedMessage id="loginButton" defaultMessage="join" />
    </Button>
  ) : (
    <Popover
      direction="right"
      className="user-pages-dropdown"
      handler={<UserName >{userName}</UserName>}
      content={<AuthorizedMenu onLogout={onLogout} />}
    />
  );
};
export default AuthMenu;
