import { useState, useEffect } from "react";
import { useGetRollercoasterQuery, useAddFavoriteMutation } from "./store/api";
import { preventDefault, eventTargetSelector as target } from "./store/utils";
import { useDispatch } from "react-redux";
import AddFavorite from "./AddFavorite";
import ShowFavorites from "./FavoritesOffCanvas";

function Column(props) {
  return (
    // <div className="col">
    <>
      {props.list.map((rollercoasters) => {
        return (
          <div className="card h-10 m-3" style={{ width: "18rem" }}>
            <img
              src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
              className="card-img-top"
              style={{ height: "15rem" }}
              alt="rollercoaster"
            />
            <div className="card-body">
              <h5 className="card-title">{rollercoasters.name}</h5>
              <p className="card-text">
                <li key={rollercoasters.speed}>
                  Speed: {rollercoasters.speed}
                </li>
                <li key={rollercoasters.height}>
                  Height: {rollercoasters.height}
                </li>
                <li key={rollercoasters.inversionsNumber}>
                  {" "}
                  Inversions:
                  {rollercoasters.inversionsNumber}
                </li>
                <li key={rollercoasters.park.name}>
                  {rollercoasters.park.name}
                </li>
                <AddFavorite rollercoasterId={rollercoasters.id} />
              </p>
              {/* <form
                method="post"
                action="/"
                onSubmit={() => dispatch(addFavorite(rollercoasters.id))}
                // value={rollercoasters.id}
              > */}
              {/* <button onClick={() => handleAddFavorite(rollercoasters.id)}>
                Add to Favorites
              </button> */}
              {/* </form> */}
            </div>
          </div>
        );
      })}
      {/* // </div> */}
    </>
  );
}

function HomePage() {
  const { data: coasterList, isFetching } = useGetRollercoasterQuery();
  // const [addFavorite, { data }] = useAddFavoriteMutation();
  // skip: true,
  // selectFromResult: (result) => result.data,

  if (isFetching) {
    return <div>Loading...</div>;
  }

  const columns = [[], [], []];
  const y = () => {
    let i = 0;
    for (let rc of coasterList) {
      console.log(rc);
      columns[i].push(rc);
      i++;
      if (i > 2) {
        i = 0;
      }
    }
  };
  y();

  return (
    // KEEP THIS RETURN STATEMENT - uses columns loop

    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {columns.map((coasterList) => {
            return <Column list={coasterList} />;
          })}
        </div>
      </div>
    </>
  );
}

// return (
//   <>
//     <div className="container">
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         <div className="col">
//           {coasterList.map((rollercoasters) => {
//             return (
//               <div className="card h-10" style={{ width: "18rem" }}>
//                 <img
//                   src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
//                   className="card-img-top img-thumbnail "
//                   alt="rollercoaster"
//                 />
//                 <div className="card-body">
//                   <p className="card-text">
//                     <li key={rollercoasters.name}>
//                       Name: {rollercoasters.name}
//                     </li>
//                     <li key={rollercoasters.speed}>
//                       Speed: {rollercoasters.speed}
//                     </li>
//                     <li key={rollercoasters.height}>
//                       Height: {rollercoasters.height}
//                     </li>
//                     <li key={rollercoasters.inversionsNumber}>
//                       {" "}
//                       Inversions:
//                       {rollercoasters.inversionsNumber}
//                     </li>
//                     <li key={rollercoasters.park.name}>
//                       {rollercoasters.park.name}
//                     </li>
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   </>
// );

// return (
//   <div className="container">
//     <div className="row row-cols-1 row-cols-md-3 g-4">
//       <div className="col">
//         <Column list={coasterList} />
//       </div>
//     </div>
//   </div>
// );

//   return (
//     <>
//       {coasterList.map((rollercoasters) => {
//         console.log({ rollercoasters });
//         return (
//           <div className="card" style={{ width: "18rem" }}>
//             <img
//               src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
//               className="card-img-top"
//               alt="rollercoaster"
//             />
//             <div className="card-body">
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//                 <li key={rollercoasters.name}>Name: {rollercoasters.name}</li>
//                 <li key={rollercoasters.speed}>
//                   Speed: {rollercoasters.speed}
//                 </li>
//                 <li key={rollercoasters.height}>
//                   Height: {rollercoasters.height}
//                 </li>
//                 <li key={rollercoasters.inversionsNumber}>
//                   {" "}
//                   Inversions:
//                   {rollercoasters.inversionsNumber}
//                 </li>
//                 <li key={rollercoasters.park.name}>
//                   {rollercoasters.park.name}
//                 </li>
//               </p>
//               {/* <li key={rollercoasters.id}>
//               <img
//                 src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
//               ></img>
//             </li> */}
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }
<>
  {/* <div class="offcanvas offcanvas-start" id="demo">
    <div class="offcanvas-header">
      <h1 class="offcanvas-title">Heading</h1>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>
    <div class="offcanvas-body">
      <p>Some text lorem ipsum.</p>
      <p>Some text lorem ipsum.</p>
      <button class="btn btn-secondary" type="button">
        A Button
      </button>
    </div>
  </div> */}

  {/* <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#demo"
  >
    Open Offcanvas Sidebar
  </button> */}
</>;
export default HomePage;
