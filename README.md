# Utah_FORGE_Geothermal_MCDA_Fuzzy

## Geothermics Project: Data Pre-processing and Visualization

This repository contains Python scripts for pre-processing and visualizing geophysical data from the study *“Integration of Geophysical Data and Multicriteria Decision Analysis for Geothermal Assessment at Utah FORGE.”*  
The scripts generate slices at **1500 m, 1000 m, 500 m, 0 m, −500 m, −1000 m** and visualize borehole validation data (density, resistivity, Vp, BHT).

### Overview
- **Goal:** provide a Python pipeline to read, process, and visualize Utah FORGE geophysical datasets.  
- **Reference:** the article PDF describes the MCDA-Fuzzy methodology and data used.  
- **Code usage flow:** these scripts **extract and organize the data of interest** which are **subsequently rasterized in ArcGIS**, **normalized**, and then **integrated with the MCDA-Fuzzy method**.  
- **Final datasets for rasterization/normalization:** https://mega.nz/folder/25IBgbhL#AnXbjhEk-ce_e45SFNuvQw

## Step-by-Step Plan
1. **Data ingestion and pre-processing**  
   - Load raw files (.csv/.txt/.las) with `pandas`.  
   - Select columns: depth, density, resistivity, Vp, BHT.
2. **Depth slicing**  
   - Filter points nearest to each target plane (1500 m, 1000 m, …).  
   - Build slice matrices for each elevation.
3. **Cleaning and normalization**  
   - Handle missing values and outliers.  
   - Apply Min–Max scaling or Z-score standardization.
4. **Intermediate visualization**  
   - Plot slice maps at each depth (matplotlib / seaborn, pyvista).
5. **Validation visualization**  
   - Plot density, resistivity, Vp, and BHT logs.  
   - Compare borehole measurements with processed geophysical models.

## Example Markdown Structure
### Data Pre-processing
1. Read original data files (.csv/.txt) with `pandas`.  
2. Filter by depth levels: [1500 m, 1000 m, 500 m, 0 m, −500 m, −1000 m].  
3. Normalize and clean missing values.

### Visualizations
- Slice maps at each depth (matplotlib / seaborn).  
- Validation plots using borehole logs.

## Technical Details
- **Libraries:** `pandas`, `numpy`, `matplotlib`, `seaborn`, `plotly`.  
- **Input format:** `.csv` and `.txt` with depth, density, resistivity, Vp, BHT.  
- **Output format:** slice images (`.png`/`.pdf`) and processed data files (`.csv`).

## Notebooks (`.ipynb`)
- **Each notebook begins with a “Summary & Data Sources” block** describing data origins, units, spatial references, and a clear summary of what the code does with the data, expected outputs, and key parameters and dependencies.

## Supplementary Material
- **`Supplementary_Material.pdf`** summarizes **data sources**, **pre-processing**, and **interpolations**, with methodological notes and cross-references to scripts and figures.  
- **Online supplementary material:** additional figures, high-resolution maps, sensitivity analyses, and validation overlays  
  https://mega.nz/folder/25IBgbhL#AnXbjhEk-ce_e45SFNuvQw

## Repositories and Scripts
- **LST (Google Earth Engine):** https://github.com/marcuslucamaral/Utah_FORGE_Geothermal_MCDA_Fuzzy/tree/main/LST  
- **Elevation slicing routines (Python):** https://github.com/marcuslucamaral/Utah_FORGE_Geothermal_MCDA_Fuzzy
