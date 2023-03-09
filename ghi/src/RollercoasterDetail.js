import { useSelector, useDispatch } from "react-redux";
import { eventTargetSelector as target, preventDefault } from "./store/utils";
import { useCallback, useState, useEffect } from "react";
import { useGetRollercoasterDetailQuery, useLazyGetRollercoasterDetailQuery } from "./store/api";
import {useParams} from "react-router-dom"

function RollercoasterDetail() {
    let {id} = useParams();
    const {data, isLoading} = useGetRollercoasterDetailQuery(id);
//   const handleGetRollercoasterDetail = async (id) => { 
//     const detailData = {id:id}
//     await getRollercoasterDetail(id);}

  // selects properties from account slice
    // const [selectedID, setSelectedID] = useState(null)
    
    // useEffect(() => {
    //     if(selectedID !== null){
    //     lazyDetail(id)}
    // },[selectedID])

if (isLoading){
    return(
        <div></div>
    )
}
console.log(data)
    
return (
    <>
    <p>hello</p>
    <p>{data.name}</p>

  
    </>
)
}



export default RollercoasterDetail;

