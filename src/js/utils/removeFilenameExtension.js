export function removeFilenameExtension(filename) {
  return filename.replace(/\.[^/.]+$/, "");
}
