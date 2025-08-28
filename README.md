# QR Code Generator with Logo Support

A modern, feature-rich QR code generator built with Next.js that allows you to create QR codes for URLs, text, and contact information with custom logo support.

## Features

- 🎯 **Multiple QR Code Types**: URLs, Text, and vCard contacts
- 🖼️ **Custom Logo Support**: Add your brand logo to QR codes
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎨 **Beautiful UI**: Modern gradient design with smooth animations
- ⚡ **Fast Generation**: Instant QR code creation
- 📥 **Easy Download**: High-resolution PNG downloads
- 📋 **Copy to Clipboard**: Quick data copying
- 🌐 **Multilingual Support**: English and Spanish translations
- 🔒 **Privacy-First**: No data stored on servers

## Technologies Used

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **QRious** library for QR generation
- **Vercel** for deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/andrew-clk/qr-generator-with-logo.git
cd qr-generator-with-logo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect this is a Next.js project
3. Deploy with default settings

Or use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

## API Endpoints

- `GET /api/qr` - API information
- `POST /api/qr` - Generate QR code URLs

## Project Structure

```
├── app/
│   ├── api/qr/          # API routes for QR generation
│   ├── components/      # React components
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## License

This project is open source and available under the MIT License.

---

**Remixed by Andrew C.** 🐶