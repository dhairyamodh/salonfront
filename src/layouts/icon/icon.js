import Router from 'next/router';
import { IconBox, IconImage } from './icon.style';

const Icon = ({ iconName, alt }) => {

  return (
    <IconBox >
      <IconImage src={iconName} alt={alt} />
    </IconBox>
  );
};

export default Icon;
