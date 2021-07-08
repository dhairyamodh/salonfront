import React, { useEffect, useState } from 'react';
import Sticky from 'react-stickynode';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import {
  SidebarMobileLoader,
  SidebarLoader,
} from 'components/placeholder/placeholder';
import {
  CategoryWrapper,
  TreeWrapper,
  PopoverWrapper,
  SidebarWrapper,
  RequestMedicine,
  SidebarTitle
} from './sidebar.style';
import { FormattedMessage } from 'react-intl';

import { TreeMenu } from 'components/tree-menu/tree-menu';

import CategoryWalker from 'components/category-walker/category-walker';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { getCategory } from '../../redux/actions/categoryActions'

const SidebarCategory = ({
  deviceType: { mobile, tablet, desktop },
  setFilterService,
  type,
}) => {
  const dispatch = useDispatch();
  const { allCategories: data } = useSelector(state => state.category)
  const { salonId } = useSelector(state => state.salon)
  const { loading } = useSelector(state => state.app)
  const { pathname, query } = useLocation();
  const selectedQueries = query;
  const [categoryId, setCategoryId] = useState()
  const [categoryName, setCategoryName] = useState()
  const [isModal, setIsModal] = useState()
  const onCategoryClick = ({ id, categoryName }) => {
    setFilterService(id)
    setCategoryId(id)
    setCategoryName(categoryName)
    setIsModal(false)
    // setIsLoading(true)
  };
  const isSidebarSticky = true;
  if (!data || loading) {
    if (mobile || tablet) {
      return <SidebarMobileLoader />;
    }
    return <SidebarLoader />;
  }
  useEffect(() => {
    dispatch(getCategory(salonId))
  }, [])
  return (
    <CategoryWrapper>
      <PopoverWrapper>
        <CategoryWalker isModal={isModal} onToggle={() => setIsModal(!isModal)} onClose={() => setIsModal(false)} categoryName={categoryName}>
          <TreeMenu
            data={data}
            activeClass={categoryId}
            onClick={onCategoryClick}
            active={selectedQueries}
          />
        </CategoryWalker>
      </PopoverWrapper>

      <SidebarWrapper >
        <Sticky enabled={isSidebarSticky} top={110}>
          <Scrollbar className="sidebar-scrollbar">
            <TreeWrapper>
              <TreeMenu
                data={data}
                activeClass={categoryId}
                onClick={onCategoryClick}
                active={selectedQueries}
              />
            </TreeWrapper>
          </Scrollbar>
        </Sticky>
      </SidebarWrapper>
    </CategoryWrapper>
  );
};

export default SidebarCategory;
