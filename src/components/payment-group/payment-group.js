import React from 'react';
import { FormattedMessage } from 'react-intl';
import Carousel from 'components/carousel/carousel';
import PaymentCard from '../payment-card/payment-card';
import { Plus } from 'assets/icons/PlusMinus';
import { Button } from 'components/button/button';
import {
  Header,
  PaymentCardList,
  IconWrapper,
  SavedCard,
  OtherPayOption,
} from './payment-group.style';


const PaymentGroup = ({
  items,
  deviceType,
  className,
  name,
  onChange,
  onDelete,
  handleAddNewCard,
}) => {
  // RadioGroup State
  // Handle onChange Func
  const handleChange = (item) => {
    onChange(item);
  };
  return (
    <>
      {/* {deviceType === 'desktop' && ( */}
      <Header>
        {items.length !== 0 && (
          <SavedCard>
            <FormattedMessage id="savedCardsId" defaultMessage="Saved Cards" />
          </SavedCard>
        )}

        <Button
          variant="text"
          type="button"
          onClick={handleAddNewCard}
          className="addCard"
        >
          <IconWrapper>
            <Plus width="10px" />
          </IconWrapper>
          <FormattedMessage id="addCardBtn" defaultMessage="Add Card" />
        </Button>
      </Header>
      <PaymentCardList>
        <Carousel
          deviceType={deviceType}
          autoPlay={false}
          infinite={false}
          data={items}
          component={(item) => (
            <PaymentCard
              key={item.id}
              onChange={() => handleChange(item)}
              onDelete={() => onDelete(item)}
              {...item}
            />
          )}
        />
      </PaymentCardList>

      {items.mobileWallet === true || items.cashOnDelivery === true ? (
        <OtherPayOption>
          {/* Mobile Wallet */}
          {items.mobileWallet === true ? (
            <label
              htmlFor="mobile-wallet"
              key="${name}-mobile-wa"
              className="other-pay-radio"
            >
              <input
                type="radio"
                id="mobile-wallet"
                name={name}
                value="mobile-wallet"
                onChange={handleChange}
              />
              <span>Mobile Wallet</span>
            </label>
          ) : (
            ''
          )}

          {/* Cash On Delivery */}
          {items.cashOnDelivery === true ? (
            <label
              htmlFor="cash-on-delivery"
              key="${name}-cash"
              className="other-pay-radio cash-on-delivery"
            >
              <input
                type="radio"
                id="cash-on-delivery"
                name={name}
                value="cash-on-delivery"
                onChange={handleChange}
              />
              <span>Cash On Delivery</span>
            </label>
          ) : (
            ''
          )}
        </OtherPayOption>
      ) : (
        ''
      )}
    </>
  );
};

export default PaymentGroup;
