import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Content } from './styles';

import Logo from '../../icons/Logo';

import card from '../../../assets/icons/card.svg';

type SideNavigationProps = {
  children?: React.ReactNode;
}

type RegisterPages = {
  page: string;
  icon: string;
}

const SideNavigation = ({ children }: SideNavigationProps) => {
  const [page, setPage] = useState<string>('');
  const [registerPages, setRegisterPages] = useState<RegisterPages[]>([]);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  useEffect(() => {
    const [, urlName] = window.location.pathname.split('/');

    setPage(urlName);
  }, [setPage]);

  useEffect(() => {
    setRegisterPages(
      [
        {
          page: 'perfil',
          icon: card
        },
        {
          page: 'income',
          icon: card
        },
        {
          page: 'expense',
          icon: card
        },
        {
          page: 'overview',
          icon: card
        },
      ]
    );
  }, [setRegisterPages]);

  useEffect(() => {
    if (page === 'register') {
      setIsRegister(true);
    }
  }, [page, setIsRegister]);

  return (
    <Container>
      <Header>
        <Link to="/login">
          <Logo />
          <div>
            <p>SmartWallet</p>
          </div>
        </Link>
      </Header>
      <Content register={isRegister}>
        {
          isRegister ? (
            <ul>
              { registerPages.map((registerItems) => (
                <li key={registerItems.page}>
                  <div className="icon-background">
                    <img src={registerItems.icon} alt={registerItems.page} />
                  </div>
                  {registerItems.page}
                </li>
              )) }
            </ul>
          ) : (
            <>
              {children}
            </>
          )
        }
      </Content>
    </Container>
  );
}

export default SideNavigation;
