import React from 'react';

import { Container } from './styles';

type InputProps = {
  icon: string;
  text?: string;
}

const Input: React.FC<InputProps> = ({ icon, text }) => {
  return (
    <Container>
      <label>
        <div>
          <img src={icon} alt={text} />
        </div>
        <input type="text" placeholder={text} />
      </label>
    </Container>
  );
}

export default Input;
