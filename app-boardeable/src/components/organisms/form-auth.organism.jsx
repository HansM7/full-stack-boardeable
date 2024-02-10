import { actions_auth } from "../../constants/auth.constant";
import { authHook } from "../../hooks/auth.hook";
import { useEffect } from "react";

function FormAuthOrganism({ action = "login" }) {
  const { handleSubmit, data, setData, validateSession } = authHook();

  useEffect(() => {
    validateSession();
  }, []);

  return (
    <form
      className="flex flex-col my-8 gap-4"
      onSubmit={(e) => handleSubmit(e, action)}
    >
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Username</label>
        <input
          onChange={(e) => setData({ ...data, username: e.target.value })}
          className="px-3 py-2 outline-none border rounded-md"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Password</label>
        <input
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="px-3 py-2 outline-none border rounded-md"
          type="password"
        />
      </div>
      <div>
        <button className="bg-violet-700 text-white px-8 py-2 rounded-md w-full">
          {action === actions_auth.LOGIN ? "Login" : "Signup"}
        </button>
      </div>
    </form>
  );
}

export default FormAuthOrganism;
