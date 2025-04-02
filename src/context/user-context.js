import { createContext, useContext } from "react"
import { InitialUser } from "../schemas/constants"

const UserContext = createContext(InitialUser)
export default UserContext

export const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error("useUser most be used within the UserProvider")
  }

  return context  // {user, setuser}
}