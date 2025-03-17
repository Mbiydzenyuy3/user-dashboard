import { useNavigate } from "react-router";
import Header from "./Header";

import { useUser } from "../context/user-context";

export default function Profile() {
  const { user: accountInfo } = useUser();

  const navigate = useNavigate();

  const update = () => {
    navigate("/update");
  };
  return (
    <>
      <Header />
      <div className="form-info">
        <p>
          <strong>First Name</strong>: {accountInfo.firstname}
        </p>
        <p>
          <strong>Last Name</strong>: {accountInfo.lastname}
        </p>
        <p>
          <strong>Email</strong>: {accountInfo.email}
        </p>
        <p>
          <strong>Phone Number</strong>: {accountInfo.telephone}
        </p>
        <button className="edit-info" onClick={update}>
          Update infos
        </button>
      </div>
    </>
  );
}
