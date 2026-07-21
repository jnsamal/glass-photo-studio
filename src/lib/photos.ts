export type Category = "Portrait" | "Wedding" | "Editorial" | "Landscape" | "Product";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: Category;
  camera: string;
  settings: string;
  orientation: "portrait" | "landscape";
  featured?: boolean;
}

// Curated, freely-licensed demonstration imagery (Unsplash) with illustrative
// EXIF-style captions. Swap `src` values for the studio's real work when ready.
const unsplash = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const photos: Photo[] = [
  {
    id: "p01",
    src: unsplash("photo-1544005313-94ddf0286df2"),
    alt: "Studio portrait of a woman lit with soft window light",
    category: "Portrait",
    camera: "Leica SL2",
    settings: "f/1.8 · 85mm · 1/200s · ISO 200",
    orientation: "portrait",
    featured: true,
  },
  {
    id: "p02",
    src: unsplash("photo-1554080353-a576cf803bde"),
    alt: "Bride and groom laughing together outdoors",
    category: "Wedding",
    camera: "Canon EOS R5",
    settings: "f/2.0 · 50mm · 1/500s · ISO 400",
    orientation: "landscape",
    featured: true,
  },
  {
    id: "p03",
    src: unsplash("photo-1500648767791-00dcc994a43e"),
    alt: "Layered blue mountain ridges at dawn",
    category: "Landscape",
    camera: "Fujifilm GFX 100S",
    settings: "f/8 · 63mm · 1/60s · ISO 100",
    orientation: "landscape",
    featured: true,
  },
  {
    id: "p04",
    src: unsplash("photo-1519741497674-611481863552"),
    alt: "Photographer framing a shot through a viewfinder",
    category: "Editorial",
    camera: "Sony A7 IV",
    settings: "f/2.8 · 35mm · 1/320s · ISO 320",
    orientation: "landscape",
    featured: true,
  },
  {
    id: "p05",
    src: unsplash("photo-1522337660859-02fbefca4702"),
    alt: "Detail shot of wedding rings resting on linen",
    category: "Wedding",
    camera: "Canon EOS R5",
    settings: "f/2.5 · 100mm macro · 1/250s · ISO 200",
    orientation: "landscape",
  },
  {
    id: "p06",
    src: unsplash("photo-1517841905240-472988babdf9"),
    alt: "Close-up of a vintage camera lens",
    category: "Editorial",
    camera: "Hasselblad X2D",
    settings: "f/4 · 90mm · 1/125s · ISO 100",
    orientation: "landscape",
  },
  {
    id: "p07",
    src: unsplash("photo-1495954380655-4b3f1e79f9de"),
    alt: "Sunlight filtering through a misty pine forest",
    category: "Landscape",
    camera: "Fujifilm GFX 100S",
    settings: "f/9 · 45mm · 1/90s · ISO 100",
    orientation: "portrait",
  },
  {
    id: "p08",
    src: unsplash("photo-1541961017774-22349e4a1262"),
    alt: "Editorial fashion portrait against a plain backdrop",
    category: "Portrait",
    camera: "Leica SL2",
    settings: "f/2.2 · 90mm · 1/250s · ISO 160",
    orientation: "portrait",
    featured: true,
  },
  {
    id: "p09",
    src: unsplash("photo-1523712999610-f77fbcfc3843"),
    alt: "Still alpine lake reflecting the surrounding peaks",
    category: "Landscape",
    camera: "Sony A7R V",
    settings: "f/11 · 24mm · 1/30s · ISO 100",
    orientation: "landscape",
  },
  {
    id: "p10",
    src: unsplash("photo-1490750967868-88aa4486c946"),
    alt: "Still life of dried flowers on a textured surface",
    category: "Product",
    camera: "Canon EOS R5",
    settings: "f/5.6 · 100mm macro · 1/160s · ISO 100",
    orientation: "portrait",
  },
  {
    id: "p11",
    src: unsplash("photo-1524504388940-b1c1722653e1"),
    alt: "Fashion portrait with dramatic side lighting",
    category: "Portrait",
    camera: "Leica SL2",
    settings: "f/1.4 · 50mm · 1/400s · ISO 200",
    orientation: "portrait",
  },
  {
    id: "p12",
    src: unsplash("photo-1521572163474-6864f9cf17ab"),
    alt: "Black and white portrait with soft studio shadows",
    category: "Portrait",
    camera: "Leica M11",
    settings: "f/2.0 · 75mm · 1/180s · ISO 400",
    orientation: "portrait",
  },
  {
    id: "p13",
    src: unsplash("photo-1550005809-91ad75fb315f"),
    alt: "Guests celebrating at an evening wedding reception",
    category: "Wedding",
    camera: "Sony A7 IV",
    settings: "f/1.8 · 35mm · 1/160s · ISO 1000",
    orientation: "landscape",
  },
  {
    id: "p14",
    src: unsplash("photo-1516035069371-29a1b244cc32"),
    alt: "Vintage film camera resting on a wooden table",
    category: "Editorial",
    camera: "Fujifilm GFX 100S",
    settings: "f/5.6 · 63mm · 1/125s · ISO 200",
    orientation: "landscape",
  },
  {
    id: "p15",
    src: unsplash("photo-1533158307587-8ff4b9c4bce6"),
    alt: "Natural light portrait of a man looking off camera",
    category: "Portrait",
    camera: "Canon EOS R5",
    settings: "f/1.8 · 85mm · 1/320s · ISO 200",
    orientation: "portrait",
  },
  {
    id: "p16",
    src: unsplash("photo-1476514525535-07fb3b4ae5f1"),
    alt: "Warm light breaking over a distant mountain range",
    category: "Landscape",
    camera: "Sony A7R V",
    settings: "f/10 · 35mm · 1/60s · ISO 100",
    orientation: "landscape",
    featured: true,
  },
  {
    id: "p17",
    src: unsplash("photo-1554048612-b6a482b224b3"),
    alt: "Studio portrait with a soft gradient backdrop",
    category: "Portrait",
    camera: "Leica SL2",
    settings: "f/2.0 · 85mm · 1/200s · ISO 200",
    orientation: "portrait",
  },
  {
    id: "p18",
    src: unsplash("photo-1522673607200-164d1b6ce486"),
    alt: "Photographer adjusting a lens on location",
    category: "Editorial",
    camera: "Sony A7 IV",
    settings: "f/2.8 · 24mm · 1/250s · ISO 250",
    orientation: "landscape",
  },
  {
    id: "p19",
    src: unsplash("photo-1493863641943-9b68992a8d07"),
    alt: "Macro detail of a camera lens iris",
    category: "Product",
    camera: "Canon EOS R5",
    settings: "f/8 · 100mm macro · 1/125s · ISO 100",
    orientation: "landscape",
  },
  {
    id: "p20",
    src: unsplash("photo-1503104834685-7205e8607eb9"),
    alt: "High-contrast black and white editorial portrait",
    category: "Portrait",
    camera: "Leica M11",
    settings: "f/2.8 · 50mm · 1/250s · ISO 400",
    orientation: "portrait",
  },
];

export const categories: Category[] = [
  "Portrait",
  "Wedding",
  "Editorial",
  "Landscape",
  "Product",
];

export const featuredPhotos = photos.filter((p) => p.featured);
