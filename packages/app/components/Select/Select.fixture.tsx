import Select from "./Select";

export default {
  Default: (
    <Select
      initialValue="Option 1"
      label="Label"
      name="select"
      iconBefore="color"
      options={[
        { value: "Option 1", label: "Option 1" },
        { value: "Option 2", label: "Option 2" }
      ]}
    />
  )
};
