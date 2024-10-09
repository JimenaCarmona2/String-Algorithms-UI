import BasicButton from './components/BasicButton'
import MultilineTextField from './components/MultilineTextField'

function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h1>Hello world oli</h1>
          <MultilineTextField label={"Archivo 1"}></MultilineTextField>
          <BasicButton></BasicButton>
      </div>
    </>
  )
}

export default App
