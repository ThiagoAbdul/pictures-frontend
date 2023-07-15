import './App.css'
import Nav from './components/Nav'
import PicturesPanel from './components/PicturesPanel'

export default function App() {

  return (
    <>
    <Nav></Nav>
      <main id='main'>
        <PicturesPanel></PicturesPanel>
      </main>
    </>
  )
}
