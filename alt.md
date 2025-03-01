![mp4split Logo](https://cdn.prod.website-files.com/664722cf0a7b39a4969c841a/664f1012f07959f4354a393a_Unified%20Packager.svg)

# mp4split

## Introduction

mp4split is a comprehensive tool designed to prepare your media for Adaptive Bitrate (ABR) playback across various formats such as HLS, MPEG-DASH, and Smooth Streaming. It supports DRM for secure streaming and is ready for deployment on any web server or Content Delivery Network (CDN).

## Key Features

- **Support for All Major Formats**: Package content for HLS (TS & CMAF/fMP4), MPEG-DASH, HbbTV, HDS, and Smooth Streaming (HSS).
- **Comprehensive Subtitle Support**: Easily convert between formats like WebVTT, SRT, TTML, and CEA-608.
- **Latest Codecs**: Includes support for AV1, HEVC, Dolby Atmos, Dolby AC-4, and DTS:X.
- **DRM Systems**: Compatible with FairPlay, Marlin, PlayReady, and Widevine.

## Main Benefits

- **Command Line Tool**: Operate without the need for a web server.
- **Flexible Deployment**: Deploy on-premises, in containers, or in the cloud.
- **Seamless Integration**: Fits into scripted workflows with ease.
- **High-Quality Streaming**: Stream 4K HDR with advanced audio, subtitle, and video formats.
- **Content Protection**: Supports encryption and multiple DRM systems with key rotation.
- **Accessibility**: Deliver captions and audio description tracks for enhanced accessibility.

## How It Works

mp4split uses a static workflow to package content into the required formats, ready for delivery from an origin server or CDN. This involves changing the file format or 'container' of digital content, such as converting a progressive MP4 into a fragmented MP4. Encryption and DRM can be integrated into this process.

## Installation

1. **Docker Express**: Set up VOD and Live demos using Docker.
2. **License Key**: Obtain and use a license key for full functionality.
3. **Platform-Specific Installation**: Follow instructions for Linux, Windows, or Docker environments.

## Configuration

- **Unified Origin**: Configure for basic Apache settings and virtual hosts.
- **Unified Remix**: Run statically as a command-line tool or dynamically as an Apache module.

## Best Practices

- **Content Preparation**: Validate and optimize content for streaming.
- **General Recommendations**: Follow guidelines for fragment length, timescale, and variant sets.
- **VOD and Live Streaming**: Implement caching, load balancing, and secure storage access.

## Documentation

For detailed instructions on packaging for various formats, encryption, and using cloud storage, please refer to our [Documentation](https://docs.unified-streaming.com/documentation/package/index.html).

## Support

For further assistance, please visit our [Support Page](#).

## Contact

For more information or to request a demo, please contact us at [contact@example.com](mailto:contact@example.com).
