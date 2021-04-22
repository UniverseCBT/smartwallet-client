import styled from 'styled-components';

type SelectProps = {
  showSelect: boolean;
};

export const Container = styled.div``;

export const Itens = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #ececec;
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

export const WrapperUtils = styled.div`
  position: relative;
`;

type FeatureProps = SelectProps;

export const Features = styled.div<FeatureProps>`
  margin-right: 10px;
  opacity: ${props => (props.showSelect ? '0' : '1')};

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

export const Select = styled.div<SelectProps>`
  background: #fff;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 4px;
  display: ${props => (props.showSelect ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  overflow: hidden;

  button {
    border: none;
    background: none;
    position: relative;
    padding: 10px 15px;

    svg path {
      fill: #878787;
    }

    &:hover {
      background: #174c64;

      svg path {
        fill: #fff;
      }
    }

    & + button {
      &:before {
        content: '';
        width: 1px;
        height: 20px;
        background: #ececec;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);
      }

      &:hover {
        background: #f95151;

        &:before {
          content: '';
          display: none;
        }

        svg path {
          fill: #fff;
        }
      }
    }
  }
`;

type ActionsProps = SelectProps;

export const Actions = styled.div<ActionsProps>`
  margin-left: 10px;
  display: flex;
  justify-content: flex-end;

  > button {
    background: ${props => (props.showSelect ? '#1AE5BD' : '#fff')};
    color: ${props => (props.showSelect ? '#fff' : '#174c64')};
    border: none;
    border-radius: 4px;
    padding: 5px 5px 5px 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 10px;

        path {
          fill: ${props => (props.showSelect ? '#fff' : '#174c64')};
        }
      }
    }
  }
`;
