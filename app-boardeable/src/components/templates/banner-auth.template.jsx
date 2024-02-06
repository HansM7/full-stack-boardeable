import LogoAtom from "../atoms/logo.atom";

function BannerAuthTemplate() {
  return (
    <div className="flex flex-col items-center text-center">
      <LogoAtom size="md"></LogoAtom>
      <h1 className="text-3xl font-bold mt-8">Welcome to Boardable</h1>
    </div>
  );
}

export default BannerAuthTemplate;
