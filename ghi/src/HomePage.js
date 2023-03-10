import { useState } from "react";
import { useGetRollercoasterQuery, useGetTokenQuery } from "./store/api";
import { Link } from "react-router-dom";
import AddFavorite from "./AddFavorite";
import Roller from "./RollerVid.mp4";
import RollercoasterDetail from "./RollercoasterDetail";
import Shambhala from "./EEPOV";
import BlueFire from "./EEPOV2";

function Card({ rollercoasters }) {
  const { data: token } = useGetTokenQuery();
  return (
    <>
      <div
        className="card h-10 mb-3 mx-3"
        style={{ width: "18rem" }}
        key={rollercoasters.id}
      >
        <div className="container card-image-container">
          <img
            src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
            className="card-img-top"
            style={{ height: "15rem" }}
            alt="rollercoaster"
          />
          {token && <AddFavorite rollercoasterId={rollercoasters.id} />}
        </div>
        <div className="card-body">
          <h5 className="card-title">{rollercoasters.name} </h5>
          <h6 className="card-title">{rollercoasters.park.name}</h6>
          <div className="card-text">
            <div key={rollercoasters.speed}>
              <em>Speed: </em> {Math.floor(rollercoasters.speed * 0.621371192)}{" "}
              mph
            </div>
            <div key={rollercoasters.height}>
              <em>Height: </em> {Math.floor(rollercoasters.height * 3.28084)} ft
            </div>
            <div key={rollercoasters.inversionsNumber}>
              {" "}
              <em>Inversions: </em>
              {rollercoasters.inversionsNumber}
            </div>
          </div>
        </div>
        <RollercoasterDetail id={rollercoasters.id} />
      </div>
    </>
  );
}

function HomePage() {
  const { data: coasterList, isFetching } = useGetRollercoasterQuery();
  const [filter, setFilter] = useState("");

  if (isFetching || !coasterList) {
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

  const sortedCoasters = [...coasterList]?.sort((a, b) => {
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
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    if (filter === "park") {
      const nameA = a.park.name.toUpperCase();
      const nameB = b.park.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  });

  return (
    <>
      <div className="subnav">
        <div className="subnav__container">
          <div className="subnav__title">
            <div className="container">
              <button
                type="button"
                className="btn icon filter-buttons"
                onClick={() => setFilter("speed")}
              >
                <span className="material-icons">rocket_launch</span>
                <br></br>Speed
              </button>
              <button
                type="button"
                className="btn icon filter-buttons"
                onClick={() => setFilter("height")}
              >
                <span className="material-icons">height</span>
                <br></br>Height
              </button>
              <button
                type="button"
                className="btn icon filter-buttons"
                onClick={() => setFilter("inversionsNumber")}
              >
                <span className="material-icons">refresh</span>
                <br></br>Loopy Loops
              </button>
              <button
                type="button"
                className="btn icon filter-buttons"
                onClick={() => setFilter("A-Z")}
              >
                <span className="material-icons">sort_by_alpha</span>
                <br></br>Alphabetical
              </button>
              <button
                type="button"
                className="btn icon filter-buttons"
                onClick={() => setFilter("park")}
              >
                <span className="material-icons">attractions</span>
                <br></br>Park
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {sortedCoasters.map((sortedCoaster) => {
              return (
                <Card rollercoasters={sortedCoaster} key={sortedCoaster.id} />
              );
            })}
          </div>
          <BlueFire />
        </section>
      </div>
      <div>
        <Shambhala />
      </div>
      <div
        className="container footer"
        style={{ justifyContent: "space-between" }}
      >
        <span>
          <p>©2023 Proller Coaster</p>
        </span>
        <Link
          to="https://gitlab.com/wads1/module3-project-gamma"
          target="_blank"
        >
          <div className="container">
            <img src="gitlab-logo-500.png" width="60px"></img>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
