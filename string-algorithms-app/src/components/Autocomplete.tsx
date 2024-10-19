import React from 'react';
import { TrieTree } from '../algorithms/TrieTree';

export function Autocomplete(searchPrefix: string, arrayOfWords: string[] = []): string[] {
    // Initialize state with a TrieTree, which will be updated when arrayOfWords changes
    const [searchTree, setSearchTree] = React.useState(new TrieTree());

    // Update the TrieTree whenever arrayOfWords changes
    React.useEffect(() => {
        if (arrayOfWords.length > 0) {
            // Reinitialize the TrieTree with the new array of words
            const newTrie = new TrieTree(arrayOfWords);
            setSearchTree(newTrie);
        }
    }, [arrayOfWords]);

    // If a search prefix is provided, return the autocomplete suggestions
    if (searchPrefix.length > 0) {
        return searchTree.complete(searchPrefix); // Autocomplete using the TrieTree
    }

    // Return an empty array if no prefix is provided
    return [];
}
