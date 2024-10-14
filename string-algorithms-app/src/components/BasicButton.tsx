import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface BasicButtonProps {
  setFileContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function BasicButton({setFileContent} : BasicButtonProps) {

  // función para tomar el archivo .txt y actualizar el estado con el setFileContent de las props de este componente
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };
      reader.readAsText(file);
    } else {
      alert('Por favor sube un archivo .txt válido');
    }
  };

  return (
    <Stack spacing={2} direction='row'>
      <Button
        variant='contained'
        component='label'
        sx={{ backgroundColor: '#98BF64' }}
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
