export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, "");
  return cleaned.length >= 9 && /^[+]?\d+$/.test(cleaned);
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}
