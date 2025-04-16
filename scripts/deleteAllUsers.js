// Run this script to delete all stream users

const { StreamChat } = require("stream-chat");

const apiKey = "YourApiKey";
const apiSecret = "YourApiSecret";

const client = StreamChat.getInstance(apiKey, apiSecret);

async function deleteAllUsers() {
  try {
    // 1. Fetch all users
    const response = await client.queryUsers({});
    const users = response.users;

    for (const user of users) {
      // optional: skip your current dev user if needed
      if (user.id === "YourAdminId") continue;

      console.log(`Deleting user: ${user.id}`);
      await client.deleteUser(user.id, {
        hard_delete: true, // completely removes from Stream
        delete_conversations: true, // removes channels the user is part of
      });
    }

    console.log("All users deleted (except optional exclusions)");
  } catch (err) {
    console.error("Error deleting users:", err);
  }
}

deleteAllUsers();