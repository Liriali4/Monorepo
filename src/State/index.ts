import { create } from 'zustand'

type CategoriasState = {
    categorias: string[];
    selectedCategoria: string;
    setSelectedCategoria: (selectedCategoria: string) => void;
  };
  

const useCategoriasStore = create<CategoriasState>((set) => ({
    categorias: [],
    selectedCategoria: '',
    setSelectedCategoria: (selectedCategoria) =>
      set((state) => ({ ...state, selectedCategoria })),
  }));
  

export default useCategoriasStore;
