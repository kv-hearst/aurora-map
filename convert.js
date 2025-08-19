const fs = require('fs');
console.log('Reading aurora_data.json...');
const data = JSON.parse(fs.readFileSync('aurora_data.json'));

console.log(`Found ${data.coordinates.length} coordinate points`);

const geoJSON = {
  "type": "FeatureCollection", 
  "features": data.coordinates.map(coord => ({
    "type": "Feature",
    "geometry": {
      "type": "Point", 
      "coordinates": [coord[0], coord[1]]
    },
    "properties": {
      "aurora": coord[2]
    }
  }))
};

fs.writeFileSync('aurora.geojson', JSON.stringify(geoJSON, null, 2));
console.log('✅ Successfully created aurora.geojson');