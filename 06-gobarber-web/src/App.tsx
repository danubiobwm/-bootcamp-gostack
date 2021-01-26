import React from 'react';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';
import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Danubio' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyles />
    </>
  );
};

export default App;
