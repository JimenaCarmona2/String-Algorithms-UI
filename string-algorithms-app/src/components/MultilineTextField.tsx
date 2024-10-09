import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// Componente original: https://mui.com/material-ui/react-text-field/#system-MultilineTextFields.tsx
interface MultilineTextFieldProps {
  label: string;
}

export default function MultilineTextField({ label }: MultilineTextFieldProps) {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' }, 'color': 'black'}}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-multiline-static"
          label= {label}
          multiline
          rows={10}
          value="Esperando archivo..."
          variant="filled"
          slotProps={{
            input: {
              readOnly: true
            },
          }}
        />
      </div>
    </Box>
  );
}
