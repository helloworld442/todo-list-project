import { useNavigate } from "react-router-dom";
import HeaderField from "../molecules/HeaderField";

const HeaderOrganism = () => {
  const navigateTo = useNavigate();

  const goBackButton = () => navigateTo(-1);

  const goHomeButton = () => navigateTo("/");

  return (
    <HeaderField goBackButton={goBackButton} goHomeButton={goHomeButton} />
  );
};

export default HeaderOrganism;
