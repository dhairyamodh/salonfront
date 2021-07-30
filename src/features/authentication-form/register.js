import React, { useContext } from 'react';
import Link from 'next/link';
import { Input } from 'components/forms/input';
import {
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  // Input,
  Divider,
  LinkButton,
} from './authentication-form.style';
import { Facebook } from 'assets/icons/Facebook';
import { Google } from 'assets/icons/Google';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/authActions'
import { closeModal } from '@redq/reuse-modal';
import { showSnackBar } from 'redux/actions/snackActions';

export default function SignOutModal() {
  const intl = useIntl();
  const dispatch = useDispatch()
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const role = 'customer'
  const { salonId } = useSelector(state => state.salon)

  const toggleSignInForm = () => {
    dispatch({
      type: 'SIGNIN',
    });
  };

  const registerCallback = (e) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      dispatch(register({ name, email, password, salonId, role })).then((res) => {
        if (res.payload.status == 200) {
          closeModal();

        }
      }).catch((err) => {
        dispatch(showSnackBar(err, 'error'))

      });

    }
  };

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>
        <SubHeading>
          <FormattedMessage
            id='signUpText'
            defaultMessage='Every fill is required in sign up'
          />
        </SubHeading>
        <form onSubmit={registerCallback}>
          <Input
            type='text'
            placeholder={intl.formatMessage({
              id: 'namePlaceholder',
              defaultMessage: 'Name',
            })}
            value={name}
            onChange={(e) => setName(e.target.value)}
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
          />
          <Input
            type='email'
            placeholder={intl.formatMessage({
              id: 'emailAddressPlaceholder',
              defaultMessage: 'Email Address.',
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
          />
          <Input
            type='password'
            placeholder={intl.formatMessage({
              id: 'passwordPlaceholder',
              defaultMessage: 'Password (min 6 characters)',
            })}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
          />
          <HelperText style={{ padding: '20px 0 30px' }}>
            <FormattedMessage
              id='signUpText'
              defaultMessage="By signing up, you agree to Pickbazar's"
            />
            &nbsp;
            <Link href='/'>
              <a>
                <FormattedMessage
                  id='termsConditionText'
                  defaultMessage='Terms &amp; Condition'
                />
              </a>
            </Link>
          </HelperText>
          <Button variant='primary' size='big' width='100%' type='submit'>
            <FormattedMessage id='continueBtn' defaultMessage='Continue' />
          </Button>
        </form>
        {/* <Divider>
          <span>
            <FormattedMessage id='orText' defaultMessage='or' />
          </span>
        </Divider> */}
        {/* <Button
          variant='primary'
          size='big'
          style={{
            width: '100%',
            backgroundColor: '#4267b2',
            marginBottom: 10,
          }}
        >
          <IconWrapper>
            <Facebook />
          </IconWrapper>
          <FormattedMessage
            id='continueFacebookBtn'
            defaultMessage='Continue with Facebook'
          />
        </Button> */}
        {/* <Button
          variant='primary'
          size='big'
          style={{ width: '100%', backgroundColor: '#4285f4' }}
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          <FormattedMessage
            id='continueGoogleBtn'
            defaultMessage='Continue with Google'
          />
        </Button> */}
        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='alreadyHaveAccount'
            defaultMessage='Already have an account?'
          />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
