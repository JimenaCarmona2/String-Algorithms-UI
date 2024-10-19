import React from 'react';
import { TrieTree } from '../algorithms/TrieTree';

interface AutocompleteProps {
    searchTree: TrieTree;
    searchArrayOfWords: boolean;
}

export function Autocomplete(searchPrefix: string, arrayOfWords: string[] = []): string[] {
    // Se inicializa el estado con un TrieTree vacío, cuando se proporciona el arrayOfWords, se llena el TrieTree
    const [search, setSearch] = React.useState<AutocompleteProps>({ searchTree: new TrieTree(), searchArrayOfWords: false });
    const { searchTree, searchArrayOfWords } = search;

    // Si la búsqueda del prefijo y del arreglo de palabras coincide se actualiza
    React.useEffect(() => {
        if (!searchArrayOfWords && arrayOfWords.length > 0) {
            setSearch({ // Se utiliza el setter para llenar el TrieTree
                searchTree: new TrieTree(arrayOfWords), // Se inicializa un árbol con las palabras del archivo de texto 1
                searchArrayOfWords: true,
            });
        }
    }, [arrayOfWords, searchArrayOfWords]);
    
    // Si se ingresa un prefijo
    if (searchPrefix.length > 0 && searchArrayOfWords) {
        return searchTree.complete(searchPrefix); // Se autocompleta con el método de TrieTree.tsx
    }
    
    return [];
}
