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
import { useSelector } from 'react-redux';

const BookinPage = ({ deviceType }) => {
  const { workingHours } = useSelector(state => state.salon.salonData)
  const [active, setActive] = useState()
  const handleRadioChange = (index) => {
    setActive(index)
  }
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
                  <TimeSelectorLabel active={active === index} onClick={() => handleRadioChange(index)}>

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
          <Button size="big" style={{ width: "auto", margin: '0 auto' }} disabled={!(active > -1)} onClick={() => history.push('/checkout')}>
            <FormattedMessage id="bookingSaveBtn" defaultMessage="Proceed To Checkout" />
          </Button>
          <Footer />
        </PageWrapper>
        {/* </ProfileProvider> */}
      </Modal>
    </>
  );
};

export default BookinPage;
