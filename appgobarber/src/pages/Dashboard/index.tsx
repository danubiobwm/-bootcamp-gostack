import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sair" onPress={singOut} />
    </View>
  );
};

export default Dashboard;
