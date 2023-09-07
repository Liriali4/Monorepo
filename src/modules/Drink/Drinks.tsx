import React from 'react'
import { Box } from '@chakra-ui/react';
import Drinks from 'multirepomodulodrink'
import useCategoriasStore from '../../State';

export default function ModuleDrinks(): JSX.Element{

    const selectedCategoria = useCategoriasStore((state) => state.selectedCategoria);

    return (
        <Box>
            <Drinks selectedCategoria={selectedCategoria}/>
        </Box>
    );
};

