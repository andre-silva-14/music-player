import { audio } from "../objects/audio.js";
import { state } from "../objects/state.js";

import { getMusicIndex } from "../utils/getMusicIndex.js";
import { setCurrentMusic } from "../utils/setCurrentMusic.js";

/**
 * @param {Event} event
 */
export async function handleNext(event) {
  if (!state.currentMusic) {
    return;
  }

  const index = getMusicIndex("next");
  const music = state.playlist[index];
  const isCurrentPlaying = !audio.paused;

  await setCurrentMusic(music);

  if (isCurrentPlaying) {
    audio.play();
  }
}
