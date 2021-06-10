import React from 'react';
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
} from './sidebar.style';

import { TreeMenu } from 'components/tree-menu/tree-menu';

import CategoryWalker from 'components/category-walker/category-walker';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';


const SidebarCategory = ({
  deviceType: { mobile, tablet, desktop },
  type,
}) => {
  const router = useHistory();
  const { allCategories: data } = useSelector(state => state.shop)
  const { loading } = useSelector(state => state.app)
  const { pathname, query } = useLocation();
  const selectedQueries = query;
  const onCategoryClick = (slug) => {
    const { type, ...rest } = query;
    if (type) {
      router.push(
        {
          pathname,
          query: { ...rest, category: slug },
        },
        {
          pathname: `/${type}`,
          query: { ...rest, category: slug },
        }
      );
    } else {
      router.push({
        pathname,
        query: { ...rest, category: slug },
      });
    }
  };
  const isSidebarSticky = true;
  if (!data || loading) {
    if (mobile || tablet) {
      return <SidebarMobileLoader />;
    }
    return <SidebarLoader />;
  }
  return (
    <CategoryWrapper>
      <PopoverWrapper>
        <CategoryWalker>
          <TreeMenu
            data={data}
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
