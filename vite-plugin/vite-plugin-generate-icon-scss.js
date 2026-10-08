import fs from 'node:fs'
import path from 'node:path'

const ICON_DIR = "static/comtam-css-icons/heroicon/outline/";
const OUPUT_FILE = "src/lib/comtam-css/comtam-css-icons/_icons.scss";

export function iconsScss() {
  return {
    name: 'generate-icons-scss',

    buildStart() {
      const iconsDir = path.resolve(ICON_DIR)
      const outputFile = path.resolve(OUPUT_FILE)
      const files = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'))
      const scss = files
        .map(file => {
          const name = path.basename(file, '.svg')
          return `
.ct-i-${name} {
  mask: url('/comtam-css-icons/heroicon/outline/${file}') no-repeat;
}
`
        })
        .join('')

      fs.writeFileSync(outputFile, scss)
    }
  }
}

