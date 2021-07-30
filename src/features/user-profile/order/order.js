import React, { useState, useEffect, useRef } from 'react';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import { useQuery, gql } from '@apollo/client';
import {
  DesktopView,
  MobileView,
  OrderBox,
  OrderListWrapper,
  OrderList,
  OrderDetailsWrapper,
  Title,
  ImageWrapper,
  ItemWrapper,
  ItemDetails,
  ItemName,
  ItemSize,
  ItemPrice,
  NoOrderFound,
} from './order.style';

import OrderDetails from './order-details/order-details';
import OrderCard from './order-card/order-card';
import OrderCardMobile from './order-card/order-card-mobile';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings, getUserDetails, myBookings } from 'redux/actions/authActions';
import moment from 'moment';
import { ServerUrl } from '../../../constants';

const progressData = ['Order Received', 'Order On The Way', 'Order Delivered'];



const orderTableColumns = [
  {
    title: <FormattedMessage id='cartItems' defaultMessage='Services' />,
    dataIndex: '',
    key: 'items',
    width: 250,
    ellipsis: true,
    render: (text, record) => {
      return (
        <ItemWrapper>
          <ImageWrapper>
            <img src={ServerUrl + record.imageSrc} alt={record.name} />
          </ImageWrapper>

          <ItemDetails>
            <ItemName>{record.name}</ItemName>
            {/* <ItemSize>{record.weight}</ItemSize> */}
            <ItemPrice>{record.categoryName}</ItemPrice>
          </ItemDetails>
        </ItemWrapper>
      );
    },
  },
  // {
  //   title: (
  //     <FormattedMessage id='intlTableColTitle2' defaultMessage='Quantity' />
  //   ),
  //   dataIndex: 'quantity',
  //   key: 'quantity',
  //   align: 'center',
  //   width: 100,
  // },
  {
    title: <FormattedMessage id='intlTableColTitle3' defaultMessage='Price' />,
    dataIndex: '',
    key: 'price',
    align: 'right',
    width: 100,
    render: (text, record) => {
      return <p>${record.salePrice}</p>;
    },
  },
];

const OrdersContent = () => {
  const [booking, setBooking] = useState([]);
  const [order, setOrder] = useState(null);
  const [active, setActive] = useState('');

  const targetRef = useRef();
  const { currencySymbol: CURRENCY } = useSelector(state => state.shop.salonData)
  const { salonId } = useSelector(state => state.salon)
  const dispatch = useDispatch()



  const handleClick = (order) => {
    setOrder(order);
    setActive(order.id);
  };

  useEffect(() => {
    dispatch(getBookings(salonId)).then((res) => {
      if (res.payload.status == 200) {
        const newdata = res.payload.data.data
        setBooking(newdata);
        setOrder(newdata[0]);
        setActive(newdata[0]?.id);
      }
    })

  }, []);
  return (
    <OrderBox>
      <DesktopView>
        <OrderListWrapper style={{ height: '100%' }}>
          <Title style={{ padding: '0 20px' }}>
            <FormattedMessage
              id='intlOrderPageTitle'
              defaultMessage='My Order'
            />
          </Title>
          <Scrollbar className='order-scrollbar'>
            <OrderList>
              {booking && booking.length !== 0 ? (
                booking?.map((current, index) => (
                  <OrderCard
                    key={current.id}
                    CURRENCY={CURRENCY}
                    orderId={current.orderNumber}
                    className={current.id === active ? 'active' : ''}
                    status="At store"
                    date={moment(current.createdAt).format('ddd, MMMM Do YYYY')}
                    time={moment(current.startTime, ["HH:mm"]).format("h:mm A")}
                    amount={current.grandTotal}
                    onClick={() => {
                      handleClick(current);
                    }}
                  />
                ))
              ) : (
                <NoOrderFound>
                  <FormattedMessage
                    id='intlNoOrderFound'
                    defaultMessage='No order found'
                  />
                </NoOrderFound>
              )}

            </OrderList>
          </Scrollbar>
        </OrderListWrapper>

        {order && order.id && (<OrderDetailsWrapper ref={targetRef}>
          <Title style={{ padding: '0 20px' }}>
            <FormattedMessage
              id='orderDetailsText'
              defaultMessage='Order Details'
            />
          </Title>

          <OrderDetails
            progressStatus="At store"
            progressData={progressData}
            address={order.deliveryAddress}
            subtotal={order.itemsTotal}
            // discount={order.discount}
            // deliveryFee={order.deliveryFee}
            CURRENCY={CURRENCY}
            taxCharges={order.taxCharges}
            grandTotal={order.grandTotal}
            tableData={order.orderItems}
            columns={orderTableColumns}
          />
        </OrderDetailsWrapper>
        )}

      </DesktopView>

      <MobileView>
        <OrderList>
          {booking && booking.length !== 0 ? (
            <OrderCardMobile
              orders={booking}
              className={order && order.id === active ? 'active' : ''}
              progressData={progressData}
              columns={orderTableColumns}
              CURRENCY={CURRENCY}
              onClick={() => {
                handleClick(order);
              }}
            />
          ) : (
            <NoOrderFound>
              <FormattedMessage
                id='intlNoOrderFound'
                defaultMessage='No order found'
              />
            </NoOrderFound>
          )}
        </OrderList>
      </MobileView>
    </OrderBox>
  );
};

export default OrdersContent;
