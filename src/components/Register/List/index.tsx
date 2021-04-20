import React from 'react';

import { Container, Description, Utils, Features, Actions } from './styles';

import moreIcon from '../../../assets/icons/more.svg';

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
  const teste = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <>
      {data.map(dataItem => (
        <Container key={dataItem.id}>
          <Description>
            <h6>{dataItem.title}</h6>
            <span>{dataItem.description}</span>
          </Description>
          <Utils>
            <Features>
              <strong>{teste.format(dataItem.money)}</strong>
              {dataItem.category && <span>{dataItem.category}</span>}
            </Features>
            <Actions>
              <button type="button">
                <img src={moreIcon} alt="three points" />
              </button>
            </Actions>
          </Utils>
        </Container>
      ))}
    </>
  );
};

export default List;
