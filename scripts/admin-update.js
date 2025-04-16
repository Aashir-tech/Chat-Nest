// admin-update.js
// Run this script to manually update admin
const { StreamChat } = require('stream-chat');

const serverClient = StreamChat.getInstance(
  "YourApiKey",
  "YourApiSecret"
);

async function updateAdminName() {
  try {
    await serverClient.upsertUser({
      id: 'YourId',
      name: 'YourName',
      role: 'admin',
    });

    console.log('Admin updated ');
  } catch (error) {
    console.error('Error updating admin:', error);
  }
}

updateAdminName();
