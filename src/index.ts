/**
 * Generate a random OTP (One-Time Password).
 * 
 * @param length - The length of the OTP.
 * @param type - The type of OTP: 'numeric' or 'alphanumeric'. Default is 'numeric'.
 * @returns A string representing the generated OTP.
 */
export function generateOTP(length: number, type: 'numeric' | 'alphanumeric' = 'numeric'): string {
  const digits = '0123456789';
  const alphanumeric = digits + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
  let characters = type === 'alphanumeric' ? alphanumeric : digits;
  let otp = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }

  return otp;
}
