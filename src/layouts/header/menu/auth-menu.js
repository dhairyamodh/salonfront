import React from 'react';
import { Button } from 'components/button/button';
import { FormattedMessage } from 'react-intl';
import Popover from 'components/popover/popover';
import { AuthorizedMenu } from './authorized-menu';


const AuthMenu = ({ isAuthenticated, onJoin, onLogout, avatar }) => {
  return !isAuthenticated ? (
    <Button variant="primary" onClick={onJoin}>
      <FormattedMessage id="joinButton" defaultMessage="join" />
    </Button>
  ) : (
    <Popover
      direction="right"
      className="user-pages-dropdown"
      handler={<img src={avatar} alt="user" />}
      content={<AuthorizedMenu onLogout={onLogout} />}
    />
  );
};
export default AuthMenu;
