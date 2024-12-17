import AccountDetails from "./AccountDetails";
import RegisterForm from "./RegisterForm";

function RegisterPage() {
  return (
    <div className="md:grid flex flex-col-reverse md:grid-cols-[3fr_1fr] mt-10 py-10 md:px-5">
      <RegisterForm />
      <AccountDetails />
    </div>
  );
}

export default RegisterPage;
