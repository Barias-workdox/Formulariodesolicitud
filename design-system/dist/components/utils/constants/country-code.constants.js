const A = [
  "AFG",
  // Afghanistan
  "ALB",
  // Albania
  "DZA",
  // Algeria
  "AND",
  // Andorra
  "AGO",
  // Angola
  "ATG",
  // Antigua and Barbuda
  "ARG",
  // Argentina
  "ARM",
  // Armenia
  "AUS",
  // Australia
  "AUT",
  // Austria
  "AZE",
  // Azerbaijan
  "BHS",
  // Bahamas
  "BHR",
  // Bahrain
  "BGD",
  // Bangladesh
  "BRB",
  // Barbados
  "BLR",
  // Belarus
  "BEL",
  // Belgium
  "BLZ",
  // Belize
  "BEN",
  // Benin
  "BTN",
  // Bhutan
  "BOL",
  // Bolivia (Plurinational State of)
  "BIH",
  // Bosnia and Herzegovina
  "BWA",
  // Botswana
  "BRA",
  // Brazil
  "BRN",
  // Brunei Darussalam
  "BGR",
  // Bulgaria
  "BFA",
  // Burkina Faso
  "BDI",
  // Burundi
  "KHM",
  // Cambodia
  "CMR",
  // Cameroon
  "CAN",
  // Canada
  "CPV",
  // Cabo Verde
  "CAF",
  // Central African Republic
  "TCD",
  // Chad
  "CHL",
  // Chile
  "CHN",
  // China
  "COL",
  // Colombia
  "COM",
  // Comoros
  "COG",
  // Congo
  "COD",
  // Congo, Democratic Republic of the
  "CRI",
  // Costa Rica
  "CIV",
  // Côte d'Ivoire
  "HRV",
  // Croatia
  "CUB",
  // Cuba
  "CYP",
  // Cyprus
  "CZE",
  // Czechia
  "DNK",
  // Denmark
  "DJI",
  // Djibouti
  "DMA",
  // Dominica
  "DOM",
  // Dominican Republic
  "ECU",
  // Ecuador
  "EGY",
  // Egypt
  "SLV",
  // El Salvador
  "GNQ",
  // Equatorial Guinea
  "ERI",
  // Eritrea
  "EST",
  // Estonia
  "SWZ",
  // Eswatini
  "ETH",
  // Ethiopia
  "FJI",
  // Fiji
  "FIN",
  // Finland
  "FRA",
  // France
  "GAB",
  // Gabon
  "GMB",
  // Gambia
  "GEO",
  // Georgia
  "DEU",
  // Germany
  "GHA",
  // Ghana
  "GRC",
  // Greece
  "GRD",
  // Grenada
  "GTM",
  // Guatemala
  "GIN",
  // Guinea
  "GNB",
  // Guinea-Bissau
  "GUY",
  // Guyana
  "HTI",
  // Haiti
  "HND",
  // Honduras
  "HUN",
  // Hungary
  "ISL",
  // Iceland
  "IND",
  // India
  "IDN",
  // Indonesia
  "IRN",
  // Iran (Islamic Republic of)
  "IRQ",
  // Iraq
  "IRL",
  // Ireland
  "ISR",
  // Israel
  "ITA",
  // Italy
  "JAM",
  // Jamaica
  "JPN",
  // Japan
  "JOR",
  // Jordan
  "KAZ",
  // Kazakhstan
  "KEN",
  // Kenya
  "KIR",
  // Kiribati
  "PRK",
  // Korea (Democratic People's Republic of)
  "KOR",
  // Korea (Republic of)
  "KWT",
  // Kuwait
  "KGZ",
  // Kyrgyzstan
  "LAO",
  // Lao People's Democratic Republic
  "LVA",
  // Latvia
  "LBN",
  // Lebanon
  "LSO",
  // Lesotho
  "LBR",
  // Liberia
  "LBY",
  // Libya
  "LIE",
  // Liechtenstein
  "LTU",
  // Lithuania
  "LUX",
  // Luxembourg
  "MDG",
  // Madagascar
  "MWI",
  // Malawi
  "MYS",
  // Malaysia
  "MDV",
  // Maldives
  "MLI",
  // Mali
  "MLT",
  // Malta
  "MHL",
  // Marshall Islands
  "MRT",
  // Mauritania
  "MUS",
  // Mauritius
  "MEX",
  // Mexico
  "FSM",
  // Micronesia (Federated States of)
  "MDA",
  // Moldova (Republic of)
  "MCO",
  // Monaco
  "MNG",
  // Mongolia
  "MNE",
  // Montenegro
  "MAR",
  // Morocco
  "MOZ",
  // Mozambique
  "MMR",
  // Myanmar
  "NAM",
  // Namibia
  "NRU",
  // Nauru
  "NPL",
  // Nepal
  "NLD",
  // Netherlands
  "NZL",
  // New Zealand
  "NIC",
  // Nicaragua
  "NER",
  // Niger
  "NGA",
  // Nigeria
  "MKD",
  // North Macedonia
  "NOR",
  // Norway
  "OMN",
  // Oman
  "PAK",
  // Pakistan
  "PLW",
  // Palau
  "PAN",
  // Panama
  "PNG",
  // Papua New Guinea
  "PRY",
  // Paraguay
  "PER",
  // Peru
  "PHL",
  // Philippines
  "POL",
  // Poland
  "PRT",
  // Portugal
  "QAT",
  // Qatar
  "ROU",
  // Romania
  "RUS",
  // Russian Federation
  "RWA",
  // Rwanda
  "KNA",
  // Saint Kitts and Nevis
  "LCA",
  // Saint Lucia
  "VCT",
  // Saint Vincent and the Grenadines
  "WSM",
  // Samoa
  "SMR",
  // San Marino
  "STP",
  // Sao Tome and Principe
  "SAU",
  // Saudi Arabia
  "SEN",
  // Senegal
  "SRB",
  // Serbia
  "SYC",
  // Seychelles
  "SLE",
  // Sierra Leone
  "SGP",
  // Singapore
  "SVK",
  // Slovakia
  "SVN",
  // Slovenia
  "SLB",
  // Solomon Islands
  "SOM",
  // Somalia
  "ZAF",
  // South Africa
  "SSD",
  // South Sudan
  "ESP",
  // Spain
  "LKA",
  // Sri Lanka
  "SDN",
  // Sudan
  "SUR",
  // Suriname
  "SWE",
  // Sweden
  "CHE",
  // Switzerland
  "SYR",
  // Syrian Arab Republic
  "TJK",
  // Tajikistan
  "TZA",
  // Tanzania, United Republic of
  "THA",
  // Thailand
  "TLS",
  // Timor-Leste
  "TGO",
  // Togo
  "TON",
  // Tonga
  "TTO",
  // Trinidad and Tobago
  "TUN",
  // Tunisia
  "TUR",
  // Turkey
  "TKM",
  // Turkmenistan
  "TUV",
  // Tuvalu
  "UGA",
  // Uganda
  "UKR",
  // Ukraine
  "ARE",
  // United Arab Emirates
  "GBR",
  // United Kingdom of Great Britain and Northern Ireland
  "USA",
  // United States of America
  "URY",
  // Uruguay
  "UZB",
  // Uzbekistan
  "VUT",
  // Vanuatu
  "VEN",
  // Venezuela (Bolivarian Republic of)
  "VNM",
  // Viet Nam
  "YEM",
  // Yemen
  "ZMB",
  // Zambia
  "ZWE"
  // Zimbabwe
], M = [
  "VAT"
  // Holy See (Vatican City State)
], R = [
  "ALA",
  // Åland Islands
  "ABW",
  // Aruba
  "AIA",
  // Anguilla
  "ASM",
  // American Samoa
  "BES",
  // Bonaire, Sint Eustatius and Saba
  "BMU",
  // Bermuda
  "BVT",
  // Bouvet Island
  "IOT",
  // British Indian Ocean Territory
  "CXR",
  // Christmas Island
  "CCK",
  // Cocos (Keeling) Islands
  "COK",
  // Cook Islands
  "CUW",
  // Curaçao
  "CYM",
  // Cayman Islands
  "FRO",
  // Faroe Islands
  "FLK",
  // Falkland Islands (Malvinas)
  "GIB",
  // Gibraltar
  "GLP",
  // Guadeloupe
  "GRL",
  // Greenland
  "GUF",
  // French Guiana
  "GGY",
  // Guernsey
  "HMD",
  // Heard Island and McDonald Islands
  "HKG",
  // Hong Kong
  "IMN",
  // Isle of Man
  "JEY",
  // Jersey
  "MAF",
  // Saint Martin (French part)
  "MYT",
  // Mayotte
  "MSR",
  // Montserrat
  "NCL",
  // New Caledonia
  "NFK",
  // Norfolk Island
  "MNP",
  // Northern Mariana Islands
  "PCN",
  // Pitcairn
  "PYF",
  // French Polynesia
  "REU",
  // Réunion
  "BLM",
  // Saint Barthélemy
  "SHN",
  // Saint Helena, Ascension and Tristan da Cunha
  "SXM",
  // Sint Maarten (Dutch part)
  "SGS",
  // South Georgia and the South Sandwich Islands
  "SPM",
  // Saint Pierre and Miquelon
  "SJM",
  // Svalbard and Jan Mayen
  "TCA",
  // Turks and Caicos Islands
  "TKL",
  // Tokelau
  "UMI",
  // United States Minor Outlying Islands
  "VGB",
  // Virgin Islands (British)
  "VIR",
  // Virgin Islands (U.S.)
  "WLF"
  // Wallis and Futuna
], N = [
  "ATA",
  // Antarctica
  "ATF",
  // French Southern Territories
  "ESH"
  // Western Sahara
], S = [
  "XKX",
  // Kosovo
  "TWN"
  // Taiwan (Province of China)
], C = [
  ...A,
  ...M,
  ...R,
  ...S,
  ...N
];
export {
  C as allCountryCodes,
  M as nonUnSovereignCountryCodes,
  S as otherCodes,
  A as sovereignCountryCodes,
  N as specialAreaCodes,
  R as territoryCodes
};
//# sourceMappingURL=country-code.constants.js.map
