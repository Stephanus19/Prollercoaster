import { useSelector, useDispatch } from "react-redux";
import { eventTargetSelector as target, preventDefault } from "./store/utils";
import { useCallback, useState, useEffect } from "react";
import {
  useGetRollercoasterDetailQuery,
  useLazyGetRollercoasterDetailQuery,
} from "./store/api";
import { useParams } from "react-router-dom";
import "./RollercoasterDetail.css";

function RollercoasterDetail() {
  let { id } = useParams();
  const { data, isLoading } = useGetRollercoasterDetailQuery(id);
  //   const handleGetRollercoasterDetail = async (id) => {
  //     const detailData = {id:id}
  //     await getRollercoasterDetail(id);}

  // selects properties from account slice
  // const [selectedID, setSelectedID] = useState(null)

  // useEffect(() => {
  //     if(selectedID !== null){
  //     lazyDetail(id)}
  // },[selectedID])

  if (isLoading) {
    return <div></div>;
  }
  console.log(data);

  return (
    <div className="detailtarget">
      <div className="detailcontent">
        <p>hello</p>
        <p>{data.name}</p>
      </div>
    </div>
  );
}

export default RollercoasterDetail;
