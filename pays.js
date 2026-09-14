// Apple désigne les pays par trois lettres (FRA, USA, JPN) ; le téléphone du
// visiteur, dans ses réglages de langue, par deux (fr-FR, en-US, ja-JP).
// Cette table fait le pont pour les 175 pays où l'abonnement est vendu.
//
// Si Apple ouvre un pays de plus, `build.js` refuse de fabriquer le site tant
// qu'il n'est pas ajouté ici : un pays oublié verrait le prix d'un autre.
module.exports = {
  AFG: 'AF', AGO: 'AO', AIA: 'AI', ALB: 'AL', ARE: 'AE', ARG: 'AR', ARM: 'AM', ATG: 'AG',
  AUS: 'AU', AUT: 'AT', AZE: 'AZ', BEL: 'BE', BEN: 'BJ', BFA: 'BF', BGR: 'BG', BHR: 'BH',
  BHS: 'BS', BIH: 'BA', BLR: 'BY', BLZ: 'BZ', BMU: 'BM', BOL: 'BO', BRA: 'BR', BRB: 'BB',
  BRN: 'BN', BTN: 'BT', BWA: 'BW', CAN: 'CA', CHE: 'CH', CHL: 'CL', CHN: 'CN', CIV: 'CI',
  CMR: 'CM', COD: 'CD', COG: 'CG', COL: 'CO', CPV: 'CV', CRI: 'CR', CYM: 'KY', CYP: 'CY',
  CZE: 'CZ', DEU: 'DE', DMA: 'DM', DNK: 'DK', DOM: 'DO', DZA: 'DZ', ECU: 'EC', EGY: 'EG',
  ESP: 'ES', EST: 'EE', FIN: 'FI', FJI: 'FJ', FRA: 'FR', FSM: 'FM', GAB: 'GA', GBR: 'GB',
  GEO: 'GE', GHA: 'GH', GMB: 'GM', GNB: 'GW', GRC: 'GR', GRD: 'GD', GTM: 'GT', GUY: 'GY',
  HKG: 'HK', HND: 'HN', HRV: 'HR', HUN: 'HU', IDN: 'ID', IND: 'IN', IRL: 'IE', IRQ: 'IQ',
  ISL: 'IS', ISR: 'IL', ITA: 'IT', JAM: 'JM', JOR: 'JO', JPN: 'JP', KAZ: 'KZ', KEN: 'KE',
  KGZ: 'KG', KHM: 'KH', KNA: 'KN', KOR: 'KR', KWT: 'KW', LAO: 'LA', LBN: 'LB', LBR: 'LR',
  LBY: 'LY', LCA: 'LC', LKA: 'LK', LTU: 'LT', LUX: 'LU', LVA: 'LV', MAC: 'MO', MAR: 'MA',
  MDA: 'MD', MDG: 'MG', MDV: 'MV', MEX: 'MX', MKD: 'MK', MLI: 'ML', MLT: 'MT', MMR: 'MM',
  MNE: 'ME', MNG: 'MN', MOZ: 'MZ', MRT: 'MR', MSR: 'MS', MUS: 'MU', MWI: 'MW', MYS: 'MY',
  NAM: 'NA', NER: 'NE', NGA: 'NG', NIC: 'NI', NLD: 'NL', NOR: 'NO', NPL: 'NP', NRU: 'NR',
  NZL: 'NZ', OMN: 'OM', PAK: 'PK', PAN: 'PA', PER: 'PE', PHL: 'PH', PLW: 'PW', PNG: 'PG',
  POL: 'PL', PRT: 'PT', PRY: 'PY', QAT: 'QA', ROU: 'RO', RUS: 'RU', RWA: 'RW', SAU: 'SA',
  SEN: 'SN', SGP: 'SG', SLB: 'SB', SLE: 'SL', SLV: 'SV', SRB: 'RS', STP: 'ST', SUR: 'SR',
  SVK: 'SK', SVN: 'SI', SWE: 'SE', SWZ: 'SZ', SYC: 'SC', TCA: 'TC', TCD: 'TD', THA: 'TH',
  TJK: 'TJ', TKM: 'TM', TON: 'TO', TTO: 'TT', TUN: 'TN', TUR: 'TR', TWN: 'TW', TZA: 'TZ',
  UGA: 'UG', UKR: 'UA', URY: 'UY', USA: 'US', UZB: 'UZ', VCT: 'VC', VEN: 'VE', VGB: 'VG',
  VNM: 'VN', VUT: 'VU', XKS: 'XK', YEM: 'YE', ZAF: 'ZA', ZMB: 'ZM', ZWE: 'ZW',
};
