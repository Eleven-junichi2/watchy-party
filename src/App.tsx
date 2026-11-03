import { useState } from 'react'

import './App.css'

function App() {
  const [videoUrl, setVideoUrl] = useState('')
  const [loadedUrl, setLoadedUrl] = useState('')

  return (
    <>
      <h1>Watchy Party</h1>
      <p>Youtubeの動画リンクを入力してください</p>
      <label htmlFor="video-url">Youtube URL</label>
      <input id="video-url" type="url" value={videoUrl} onChange={(event) => setVideoUrl(event.target.value)} />
      <p>{videoUrl}</p>
      <button onClick={() => setLoadedUrl(videoUrl)}>動画を読み込む</button>
      <p>{loadedUrl}</p>
    </>
  )
}

export default App
