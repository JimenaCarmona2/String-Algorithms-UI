import React from 'react';
import FileUploadButton from './components/FileUploadButton'
import MultilineTextField from './components/MultilineTextField'
import './index.css'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'
import ActionButton from './components/ActionButton';
import TextField from '@mui/material/TextField';

function App() {
  // contenido de los dos archivos de texto
  const [fileContent1, setFileContent1] = React.useState<string>('Esperando archivo...');
  const [fileContent2, setFileContent2] = React.useState<string>('Esperando archivo...');

  // estados que guardan el string de html que se va a generar en las funciones de manacher y LCS
  const [htmlManacher, setHtmlManacher] = React.useState<string>('');
  const [htmlLCS, setHtmlLCS] = React.useState<string>('');

  return (
    <div className='column'>
        <h1>String Algorithms UI</h1>
        
        <div className='row'>
          <Card sx={{margin: '16px'}}>
            <div className='column'>
              <MultilineTextField label={'Texto 1'} text={fileContent1}></MultilineTextField>
              <FileUploadButton setFileContent={setFileContent1}></FileUploadButton>   
            </div>
          </Card>
          
          <Card sx={{margin: '16px'}}>            
            <div className='column'>
              <MultilineTextField label={'Texto 2'} text={fileContent2}></MultilineTextField>
              <FileUploadButton setFileContent={setFileContent2}></FileUploadButton>   
            </div>
          </Card>
        </div>

        <Stack  direction='row' sx = {{margin: '16px'}}>
          <ActionButton algorithmText='Similitud' onClick={ () => console.log('1')}></ActionButton>
          <ActionButton algorithmText='Palíndromo' onClick={ () => console.log('1')}></ActionButton>
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
