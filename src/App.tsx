import { useState } from 'react'

import './App.css'

function getYoutubeId(url_str: string) {
  let url: URL
  try {
    url = new URL(url_str)
  } catch {
    return null
  }
  if (url.hostname === 'youtu.be') {
    return url.pathname.slice(1) || null
  } else if (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') {
    return url.searchParams.get('v')
  }
  return null
}

function App() {
  const [videoUrl, setVideoUrl] = useState('')
  const [loadedVideoId, setLoadedVideoId] = useState<string | null>(null)

  return (
    <>
      <h1>Watchy Party</h1>
      <p>Youtubeの動画リンクを入力してください</p>
      <label htmlFor="video-url">Youtube URL</label>
      <input id="video-url" type="url" value={videoUrl} onChange={(event) => setVideoUrl(event.target.value)} />
      <p>{videoUrl}</p>
      <button onClick={() => setLoadedVideoId(getYoutubeId(videoUrl))}>動画を読み込む</button>
      {loadedVideoId && (<iframe src={`https://www.youtube.com/embed/${loadedVideoId}`} title='Youtube video player' allowFullScreen />)}
    </>
  )
}

export default App
