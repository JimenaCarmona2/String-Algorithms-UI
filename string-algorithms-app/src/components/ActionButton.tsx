import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface ActionButtonProps {
    algorithmText: string;
    onClick: () => void;
}

export default function ActionButton({algorithmText, onClick} : ActionButtonProps) {

  return (
    <Stack spacing={2} direction='row' sx = {{margin: '16px'}}>
      <Button
        variant='contained'
        component='label'
        style={{textTransform: 'none', width: '110px'}}
        onClick={onClick}
      >
        {algorithmText}
      </Button>
    </Stack>
  );
}
