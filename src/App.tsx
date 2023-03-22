import qrCode from './images/image-qr-code.png'
import './App.css'

function App() {
  return (
    <div className="bg-color">
      <div className='main-container'>
        <img src={qrCode} className="qr-code" alt="QR" />
        <div className='content'>
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
