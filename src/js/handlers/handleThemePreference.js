import { elements } from "../objects/elements.js";

export function setCurrentThemePreference() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    elements.themeSwitch.checked = true;
  }
}
