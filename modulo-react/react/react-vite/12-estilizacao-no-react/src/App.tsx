import './App.css'
import { MyButton } from './components'
import { ButtonStyled } from './components/ButtonStyled'
import { ButtonModule } from './components/ButtonWithModule'

function App() {
  return (
    <>
      <MyButton/> 
      <ButtonModule/>
      <ButtonStyled/>
    </>
  )
}

export default App
