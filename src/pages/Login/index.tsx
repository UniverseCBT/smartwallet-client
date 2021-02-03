import React from 'react';

import { Wrapper, Background } from './styles'
import { Container } from '../../components/Container/styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import cardUserIcon from '../../assets/icons/card.svg';
import lockIcon from '../../assets/icons/lock.svg';

const Login = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <div>
            <Input icon={cardUserIcon} text="Username or Email" />
            <Input icon={lockIcon} text="Password" />
            <Button text="seila" />
          </div>
        </Container>
        {/* <Background /> */}
      </Wrapper>
    </>
  );
};

export default Login;
