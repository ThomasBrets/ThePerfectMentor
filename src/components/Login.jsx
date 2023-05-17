import React, { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values) => {
    console.log("Values: ", values);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        values
      );
      console.log("RESPONSE.DATA.TOKEN", response.data.token);
      console.log("RESPONSE.DATA", response.data.token);

      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: values.email },
      });

      navigate("/");
    } catch (err) {
      if (err && err.response && err.response.data && err.response.data.message)
        setError(err.response.data.message);
      else if (err instanceof Error) setError(err.message);

      console.log("Error: ", err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <section className="bg-base-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2 rounded"
            src="../assets/usuario.png"
            alt="logo"
          />
          Inicia sesión
        </a>
        <div className="w-full bg-base-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nombre@gmail.com"
                  required
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <svg
                        className="w-6 h-6 text-gray-500 dark:text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4a1 1 0 100-2 1 1 0 000 2z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-500 dark:text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.535 4.465a8 8 0 010 11.314M4.464 19.536A8 8 0 1019.536 4.464"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {error && (
                <p className="text-red-500 dark:text-red-400">{error}</p>
              )}
              <button
                type="submit"
                className="w-full text-white btn-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Iniciar sesión
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿No tienes una cuenta?{" "}
                <a
                  href="/register"
                  className="font-medium hover:underline dark:text-primary-500"
                >
                  Regístrate
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
