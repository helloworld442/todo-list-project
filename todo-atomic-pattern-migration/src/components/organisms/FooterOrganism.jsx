import { useLocation } from "react-router-dom";
import FooterField from "../molecules/FooterField";
import { useLayoutEffect, useState } from "react";

const FooterOrganism = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    switch (pathname) {
      case "/":
        return setActive(0);
      case "/write":
        return setActive(1);
      case "/chart":
        return setActive(2);
      case "/login":
        return setActive(3);
      case "/register":
        return setActive(3);
    }
  }, []);

  return <FooterField active={active} />;
};

export default FooterOrganism;
