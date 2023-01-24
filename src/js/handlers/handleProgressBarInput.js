import { audio } from "../objects/audio.js";

/**
 * @param {Event} event
 */
export function handleProgressBarInput(event) {
  audio.currentTime = event?.target?.value ?? 0;
}
