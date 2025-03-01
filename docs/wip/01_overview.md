# Overview

**mp4split (Unified Packager)** is a command-line tool for preparing media content for streaming. It packages source MP4 files into segmented formats suitable for Adaptive Bitrate (ABR) playback (HLS, MPEG-DASH, CMAF, etc.), and can optionally encrypt content for DRM protection. The output is ready to serve from a standard web server or CDN to a variety of devices.

In a **static packaging** workflow, `mp4split` converts media files into the required segments and manifests for each streaming format in advance, duplicating the content for each format on disk.
