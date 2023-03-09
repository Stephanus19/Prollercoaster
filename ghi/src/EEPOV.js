import ShamWow from "./ShambhalaVid.mp4";

function Shambhala() {
  return (
    <>
      <div
        className="modal"
        id="ShambhalaVid"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="Shambhala-title"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                <img
                  src="rollercoastericon.png"
                  alt="rollercoaster icon"
                  width="60px"
                />
                Congratulations! You Found Shambhala
              </h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                data-bs-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body modal-open">
              <video autoPlay loop muted id="ShamWowVid">
                <source src={ShamWow} type="video/mp4" />
              </video>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-outline-white"
        id="hidden-button"
        data-bs-toggle="modal"
        data-bs-target="#ShambhalaVid"
      >
        Proller Coaster
      </button>
    </>
  );
}
export default Shambhala;
