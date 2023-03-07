import { useState, useEffect } from "react";
import { useGetRollercoasterQuery, useAddFavoriteMutation } from "./store/api";
import { preventDefault, eventTargetSelector as target } from "./store/utils";
import { useDispatch } from "react-redux";
import AddFavorite from "./AddFavorite";
import ShowFavorites from "./FavoritesOffCanvas";
import Roller from "./RollerVid.mp4";
import Landing from "./LandingPage";

function Card(props) {
  return (
    // <div className="col">
    <>
      {props.list.map((rollercoasters) => {
        return (
          <div
            className="card h-10 mb-3 mx-3 border-light"
            style={{ width: "18rem" }}
            key={rollercoasters.id}
          >
            <img
              src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
              className="card-img-top"
              style={{ height: "15rem" }}
              alt="rollercoaster"
            />
            <div className="card-body">
              <h5 className="card-title">{rollercoasters.name}</h5>
              <h6 className="card-title">{rollercoasters.park.name}</h6>
              <div className="card-text">
                <div key={rollercoasters.speed}>
                  <em>Speed:</em>{" "}
                  {Math.floor(rollercoasters.speed * 0.621371192)}
                </div>
                <div key={rollercoasters.height}>
                  <em>Height:</em> {Math.floor(rollercoasters.height * 3.28084)}
                </div>
                <div key={rollercoasters.inversionsNumber}>
                  {" "}
                  <em>Inversions:</em>
                  {rollercoasters.inversionsNumber}
                </div>
                {/* <div key={rollercoasters.park.name}>
                  Park: {rollercoasters.park.name}
                </div> */}
                <AddFavorite rollercoasterId={rollercoasters.id} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function HomePage() {
  const { data: coasterList, isFetching } = useGetRollercoasterQuery();
  const [filter, setFilter] = useState("");
  // const [addFavorite, { data }] = useAddFavoriteMutation();
  // skip: true,
  // selectFromResult: (result) => result.data,

  if (isFetching) {
    return (
      <>
        <div className="loading-message container">...Loading</div>
        <div className="spinner-container">
          <video autoPlay loop playsInline muted>
            <source src={Roller} type="video/mp4" />
          </video>
        </div>
      </>
    );
  }

  const sortedCoasters = [...coasterList].sort((a, b) => {
    if (filter === "speed") {
      if (a.speed && b.speed) {
        return b.speed - a.speed;
      }
    }
    if (filter === "height") {
      return b.height - a.height;
    }
    if (filter === "inversionsNumber") {
      return b.inversionsNumber - a.inversionsNumber;
    }
    if (filter === "") {
      return coasterList;
    }
    if (filter === "A-Z") {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  });

  const columns = [[]];
  const y = () => {
    let i = 0;
    for (let rc of sortedCoasters) {
      columns[i].push(rc);
      i++;
      if (i > 0) {
        i = 0;
      }
    }
  };
  y();

  return (
    // KEEP THIS RETURN STATEMENT - uses columns loop

    <>
      <div className="subnav">
        <div className="subnav__container">
          <div className="subnav__title">
            <div className="container">
              <button
                type="button"
                className="btn icon"
                onClick={() => setFilter("speed")}
              >
                <span className="material-icons">rocket_launch</span>
                <br></br>Speed
              </button>
              <button
                type="button"
                className="btn icon"
                onClick={() => setFilter("height")}
              >
                <span className="material-icons">height</span>
                <br></br>Height
              </button>
              <button
                type="button"
                className="btn icon"
                onClick={() => setFilter("inversionsNumber")}
              >
                <span className="material-icons">refresh</span>
                <br></br>Loopy Loops
              </button>
              <button
                type="button"
                className="btn icon"
                onClick={() => setFilter("A-Z")}
              >
                <span className="material-icons">sort_by_alpha</span>
                <br></br>Alphabetical
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {columns.map((sortedCoasters) => {
            return <Card list={sortedCoasters} key={sortedCoasters} />;
          })}
        </div>
      </section>
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
//                   <div className="card-text">
//                     <div key={rollercoasters.name}>
//                       Name: {rollercoasters.name}
//                     </div>
//                     <div key={rollercoasters.speed}>
//                       Speed: {rollercoasters.speed}
//                     </div>
//                     <div key={rollercoasters.height}>
//                       Height: {rollercoasters.height}
//                     </div>
//                     <div key={rollercoasters.inversionsNumber}>
//                       {" "}
//                       Inversions:
//                       {rollercoasters.inversionsNumber}
//                     </div>
//                     <div key={rollercoasters.park.name}>
//                       {rollercoasters.park.name}
//                     </div>
//                   </div>
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
//               <div className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//                 <div key={rollercoasters.name}>Name: {rollercoasters.name}</div>
//                 <div key={rollercoasters.speed}>
//                   Speed: {rollercoasters.speed}
//                 </div>
//                 <div key={rollercoasters.height}>
//                   Height: {rollercoasters.height}
//                 </div>
//                 <div key={rollercoasters.inversionsNumber}>
//                   {" "}
//                   Inversions:
//                   {rollercoasters.inversionsNumber}
//                 </div>
//                 <div key={rollercoasters.park.name}>
//                   {rollercoasters.park.name}
//                 </div>
//               </div>
//               {/* <div key={rollercoasters.id}>
//               <img
//                 src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
//               ></img>
//             </div> */}
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
      <div>Some text lorem ipsum.</div>
      <div>Some text lorem ipsum.</div>
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
