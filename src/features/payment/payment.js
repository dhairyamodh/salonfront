import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { handleModal } from 'features/checkouts/checkout-modal';
import PaymentGroup from 'components/payment-group/payment-group';
import StripePaymentForm from './stripe-form';
// import { useMutation } from '@apollo/client';
// import { DELETE_CARD } from 'graphql/mutation/card';
import { cartItemsTotalPrice } from '../../redux/actions/cartActions'
import { CardHeader } from 'components/card-header/card-header';
import { useSelector } from 'react-redux';

const Payment = ({ deviceType, increment = false }) => {
  // const [deletePaymentCardMutation] = useMutation(DELETE_CARD);
  const cart = useSelector(state => state.cart.items)
  const calculatePrice = () =>
    cartItemsTotalPrice(cart).toFixed(2);

  const { data } = useSelector(state => state.profile);
  const { card } = data
  console.log("card", card);

  // const handleOnDelete = async (item) => {
  //   dispatch({ type: 'DELETE_CARD', payload: item.id });
  //   return await deletePaymentCardMutation({
  //     variables: { cardId: JSON.stringify(item.id) },
  //   });
  // };
  return (
    <>
      <CardHeader increment={increment}>
        <FormattedMessage
          id="selectPaymentText"
          defaultMessage="Select Payment Option"
        />
      </CardHeader>
      <PaymentGroup
        name="payment"
        deviceType={deviceType}
        items={card}
        onDelete={(item) => handleOnDelete(item)}
        onChange={(item) =>
          dispatch({
            type: 'SET_PRIMARY_CARD',
            payload: item.id.toString(),
          })
        }
        handleAddNewCard={() => {
          handleModal(
            StripePaymentForm,
            { totalPrice: calculatePrice() },
            'add-address-modal stripe-modal'
          );
        }}
      />
    </>
  );
};

export default Payment;
