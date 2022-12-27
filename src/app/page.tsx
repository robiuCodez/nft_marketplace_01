import { useForm } from "react-hook-form";
import { Hero } from "../components";

type RegisterData = {
  username: string;
  email: string;
  password: string;
};

const Page = () => {
  // using react-hook-form
  const { register, handleSubmit } = useForm<RegisterData>();

  // register user
  const handleRegisterUser = () => {
    //
  };
  return (
    <>
      <Hero />
      <div>
        {/* register form */}
        <form onSubmit={handleSubmit(handleRegisterUser)}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" {...register("username", {
              required: true
            })} id="username" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" {...register("password")} id="password" />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Page;
