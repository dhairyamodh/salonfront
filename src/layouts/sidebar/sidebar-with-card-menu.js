import React from 'react';
import { CardMenu } from '../../components/card-menu';
import ErrorMessage from '../../components/error-message/error-message';
import styled from 'styled-components';
import Sticky from 'react-stickynode';
import { Scrollbar } from '../../components/scrollbar/scrollbar';
import CategoryWalker from '../../components/category-walker/category-walker';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Aside = styled.aside({
  width: '300px',
  position: 'fixed',
  top: 110,
  left: 30,
  height: 'calc(100% - 110px)',
});

const CardMenuWrapper = styled.div({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: 'max-content',
  paddingBottom: 30,

  '@media (min-width: 550px) and (max-width: 990px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

const MobileOnly = styled.div({
  display: 'none',
  zIndex: 10,

  '@media (max-width: 990px)': {
    display: 'block',
  },
});

const DesktopOnly = styled.div({
  display: 'none',
  '@media (min-width: 991px)': {
    display: 'block',
  },
});
export const SidebarWithCardMenu = ({ type }) => {
  const router = useLocation();
  const { isLoading: loading, error } = useSelector(state => state.app)
  const { allCategories: data } = useSelector(state => state.shop)
  if (error) return <ErrorMessage message={error.message} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return null;
  const { pathname, query } = useLocation();
  const selectedQueries = query;

  const onCategoryClick = (slug) => {
    router.push({
      pathname,
      query: { ...query, category: slug },
    });
  };

  return (
    <React.Fragment>
      <MobileOnly>
        <Sticky top={67}>
          <CategoryWalker
            style={{
              backgroundColor: '#ffffff',
              paddingTop: '15px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
            }}
          >
            <CardMenuWrapper>
              <CardMenu
                data={data}
                onClick={onCategoryClick}
                active={selectedQueries}
              />
            </CardMenuWrapper>
          </CategoryWalker>
        </Sticky>
      </MobileOnly>

      <DesktopOnly>
        {/* <Sticky top={110}> */}
        <Aside>
          <Scrollbar
            style={{ height: '100%', maxHeight: '100%', }}
            options={{
              scrollbars: {
                visibility: 'hidden',
              },
            }}
          >
            <CardMenuWrapper>
              <CardMenu
                data={data}
                onClick={onCategoryClick}
                active={selectedQueries}
              />
            </CardMenuWrapper>
          </Scrollbar>
        </Aside>
        {/* </Sticky> */}
      </DesktopOnly>
    </React.Fragment>
  );
};
