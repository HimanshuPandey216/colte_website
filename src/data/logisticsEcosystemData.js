export const logisticsEcosystemData = [
  {
    id: 'warehouse',
    title: 'Modern Smart Warehouse',
    subtitle: 'The Heart of Physical Fulfillment',
    icon: 'Warehouse',
    color: '#FF7A00',
    image: '/images/hero-warehouse.jpg',
    brief: 'Automated racking, high-bay storage, and material handling systems that turn static storage into rapid, high-density order staging.',
    keyMetrics: [
      { label: 'Storage Density Boost', value: '45%' },
      { label: 'Pick Accuracy Rate', value: '99.8%' },
      { label: 'Order Turnaround', value: '< 2 hrs' }
    ],
    workflow: [
      { step: '01', title: 'Inbound Ingestion', desc: 'Automated dock door scheduling, ASN verification, and quality inspections.' },
      { step: '02', title: 'Intelligent Put-Away', desc: 'Algorithmically assigned storage bins according to velocity and weight.' },
      { step: '03', title: 'Order Fulfillment', desc: 'Pick-to-light, voice picking, and zone picking for instant order assembly.' }
    ],
    technologies: ['High-Bay Selective Racks', 'Reach Trucks & VNA Forklifts', 'Voice Picking Headsets', 'RFID Gate Scanners'],
    colteConnection: 'At COLTE Chennai, students train on physical mock racking bays and virtual reality forklift simulators that replicate exact high-density warehouse environments.'
  },
  {
    id: 'transportation',
    title: 'Multi-Modal Transportation',
    subtitle: 'The Arteries of Commerce',
    icon: 'Truck',
    color: '#00A6A6',
    image: '/images/chennai-port.jpg',
    brief: 'Connecting ports, railheads, highways, and urban hubs through intelligent route optimization and live IoT cargo telematics.',
    keyMetrics: [
      { label: 'Transit Time Reduction', value: '28%' },
      { label: 'Fleet Fuel Economy', value: '+18%' },
      { label: 'Cold-Chain Integrity', value: '99.9%' }
    ],
    workflow: [
      { step: '01', title: 'Load Consolidation', desc: 'Dynamic load pooling to eliminate empty miles and maximize trailer cubing.' },
      { step: '02', title: 'Multi-Modal Dispatch', desc: 'Synchronized transitions between container vessels, freight trains, and trucks.' },
      { step: '03', title: 'Real-Time Telematics', desc: 'Live GPS geofencing, temperature logging for pharmaceuticals, and e-way bill compliance.' }
    ],
    technologies: ['GPS Telematics & Geofencing', 'Dynamic Routing Engines', 'Cold Chain Data Loggers', 'Electronic Toll & FASTag Systems'],
    colteConnection: 'Trainees explore multi-modal logistics using Chennai maritime port scenarios, domestic road freight corridors, and digital transport dispatch systems.'
  },
  {
    id: 'inventory',
    title: 'Precision Inventory Management',
    subtitle: 'Real-Time Capital & Stock Control',
    icon: 'Boxes',
    color: '#2F64A8',
    image: '/images/inventory-mgmt.jpg',
    brief: 'Bridging physical goods with digital ledgers to eliminate stockouts, prevent holding waste, and guarantee perpetual inventory accuracy.',
    keyMetrics: [
      { label: 'Audit Cycle Speed', value: '4x Faster' },
      { label: 'Stockout Reduction', value: '35%' },
      { label: 'Shrinkage Prevention', value: '99.5%' }
    ],
    workflow: [
      { step: '01', title: 'Unique SKU Serialization', desc: 'Every item barcoded with 2D DataMatrix or UHF RFID inlay for hands-free identification.' },
      { step: '02', title: 'Perpetual Cycle Counting', desc: 'Continuous automated counts replacing disruptive year-end physical inventory shutdowns.' },
      { step: '03', title: 'Safety Stock Balancing', desc: 'Automated reorder triggers governed by dynamic lead times and seasonal demand surges.' }
    ],
    technologies: ['Handheld Terminals (HHT)', 'UHF RFID Tags & Portals', 'Automated Barcode Verifiers', 'ABC/FSN Classification Engines'],
    colteConnection: 'COLTE provides students with hands-on industrial scanners, barcode printers, and simulated inventory reconciliation exercises mirroring enterprise logistics floors.'
  },
  {
    id: 'distribution',
    title: 'High-Throughput Distribution Centre',
    subtitle: 'Rapid Cross-Docking & Regional Sorting',
    icon: 'GitPullRequest',
    color: '#FF7A00',
    image: '/images/wms-control.jpg',
    brief: 'Ultra-fast sorting, parcel consolidation, and same-day delivery dispatch centers built for modern e-commerce and retail velocity.',
    keyMetrics: [
      { label: 'Sortation Velocity', value: '12k pkgs/hr' },
      { label: 'Cross-Dock Dwell Time', value: '< 45 mins' },
      { label: 'Dispatch Accuracy', value: '99.92%' }
    ],
    workflow: [
      { step: '01', title: 'High-Speed Infeed', desc: 'Parcels scanned and dimensioned on automated dynamic conveyor scales.' },
      { step: '02', title: 'Automated Sortation', desc: 'Shoe sorters and cross-belt mechanisms directing cartons to postal code lanes.' },
      { step: '03', title: 'Last-Mile Outbound', desc: 'Vehicle route sequencing ensuring packages enter delivery vans in reverse drop order.' }
    ],
    technologies: ['Cross-Belt Sorter Systems', 'Automated DWS (Dimensioning, Weighing, Scanning)', 'WCS (Warehouse Control Systems)', 'Dock Door Conveyors'],
    colteConnection: 'Learners understand the anatomy of modern mega-fulfillment centers with live case studies and digital twin simulations of parcel sorting nodes.'
  },
  {
    id: 'network',
    title: 'Global Supply Chain Network',
    subtitle: 'End-to-End Orchestration & Visibility',
    icon: 'Network',
    color: '#00A6A6',
    image: '/images/supply-chain.jpg',
    brief: 'The overarching digital nerve center monitoring global supply tiers, predicting disruptions, and aligning sourcing with customer demand.',
    keyMetrics: [
      { label: 'End-to-End Visibility', value: '100%' },
      { label: 'Disruption Response Time', value: 'Minutes' },
      { label: 'Carbon Footprint Tracking', value: 'Standardized' }
    ],
    workflow: [
      { step: '01', title: 'Demand Forecasting', desc: 'Predictive analytics integrating POS signals, weather patterns, and market indicators.' },
      { step: '02', title: 'Supplier Synchronization', desc: 'Direct EDI and API integrations with raw material suppliers and contract manufacturers.' },
      { step: '03', title: 'Control Tower Action', desc: 'Automated alerts for port congestion, weather strikes, and real-time rerouting commands.' }
    ],
    technologies: ['Supply Chain Control Towers', 'EDI & B2B API Gateways', 'Predictive Analytics Models', 'Green Logistics Emissions Calculators'],
    colteConnection: 'COLTE curriculum instills systems thinking so trainees grasp how their daily operational actions influence overarching business resilience and global supply chains.'
  }
];
