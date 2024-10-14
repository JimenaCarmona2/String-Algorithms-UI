import React from 'react';
import BasicButton from './components/BasicButton'
import MultilineTextField from './components/MultilineTextField'
import './index.css'

function App() {
  const [fileContent1, setFileContent1] = React.useState<string>('');
  const [fileContent2, setFileContent2] = React.useState<string>('');


  return (
    <div className='column'>
        <h1>String Algorithms UI</h1>
        
        <div className='row'>
          <div className='column'>
            <MultilineTextField label={'Texto 1'} text={fileContent1}></MultilineTextField>
            <BasicButton setFileContent={setFileContent1}></BasicButton>   
          </div>
          
          <div className='column'>
            <MultilineTextField label={'Texto 2'} text={fileContent2}></MultilineTextField>
            <BasicButton setFileContent={setFileContent2}></BasicButton>   
          </div>
        </div>
    </div>
  )
}

export default App
