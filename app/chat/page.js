import ChatPage from "@/components/Chat";
// import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  // const darkMode = localStorage.getItem("theme");
  // console.log("Dark Mode : " , darkMode);

  return (
    <>
    {/* <Navbar /> */}
    <ChatPage
      clerkUser={{
        id: user.id,
        name: user.firstName,
        token: user.publicMetadata.token,
      }}
    />
    </>
  );
}
