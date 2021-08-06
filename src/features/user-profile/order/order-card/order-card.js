import React from 'react';
import {
  SingleOrderList,
  OrderListHeader,
  TrackID,
  Status,
  OrderMeta,
  Meta,
} from './order-card.style';
import { FormattedMessage } from 'react-intl';


const OrderCard = ({
  orderId,
  onClick,
  className,
  status,
  date,
  time,
  CURRENCY,
  deliveryTime,
  amount,
}) => {
  let variant;
  if (status == 'pending') {
    variant = "warning"
  } else if (status == 'confirmed') {
    variant = "success"
  } else {
    variant = "danger"
  }
  return (
    <>
      <SingleOrderList onClick={onClick} className={className}>
        <OrderListHeader>
          <TrackID>
            <FormattedMessage
              id="intlOrderCardTitleText"
              defaultMessage="Order"
            />
            <span> #{orderId}</span>
          </TrackID>
          <Status variant={variant}>{status}</Status>
        </OrderListHeader>

        <OrderMeta>
          <Meta>
            <FormattedMessage
              id="intlOrderCardDateText"
              defaultMessage="Order Date"
            />
            : <span>{date}</span>
          </Meta>

          <Meta>
            <FormattedMessage
              id="intlOrderCardTimeText"
              defaultMessage="Order Date"
            />
            : <span>{time}</span>
          </Meta>

          <Meta className="price">
            <FormattedMessage
              id="intlOrderCardTotalText"
              defaultMessage="Total Price"
            />
            :
            <span>
              {CURRENCY} {amount}
            </span>
          </Meta>
        </OrderMeta>
      </SingleOrderList>
    </>
  );
};

export default OrderCard;
