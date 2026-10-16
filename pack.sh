#!/usr/bin/env bash

CSS_FOLDER="./target-css"
TEMP_FOLDER="./comtam-css"

FONT_FOLDER="./static/comtam-css-font"
ICON_FOLDER="./static/comtam-css-icons"
ZIP_FILE="comtam-css_$VERSION.zip"

rm -rf "$TEMP_FOLDER"
mkdir -p "$TEMP_FOLDER"

cp -r "$FONT_FOLDER" "$TEMP_FOLDER/"
cp -r "$ICON_FOLDER" "$TEMP_FOLDER/"
cp "$CSS_FOLDER/main.css" "$TEMP_FOLDER/"
zip -r "$ZIP_FILE" "$TEMP_FOLDER" > /dev/null

# Clean up
rm -rf "$TEMP_FOLDER"
rm -rf "$CSS_FOLDER"

echo build successfully
