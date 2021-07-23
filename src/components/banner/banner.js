import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Box,
  Image,
  Content,
  Title,
  subTitle,
  Description,
  SearchWrapper,
  SearchContainer,
  Row,
  Col
} from './banner.style';
import { Input, Textarea } from "components/forms/input";
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
        {
          intlDescriptionId && <Description>
            <FormattedMessage
              id={intlDescriptionId}
              defaultMessage={intlDescriptionId}
            />
          </Description>
        }


        {/* <SearchWrapper>
          <Search
            className="banner-search"
            shadow="0 21px 36px rgba(0,0,0,0.05)"
          />
        </SearchWrapper> */}
        <Waypoint
          onEnter={removesticky}
          onLeave={sticky}
          onPositionChange={onWaypointPositionChange}
        />
      </Content>
      {/* <SearchContainer>
        <h5>Search Sevices</h5>
        <SearchWrapper>
          <Search minimal={false}
            className="banner-search"
            shadow="0 21px 36px rgba(0,0,0,0.05)"
          />
        </SearchWrapper>
      </SearchContainer> */}
    </Box>
  );
};
