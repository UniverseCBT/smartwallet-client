import React, { useState } from 'react';

import {
  Container,
  Itens,
  Description,
  Utils,
  WrapperUtils,
  Features,
  Select,
  Actions
} from './styles';

import { ReactComponent as Menu } from '../../../assets/icons/more.svg';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Pen } from '../../../assets/icons/pen.svg';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';

import { transformMoney } from '../../../utils/currency';

type DataProps = {
  id: string;
  title: string;
  description: string;
  money: number;
  category?: string;
};

type Props = {
  data: DataProps[];
};

const List = ({ data }: Props) => {
  const [showSelect, setShowSelect] = useState(false);

  return (
    <Container>
      {data.length > 0 && (
        <Actions showSelect={showSelect}>
          <button type="button" onClick={() => setShowSelect(!showSelect)}>
            Edit / Delete
            <div>{showSelect ? <Close /> : <Menu />}</div>
          </button>
        </Actions>
      )}
      {data.map(dataItem => (
        <Itens key={dataItem.id}>
          <Description>
            <h6>{dataItem.title}</h6>
            <span>{dataItem.description}</span>
          </Description>
          <Utils>
            <WrapperUtils>
              <Features showSelect={showSelect}>
                <strong>{transformMoney(dataItem.money)}</strong>
                {dataItem.category && <span>{dataItem.category}</span>}
              </Features>
              <Select showSelect={showSelect}>
                <button type="button">
                  <Pen width={15} height={15} />
                </button>
                <button type="button">
                  <Trash width={15} height={15} />
                </button>
              </Select>
            </WrapperUtils>
          </Utils>
        </Itens>
      ))}
    </Container>
  );
};

export default List;
