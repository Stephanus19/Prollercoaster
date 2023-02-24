import { useGetRollercoasterQuery } from "./store/api";

function HomePage() {
  const { data } = useGetRollercoasterQuery();
  console.log(data);
}

export default HomePage;
