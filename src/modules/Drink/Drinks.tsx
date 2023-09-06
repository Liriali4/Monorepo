import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Drinks from 'multirepomodulodrink';

export default function ModuleDrinks(): JSX.Element{


    return (
        <Box>
            <Text> Bebidas da Categoria </Text>
            <Drinks/>
        </Box>
    );
};

