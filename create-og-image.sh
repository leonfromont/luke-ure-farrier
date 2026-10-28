#!/bin/bash
# Renders images/og-image.svg to a 1200x630 PNG for Open Graph / social sharing.
# Requires rsvg-convert (package: librsvg2-bin).

set -e
cd "$(dirname "$0")"
rsvg-convert -w 1200 -h 630 images/og-image.svg -o images/og-image.png
echo "Wrote images/og-image.png ($(du -h images/og-image.png | cut -f1))"
