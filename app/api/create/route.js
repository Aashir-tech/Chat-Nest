import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'

// Define values.
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
// const user_id = "user_2vX9I5kr1Q2MZcYAx4SV138s1Jm";

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  // Create User Token
  const token = serverClient.createToken(user.data.id);
  await serverClient.upsertUser({id : user.data.id});

//   console.log("TOken " , token)

  const client = await clerkClient();

//   console.log("Client " , client);

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token : token,
    },
  })

  const slugs = ["python-new" , "js-new" , "webdev-new" , "ai-new" , "tech-new"]

  slugs.forEach(async (item) => {
    const channel = serverClient.channel('messaging', item, {
        image: 'https://getstream.io/random_png/?name=react',
        name: item.toUpperCase() + " Discussion " ,
        created_by_id : user.data.id
      });

      await channel.create();
      channel.addMembers([user.data.id]);
  })


  console.log("A new user has been created : " , token);
  return Response.json({ message: "User Token Generated Successfully" });
}
