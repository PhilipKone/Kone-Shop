export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  isVerified: boolean;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    productId: 'h6', // MacBook Pro
    userName: 'Philip K.',
    rating: 5,
    comment: 'The M3 chip is a beast for compiling code. Best purchase for my dev workflow!',
    date: '2024-03-15',
    isVerified: true
  },
  {
    id: 'r2',
    productId: 'h6',
    userName: 'Sarah M.',
    rating: 4,
    comment: 'Stunning display, but the price is definitely a bit high. Worth it for pros though.',
    date: '2024-03-10',
    isVerified: true
  },
  {
    id: 'r3',
    productId: 'h2', // Raspberry Pi 5
    userName: 'DevDave',
    rating: 5,
    comment: 'The performance jump from Pi 4 is massive. Running a small k3s cluster on these!',
    date: '2024-02-28',
    isVerified: true
  },
  {
    id: 'r4',
    productId: 'h1', // Arduino Uno R4
    userName: 'HardwareHobbyist',
    rating: 5,
    comment: 'WiFi built-in makes IoT projects so much easier. Love the new R4 features.',
    date: '2024-03-01',
    isVerified: true
  },
  {
    id: 'r5',
    productId: 'g1', // RTX 4090
    userName: 'AITrainer',
    rating: 5,
    comment: 'Unbeatable for local LLM fine-tuning. 24GB VRAM is exactly what I needed.',
    date: '2024-03-12',
    isVerified: true
  },
  {
    id: 'r6',
    productId: 'h13', // Coral TPU
    userName: 'EdgeMaster',
    rating: 4,
    comment: 'Great for inference, but the documentation could be a bit better for newcomers.',
    date: '2024-02-20',
    isVerified: true
  }
];
