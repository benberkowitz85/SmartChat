const chats = [
    {
      isGroupChat: false,
      users: [
        {
          name: "John Doe",
          email: "john@example.com",
        },
        {
          name: "Lyubomir",
          email: "lyubomir@example.com",
        },
      ],
      _id: "617a077e18c25468bc7c4dd4",
      chatName: "John Doe",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Guest User",
          email: "guest@example.com",
        },
        {
          name: "Lyubomir",
          email: "lyubomir@example.com",
        },
      ],
      _id: "617a077e18c25468b27c4dd4",
      chatName: "Guest User",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Michael",
          email: "michael@example.com",
        },
        {
          name: "Lyubomir",
          email: "lyubomir@example.com",
        },
      ],
      _id: "617a077e18c2d468bc7c4dd4",
      chatName: "Michael",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Lyubomir",
          email: "lyubomir@example.com",
        },
        {
          name: "Michael",
          email: "michael@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150716472c78",
      chatName: "Friends",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Katherine",
          email: "katherine@example.com",
        },
        {
          name: "Silvia",
          email: "silvia@example.com",
        },
      ],
      _id: "617a077e18c25468bc7cfdd4",
      chatName: "Silvia",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Ben",
          email: "ben@example.com",
        },
        {
          name: "Lyubomir",
          email: "lyubomir@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150016472c78",
      chatName: "Smart Zone",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
  ];

  module.exports = {chats};