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
import Filter from 'assets/icons/Filter'


const CategoryWalker = ({
  style,
  className,
  isModal,
  onClose,
  onToggle,
  children,
  categoryName,
  title
}) => {
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
        <Filter style={{ marginRight: 5 }} />Filter
      </Button>
      <SpringModal title={title} isOpen={isModal} onRequestClose={() => onToggle()}>
        {children}
      </SpringModal>
    </WalkerWrapper>
  );
};

export default CategoryWalker;
