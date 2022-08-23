import { getUser } from "../services/user_services.js";

const user = await getUser();
console.log(user);
