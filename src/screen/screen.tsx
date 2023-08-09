import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Tables from '../modules/Mesas';
import Category from '../modules/Categorias';
import Drinks from '../modules/Bebidas';

export default function Screen(): JSX.Element {
    return (
        <Box
        p={'10px 50px'}
        >
            <Heading
                as='h2'
                fontSize={38}
                fontFamily={'open sans'}
                textAlign={'center'}
            >
                Como Funciona?
            </Heading>
            <Heading
                as='h3'
                fontSize={26}
                fontFamily={'open sans'}
            >
                Como Funciona?
                Clique em uma categoria para ver as bebidas.
            </Heading>
            <Tables />
            <Category />
            <Drinks />
        </Box>
    )
}