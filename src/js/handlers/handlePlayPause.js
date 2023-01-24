import { audio } from "../objects/audio.js";
import { elements } from "../objects/elements.js";
import { state } from "../objects/state.js";

/**
 * @param {Event} event
 */
export function handlePlayPause(event) {
  if (!state.currentMusic) {
    return;
  }

  const playPauseIcon = elements.playPauseButton.querySelector("svg");

  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.add("fa-pause");
    playPauseIcon.classList.remove("fa-play");
  } else {
    audio.pause();
    playPauseIcon.classList.add("fa-play");
    playPauseIcon.classList.remove("fa-pause");
  }
}
