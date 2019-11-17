import Select from "./select";
import ColorIcon from "../../icons/color.svg";

export default {
  Default: (
    <Select
      label="Label"
      name="select"
      title="select"
      iconBefore={ColorIcon}
      options={[
        { value: "Option 1", label: "Option 1" },
        { value: "Option 2", label: "Option 2" }
      ]}
    />
  )
};
