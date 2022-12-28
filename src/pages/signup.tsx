import { useForm } from "react-hook-form";
import { trpc } from "../utils/trpc";

type RegisterData = {
  username: string;
  email: string;
  password: string;
};

const SignUp = () => {
  // using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegisterData>();

//   const utils = trpc.useContext();
//   const newUser = trpc.user.register.useMutation();

  // register user
  const handleRegisterUser = async (data: any) => {
    console.log(data)
  };

  return (
    <section>
      {/* register form */}
      <form onSubmit={handleSubmit(handleRegisterUser)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            {...register("username", {
              required: true,
            })}
            id="username"
            placeholder="Username"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email")}
            id="email"
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password")} id="password" />
        </div>

        {/* disable form if !isValid */}
        <button type="submit" disabled={!isValid}>
          Register
        </button>
      </form>
    </section>
  );
};

export default SignUp;
