import { BRAND_INFO } from '../data/products';

export function getWhatsAppProductLink(productName, price, phone = BRAND_INFO.whatsappPrimary) {
  const message = `Hi Glowza team, I want to order ${productName} for PKR ${price.toLocaleString()}. Please confirm my order.`;
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  // If phone starts with 03, replace leading 0 with 92
  const formattedPhone = cleanPhone.startsWith('0') ? '92' + cleanPhone.slice(1) : cleanPhone;
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralLink(customMessage = null, phone = BRAND_INFO.whatsappPrimary) {
  const defaultMsg = `Hi Glowza team! I would like to inquire about your premium skincare products and nationwide delivery.`;
  const message = customMessage || defaultMsg;
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const formattedPhone = cleanPhone.startsWith('0') ? '92' + cleanPhone.slice(1) : cleanPhone;
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
}
