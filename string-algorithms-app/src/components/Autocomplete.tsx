import React from 'react';
import { TrieTree } from '../algorithms/TrieTree';

export function Autocomplete(searchPrefix: string, arrayOfWords: string[] = []): string[] {
    const [searchTree, setSearchTree] = React.useState(new TrieTree());

    React.useEffect(() => {
        if (arrayOfWords.length > 0) {
            const newTrie = new TrieTree(arrayOfWords);
            setSearchTree(newTrie);
        }
    }, [arrayOfWords]);

    if (searchPrefix.length > 0) {
        return searchTree.complete(searchPrefix);
    }

    return [];
}
