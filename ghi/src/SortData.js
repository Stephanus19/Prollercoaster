import { useGetRollercoasterQuery } from "./store/api";
import { useState } from "react";

function SortData() {
    const [filter, setFilter] = useState("");
    const { data: coasterList, isFetching } = useGetRollercoasterQuery();

    if (isFetching) {
    return <div>Loading...</div>;
    }

    const sortedCoasters = coasterList.sort((a,b) => {
        if (filter === "speed") {
            return (
            speed.b - speed.a)}
}
    )
    return (
        <button type="button" class="btn btn-primary" onClick={() => setFilter("speed")}>Speed</button>
    )
}
