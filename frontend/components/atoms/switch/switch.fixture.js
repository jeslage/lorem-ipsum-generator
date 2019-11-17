import { useValue } from "react-cosmos/fixture";

import Switch from "./switch";
import ColorIcon from "../../icons/color.svg";

export default {
  Default: <Switch label="Label" iconBefore={ColorIcon} isActive={true} />,
  "With state": () => {
    const [active, setActive] = useValue("active", { defaultValue: false });
    return (
      <Switch
        isActive={active}
        label="Label"
        iconBefore={ColorIcon}
        onChange={bool => setActive(bool)}
      />
    );
  }
};
