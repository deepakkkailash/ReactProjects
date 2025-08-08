
const ButtonDiv = ({Text,ScreenChanger})=>{
    return (<button className='bg-white text-black w-fit h-fit rounded-lg p-[20px] hover:shadow-2xl' onClick={()=>{ScreenChanger('QuoteScreen')}}>
                {Text}
        </button>)
}

export default ButtonDiv