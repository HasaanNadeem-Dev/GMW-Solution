const fs = require('fs')

const html = fs.readFileSync('gwm-solutions.html', 'utf8')
const m = html.match(/src="data:image\/(png|jpeg);base64,([^"]+)"/)

if (!m) {
  console.error('No embedded base64 image found.')
  process.exit(1)
}

fs.mkdirSync('public', { recursive: true })
const outPath = `public/logo.${m[1]}`
fs.writeFileSync(outPath, Buffer.from(m[2], 'base64'))
console.log(`Wrote ${outPath}`)

