import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


const Icon = styled.span`
  min-width: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
cursor:pointer;
`;

const NavLink = ({
  href,
  label,
  intlId,
  icon,
  className,
  onClick,
  iconClass,
  dynamic,
}) => {
  const router = useHistory()
  console.log(href);
  const isCurrentPath = router.pathname === href || router.asPath === href;
  return (
    <div onClick={onClick} className={className ? className : ''}>
      {dynamic ? (
        <Link onClick={() => router.push(href)}
          className={isCurrentPath ? ' current-page' : ''}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {icon ? <Icon className={iconClass}>{icon}</Icon> : ''}

          <span className="label">
            {intlId ? (
              <FormattedMessage
                id={intlId ? intlId : 'defaultNavLinkId'}
                defaultMessage={label}
              />
            ) : (
              label
            )}
          </span>
        </Link>
      ) : (
        <Link onClick={() => router.push(href)}
          className={isCurrentPath ? ' current-page' : ''}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {icon ? <Icon className={iconClass}>{icon}</Icon> : ''}

          <span className="label">
            {intlId ? (
              <FormattedMessage
                id={intlId ? intlId : 'defaultNavLinkId'}
                defaultMessage={label}
              />
            ) : (
              label
            )}
          </span>
        </Link>
      )}
    </div>
  );
};

export default NavLink;
