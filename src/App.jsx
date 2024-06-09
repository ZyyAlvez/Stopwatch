import './App.css'
import Button from './component/Button.jsx'

function App() {
  return (
    <div>
      <h1>{"00:00:00"}</h1>
      <div className="button-holder">
        <Button title="Start"/>
        <Button title="Stop"/>
        <Button title="Restart"/>
      </div>
    </div>
  )
}

export default App
