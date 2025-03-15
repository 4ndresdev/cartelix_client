import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import PageNotFoundAnimation from "@/components/lotties/PageNotFoundAnimation.js";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center lg:flex-row flex-col gap-2">
      <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.20),rgba(255,255,255,0))]"></div>
      <div className="fixed bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.20),rgba(255,255,255,0))]"></div>
      <PageNotFoundAnimation />
      <div className="flex flex-col lg:items-start gap-4 m-10">
        <div className="flex gap-x-1">
          <p className="text-lg font-normal underline underline-offset-8">
            Error
          </p>
          <p className="text-lg font-normal">404</p>
        </div>
        <h1 className="text-2xl lg:text-6xl font-bold text-start m-0">
          Oops! This page took a detour to the popcorn stand! 🍿🎬
        </h1>
        <p className="text-lg font-normal">
          But don't worry, you can always find your way back to the movies!
        </p>
        <button
          className="flex items-center gap-1 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 bg-nexflix-red"
          onClick={() => navigate("/")}
        >
          Go Home <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
