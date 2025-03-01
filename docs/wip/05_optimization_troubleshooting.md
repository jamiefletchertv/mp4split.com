# Performance Optimization & Troubleshooting

## Best Practices

- Align segment durations across renditions.
- Enable `--hls.no_multiplex` for separate A/V TS streams.
- Use parallel instances for large packaging jobs.
- Validate output using:
  - `MediaStreamValidator` (HLS).
  - DASH-IF Conformance Tool (DASH).

## Common Issues

### License Not Detected

```sh
mp4split --show-license
```

### Playback Stops Immediately

- Check codec compatibility.
- Validate segment durations.
- Ensure DRM signaling is correct.

### Subtitle Track Not Appearing

- Ensure subtitle AdaptationSet has `Role="subtitle"`.
- Use WebVTT for HLS if TTML is unsupported.

### Verify Output

```sh
ffprobe output.mpd
```
