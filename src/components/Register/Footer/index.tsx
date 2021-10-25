import React from 'react';

import { transformMoney } from '../../../utils/currency';

import Button from '../Button';

import arrowLeftIcon from '../../../assets/icons/arrowLeft.svg';
import arrowRightIcon from '../../../assets/icons/arrowRight.svg';

import { Container } from './styles';

type Props = {
  totalMoney: number;
};

const Footer = ({ totalMoney }: Props) => {
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
