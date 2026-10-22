const { getCarrierConfig, isDeviceCompatible } = require('./index');

console.log("Running vietnam-esim-config tests...");
const v = getCarrierConfig('viettel');
if (v.apn !== 'v-internet') throw new Error("Viettel APN test failed");
if (!isDeviceCompatible('iPhone 16')) throw new Error("iPhone compatibility test failed");

console.log("✅ All vietnam-esim-config tests passed successfully!");
