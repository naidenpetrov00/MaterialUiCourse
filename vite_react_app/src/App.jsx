import { Button } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <Button sx={{ typography: "h1"}} variant='contained' onClick={() => console.log('op')}> My Button</Button>
    </div >
  );
}

export default App
