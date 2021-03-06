import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PageWrapper = styled.div`
  width: 100%;
  // height: auto;
  min-height: 100vh;
  background-color: ${themeGet('colors.white', '#ffffff')};
  padding: 140px 80px 40px;

  @media only screen and (max-width: 990px) {
    padding: 100px 0 60px;
  }

  @media only screen and (min-width: 991px) and (max-width: 1280px) {
    padding: 130px 15px 60px;
  }
`;

const SidebarSection = styled.div`
  width: 300px;
  flex-shrink: 0;
  margin-right: 30px;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const ContentBox = styled.div`
  width: calc(100% - 330px);
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding: 60px 50px 20px;
  border-radius: ${themeGet('radii.big')};
  border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};

  @media only screen and (max-width: 1199px) {
    width: 100%;
    border: 0;
    padding: 20px;
  }
`;

const BookingTitle = styled.h2`
width:100%;
padding-bottom: 30px;
border-bottom: 1px solid #f1f1f1;

@media only screen and (max-width: 990px) {
  padding: 20px;
  font-size:${themeGet("fontSizes.xxl")}px;

}
  @media only screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;

const BookingContent = styled.div`
  width: 100%;
  padding: 20px 20px;
  @media only screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;


const BookingContentBox = styled.div`
  width: 50%;
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding:0 20px;

  @media only screen and (max-width: 1199px) {
    width: 100%;
    border: 0;
    padding-bottom: 20px;
  }
`;

const BookingContentTimeBox = styled.div`
  width: 50%;
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding:0 20px;

  @media only screen and (max-width: 1199px) {
    width: 100%;
    border: 0;
    padding-bottom: 20px;
  }
`;

export { PageWrapper, SidebarSection, ContentBox, BookingContentBox, BookingContentTimeBox, BookingContent, BookingTitle };
