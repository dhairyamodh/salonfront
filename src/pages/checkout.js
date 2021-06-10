import React from 'react';
import { Modal } from '@redq/reuse-modal';
import Checkout from 'features/checkouts/checkout-two/checkout-two';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';

import { initializeApollo } from 'utils/apollo';
import { useSelector } from 'react-redux';

const CheckoutPage = ({ deviceType }) => {
  const { data, error, loading } = useSelector(state => state.profile)
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) return <div>{error.message}</div>;
  const token = 'true';

  return (
    <>
      <Modal>
        <Checkout initData={data} token={token} deviceType={deviceType} />
      </Modal>
    </>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_LOGGED_IN_CUSTOMER,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
export default CheckoutPage;
