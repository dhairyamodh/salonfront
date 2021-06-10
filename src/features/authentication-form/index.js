import SignInForm from './login';
import SignOutForm from './register';
import ForgotPassForm from './forgot-password';
import { useSelector } from 'react-redux';

export default function AuthenticationForm() {
  const authState = useSelector(state => state.auth)
  console.log("authState", authState);
  let RenderForm;

  if (authState.currentForm === 'signIn') {
    RenderForm = SignInForm;
  }

  if (authState.currentForm === 'signUp') {
    RenderForm = SignOutForm;
  }

  if (authState.currentForm === 'forgotPass') {
    RenderForm = ForgotPassForm;
  }

  return <RenderForm />;
}
