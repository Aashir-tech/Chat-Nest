import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  const token = serverClient.createToken(user.data.id);
  await serverClient.upsertUser({ id: user.data.id });

  const client = await clerkClient();
  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  const slugs = ["python-new", "js-new", "webdev-new", "ai-new", "tech-new"];

  for (const item of slugs) {
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: item.toUpperCase() + " Discussion",
      created_by_id: user.data.id,
    });

    await channel.create();

    // ✅ Add user to the channel (assigning role)
    await channel.addMembers([
      { user_id: user.data.id, channel_role: "channel_member" },
    ]);
  }

  console.log("✅ A new user has been created: ", token);

  return Response.json({ message: "User Token Generated Successfully" });
}
