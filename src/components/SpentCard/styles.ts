import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  box-shadow: 0px 0px 13px var(--shadow);

  @media screen and (min-width: 575px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: column;
    align-items: initial;
    justify-content: initial;
  }
`;

export const SpentCategory = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const CategoryImage = styled.div`
  margin-right: 10px;
  padding: 10px;
  background: var(--background);
  border-radius: 6px;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const CategoryInfo = styled.div`
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  h4 {
    color: var(--title);
    font-size: 1.2rem;
  }

  p {
    color: var(--text);
    font-size: 1rem;
    margin-top: 5px;

    @media screen and (min-width: 1024px) and (max-width: 1200px) {
      margin-left: 10px;
    }
  }
`;
