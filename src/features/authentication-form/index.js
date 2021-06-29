import SignInForm from './login';
import SignUpForm from './register';
import ForgotPassForm from './forgot-password';
import { useSelector } from 'react-redux';

export default function AuthenticationForm() {
  const authState = useSelector(state => state.auth)
  let RenderForm;

  if (authState.currentForm === 'signIn') {
    RenderForm = SignInForm;
  }

  if (authState.currentForm === 'signUp') {
    RenderForm = SignUpForm;
  }

  if (authState.currentForm === 'forgotPass') {
    RenderForm = ForgotPassForm;
  }

  return <RenderForm />;
}
