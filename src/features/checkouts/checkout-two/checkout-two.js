import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'components/button/button';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import CheckoutWrapper, {
  CheckoutContainer,
  CheckoutInformation,
  InformationBox,
  DeliverySchedule,
  CheckoutSubmit,
  HaveCoupon,
  CouponBoxWrapper,
  CouponInputBox,
  CouponCode,
  RemoveCoupon,
  TermConditionText,
  TermConditionLink,
  CartWrapper,
  CalculationWrapper,
  OrderInfo,
  Title,
  ItemsWrapper,
  Items,
  Quantity,
  Multiplier,
  ItemInfo,
  Price,
  TextWrapper,
  Text,
  Bold,
  SemiBold,
  Small,
  NoProductMsg,
  NoProductImg,
} from './checkout-two.style';

import { NoCartBag } from 'assets/icons/NoCartBag';
import ModalContainer from 'components/modal/modalContainer'
import Sticky from 'react-stickynode';
import { FormattedMessage } from 'react-intl';
import { useWindowSize } from 'utils/useWindowSize';
// import Coupon from 'features/coupon/coupon';
// import Address from 'features/address/address';
// import Schedules from 'features/schedule/schedule';
import { clearCart, cartItemsTotalPrice, removeCoupon, selectAppointmentArtist } from '../../../redux/actions/cartActions';
// import Contact from 'features/contact/contact';
import Payment from 'features/payment/payment';
import { useDispatch, useSelector } from 'react-redux';
import {
  // Title,
  Col,
  Row,
} from "../../../features/user-profile/settings/settings.style";

import { Input, Textarea } from "components/forms/input";
import moment from 'moment';
// import { UPDATE_ME } from 'graphql/mutation/me';
import { Label } from "components/forms/label";
import { createOrder } from '../../../redux/actions/checkoutActions'
import { showSnackBar } from 'redux/actions/snackActions';
import { selectAppointmentTime, selectAppointmentDate } from '../../../redux/actions/cartActions';
import Coupon from 'features/coupon/coupon';


const OrderItem = ({ product, CURRENCY }) => {

  const { id, quantity, title, name, unit, price, salePrice } = product;
  const displayPrice = salePrice ? salePrice : price;
  return (
    <Items key={id}>
      {/* <Quantity>{quantity}</Quantity>
      <Multiplier>x</Multiplier> */}
      <ItemInfo>
        {name ? name : title}
        {unit ? `| ${unit}` : ''}
      </ItemInfo>
      <Price>
        {CURRENCY} {(displayPrice * quantity).toFixed(2)}
      </Price>
    </Items>
  );
};

