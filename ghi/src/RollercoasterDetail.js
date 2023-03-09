import { useSelector, useDispatch } from "react-redux";
import { eventTargetSelector as target, preventDefault } from "./store/utils";
import { useCallback, useState, useEffect } from "react";
import {
  useGetRollercoasterDetailQuery,
  useLazyGetRollercoasterDetailQuery,
} from "./store/api";
import { useParams } from "react-router-dom";
import "./RollercoasterDetail.css";

function RollercoasterDetail({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lazyDetails, { data, isLoading }] =
    useLazyGetRollercoasterDetailQuery();

  const openModal = async () => {
    await lazyDetails(id);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Launch demo modal
      </button>
      {isOpen && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {data.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={`https://captaincoaster.com/images/coasters/${data.mainImage.path}`}
                  className="card-img-top"
                  style={{ height: "auto" }}
                ></img>
                <h6 className="card-text">{data.park.name}</h6>
                <div className="card-text">
                  <div key={data.speed}>
                    <em>Speed:</em> {Math.floor(data.speed * 0.621371192)}
                  </div>
                  <div key={data.height}>
                    <em>Height:</em> {Math.floor(data.height * 3.28084)}
                  </div>
                  <div key={data.inversionsNumber}>
                    {" "}
                    <em>Inversions:</em>
                    {data.inversionsNumber}
                  </div>
                  <div className="card-text">
                    <em>Length: </em>
                    {Math.floor(data.length * 3.28084)}
                  </div>
                  <div className="card-text">
                    <em>Manufacturer: </em>
                    {data.manufacturer.name}
                  </div>
                  <div className="card-text">
                    <em>Material: </em>
                    {data.materialType.name}
                  </div>
                  <div className="card-text">
                    <em>Seating Type: </em>
                    {data.seatingType.name}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RollercoasterDetail;