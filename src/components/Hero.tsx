import { ReactComponent as HeroImage } from "../images/illustration-working.svg";
import MenuButton from "./MenuButton";
import constants from "../constants";

const Hero = () => {
  return (
    <div className="flex max-md:flex-col">
      <div className=" flex flex-col justify-center  max-md:order-2 max-md:text-center basis-3/5">
        <h1 className="text-7xl font-bold">{constants.hero.title1}</h1>
        <h1 className="text-7xl font-bold">{constants.hero.title2}</h1>
        <p className="text-neutral-grayishViolet">
          {constants.hero.description}
        </p>
        <MenuButton
          className={"bg-primary-cyan rounded-2xl text-center text-white w-2/4"}
          buttonText={constants.hero.buttonText}
        />
      </div>
      <div className="max-md:order-1 overflow-x-hidden basis-2/5">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
