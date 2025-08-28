# Google AdSense Setup Guide

## Setting Up AdSense for Monetization

### Step 1: Create Google AdSense Account
1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Sign up with your Google account
3. Add your website URL and complete the application process
4. Wait for approval (can take 1-7 days)

### Step 2: Get Your AdSense Code
Once approved, you'll receive:
- **Publisher ID**: `ca-pub-XXXXXXXXXXXXXXXXX`
- **Ad Slot ID**: `XXXXXXXXXX`

### Step 3: Update the Code
Replace the placeholder values in these files:

#### 1. In `app/layout.tsx`:
```typescript
// Replace XXXXXXXXXXXXXXXXX with your actual Publisher ID
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
```

#### 2. In `app/components/QRGenerator.tsx`:
```typescript
<AdSense
  adClient="ca-pub-YOUR_PUBLISHER_ID"  // Replace with your Publisher ID
  adSlot="YOUR_AD_SLOT_ID"             // Replace with your Ad Slot ID
  adFormat="rectangle"
  // ... other props
/>
```

### Step 4: Ad Formats Available
- `rectangle` - 300x250 (recommended for corner placement)
- `banner` - 728x90 
- `skyscraper` - 160x600
- `square` - 250x250
- `auto` - Responsive (adjusts to container)

### Step 5: AdSense Policies
Make sure your site complies with:
- [AdSense Content Policies](https://support.google.com/adsense/answer/48182)
- No click fraud or artificial traffic
- Proper privacy policy (include AdSense data usage)
- Mobile-friendly design

### Step 6: Testing
- AdSense ads may not show immediately in development
- Use AdSense sandbox/test ads for development
- Ads will appear after site is deployed and approved

### Revenue Optimization Tips
1. **Placement**: Corner ads perform well without being intrusive
2. **Size**: 300x250 rectangles have good CTR rates
3. **Content**: High-quality, original content improves ad relevance
4. **Traffic**: More targeted traffic = better ad revenue
5. **Loading**: Ensure ads don't slow down your site

### Current Ad Placement
The AdSense ad is positioned:
- Below "Generated QR Code" heading
- Above the QR code display area  
- 300x250 rectangle format
- Rounded corners matching site design
- Subtle shadow for visual integration

This placement provides good visibility without disrupting the user experience.