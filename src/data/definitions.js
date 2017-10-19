const APP_DEFINITIONS = {
  "crops": {
    "title": "Crops",
    "instructions": "Select a single crop of interest or \"all crops\" to view the area where the crop(s) is grown.",
    "description": "<ul><li>These crops were selected based on their importance in the global commodities market and for food security. \"All crops\" represent all of these crops that are included in the tool as displayed in the menu.</li></ul>",
    "citation": "MapSPAM"
  },
  "water-risk": {
    "title": "Water Risk",
    "instructions": "Select an indicator to learn about current and future water risks in areas where crops are currently produced.",
    "description": "<p>The map displays the level of water risk in areas producing the crop(s) selected.</p><ul><li>Water stress measures the ratio of total annual water withdrawals to total available annual renewable supply, accounting for upstream consumptive use. Higher values indicate more competition among users.</li> <li>Interannual variability measures the variability in water supply from year to year.</li> <li>Seasonal variability measures the variation in water supply between months of the year.</li> <li>Drought severity estimates the average of the length times the dryness of droughts from 1901 to 2008. Drought is defined as a continuous period where soil moisture remains below the 20th percentile, length is measured in months, and dryness is the number of percentage points below the 20th percentile.</li> <li>Groundwater stress measures the relative ratio of groundwater withdrawal to recharge rate. Values above one indicate where unsustainable groundwater consumption could affect groundwater availability and groundwater-dependent ecosystems.</li> </ul>",
    "citation": "See WRI Aqueduct Water Risk Atlas"
  },
  "food-security": {
    "title": "Food security",
    "instructions": "Select a country-level dataset to learn about the demand, production, and trade for your selected crop(s). Or, view average kilocalories per person and share of population at risk of hunger to learn more about the country's risk of food insecurity.",
    "description": "<ul><li>Food demand for crop represents the demand for, or availability of, food in the domestic sector.</li> <li>Total crop production represents crop area harvested * crop yield.</li> <li>Crop net trade represents the amount traded, where positive values indicate greater exports than imports.</li> <li>Kilocalories per person represents the availability of calories per person.</li> <li>Share of population at risk of hunger represents the percentage of the population at risk of suffering from malnourishment.</li> </ul>",
    "citation": "IFPRI IMPACT Model"
  },
  "timeframe": {
    "title": "Timeframe",
    "instructions": "Select baseline or future years 2020, 2030, or 2040 to learn about water risk over time. In future years, select \"absolute value\" to see the projected water risk in the selected year or \"change from baseline\" to see the degree to which water risk is expected to increase or decrease over time.",
    "description": "<ul><li>Baseline represents the most recent data on crop production and water risk: 2005 crop area and 2014 water risk. Future projections use a \"business as usual\" scenario (SSP2 RCP8.5), representing a world with stable economic development and steadily rising global carbon emissions. The area where crops are grown remains constant at baseline levels for future projections of water risk.</li></ul>",
    "citation": "-"
  }
};

export default APP_DEFINITIONS;