const CheckoutWithSidebar = ({ token, deviceType }) => {
  const [hasCoupon, setHasCoupon] = useState(false);
  const { data } = useSelector(state => state.profile);
  const { items: cart, coupon } = useSelector(state => state.cart)
  const { salonId } = useSelector(state => state.salon)
  const { id, name, email, mobile } = useSelector(state => state.auth)
  const { selectedTime, selectedDate, items, selectedArtist } = useSelector(state => state.cart)
  const { orderData } = useSelector(state => state.checkout)
  const history = useHistory()

  const calculatePrice = () =>
    cartItemsTotalPrice(cart, coupon).toFixed(2);

  const { currencySymbol: CURRENCY, taxPercentage } = useSelector(state => state.salon.salonData)
  const calculateTaxAmount = () => {
    const taxTotal = taxPercentage / 100
    const taxAmount = parseFloat(cartItemsTotalPrice(cart, coupon) * taxTotal).toFixed(2)
    return parseFloat(taxAmount);
  }
  const calculateNetAmount = () => {
    return (cartItemsTotalPrice(cart, coupon) + calculateTaxAmount()).toFixed(2)
  }
  const calculateDiscount = () => {
    const total = cartItemsTotalPrice(cart);
    const discount = coupon
      ? (total * Number(coupon?.dealDiscount)) / 100
      : 0;
    return discount.toFixed(2);
  };
  const dispatch = useDispatch()
  const cartItemsCount = cart.length
  const [loading, setLoading] = useState(false);

  const [isValid, setIsValid] = useState(false);
  const size = useWindowSize();
  const [open, setOpen] = useState(false)
  const [state, setState] = useState({ name, email, mobile })
  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  const handleSubmit = async () => {
    setLoading(true);
    setOpen(true)
    setLoading(false);
  };
  const handleCheckout = () => {
    let neworderData = {
      salonId,
      ...state,
      selectedDate,
      itemsTotal: calculatePrice(),
      grandTotal: calculateNetAmount(),
      taxCharges: calculateTaxAmount(),
      taxPercentage: taxPercentage,
      discount: calculateDiscount(),
      isPaid: false,
      employeeName: selectedArtist.employeeName,
      employeeId: selectedArtist._id,
      selectedTime, cartItems: items, userId: id,
    }
    dispatch(createOrder(neworderData)).then((res) => {
      if (res.payload.status == 200) {
        dispatch(clearCart())
        dispatch(selectAppointmentDate(new Date()))
        dispatch(selectAppointmentTime(undefined))
        dispatch(selectAppointmentArtist({}))
        dispatch(showSnackBar('Appointment Booked Successfully', 'success'))
        history.push(`/appointment-book/${res.payload.data.data.id}`)

      }
    }).catch((err) => {
      setOpen(false)
      dispatch(showSnackBar(err, 'error'))
    })
  }

  useEffect(() => {
    if (
      Boolean(selectedDate) && Boolean(selectedTime) && Boolean(selectedArtist) && items.length > 0
    ) {
      setIsValid(true);
    }
  }, [data]);
  const GetFormattedDate = (inputFormat) => {
    return moment(inputFormat).format('ddd, MMMM Do YYYY')
  }

  return (
    <form>
      <CheckoutWrapper>
        <CheckoutContainer>
          <CheckoutInformation>
            {/* DeliveryAddress */}
            {/* <InformationBox>
              <Address
                increment={true}
                flexStart={true}
                buttonProps={{
                  variant: 'text',
                  type: 'button',
                  className: 'addButton',
                }}
                icon={true}
              />
            </InformationBox> */}

            {/* DeliverySchedule */}
            {/* <InformationBox>
              <DeliverySchedule>
                <Schedules increment={true} />
              </DeliverySchedule>
            </InformationBox> */}

            {/* Contact number */}
            {/* <InformationBox>
              <Contact
                increment={true}
                flexStart={true}
                buttonProps={{
                  variant: 'text',
                  type: 'button',
                  className: 'addButton',
                }}
                icon={true}
              />
            </InformationBox> */}
            {/* PaymentOption */}

            <InformationBox
              className='paymentBox'
              style={{ paddingBottom: 30 }}
            >
              {/* <Payment increment={true} deviceType={deviceType} /> */}

              {/* Coupon start */}
              {coupon ? (
                <CouponBoxWrapper >
                  <CouponCode>
                    <FormattedMessage id='couponApplied' />
                    <span>{coupon.dealCode}</span>

                    <RemoveCoupon
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(removeCoupon())
                        setHasCoupon(false);
                      }}
                    >
                      <FormattedMessage id='removeCoupon' />
                    </RemoveCoupon>
                  </CouponCode>
                </CouponBoxWrapper>
              ) : (
                <CouponBoxWrapper>
                  {!hasCoupon ? (
                    <HaveCoupon onClick={() => setHasCoupon((prev) => !prev)}>
                      <FormattedMessage
                        id='specialCode'
                        defaultMessage='Have a special code?'
                      />
                    </HaveCoupon>
                  ) : (
                    <CouponInputBox>
                      <Coupon errorMsgFixed={true} className='normalCoupon' />
                    </CouponInputBox>
                  )}
                </CouponBoxWrapper>
              )}
              <Row >
                <Col xs={12} >
                  <Label>
                    <FormattedMessage
                      id="profileNameField"
                      defaultMessage="Your Name"
                    />
                  </Label>
                  <Input
                    type="text"
                    label="Name"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    backgroundColor="#F7F7F7"
                  // intlInputLabelId="profileNameField"
                  />
                </Col>

                <Col xs={12} >
                  <Label>
                    <FormattedMessage
                      id="profileEmailField"
                      defaultMessage="Your Email"
                    />
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    label="Email Address"
                    value={state.email}
                    onChange={handleChange}
                    backgroundColor="#F7F7F7"
                  />
                </Col>

                <Col xs={12} >
                  <Label>
                    <FormattedMessage
                      id="profileMobileField"
                      defaultMessage="Mobile Number"
                    />
                  </Label>
                  <Input
                    type="text"
                    name="mobile"
                    label="Mobile Number"
                    value={state.mobile != 'null' ? state.mobile : ''}
                    onChange={handleChange}
                    backgroundColor="#F7F7F7"
                  />
                </Col>
                <Col xs={12}>
                  <Label>
                    <FormattedMessage
                      id="profileAddressField"
                      defaultMessage="Any special instruction"
                    />
                  </Label>
                  <Textarea
                    name="instruction"
                    label="Any special instruction"
                    value={state.instruction}
                    onChange={handleChange}
                    backgroundColor="#F7F7F7"
                    rows="2"
                  />
                </Col>
              </Row>
              {/* <TermConditionText>
                <FormattedMessage
                  id='termAndConditionHelper'
                  defaultMessage='By making this purchase you agree to our'
                />
                <Link href='#'>
                  <TermConditionLink>
                    <FormattedMessage
                      id='termAndCondition'
                      defaultMessage='terms and conditions.'
                    />
                  </TermConditionLink>
                </Link>
              </TermConditionText> */}
              <ModalContainer title="Are you sure want to book an appointment?" onSuccess={() => handleCheckout()} isOpen={open} isClose={() => setOpen(false)} />
              {/* CheckoutSubmit */}
              <CheckoutSubmit>
                <Button
                  type='button'
                  onClick={() => handleSubmit()}
                  disabled={!isValid}
                  size='big'
                  loading={loading}
                  style={{ width: '100%' }}
                >
                  <FormattedMessage
                    id='processCheckout'
                    defaultMessage='Book An Appointment'
                  />
                </Button>
              </CheckoutSubmit>
            </InformationBox>
          </CheckoutInformation>

          <CartWrapper>
            <Sticky
              enabled={size.width >= 768 ? true : false}
              top={120}
              innerZ={999}
            >
              <OrderInfo>
                <Title>
                  <FormattedMessage
                    id='cartTitle'
                    defaultMessage='Booking Summary'
                  />
                </Title>

                <Scrollbar className='checkout-scrollbar'>
                  <ItemsWrapper>
                    {cartItemsCount > 0 ? (
                      cart.map((item) => (
                        <OrderItem CURRENCY={CURRENCY} key={`cartItem-${item.id}`} product={item} />
                      ))
                    ) : (
                      <>
                        <NoProductImg>
                          <NoCartBag />
                        </NoProductImg>

                        <NoProductMsg>
                          <FormattedMessage
                            id='noProductFound'
                            defaultMessage='No products found'
                          />
                        </NoProductMsg>
                      </>
                    )}
                  </ItemsWrapper>
                </Scrollbar>

                <CalculationWrapper>
                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='subTotal'
                        defaultMessage='Subtotal'
                      />
                    </Text>
                    <Text>
                      {CURRENCY} {calculatePrice()}
                    </Text>
                  </TextWrapper>
                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='discountText'
                        defaultMessage='discountText'
                      />
                    </Text>
                    <Text>
                      {CURRENCY} {calculateDiscount()}
                    </Text>
                  </TextWrapper>

                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='tax'
                        defaultMessage='Tax'
                      />
                    </Text>
                    <Text>
                      {CURRENCY} {calculateTaxAmount()}
                    </Text>
                  </TextWrapper>

                  <TextWrapper>
                    <SemiBold>
                      <FormattedMessage
                        id='intlBookingDate'
                        defaultMessage='Booking Date'
                      />
                    </SemiBold>
                    <SemiBold>{GetFormattedDate(selectedDate)}</SemiBold>
                  </TextWrapper>

                  <TextWrapper>
                    <SemiBold>
                      <FormattedMessage
                        id='intlBookingTime'
                        defaultMessage='Booking Time'
                      />
                    </SemiBold>
                    <SemiBold>
                      {selectedTime}
                    </SemiBold>
                  </TextWrapper>

                  <TextWrapper style={{ marginTop: 20 }}>
                    <Bold>
                      <FormattedMessage id='totalText' defaultMessage='Total' />{' '}
                      <Small>
                        (
                        <FormattedMessage
                          id='vatText'
                          defaultMessage='Incl. VAT'
                        />
                        )
                      </Small>
                    </Bold>
                    <Bold>
                      {CURRENCY} {calculateNetAmount()}
                    </Bold>
                  </TextWrapper>
                </CalculationWrapper>
              </OrderInfo>
            </Sticky>
          </CartWrapper>
        </CheckoutContainer>
      </CheckoutWrapper>
    </form>
  );
};

export default CheckoutWithSidebar;
