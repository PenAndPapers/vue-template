import InputText from "./index.vue";

export default {
  title: "Form/Input",
  component: InputText,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onkeyup: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { InputText },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<InputText v-bind="args" />`,
});

export const BigInputText = Template.bind({});

BigInputText.args = {
  classes: "w-full h-12 px-4 border border-lime-600",
  value: "Hello world 1",
};

export const SmallInputText = Template.bind({});

SmallInputText.args = {
  classes: "w-full h-8 px-2 border border-lime-600",
  value: "Hello world 2",
};
