import React from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '../components/Autocomplete';

interface SearchBarProps {
  arrayOfWords: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ arrayOfWords }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const matchingWords = Autocomplete(searchTerm, arrayOfWords);

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Escribe una palabra"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
      />
    
      {searchTerm && matchingWords.length > 0 && (
        <ul>
          {matchingWords.map((matchingWord, index) => (
            <li key={index}>{matchingWord}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
