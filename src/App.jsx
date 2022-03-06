import TextInputWithFocusButton from './components/TextInputWithFocusButton'
import Timer from './components/Timer'
import MeasureExample from './components/MeasureExample'
import FancyInputParent from './components/FancyInputParent'
import FancyButtonParent from './components/FancyButtonParent'
import CustomTextInput from './components/CustomTextInput'

const App = () => {
  return (
    <div>
      <h1>Functional React Refs</h1>

      <h2>TextInputWithFocusButton</h2>
      <TextInputWithFocusButton />

      <h2>Timer</h2>
      <Timer />

      <h2>MeasureExample</h2>
      <MeasureExample />

      <h2>FancyInputParent</h2>
      <FancyInputParent />

      <h2>FancyButtonParent</h2>
      <FancyButtonParent />

      <h2>CustomTextInput</h2>
      <CustomTextInput />
    </div>
  )
}

export default App
