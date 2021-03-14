import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container, Header, Content, Step, StepContent } from './styles';

import Logo from '../../icons/Logo';

type SideNavigationProps = {
  children?: React.ReactNode;
};

type RegisterPages = {
  step: number;
  page: string;
  active?: boolean;
  hasActive?: boolean;
};

const SideNavigation = ({ children }: SideNavigationProps) => {
  const { url } = useRouteMatch();

  const [page, setPage] = useState<string>('');
  const [registerPageName, setRegisterPageName] = useState<string>('');
  const [registerPages, setRegisterPages] = useState<RegisterPages[]>([]);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  useEffect(() => {
    const [, urlName, registerName] = url.split('/');

    setPage(urlName);
    setRegisterPageName(registerName);
  }, [setPage, setRegisterPageName, url]);

  useEffect(() => {
    setRegisterPages([
      {
        step: 1,
        page: 'Perfil',
        active: false
      },
      {
        step: 2,
        page: 'Income',
        active: false
      },
      {
        step: 3,
        page: 'Expense',
        active: false
      },
      {
        step: 4,
        page: 'Overview',
        active: false
      }
    ]);
  }, [setRegisterPages]);

  useEffect(() => {
    registerPages.forEach(registerItem => {
      const registerNameLowerCase = registerItem.page.toLowerCase();

      if (registerNameLowerCase === registerPageName) {
        Object.assign(registerItem, {
          ...registerItem,
          active: true
        });
      }
    });
  }, [registerPages, registerPageName]);

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
                    <StepContent active={registerItems.active}>
                      {`STEP 0${registerIndex + 1}`}
                      <span className="total-step">
                        {`/ 0${registerPages.length}`}
                      </span>
                    </StepContent>
                    <p>{` ${registerItems.page}`}</p>
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
