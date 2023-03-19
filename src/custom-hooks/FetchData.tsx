import { useState, useEffect } from "react"
import { server_calls } from "../api/server"


function useGetData() {
    const [ carData, setCarData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get()
        setCarData(result)
    }

    // useEffect on mount
    useEffect(() => {
        handleDataFetch()
    }, [])

    return { carData, getData: handleDataFetch }
}

export default useGetData