import { audio } from "./objects/audio.js";
import { elements } from "./objects/elements.js";

import { handleChooseMusicClick } from "./handlers/handleChooseMusicClick.js";
import { handleChooseMusicInput } from "./handlers/handleChooseMusicInput.js";
import { handleDurationChange } from "./handlers/handleDurationChange.js";
import { handleEnded } from "./handlers/handleEnded.js";
import { handleError } from "./handlers/handleError.js";
import { handleNext } from "./handlers/handleNext.js";
import { handlePlayPause } from "./handlers/handlePlayPause.js";
import { handlePrevious } from "./handlers/handlePrevious.js";
import { handleProgressBarInput } from "./handlers/handleProgressBarInput.js";
import { setCurrentThemePreference } from "./handlers/handleThemePreference.js";
import { handleTimeUpdate } from "./handlers/handleTimeUpdate.js";

setCurrentThemePreference();

audio.addEventListener("durationchange", handleDurationChange);
audio.addEventListener("ended", handleEnded);
audio.addEventListener("error", handleError);
audio.addEventListener("timeupdate", handleTimeUpdate);

elements.chooseMusicButton.addEventListener("click", handleChooseMusicClick);
elements.chooseMusicInput.addEventListener("input", handleChooseMusicInput);
elements.nextButton.addEventListener("click", handleNext);
elements.playPauseButton.addEventListener("click", handlePlayPause);
elements.previousButton.addEventListener("click", handlePrevious);
elements.progressBar.addEventListener("input", handleProgressBarInput);
