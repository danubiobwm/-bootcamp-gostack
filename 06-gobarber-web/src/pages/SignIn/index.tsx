import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={Logo} alt="GoBarber" />
          <form>
            <h1> Faça seu logo</h1>
            <input placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
            <a href="forgot">Esqueci minha senha</a>
          </form>
          <a href="forgot">
            <FiLogIn />
            Esqueci minha senha
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
