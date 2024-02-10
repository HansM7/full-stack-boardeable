import { useContext } from "react";
import { ToastContext } from "../../context/auth-toast.context";
import LoginTemplate from "../templates/login.template";
import ToastErrorMolecule from "../molecules/toast-error.molecule";

function LoginPage() {
  const { toastInfo } = useContext(ToastContext);
  return (
    <div className="mt-24 flex justify-center relative">
      <LoginTemplate></LoginTemplate>
      {toastInfo.error ? (
        <ToastErrorMolecule message={toastInfo.message}></ToastErrorMolecule>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoginPage;
