import React, { useState, useEffect, useCallback } from 'react';

import { Container, Label, LabelValue, VisiblePassword } from './styles';

import closeEyesIcon from '../../assets/icons/close_eyes.svg';
import openEyesIcon from '../../assets/icons/open_eyes.svg';

type InputProps = {
  inputName: string;
  text?: string;
  placeholder?: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({ inputName, text, type }) => {
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
      <Label htmlFor={inputName}>
        <LabelValue>
          <span>{text}</span>
          <input
            type={isPassword ? defaultType : type}
            spellCheck="false"
            autoComplete={type === 'email' ? 'true' : 'false'}
            name={inputName}
            id={inputName}
          />
        </LabelValue>
        {isPassword && (
          <VisiblePassword type="button" onClick={() => visiblePasswordType()}>
            <img
              src={visible ? openEyesIcon : closeEyesIcon}
              alt={visible ? 'Visible' : 'Hidden'}
            />
          </VisiblePassword>
        )}
      </Label>
    </Container>
  );
};

export default Input;
