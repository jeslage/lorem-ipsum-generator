import { useValue } from "react-cosmos/fixture";

import Counter from "./Counter";

export default {
  Default: (
    <Counter label="test" value={2} onChange={value => console.log(value)} />
  ),
  "With state": () => {
    const [count, setCount] = useValue<number>("count", { defaultValue: 2 });

    return (
      <Counter
        label="Counter with state"
        value={count}
        iconBefore="color"
        onChange={value => setCount(value)}
      />
    );
  }
};
