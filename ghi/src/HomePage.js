import { useState, useEffect } from "react";
import { useGetRollercoasterQuery, useAddFavoriteMutation } from "./store/api";
import { preventDefault, eventTargetSelector as target } from "./store/utils";
import { useDispatch } from "react-redux";
import AddFavorite from "./AddFavorite";
import ShowFavorites from "./FavoritesOffCanvas";
import Roller from "./RollerVid.mp4";
import Landing from "./LandingPage";
import RollercoasterDetail from "./RollercoasterDetail";
import { Link, Redirect } from "react-router-dom";
import Shambhala from "./EEPOV";

function Card(props) {
  const [selectedID, setSelectedID] = useState(null);

  // useEffect(() => {
  //       if(selectedID !== null){
  //       // lazyDetail(id)}
  //       return (
  //       <>
  //       <Redirect to="/detail">
  //       </Redirect>
  //       </>
  //       )}
  //   },[selectedID])

  // useEffect(() => {
  //   return(
  //   <RollercoasterDetail id={selectedID}/>)
  // },[selectedID])

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
            <Link to={"/details/" + rollercoasters.id}>
              <img
                src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
                className="card-img-top"
                style={{ height: "15rem" }}
                alt="rollercoaster"
              />
            </Link>
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
                {/* <button onClick={() => setSelectedID(rollercoasters.id)} type="button" className="btn btn-primary">   
                  detail
               
                </button> */}
              </div>
            </div>
          </div>
        );
      })}
      {/* <RollercoasterDetail id={selectedID}/> */}
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
      <div>
        <Shambhala />
      </div>
    </>
  );
}

export default HomePage;
