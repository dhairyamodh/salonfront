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
  newcategoryId,
  type,
}) => {
  const dispatch = useDispatch();
  const { allCategories: data } = useSelector(state => state.category)
  const { salonId } = useSelector(state => state.salon)
  const { loading } = useSelector(state => state.app)
  const [categoryId, setCategoryId] = useState(newcategoryId)

  const [newcategoryName, setCategoryName] = useState()
  const [isModal, setIsModal] = useState()
  const history = useHistory()
  const onCategoryClick = ({ _id, categoryName }) => {
    setCategoryId(_id)
    setCategoryName(categoryName)
    setIsModal(false)
    history.push(`/services/${_id}`)
  };
  const isSidebarSticky = true;
  if (!data || loading) {
    if (mobile || tablet) {
      return <SidebarMobileLoader />;
    }
    return <SidebarLoader />;
  }
  useEffect(() => {
    dispatch(getCategory(salonId, undefined, newcategoryId)).then((res) => {
      if (res.payload.status === 200) {
        const getCate = res.payload.data.data?.find((value) => value._id == newcategoryId)
        setCategoryName(getCate?.categoryName)
      }

    })
  }, [])
  return (
    <CategoryWrapper>
      <PopoverWrapper>

        <CategoryWalker isModal={isModal} title="Service Filter" onToggle={() => setIsModal(!isModal)} onClose={() => setIsModal(false)} categoryName={newcategoryName}>
          <TreeMenu
            data={data}
            activeClass={categoryId}
            onClick={onCategoryClick}
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
              />
            </TreeWrapper>
          </Scrollbar>
        </Sticky>
      </SidebarWrapper>
    </CategoryWrapper>
  );
};

export default SidebarCategory;
