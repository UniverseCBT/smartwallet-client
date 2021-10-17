import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useDevice } from 'hooks/useDevice';

import Logo from 'components/icons/Logo';

import { Container, Header, Content, Step, StepContent } from './styles';

type SideNavigationProps = {
  children?: React.ReactNode;
};

type RegisterPages = {
  step: number;
  page: string;
  active: boolean;
};

const steps: RegisterPages[] = [
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
];

const SideNavigation = ({ children }: SideNavigationProps) => {
  const isDesktop = useDevice('desktop');

  console.log(isDesktop);

  const location = useLocation();

  const [pageIndex, setPageIndex] = useState(0);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  useEffect(() => {
    const [, registerLocation, stepName] = location.pathname.split('/');

    const getRegisterIndex = steps.findIndex(
      registerItem => registerItem.page.toLocaleLowerCase() === stepName
    );

    if (registerLocation === 'register') {
      setIsRegister(true);
    }

    setPageIndex(getRegisterIndex);
  }, [location.pathname]);

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
            {steps.map((step, index) => {
              return (
                <li key={step.page}>
                  <Step
                    to={`/register/${step.page.toLocaleLowerCase()}`}
                    $activelink={
                      isDesktop ? pageIndex >= index : index === pageIndex
                    }
                  >
                    <span className="content-number">{`0${index + 1}`}</span>
                    <div>
                      <StepContent $activelink={pageIndex >= index}>
                        {`STEP 0${index + 1}`}
                        <span className="total-step">{`/ 0${steps.length}`}</span>
                      </StepContent>
                      <p>{` ${step.page}`}</p>
                    </div>
                  </Step>
                </li>
              );
            })}
          </ul>
        ) : (
          <>{children}</>
        )}
      </Content>
    </Container>
  );
};

export default SideNavigation;
