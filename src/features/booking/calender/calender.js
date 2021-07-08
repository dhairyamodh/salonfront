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

const CalenderContent = ({ deviceType }) => {

  const dispatch = useDispatch()
  const history = useHistory()
  const [date, onDateChange] = useState(new Date());
  const { salonId } = useSelector(state => state.salon)
  const [active, setActive] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const handleRadioChange = (index) => {
    setActive(index)
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
