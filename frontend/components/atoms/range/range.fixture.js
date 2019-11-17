import { useValue } from "react-cosmos/fixture";

import Range from "./range";
import ColorIcon from "../../icons/color.svg";

export default {
  Default: <Range label="Label" />,
  "With icon": <Range label="Label" iconBefore={ColorIcon} />,
  "With state": () => {
    const [value, setValue] = useValue("value", { defaultValue: 5 });
    return (
      <Range
        label="Range with state"
        value={value}
        iconBefore={ColorIcon}
        onChange={value => setValue(value)}
      />
    );
  }
};
