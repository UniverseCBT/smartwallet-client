import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Container, Header, Label } from './styles';

type FilterItemsProps = {
  id: string;
  value: string | number;
  name: string;
  default?: boolean;
  text?: string;
  image?: {
    url: string;
    alt: string;
  };
  size?: number;
};

type Props = {
  title: string;
  itemsFilter: FilterItemsProps[];
  setFilterValue: Dispatch<SetStateAction<string>>;
};

const Filter = ({ title, itemsFilter, setFilterValue }: Props) => {
  return (
    <Container>
      <h5>{title}</h5>
      <Header>
        {itemsFilter.map(filterItem => (
          <Label key={filterItem.id}>
            <label htmlFor={filterItem.id}>
              {filterItem.image && (
                <img src={filterItem.image.url} alt={filterItem.image.url} />
              )}
              <input
                type="radio"
                id={filterItem.id}
                value={filterItem.value}
                name={filterItem.name}
                defaultChecked={filterItem.default}
                onChange={
                  (event: ChangeEvent<HTMLInputElement>) =>
                    setFilterValue(event.target.value)
                  // eslint-disable-next-line react/jsx-curly-newline
                }
              />
              {filterItem.text && <span>{filterItem.text}</span>}
            </label>

            <span className="size">{filterItem.size}</span>
          </Label>
        ))}
      </Header>
    </Container>
  );
};

export default Filter;
