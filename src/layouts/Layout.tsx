import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="bg-pink-600">
        <div className="mx-auto max-w-6xl py-6">
          <h1 className="text-4xl font-extrabold text-white px-2">
            Administrador de productos
          </h1>
        </div>
      </header>
      <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow rounded-xl">
        <Outlet />
      </main>
    </>
  );
};
