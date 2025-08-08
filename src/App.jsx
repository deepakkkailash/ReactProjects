import ButtonDiv from './Components/ButtonDiv'
import {useState} from 'react'
import QuoteDiv from './Components/QuoteDiv'
function App() {
    const [Screen,setScreen] = useState('Landing')
    const ScreenChanger = (NewScreen)=>{
        setScreen(NewScreen)
    }

    if(Screen=='Landing'){
             return (
    <div className='bg-red-500  w-[100vw] h-[100vh] flex flex-col items-center justify-center font-bold text-white'>
            <ButtonDiv Text='Click for some Motivation' ScreenChanger={ScreenChanger} />

     </div>
  )
        }

    else if(Screen=='QuoteScreen'){
        return (<div className='bg-green-500  w-[100vw] h-[100vh] flex flex-col items-center justify-center font-bold text-white'>
                <QuoteDiv />
            </div>)
      }

}

export default App
