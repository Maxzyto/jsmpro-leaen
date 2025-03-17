import { auth } from "@/auth";
import "../globals.css";
import { signOut } from "next-auth/react";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  return (
    <>
      <h1 className="h1-bold">Welcome to the world of next</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <button type="submit">Log out</button>
      </form>
    </>
  );
};

export default Home;
