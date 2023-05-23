import { useState } from "react";

const UserPage = () => {
  const [name, setName] = useState("Juan Perez");
  const [email, setEmail] = useState("juan.perez@gmail.com");
  const [avatar, setAvatar] = useState(
    "https://lh3.googleusercontent.com/a/AGNmyxYV29wNfQtfetgOhVjgrw3UYVemFq9yzb2jB-nL=s96-c-rg-br100"
  );

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAvatarChange = (e) => setAvatar(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los datos del usuario
  };

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="max-w-5xl mx-auto py-12">
        <div className="bg-base-100 rounded-lg shadow-lg">
          <div className="flex justify-center py-6">
            <img
              className="w-32 h-32 rounded-full"
              src={avatar}
              alt="Profile picture"
            />
          </div>
          <form onSubmit={handleSubmit} className="px-6 py-4">
            <div className="mb-4">
              <label className="block text-gray-400 font-bold mb-2" htmlFor="name">
                Nombre completo
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 font-bold mb-2" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 font-bold mb-2" htmlFor="avatar">
                Imagen de perfil (URL)
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="avatar"
                value={avatar}
                onChange={handleAvatarChange}
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full text-white btn-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPage;