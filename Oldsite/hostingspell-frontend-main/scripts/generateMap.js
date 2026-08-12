const fs = require("fs");
const { getMapJSON } = require("dotted-map");

const map = getMapJSON({ height: 100, grid: "diagonal" });

// Save it as actual JSON, NOT a string
fs.writeFileSync("lib/precomputedMap.json", JSON.stringify(map, null, 2));
