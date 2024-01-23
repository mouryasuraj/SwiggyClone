import { useState } from "react"

const useInternetStatus = () =>{
    const [status, setStatus] = useState(true)
    window.addEventListener('online', ()=>{
        setStatus(true)
    })
    window.addEventListener('offline', ()=>{
        setStatus(false)
    })
    return status;
}

export default useInternetStatus;