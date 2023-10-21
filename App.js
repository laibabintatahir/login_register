
import React, { useState } from 'react';
import { View } from 'react-native';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const switchToRegister = () => {
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {showLogin ? (
        <LoginPage switchToRegister={switchToRegister} />
      ) : (
        <RegisterPage switchToLogin={switchToLogin} />
      )}
    </View>
  );
};

export default App;
