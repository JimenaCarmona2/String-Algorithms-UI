import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface FileUploadButtonProps {
  setFileContent: React.Dispatch<React.SetStateAction<string>>;
  setTextContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function FileUploadButton({setFileContent, setTextContent} : FileUploadButtonProps) {

  // función para tomar el archivo .txt y actualizar el estado con el setFileContent de las props de este componente
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content = e.target?.result as string;
        setFileContent(content);
        setTextContent(content);
      };
      reader.readAsText(file);
    } else {
      alert('Por favor sube un archivo .txt válido');
    }
  };

  return (
    <Stack spacing={2} direction='row' sx = {{margin: '16px'}}>
      <Button
        variant='contained'
        component='label'
        style={{textTransform: 'none', width: '130px'}}
      >
        Subir Archivo
        <input
          type='file'
          accept='.txt'
          hidden
          onChange={handleFileUpload}
        />
      </Button>
    </Stack>
  );
}
