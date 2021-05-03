import styled from 'styled-components';

export const Container = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const MobileNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #1ce4bd;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px 10px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavPrinciple = styled.div`
  display: flex;
  align-items: center;

  button {
    border: none;
    background: none;

    img {
      width: 20px;
    }
  }

  h5 {
    font-size: 1.3rem;
    color: #fff;
    margin-left: 10px;
  }
`;

export const NavPerfil = styled.div`
  display: flex;
  align-items: center;

  button {
    background: #fff;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;

    & + button {
      margin-left: 5px;
    }

    img {
      width: 20px;
    }
  }
`;
