import { handleUIState, UIStates } from "../handlers/handleUIState.js";
import { state } from "../objects/state.js";
import { setCurrentMusic } from "../utils/setCurrentMusic.js";

/**
 * @param {Event} event
 */
export async function handleChooseMusicInput(event) {
  /**
   * @type {File[]}
   */
  const files = event?.target?.files ?? [];

  if (!files?.length) {
    handleUIState(UIStates.default);
    return;
  }
  handleUIState(UIStates.player);

  state.playlist = Array.from(files);

  await setCurrentMusic(state.playlist[0]);
}
