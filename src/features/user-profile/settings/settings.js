import React, { useContext, useState } from "react";
// import { useMutation } from '@apollo/client';

import {
  SettingsForm,
  SettingsFormContent,
  HeadingSection,
  Title,
  Col,
  Row,
} from "./settings.style";

import { Button } from "components/button/button";
import { Input, Textarea } from "components/forms/input";
// import { UPDATE_ME } from 'graphql/mutation/me';
import { FormattedMessage } from "react-intl";
import { Label } from "components/forms/label";
// import Contact from "features/contact/contact";
import Address from "features/address/address";
import Payment from "features/payment/payment";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails } from "redux/actions/authActions";
import { showSnackBar } from "redux/actions/snackActions";


const SettingsContent = ({ deviceType }) => {
  const { id, name, email, address, mobile } = useSelector(state => state.auth);
  // const [updateMeMutation] = useMutation(UPDATE_ME);
  const [state, setState] = useState({ name, email, address, mobile, id })

  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value })
  };

  const handleSave = async () => {
    let data = {
      ...state,
    }
    dispatch(updateDetails(data)).then((res) => {
      if (res.payload.status == 200) {
        dispatch(showSnackBar(res.payload.data.message, 'success'))
      }
    }).catch((err) => {
      dispatch(showSnackBar(err, 'error'))
    })
  };

  return (
    <SettingsForm>
      {/* <SettingsFormContent> */}
      <HeadingSection>
        <Title>
          <FormattedMessage
            id="profilePageTitle"
            defaultMessage="Your Profile"
          />
        </Title>
      </HeadingSection>
      <Row>
        <Col xs={12} sm={4} md={4} lg={4}>
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
            height="48px"
            required
          // intlInputLabelId="profileNameField"
          />
        </Col>

        <Col xs={12} sm={4} md={4} lg={4}>
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
            required
            onChange={handleChange}
            backgroundColor="#F7F7F7"
          />
        </Col>

        <Col xs={12} sm={4} md={4} lg={4}>
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
              defaultMessage="Address"
            />
          </Label>
          <Textarea
            name="address"
            label="Address"
            value={state.address}
            onChange={handleChange}
            backgroundColor="#F7F7F7"
            rows="2"
          />
        </Col>

        <Col xs={12} sm={2} md={2} lg={2}>
          <Button size="big" style={{ width: "100%" }} onClick={handleSave}>
            <FormattedMessage id="profileSaveBtn" defaultMessage="Save" />
          </Button>
        </Col>
      </Row>
      {/* <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <Contact />
            </SettingsFormContent>
          </Col>
        </Row> */}
      {/* <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{ position: "relative" }}>
            <SettingsFormContent>
              <Address />
            </SettingsFormContent>
          </Col>
        </Row> */}

      {/* <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <Payment deviceType={deviceType} />
            </SettingsFormContent>
          </Col>
        </Row> */}
      {/* </SettingsFormContent> */}
    </SettingsForm>
  );
};

export default SettingsContent;
