import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import texture from 'assets/images/texture.png';
import css from '@styled-system/css';

export const MobileCarouselDropdown = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;

const HeadingTitle = styled.h2`
width:100%;
padding: 30px 0;
border-bottom: 1px solid #f1f1f1;
margin-bottom: 10px;
@media only screen and (max-width: 990px) {
  padding:20px;
  font-size:${themeGet("fontSizes.xxl")}px;
}
  @media only screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;

const OfferPageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  justify-content: space-between;

  @media (max-width: 990px) {
    padding: 50px 0px 80px;
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
  padding: 40px 80px;
  background-color: white;
  transition: padding-right 0.35s ease-in-out;
  border-bottom: 1px solid #f1f1f1;
  @media (max-width: 990px) {
    background-color: ${themeGet("colors.white", "#ffffff")};
    padding: 20px 0 0px 0px;
  }
  
`;

const SidebarSection = styled.div`
  background-color: ${themeGet("colors.white", "#ffffff")};
  width: 280px;
  @media (max-width: 990px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  width: calc(100% - 280px);
  height: auto;
  min-height: 100vh;
  padding: 20px 10px 50px;

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

const OfferSection = styled.div`
  width: 100%;
  display: block;
  padding: 40px 80px;
  background-color: ${themeGet("colors.white", "#ffffff")};
  position: relative;
  border-bottom: 1px solid ${themeGet("colors.gray.500", "#f1f1f1")};

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 20px 15px;
    .prevButton {
      left: 0;
    }

    .nextButton {
      right: 0;
    }
  }
  @media (max-width: 990px) {
    padding: 20px 0 0px 0px;

    .prevButton {
      left: 5px;
    }

    .nextButton {
      right: 5px;
    }
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

export const CategoryContent = styled.div`
  padding: 40px 80px;
  border-bottom: 1px solid ${themeGet("colors.gray.500", "#f1f1f1")};
  background-color:white ;
  

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position:relative;
  overflow: hidden;
  // border-radius: 80px 0 0 0;
  // background-image: url(${texture}), linear-gradient(to right top, ${themeGet('colors.primary.regular')},  ${themeGet('colors.primary.regular')});
  background-repeat: no-repeat;
  background-size: cover;
  

`;


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
margin-bottom: 30px;
@media only screen and (max-width: 990px) {
  margin-bottom: 10px;
}
`;

const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items:flex-start;
`;

export const HeaderSubTitle = styled.h5`
  color: ${themeGet("colors.secondary.regular")};
  text-transform: uppercase;
margin-bottom: 10px;
`;


const OfferContainer = styled.div((props) =>
  css({
    display: 'grid',
    gridGap: '30px',
    gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',
    overflowX: 'auto',
    ...props.normal && { paddingTop: 30, },

    '@media screen and (max-width: 990px)': {
      ...!props.normal ? { display: 'flex', gridGap: '20px', paddingBottom: 20 } : {
        gridGap: '10px',
        gridTemplateColumns: 'repeat(1, minmax(48vw, 1fr))',
        paddingTop: 0,
      },

      // gridTemplateColumns: 'repeat(1, minmax(48vw, 1fr))',
    },

    '@media screen and (min-width: 991px)': {
      gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 1700px)': {
      gridTemplateColumns: 'repeat(2, minmax(240px, 1fr))',
    },

    '@media screen and (min-width: 1900px)': {
      gridTemplateColumns: 'repeat(2, minmax(240px, 1fr))',
    },
  })

);

const OfferItem = styled('div')`
  height: 250px;
  width: 100%;
  background-color: ${themeGet('colors.white', '#ffffff')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  position:relative;
  margin: 10px 0;
  display:inline-block;
  border-radius: 20px;

  // box-shadow: ${themeGet('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  &:after {
    content:'';
  position:absolute;
  border-radius: 20px;
  left:0; top:0;
  width:100%; 
  height:100%;
  display:inline-block;
  background: -webkit-linear-gradient(left, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%);
  background: -o-linear-gradient(left, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%);
  background: -ms-linear-gradient(left, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%);
  background: linear-gradient(to right, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%); 
  }
  @media only screen and (max-width: 990px) {
    height: 150px;
  width: 300px;
    &:last-child {
      margin-right: 20px;
    }
    &:first-child {
      margin-left: 20px;
    }
  }
`;

const OfferItemNormal = styled('div')`
  height: 250px;
  width: 100%;
  background-color: ${themeGet('colors.white', '#ffffff')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  margin: 10px 0;
  position:relative;
  display:inline-block;
  border-radius: 20px;

  // box-shadow: ${themeGet('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  &:after {
    content:'';
  position:absolute;
  border-radius: 20px;
  left:0; top:0;
  width:100%; 
  height:100%;
  display:inline-block;
  background: -webkit-linear-gradient(left, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%);
  background: -o-linear-gradient(left, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%);
  background: -ms-linear-gradient(left, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%);
  background: linear-gradient(to right, rgba(0,0,0,0.7) 0%,rgba(0,0,0, 0) 100%); 
  }
  @media only screen and (max-width: 990px) {
    height: 150px;
    
  }
`;

const OfferImage = styled('img')`
  position:absolute;
  border-radius:20px;
  width: 100%;
  height: 100%;
  object-fit:cover;
  top:0;
`;

const OfferCard = styled('div')`
position: relative;
padding: 20px;
width: 100%;
height: 100%;
z-index: 3;
display: flex;
border-radius:20px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
color: #fff;
transition: 0.25s all ease-in-out;
&:hover{
  background: ${themeGet('colors.primary.regular')}80;
}
@media only screen and (max-width: 990px) {
  width: 300px;
  
}
`;

const OfferTitle = styled('h5')`
padding: 5px;
font-size: 23px;
@media only screen and (max-width: 990px) {
  font-size: 18px;
}
`;


const OfferSubtitle = styled('p')`
padding:0 5px 10px 5px;
color:${themeGet('colors.gray.200',)};
@media only screen and (max-width: 990px) {
  font-size: 12px;
}
`;

const ModalHeader = styled.div(css({
  width: '100%',
  padding: 20,
  position: 'relative',
  'p': {
    color: 'gray.950',
    fontSize: 'base',
    fontWeight: 'semiBold',

  }
}))

const ModalTitle = styled.h5(css({
  color: 'secondary.regular',
  paddingBottom: 10,
  fontSize: 'xxl',

  fontWeight: 'bold',
  '@media screen and (max-width: 990px)': {
    fontSize: 'lg',

  },
}))

const ModalBody = styled.div(css({
  width: '100%',
  marginTop: '20px',
  padding: '0 20px 20px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  gridGap: 20,
  '@media screen and (max-width: 990px)': {
    display: 'block',


  },
}))

const Image = styled('img')`
  position:absolute;
  border-radius:100px;
  width: 120px;
  height: 120px;
  object-fit:cover;
  top:-20px;
  @media screen and (max-width: 990px) {
    display:none;
  }
`;

const ModalHeaderContent = styled.h5(css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
}))

const ModalWarpper = styled.h5(css({
  width: '70%',
  '@media screen and (max-width: 990px)': {
    width: '100%',

  },
}))

export {
  HeadingTitle,
  OfferPageWrapper,
  HeaderSection,
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  Heading,
  ProductsCol,
  HeaderContainer,
  HeaderWrapper,
  OfferCard,
  OfferItem,
  OfferImage,
  OfferTitle,
  OfferSubtitle,
  OfferContainer,
  OfferItemNormal,
  ModalHeader,
  ModalBody,
  ModalTitle,
  Image,
  ModalHeaderContent,
  ModalWarpper
};
