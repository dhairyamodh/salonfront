import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import css from '@styled-system/css';

export const CategoryTitle = styled.h5`
  text-transform: capitalize;
  color: ${themeGet('colors.text.bold')};
  white-space: nowrap; 
  width: 140px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  transition: 0.25s all ease-in-out;
  @media (max-width: 768px) {
   
  }
`;

export const CategorySubTitle = styled.p`
color: ${themeGet('colors.gray.950')};
transition: 0.25s all ease-in-out;

  @media (max-width: 768px) {
   
  }
`;

export const MobileCategoryTitle = styled.h6`
  text-transform: capitalize;
  color: ${themeGet('colors.text.bold')};
  width: 70px;
  white-space: nowrap; 
  text-align:center;
  overflow: hidden;
  text-overflow: ellipsis; 
  transition: 0.25s all ease-in-out;
`;


export const CategoryCard = styled.div`
  margin: 10px;
  width: auto;
  height: auto;
  display:flex;
  border-radius: 100px;
//   margin-bottom: 20px;
background: white;
border: 1px solid #eee;
  transition: 0.25s all ease-in-out;
  cursor:pointer;
  &:hover {
    background-color:${themeGet('colors.secondaryLight.regular')};
    transform: translateY(-5px);
//   box-shadow: ${themeGet('shadows.base', '0 8px 35px rgba(0, 0, 0, 0.5)')};
border-color:${themeGet('colors.secondary.regular')};
    ${CategoryTitle} {
      color:#000;
    }
    ${CategorySubTitle} {
        color:#000;
      }
  }
  @media (max-width: 768px) {
    
  }
`;

export const MobileCategoryCard = styled.div`
  // margin:0 15px;
  width: 100%;
  height: auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius: 100px;
//   margin-bottom: 20px;
background: white;
padding: 0 10px;
  transition: 0.25s all ease-in-out;
  cursor:pointer;
  @media (max-width: 990px) {
    &:last-child {
      margin-right: 10px;
    }
    &:first-child {
      margin-left: 10px;
    }
  }
`;

export const CategoryImageContainer = styled.div`
width: 80px;
height: 80px;
padding: 5px;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 768px) {
    
  }
`;

export const MobileCategoryImageContainer = styled.div`
width: 60px;
height: 60px;
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 768px) {
    
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: white;
  object-fit:cover;
  margin: 5px;
  @media (max-width: 768px) {
    
  }
`;


export const MobileCategoryImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: white;
  object-fit:cover;
  
`;

export const CategoryCardWrapper = styled.div`
  padding:10px 10px;
  display:flex;
  justify-content:space-around;
  align-items:flex-start;
  flex-direction:column;
  @media (max-width: 768px) {
    
  }
`;

export const MobileCategoryCardWrapper = styled.div`
  padding:10px 0;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
  @media (max-width: 768px) {
    
  }
`;

export const ButtonPrev = styled('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${themeGet('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -20px;
  z-index: 99;
`;

export const ButtonNext = styled('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  padding: 0;
  border-radius: 20px;
  box-shadow: ${themeGet('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0px;
  margin-top: -20px;
  z-index: 99;
`;