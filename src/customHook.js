import { useCounter } from "./CustomHooks/useCounter";

const CustomHook = () => {
    const [ count , actionCount ] = useCounter();
    return (
        <>
            <span> Count : {count} </span>
            <button onClick={actionCount}>Increase</button>
            <button onClick={actionCount}>Decrease</button>
            <button onClick={actionCount}>Reset</button>
        </>
    );
}

export default CustomHook;