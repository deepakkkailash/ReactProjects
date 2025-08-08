import {useEffect,useState} from 'react'

const QuoteDiv = ()=>{
    const [Quote,setQuote] = useState('....');

    const fetchingquotes = async () =>{
        const res = await fetch('http://127.0.0.1:5000/quote',{
            method:'GET',
            headers:{
                  'Accept': 'text/html'
            }

            })

        const data = await res.text()

        setQuote(data);

     }
    useEffect(()=>{
        fetchingquotes()

    },[])
    return(
        <>
            <div className='bg-white p-[20px] rounded-lg text-black text-bold text-md'>
                    {Quote}
              </div>
        </>

        )

}

export default QuoteDiv;