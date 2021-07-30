import React from 'react';
import Table from 'rc-table';
import {
  DeliveryInfo,
  DeliveryAddress,
  Address,
  CostCalculation,
  PriceRow,
  Price,
  ProgressWrapper,
  OrderTableWrapper,
  OrderTable,
} from './order-details.style';
import Progress from 'components/progress-box/progress-box';
import { FormattedMessage } from 'react-intl';

const components = {
  table: OrderTable,
};

const OrderDetails = ({
  tableData,
  columns,
  address,
  CURRENCY,
  progressStatus,
  progressData,
  subtotal,
  discount,
  taxCharges,
  grandTotal,
}) => {
  return (
    <>
      {/* <DeliveryAddress>
          <h3>
            <FormattedMessage
              id="deliveryAddressTitle"
              defaultMessage="Delivery Address"
            />
          </h3>
          <Address>{address}</Address>
        </DeliveryAddress> */}



      {/* <ProgressWrapper>
        <Progress data={progressData} status={progressStatus} />
      </ProgressWrapper> */}

      <OrderTableWrapper>
        <Table
          columns={columns}
          data={tableData}
          rowKey={(record) => record.id}
          components={components}
          className="orderDetailsTable"
        // scroll={{ y: 350 }}
        />
      </OrderTableWrapper>
      <DeliveryInfo>

        <CostCalculation>
          <PriceRow>
            <FormattedMessage id="subTotal" defaultMessage="Sub total" />
            <Price>
              {CURRENCY} {subtotal}
            </Price>
          </PriceRow>
          {/* <PriceRow>
            <FormattedMessage
              id="intlOrderDetailsDiscount"
              defaultMessage="Discount"
            />
            <Price>
              {CURRENCY} {discount}
            </Price>
          </PriceRow> */}
          <PriceRow>
            <FormattedMessage
              id="tax"
              defaultMessage="Delivery Fee"
            />
            <Price>
              {CURRENCY} {taxCharges}
            </Price>
          </PriceRow>
          <PriceRow className="grandTotal">
            <FormattedMessage id="totalText" defaultMessage="Total" />
            <Price>
              {CURRENCY} {grandTotal}
            </Price>
          </PriceRow>
        </CostCalculation>
      </DeliveryInfo>
    </>
  );
};

export default OrderDetails;
