import React, { useState, useEffect, useCallback } from 'react';

import { Container } from './styles';

import closeEyesIcon from '../../assets/icons/close_eyes.svg';
import openEyesIcon from '../../assets/icons/open_eyes.svg';

type InputProps = {
  icon?: string;
  text?: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({ icon, text, type }) => {
  const [isPassword, setIsPassword] = useState(false);
  const [visible, setVisible] = useState(false);
  const [defaultType, setDefaultType] = useState('');

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

  useEffect(() => {
    if (isPassword) {
      setDefaultType('password');

      if (visible) {
        setDefaultType('text');
      }
    }
  }, [isPassword, visible, setDefaultType]);

  return (
    <Container>
      <label>
        <div>
          <img src={icon} alt={text} />
        </div>

        <input type={isPassword ? defaultType : type} placeholder={text} />
        {isPassword && (
          <button type="button" onClick={() => visiblePasswordType()}>
            <img
              src={visible ? openEyesIcon : closeEyesIcon}
              alt={visible ? 'Visible' : 'Hidden'}
            />
          </button>
        )}
      </label>
    </Container>
  );
};

export default Input;
