import styled from 'styled-components';

export const Container = styled.div`
  order: 2;

  @media screen and (min-width: 1024px) {
    height: 100vh;
    width: 600px;
    overflow: hidden;
    margin-left: 0;
    padding: 20px;
  }
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
    justify-content: space-between;
  }

  > h3 {
    color: #646464;
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

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    flex-direction: row;
  }

  > span {
    display: none;
    order: 2;
    color: #dfdfdf;
    font-size: 1rem;
    margin-top: 10px;

    @media screen and (min-width: 575px) {
      display: inline-block;
    }

    @media screen and (min-width: 1024px) {
      order: 0;
      margin-right: 10px;
      margin-top: 0;
    }
  }
`;

export const NotificationIcon = styled.div`
  position: relative;
  background: #fff;
  width: 40px;
  height: 40px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;

  span {
    position: absolute;
    top: 5px;
    left: 18px;
    padding: 2px 4px;
    background: #2fdf84;
    border: 2px solid #174c64;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.5rem;
    color: #174c64;
  }
`;

export const UserNavigation = styled.div`
  background: #fff;
  padding: 20px 15px;
  border-radius: 6px;

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 90%;
    margin-top: 40px;
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #f6f6f6;

  @media screen and (min-width: 1024px) {
    border-bottom: 2px solid #f6f6f6;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  .user__icon {
    background: #f3f4f8;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 575px) {
      width: 40px;
      height: 40px;
      padding: 10px;
    }
  }

  .user__info {
    margin-left: 10px;

    strong,
    a {
      display: block;
    }

    strong {
      color: #646464;
      font-size: 0.9rem;

      @media screen and (min-width: 575px) {
        font-size: 1rem;
      }
    }

    a {
      font-size: 0.8rem;
      color: #dfdfdf;

      @media screen and (min-width: 575px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export const UserMoney = styled.div`
  span,
  strong {
    display: block;
    text-align: right;
  }

  span {
    font-size: 0.6rem;
    color: #dfdfdf;

    @media screen and (min-width: 575px) {
      font-size: 0.9rem;
    }
  }

  strong {
    font-size: 1.2rem;
    color: #646464;

    @media screen and (min-width: 575px) {
      font-size: 1.5rem;
    }
  }
`;

export const PerfilExpense = styled.div`
  margin-top: 20px;

  h4 {
    color: #646464;
    font-size: 1.6rem;
  }

  > p {
    color: #dfdfdf;
    font-size: 1rem;
    padding-right: 10px;
    margin-top: 5px;
  }
`;

export const Categories = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const SelectCategory = styled.div`
  flex: 1;
  width: 100%;
  background: #f3f4f8;
`;
