import axios from "axios";
async function getUser(user, token) {
  const res = await axios.post(
    import.meta.env.VITE_SERVER_URI + "/user/create",
    { userId: user.sub, user_email: user.email },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(res);
  return res;
}

export { getUser };
