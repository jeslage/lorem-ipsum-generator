import { useValue } from "react-cosmos/fixture";

import Counter from "./Counter";
import ColorIcon from "../../icons/ColorIcon";

export default {
  Default: <Counter label="test" />,
  "With state": () => {
    const [count, setCount] = useValue("count", { defaultValue: 2 });
    return (
      <Counter
        label="Counter with state"
        value={count}
        iconBefore={ColorIcon}
        onChange={value => setCount(value)}
      />
    );
  }
};
