import { createSignal} from "solid-js";

export default () => {
    const [count, setCount] = createSignal(0);

    return(
        <div>
            <div>count = {count()}</div>
            <button onClick={() => setCount(count() + 1)}>Add</button>
        </div>
    )
}