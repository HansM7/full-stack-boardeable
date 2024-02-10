import React from "react";
import LogoAtom from "../atoms/logo.atom";
import { authHook } from "../../hooks/auth.hook";
import { Link } from "react-router-dom";

function HeaderOrganism() {
  const { logout } = authHook();

  return (
    <header className="px-16">
      <nav className="flex justify-between items-center py-4">
        <Link to={"/"} className="flex flex-row gap-4 items-center">
          <LogoAtom size="sm"></LogoAtom>
          <h2 className="text-xl font-bold">Boardable</h2>
        </Link>
        <div className="flex gap-2">
          <button className="py-2 px-4 border rounded-md h-10 text-sm">
            My Account
          </button>
          <button
            onClick={logout}
            className="py-2 px-4 border border-gray-200 bg-gray-200 rounded-md h-10 text-sm"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderOrganism;
