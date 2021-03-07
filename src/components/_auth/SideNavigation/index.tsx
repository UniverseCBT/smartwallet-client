import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Content, Step, StepContent } from './styles';

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
                  </span>
                  <div>
                    <StepContent>
                      {`STEP 0${registerIndex + 1}`}
                      <span className="total-step">
                        {`/ 0${registerPages.length}`}
                      </span>
                    </StepContent>
                    <p>{`Register ${registerItems.page}`}</p>
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
