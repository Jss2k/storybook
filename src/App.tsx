import Preloader from "./assets/preloader"
import './index.css'

const App = () => {

  return (
    <div className="App" >
      <button style={{
        height: '40px',
        background: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

          <Preloader />

        <span style={{
        margin: '0 10px',
        lineHeight: '40px',
        // verticalAlign: 'middle',
        // display: 'inline-block'
      }}>
          какой-то текст
        </span>
      </button>
    </div>
  )
}

export default App
