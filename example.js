const { generateOTP } = require("./dist/index");

// Example Usage:
const otpNumeric = generateOTP(6); // Numeric OTP of length 6
const otpAlphanumeric = generateOTP(8, 'alphanumeric'); // Alphanumeric OTP of length 8

console.log('Numeric OTP:', otpNumeric);
console.log('Alphanumeric OTP:', otpAlphanumeric);
