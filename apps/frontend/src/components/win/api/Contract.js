import axios from "axios";
export default async function createContract(details, user, token) {
  console.log("event called");

  const { colorSelected, contractMoney } = details;
  const res = await axios.post(
    import.meta.env.VITE_SERVER_URI + "/order/create",
    { userId: user.sub, colorSelected, contractMoney },
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
