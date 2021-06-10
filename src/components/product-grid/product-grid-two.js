import React from 'react';
import { ProductCard } from 'components/product-card/product-card-three';
import styled from 'styled-components';
import css from '@styled-system/css';
import ErrorMessage from 'components/error-message/error-message';
import { Button } from 'components/button/loadmore-button';
import { FormattedMessage } from 'react-intl';
import { Box } from 'components/box';
import NoResultFound from 'components/no-result/no-result';
import Placeholder from 'components/placeholder/placeholder';
import { LoaderItem, LoaderWrapper } from './product-list/product-list.style';
import { useHistory, useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const Grid = styled.div(
  css({
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(1, minmax(180px, 1fr))',

    '@media screen and (min-width: 480px)': {
      gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 740px)': {
      gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 991px)': {
      gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(5, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 1400px)': {
      gridTemplateColumns: 'repeat(6, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 1700px)': {
      gridTemplateColumns: 'repeat(7, minmax(180px, 1fr))',
    },
  })
);
export const ProductGrid = ({
  style,
  type,
  fetchLimit = 16,
  loadMore = true,
}) => {
  const router = useHistory();
  const { allProducts, allCategory: category } = useSelector(state => state.shop)
  const { isLoading: loading, error } = useSelector(state => state.app)
  const loadingMore = false
  if (error) return <ErrorMessage message={error.message} />;
  const data = allProducts.slice(0, 10)
  if (loading && !loadingMore) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder uniqueKey='1' />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey='2' />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey='3' />
        </LoaderItem>
      </LoaderWrapper>
    );
  }
  if (!data || !data || data.length === 0) {
    return <NoResultFound />;
  }
  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: Number(data.length),
        limit: 10,
      },
    });
  };
  const { items, hasMore } = data;
  return (
    <section>
      <Grid style={style}>
        {data.map((product, idx) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </Grid>
      {loadMore && hasMore && (
        <Box style={{ textAlign: 'center' }} mt={'2rem'}>
          <Button
            onClick={handleLoadMore}
            loading={loadingMore}
            variant='secondary'
            style={{
              fontSize: 14,
              display: 'inline-flex',
            }}
            border='1px solid #f1f1f1'
          >
            <FormattedMessage id='loadMoreButton' defaultMessage='Load More' />
          </Button>
        </Box>
      )}
    </section>
  );
};
