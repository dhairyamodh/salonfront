import { useHistory } from 'react-router-dom';
import { LogoBox, LogoImage } from './logo.style';

const Logo = ({ imageUrl, alt, onClick }) => {
  const Router = useHistory()
  function onLogoClick() {
    Router.push('/');
    if (onClick) {
      onClick();
    }
  }
  return (
    <LogoBox onClick={onLogoClick}>
      <LogoImage src={imageUrl} alt={alt} />
    </LogoBox>
  );
};

export default Logo;
