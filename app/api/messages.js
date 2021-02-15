import client from "./client";

const send = (message, listingId, token) => {
  return client.post(
    "/messages",
    {
      message,
      listingId,
    },
    {
      headers: {
        authToken: token,
      },
    }
  );
};

export default { send };
