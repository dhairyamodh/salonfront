import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import texture from 'assets/images/texture.png';
import css from '@styled-system/css';


export const MobileCarouselDropdown = styled.div`
width: 100%;
display:flex;
  @media (min-width: 990px) {
    display: none;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  background-color: ${themeGet("colors.gray.300", "#f4f4f4")};
`;

const MainContentArea = styled.main`
  overflow: hidden;
  width: 100%;
  padding: 80px;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  transition: padding-right 0.35s ease-in-out;
  border-bottom: 1px solid #f1f1f1;
  @media (max-width: 990px) {
    background-color: ${themeGet("colors.white", "#ffffff")};
    padding: 70px 0px;
  }
`;

const SidebarSection = styled.div`
padding: 30px 0;

  background-color: ${themeGet("colors.white", "#ffffff")};
  width: 280px;
  @media (max-width: 990px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  width: calc(100% - 280px);
  height: auto;
  padding: 30px 10px 50px;

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 10px 10px 50px;
  }

  @media (max-width: 1367px) and (min-width: 1200px) {
    padding: 10px 10px 50px;
  }

  @media (max-width: 990px) {
    width: 100%;
    padding: 5px 0px 100px;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }

  .offer-slider {
    padding: 0 0 30px 30px;
  }
`;

const Heading = styled.h2`
  font-size: ${themeGet("fontSizes.xl", "24")}px;
  font-weight: ${themeGet("fontWeights.bold", "700")};
  color: ${themeGet("colors.primary.regular", "#009e7f")};
  padding: 0px 20px 20px;
  margin: 50px 10px 20px;
  border-bottom: 2px solid ${themeGet("colors.primary.regular", "#009e7f")};
  width: auto;
  display: inline-block;
`;

export const ProductsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  background-color: ${themeGet("colors.gray.200", "#f7f7f7")};

  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
    margin-top: 15px;
  }
`;

const ProductsCol = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;

  @media (max-width: 1650px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (max-width: 1300px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }
  @media (max-width: 1199px) and (min-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 899px) and (min-width: 769px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 15px;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 490px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;


export {
  HeaderSection,
  MainContentArea,
  SidebarSection,
  ContentSection,
  Heading,
  ProductsCol,
};
