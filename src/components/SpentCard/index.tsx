import React from 'react';

import ProgressBar from '../ProgressBar';

import {
  Container,
  SpentCategory,
  CategoryImage,
  CategoryInfo
} from './styles';

type SpentCardProps = {
  image: string;
  title: string;
  percent: number;
  available: string;
  total: string;
};

const SpentCard = ({
  image,
  title,
  percent,
  available,
  total
}: SpentCardProps) => {
  return (
    <Container>
      <SpentCategory>
        <CategoryImage>
          <img src={image} alt={title} />
        </CategoryImage>
        <CategoryInfo>
          <h4>{title}</h4>
          <p>{`${percent}%`}</p>
        </CategoryInfo>
      </SpentCategory>
      <ProgressBar available={500} total={1000} />
    </Container>
  );
};

export default SpentCard;
