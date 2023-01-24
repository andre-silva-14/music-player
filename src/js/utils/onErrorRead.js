import { audioDefaultProps } from "../objects/audio.js";
import { elements } from "../objects/elements.js";
import { state } from "../objects/state.js";
import { removeFilenameExtension } from "../utils/removeFilenameExtension.js";

/**
 * @typedef {import('@types/jsmediatags/types').jsmediatagsError} JSMediaTagsError
 * @param {JSMediaTagsError} error
 */
export function onErrorRead(error) {
  console.error(error);

  const title =
    removeFilenameExtension(state.currentMusic.name) || audioDefaultProps.title;
  const artist = audioDefaultProps.artist;

  elements.thumbnail.src = audioDefaultProps.thumbnail;
  elements.thumbnail.alt = "";
  elements.thumbnail.title = "";

  elements.header.textContent = title;
  elements.header.title = title;

  elements.subheader.textContent = artist;
  elements.subheader.title = artist;
}
