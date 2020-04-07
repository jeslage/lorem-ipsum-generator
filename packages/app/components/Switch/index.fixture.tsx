import { useValue } from "react-cosmos/fixture";

import Switch from "./Switch";

export default {
  Default: (
    <Switch
      label="Label"
      iconBefore="color"
      isActive
      onChange={() => console.log("Changed")}
    />
  ),
  "With state": () => {
    const [active, setActive] = useValue<boolean>("active", {
      defaultValue: false
    });

    return (
      <Switch
        isActive={active}
        label="Label"
        iconBefore="color"
        onChange={bool => setActive(bool)}
      />
    );
  }
};
