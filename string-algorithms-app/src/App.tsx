import React from 'react';
import FileUploadButton from './components/FileUploadButton'
import MultilineTextField from './components/MultilineTextField'
import './index.css'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'
import ActionButton from './components/ActionButton';
import highlightedPalindromeHTML from './algorithms/Manacher';
import highlightedLCSHTML from './algorithms/LCS';
import highlightedZHTML from './algorithms/Z';
import SearchBar from './components/SearchBar';
import { TextField } from '@mui/material';

function App() {
  // contenido de los dos archivos de texto
  const [fileContent1, setFileContent1] = React.useState<string>('');
  const [fileContent2, setFileContent2] = React.useState<string>('');

  // En este estado se guarda el texto que se debe de ver en la caja de texto, para las operaciones de similitud, manacher, y
  // búsqueda se modifica este estado con las etiquetas de <mark> para subrayar el texto dependiendo de la operación
  const [text1Content, setText1Content] = React.useState<string>('Esperando archivo...');
  const [text2Content, setText2Content] = React.useState<string>('Esperando archivo...');

  // Estado para guardar el valor del TextField para Buscar
  const [inputValue, setInputValue] = React.useState('');
  // Estado que guarda las coincidencias para Buscar
  const [matches, setMatches] = React.useState<number[]>([]);
  // Estado que guarda el índice de coincidencia para Buscar
  const [currentMatchIndex, setCurrentMatchIndex] = React.useState<number>(0);

  // arreglo de los tokens de palabras para insertarlos al trie
  const [arrayOfWords, setArrayOfWords] = React.useState<string[]>([]);

  // Convierte fileContent1 en un arreglo de palabras y se actualiza cuando se introduce un nuevo archivo
  React.useEffect(() => {
    setArrayOfWords(fileContent1.split(/\s+/).map((word) => word.trim()).filter((word) => word.length > 0));
  }, [fileContent1]);
  
  // Función para manejar el cambio en el TextField 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Actualiza el estado con el nuevo valor
  };

  // Ir a la coincidencia anterior del input con T1
  const goToPreviousMatch = () => {
    setCurrentMatchIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : matches.length - 1
    );
    if (matches.length > 0) {
      highlightedZHTML(inputValue, fileContent1, setText1Content, setMatches, currentMatchIndex - 1); // Resalta la coincidencia anterior
    }
  };

  // Ir a la coincidencia siguiente del input con T1
  const goToNextMatch = () => {
    setCurrentMatchIndex((prevIndex) => {
      const newIndex = prevIndex < matches.length - 1 ? prevIndex + 1 : 0;
      highlightedZHTML(inputValue, fileContent1, setText1Content, setMatches, newIndex); // Resalta la nueva coincidencia
      return newIndex; // Actualiza el índice
    });
  };

  // estado para saber cuál botón está seleccionado
  const [activeButton, setActiveButton] = React.useState<string>('');

  return (
    <div className='column'>
        <h1>String Algorithms</h1>
        
        <div className='row'>
          <Card sx={{margin: '16px'}}>
            <div className='column'>
              <MultilineTextField label={'Texto 1'} text={text1Content}></MultilineTextField>
              <FileUploadButton setFileContent={setFileContent1} setTextContent={setText1Content}></FileUploadButton>   
            </div>
          </Card>
          
          <Card sx={{margin: '16px'}}>            
            <div className='column'>
              <MultilineTextField label={'Texto 2'} text={text2Content}></MultilineTextField>
              <FileUploadButton setFileContent={setFileContent2} setTextContent={setText2Content}></FileUploadButton>   
            </div>
          </Card>
        </div>

        <Stack  direction='row' sx = {{margin: '16px'}}>
          <ActionButton algorithmText='Similitud' activeButton={activeButton} onClick={() => {highlightedLCSHTML(fileContent1, fileContent2, setText1Content, setText2Content); setActiveButton('Similitud');}} fileContent1={fileContent1} fileContent2={fileContent2} ></ActionButton>
          <ActionButton algorithmText='Palíndromo' activeButton={activeButton} onClick={() => {highlightedPalindromeHTML(fileContent1, setText1Content, fileContent2, setText2Content); setActiveButton('Palíndromo');}} fileContent1={fileContent1} fileContent2={fileContent2}></ActionButton>
        </Stack>

        <div className='row'>
          <div className='column'>
            <h3>Autocompletar</h3>
            <Card sx={{marginRight: '16px'}}>
                <SearchBar arrayOfWords={arrayOfWords}></SearchBar>
            </Card>
          </div>
          <div className='column'>
            <h3>Buscar</h3>
            <div className='row'></div>
            <Card>
              <TextField label="Escribe una palabra" variant="outlined" value={inputValue} onChange={handleInputChange} />
            </Card>
            <ActionButton algorithmText='Buscar' activeButton={activeButton} onClick={() => {highlightedZHTML(inputValue, fileContent1, setText1Content, setMatches, 0); setActiveButton('Buscar'); setCurrentMatchIndex(0);}} fileContent1={fileContent1} fileContent2={fileContent2}></ActionButton>
            <div>
              <button onClick={goToPreviousMatch} disabled={matches.length === 0}>Anterior</button>
              <button onClick={goToNextMatch} disabled={matches.length === 0}>Siguiente</button>
            </div>
          </div>
        </div>

    </div>

  )
}

export default App
