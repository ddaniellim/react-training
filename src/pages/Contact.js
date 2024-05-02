import { useContext } from 'react';
import { AppContext } from "../App";

export const Contact = () => {
    const { setUsername } = useContext(AppContext);
    const changeUserName = (event) => {
        setUsername(event.target.value);
    }
    return (
        <>
            <h1>set your username : </h1>
            <input onChange={changeUserName}></input>
        </>
    );  
}
