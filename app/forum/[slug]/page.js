import ChatForum from "@/components/ChatForum";
import Navbar from "@/components/Navbar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Page({ params }) {
  const user = await currentUser();
  const { slug } = await params;

  // const darkMode = localStorage.getItem("theme");
  // console.log("Dark Mode : " , darkMode);

  return (
    <>
    <Navbar />
    <ChatForum
      slug={slug}
      clerkUser={{
        id: user.id,
        name: user.firstName,
        token: user.publicMetadata.token,
      }}
    />
    </>
  );
}
