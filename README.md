# Texture Atlas Splitter

A Node.js tool that splits a texture atlas into individual image files based on metadata.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create an `input` directory and place your files there:
   - `texatlas.png` - your texture atlas image
   - `atlasmeta.json` - metadata file with coordinates

The metadata file should follow this format:
```json
{
    "texture1": {
        "x": 0,
        "y": 0,
        "width": 100,
        "height": 100
    },
    "texture2": {
        "x": 100,
        "y": 0,
        "width": 100,
        "height": 100
    }
}
```

3. Run the application:
```bash
npm start
```

The split images will be saved in the `output` directory.
