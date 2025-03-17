import { auth } from "@/auth";
import "../globals.css";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Welcome to the world of next</h1>
    </>
  );
};

export default Home;
