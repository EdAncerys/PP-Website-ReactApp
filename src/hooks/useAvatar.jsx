import { useEffect, useState } from "react";

import { GiAmericanFootballHelmet } from "react-icons/gi";
import { GiAquarium } from "react-icons/gi";
import { GiCatapult } from "react-icons/gi";
import { GiGaulsHelm } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { GiHelicoprion } from "react-icons/gi";
import { GiAmmonite } from "react-icons/gi";
import { GiAnglerFish } from "react-icons/gi";
import { GiGoat } from "react-icons/gi";

export const useAvatar = (name) => {
  const [avatar, setAvatar] = useState(false);

  const avatarIcon = {
    Brian: GiAmericanFootballHelmet,
    Chris: GiAquarium,
    Glenn: GiCatapult,
    Herbert: GiGaulsHelm,
    Joe: GiHamburger,
    Lois: GiHelicoprion,
    Meg: GiAmmonite,
    Peter: GiAnglerFish,
    Stewie: GiGoat,
  };

  useEffect(() => {
    setAvatar(avatarIcon[name]);
  }, []);

  return avatar;
};
