function Landing() {
  return (
    <>
      {" "}
      {window.addEventListener("DOMContentLoaded", function () {
        let video = document.getElementById("background-video");
        video.pause();

        const button = document.getElementById("remove-video");
        button.style.display = "block";

        button.addEventListener("click", function () {
          let parent = video.parentNode;
          parent.removeChild(video);
        });
      })}
      <button id="remove-video">Enter ProllerCoaster</button>
    </>
  );
}

export default Landing;
