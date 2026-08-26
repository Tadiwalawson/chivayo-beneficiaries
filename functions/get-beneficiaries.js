// functions/get-beneficiaries.js
// Cloudflare Pages Function with COMPLETE dataset

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';

  const beneficiaries = [
    // ============================================================
    // FAMILY & FRIENDS (IDs 001-005)
    // ============================================================
    {
      id: "CHV-2026-001",
      name: "Lucy Chivayo",
      role: "Wife",
      gifts: [
        { item: "2025 Mercedes Benz G Wagon", value: null, currency: "USD", date: "2025-02-14", source: "https://iharare.com/lucy-chivayo-cars/" },
        { item: "Range Rover", value: null, currency: "USD", date: "2025-02-14", source: "https://iharare.com/lucy-chivayo-cars/" },
        { item: "2025 Toyota Landcruiser 300 ZX", value: null, currency: "USD", date: "2025-02-14", source: "https://iharare.com/lucy-chivayo-cars/" },
        { item: "2026 Bentley Bentayga Atelier Edition", value: 750000, currency: "USD", date: "2026-04-26", source: "https://www.zimeye.net/2026/04/26/chivayo-gifts-wife-bentley/" }
      ],
      evidence: ["https://iharare.com/lucy-chivayo-cars/", "https://www.zimeye.net/2026/04/26/chivayo-gifts-wife-bentley/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-002",
      name: "Wicknell Chivayo's Sister",
      role: "Family Member",
      gifts: [
        { item: "2025 Porsche", value: 128000, currency: "USD", date: "2025-12-10", source: "https://www.herald.co.zw/chivayo-gifts-sister-porsche/" }
      ],
      evidence: ["https://www.herald.co.zw/chivayo-gifts-sister-porsche/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-003",
      name: "Tazvi Mhaka",
      role: "Friend",
      gifts: [
        { item: "US$250,000 cash", value: 250000, currency: "USD", date: "2025-03-20", source: "https://nehandaradio.com/tazvi-mhaka-gifted/" },
        { item: "Toyota Landcruiser VXR 300", value: null, currency: "USD", date: "2025-03-20", source: "https://nehandaradio.com/tazvi-mhaka-gifted/" },
        { item: "2023 Bentley Beytaga V8 Sport", value: null, currency: "USD", date: "2025-03-20", source: "https://nehandaradio.com/tazvi-mhaka-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/tazvi-mhaka-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-004",
      name: "Nakamba",
      role: "Personal Barber",
      gifts: [
        { item: "Mercedes Benz C Class", value: null, currency: "USD", date: "2025-07-01", source: "https://iharare.com/chivayo-gifts-barber/" }
      ],
      evidence: ["https://iharare.com/chivayo-gifts-barber/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-005",
      name: "Ishmael",
      role: "Fashion Designer",
      gifts: [
        { item: "Car (approx. US$30,000)", value: 30000, currency: "USD", date: "2026-01-20", source: "https://www.zimeye.net/2026/01/20/chivayo-gifts-designer/" }
      ],
      evidence: ["https://www.zimeye.net/2026/01/20/chivayo-gifts-designer/"],
      status: "confirmed"
    },

    // ============================================================
    // MUSICIANS (IDs 006-036)
    // ============================================================
    {
      id: "CHV-2026-006",
      name: "Jah Prayzah",
      role: "Musician",
      gifts: [
        { item: "Mercedes Benz S500", value: 180000, currency: "USD", date: "2023-08-15", source: "https://nehandaradio.com/jah-prayzah-gifted/" },
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2024-02-10", source: "https://iharare.com/jah-prayzah-toyota-aqua/" },
        { item: "US$20,000 cash", value: 20000, currency: "USD", date: "2024-07-15", source: "https://www.herald.co.zw/jah-prayzah-20k/" },
        { item: "Range Rover Autobiography", value: 150000, currency: "USD", date: "2025-03-01", source: "https://www.zimeye.net/2025/03/01/jah-prayzah-range-rover/" }
      ],
      evidence: ["https://nehandaradio.com/jah-prayzah-gifted/", "https://iharare.com/jah-prayzah-toyota-aqua/", "https://www.herald.co.zw/jah-prayzah-20k/", "https://www.zimeye.net/2025/03/01/jah-prayzah-range-rover/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-007",
      name: "Alick Macheso",
      role: "Musician",
      gifts: [
        { item: "2022 Mercedes Benz GLE 400d", value: 140000, currency: "USD", date: "2024-03-10", source: "https://www.herald.co.zw/alick-macheso-gifted/" },
        { item: "2026 Toyota Fortuner GD 6", value: null, currency: "USD", date: "2026-06-20", source: "https://iharare.com/alick-macheso-second-gift/" }
      ],
      evidence: ["https://www.herald.co.zw/alick-macheso-gifted/", "https://iharare.com/alick-macheso-second-gift/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-008",
      name: "Sulumani Chimbetu",
      role: "Musician",
      gifts: [
        { item: "2022 Mercedes Benz GLE300d", value: 140000, currency: "USD", date: "2024-02-15", source: "https://nehandaradio.com/sulumani-chimbetu-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sulumani-chimbetu-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-009",
      name: "Sandra Ndebele",
      role: "Musician / Politician",
      gifts: [
        { item: "2024 Mercedes Benz GLE400d", value: 155000, currency: "USD", date: "2024-02-20", source: "https://www.herald.co.zw/sandra-ndebele-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/sandra-ndebele-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-010",
      name: "Enzo Ishall",
      role: "Zimdancehall Musician",
      gifts: [
        { item: "2023 Mercedes Benz GLE 400", value: 145000, currency: "USD", date: "2024-12-20", source: "https://iharare.com/enzo-ishall-gifted/" }
      ],
      evidence: ["https://iharare.com/enzo-ishall-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-011",
      name: "Mudiwa Hood",
      role: "Influencer / Artist",
      gifts: [
        { item: "2025 Range Rover Sport 3.0 Autobiography SUV", value: null, currency: "USD", date: "2025-11-15", source: "https://www.zimeye.net/2025/11/15/mudiwa-hood-gifted/" }
      ],
      evidence: ["https://www.zimeye.net/2025/11/15/mudiwa-hood-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-012",
      name: "Killer T",
      role: "Musician",
      gifts: [
        { item: "2023 Mercedes Benz GLE350d", value: 100000, currency: "USD", date: "2024-05-10", source: "https://nehandaradio.com/killer-t-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/killer-t-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-013",
      name: "Seh Calaz",
      role: "Zimdancehall Musician",
      gifts: [
        { item: "Mercedes Benz GLE350d 4MATIC", value: 85000, currency: "USD", date: "2025-02-12", source: "https://iharare.com/seh-calaz-gifted/" }
      ],
      evidence: ["https://iharare.com/seh-calaz-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-014",
      name: "Tocky Vibes",
      role: "Zimdancehall Musician",
      gifts: [
        { item: "2022 Mercedes Benz GLE350d 4Matic", value: 90000, currency: "USD", date: "2024-08-25", source: "https://www.herald.co.zw/tocky-vibes-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/tocky-vibes-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-015",
      name: "Jeys Marabini",
      role: "Afro Jazz Musician",
      gifts: [
        { item: "Toyota Hilux GD6 Dakar", value: null, currency: "USD", date: "2024-04-22", source: "https://nehandaradio.com/jeys-marabini-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/jeys-marabini-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-016",
      name: "Sniper Storm",
      role: "Zimdancehall Musician",
      gifts: [
        { item: "Mercedes Benz C200", value: null, currency: "USD", date: "2024-03-05", source: "https://iharare.com/sniper-storm-gifted/" }
      ],
      evidence: ["https://iharare.com/sniper-storm-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-017",
      name: "Nicholas Zacharia",
      role: "Sungura Musician",
      gifts: [
        { item: "2024 Toyota Fortuner", value: null, currency: "USD", date: "2024-03-12", source: "https://www.herald.co.zw/nicholas-zacharia-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/nicholas-zacharia-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-018",
      name: "Dorcas Moyo",
      role: "Gospel Musician",
      gifts: [
        { item: "2025 Toyota Fortuner", value: null, currency: "USD", date: "2025-01-18", source: "https://nehandaradio.com/dorcas-moyo-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/dorcas-moyo-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-019",
      name: "Mechanic Manyeruke",
      role: "Gospel Musician",
      gifts: [
        { item: "Toyota Fortuner", value: null, currency: "USD", date: "2025-01-18", source: "https://www.herald.co.zw/mechanic-manyeruke-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/mechanic-manyeruke-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-020",
      name: "Olivia Charamba",
      role: "Gospel Musician",
      gifts: [
        { item: "Toyota Fortuner", value: null, currency: "USD", date: "2025-01-18", source: "https://www.herald.co.zw/olivia-charamba-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/olivia-charamba-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-021",
      name: "Leonard Karikoga Zhakata",
      role: "Musician",
      gifts: [
        { item: "Toyota Fortuner", value: null, currency: "USD", date: "2025-01-18", source: "https://nehandaradio.com/leonard-zhakata-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/leonard-zhakata-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-022",
      name: "DJ Fantan",
      role: "DJ / Musician",
      gifts: [
        { item: "Mercedes Benz (model not specified)", value: null, currency: "USD", date: "2025-04-12", source: "https://iharare.com/dj-fantan-gifted/" }
      ],
      evidence: ["https://iharare.com/dj-fantan-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-023",
      name: "Mathias Mhere",
      role: "Gospel Musician",
      gifts: [
        { item: "Mercedes Benz", value: null, currency: "USD", date: "2025-05-10", source: "https://www.herald.co.zw/mathias-mhere-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/mathias-mhere-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-024",
      name: "Andy Muridzo",
      role: "Musician",
      gifts: [
        { item: "Mercedes Benz", value: null, currency: "USD", date: "2025-05-10", source: "https://nehandaradio.com/andy-muridzo-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/andy-muridzo-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-025",
      name: "Diana Samkange",
      role: "Musician",
      gifts: [
        { item: "Mercedes Benz", value: null, currency: "USD", date: "2025-05-10", source: "https://iharare.com/diana-samkange-gifted/" }
      ],
      evidence: ["https://iharare.com/diana-samkange-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-026",
      name: "Peter Moyo",
      role: "Musician (son of Tongai Moyo)",
      gifts: [
        { item: "Mercedes Benz C Class", value: null, currency: "USD", date: "2025-01-05", source: "https://www.zimeye.net/2025/01/05/peter-moyo-gifted/" }
      ],
      evidence: ["https://www.zimeye.net/2025/01/05/peter-moyo-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-027",
      name: "Shinsoman",
      role: "Zimdancehall Musician",
      gifts: [
        { item: "Mercedes-Benz C-Class", value: 25000, currency: "USD", date: "2025-09-15", source: "https://nehandaradio.com/shinsoman-gifted/" },
        { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2025-09-15", source: "https://nehandaradio.com/shinsoman-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/shinsoman-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-028",
      name: "Mambo Dhuterere",
      role: "Gospel Musician",
      gifts: [
        { item: "White Toyota Fortuner 2.8 GD6", value: null, currency: "USD", date: "2025-05-20", source: "https://www.herald.co.zw/mambo-dhuterere-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-05-20", source: "https://www.herald.co.zw/mambo-dhuterere-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/mambo-dhuterere-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-029",
      name: "Mai Dhuterere",
      role: "Gospel Musician",
      gifts: [
        { item: "White Toyota Fortuner 2.8 GD6", value: null, currency: "USD", date: "2025-05-20", source: "https://www.herald.co.zw/mai-dhuterere-gifted/" },
        { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2025-05-20", source: "https://www.herald.co.zw/mai-dhuterere-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/mai-dhuterere-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-030",
      name: "Jah Master",
      role: "Zimdancehall Musician",
      gifts: [
        { item: "Mercedes-Benz C200", value: null, currency: "USD", date: "2024-04-15", source: "https://iharare.com/jah-master-gifted/" }
      ],
      evidence: ["https://iharare.com/jah-master-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-031",
      name: "DJ Towers",
      role: "DJ / Entertainer",
      gifts: [
        { item: "2025 Toyota Fortuner 4x4 2.8 GD6", value: null, currency: "USD", date: "2025-08-25", source: "https://www.zimeye.net/2025/08/25/dj-towers-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-08-25", source: "https://www.zimeye.net/2025/08/25/dj-towers-gifted/" }
      ],
      evidence: ["https://www.zimeye.net/2025/08/25/dj-towers-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-032",
      name: "Ras Caleb",
      role: "Reggae Artist",
      gifts: [
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2024-04-10", source: "https://nehandaradio.com/ras-caleb-gifted/" },
        { item: "US$2,000 cash", value: 2000, currency: "USD", date: "2024-04-10", source: "https://nehandaradio.com/ras-caleb-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/ras-caleb-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-033",
      name: "Freeman HKD",
      role: "Zimdancehall Musician",
      gifts: [
        { item: "Mercedes-Benz GLE 400d", value: null, currency: "USD", date: "2026-07-03", source: "https://mumbhanzi.media/2026/07/03/freeman-gifted/" },
        { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-07-03", source: "https://mumbhanzi.media/2026/07/03/freeman-gifted/" }
      ],
      evidence: ["https://mumbhanzi.media/2026/07/03/freeman-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-034",
      name: "Kikky Badass",
      role: "Rapper / Musician",
      gifts: [
        { item: "Mercedes Benz C250", value: null, currency: "USD", date: "2024-06-20", source: "https://www.herald.co.zw/kikky-badass-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/kikky-badass-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-035",
      name: "Feli Nandi",
      role: "Musician / Restaurateur",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-05-22", source: "https://iharare.com/feli-nandi-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2026-05-22", source: "https://iharare.com/feli-nandi-gifted/" }
      ],
      evidence: ["https://iharare.com/feli-nandi-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-036",
      name: "Ex-Q",
      role: "Musician",
      gifts: [
        { item: "2025 Mercedes-Benz GLE 450", value: 110000, currency: "USD", date: "2026-05-23", source: "https://www.zimeye.net/2026/05/23/ex-q-gifted/" },
        { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-05-23", source: "https://www.zimeye.net/2026/05/23/ex-q-gifted/" }
      ],
      evidence: ["https://www.zimeye.net/2026/05/23/ex-q-gifted/"],
      status: "confirmed"
    },

    // ============================================================
    // COMEDIANS & CONTENT CREATORS (IDs 037-045)
    // ============================================================
    {
      id: "CHV-2026-037",
      name: "Frets Donzvo",
      role: "Comedian / Musician",
      gifts: [
        { item: "2026 Toyota Fortuner GD6", value: null, currency: "USD", date: "2026-08-25", source: "https://nehandaradio.com/frets-donzvo-gifted/" },
        { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-08-25", source: "https://nehandaradio.com/frets-donzvo-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/frets-donzvo-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-038",
      name: "Admire 'Bhutisi' Kuzhangaira",
      role: "Comedian",
      gifts: [
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2024-12-05", source: "https://iharare.com/bhutisi-gifted/" },
        { item: "Mercedes Benz", value: null, currency: "USD", date: "2025-03-15", source: "https://www.herald.co.zw/bhutisi-second-gift/" },
        { item: "US$5,000 cash", value: 5000, currency: "USD", date: "2025-03-15", source: "https://www.herald.co.zw/bhutisi-second-gift/" }
      ],
      evidence: ["https://iharare.com/bhutisi-gifted/", "https://www.herald.co.zw/bhutisi-second-gift/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-039",
      name: "Freddy 'Kapfupi' Manjalima",
      role: "Comedian",
      gifts: [
        { item: "Two Toyota Aquas", value: null, currency: "USD", date: "2025-04-18", source: "https://www.zimeye.net/2025/04/18/kapfupi-gifted/" },
        { item: "US$3,000 cash", value: 3000, currency: "USD", date: "2025-04-18", source: "https://www.zimeye.net/2025/04/18/kapfupi-gifted/" }
      ],
      evidence: ["https://www.zimeye.net/2025/04/18/kapfupi-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-040",
      name: "Yahya Goodvibes",
      role: "Comedian / Socialite",
      gifts: [
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2025-01-25", source: "https://nehandaradio.com/yahya-goodvibes-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/yahya-goodvibes-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-041",
      name: "Allen Skits",
      role: "Comedian / Socialite",
      gifts: [
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2025-01-25", source: "https://www.herald.co.zw/allen-skits-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/allen-skits-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-042",
      name: "Rolland 'Boss Kedha' Lunga",
      role: "Comedian",
      gifts: [
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2025-02-08", source: "https://iharare.com/boss-kedha-gifted/" }
      ],
      evidence: ["https://iharare.com/boss-kedha-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-043",
      name: "Wilson 'MaVery' Masakadze",
      role: "Comedian",
      gifts: [
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2025-02-08", source: "https://www.zimeye.net/2025/02/08/mawery-gifted/" }
      ],
      evidence: ["https://www.zimeye.net/2025/02/08/mawery-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-044",
      name: "Mr. Ridhikurasi",
      role: "Content Creator",
      gifts: [
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2025-06-12", source: "https://nehandaradio.com/ridhikurasi-gifted/" },
        { item: "US$5,000 cash", value: 5000, currency: "USD", date: "2025-06-12", source: "https://nehandaradio.com/ridhikurasi-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/ridhikurasi-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-045",
      name: "Comic Elder",
      role: "Comedian",
      gifts: [
        { item: "US$150,000 cash", value: 150000, currency: "USD", date: "2025-10-20", source: "https://www.herald.co.zw/comic-elder-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/comic-elder-gifted/"],
      status: "confirmed"
    },

    // ============================================================
    // RELIGIOUS LEADERS (IDs 046-095)
    // ============================================================
    {
      id: "CHV-2026-046",
      name: "Prophet Emmanuel Makandiwa",
      role: "Religious Leader (UFIC)",
      gifts: [
        { item: "US$1,000,000 cash", value: 1000000, currency: "USD", date: "2026-06-15", source: "https://www.herald.co.zw/makandiwa-accepts-chivayo-gift/" },
        { item: "2026 Rolls-Royce Cullinan Facelift", value: null, currency: "USD", date: "2026-06-15", source: "https://www.herald.co.zw/makandiwa-accepts-chivayo-gift/" }
      ],
      evidence: ["https://www.herald.co.zw/makandiwa-accepts-chivayo-gift/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-047",
      name: "Ruth Makandiwa",
      role: "Emmanuel Makandiwa's Wife",
      gifts: [
        { item: "Mercedes-Benz G-Wagon", value: null, currency: "USD", date: "2026-06-15", source: "https://www.herald.co.zw/makandiwa-accepts-chivayo-gift/" }
      ],
      evidence: ["https://www.herald.co.zw/makandiwa-accepts-chivayo-gift/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-048",
      name: "Prophet Ian Ndlovu",
      role: "Religious Leader",
      gifts: [
        { item: "2025 Toyota Land Cruiser 300 Series VXR", value: null, currency: "USD", date: "2025-04-20", source: "https://nehandaradio.com/ian-ndlovu-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/ian-ndlovu-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-049",
      name: "Mrs. Ndlovu",
      role: "Ian Ndlovu's Wife",
      gifts: [
        { item: "2025 Toyota Fortuner 2.8D GD6", value: null, currency: "USD", date: "2025-04-20", source: "https://nehandaradio.com/ian-ndlovu-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/ian-ndlovu-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-050",
      name: "Bishop Nehemiah Mutendi",
      role: "Religious Leader (ZCC)",
      gifts: [
        { item: "US$2,000,000 cash", value: 2000000, currency: "USD", date: "2025-11-10", source: "https://www.herald.co.zw/mutendi-gifted/" },
        { item: "2025 Mercedes Maybach S680", value: 450000, currency: "USD", date: "2025-11-10", source: "https://www.herald.co.zw/mutendi-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/mutendi-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-051",
      name: "Prophet Walter Magaya",
      role: "Religious Leader",
      gifts: [
        { item: "2025 Mercedes Maybach GLS600", value: 450000, currency: "USD", date: "2025-09-05", source: "https://nehandaradio.com/walter-magaya-gifted/" },
        { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2025-09-05", source: "https://nehandaradio.com/walter-magaya-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/walter-magaya-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-052",
      name: "Tendai Magaya",
      role: "Walter Magaya's Wife",
      gifts: [
        { item: "2025 Toyota Land Cruiser 300 VXR", value: null, currency: "USD", date: "2025-09-05", source: "https://nehandaradio.com/walter-magaya-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-09-05", source: "https://nehandaradio.com/walter-magaya-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/walter-magaya-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-053",
      name: "Prophet Uebert Angel",
      role: "Religious Leader",
      gifts: [
        { item: "Bentley Flying Spectre", value: null, currency: "USD", date: "2025-07-20", source: "https://www.herald.co.zw/uebert-angel-gifted/" },
        { item: "Rolls Royce Cullinan", value: null, currency: "USD", date: "2025-07-20", source: "https://www.herald.co.zw/uebert-angel-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/uebert-angel-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-054",
      name: "Beverly Angel",
      role: "Uebert Angel's Wife",
      gifts: [
        { item: "Lexus GX550", value: null, currency: "USD", date: "2025-07-20", source: "https://www.herald.co.zw/uebert-angel-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/uebert-angel-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-055",
      name: "Seer Angel",
      role: "Uebert Angel's Son",
      gifts: [
        { item: "Bentley GT Continental", value: null, currency: "USD", date: "2025-07-20", source: "https://www.herald.co.zw/uebert-angel-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/uebert-angel-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-056",
      name: "Pastor Felix",
      role: "Religious Leader (Spirit Embassy / Uebert Angel's spiritual son)",
      gifts: [
        { item: "2026 Toyota Land Cruiser 300 Series ZX", value: null, currency: "USD", date: "2026-08-15", source: "https://www.zimeye.net/2026/08/15/pastor-felix-gifted/" },
        { item: "US$10,000 cash for fuel", value: 10000, currency: "USD", date: "2026-08-15", source: "https://www.zimeye.net/2026/08/15/pastor-felix-gifted/" }
      ],
      evidence: ["https://www.zimeye.net/2026/08/15/pastor-felix-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-057",
      name: "Pastor Elijah",
      role: "Religious Leader (Mount Gilead / Uebert Angel's spiritual son)",
      gifts: [
        { item: "2026 Toyota Land Cruiser 300 Series ZX", value: null, currency: "USD", date: "2026-08-15", source: "https://www.zimeye.net/2026/08/15/pastor-elijah-gifted/" },
        { item: "US$10,000 cash for fuel", value: 10000, currency: "USD", date: "2026-08-15", source: "https://www.zimeye.net/2026/08/15/pastor-elijah-gifted/" }
      ],
      evidence: ["https://www.zimeye.net/2026/08/15/pastor-elijah-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-058",
      name: "Prophetess Tracey Pilime",
      role: "Religious Leader (Hope of Glory International Ministries)",
      gifts: [
        { item: "Offered: 2026 Toyota Lexus GX 550", value: 220000, currency: "USD", date: "2026-07-20", source: "https://pindula.co.zw/2026/07/20/tracey-pilime-gifted/" },
        { item: "Offered: US$100,000 cash", value: 100000, currency: "USD", date: "2026-07-20", source: "https://pindula.co.zw/2026/07/20/tracey-pilime-gifted/" }
      ],
      evidence: ["https://pindula.co.zw/2026/07/20/tracey-pilime-gifted/"],
      status: "pending"
    },
    {
      id: "CHV-2026-059",
      name: "Madzibaba Lawrence Lavious Katsiru",
      role: "Religious Leader (Johanne Masowe Chishanu - Marondera)",
      gifts: [
        { item: "2025 Mercedes Benz GLS450 4matic", value: null, currency: "USD", date: "2025-08-30", source: "https://www.herald.co.zw/katsiru-gifted/" },
        { item: "Lexus LX450d", value: null, currency: "USD", date: "2025-08-30", source: "https://www.herald.co.zw/katsiru-gifted/" },
        { item: "2026 Lexus LX500D", value: 250000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/katsiru-second-gift/" },
        { item: "US$50,000 for fuel and upkeep", value: 50000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/katsiru-second-gift/" }
      ],
      evidence: ["https://www.herald.co.zw/katsiru-gifted/", "https://nehandaradio.com/katsiru-second-gift/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-060",
      name: "Madzibaba Israel Muhana",
      role: "Religious Leader (Johanne Masowe Chishanu - Coca-Cola Branch)",
      gifts: [
        { item: "Lexus 450d", value: null, currency: "USD", date: "2025-08-30", source: "https://www.herald.co.zw/israel-muhana-gifted/" },
        { item: "2025 Mercedes Benz GLE 301d 4matic", value: null, currency: "USD", date: "2025-08-30", source: "https://www.herald.co.zw/israel-muhana-gifted/" },
        { item: "2026 Lexus LX500D", value: 250000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/israel-muhana-second-gift/" },
        { item: "US$50,000 for fuel and upkeep", value: 50000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/israel-muhana-second-gift/" }
      ],
      evidence: ["https://www.herald.co.zw/israel-muhana-gifted/", "https://nehandaradio.com/israel-muhana-second-gift/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-061",
      name: "Madzibaba Gibson",
      role: "Religious Leader (Johanne Masowe Chishanu - Chinhevere/Chiweshe)",
      gifts: [
        { item: "2026 Lexus LX500D", value: 250000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/gibson-gifted/" },
        { item: "US$50,000 for fuel and upkeep", value: 50000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/gibson-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/gibson-gifted/"],
      status: "confirmed"
    },
    // ---- 12 Additional Johanne Masowe Chishanu Leaders (062-073) ----
    {
      id: "CHV-2026-062",
      name: "Madzibaba Norman Sanyangore",
      role: "Religious Leader (Johanne Masowe Chishanu - Cold Comfort)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-063",
      name: "Madzibaba Nicholas Hwatura",
      role: "Religious Leader (Johanne Masowe Chishanu - N Richards)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-064",
      name: "Madzibaba Onwell Chigorimbo",
      role: "Religious Leader (Johanne Masowe Chishanu - Tenwald)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-065",
      name: "Madzibaba Tapera Kativhu",
      role: "Religious Leader (Johanne Masowe Chishanu - Ruwa)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-066",
      name: "Madzibaba Farai Sabau",
      role: "Religious Leader (Johanne Masowe Chishanu - Savannah)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-067",
      name: "Madzibaba Wilson Nhauriro",
      role: "Religious Leader (Johanne Masowe Chishanu - Chitungwiza)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-068",
      name: "Madzibaba Lucky Chakundura",
      role: "Religious Leader (Johanne Masowe Chishanu - Highfields)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-069",
      name: "Madzibaba Takudzwa Ketulo",
      role: "Religious Leader (Johanne Masowe Chishanu - Stapleford)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-070",
      name: "Madzibaba Biggie Musanzika",
      role: "Religious Leader (Johanne Masowe Chishanu - Centenary)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-071",
      name: "Madzibaba Moses Mwanza",
      role: "Religious Leader (Johanne Masowe Chishanu - Rusape)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-072",
      name: "Madzibaba Fungai Nyadzunda",
      role: "Religious Leader (Johanne Masowe Chishanu - Gwanzura/Mudare)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-073",
      name: "Madzibaba Steve Rutsito",
      role: "Religious Leader (Johanne Masowe Chishanu - Velvet/Musondosi)",
      gifts: [
        { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" },
        { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/johanne-masowe-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/johanne-masowe-leaders-gifted/"],
      status: "confirmed"
    },
    // ---- 10 South African Johanne Masowe Chishanu Members (074-083) ----
    {
      id: "CHV-2026-074",
      name: "Madzibaba Itai",
      role: "Religious Leader (Johanne Masowe Chishanu - City Deep, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-075",
      name: "Madzibaba Hermish",
      role: "Religious Leader (Johanne Masowe Chishanu - Kempton Park, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-076",
      name: "Madzibaba Ishmael",
      role: "Religious Leader (Johanne Masowe Chishanu - Venda, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-077",
      name: "Madzibaba Bynage",
      role: "Religious Leader (Johanne Masowe Chishanu - Free State, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-078",
      name: "Madzimai Loveness",
      role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-079",
      name: "Madzibaba Aron",
      role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-080",
      name: "Madzimai Memory",
      role: "Religious Leader (Johanne Masowe Chishanu - Germiston, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-081",
      name: "Madzibaba Thimothy",
      role: "Religious Leader (Johanne Masowe Chishanu - Eastern Cape, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-082",
      name: "Madzibaba Misheck",
      role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-083",
      name: "Madzibaba Kennedy",
      role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" },
        { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://nehandaradio.com/sa-johanne-masowe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/sa-johanne-masowe-gifted/"],
      status: "confirmed"
    },
    // ---- Other Church Leaders (084-095) ----
    {
      id: "CHV-2026-084",
      name: "Madzibaba Sapatina",
      role: "Church Leader",
      gifts: [
        { item: "2025 Toyota Fortuner GD6", value: 65000, currency: "USD", date: "2025-10-15", source: "https://www.herald.co.zw/sapatina-gifted/" },
        { item: "US$20,000 cash", value: 20000, currency: "USD", date: "2025-10-15", source: "https://www.herald.co.zw/sapatina-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/sapatina-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-085",
      name: "Madzibaba Moses",
      role: "Religious Leader (Vapositori4ED)",
      gifts: [
        { item: "2025 Toyota Fortuner 4x4", value: null, currency: "USD", date: "2025-09-10", source: "https://nehandaradio.com/moses-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-09-10", source: "https://nehandaradio.com/moses-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/moses-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-086",
      name: "Madzibaba Owen",
      role: "Religious Leader (Vapositori4ED)",
      gifts: [
        { item: "2025 Toyota Fortuner 4x4", value: null, currency: "USD", date: "2025-09-10", source: "https://nehandaradio.com/owen-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-09-10", source: "https://nehandaradio.com/owen-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/owen-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-087",
      name: "Madzibaba Forbes Chikobvu",
      role: "Religious Leader (Moses' assistant)",
      gifts: [
        { item: "Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2025-09-10", source: "https://nehandaradio.com/forbes-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/forbes-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-088",
      name: "Madzibaba Auto",
      role: "Religious Leader",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4D", value: null, currency: "USD", date: "2026-07-15", source: "https://nehandaradio.com/auto-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/auto-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-089",
      name: "Madzibaba Tinashe",
      role: "Religious Leader",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4D", value: null, currency: "USD", date: "2026-07-15", source: "https://nehandaradio.com/tinashe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/tinashe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-090",
      name: "Madzibaba Bhuru",
      role: "Religious Leader",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4D", value: null, currency: "USD", date: "2026-07-15", source: "https://nehandaradio.com/bhuru-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/bhuru-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-091",
      name: "Madzibaba Rabbi Musande",
      role: "Religious Leader",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4D", value: null, currency: "USD", date: "2026-07-15", source: "https://nehandaradio.com/rabbi-musande-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/rabbi-musande-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-092",
      name: "Madzibaba Patrick",
      role: "Religious Leader",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4D", value: null, currency: "USD", date: "2026-07-15", source: "https://nehandaradio.com/patrick-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/patrick-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-093",
      name: "Madzibaba Benjamin",
      role: "Religious Leader",
      gifts: [
        { item: "2026 Toyota Fortuner 2.4D", value: null, currency: "USD", date: "2026-07-15", source: "https://nehandaradio.com/benjamin-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/benjamin-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-094",
      name: "Madzibaba Remincco Tafadzwa Zhangazha",
      role: "Religious Leader / Friend (Johanne Masowe Chishanu)",
      gifts: [
        { item: "2026 Lamborghini Urus SE", value: null, currency: "USD", date: "2026-08-10", source: "https://www.zimeye.net/2026/08/10/remincco-gifted/" },
        { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2026-08-10", source: "https://www.zimeye.net/2026/08/10/remincco-gifted/" }
      ],
      evidence: ["https://www.zimeye.net/2026/08/10/remincco-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-095",
      name: "Madzibaba Ngoni",
      role: "Religious Leader (Johanne Masowe Chishanu - Evaton Branch, South Africa)",
      gifts: [
        { item: "2026 Toyota Land Cruiser 300 Series ZX", value: null, currency: "USD", date: "2026-08-20", source: "https://nehandaradio.com/ngoni-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/ngoni-gifted/"],
      status: "confirmed"
    },

    // ============================================================
    // TRADITIONAL & MEDIA (096-100)
    // ============================================================
    {
      id: "CHV-2026-096",
      name: "Chief Hwenje",
      role: "Traditional Chief",
      gifts: [
        { item: "Toyota Hilux", value: 100000, currency: "USD", date: "2025-11-05", source: "https://www.herald.co.zw/chief-hwenje-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/chief-hwenje-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-097",
      name: "Mai Chisamba",
      role: "Media Personality",
      gifts: [
        { item: "Toyota", value: 55000, currency: "USD", date: "2025-06-15", source: "https://nehandaradio.com/mai-chisamba-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/mai-chisamba-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-098",
      name: "Reuben Barwe",
      role: "Journalist",
      gifts: [
        { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2025-12-01", source: "https://www.herald.co.zw/reuben-barwe-gifted/" },
        { item: "New car", value: null, currency: "USD", date: "2025-12-01", source: "https://www.herald.co.zw/reuben-barwe-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/reuben-barwe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-099",
      name: "Phathisani Sibanda",
      role: "Radio Presenter",
      gifts: [
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2024-12-10", source: "https://nehandaradio.com/phathisani-sibanda-gifted/" },
        { item: "Offered: 2025 Toyota Fortuner GD6", value: null, currency: "USD", date: "2025-08-15", source: "https://nehandaradio.com/phathisani-sibanda-offer/" }
      ],
      evidence: ["https://nehandaradio.com/phathisani-sibanda-gifted/", "https://nehandaradio.com/phathisani-sibanda-offer/"],
      status: "pending"
    },
    {
      id: "CHV-2026-100",
      name: "Yvonne Tivatye",
      role: "Radio Manager",
      gifts: [
        { item: "Toyota Aqua", value: null, currency: "USD", date: "2025-12-10", source: "https://nehandaradio.com/yvonne-tivatye-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/yvonne-tivatye-gifted/"],
      status: "confirmed"
    },

    // ============================================================
    // SPORTS (101-108)
    // ============================================================
    {
      id: "CHV-2026-101",
      name: "Peter Ndlovu",
      role: "Football Legend (former Warriors captain)",
      gifts: [
        { item: "2024 BMW X6M Sport Competition", value: 144000, currency: "USD", date: "2024-12-20", source: "https://www.herald.co.zw/peter-ndlovu-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/peter-ndlovu-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-102",
      name: "Luke Mnkandla",
      role: "Highlanders FC Chairman",
      gifts: [
        { item: "Toyota Fortuner 2.8 GD6", value: 80500, currency: "USD", date: "2026-02-15", source: "https://nehandaradio.com/highlanders-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/highlanders-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-103",
      name: "Denzel Mnkandla",
      role: "Highlanders FC CEO",
      gifts: [
        { item: "Toyota Fortuner 2.4 GD6", value: 72500, currency: "USD", date: "2026-02-15", source: "https://nehandaradio.com/highlanders-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/highlanders-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-104",
      name: "Jabulani Nkomo",
      role: "Highlanders FC Curator",
      gifts: [
        { item: "Toyota Land Cruiser 300 Series VXR", value: null, currency: "USD", date: "2026-02-15", source: "https://nehandaradio.com/highlanders-leaders-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2026-02-15", source: "https://nehandaradio.com/highlanders-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/highlanders-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-105",
      name: "Madinda Ndlovu",
      role: "Highlanders FC Legend",
      gifts: [
        { item: "Toyota Fortuner 2.4 GD6", value: 72500, currency: "USD", date: "2026-02-15", source: "https://nehandaradio.com/highlanders-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/highlanders-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-106",
      name: "Sikhumbuzo Mpofu",
      role: "Chivayo's Lawyer",
      gifts: [
        { item: "2026 Range Rover Sport Autobiography", value: null, currency: "USD", date: "2026-04-25", source: "https://nehandaradio.com/mpofu-mubaiwa-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2026-04-25", source: "https://nehandaradio.com/mpofu-mubaiwa-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/mpofu-mubaiwa-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-107",
      name: "Adv. Edley Mubaiwa",
      role: "Chivayo's Lawyer",
      gifts: [
        { item: "2026 Range Rover Sport Autobiography", value: null, currency: "USD", date: "2026-04-25", source: "https://nehandaradio.com/mpofu-mubaiwa-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2026-04-25", source: "https://nehandaradio.com/mpofu-mubaiwa-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/mpofu-mubaiwa-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-108",
      name: "Pupurai Togarepi",
      role: "ZANU PF Chief Whip",
      gifts: [
        { item: "2026 Toyota Fortuner GD6 2.8", value: 82000, currency: "USD", date: "2026-07-20", source: "https://www.herald.co.zw/pupurai-togarepi-gifted/" },
        { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2026-07-20", source: "https://www.herald.co.zw/pupurai-togarepi-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/pupurai-togarepi-gifted/"],
      status: "confirmed"
    },

    // ============================================================
    // BUSINESS, ARTS & CULTURE (109-118)
    // ============================================================
    {
      id: "CHV-2026-109",
      name: "Dr. Nicholas Ndebele",
      role: "ZITF CEO",
      gifts: [
        { item: "2025 Toyota Land Cruiser 300 VXR", value: 200000, currency: "USD", date: "2025-05-20", source: "https://nehandaradio.com/ndebele-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/ndebele-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-110",
      name: "Aaron Chiundura Moyo",
      role: "Veteran Novelist / Filmmaker",
      gifts: [
        { item: "2025 Toyota Fortuner 4x4 GD6", value: null, currency: "USD", date: "2025-11-25", source: "https://www.herald.co.zw/aaron-chiundura-moyo-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-11-25", source: "https://www.herald.co.zw/aaron-chiundura-moyo-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/aaron-chiundura-moyo-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-111",
      name: "Rufaro Chiworeso Mukombe",
      role: "Jah Prayzah's Wife",
      gifts: [
        { item: "2024/2025 Land Rover Defender 2.4 D / 3.0 D", value: 120000, currency: "USD", date: "2025-07-25", source: "https://nehandaradio.com/rufaro-mukombe-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/rufaro-mukombe-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-112",
      name: "Mandy",
      role: "Therapist at Masawara Spa",
      gifts: [
        { item: "Mercedes-Benz C200", value: null, currency: "USD", date: "2026-08-18", source: "https://nehandaradio.com/mandy-cathy-gifted/" },
        { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-08-18", source: "https://nehandaradio.com/mandy-cathy-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/mandy-cathy-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-113",
      name: "Cathy",
      role: "Bookings/Reception at Masawara Spa",
      gifts: [
        { item: "Mercedes-Benz C200", value: null, currency: "USD", date: "2026-08-18", source: "https://nehandaradio.com/mandy-cathy-gifted/" },
        { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-08-18", source: "https://nehandaradio.com/mandy-cathy-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/mandy-cathy-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-114",
      name: "Madzibaba Flotcher Dispenser",
      role: "Religious Leader (Johanne Masowe Echishanu - Mhondoro)",
      gifts: [
        { item: "Toyota Fortuner GD-6", value: null, currency: "USD", date: "2025-10-15", source: "https://www.herald.co.zw/flotcher-dispenser-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/flotcher-dispenser-gifted/"],
      status: "confirmed"
    },

    // ============================================================
    // DECLINED / DISPUTED GIFTS (115-116)
    // ============================================================
    {
      id: "CHV-2026-115",
      name: "Nqobile Magwizi",
      role: "ZIFA President (disputed)",
      gifts: [
        { item: "Allegation: Received vehicles totalling R7.2 million (approx. US$400,000) across two occasions in 2025 and 2026", value: 400000, currency: "USD", date: "2025-2026", source: "https://en.wikipedia.org/wiki/Nqobile_Magwizi" }
      ],
      evidence: ["https://en.wikipedia.org/wiki/Nqobile_Magwizi"],
      status: "disputed"
    },
    {
      id: "CHV-2026-116",
      name: "Eunor Guti",
      role: "ZAOGA Leader (declined)",
      gifts: [
        { item: "Declined: US$2M cash", value: 2000000, currency: "USD", date: "2025-08-20", source: "https://www.herald.co.zw/eunor-guti-declines/" },
        { item: "Declined: Toyota Land Cruiser 300 VXR", value: null, currency: "USD", date: "2025-08-20", source: "https://www.herald.co.zw/eunor-guti-declines/" }
      ],
      evidence: ["https://www.herald.co.zw/eunor-guti-declines/"],
      status: "disputed"
    },

    // ============================================================
    // ORGANISATIONS & INSTITUTIONS (117-124)
    // ============================================================
    {
      id: "CHV-2026-117",
      name: "Vapositori4ED Movement",
      role: "Religious Group",
      gifts: [
        { item: "13 vehicles (Toyota Fortuners and Hilux pickups)", value: null, currency: "USD", date: "2025-09-10", source: "https://nehandaradio.com/vapositori4ed-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/vapositori4ed-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-118",
      name: "Johanne Masowe Church",
      role: "Religious Institution",
      gifts: [
        { item: "10 buses", value: 2100000, currency: "USD", date: "2026-06-01", source: "https://www.herald.co.zw/johanne-masowe-buses/" }
      ],
      evidence: ["https://www.herald.co.zw/johanne-masowe-buses/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-119",
      name: "UFIC (Makandiwa's Church)",
      role: "Religious Institution",
      gifts: [
        { item: "US$1 million for church construction", value: 1000000, currency: "USD", date: "2026-06-15", source: "https://www.herald.co.zw/makandiwa-accepts-chivayo-gift/" }
      ],
      evidence: ["https://www.herald.co.zw/makandiwa-accepts-chivayo-gift/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-120",
      name: "Dudley Hall Primary School",
      role: "School",
      gifts: [
        { item: "1 bus", value: 210000, currency: "USD", date: "2026-05-10", source: "https://nehandaradio.com/dudley-hall-bus/" }
      ],
      evidence: ["https://nehandaradio.com/dudley-hall-bus/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-121",
      name: "John Landa Nkomo School",
      role: "School",
      gifts: [
        { item: "1 bus", value: 210000, currency: "USD", date: "2026-05-10", source: "https://nehandaradio.com/john-landa-nkomo-bus/" }
      ],
      evidence: ["https://nehandaradio.com/john-landa-nkomo-bus/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-122",
      name: "Provincial Hospitals",
      role: "Healthcare",
      gifts: [
        { item: "10 Toyota Land Cruiser ICU ambulances", value: 900000, currency: "USD", date: "2026-04-15", source: "https://www.herald.co.zw/chivayo-ambulances/" }
      ],
      evidence: ["https://www.herald.co.zw/chivayo-ambulances/"],
      status: "confirmed"
    },

    // ============================================================
    // GROUP ENTRIES (not individual, but included for completeness)
    // ============================================================
    {
      id: "CHV-2026-123",
      name: "10 ZANU PF Provincial Chairpersons",
      role: "Politicians",
      gifts: [
        { item: "Each: 2025 Toyota Land Cruiser 300 VXR", value: 190000, currency: "USD", date: "2025-12-20", source: "https://www.herald.co.zw/zanu-pf-chairpersons-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/zanu-pf-chairpersons-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-124",
      name: "ZANU PF Women's League",
      role: "Political Organisation",
      gifts: [
        { item: "6 Toyota Land Cruisers", value: null, currency: "USD", date: "2025-12-20", source: "https://www.herald.co.zw/zanu-pf-womens-league-gifted/" },
        { item: "10 Toyota Hilux GD6", value: null, currency: "USD", date: "2025-12-20", source: "https://www.herald.co.zw/zanu-pf-womens-league-gifted/" }
      ],
      evidence: ["https://www.herald.co.zw/zanu-pf-womens-league-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-125",
      name: "12 Other Church Leaders",
      role: "Religious Leaders",
      gifts: [
        { item: "Each received a 2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/church-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/church-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-126",
      name: "3 Senior Church Leaders",
      role: "Religious Leaders",
      gifts: [
        { item: "Each: 2026 Lexus LX500D", value: 250000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/senior-church-leaders-gifted/" },
        { item: "Each: US$50,000 fuel", value: 50000, currency: "USD", date: "2026-08-01", source: "https://nehandaradio.com/senior-church-leaders-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/senior-church-leaders-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-127",
      name: "49 Bikers",
      role: "Biker Group Members",
      gifts: [
        { item: "US$1,000 each", value: 1000, currency: "USD", date: "2026-03-15", source: "https://nehandaradio.com/bikers-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/bikers-gifted/"],
      status: "confirmed"
    },
    {
      id: "CHV-2026-128",
      name: "Evangelist Trymore Muparinga",
      role: "Street Preacher",
      gifts: [
        { item: "2025 Toyota Fortuner", value: null, currency: "USD", date: "2025-10-20", source: "https://nehandaradio.com/muparinga-gifted/" },
        { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-10-20", source: "https://nehandaradio.com/muparinga-gifted/" }
      ],
      evidence: ["https://nehandaradio.com/muparinga-gifted/"],
      status: "confirmed"
    }
  ];

  // Filter logic
  let filtered = beneficiaries;
  if (query.trim()) {
    const lower = query.toLowerCase().trim();
    filtered = beneficiaries.filter(item =>
      item.id.toLowerCase().includes(lower) ||
      item.name.toLowerCase().includes(lower)
    );
  }

  // Return response
  return new Response(JSON.stringify({
    results: filtered,
    total: beneficiaries.length,
    matched: filtered.length,
    disclaimer: "This data is based on publicly available media reports. Please verify independently."
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
} 