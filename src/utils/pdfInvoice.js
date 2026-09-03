import { jsPDF } from 'jspdf';

export function generateInvoicePDF(orderData) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const primaryGold = [197, 160, 89]; // #C5A059
  const darkCharcoal = [26, 26, 26]; // #1A1A1A
  const lightGray = [245, 245, 245];

  // Header Background Bar
  doc.setFillColor(...darkCharcoal);
  doc.rect(0, 0, 210, 38, 'F');

  // Gold Accent line
  doc.setFillColor(...primaryGold);
  doc.rect(0, 38, 210, 3, 'F');

  // Brand Header
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.text('GLOWZA', 15, 18);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(212, 175, 55);
  doc.text('LUXURY SKINCARE EXCELLENCE (EST. 2021)', 15, 25);
  doc.setTextColor(200, 200, 200);
  doc.text('4.9 Rating | 50,000+ Satisfied Customers Across Pakistan', 15, 31);

  // Invoice Title Right Aligned
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text('OFFICIAL INVOICE', 195, 18, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(212, 175, 55);
  doc.text(`Invoice #: ${orderData.invoiceId}`, 195, 25, { align: 'right' });
  doc.setTextColor(200, 200, 200);
  doc.text(`Date: ${orderData.date}`, 195, 31, { align: 'right' });

  // Company Details Block
  let y = 50;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkCharcoal);
  doc.text('OFFICE ADDRESS & DISPATCH HUB:', 15, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text('Office # 11, Ground Floor, Aftab Plaza, Saidpur Road,', 15, y + 5);
  doc.text('Holy Family Stop, Rawalpindi, Pakistan', 15, y + 9);
  doc.text('Email: sajjadhussainshah763@gmail.com', 15, y + 13);
  doc.text('Support Contacts: Ali Sher (03465321720) | Sajjad Hussain (03315563759)', 15, y + 17);

  // Customer Details Block
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkCharcoal);
  doc.text('CUSTOMER / SHIPPING DETAILS:', 115, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text(`Name: ${orderData.customerName}`, 115, y + 5);
  doc.text(`Phone / WhatsApp: ${orderData.customerPhone}`, 115, y + 9);
  doc.text(`City: ${orderData.city}`, 115, y + 13);
  doc.text(`Shipping Address: ${orderData.address}`, 115, y + 17);

  // Divider
  y += 26;
  doc.setDrawColor(220, 220, 220);
  doc.line(15, y, 195, y);

  // Items Table Header
  y += 6;
  doc.setFillColor(...lightGray);
  doc.rect(15, y, 180, 8, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...darkCharcoal);
  doc.text('ITEM DESCRIPTION', 18, y + 5.5);
  doc.text('QTY', 125, y + 5.5, { align: 'center' });
  doc.text('PRICE', 155, y + 5.5, { align: 'right' });
  doc.text('TOTAL', 190, y + 5.5, { align: 'right' });

  // Items Table Content
  y += 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);

  orderData.items.forEach((item, index) => {
    // Alternate row shading
    if (index % 2 === 1) {
      doc.setFillColor(250, 250, 250);
      doc.rect(15, y - 4, 180, 7, 'F');
    }
    
    doc.setTextColor(30, 30, 30);
    // Truncate long item names if necessary
    const itemName = item.name.length > 50 ? item.name.substring(0, 47) + '...' : item.name;
    doc.text(itemName, 18, y);
    doc.text(`${item.quantity}`, 125, y, { align: 'center' });
    doc.text(`PKR ${item.price.toLocaleString()}`, 155, y, { align: 'right' });
    doc.text(`PKR ${(item.price * item.quantity).toLocaleString()}`, 190, y, { align: 'right' });

    y += 8;
  });

  y += 2;
  doc.setDrawColor(220, 220, 220);
  doc.line(15, y, 195, y);

  // Summary Totals Right Side Box
  y += 6;
  const summaryBoxX = 120;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text('Subtotal:', summaryBoxX, y);
  doc.text(`PKR ${orderData.subtotal.toLocaleString()}`, 190, y, { align: 'right' });

  y += 6;
  doc.text('Nationwide Shipping:', summaryBoxX, y);
  const shippingText = orderData.shipping === 0 ? 'FREE (Orders over PKR 5,000)' : `PKR ${orderData.shipping}`;
  doc.text(shippingText, 190, y, { align: 'right' });

  y += 6;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryGold);
  doc.text('Grand Total:', summaryBoxX, y);
  doc.text(`PKR ${orderData.grandTotal.toLocaleString()}`, 190, y, { align: 'right' });

  // Payment Status Box
  y += 12;
  doc.setFillColor(255, 248, 235);
  doc.setDrawColor(...primaryGold);
  doc.rect(15, y - 6, 180, 18, 'FD');

  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkCharcoal);
  doc.text(`Payment Method: ${orderData.paymentMethod.toUpperCase()}`, 20, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 100, 100);
  const paymentNote = orderData.paymentMethod === 'cod' 
    ? 'Pay cash to the courier upon delivery at your doorstep.'
    : 'Please share your transaction payment screenshot on WhatsApp to 03315563759 for immediate priority dispatch.';
  doc.text(paymentNote, 20, y + 6);

  // Footer Note & Authentic Stamp
  doc.setFillColor(...darkCharcoal);
  doc.rect(0, 275, 210, 22, 'F');

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('GLOWZA - 100% Authentic & Dermatologist Approved Luxury Skincare', 105, 282, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(180, 180, 180);
  doc.text('Thank you for trusting Glowza! For support, WhatsApp Ali Sher: 03465321720 or Sajjad Hussain: 03315563759', 105, 287, { align: 'center' });

  // Save PDF file
  doc.save(`Glowza_Invoice_${orderData.invoiceId}.pdf`);
}
