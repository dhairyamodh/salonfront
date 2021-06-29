import React, { useState, useEffect } from 'react';
import {
  WalkerWrapper,
  Category,
  NoCategory,
  IconWrapper,
  CategoryWrapper,
} from './category-walker.style';
import { Button } from 'components/button/button';
import SpringModal from 'components/spring-modal/spring-modal';
// import { TreeMenu } from 'components/tree-menu/tree-menu';
import startCase from 'lodash/startCase';
import { useLocation } from 'react-router-dom';


const CategoryWalker = ({
  style,
  className,
  isModal,
  onClose,
  onToggle,
  children,
  categoryName
}) => {
  const [isOpen, setOpen] = useState(false);
  const { query } = useLocation();
  return (
    <WalkerWrapper style={style} className={className}>
      <CategoryWrapper>
        {categoryName ? (
          <Category>{startCase(categoryName)}</Category>
        ) : (
          <NoCategory>No Category Selected</NoCategory>
        )}
        {/* <IconWrapper>
          <ArrowNext width="13px" />
        </IconWrapper>
        <Category>{children}</Category> */}
      </CategoryWrapper>

      <Button variant='text' onClick={() => onToggle()}>
        Filter
      </Button>
      <SpringModal isOpen={isModal} onRequestClose={() => onToggle()}>
        {children}
      </SpringModal>
    </WalkerWrapper>
  );
};

export default CategoryWalker;
