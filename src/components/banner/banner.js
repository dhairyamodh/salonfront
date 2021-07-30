import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import {
  Box,
  Image,
  Content,
  Title,
  SubTitle,
  Description,
  SearchWrapper,
  SearchContainer,
  Row,
  Col,
  TopTitle,
  Container
} from './banner.style';
import { Input, Textarea } from "components/forms/input";
import { Waypoint } from 'react-waypoint';
import Search from 'features/search/search';
import { useDispatch } from 'react-redux';
import { setSticky, removeSidebarSticky } from '../../redux/actions/appActions'
import { Button } from 'components/button/button';


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
  const history = useHistory()
  return (
    <Box display={['none', 'none', 'flex']} style={style}>
      <Image backgroundImage={`url(${imageUrl})`} />
      <Content>
        <Container>
          <TopTitle>
            Enjoy the soothing experience
          </TopTitle>
          <Title>
            Essense of <br /> natural beauty
          </Title>
          <SubTitle>We are open! Come and experience for <br /> yourself our newest treatments.</SubTitle>
          <Button size="big" style={{ width: "auto" }} onClick={() => { history.push('/services/all') }}>
            Book Now
          </Button>
        </Container>
        {/* {
          intlDescriptionId && <Description>
            <FormattedMessage
              id={intlDescriptionId}
              defaultMessage={intlDescriptionId}
            />
          </Description>
        } */}


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
