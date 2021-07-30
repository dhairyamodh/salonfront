import dynamic from 'next/dynamic';
import React, { useCallback, useState } from 'react';
import {
  Box,
  Content,
  ContentRow,
  Description,
  Image,
  SearchWrapper,
} from './banner.style';

import { Waypoint } from 'react-waypoint';
import { Button } from 'components/button/button';
import Search from 'features/search/search';
import SpringModal from 'components/spring-modal/spring-modal'
import CategoryIconNav from 'components/type-nav/type-nav';
import { useDispatch } from 'react-redux';
import { removeSidebarSticky, setSticky } from 'redux/actions/appActions';


export const MobileBanner = ({ type, intlTitleId, imageUrl }) => {
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();
  const sticky = dispatch(setSticky())
  const removesticky = dispatch(removeSidebarSticky())
  const onWaypointPositionChange = ({ currentPosition }) => {

    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };
  return (
    <Box display={['flex', 'flex', 'none']}>
      <Content>
        {/* <Image backgroundImage={`url(${imageUrl})`} /> */}
        {/* <ContentRow>
          <Description>
            <FormattedMessage
              id={intlTitleId}
              defaultMessage={intlTitleId}
              values={{ minute: 90 }}
            />
          </Description>

          <Button
            variant="text"
            onClick={() => setOpen(true)}
            style={{ textTransform: 'capitalize' }}
          >
            {type}
          </Button>
        </ContentRow> */}

        {/* <SearchWrapper>
          <Search minimal={true} />
        </SearchWrapper> */}
        {/* <Waypoint
          onEnter={removesticky}
          onLeave={sticky}
          onPositionChange={onWaypointPositionChange}
        /> */}
        {/* <SpringModal isOpen={isOpen} onRequestClose={() => setOpen(false)}>
          <CategoryIconNav />
        </SpringModal> */}
      </Content>
    </Box>
  );
};
