# Commands & Usage

## Basic Packaging

```sh
mp4split -o movie.ismv movie.mp4
```

## Selecting Tracks

```sh
mp4split -o audio.isma input.mp4 --track_type=audio
```

## Multi-Bitrate Packaging

```sh
mp4split --package_hls -o 1080p/prog_index.m3u8 video_1080p.mp4
mp4split --package_hls -o 720p/prog_index.m3u8 video_720p.mp4
mp4split --package_hls -o master.m3u8 1080p/prog_index.m3u8 720p/prog_index.m3u8
```

## DRM Encryption

```sh
mp4split -o video_enc.cmfv   --cenc.key=ABCDE1234567890ABCDE1234567890AB:00112233445566778899AABBCCDDEEFF   --widevine.drm_specific_data=<Base64PSSH>   movie.mp4
```

## Adding Subtitles

```sh
mp4split -o subs-en.cmft movie.en.srt --track_language=eng

mp4split --package_mpd -o stream_with_subs.mpd   video_enc.cmfv audio_enc.cmfa subs-en.cmft
```
