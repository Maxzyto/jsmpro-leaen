import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
  const buttonClasses =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3";

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClasses}>
        <Image
          src="/icons/google.svg"
          alt="Google"
          width={20}
          height={20}
          className=" mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>

      <Button className={buttonClasses}>
        <Image
          src="/icons/github.svg"
          alt="Google"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
