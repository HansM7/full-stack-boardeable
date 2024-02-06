import React from "react";
import BannerAuthTemplate from "./banner-auth.template";
import FormAuthOrganism from "../organisms/form-auth.organism";

function LoginTemplate() {
  return (
    <main className="max-w-xs">
      <BannerAuthTemplate></BannerAuthTemplate>
      <FormAuthOrganism></FormAuthOrganism>
      <div className="flex flex-row items-center justify-center text-violet-700 font-semibold gap-2">
        <span className="text-sm">Create an account</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33331 7.99998H12.6666M12.6666 7.99998L7.99998 3.33331M12.6666 7.99998L7.99998 12.6666"
              stroke="#6D28D9"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </main>
  );
}

export default LoginTemplate;
