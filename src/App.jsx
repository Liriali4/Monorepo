import { Box, Text } from "@chakra-ui/react";
import Table from "./modules/Mesas";
import Category from "./modules/Categorias";

function App() {
  return (
    <Box>
      <Text>Monorepo</Text>
      <Table />
      <Category />
    </Box>
  );
}

export default App;
