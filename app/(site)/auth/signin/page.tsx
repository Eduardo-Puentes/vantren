import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vantren - Diseño y creación de soluciones tecnológicas",
  description: "En Vantren nos encargamos de integrar a negocios almundo digital mediante soluciones personalizadas.",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
