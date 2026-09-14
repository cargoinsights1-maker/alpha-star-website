import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import ffmpegPath from "ffmpeg-static";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(rootDir, "src/assets/videos/videobg.mp4");
const outDir = join(rootDir, "public/hero");

const scaleFilter = "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease";

function run(args) {
  execFileSync(ffmpegPath, ["-y", ...args], { stdio: "inherit" });
}

console.log("Encoding public/hero/video.mp4 (H.264)...");
run([
  "-i", source,
  "-vf", scaleFilter,
  "-c:v", "libx264",
  "-preset", "slower",
  "-crf", "33",
  "-pix_fmt", "yuv420p",
  "-movflags", "+faststart",
  "-an",
  join(outDir, "video.mp4"),
]);

// constrained-quality mode (crf + a bitrate cap) instead of crf-only: unconstrained
// VP9 CQ let the bitrate balloon past the H.264 output on this footage
console.log("Encoding public/hero/video.webm (VP9)...");
run([
  "-i", source,
  "-vf", scaleFilter,
  "-c:v", "libvpx-vp9",
  "-crf", "36",
  "-b:v", "900k",
  "-deadline", "good",
  "-cpu-used", "2",
  "-pix_fmt", "yuv420p",
  "-an",
  join(outDir, "video.webm"),
]);

console.log("Extracting public/hero/poster.jpg...");
run([
  "-ss", "1",
  "-i", source,
  "-vf", scaleFilter,
  "-frames:v", "1",
  "-q:v", "3",
  join(outDir, "poster.jpg"),
]);

console.log("Done.");
