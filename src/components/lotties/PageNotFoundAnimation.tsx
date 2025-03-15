import pageNotFound from "@/assets/lotties/page_not_found.json";
import { useLottie } from "lottie-react";

const PageNotFoundAnimation = () => {
  const { View } = useLottie(
    {
      animationData: pageNotFound,
      loop: true,
      autoplay: true,
    },
    { width: 300 }
  );
  return View;
};

export default PageNotFoundAnimation;
