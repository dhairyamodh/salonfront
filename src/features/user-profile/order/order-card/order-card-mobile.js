import React from 'react';
import Table from 'rc-table';
import Collapse, { Panel } from 'rc-collapse';
import Progress from 'components/progress-box/progress-box';

import {
  OrderListHeader,
  TrackID,
  Status,
  OrderMeta,
  Meta,
  CardWrapper,
  OrderDetail,
  DeliveryInfo,
  DeliveryAddress,
  Address,
  CostCalculation,
  PriceRow,
  Price,
  ProgressWrapper,
  OrderTable,
  OrderTableMobile,
} from './order-card.style';

import moment from 'moment';


const components = {
  table: OrderTable,
};

const OrderCard = ({
  onClick,
  className,
  columns,
  progressData,
  orders,
  CURRENCY
}) => {
  //   const displayDetail = className === 'active' ? '100%' : '0';
  const addAllClasse = ['accordion'];

  if (className) {
    addAllClasse.push(className);
  }
  return (
    <>
      <Collapse
        accordion={true}
        className={addAllClasse.join(' ')}
        defaultActiveKey="active"
      >
        {orders?.map((order) => (
          <Panel
            header={
              <CardWrapper onClick={onClick}>
                <OrderListHeader>
                  <TrackID>
                    Booking <span>#{order.orderNumber}</span>
                  </TrackID>
                  <Status>At Srore</Status>
                </OrderListHeader>

                <OrderMeta>
                  <Meta>
                    Booking Date: <span>{moment(order.createdAt).format('dddd, MMMM Do YYYY')}</span>
                  </Meta>
                  <Meta>
                    Booking Time: <span>{moment(order.startTime, ["HH:mm"]).format("h:mm A")}</span>
                  </Meta>
                  <Meta className="price">
                    Total Price:
                    <span>
                      {CURRENCY} {order.grandTotal}
                    </span>
                  </Meta>
                </OrderMeta>
              </CardWrapper>
            }
            headerClass="accordion-title"
            key={order.id}
          >
            <OrderDetail>
              <DeliveryInfo>
                {/* <DeliveryAddress>
                  <h3>Delivery Address</h3>
                  <Address>{order.deliveryAddress}</Address>
                </DeliveryAddress> */}

                <CostCalculation>
                  <PriceRow>
                    Subtotal
                    <Price>
                      {CURRENCY} {order.itemsTotal}
                    </Price>
                  </PriceRow>
                  {/* <PriceRow>
                    Discount
                    <Price>
                      {CURRENCY} {order.discount}
                    </Price>
                  </PriceRow> */}
                  <PriceRow>
                    Tax
                    <Price>
                      {CURRENCY} {order.taxCharges}
                    </Price>
                  </PriceRow>
                  <PriceRow className="grandTotal">
                    Total
                    <Price>
                      {CURRENCY} {order.grandTotal}
                    </Price>
                  </PriceRow>
                </CostCalculation>
              </DeliveryInfo>

              {/* <ProgressWrapper>
                <Progress data={progressData} status={order.status} />
              </ProgressWrapper> */}

              <OrderTableMobile>
                <Table
                  columns={columns}
                  data={order.orderItems}
                  rowKey={(record) => record.id}
                  components={components}
                  scroll={{ x: 450 }}
                // scroll={{ y: 250 }}
                />
              </OrderTableMobile>
            </OrderDetail>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default OrderCard;
