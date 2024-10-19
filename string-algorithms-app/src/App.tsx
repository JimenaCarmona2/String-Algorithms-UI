import React from 'react';
import FileUploadButton from './components/FileUploadButton'
import MultilineTextField from './components/MultilineTextField'
import './index.css'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'
import ActionButton from './components/ActionButton';
import TextField from '@mui/material/TextField';
import highlightedPalindromeHTML from './algorithms/Manacher';
import highlightedLCSHTML from './algorithms/LCS';

function App() {
  // contenido de los dos archivos de texto
  const [fileContent1, setFileContent1] = React.useState<string>('');
  const [fileContent2, setFileContent2] = React.useState<string>('');

  // En este estado se guarda el texto que se debe de ver en la caja de texto, para las operaciones de similitud, manacher, y
  // búsqueda se modifica este estado con las etiquetas de <mark> para subrayar el texto dependiendo de la operación
  const [text1Content, setText1Content] = React.useState<string>('Esperando archivo...');
  const [text2Content, setText2Content] = React.useState<string>('Esperando archivo...');

  // state to know which option is activated of the 'Similitud' and 'Palíndromo' buttons
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

        <h3>Autocompletar</h3>
        <Card sx={{margin: '16px'}}>
          <div className='column'>
            <TextField id="outlined-basic" label="Escribe una palabra" variant="outlined" />

          </div>
        </Card>
    </div>
  )
}

export default App
