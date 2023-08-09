import React from 'react'
import { Box, Button, Text} from '@chakra-ui/react'
import useCategoriasStore from '../../State';

export default function Category(): JSX.Element {

    const categorias = ['Bebidas Alcoólicas',
        'Bebidas Não Alcoólicas',
        'Bebidas Quentes',
        'Bebidas Energéticas'
    ]
    const setSelectedCategoria = useCategoriasStore((state) => state.setSelectedCategoria);


    return (
        <Box>
            <Text>
                Categorias
            </Text>
            {categorias.map((categoria) => (
                <Button
                    key={categoria}
                    onClick={() => setSelectedCategoria(categoria)}
                >
                    {categoria}
                </Button>
            ))}
        </Box>
    )
}