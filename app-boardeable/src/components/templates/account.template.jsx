import React from "react";
import HeaderOrganism from "../organisms/header.organism";
import FormAccountOrganism from "../organisms/form-account.organism";

function AccountTemplate() {
  return (
    <div className="">
      <HeaderOrganism></HeaderOrganism>
      <div className=" flex justify-center w-full">
        <div className="max-w-md mt-16">
          <h1 className="text-2xl font-bold">My Account</h1>
          <FormAccountOrganism></FormAccountOrganism>
        </div>
      </div>
    </div>
  );
}

export default AccountTemplate;
