import React, { useEffect } from 'react';
import { SEO } from 'components/seo';
import OrderReceived from 'features/order-received/order-received';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from 'redux/actions/checkoutActions';

const AppointmentBook = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { salonId } = useSelector(state => state.salon)
  const { currencySymbol: CURRENCY } = useSelector(state => state.shop.salonData)
  const { orderData } = useSelector(state => state.checkout)
  useEffect(() => {
    dispatch(getOrderById(salonId, id))
  }, [id])
  return (
    <>
      {orderData && <OrderReceived data={orderData} CURRENCY={CURRENCY} />}
    </>
  );
};

export default AppointmentBook;
