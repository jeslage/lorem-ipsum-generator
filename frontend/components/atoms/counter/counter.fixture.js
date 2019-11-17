import { useValue } from "react-cosmos/fixture";

import Counter from "./counter";
import ColorIcon from "../../icons/color.svg";

export default {
  Default: <Counter label="test" />,
  "With state": () => {
    const [count, setCount] = useValue("count", { defaultValue: 0 });
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
