import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import validationSchema, { Fields } from "../schemas/validation-schema";
import bg from "../assets/login-bg.png";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Fields> = (data) => {
    console.log(data);
  };
  return (
    <div className="relative h-screen grid items-center">
      <img
        src={bg}
        className="absolute w-full h-full object-cover object-center"
        alt="background"
      />
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative bg-custom-bg border-2 border-white mx-6 p-10 px-6 rounded-xl backdrop-blur-8 w-1/3"
        >
          <div className="grid grid-cols-1 gap-y-7 mb-6">
            <div className="grid grid-cols-[max-content,1fr] items-center gap-x-3 border-b-2 border-white">
              <i className="text-xl"></i>
              <div className="relative">
                <input
                  {...register("email")}
                  type="email"
                  className="border-none outline-none w-full py-3 bg-transparent text-white placeholder-white relative z-10 pr-7"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="absolute left-11 top-[85%] -translate-x-1/2 translate-y-1/2 text-red-500 font-bold text-sm ">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-[max-content,1fr] items-center gap-x-3 border-b-2 border-white">
              <i className="text-xl"></i>
              <div className="relative">
                <input
                  {...register("password")}
                  type="password"
                  className="border-none outline-none w-full py-3 bg-transparent text-white placeholder-white relative z-10 pr-7 "
                  placeholder="Password"
                />
                {errors.password && (
                  <span className="absolute left-[138px] top-[85%] -translate-x-1/2 translate-y-1/2 text-red-500 font-bold text-sm w-max ">
                    {errors.password.message}
                  </span>
                )}
                <i className="absolute right-0 top-4 z-10 cursor-pointer"></i>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between my-4">
            <div className="flex">
              <input type="checkbox" className="border-none outline-none" />
              <label className="text-base text-white opacity-70 pl-2">
                Remember me
              </label>
            </div>
            <a href="#" className="text-base text-white hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="border-none outline-none text-black w-full p-4 rounded-md bg-white font-medium cursor-pointer mb-8"
          >
            Login
          </button>

          <p className="text-center text-white opacity-70 flex justify-center gap-5">
            Don't have an account?
            <Link
              to={"/register"}
              className="text-base text-white hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
