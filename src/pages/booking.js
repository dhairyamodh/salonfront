import CalenderContent from 'features/booking/calender/calender';
import {
  PageWrapper,
  BookingContentBox,
  BookingContentTimeBox,
  BookingContent,
  BookingTitle
} from 'features/user-profile/user-profile.style';
import Footer from 'layouts/footer';
import { Modal } from '@redq/reuse-modal';
import { openModal } from '@redq/reuse-modal';
import '@redq/reuse-modal/lib/index.css';
import {
  SettingsForm,
  SettingsFormContent,
  HeadingSection,
  Title,
  Col,
  TimeSelectorContent,
  TimeSelectorLabel,
  RadioButton,
  TimeSelectorWrapper
} from "../features/booking/calender/calender.style";
import { Button } from "components/button/button";
import { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectAppointmentTime } from '../redux/actions/cartActions';
import AuthenticationForm from 'features/authentication-form';

const BookinPage = ({ deviceType }) => {
  const { workingHours } = useSelector(state => state.salon.salonData)

  const { selectedTime: active, selectedDate } = useSelector(state => state.cart)
  const { isAuthenticated } = useSelector(state => state.auth)
  // const handleTimeChange = (index) => {
  //   setActive(index)
  // }
  const handleJoin = () => {
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'modal',
        width: 458,
        height: 'auto',
      },
    });
  };
  const dispatch = useDispatch();
  const handleTimeChange = (time) => {
    dispatch(selectAppointmentTime(time))
  }
  const handleChangeCheckout = () => {
    if (!isAuthenticated) {
      return handleJoin()
    }
    history.push('/checkout')
  }
  const history = useHistory()
  const TimeSelector = () => {
    return (
      <>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id="bookingePageTitle"
              defaultMessage="Select Time "
            />
          </Title>
        </HeadingSection>
        <TimeSelectorWrapper>

          <TimeSelectorContent>
            {
              workingHours?.map((time, index) => {
                return (
                  <TimeSelectorLabel active={active == time} onClick={() => handleTimeChange(time)}>

                    {time}</TimeSelectorLabel>
                )
              })
            }

          </TimeSelectorContent>

        </TimeSelectorWrapper>
      </>
    )
  }

  return (
    <>
      <Modal>
        {/* <ProfileProvider initData={name}> */}
        <PageWrapper>
          <BookingTitle>Make an Appointment</BookingTitle>
          <BookingContent>
            <BookingContentBox>
              <CalenderContent deviceType={deviceType} />
            </BookingContentBox>
            <BookingContentTimeBox>
              <TimeSelector />
            </BookingContentTimeBox>
          </BookingContent>
          <Button size="big" style={{ width: "auto", margin: '0 auto' }} disabled={!(active && selectedDate)} onClick={() => handleChangeCheckout()}>
            <FormattedMessage id="bookingSaveBtn" defaultMessage="Proceed To Checkout" />
          </Button>
        </PageWrapper>
        {/* </ProfileProvider> */}
      </Modal>
    </>
  );
};

export default BookinPage;
