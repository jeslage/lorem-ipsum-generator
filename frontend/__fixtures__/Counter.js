import { useState } from "react";

import Counter from "../components/atoms/counter/counter";

export default {
  Default: <Counter label="test" />,
  "With state": () => {
    const [count, setCount] = useState(5);
    return (
      <Counter
        label="Counter with state"
        value={count}
        onChange={value => setCount(value)}
      />
    );
  }
};
