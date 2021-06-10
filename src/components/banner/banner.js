import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Box,
  Image,
  Content,
  Title,
  Description,
  SearchWrapper,
} from './banner.style';

import { Waypoint } from 'react-waypoint';
import Search from 'features/search/search';
import { useDispatch } from 'react-redux';
import { setSticky, removeSidebarSticky } from '../../redux/actions/appActions'


export const Banner = ({
  style,
  imageUrl,
  intlTitleId,
  intlDescriptionId,
}) => {
  const dispatch = useDispatch();
  const sticky = dispatch(setSticky())
  const removesticky = dispatch(removeSidebarSticky())
  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };
  return (
    <Box display={['none', 'none', 'flex']} style={style}>
      <Image backgroundImage={`url(${imageUrl})`} />
      <Content>
        <Title>
          <FormattedMessage
            id={intlTitleId}
            defaultMessage={intlTitleId}
            values={{ minute: 90 }}
          />
        </Title>
        <Description>
          <FormattedMessage
            id={intlDescriptionId}
            defaultMessage={intlDescriptionId}
          />
        </Description>
        <SearchWrapper>
          <Search
            className="banner-search"
            shadow="0 21px 36px rgba(0,0,0,0.05)"
          />
        </SearchWrapper>
        <Waypoint
          onEnter={removesticky}
          onLeave={sticky}
          onPositionChange={onWaypointPositionChange}
        />
      </Content>
    </Box>
  );
};
