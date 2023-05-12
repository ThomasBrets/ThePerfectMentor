import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("El correo electrónico es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const handleLogin = async (values) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/auth/login",
      values,
      { withCredentials: true }
    );

    const token = response.data.token;
    Cookies.set("token", token);

    const meResponse = await axios.get("http://localhost:3001/api/auth/me", {
      headers: {
        Authorization: `${token}`,
        Cookie: `token=${token}` // Agregar el token en la cabecera Cookie
      },
    });
    console.log("Detalles del usuario", meResponse.data);

    const secretResponse = await axios.get("http://localhost:3001/api/auth/secret", {
      headers: {
        Authorization: `${token}`,
        Cookie: `token=${token}` // Agregar el token en la cabecera Cookie
      }
    });
    console.log("Respuesta de la ruta secreta", secretResponse.data);
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
  }
};

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleLogin,
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
              className="space-y-4 md:space-y-6"
              onSubmit={formik.handleSubmit}
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
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="nombre@gmail.com"
                  required
                  {...formik.getFieldProps("email")}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    formik.errors.password && formik.touched.password
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="••••••••"
                  required
                  {...formik.getFieldProps("password")}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white btn-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Iniciar sesión
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                No tienes una cuenta?{" "}
                <a
                  href="/register"
                  className="font-medium hover:underline dark:text-primary-500"
                >
                  Registrate
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
