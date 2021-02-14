import React, { useState, useEffect, useCallback } from 'react';

import { Container } from './styles';

import closeEyesIcon from '../../assets/icons/close_eyes.svg';
import openEyesIcon from '../../assets/icons/open_eyes.svg';
import slashEyesIcon from '../../assets/icons/eyes_slash.svg';

type InputProps = {
  icon?: string;
  text?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ icon, text, type }) => {
  const [isPassword, setIsPassword] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleInputType() {
      if (type === 'password') {
        setIsPassword(true);
      }
    }

    handleInputType();
  }, [type, setIsPassword]);

  const visiblePasswordType = useCallback(() => {
    setVisible(!visible);
  }, [visible, setVisible]);

  return (
    <Container>
      <label>
        <div>
          <img src={icon} alt={text} />
        </div>

        <input
          // eslint-disable-next-line no-nested-ternary
          type={type}
          placeholder={text}
        />
        {
          isPassword && (
          <button type="button" onClick={() => visiblePasswordType()}>
            <img src={closeEyesIcon} alt="visible" />
          </button>
          )
        }
      </label>
    </Container>
  );
}

export default Input;
