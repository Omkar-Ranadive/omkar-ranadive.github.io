// Create a list of country codes for all countries you want in the map
// Country codes: https://www.iban.com/country-codes
const allCountries = [
    "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT",
    "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW",
    "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL",
    "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ",
    "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ",
    "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP",
    "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID",
    "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR",
    "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW",
    "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME",
    "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF",
    "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR",
    "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST",
    "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES",
    "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO",
    "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "UM", "US", "UY", "UZ", "VU",
    "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"
  ];
  
  const visCountries = [
  "US", "IN", "SG", "MY", "TH", "GB", "FR", "IT", "AT", "CH", "VA", "LI"
  ];
  
  const addInfo = {"US": "24 states visited", "IN": "8 states visited"}
  
  // Define colors for visited and not visited countries
  const colorVisitedTrue = '#e06666'; 
  const colorVisitedFalse = '#3d85c6';
  
  // Initialize the `values` object with default values for all countries
  const values = {};
  allCountries.forEach(countryCode => {
    values[countryCode] = { visited: false, color: colorVisitedFalse, info: null};
  });
  
  // Loop through all countries and update the color for visited countries
  for (const countryCode of visCountries) {
    const country = values[countryCode];
    country.visited = true; 
    country.color = colorVisitedTrue; 
    // Check if countryCode exists in addInfo and update country.info
    if (countryCode in addInfo) {
      country.info = addInfo[countryCode];
    }
  }
  
  // Create the svgMap object
  new svgMap({
    targetElementID: 'svgMap',
    data: {
      data: {
        visited: {
          name: 'Visited',
          format: '{0}',
        },
      info: {
        name: 'Info',
        format: '{0}'
      }
      },
    applyData: 'visited',
    values: values
  }
  });
  
  // Update the HTML element to display the length of visCountries
  document.getElementById('visitedCount').textContent = visCountries.length;