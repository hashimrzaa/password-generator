import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {

  const [length, setlength] = useState(6)
  const [pass, setpass] = useState('')
  const [number, setnumber] = useState(false)
  const [symbol, setsymbol] = useState(false)
  const [Upper, setUpper] = useState(false)
  const [Lower, setLower] = useState(true)

  useEffect(() => {
    showPass()
  }, [length, number, Upper, symbol])

  function showPass() {
    let passw = ''
    let str = ''
    for (let i = 0; i < length; i++) {
      if (Lower) {
        str += 'abcdefghijklmnopqrstuvwxyz'
      }
      if (number) {
        str += '1234567890'
      }
      if (Upper) {
        str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      }
      if (symbol) {
        str += '!@#$%^&'
      }
      const random = Math.floor(Math.random() * str.length)
      const char = str.charAt(random)

      passw += char
      setpass(passw)
    }
  }

  return (
    <>

      <div className='main'>
        <h1 className='h1'>Password Generator</h1>
        <div className='one'><h1 className='h2'>{pass}
          <svg className='svg' onClick={(e) => {
            navigator.clipboard.writeText(pass)
            Swal.fire({
              title: "copied",
              text: "",
              icon: "success"
            });
          }} xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="24" fill='#ffffff'><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" /></svg>

          <svg className='svg2' onClick={showPass} fill='#ffffff' height={'18px'} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.04 122.88"><path d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z" /></svg>
        
          </h1></div>

        <div className='two'>
          <span>{length}</span>
          <input className='range' value={length} type="range" name="" id="a" min={6} max={25} onChange={(e) => {
            setlength(e.target.value);
          }} />
        </div>

        <div className='three'>
          <label htmlFor="Upper">UpperCase</label>
          <input type="checkbox" id="Upper" onChange={(e) => {
            setUpper(e.target.checked)
          }} />

          <label htmlFor="Lower" >LowerCase</label>
          <input type="checkbox" id="Lower" checked onChange={() => { }} />
        </div>

        <div className='four'>
          <label htmlFor="Number">Numbers</label>
          <input type="checkbox" id="Number" onChange={(e) => {
            setnumber(e.target.checked)
          }} />

          <label htmlFor="Symbols">Symbols</label>
          <input type="checkbox" id="Symbols" onChange={(e) => {
            setsymbol(e.target.checked)
          }} />
        </div>
      </div >
    </>
  )
}



export default App