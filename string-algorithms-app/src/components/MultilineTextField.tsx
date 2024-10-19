import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DOMPurify from 'dompurify';

interface MultilineTextFieldProps {
  label: string;
  text: string;
}

export default function MultilineTextField({ label, text }: MultilineTextFieldProps) {
  const sanitizedText = DOMPurify.sanitize(text);

  return (
    <Box
      component='form'
      sx={{ 
        '& .MuiTextField-root': { width: '50ch' }, 
        color: 'black', 
        padding: 0 
      }}
      noValidate>
      <Box  
        sx={{
          width: 400,
          height: 300,
          overflowY: 'auto',
          padding: 2,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
        }}>

        <Typography 
          variant="subtitle2" 
          color="textSecondary" 
          gutterBottom
          sx={{ fontSize: 12 }}
        >
          {label}
        </Typography>
        
        <div
          dangerouslySetInnerHTML={{ __html: sanitizedText }}
        />
      </Box>
    </Box>
  );
}
