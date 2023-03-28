import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AppContext } from "../App"

export default function Home(props) {
    const { data: cat, isLoading, refetch } = useQuery(['cat'], () => {
        return fetch('https://catfact.ninja/fact').then(res => res.json()).then(cat => cat)
    });

    const { username } = useContext(AppContext)

    if (isLoading) {
        return <h1>Is Loading...</h1>
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>{username}</h2>
            <h4>Random Cat Fact</h4>
            <h4>{cat?.fact}</h4>
            <button onClick={refetch}>generate</button>
        </div>
    )
}