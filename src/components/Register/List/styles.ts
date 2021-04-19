import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  & + div {
    border-top: 1px solid #ececec;
  }
`;

export const Description = styled.div`
  h6 {
    color: #878787;
    font-size: 1.2rem;
  }

  span {
    display: block;
    font-size: 0.9rem;
    color: #c9c9c9;
  }
`;

export const Utils = styled.div`
  display: flex;
  align-items: center;
`;

export const Features = styled.div`
  margin-right: 10px;

  strong,
  span {
    display: block;
    text-align: right;
  }

  strong {
    font-size: 1.4rem;
    color: #878787;
  }

  span {
    display: block;
    font-size: 0.9rem;
    color: #c9c9c9;
  }
`;

export const Actions = styled.div`
  margin-left: 10px;

  > button {
    background: none;
    border: none;
    border-radius: 1000px;

    & + button {
      margin-left: 10px;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;
