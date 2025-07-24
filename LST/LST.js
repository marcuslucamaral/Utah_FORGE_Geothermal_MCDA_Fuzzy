// Summary:
// - Cloud and shadow masking using QA_PIXEL band.
// - Load Landsat 8 Surface Reflectance and Temperature Collection, apply cloud mask, and create a median composite.
// - Compute NDVI and clamp values between 0 and 1.
// - Estimate surface emissivity from NDVI (Pv = NDVI^2) and clamp between 0.97 and 0.99.
// - Convert the ST_B10 band to brightness temperature in Kelvin.
// - Calculate Land Surface Temperature (LST) using the Planck inversion formula and subtract 273.15 to convert to °C.
// - Visualize LST layer with a color palette and center map on area of interest.
// - Export LST raster as GeoTIFF to Google Drive at 30 m resolution.
//
// Objective:
// Automate the calculation and export of Land Surface Temperature (LST) from Landsat 8 data using cloud masking, NDVI-based emissivity correction, and Planck's equation inversion.
//
// Reference:
// https://www.sciencedirect.com/science/article/pii/S2949891023006206
//

// 1. Cloud mask for Collection 2 Level 2 (L2 - Surface Reflectance)
function maskLandsatC2L2(image) {
  var qa = image.select('QA_PIXEL');
  var cloud = qa.bitwiseAnd(1 << 3).eq(0);        // cloud bit
  var cloudShadow = qa.bitwiseAnd(1 << 4).eq(0);  // cloud shadow bit
  return image.updateMask(cloud).updateMask(cloudShadow);
}

// 2. Load Collection 2 Level 2 (Surface Reflectance + Temperature)
var col = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
  .filterDate('2022-10-01', '2022-10-10') // Example autumn
  .filterBounds(geometry)
  .map(maskLandsatC2L2)
  .median()
  .clip(geometry);

// 3. NDVI calculation from SR bands
var ndvi = col.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI');
var ndvi_clamped = ndvi.clamp(0, 1);

// 4. Calculate proportional vegetation (Pv) and emissivity
var pv = ndvi_clamped.pow(2).rename('Pv');
var emissivity = pv.multiply(0.004).add(0.986).clamp(0.97, 0.99).rename('Emissivity');

// 5. Brightness Temperature: ST_B10 already in raw units; apply scale factor
// Metadata: scale = 0.00341802, offset = 149.0 → Converts to Kelvin
var BT = col.select('ST_B10').multiply(0.00341802).add(149.0).rename('BT');

// 6. Convert BT to LST using emissivity
var lambda = 10.895e-6;
var rho = 1.438e-2;

var LST = BT.expression(
  '(BT / (1 + ((lambda * BT / rho) * log(e)))) - 273.15',
  {
    'BT': BT,
    'e': emissivity,
    'lambda': lambda,
    'rho': rho
  }).rename('LST');

// 7. Visualization
var lstParams = {
  min: 20,
  max: 45,
  palette: ['blue', 'green', 'yellow', 'orange', 'red']
};
Map.centerObject(geometry, 9);
Map.addLayer(LST, lstParams, 'LST (°C)');

// 8. Export to Google Drive
Export.image.toDrive({
  image: LST,
  description: 'LST_Landsat8_C2_L2',
  folder: 'EarthEngine',
  scale: 30,
  region: geometry,
  maxPixels: 1e13
});
