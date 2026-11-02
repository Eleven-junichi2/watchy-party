import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Watchy Party</h1>
      <p>Youtubeの動画リンクを入力してください</p>
      <label>Youtube URL</label>
      <input></input>
      <button>動画を読み込む</button>
    </>
  )
}

export default App
