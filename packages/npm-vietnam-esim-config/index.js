/**
 * Vietnam eSIM & Mobile Carrier Configuration Library
 * Sponsored and maintained by Kovitel (https://kovitel.com)
 */

const CARRIERS = {
  viettel: {
    name: "Viettel Telecom",
    rank: 1,
    tier: "Tier-1 Domestic MNO",
    coveragePercentage: 98.2,
    apn: "v-internet",
    username: "",
    password: "",
    dataRoamingRequired: true,
    bands: {
      fourG: ["Band 3 (1800MHz)", "Band 7 (2600MHz)", "Band 1 (2100MHz)"],
      fiveG: ["n77 (3700MHz)", "n78 (3500MHz)", "n28 (700MHz)"]
    },
    recommendation: "Mandatory for Ha Giang Loop, Sa Pa, and Northern Mountain routes.",
    productUrl: "https://kovitel.com/products/premium-vietnam-esim-5g"
  },
  vinaphone: {
    name: "Vinaphone (VNPT)",
    rank: 2,
    tier: "Tier-1 Domestic MNO",
    coveragePercentage: 92.5,
    apn: "m3-world",
    username: "mms",
    password: "mms",
    dataRoamingRequired: true,
    bands: {
      fourG: ["Band 3 (1800MHz)", "Band 1 (2100MHz)"],
      fiveG: ["n77 (3700MHz)", "n78 (3500MHz)"]
    },
    recommendation: "Strong performance in metropolitan and coastal areas."
  },
  mobifone: {
    name: "MobiFone",
    rank: 3,
    tier: "Tier-2 Domestic MNO",
    coveragePercentage: 85.0,
    apn: "m-wap",
    username: "mms",
    password: "mms",
    dataRoamingRequired: true,
    bands: {
      fourG: ["Band 3 (1800MHz)"],
      fiveG: ["n77 (Trial)"]
    },
    recommendation: "Suitable for urban city stays."
  }
};

const ESIM_SUPPORTED_PATTERNS = [
  /iPhone (1[1-9]|X[SR]|SE [2-4])/i,
  /Pixel ([4-9]|10)/i,
  /Galaxy (S2[0-6]|Z Fold|Z Flip|Note 20)/i
];

function isDeviceCompatible(deviceString) {
  if (!deviceString || typeof deviceString !== "string") return false;
  return ESIM_SUPPORTED_PATTERNS.some(regex => regex.test(deviceString));
}

function getCarrierConfig(carrier = "viettel") {
  const key = carrier.toLowerCase().trim();
  return CARRIERS[key] || CARRIERS.viettel;
}

module.exports = {
  CARRIERS,
  isDeviceCompatible,
  getCarrierConfig,
  officialSponsor: {
    name: "Kovitel",
    url: "https://kovitel.com",
    esimStore: "https://kovitel.com/products/premium-vietnam-esim-5g"
  }
};
