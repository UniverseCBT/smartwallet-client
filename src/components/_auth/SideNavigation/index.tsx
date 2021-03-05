import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Content, Step } from './styles';

import Logo from '../../icons/Logo';

type SideNavigationProps = {
  children?: React.ReactNode;
};

type RegisterPages = {
  page: string;
  active: boolean;
};

const SideNavigation = ({ children }: SideNavigationProps) => {
  const [page, setPage] = useState<string>('');
  const [registerPages, setRegisterPages] = useState<RegisterPages[]>([]);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  useEffect(() => {
    const [, urlName] = window.location.pathname.split('/');

    setPage(urlName);
  }, [setPage]);

  useEffect(() => {
    setRegisterPages([
      {
        page: 'Perfil',
        active: true
      },
      {
        page: 'Income',
        active: false
      },
      {
        page: 'Expense',
        active: false
      },
      {
        page: 'Overview',
        active: false
      }
    ]);
  }, [setRegisterPages]);

  useEffect(() => {
    if (page === 'register') {
      setIsRegister(true);
    }
  }, [page, setIsRegister]);

  const totalSteps = useMemo(() => {
    return registerPages.length;
  }, [registerPages]);

  console.log(totalSteps);

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
        {isRegister ? (
          <ul>
            {registerPages.map((registerItems, registerIndex) => (
              <li key={registerItems.page}>
                <Step active={registerItems.active}>
                  <span className="content-number">
                    {`0${registerIndex + 1}`}
                    <span className="content-separate-bar" />
                    <span className="total-step">
                      {`0${registerPages.length}`}
                    </span>
                  </span>
                  <div>
                    <span>{`STEP ${registerIndex + 1}`}</span>
                    <p>{registerItems.page}</p>
                  </div>
                </Step>
              </li>
            ))}
          </ul>
        ) : (
          <>{children}</>
        )}
      </Content>
    </Container>
  );
};

export default SideNavigation;
