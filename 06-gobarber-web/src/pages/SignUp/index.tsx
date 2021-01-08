import React from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function hadleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={Logo} alt="GoBarber" />
          <Form onSubmit={hadleSubmit}>
            <h1> Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="E-mail" icon={FiMail} placeholder="E-mail" />
            <Input
              name="Senha"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <a href="/">
            <FiArrowLeft />
            Voltar para logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
