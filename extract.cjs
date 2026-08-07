const fs = require('fs');

const html = fs.readFileSync('C:\\Users\\hpdhr\\.gemini\\antigravity-ide\\brain\\4c4cfa80-d576-42a8-8295-997483a6ea3c\\.system_generated\\steps\\375\\content.md', 'utf8');

// Use simple regex to find all showcase cards
const h3Regex = /<h3 class="text-lg font-semibold">([^<]+)<\/h3>/g;
let match;
const clients = [];

while ((match = h3Regex.exec(html)) !== null) {
  clients.push(match[1]);
}

console.log("Clients found:", [...new Set(clients)]);

const imgRegex = /src="(\/_next\/image\?url=%2Fshowcase%2Fshowcase-[^&]+&amp;w=640&amp;q=75)"/g;
let imgMatch;
const imgs = [];
while ((imgMatch = imgRegex.exec(html)) !== null) {
  imgs.push(decodeURIComponent(imgMatch[1].replace('/_next/image?url=', '').replace('&amp;w=640&amp;q=75', '')));
}
console.log("Images found:", [...new Set(imgs)]);
