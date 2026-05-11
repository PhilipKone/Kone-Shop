export const products = {
  hardware: [
    // Computing & Devices
    {
      id: 'h6',
      name: 'MacBook Pro M3 (14-inch)',
      category: 'Hardware',
      subCategory: 'Computing',
      price: 28500.00,
      image: '/products/macbook-pro.png',
      tag: 'Pro',
      description: 'The ultimate professional laptop. Features the M3 chip for extreme performance, a stunning Liquid Retina XDR display, and all-day battery life.',
      specs: {
        Processor: 'Apple M3 Pro (11-core CPU)',
        Memory: '18GB Unified Memory',
        Storage: '512GB SSD',
        Display: '14.2" Liquid Retina XDR',
        Battery: 'Up to 18 hours'
      },
      upsellIds: ['h5', 'h11', 's2'] // Keyboard, Mouse, IDE
    },
    {
      id: 'h7',
      name: 'Google Pixel 8 Pro',
      category: 'Hardware',
      subCategory: 'Computing',
      price: 14500.00,
      image: '/products/pixel-8-pro.png',
      tag: 'Android',
      description: 'The most advanced Pixel yet. 6.7" Super Actua display, Google Tensor G3 chip, and the best-in-class Triple Camera system with Pro controls.'
    },
    {
      id: 'h8',
      name: 'iPhone 15 Pro Max',
      category: 'Hardware',
      subCategory: 'Computing',
      price: 21500.00,
      image: '/products/iphone-15.png',
      tag: 'iOS',
      description: 'Forged in titanium. A17 Pro chip, customizable Action button, and the most powerful iPhone camera system with 5x optical zoom.'
    },
    {
      id: 'h9',
      name: 'DJI Mini 4 Pro',
      category: 'Hardware',
      subCategory: 'Computing',
      price: 12800.00,
      image: '/products/dji-drone.png',
      tag: 'Drone',
      description: 'The ultimate mini drone. Under 249g, 4K/60fps HDR true vertical shooting, and omnidirectional obstacle sensing for professional-grade flight.'
    },

    // Dev Kits & Boards
    {
      id: 'h1',
      name: 'Arduino Uno R4 WiFi',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 350.00,
      image: '/products/arduino-uno-r4.png',
      tag: 'New',
      description: 'The standard in hobbyist electronics, now with a 32-bit ARM Cortex-M4, WiFi, and Bluetooth. Perfect for IoT projects and learning embedded systems.',
      specs: {
        Processor: 'Renesas RA4M1 (48MHz)',
        Memory: '32KB SRAM',
        Storage: '256KB Flash',
        Connectivity: 'WiFi + Bluetooth 5.0',
        Voltage: '5V'
      },
      upsellIds: ['h12', 'm2'] // Sensors, Stickers
    },
    {
      id: 'h14',
      name: 'Arduino Uno R3',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 180.00,
      image: '/products/arduino-uno-r3.png',
      tag: 'Classic',
      description: 'The quintessential microcontroller board. Robust, easy-to-use, and backed by a massive community. Ideal for beginners and rapid prototyping.'
    },
    {
      id: 'h15',
      name: 'Arduino Nano',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 120.00,
      image: '/products/arduino-nano.png',
      tag: 'Compact',
      description: 'A small, complete, and breadboard-friendly board based on the ATmega328P. Offers the power of the Uno in a fraction of the size.'
    },
    {
      id: 'h2',
      name: 'Raspberry Pi 5 (8GB)',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 4200.00,
      image: '/products/raspberry-pi-5.png',
      tag: 'Flagship',
      description: 'The latest generation of the worlds favorite single-board computer. 2-3x faster than Pi 4, featuring dual 4K display support and PCIe 2.0.',
      specs: {
        Processor: 'Broadcom BCM2712 (2.4GHz)',
        Memory: '8GB LPDDR4X',
        Storage: 'MicroSD / PCIe 2.0',
        Display: '2x 4K60 Micro HDMI',
        I_O: '40-pin GPIO'
      },
      upsellIds: ['h1', 'h13', 'm2'] // Arduino, Coral, Stickers
    },
    {
      id: 'h16',
      name: 'Raspberry Pi 4 Model B',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 3200.00,
      image: '/products/raspberry-pi-4.png',
      tag: 'Pro',
      description: 'Powerful quad-core processor, dual-display support at resolutions up to 4K, and 4GB of RAM. A versatile tool for makers and engineers.'
    },
    {
      id: 'h17',
      name: 'Raspberry Pi 3 B+',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 2100.00,
      image: '/products/pi-3b-plus.png',
      tag: 'Value',
      description: 'The final revision of the Raspberry Pi 3 range. 1.4GHz quad-core processor, dual-band 2.4GHz and 5GHz wireless LAN, and faster Ethernet.'
    },
    {
      id: 'h4',
      name: 'Nvidia Jetson Nano',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 5500.00,
      image: '/products/jetson-nano.png',
      tag: 'AI',
      description: 'Bringing the power of modern AI to millions of devices. Run multiple neural networks in parallel for applications like image classification and object detection.',
      specs: {
        Processor: 'Quad-core ARM A57 (1.43GHz)',
        GPU: '128-core Maxwell',
        Memory: '4GB LPDDR4',
        Storage: 'MicroSD slot',
        AI_Perf: '472 GFLOPS'
      }
    },
    {
      id: 'h12',
      name: 'BBC Micro:bit V2',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 320.00,
      image: '/products/microbit.png',
      tag: 'Education',
      description: 'Pocket-sized computer that introduces you to how software and hardware work together. Features a built-in microphone, speaker, and touch sensor.'
    },

    // Components & Storage
    {
      id: 'h13',
      name: 'Google Coral Edge TPU',
      category: 'Hardware',
      subCategory: 'Components',
      price: 1850.00,
      image: '/products/coral-tpu.png',
      tag: 'AI Accelerator',
      description: 'A small ASIC that provides high-performance ML inference with low power requirements. Capable of performing 4 trillion operations per second.'
    },
    {
      id: 'g1',
      name: 'NVIDIA GeForce RTX 4090',
      category: 'Hardware',
      subCategory: 'Components',
      price: 32500.00,
      image: '/products/rtx-4090.png',
      tag: 'Flagship',
      description: 'The worlds fastest gaming and AI GPU. 24GB G6X memory, DLSS 3 support, and unprecedented ray tracing performance.'
    },
    {
      id: 'g2',
      name: 'NVIDIA GeForce RTX 4080 Super',
      category: 'Hardware',
      subCategory: 'Components',
      price: 24500.00,
      image: '/products/rtx-4080.png',
      tag: 'Performance',
      description: 'Supercharged performance for gaming and creators. Features 16GB of G6X memory and advanced AI-accelerated graphics.'
    },
    {
      id: 'g3',
      name: 'NVIDIA RTX 6000 Ada Generation',
      category: 'Hardware',
      subCategory: 'Components',
      price: 95000.00,
      image: '/products/rtx-6000.png',
      tag: 'Enterprise',
      description: 'The ultimate workstation GPU. 48GB of ECC memory, third-gen RT cores, and fourth-gen Tensor cores for massive rendering and AI workloads.'
    },
    {
      id: 'g4',
      name: 'NVIDIA GeForce RTX 4070 Ti',
      category: 'Hardware',
      subCategory: 'Components',
      price: 18500.00,
      image: '/products/rtx-4070.png',
      tag: 'GPU',
      description: 'Exceptional performance for 1440p gaming. Efficient Ada Lovelace architecture with 12GB of G6X memory and DLSS 3.5 support.'
    },
    {
      id: 'h3',
      name: 'Ultrasonic Sensor Module',
      category: 'Hardware',
      subCategory: 'Components',
      price: 45.00,
      image: '/products/ultrasonic-sensor.png',
      tag: 'Sensor',
      description: 'Highly accurate non-contact distance measurement module. Ideal for obstacle avoidance in robotics and liquid level sensing.'
    },
    {
      id: 'h10',
      name: 'Samsung 990 Pro 2TB SSD',
      category: 'Hardware',
      subCategory: 'Components',
      price: 2850.00,
      image: '/products/samsung-ssd.png',
      tag: 'Storage',
      description: 'The ultimate NVMe SSD. Sequential read/write speeds up to 7,450/6,900 MB/s. Perfect for demanding gaming and creative tasks.'
    },

    // Peripherals
    {
      id: 'h5',
      name: 'Mechanical Keyboard (Blue)',
      category: 'Hardware',
      subCategory: 'Peripherals',
      price: 1250.00,
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80',
      tag: 'Peripherals',
      description: 'Premium tactile experience with clicky blue switches. RGB backlighting, durable construction, and full N-key rollover for high-speed typing.'
    },
    {
      id: 'h11',
      name: 'Logitech MX Master 3S',
      category: 'Hardware',
      subCategory: 'Peripherals',
      price: 1450.00,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
      tag: 'Pro Mouse',
      description: 'The iconic ergonomic mouse, remastered. 8K DPI tracking on any surface and Quiet Clicks for a seamless, distraction-free workflow.'
    }
  ],
  software: [
    {
      id: 's1',
      name: 'Kone OS (Microcontroller Edition)',
      category: 'OS',
      price: 0.00,
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&q=80',
      tag: 'Free',
      description: 'A lightweight, real-time operating system specifically designed for ARM Cortex-M microcontrollers. Features low-latency multitasking and built-in drivers for Kone sensors.'
    },
    {
      id: 's2',
      name: 'Developer IDE Pro License',
      category: 'Apps',
      price: 850.00,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80',
      tag: 'Popular',
      description: 'The ultimate IDE for hardware and software developers. Includes advanced debugging tools, AI-powered code completion, and native integration with Kone boards.'
    },
    {
      id: 's3',
      name: 'Mobile App Builder Toolkit',
      category: 'Apps',
      price: 2100.00,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80',
      tag: null,
      description: 'Build professional cross-platform mobile apps with ease. Includes a drag-and-drop UI designer, cloud hosting, and pre-built components for e-commerce and IoT.'
    }
  ],
  merch: [
    {
      id: 'm1',
      name: 'Kone Academy Hoodie',
      category: 'Apparel',
      price: 350.00,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80',
      tag: 'Popular',
      description: 'Stay cozy and represent the Academy. Heavyweight organic cotton, premium embroidery, and a sleek dark aesthetic for the modern engineer.'
    },
    {
      id: 'm2',
      name: 'Neon Sticker Pack',
      category: 'Accessories',
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=500&q=80',
      tag: null,
      description: 'Customize your gear with high-quality vinyl stickers. Features Kone Academy logos, circuit designs, and retro-futuristic patterns in neon colors.'
    },
    {
      id: 'm3',
      name: 'Coffee Mug (Dark Mode)',
      category: 'Lifestyle',
      price: 120.00,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80',
      description: 'Matte black ceramic mug with a hidden Kone logo that reveals when hot. Perfect for late-night coding sessions and morning espresso.'
    },
  ]
};
