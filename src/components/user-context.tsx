import { createContext } from "react";
import type { IUserDetails } from "./user-details.interface";

export interface IUserContext {
  userDetails?: IUserDetails;
}

const UserContext = createContext<IUserContext>({
  userDetails: undefined,
});

export default UserContext;
