import { useState, useEffect } from "react"
function App() {
    const [fact, setFact] = useState('')
    useEffect(() => {
        fetch('https://catfact.ninja/fact')
         .then(res => res.json())
         .then(data => setFact(data.fact))
         .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h1>App de gatitos</h1>
            <p>{fact}</p>
        </>
    )
}
export { App }