import Fire from "./BlueFire.mp4";

function BlueFire() {
  return (
    <>
      <div
        className="modal"
        id="BlueFire"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="BlueFire-title"
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
                Congratulations! You Found Blue Fire
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
              <video autoPlay loop muted id="BlueFireVid">
                <source src={Fire} type="video/mp4" />
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
        data-bs-target="#BlueFire"
      >
        Blue Fire
      </button>
    </>
  );
}
export default BlueFire;
