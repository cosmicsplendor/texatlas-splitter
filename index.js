const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = './input';
const OUTPUT_DIR = './output';

async function main() {
    try {
        // Create output directory if it doesn't exist
        await fs.mkdir(OUTPUT_DIR, { recursive: true });

        // Read atlas metadata
        const metadataPath = path.join(INPUT_DIR, 'atlasmeta.json');
        const atlasPath = path.join(INPUT_DIR, 'texatlas.png');

        const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf8'));
        
        // Process each subtexture
        for (const [textureName, coords] of Object.entries(metadata)) {
            console.log(`Processing ${textureName}...`);
            
            await sharp(atlasPath)
                .extract({
                    left: coords.x,
                    top: coords.y,
                    width: coords.rotation == 90 ? coords.height : coords.width,
                    height: coords.rotation == 90 ? coords.width : coords.height
                })
                .rotate(-coords.rotation ?? 0)
                .toFile(path.join(OUTPUT_DIR, `${textureName}.png`));
        }

        console.log('All textures have been extracted successfully!');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
