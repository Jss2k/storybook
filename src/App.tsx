import Loader from "./assets/loader"
import './index.css'

const App = () => {

  return (
    <div className="App" >
      <div style={{
        height: '40px',
        background: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <span style={{
          display: 'block',
        marginTop: '-5px',
        }}>
          <Loader />
          </span>
        <span style={{
        margin: '0 10px',
        lineHeight: '32px',
        // verticalAlign: 'middle',
        // display: 'inline-block'
      }}>
          какой-то текст
        </span>
      </div>
    </div>
  )
}

export default App
