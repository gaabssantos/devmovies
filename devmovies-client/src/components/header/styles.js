import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  nav {
    padding: 0 60px;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  a {
    color: #fff;
    transition: 0.3s;
    font-size: 20px;
    letter-spacing: 0.6px;
    line-height: 25px;
    text-decoration: none;
    position: relative;
    padding-bottom: 5px;
  }

  a:hover {
    opacity: 0.7;
  }

  a::after {
    content: '';
    width: 0;
    height: 2px;
    background-color: #fff;
    position: absolute;
    bottom: 2px;
    left: 0;
    transition: 0.3s;
  }

  a:hover::after {
    width: 100%;
  }
`;
