import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text, size = 800, format = 'png' } = await req.json();
    
    if (!text) {
      return NextResponse.json({ error: 'Text parameter is required' }, { status: 400 });
    }

    // Use Google Charts API as primary, with QR Server as fallback
    const encodedData = encodeURIComponent(text);
    const googleChartsUrl = `https://chart.googleapis.com/chart?chs=${size}x${size}&cht=qr&chl=${encodedData}&choe=UTF-8`;
    const qrServerUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedData}&format=${format}&margin=10`;

    return NextResponse.json({
      success: true,
      qrUrls: {
        googleCharts: googleChartsUrl,
        qrServer: qrServerUrl
      },
      data: text
    });
  } catch (error) {
    console.error('QR generation error:', error);
    return NextResponse.json({ error: 'Failed to generate QR code' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'QR Code API',
    endpoints: {
      'POST /api/qr': 'Generate QR code URLs'
    }
  });
}