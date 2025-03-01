# Examples & Tutorials

## Example 1: Package HLS

```sh
mp4split --package_hls -o trailer.m3u8 trailer.mp4
```

## Example 2: Package DASH with Encryption

```sh
mp4split --package_mpd -o stream.mpd   video_enc.cmfv audio_enc.cmfa
```

## Example 3: Convert SRT to WebVTT

```sh
mp4split -o subtitles.vtt movie.en.srt
```
