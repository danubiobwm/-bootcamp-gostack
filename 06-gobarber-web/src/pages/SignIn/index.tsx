import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={Logo} alt="GoBarber" />
          <form>
            <h1> Faça seu logo</h1>
            <Input name="E-mail" icon={FiMail} placeholder="E-mail" />
            <Input
              name="Senha"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
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
