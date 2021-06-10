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
  children,
}) => {
  const [isOpen, setOpen] = useState(false);
  const { query } = useLocation();
  return (
    <WalkerWrapper style={style} className={className}>
      <CategoryWrapper>
        {query ? (
          <Category>{startCase(query)}</Category>
        ) : (
          <NoCategory>No Category Selected</NoCategory>
        )}
        {/* <IconWrapper>
          <ArrowNext width="13px" />
        </IconWrapper>
        <Category>{children}</Category> */}
      </CategoryWrapper>

      <Button variant='text' onClick={() => setOpen(true)}>
        Filter
      </Button>
      <SpringModal isOpen={isOpen} onRequestClose={() => setOpen(false)}>
        {children}
      </SpringModal>
    </WalkerWrapper>
  );
};

export default CategoryWalker;
