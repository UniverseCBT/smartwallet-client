import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { logoutRequest } from 'store/modules/auth/Auth.actions';

import { transformMoney } from 'utils/currency';

import Button from '../Button';

import { Container } from './styles';

import arrowLeftIcon from 'assets/icons/arrowLeft.svg';
import arrowRightIcon from 'assets/icons/arrowRight.svg';

type Props = {
  totalMoney: number;
};

const Footer = ({ totalMoney }: Props) => {
  const dispatch = useDispatch();

  const teste = useCallback(() => {
    dispatch(logoutRequest());
  }, [dispatch]);

  return (
    <Container>
      <div className="money">
        <h4>Total Expected</h4>
        <span>{transformMoney(totalMoney)}</span>
      </div>

      <div className="actions">
        <Button
          text="Back"
          theme="back"
          icon={{ url: arrowLeftIcon, altText: 'arrow left' }}
          onClick={teste}
        />
        <Button
          text="Next"
          icon={{
            url: arrowRightIcon,
            altText: 'arrow right',
            side: 'right'
          }}
        />
      </div>
    </Container>
  );
};

export default Footer;
