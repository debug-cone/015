// react
import { useState } from 'react'

// 17:34

// css
import './App.css'

// components
import FormComponent from './components/FormComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] bg-neutral-800'>
      <h1 className='text-3xl text-blue-400'>Register Form</h1>

      <FormComponent />
    </div>
  )
}

export default App
