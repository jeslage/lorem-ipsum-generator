import { useValue } from "react-cosmos/fixture";

import Range from "./Range";

export default {
  Default: <Range label="Label" />,
  "With icon": <Range label="Label" iconBefore="color" />,
  "With state": () => {
    const [value, setValue] = useValue<number>("value", { defaultValue: 0 });
    return (
      <Range
        label="Range with state"
        value={value}
        min={-10}
        max={10}
        doubleClickValue={0}
        iconBefore="color"
        onChange={value => setValue(value)}
      />
    );
  }
};
