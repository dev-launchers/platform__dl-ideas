import React from "react";
//import Link from "next/link";
import Logout from "../../../utils/Logout";
import { env } from "../../../utils/EnvironmentVariables"
import {
  AccountMenuDropdownItem,
  AccountMenuDropdownButton,
  MenuButton,
} from "./StyledAccountDropdown";

export default function AccountDropdown(props) {
  return (
    <div>
      {props.userData.id ? (
        <AccountMenuDropdownButton
          toggleBtnText="Menu"
          dropdownItems={
            <>
              {" "}
              <AccountMenuDropdownItem>
                  <a href="/user-profile">Visit Account Page</a>
              </AccountMenuDropdownItem>
              <AccountMenuDropdownItem onClick={Logout}>
                Logout{" "}
              </AccountMenuDropdownItem>
            </>
          }
        ></AccountMenuDropdownButton>
      ) : (
        <MenuButton fontSize="1.2rem" href="http://localhost:1337/connect/google">
          Sign In{" "}
        </MenuButton>
      )}
    </div>
  );
}
