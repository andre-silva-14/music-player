import { elements } from "../objects/elements.js";
import { hideElement, showElement } from "../utils/elementDisplayManagement.js";
import { getDictionaryValues } from "../utils/getDictionaryValues.js";

export const UIStates = {
  default: "DEFAULT",
  player: "PLAYER",
};

/**
 * @param {Event} event
 */
export function handleUIState(event) {
  if (!getDictionaryValues(UIStates).includes(event)) {
    event = UIStates.default;
  }

  if (event == UIStates.default) {
    showElement(elements.initHeadingStart);
    hideElement(elements.header);
    hideElement(elements.subheader);
    hideElement(elements.thumbnail);
    hideElement(elements.actionsContainer);
    hideElement(elements.progressBar);
    hideElement(elements.timeManagementContainer);
  } else if (event == UIStates.player) {
    hideElement(elements.initHeadingStart);
    showElement(elements.header);
    showElement(elements.subheader);
    showElement(elements.thumbnail);
    showElement(elements.actionsContainer);
    showElement(elements.progressBar);
    showElement(elements.timeManagementContainer);
  }
}
