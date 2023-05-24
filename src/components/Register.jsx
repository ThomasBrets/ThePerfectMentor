import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  lastName: Yup.string().required("El apellido es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
      "La contraseña debe contener al menos una mayúscula, un número y tener un mínimo de 8 caracteres"
    ),
  mentor: Yup.boolean(),
});

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      mentor: false,
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://localhost:3001/api/auth/register", values)
        .then((response) => {
          console.log("Registro exitoso");
        })
        .catch((error) => {
          console.log("Error al registrar");
        });
    },
  });

  return (
    <section className="bg-base-100 pb-10 pt-10 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="../assets/usuario.png"
            alt="logo"
          ></img>
          Registrate
        </a>
        <div className="w-full bg-base-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Nombre
                </label>
                <input
                  placeholder="Ej: Oscar"
                  type="text"
                  name="name"
                  id="name"
                  className={`bg-gray-50 border ${
                    formik.errors.name ? "border-red-500" : "border-gray-300"
                  } text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Apellido
                </label>
                <input
                  placeholder="Ej: Beltran"
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500">{formik.errors.lastName}</div>
                ) : null}
              </div>
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  placeholder="●●●●●●●●"
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="mentor"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Mentor
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="mentor"
                    id="mentor"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    checked={formik.values.mentor}
                    onChange={formik.handleChange}
                  />
                  <span className="ml-2">¿Eres mentor?</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full text-white btn-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handleCreateAccount}
                disabled={isLoading}
              >
                {isLoading ? "Cargando..." : "Crear mi cuenta"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Ya tienes una cuenta?{" "}
                <a
                  href="/auth/login"
                  className="font-medium hover:underline dark:text-primary-500"
                >
                  Inicia sesión aqui
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
