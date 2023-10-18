import Counter from "./Counter";

export default {
  title: "Example/Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Primary = {
  args: {
    label: "+",
    type: "primary",
  },
};
export const Secondary = {
  args: {
    label: "-",
    type: "Secondary",
  },
};
