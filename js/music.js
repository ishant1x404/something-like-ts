document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("player");
  const play = document.getElementById("play");
  const seek = document.getElementById("seek");
  const current = document.getElementById("current");
  const duration = document.getElementById("duration");
  const volume = document.getElementById("volume");
  const back = document.getElementById("back");
  const forward = document.getElementById("forward");

  if (!audio) return;

  const fmt = seconds => {
    if (!Number.isFinite(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const sync = () => {
    current.textContent = fmt(audio.currentTime);
    duration.textContent = fmt(audio.duration);
    seek.value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  };

  play.addEventListener("click", async () => {
    if (audio.paused) {
      try { await audio.play(); } catch (_) {}
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", () => play.textContent = "Ⅱ");
  audio.addEventListener("pause", () => play.textContent = "▶");
  audio.addEventListener("timeupdate", sync);
  audio.addEventListener("loadedmetadata", sync);
  audio.addEventListener("ended", () => {
    audio.currentTime = 0;
    play.textContent = "▶";
    sync();
  });

  seek.addEventListener("input", () => {
    if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
  });

  volume.addEventListener("input", () => audio.volume = Number(volume.value));

  back.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  });

  forward.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
  });

  sync();
});
