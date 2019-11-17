import { useValue } from "react-cosmos/fixture";

import RadioGroup from "./radioGroup";

import UppercaseIcon from "../../icons/uppercase.svg";
import LowercaseIcon from "../../icons/lowercase.svg";
import MixedcaseIcon from "../../icons/mixedcase.svg";

export default {
  default: (
    <RadioGroup
      label="Text transform"
      value="uppercase"
      name="general-textTransform"
      iconBefore={MixedcaseIcon}
      options={[
        { value: "none", icon: MixedcaseIcon },
        { value: "uppercase", icon: UppercaseIcon },
        { value: "lowercase", icon: LowercaseIcon }
      ]}
    />
  ),
  "with State": () => {
    const [active, setActive] = useValue("active", {
      defaultValue: "uppercase"
    });
    return (
      <RadioGroup
        label="Text transform"
        value={active}
        name="general-textTransform"
        iconBefore={MixedcaseIcon}
        options={[
          { value: "none", icon: MixedcaseIcon },
          { value: "uppercase", icon: UppercaseIcon },
          { value: "lowercase", icon: LowercaseIcon }
        ]}
        onChange={value => setActive(value)}
      />
    );
  }
};
