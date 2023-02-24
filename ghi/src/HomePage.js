import { useGetRollercoasterQuery } from "./store/api";

function HomePage() {
  // const { data } = useGetRollercoasterQuery();

  const { data: coasterList, isFetching } = useGetRollercoasterQuery({
    skip: true,
    selectFromResult: (result) => result.data,
  });
  console.log(coasterList);
  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {coasterList.map((rollercoasters) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
              className="card-img-top"
              alt="rollercoaster"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <li key={rollercoasters.id}>Name: {rollercoasters.name}</li>
                <li key={rollercoasters.id}>Speed: {rollercoasters.speed}</li>
                <li key={rollercoasters.id}>Height: {rollercoasters.height}</li>
                <li key={rollercoasters.id}>
                  {" "}
                  Inversions:
                  {rollercoasters.inversionsNumber}
                </li>
                <li key={rollercoasters.id}>{rollercoasters.park.name}</li>
              </p>
              {/* <li key={rollercoasters.id}>
              <img
                src={`https://captaincoaster.com/images/coasters/${rollercoasters.mainImage.path}`}
              ></img>
            </li> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
export default HomePage;
