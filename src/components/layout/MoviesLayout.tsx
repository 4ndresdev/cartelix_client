import { Outlet } from "react-router";

const MoviesLayout = () => {
  return (
    <main className="relative">
      <div className="pattern" />
      <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.30),rgba(255,255,255,0))]"></div>
      <div className="fixed bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.30),rgba(255,255,255,0))]"></div>
      <div className="wrapper">
        <h3 className="text-white text-center md:text-left">🍿 Cartelix</h3>
        <Outlet />
      </div>
    </main>
  );
};

export default MoviesLayout;
