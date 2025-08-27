// Global type declarations for external libraries

declare global {
  interface Window {
    QRious: new (options: QRiousOptions) => QRiousInstance;
  }
}

interface QRiousOptions {
  element?: HTMLCanvasElement;
  value?: string;
  size?: number;
  background?: string;
  foreground?: string;
  level?: 'L' | 'M' | 'Q' | 'H';
}

interface QRiousInstance {
  canvas: HTMLCanvasElement;
  image: HTMLImageElement;
  value: string;
  size: number;
  background: string;
  foreground: string;
  level: string;
  toDataURL(type?: string): string;
}

export {};