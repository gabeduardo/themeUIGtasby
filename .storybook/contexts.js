
import theme, { segundo, standard } from "../src/gatsby-plugin-theme-ui/index"
import {  ThemeProvider } from "theme-ui"






export const contexts = [
  {
    icon: "box", // a icon displayed in the Storybook toolbar to control contextual props
    title: "Themes", // an unique name of a contextual environment
    components: [ThemeProvider],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      { name: "Default Theme", props: { theme: standard, default: true } },
      { name: "Segundo Theme", props: { theme: segundo } },
   
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false // allow this contextual environment to be opt-out optionally in toolbar
    }
  }
];