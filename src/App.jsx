import './App.css'
import NewPage from './pages/NewPage'


function App() {

  function HandleClickFromFirstButton(){
    console.log("THIS IS THE CLICK FROM BUTTON 1");
  }
  function HandleClickFromSecondButton(){
    console.log("THIS IS THE CLICK FROM BUTTON 2");
  }



  return (
    <div>
      <div className='min-h-screen flex justify-center items-center'>
        <button className='bg-amber-300 border p-2 rounded-lg hover:cursor-pointer' onClick={() => HandleClickFromFirstButton()}>Click me</button>
        <button className='bg-amber-300 border p-2 rounded-lg hover:cursor-pointer' onClick={() => HandleClickFromFirstButton()}>Click me</button>
 
      </div>
      
    </div>
  )
}

export default App
