import Contries from './contries'
import './App.css'
import { Suspense } from 'react'

const contriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

function App() {


  return (
    <>
      <Suspense fallback={<p>loding data...</p>}>
        <Contries contriesPromise={contriesPromise}></Contries>
      </Suspense>
    </>
  );
}

export default App
