import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { CouponBoxWrapper, Error } from './coupon.style';
import { Input } from 'components/forms/input';
import { Button } from 'components/button/button';
import {
  applyCoupon,
} from 'redux/actions/cartActions'
import { useDispatch } from 'react-redux';
import { showSnackBar } from 'redux/actions/snackActions';

const Coupon = ({
  disabled,
  className,
  style,
  errorMsgFixed = false,
  ...props
}) => {
  const intl = useIntl();
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);
  // const [appliedCoupon] = useMutation(APPLY_COUPON);
  const dispatch = useDispatch()
  const handleApplyCoupon = async () => {
    dispatch(applyCoupon(code)).then().catch((err) => {
      dispatch(showSnackBar(err, 'error'))
    })
  };
  const handleOnChange = (e) => {
    setCode(e.currentTarget.value);
  };
  return (
    <>
      <CouponBoxWrapper
        className={className ? className : 'boxedCoupon'}
        style={style}
      >
        <Input
          onChange={handleOnChange}
          value={code}
          placeholder={intl.formatMessage({
            id: 'couponPlaceholder',
            defaultMessage: 'Enter Coupon Here',
          })}
          {...props}
        />
        <Button
          type='button'
          onClick={handleApplyCoupon}
          disabled={disabled}
          padding='0 30px'
        >
          <FormattedMessage id='voucherApply' defaultMessage='Apply' />
        </Button>
      </CouponBoxWrapper>
      {error && (
        <Error errorMsgFixed={errorMsgFixed}>
          <FormattedMessage id='couponError' defaultMessage={error} />
        </Error>
      )}
    </>
  );
};

export default Coupon;
