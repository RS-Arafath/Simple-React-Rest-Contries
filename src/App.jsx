import Countries from './components/Countries/Countries'
//import './App.css'
import { Suspense } from 'react'

const contriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

function App() {


  return (
    <>
      <Suspense fallback={<p>Loading data...</p>}>
        <Countries contriesPromise={contriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App
