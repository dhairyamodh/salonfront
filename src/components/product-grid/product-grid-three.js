
import React, { useEffect, useState } from 'react';
import { ProductCard } from 'components/product-card/product-card-seven';
import styled from 'styled-components';
import css from '@styled-system/css';
import ErrorMessage from 'components/error-message/error-message';
import { Button } from 'components/button/loadmore-button';
import { FormattedMessage } from 'react-intl';
import { Box } from 'components/box';
import NoResultFound from 'components/no-result/no-result';
import { LoaderItem, LoaderWrapper } from './product-list/product-list.style';
import Placeholder from 'components/placeholder/placeholder';

const Grid = styled.div(
  css({
    display: 'grid',
    gridGap: '30px',
    gridTemplateColumns: 'repeat(2, minmax(180px, 1fr))',

    '@media screen and (min-width: 630px)': {
      gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
    },

    '@media screen and (max-width: 768px)': {
      gridGap: '5px',
      padding: '5px',
      gridTemplateColumns: 'repeat(3, minmax(48vw, 1fr))',
    },

    '@media screen and (min-width: 991px)': {
      gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 1200px)': {
      gridTemplateColumns: 'repeat(5, minmax(180px, 1fr))',
    },

    '@media screen and (min-width: 1700px)': {
      gridTemplateColumns: 'repeat(5, minmax(240px, 1fr))',
    },

    '@media screen and (min-width: 1900px)': {
      gridTemplateColumns: 'repeat(6, minmax(240px, 1fr))',
    },
  })
);

export const ProductGrid = ({
  deviceType,
  data,
  style,
  totalServices,
  loading,
  handleLoadMore
}) => {
  const loadMore = data.length < totalServices ? true : false

  if (loading && !loadMore) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder uniqueKey="1" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="2" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="3" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="4" />
        </LoaderItem>
      </LoaderWrapper>
    );
  }
  if (!data || !data || data.length === 0) {
    return <NoResultFound />;
  }

  return (
    <section>
      <Grid style={style}>
        {data.map((product, idx) =>
        (
          <ProductCard deviceType={deviceType} data={product} key={product.id} />
        ))}
      </Grid>

      {loadMore && (
        <Box style={{ textAlign: 'center' }} mt={'2rem'}>
          <Button
            onClick={handleLoadMore}
            loading={!loadMore}
            variant="secondary"
            style={{
              fontSize: 14,
              display: 'inline-flex',
            }}
            border="1px solid #f1f1f1"
          >
            <FormattedMessage id="loadMoreButton" defaultMessage="Load More" />
          </Button>
        </Box>
      )}
    </section>
  );
};
