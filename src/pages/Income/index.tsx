import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import Content, { Ref } from '../../components/_noauth/Content';
import Form from '../../components/_noauth/Form';
import Header from '../../components/_noauth/Header';
import SideNavigation from '../../components/_noauth/SideNavigation';
import Wrapper from '../../components/_noauth/Wrapper';
import Col from '../../components/Grid/Col';
import Row from '../../components/Grid/Row';
import Input from '../../components/Input';
import RegisterFooter from '../../components/Register/Footer';
import RegisterList from '../../components/Register/List';
import Select, { OptionsProps } from '../../components/Select';

import { detectPhone } from '../../shared/detectPhone';

import { ButtonForm, PaycheckForm } from './styles';

type PaycheckItems = {
  id: string;
  title: string;
  description: string;
  money: number;
  category?: string;
};

const Income = () => {
  const { register } = useForm();

  const [paycheckItems, setPaycheckItems] = useState<PaycheckItems[]>([]);

  const [selectValue, setSelectValue] = useState<string | number>('' || 0);

  const contentRef = useRef<Ref | null>(null);
  const paycheckListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current && paycheckListRef.current) {
      contentRef.current.scrollTo({
        top: paycheckListRef.current.clientHeight,
        behavior: 'smooth'
      });

      const detectMobilePhone = detectPhone();
      if (detectMobilePhone && paycheckItems.length > 5) {
        window.scrollTo({
          top: paycheckListRef.current.clientHeight + 100,
          behavior: 'smooth'
        });
      }
    }
  }, [contentRef, paycheckItems, paycheckListRef]);

  const handleAddPaycheckList = () => {
    setPaycheckItems([
      ...paycheckItems,
      {
        id: v4(),
        title: 'Back end engineer',
        description: 'Weekly',
        money: 500
      }
    ]);
  };

  const selectOptions: OptionsProps[] = [
    {
      label: 'Weekly',
      value: 'weekly'
    },
    {
      label: 'Monthly',
      value: 'monthly'
    }
  ];

  return (
    <Wrapper>
      <Row>
        <Col column={1}>
          <SideNavigation />
        </Col>
        <Col column={3}>
          <Content ref={contentRef}>
            <Header>
              <p>
                {`Having trouble ? `}
                <Link to="/">Get Help</Link>
              </p>
            </Header>
            <Form>
              <div className="description">
                <h1>Lets calculate your income</h1>
                <p>
                  Tip : make a list on everything you spend more than twice a
                  month
                </p>
              </div>
              <PaycheckForm>
                <Row>
                  <Col>
                    <Input
                      inputName="name"
                      text="Income Name"
                      register={register}
                    />
                  </Col>
                  <Col>
                    <Select
                      label="Timeframe"
                      options={selectOptions}
                      setValue={setSelectValue}
                    />
                  </Col>
                  <Col>
                    <Input
                      inputName="expectedMoney"
                      text="Expected Money"
                      register={register}
                    />
                  </Col>
                  <Col column={1} align="center">
                    <ButtonForm type="button" onClick={handleAddPaycheckList}>
                      +
                    </ButtonForm>
                  </Col>
                </Row>
              </PaycheckForm>
              <RegisterList data={paycheckItems} ref={paycheckListRef} />
              <RegisterFooter totalMoney={0} />
            </Form>
          </Content>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Income;
