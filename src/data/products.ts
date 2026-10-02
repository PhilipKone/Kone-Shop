export const products = {
  hardware: [
    // Computing & Devices
    {
      id: 'h6',
      name: 'MacBook Pro M3 (14-inch)',
      category: 'Hardware',
      subCategory: 'Computing',
      price: 28500.00,
      image: '/products/macbook-pro.webp',
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
      image: '/products/pixel-8-pro.webp',
      tag: 'Android',
      description: 'The most advanced Pixel yet. 6.7" Super Actua display, Google Tensor G3 chip, and the best-in-class Triple Camera system with Pro controls.'
    },
    {
      id: 'h8',
      name: 'iPhone 15 Pro Max',
      category: 'Hardware',
      subCategory: 'Computing',
      price: 21500.00,
      image: '/products/iphone-15.webp',
      tag: 'iOS',
      description: 'Forged in titanium. A17 Pro chip, customizable Action button, and the most powerful iPhone camera system with 5x optical zoom.'
    },
    {
      id: 'h9',
      name: 'DJI Mini 4 Pro',
      category: 'Hardware',
      subCategory: 'Computing',
      price: 12800.00,
      image: '/products/dji-drone.webp',
      tag: 'Drone',
      description: 'The ultimate mini drone. Under 249g, 4K/60fps HDR true vertical shooting, and omnidirectional obstacle sensing for professional-grade flight.'
    },

    // Science Sets (Basic School STEM Curriculum)
    {
      id: 'sci-4-1',
      name: 'Science Set 4.1 (Basic 4)',
      category: 'Hardware',
      subCategory: 'Science Sets',
      price: 220.00,
      image: '/products/sci-4-1.webp',
      tag: 'Basic 4',
      description: 'Hands-on Basic 4 curriculum STEM kit exploring living things and diverse matter. Features seed germination test chambers, plant classification cards, magnifying optics, and measuring tools for classroom and home experiments.',
      specs: {
        Curriculum_Level: 'Basic 4 (Class 4)',
        Strands: 'Diversity of Matter & Living Systems',
        Core_Experiments: 'Plant Anatomy, Seed Germination, Leaf Classification',
        Packaging: 'Custom Cyan Sleeve with Modular Component Trays',
        Target_Ages: '7-10 Years'
      },
      upsellIds: ['sci-4-2', 'sci-4-3', 'm2']
    },
    {
      id: 'sci-4-2',
      name: 'Science Set 4.2 (Basic 4)',
      category: 'Hardware',
      subCategory: 'Science Sets',
      price: 220.00,
      image: '/products/sci-4-2.webp',
      tag: 'Basic 4',
      description: 'Interactive Basic 4 Earth science and weather kit. Includes calibrated rainfall measurement cylinders, solar thermometer, navigation compass, and soil percolation test tubes.',
      specs: {
        Curriculum_Level: 'Basic 4 (Class 4)',
        Strands: 'Earth Science, Weather & Natural Cycles',
        Core_Experiments: 'Measuring Rainfall, Soil Drainage, Solar Temperature Tests',
        Packaging: 'Custom Cyan Sleeve with Modular Component Trays',
        Target_Ages: '7-10 Years'
      },
      upsellIds: ['sci-4-1', 'sci-4-3', 'h3']
    },
    {
      id: 'sci-4-3',
      name: 'Science Set 4.3 (Basic 4)',
      category: 'Hardware',
      subCategory: 'Science Sets',
      price: 220.00,
      image: '/products/sci-4-3.webp',
      tag: 'Popular',
      description: 'Foundational physics and electrical engineering kit for Basic 4. Students build functional dry cells from scratch, explore elastic & compression forces, and wire complete simple circuits with buzzers, switches, and LEDs.',
      specs: {
        Curriculum_Level: 'Basic 4 (Class 4) - B4.4.2 & B4.4.3',
        Strands: 'Forces, Energy & Electricity',
        Core_Experiments: 'Building a Dry Cell, Elastic & Compression Forces, Simple Electrical Circuit',
        Packaging: 'Custom Cyan Sleeve with Modular Component Trays',
        Target_Ages: '7-10 Years'
      },
      upsellIds: ['sci-4-1', 'sci-5-3', 'h1']
    },
    {
      id: 'sci-5-1',
      name: 'Science Set 5.1 (Basic 5)',
      category: 'Hardware',
      subCategory: 'Science Sets',
      price: 240.00,
      image: '/products/sci-5-1.webp',
      tag: 'Basic 5',
      description: 'Hands-on natural cycles and plant science kit for Basic 5. Includes apparatus to demonstrate how clouds form in a bottle, planetary rotation model with globe and beam torch for day/night cycles, and phototropism plant growth chambers.',
      specs: {
        Curriculum_Level: 'Basic 5 (Class 5) - B5.1.1 & B5.2.1',
        Strands: 'Cycles & Life Processes',
        Core_Experiments: 'Cloud Formation in a Bottle, Day & Night Earth Simulation, Phototropism Plant Movement',
        Packaging: 'Custom Plum Purple Sleeve with Modular Component Trays',
        Target_Ages: '8-12 Years'
      },
      upsellIds: ['sci-5-2', 'sci-5-3', 'sci-4-3']
    },
    {
      id: 'sci-5-2',
      name: 'Science Set 5.2 (Basic 5)',
      category: 'Hardware',
      subCategory: 'Science Sets',
      price: 240.00,
      image: '/products/sci-5-2.webp',
      tag: 'Basic 5',
      description: 'Comprehensive human biology and water filtration lab for Basic 5. Features anatomical model components for human lungs and respiratory mechanisms, plus a multi-stage sand/carbon water purification test column.',
      specs: {
        Curriculum_Level: 'Basic 5 (Class 5)',
        Strands: 'Human Body Systems & Ecosystems',
        Core_Experiments: 'Lung Breathing Simulation, Multi-Stage Water Filtration, Nutrient Transport',
        Packaging: 'Custom Plum Purple Sleeve with Modular Component Trays',
        Target_Ages: '8-12 Years'
      },
      upsellIds: ['sci-5-1', 'sci-5-3', 'sci-6-2']
    },
    {
      id: 'sci-5-3',
      name: 'Science Set 5.3 (Basic 5)',
      category: 'Hardware',
      subCategory: 'Science Sets',
      price: 240.00,
      image: '/products/sci-5-3.webp',
      tag: 'Best Seller',
      description: 'Applied electricity, magnetism, and energy conversion kit for Basic 5. Students test conductors vs. insulators, build electromagnet coils, and wire multi-branch circuit boards with push-buttons and LED indicators.',
      specs: {
        Curriculum_Level: 'Basic 5 (Class 5) - B5.4.3 & B5.5.4',
        Strands: 'Electricity, Magnetism & Forces',
        Core_Experiments: 'Conductors & Insulators, Electromagnetism, Series & Parallel Circuit Demonstrations',
        Packaging: 'Custom Cyan Sleeve with Modular Component Trays',
        Target_Ages: '8-12 Years'
      },
      upsellIds: ['sci-5-1', 'sci-4-3', 'h1']
    },
    {
      id: 'sci-6-1',
      name: 'Science Set 6.1 (Basic 6)',
      category: 'Hardware',
      subCategory: 'Science Sets',
      price: 260.00,
      image: '/products/sci-6-1.webp',
      tag: 'Basic 6',
      description: 'Advanced chemistry, cycles, and soil science kit for Basic 6. Explores oxidation and the rusting of iron under variable atmospheric conditions, environmental condensation cycles, and soil drainage properties.',
      specs: {
        Curriculum_Level: 'Basic 6 (Class 6) - B6.2.1',
        Strands: 'Chemical Changes & Environmental Cycles',
        Core_Experiments: 'Iron Rusting / Oxidation Factors, Evaporation & Water Cycle, Soil Composition Analysis',
        Packaging: 'Custom Neon Magenta Sleeve with Modular Component Trays',
        Target_Ages: '10-14 Years'
      },
      upsellIds: ['sci-6-2', 'sci-6-3', 'sci-5-1']
    },
    {
      id: 'sci-6-2',
      name: 'Science Set 6.2 (Basic 6)',
      category: 'Hardware',
      subCategory: 'Science Sets',
      price: 260.00,
      image: '/products/sci-6-2.webp',
      tag: 'Popular',
      description: 'Multi-discipline Basic 6 kit featuring an improvised liquid thermometer, play dough anatomical human kidney excretory model, scale solar system planetary model, and maize germination seed tracking.',
      specs: {
        Curriculum_Level: 'Basic 6 (Class 6) - B6.2.2, B6.3.1, B6.3.2, B6.4.1',
        Strands: 'Systems, Cycles, Energy & Space',
        Core_Experiments: 'Improvised Thermometer Calibration, Human Excretory Kidney Model, Solar System Scale Model, Maize Germination',
        Packaging: 'Custom Neon Magenta Sleeve with Modular Component Trays',
        Target_Ages: '10-14 Years'
      },
      upsellIds: ['sci-6-1', 'sci-6-3', 'sci-5-2']
    },
    {
      id: 'sci-6-3',
      name: 'Science Set 6.3 (Basic 6)',
      category: 'Hardware',
      subCategory: 'Science Sets',
      price: 260.00,
      image: '/products/sci-6-3.webp',
      tag: 'Basic 6',
      description: 'Hands-on mechanical physics and simple machines laboratory for Basic 6. Features modular pulleys, intermeshing gears, inclined plane ramp, precision spring dynamometer, and balance levers to demonstrate mechanical advantage.',
      specs: {
        Curriculum_Level: 'Basic 6 (Class 6)',
        Strands: 'Forces, Simple Machines & Applied Energy',
        Core_Experiments: 'Pulley Systems, Gear Ratios & Torque, Inclined Planes & Friction, Lever Classes',
        Packaging: 'Custom Neon Magenta Sleeve with Modular Component Trays',
        Target_Ages: '10-14 Years'
      },
      upsellIds: ['sci-6-1', 'sci-6-2', 'sci-4-3']
    },

    // Dev Kits & Boards
    {
      id: 'h1',
      name: 'Arduino Uno R4 WiFi',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 350.00,
      image: '/products/arduino-uno-r4.webp',
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
      id: 'h18',
      name: 'Arduino Complete Starter Learning Kit',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 580.00,
      image: '/products/arduino-starter-kit.webp',
      tag: 'Best Seller',
      description: 'The definitive all-in-one electronics kit for students and makers. Includes an Arduino microcontroller development board, MB-102 solderless breadboard, 4-digit display, 8x8 LED matrix, stepper motor, jumper wire bundle, resistors, and over 150 essential components packed in a durable organizer case with snap locks.',
      specs: {
        Microcontroller: 'ATmega328P Development Board',
        Displays: '4-Digit 7-Segment + 8x8 Dot Matrix LED',
        Prototyping: '830-Point MB-102 Solderless Breadboard',
        Sensors_Motors: 'Ultrasonic Sensor, Stepper Motor + Driver, Servo',
        Storage: 'Multi-Compartment Organizer Case with Latches',
        Components: '150+ LEDs, Resistors, Buttons & Dupont Wires'
      },
      upsellIds: ['h1', 'h3', 's1'] // Arduino R4, Ultrasonic Sensor, Kone OS
    },
    {
      id: 'h14',
      name: 'Arduino Uno R3',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 180.00,
      image: '/products/arduino-uno-r3.webp',
      tag: 'Classic',
      description: 'The quintessential microcontroller board. Robust, easy-to-use, and backed by a massive community. Ideal for beginners and rapid prototyping.'
    },
    {
      id: 'h15',
      name: 'Arduino Nano',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 120.00,
      image: '/products/arduino-nano.webp',
      tag: 'Compact',
      description: 'A small, complete, and breadboard-friendly board based on the ATmega328P. Offers the power of the Uno in a fraction of the size.'
    },
    {
      id: 'h2',
      name: 'Raspberry Pi 5 (8GB)',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 4200.00,
      image: '/products/raspberry-pi-5.webp',
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
      image: '/products/raspberry-pi-4.webp',
      tag: 'Pro',
      description: 'Powerful quad-core processor, dual-display support at resolutions up to 4K, and 4GB of RAM. A versatile tool for makers and engineers.'
    },
    {
      id: 'h17',
      name: 'Raspberry Pi 3 B+',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 2100.00,
      image: '/products/pi-3b-plus.webp',
      tag: 'Value',
      description: 'The final revision of the Raspberry Pi 3 range. 1.4GHz quad-core processor, dual-band 2.4GHz and 5GHz wireless LAN, and faster Ethernet.'
    },
    {
      id: 'h4',
      name: 'Nvidia Jetson Nano',
      category: 'Hardware',
      subCategory: 'Dev Kits',
      price: 5500.00,
      image: '/products/jetson-nano.webp',
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
      image: '/products/microbit.webp',
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
      image: '/products/coral-tpu.webp',
      tag: 'AI Accelerator',
      description: 'A small ASIC that provides high-performance ML inference with low power requirements. Capable of performing 4 trillion operations per second.'
    },
    {
      id: 'g1',
      name: 'NVIDIA GeForce RTX 4090',
      category: 'Hardware',
      subCategory: 'Components',
      price: 32500.00,
      image: '/products/rtx-4090.webp',
      tag: 'Flagship',
      description: 'The worlds fastest gaming and AI GPU. 24GB G6X memory, DLSS 3 support, and unprecedented ray tracing performance.'
    },
    {
      id: 'g2',
      name: 'NVIDIA GeForce RTX 4080 Super',
      category: 'Hardware',
      subCategory: 'Components',
      price: 24500.00,
      image: '/products/rtx-4080.webp',
      tag: 'Performance',
      description: 'Supercharged performance for gaming and creators. Features 16GB of G6X memory and advanced AI-accelerated graphics.'
    },
    {
      id: 'g3',
      name: 'NVIDIA RTX 6000 Ada Generation',
      category: 'Hardware',
      subCategory: 'Components',
      price: 95000.00,
      image: '/products/rtx-6000.webp',
      tag: 'Enterprise',
      description: 'The ultimate workstation GPU. 48GB of ECC memory, third-gen RT cores, and fourth-gen Tensor cores for massive rendering and AI workloads.'
    },
    {
      id: 'g4',
      name: 'NVIDIA GeForce RTX 4070 Ti',
      category: 'Hardware',
      subCategory: 'Components',
      price: 18500.00,
      image: '/products/rtx-4070.webp',
      tag: 'GPU',
      description: 'Exceptional performance for 1440p gaming. Efficient Ada Lovelace architecture with 12GB of G6X memory and DLSS 3.5 support.'
    },
    {
      id: 'h3',
      name: 'Ultrasonic Sensor Module',
      category: 'Hardware',
      subCategory: 'Components',
      price: 45.00,
      image: '/products/ultrasonic-sensor.webp',
      tag: 'Sensor',
      description: 'Highly accurate non-contact distance measurement module. Ideal for obstacle avoidance in robotics and liquid level sensing.'
    },
    {
      id: 'h10',
      name: 'Samsung 990 Pro 2TB SSD',
      category: 'Hardware',
      subCategory: 'Components',
      price: 2850.00,
      image: '/products/samsung-ssd.webp',
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
