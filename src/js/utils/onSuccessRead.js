import { audioDefaultProps } from "../objects/audio.js";
import { elements } from "../objects/elements.js";
import { state } from "../objects/state.js";
import { removeFilenameExtension } from "../utils/removeFilenameExtension.js";

/**
 * @typedef {import('@types/jsmediatags/types').Tags} JSMediaTagsTags
 * @param {{tags: JSMediaTagsTags}} result
 */
export function onSuccessRead(result) {
  const artist = result?.tags?.artist ?? audioDefaultProps.artist;
  const title =
    result?.tags?.title ??
    removeFilenameExtension(state.currentMusic.name) ??
    audioDefaultProps.title;
  const album = result?.tags?.album ?? audioDefaultProps.album;
  const pictureData = result?.tags?.picture?.data ?? [];
  const pictureFormat = result?.tags?.picture?.format ?? "";
  const base64String = pictureData.reduce((acc, cur) => {
    return `${acc}${String.fromCharCode(cur)}`;
  }, "");

  const buildThumbnailSrc = (pictureFormat, base64String) => {
    if (pictureFormat === "") {
      return audioDefaultProps.thumbnail;
    }

    return "data:" + pictureFormat + ";base64," + window.btoa(base64String);
  };

  elements.thumbnail.src = buildThumbnailSrc(pictureFormat, base64String);
  elements.thumbnail.alt = album;
  elements.thumbnail.title = album;

  elements.header.textContent = title;
  elements.header.title = title;

  elements.subheader.textContent = artist;
  elements.subheader.title = artist;
}
