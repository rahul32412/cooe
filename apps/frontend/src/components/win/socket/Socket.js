import { io } from "socket.io-client";
const URL = "http://localhost:8000";
const Socket = io(URL);
export default Socket;
