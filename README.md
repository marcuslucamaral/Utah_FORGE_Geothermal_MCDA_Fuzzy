# Utah_FORGE_Geothermal_MCDA_Fuzzy

## Projeto Geothermics: Pré-processamento e Visualização de Dados

Este repositório contém scripts em Python para o pré-processamento e a visualização de dados geofísicos do estudo *“Integration of Geophysical Data and Multicriteria Decision Analysis for Geothermal Assessment at Utah FORGE.”*  
Os scripts geram cortes nas profundidades de **1500 m, 1000 m, 500 m, 0 m, −500 m e −1000 m** e visualizam dados de validação de poços (densidade, resistividade, Vₚ, BHT).

### Visão Geral
- **Objetivo:** fornecer um pipeline em Python para ler, processar e visualizar os conjuntos de dados geofísicos do Utah FORGE.  
- **Referência:** o PDF do artigo descreve a metodologia MCDA-Fuzzy e os dados utilizados.  
- **Fluxo de uso dos códigos:** os scripts **extraem e organizam os dados de interesse** para que, **posteriormente**, esses dados sejam **rasterizados no ArcGIS**, **normalizados** e então **integrados pelo método MCDA-Fuzzy**.  
- **Fonte dos dados finais para rasterização/normalização:** https://mega.nz/folder/25IBgbhL#AnXbjhEk-ce_e45SFNuvQw

## Plano Passo a Passo
1. **Ingestão e pré-processamento de dados**  
   - Carregar arquivos brutos (.csv/.txt/.las) usando `pandas`.  
   - Selecionar colunas: profundidade, densidade, resistividade, Vₚ, BHT.
2. **Cortes em profundidade**  
   - Filtrar pontos mais próximos de cada plano (1500 m, 1000 m, …).  
   - Construir matrizes de cortes para cada profundidade alvo.
3. **Limpeza e normalização**  
   - Tratar valores ausentes e outliers.  
   - Aplicar normalização Min–Max ou padronização Z-score.
4. **Visualização intermediária**  
   - Plotar mapas de cortes em cada profundidade (matplotlib / seaborn, pyvista).
5. **Visualização de validação**  
   - Plotar perfis de densidade, resistividade, Vₚ e BHT.  
   - Comparar medições de poços com os modelos geofísicos processados.

## Exemplo de Estrutura em Markdown
### Pré-processamento de Dados
1. Ler arquivos de dados originais (.csv/.txt) com `pandas`.  
2. Filtrar pelos níveis de profundidade: [1500 m, 1000 m, 500 m, 0 m, −500 m, −1000 m].  
3. Normalizar e limpar valores ausentes.

### Visualizações
- Mapas de cortes em cada profundidade (matplotlib / seaborn).  
- Gráficos de validação usando registros de poços.

## Detalhes Técnicos
- **Bibliotecas usadas:** `pandas`, `numpy`, `matplotlib`, `seaborn`, `plotly`.  
- **Formato de entrada:** arquivos `.csv` e `.txt` com colunas de profundidade, densidade, resistividade, Vₚ, BHT.  
- **Formato de saída:** imagens dos cortes (`.png`/`.pdf`) e arquivos de dados processados (`.csv`).

## Notebooks (`.ipynb`)
- **Cada notebook começa com um bloco “Resumo & Fontes de Dados”** que descreve as origens dos dados, unidades e referências espaciais, além de um resumo do que o código faz com esses dados, as saídas geradas e os principais parâmetros e dependências.

## Material Suplementar
- **`Supplementary_Material.pdf`**: resumo das fontes de dados, do pré-processamento e das interpolações realizadas, com notas metodológicas e referências cruzadas a scripts e figuras.  
- **Material suplementar on-line:** figuras adicionais, mapas em alta resolução, análises de sensibilidade e sobreposições de validação em  
  https://mega.nz/folder/25IBgbhL#AnXbjhEk-ce_e45SFNuvQw

## Repositórios e Scripts
- **LST (Google Earth Engine):** https://github.com/marcuslucamaral/Utah_FORGE_Geothermal_MCDA_Fuzzy/tree/main/LST  
- **Rotinas de cortes por elevação (Python):** https://github.com/marcuslucamaral/Utah_FORGE_Geothermal_MCDA_Fuzzy
