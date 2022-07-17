import AppNavigation from "./index.vue";

export default {
  title: "Layout/Navigation",
  component: AppNavigation,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AppNavigation },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<AppNavigation v-bind="args" />`,
});

export const Navigation = Template.bind({});

Navigation.args = {};
