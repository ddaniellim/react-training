import { AppContext } from "../App"
import { useContext } from "react"

export const Home = () => {
    const { userName } = useContext(AppContext);
    return <h1>Your username : {userName}</h1>
}
