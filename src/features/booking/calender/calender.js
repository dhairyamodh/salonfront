import React, { useEffect, useState } from "react";
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
} from "./calender.style";

import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Calendar from 'react-calendar';
import './calendar.css';
import { getAvailableTime } from '../../../redux/actions/checkoutActions'
import { openModal, Modal } from '@redq/reuse-modal';
import { Input } from "components/forms/input";
import { CloseIcon } from 'assets/icons/CloseIcon';
import { selectAppointmentDate } from '../../../redux/actions/cartActions'

const CalenderContent = ({ deviceType }) => {

  const dispatch = useDispatch()
  const { selectedDate: date } = useSelector(state => state.cart)
  // const handleRadioChange = (index) => {
  //   setActive(index)
  // }
  const onDateChange = (date) => {
    dispatch(selectAppointmentDate(date))
  }

  const handleChange = (date) => {
    onDateChange(date)
  }

  return (
    <SettingsForm>
      <SettingsFormContent>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id="bookingePageTitle"
              defaultMessage="Select Date "
            />
          </Title>
        </HeadingSection>
        <Calendar
          onChange={handleChange}
          value={date}
          minDate={new Date()}
        />

      </SettingsFormContent>
    </SettingsForm>
  );
};

export default CalenderContent;
