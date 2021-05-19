import styled from 'styled-components';

export const Container = styled.div`
  order: 2;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    display: initial;
    width: auto;
  }

  > h3 {
    color: #174c64;
    font-size: 1.2rem;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

export const Notification = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: none;
  background: none;

  > span {
    order: 2;
    color: #dfdfdf;
    font-size: 1rem;
    margin-top: 10px;
  }
`;

export const NotificationIcon = styled.div`
  background: #fff;
  width: 40px;
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
`;
