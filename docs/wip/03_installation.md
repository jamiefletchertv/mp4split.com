# Installation & Setup

## Prerequisites

- Valid Unified Streaming license key (`UspLicenseKey`).
- Microsoft Visual C++ Redistributable (Windows).
- Python 3.x (for manifest editing).
- Docker (for macOS usage).

## Installation on Linux

```sh
# Add package repository (replace with the correct URL for your distro)
echo "deb [trusted=yes] https://example-repo.com stable main" | sudo tee /etc/apt/sources.list.d/unified.list

# Install mp4split
sudo apt-get update && sudo apt-get install mp4split

# Verify installation
mp4split --version
```

## Installation on Windows

```sh
# Download and unzip the package
Expand-Archive -Path mp4split_<version>.zip -DestinationPath "C:\Program Files\Unified Streaming"

# Add to PATH (optional)
[System.Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\Unified Streaming\bin", [System.EnvironmentVariableTarget]::Machine)

# Verify installation
mp4split --version
```

## Installation on macOS (via Docker)

```sh
export UspLicenseKey=<YOUR_BASE64_LICENSE_KEY>

docker run -it -e UspLicenseKey -v "$PWD":/data -w /data unifiedstreaming/mp4split:latest   mp4split -o output.mpd input.mp4
```
