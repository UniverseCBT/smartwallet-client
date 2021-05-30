import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white);
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  box-shadow: 0px 0px 13px var(--shadow);
`;

export const SpentCategory = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryImage = styled.div`
  margin-right: 5px;
  padding: 10px;
  background: var(--background);
  border-radius: 6px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const CategoryInfo = styled.div`
  h4 {
    text-overflow: ellipsis;
  }
`;
