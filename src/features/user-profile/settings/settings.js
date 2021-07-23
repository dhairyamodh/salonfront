import React, { useContext } from "react";
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


const SettingsContent = ({ deviceType }) => {
  const { name, email, address, mobile } = useSelector(state => state.auth);
  // const [updateMeMutation] = useMutation(UPDATE_ME);
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch({
      type: "HANDLE_ON_INPUT_CHANGE",
      payload: { value, field: name },
    });
  };


  const handleSave = async () => {
    // await updateMeMutation({
    //   variables: { meInput: JSON.stringify({ name, email }) },
    // });
  };

  return (
    <SettingsForm>
      <SettingsFormContent>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id="profilePageTitle"
              defaultMessage="Your Profile"
            />
          </Title>
        </HeadingSection>
        <Row >
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
              value={name}
              onChange={handleChange}
              backgroundColor="#F7F7F7"
              height="48px"
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
              value={email}
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
              value={mobile != 'null' ? mobile : ''}
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
              value={address}
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
      </SettingsFormContent>
    </SettingsForm>
  );
};

export default SettingsContent;
