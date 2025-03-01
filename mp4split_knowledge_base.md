# mp4split (Unified Packager) Knowledge Base

## Overview

**mp4split (Unified Packager)** is a command-line tool for preparing media content for streaming. It packages source MP4 files into segmented formats suitable for Adaptive Bitrate (ABR) playback (HLS, MPEG-DASH, CMAF, etc.), and can optionally encrypt content for DRM protection. The output is ready to serve from a standard web server or CDN to a variety of devices.

In a **static packaging** workflow, `mp4split` converts media files into the required segments and manifests for each streaming format in advance, duplicating the content for each format on disk.

## Key Features

- **Multiple Streaming Formats**: Supports HLS, DASH, CMAF, HbbTV, HDS, and MSS.
- **Subtitle & Caption Support**: Handles WebVTT, SRT, TTML (IMSC1), CEA-608/708.
- **Codec Compatibility**: Supports AV1, HEVC (H.265), H.264/AVC, Dolby Atmos, DTS:X.
- **DRM Integration**: Widevine, PlayReady, FairPlay, Marlin.
- **Command-Line Tool**: CLI-based, automatable in media pipelines.
- **Flexible Deployment**: Works on-prem, in containers, or in the cloud.
- **High-Quality Streaming**: 4K HDR, multi-language audio & subtitles.
- **Content Protection**: AES-128, CBCS, multi-key DRM support.
- **Accessibility**: Closed captions, subtitles, alternate audio.

---

## Installation & Setup

### Prerequisites

- Valid Unified Streaming license key (`UspLicenseKey`).
- Microsoft Visual C++ Redistributable (Windows).
- Python 3.x (for manifest editing).
- Docker (for macOS usage).

### Installation on Linux

```sh
# Add package repository (replace with the correct URL for your distro)
echo "deb [trusted=yes] https://example-repo.com stable main" | sudo tee /etc/apt/sources.list.d/unified.list

# Install mp4split
sudo apt-get update && sudo apt-get install mp4split

# Verify installation
mp4split --version
```

### Installation on Windows

```sh
# Download and unzip the package
Expand-Archive -Path mp4split_<version>.zip -DestinationPath "C:\Program Files\Unified Streaming"

# Add to PATH (optional)
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\Unified Streaming\bin", [System.EnvironmentVariableTarget]::Machine)

# Verify installation
mp4split --version
```

### Installation on macOS (via Docker)

```sh
export UspLicenseKey=<YOUR_BASE64_LICENSE_KEY>

docker run -it -e UspLicenseKey -v "$PWD":/data -w /data unifiedstreaming/mp4split:latest   mp4split -o output.mpd input.mp4
```

---

## Commands & Usage

### Basic Packaging

```sh
mp4split -o movie.ismv movie.mp4
```

### Selecting Tracks

```sh
mp4split -o audio.isma input.mp4 --track_type=audio
```

### Multi-Bitrate Packaging

```sh
mp4split --package_hls -o 1080p/prog_index.m3u8 video_1080p.mp4
mp4split --package_hls -o 720p/prog_index.m3u8 video_720p.mp4
mp4split --package_hls -o master.m3u8 1080p/prog_index.m3u8 720p/prog_index.m3u8
```

### DRM Encryption

```sh
mp4split -o video_enc.cmfv   --cenc.key=ABCDE1234567890ABCDE1234567890AB:00112233445566778899AABBCCDDEEFF   --widevine.drm_specific_data=<Base64PSSH>   movie.mp4
```

### Adding Subtitles

```sh
mp4split -o subs-en.cmft movie.en.srt --track_language=eng

mp4split --package_mpd -o stream_with_subs.mpd   video_enc.cmfv audio_enc.cmfa subs-en.cmft
```

---

## Performance Optimization & Troubleshooting

### Best Practices

- Align segment durations across renditions.
- Enable `--hls.no_multiplex` for separate A/V TS streams.
- Use parallel instances for large packaging jobs.
- Validate output using:
  - `MediaStreamValidator` (HLS).
  - DASH-IF Conformance Tool (DASH).

### Common Issues

#### License Not Detected

```sh
mp4split --show-license
```

#### Playback Stops Immediately

- Check codec compatibility.
- Validate segment durations.
- Ensure DRM signaling is correct.

#### Subtitle Track Not Appearing

- Ensure subtitle AdaptationSet has `Role="subtitle"`.
- Use WebVTT for HLS if TTML is unsupported.

#### Verify Output

```sh
ffprobe output.mpd
```

---

## Examples & Tutorials

### Example 1: Package HLS

```sh
mp4split --package_hls -o trailer.m3u8 trailer.mp4
```

### Example 2: Package DASH with Encryption

```sh
mp4split --package_mpd -o stream.mpd   video_enc.cmfv audio_enc.cmfa
```

### Example 3: Convert SRT to WebVTT

```sh
mp4split -o subtitles.vtt movie.en.srt
```

---

## Conclusion

This knowledge base serves as a comprehensive guide to using `mp4split` for static packaging of adaptive streaming formats. By leveraging Unified Packager’s features, you can efficiently prepare media for delivery across multiple platforms, ensuring high-quality playback and content protection.
