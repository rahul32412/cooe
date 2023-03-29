import { io } from "socket.io-client";
const Socket = io(import.meta.env.VITE_SERVER_URI);
export default Socket;
