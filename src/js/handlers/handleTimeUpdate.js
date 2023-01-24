import { audio } from "../objects/audio.js";
import { elements } from "../objects/elements.js";

import { formatSeconds } from "../utils/formatSeconds.js";

/**
 * @param {Event} event
 */
export function handleTimeUpdate(event) {
  if (isNaN(audio.currentTime) || isNaN(audio.duration)) {
    return;
  }

  const elapsedTime = Math.floor(audio.currentTime);
  const remainingTime = Math.floor(audio.duration) - elapsedTime;

  elements.progressBar.value = audio.currentTime;
  elements.elapsed.textContent = formatSeconds(elapsedTime);
  elements.remaining.textContent = formatSeconds(remainingTime);
}
