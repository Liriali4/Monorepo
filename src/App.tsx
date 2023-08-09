import React from 'react';
import { Text } from '@chakra-ui/react';
import Tables from './modules/Mesas';
import Category from './modules/Categorias';
import Drinks from './modules/Bebidas';

function App() {
  return (
    <Text>
      Aplication
      <Tables />
      <Category />
      <Drinks />
    </Text>
  );
}

export default App;
