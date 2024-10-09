import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Componente original: https://mui.com/material-ui/react-button/#system-BasicButtons.tsx
export default function BasicButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained"
      sx={{backgroundColor : "#98BF64"}}
      >
        Subir Archivo
      </Button>
    </Stack>
  );
}