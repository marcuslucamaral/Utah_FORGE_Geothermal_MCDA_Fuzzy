# Utah_FORGE_Geothermal_MCDA_Fuzzy

# Geothermics Project: Data Pre‑processing and Visualization

This repository contains Python scripts for the pre‑processing and visualization of geophysical data from the study *“Integration of Geophysical Data and Multicriteria Decision Analysis for Geothermal Assessment at Utah FORGE.”* The scripts generate slices at depths of **1500 m, 1000 m, 500 m, 0 m, –500 m, and –1000 m** and visualize borehole validation data (density, resistivity, Vₚ, BHT).  

## Overview
- **Objective:** Provide a Python pipeline to read, process, and visualize the Utah FORGE geophysical datasets.  
- **Reference:** The PDF “” describes the MCDA‑Fuzzy methodology and the data used.

## Step-by‑Step Plan (Chain of Thought)
1. *Data Ingestion & Pre‑processing*  
   - Load raw files (.csv/.txt/.las) using pandas.  
   - Select columns: depth, density, resistivity, Vₚ, BHT.  
2. *Depth Slicing*  
   - Filter points nearest to each plane (1500 m, 1000 m, …).  
   - Build slice matrices for each target depth.  
3. *Cleaning & Normalization*  
   - Handle missing values and outliers.  
   - Apply Min–Max or Z‑score normalization.  
4. *Intermediate Visualization*  
   - Plot slice maps at each depth (matplotlib / seaborn, pyvista).  
5. *Validation Visualization*  
   - Plot density, resistivity, Vₚ, and BHT logs.  
   - Compare borehole measurements with the processed geophysical models.

## Example Markdown Structure  
### Data Pre‑processing
1. Read original data files (.csv/.txt) with pandas.  
2. Filter by depth levels: [1500 m, 1000 m, 500 m, 0 m, –500 m, –1000 m].  
3. Normalize and clean missing values.

### Visualizations
- Slice maps at each depth (matplotlib / seaborn).  
- Validation plots using borehole logs.

## Technical Details
- *Libraries used:* pandas, numpy, matplotlib, seaborn, plotly.  
- *Input format:* .csv and .txt files with columns for depth, density, resistivity, Vₚ, BHT.  
- *Output format:* slice images (.png/.pdf) and processed data files (.csv).  
