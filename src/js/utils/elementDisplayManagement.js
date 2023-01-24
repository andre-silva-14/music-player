export function hideElement(elem) {
  elem.classList.add("hidden-elem");
}

export function showElement(elem) {
  elem.classList.remove("hidden-elem");
}

export function isHiddenElement(elem) {
  return elem.classList.contains("hidden-elem");
}
