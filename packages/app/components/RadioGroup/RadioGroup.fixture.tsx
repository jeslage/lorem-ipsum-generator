import { useValue } from "react-cosmos/fixture";
import RadioGroup from "./RadioGroup";

export default {
  default: (
    <RadioGroup
      label="Text transform"
      value="uppercase"
      name="general-textTransform"
      onChange={value => console.log(value)}
      iconBefore="mixedcase"
      options={[
        { value: "none", icon: "mixedcase" },
        { value: "uppercase", icon: "uppercase" },
        { value: "lowercase", icon: "lowercase" }
      ]}
    />
  ),
  "with State": () => {
    const [active, setActive] = useValue<string>("active", {
      defaultValue: "uppercase"
    });
    return (
      <RadioGroup
        label="Text transform"
        value={active}
        name="general-textTransform"
        iconBefore="mixedcase"
        options={[
          { value: "none", icon: "mixedcase" },
          { value: "uppercase", icon: "uppercase" },
          { value: "lowercase", icon: "lowercase" }
        ]}
        onChange={value => setActive(value)}
      />
    );
  }
};
