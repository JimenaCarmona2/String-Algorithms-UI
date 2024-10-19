import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface ActionButtonProps {
    algorithmText: string;
    activeButton: string;
    fileContent1: string;
    fileContent2: string;
    onClick: () => void;
}

export default function ActionButton({algorithmText, activeButton, fileContent1, fileContent2, onClick} : ActionButtonProps) {

  return (
    <Stack spacing={2} direction='row' sx = {{margin: '16px'}}>
      <Button
        variant='contained'
        component='label'
        style={activeButton === algorithmText ? { backgroundColor: 'blue', color: 'white', textTransform: 'none', width: '110px', outline: '2px solid #090994' } : { textTransform: 'none', width: '110px' }}
        onClick={onClick}
        disabled={fileContent1 === '' || fileContent2 === '' && algorithmText === 'Similitud'}
      >
        {algorithmText}
      </Button>
    </Stack>
  );
}
