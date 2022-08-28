import { Radio } from "components";
export default {
  title: "kiosk/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = {
  label: "Radio",
  variant: "FillIndigo500",
  size: "sm",
  inputClassName: "mr-1",
};
