import { phoneNum } from '../../shared/data/data';

export function openWhatsApp(): void {
  if (!phoneNum) {
    console.error('WhatsApp phone number is not defined.');
    return;
  }

  const formattedNumber = phoneNum.replace(/\D/g, ''); // ensure only digits
  const url = `https://wa.me/${formattedNumber}`;

  window.open(url, '_blank');
}
