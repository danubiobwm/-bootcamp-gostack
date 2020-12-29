import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite Aqui..." />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test/">
          <img
            src="https://avatars1.githubusercontent.com/u/40647550?s=400&u=16872de4fdf211ebbbb1d1282212fecc9cb55a26&v=4"
            alt="nome"
          />
          <div>
            <strong>Nome de User</strong>
            <p>Descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test/">
          <img
            src="https://avatars1.githubusercontent.com/u/40647550?s=400&u=16872de4fdf211ebbbb1d1282212fecc9cb55a26&v=4"
            alt="nome"
          />
          <div>
            <strong>Nome de User</strong>
            <p>Descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test/">
          <img
            src="https://avatars1.githubusercontent.com/u/40647550?s=400&u=16872de4fdf211ebbbb1d1282212fecc9cb55a26&v=4"
            alt="nome"
          />
          <div>
            <strong>Nome de User</strong>
            <p>Descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
