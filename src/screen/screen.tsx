import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Tables from '../modules/Table/Table';
import Category from '../modules/Category/Category';
import Drinks from '../modules/Drink/Drinks';

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