// create your App component here
import React, {useState, useEffect} from "react"
import { data } from "../mocks/data"

function App(){
    const [isLoaded, setIsLoaded]=useState(false)
    const [dogdata,setDogData]=useState("")
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((r) => r.json())
        .then ((data) => 
        setDogData(data),
        setIsLoaded(true))
    },[])
    console.log(dogdata)

    if (dogdata ===""){
        return (<p>Loading...</p>)
    }

    else {
        return <img src={dogdata.message} alt="A Random Dog"></img>
    }
    // return (!isLoaded ? <div><p>Loading...</p></div> : <div><img src={data.message} alt="A Random Dog"></img></div>)
}

export default App