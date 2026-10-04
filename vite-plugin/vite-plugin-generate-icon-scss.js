import fs from 'node:fs'
import path from 'node:path'

export function iconsScss() {
  return {
    name: 'generate-icons-scss',

    buildStart() {
      const iconsDir = path.resolve('static/comtam-css-icons/heroicon/outline/')
      const outputFile = path.resolve('src/lib/comtam-css-icons/_icons.scss')

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

