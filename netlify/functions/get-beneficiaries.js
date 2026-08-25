// netlify/functions/get-beneficiaries.js

exports.handler = async (event) => {
  const recipients = [
    // ============================================================
    // FAMILY & FRIENDS
    // ============================================================
    { name: "Lucy Chivayo", role: "Wife", gift: "2025 Mercedes Benz G Wagon, Range Rover, 2025 Toyota Landcruiser 300 ZX" },
    { name: "Wicknell Chivayo's Sister", role: "Family Member", gift: "2025 Porsche (approximately US$128,000)" },
    { name: "Tazvi Mhaka", role: "Friend", gift: "US$250,000 cash, Toyota Landcruiser VXR 300, 2023 Bentley Beytaga V8 Sport" },
    { name: "Nakamba", role: "Personal Barber", gift: "Mercedes Benz C Class (reward for 1 year 5 months service)" },
    { name: "Ishmael", role: "Fashion Designer", gift: "Car (approximately US$30,000) at Chivayo's sister's wedding" },

    // ============================================================
    // MUSICIANS
    // ============================================================
    { name: "Jah Prayzah", role: "Musician", gift: "Mercedes Benz S500 (US$180k), Toyota Aqua, US$20k cash, Range Rover Autobiography plus US$150k, cars for 4 dancers, Toyota Aqua for son, Toyota Fortuner for mother, vehicles for band members" },
    { name: "Alick Macheso", role: "Musician", gift: "2022 Mercedes Benz GLE 400d (US$140k) plus 2026 Toyota Fortuner GD 6; his manager got Toyota Aqua plus US$2k fuel" },
    { name: "Sulumani Chimbetu", role: "Musician", gift: "2022 Mercedes Benz GLE300d (US$140,000)" },
    { name: "Sandra Ndebele", role: "Musician / Politician", gift: "2024 Mercedes Benz GLE400d (US$155,000)" },
    { name: "Enzo Ishall", role: "Zimdancehall Musician", gift: "2023 Mercedes Benz GLE 400 (US$145,000)" },
    { name: "Mudiwa Hood", role: "Influencer / Artist", gift: "2025 Range Rover Sport 3.0 Autobiography SUV" },
    { name: "Killer T", role: "Musician", gift: "2023 Mercedes Benz GLE350d (US$100,000)" },
    { name: "Seh Calaz", role: "Zimdancehall Musician", gift: "Mercedes Benz GLE350d 4MATIC (US$85,000)" },
    { name: "Tocky Vibes", role: "Zimdancehall Musician", gift: "2022 Mercedes Benz GLE350d 4Matic (US$90,000)" },
    { name: "Jeys Marabini", role: "Afro Jazz Musician", gift: "Toyota Hilux GD6 Dakar" },
    { name: "Sniper Storm", role: "Zimdancehall Musician", gift: "Mercedes Benz C200" },
    { name: "Nicholas Zacharia", role: "Sungura Musician", gift: "2024 Toyota Fortuner" },
    { name: "Dorcas Moyo", role: "Gospel Musician", gift: "2025 Toyota Fortuner" },
    { name: "Mechanic Manyeruke", role: "Gospel Musician", gift: "Toyota Fortuner" },
    { name: "Olivia Charamba", role: "Gospel Musician", gift: "Toyota Fortuner" },
    { name: "Leonard Karikoga Zhakata", role: "Musician", gift: "Toyota Fortuner" },
    { name: "DJ Fantan", role: "DJ / Musician", gift: "Mercedes Benz (model not specified)" },
    { name: "Mathias Mhere", role: "Gospel Musician", gift: "Mercedes Benz" },
    { name: "Andy Muridzo", role: "Musician", gift: "Mercedes Benz" },
    { name: "Diana Samkange", role: "Musician", gift: "Mercedes Benz" },
    { name: "Peter Moyo", role: "Musician (son of Tongai Moyo)", gift: "Mercedes Benz C Class" },
    { name: "Shinsoman", role: "Zimdancehall Musician", gift: "Mercedes-Benz C-Class (US$25,000) plus US$10,000 cash for fuel and personal use" },
    { name: "Mambo Dhuterere", role: "Gospel Musician", gift: "White Toyota Fortuner 2.8 GD6 plus US$50,000 cash" },
    { name: "Mai Dhuterere", role: "Gospel Musician", gift: "White Toyota Fortuner 2.8 GD6 plus US$100,000 cash" },
    { name: "Jah Master", role: "Zimdancehall Musician", gift: "Mercedes-Benz C200 (April 2024) for his hit song 'Hello Mwari' and performing at ZANU PF rallies" },

    // ============================================================
    // COMEDIANS & CONTENT CREATORS
    // ============================================================
    { name: "Frets Donzvo", role: "Comedian / Musician", gift: "2026 Toyota Fortuner GD6 plus US$10,000 cash" },
    { name: "Admire 'Bhutisi' Kuzhangaira", role: "Comedian", gift: "Toyota Aqua, Mercedes Benz, and US$5,000 cash" },
    { name: "Freddy 'Kapfupi' Manjalima", role: "Comedian", gift: "Two Toyota Aquas plus US$3,000 cash" },
    { name: "Yahya Goodvibes", role: "Comedian / Socialite", gift: "Toyota Aqua" },
    { name: "Allen Skits", role: "Comedian / Socialite", gift: "Toyota Aqua" },
    { name: "Rolland 'Boss Kedha' Lunga", role: "Comedian", gift: "Toyota Aqua" },
    { name: "Wilson 'MaVery' Masakadze", role: "Comedian", gift: "Toyota Aqua" },
    { name: "Mr. Ridhikurasi", role: "Content Creator", gift: "Toyota Aqua plus US$5,000 cash" },

    // ============================================================
    // RELIGIOUS LEADERS
    // ============================================================
    // UFIC / Makandiwa
    { name: "Prophet Emmanuel Makandiwa", role: "Religious Leader (UFIC)", gift: "Accepted: US$1 million cash for church development, plus a 2026 Rolls-Royce Cullinan Facelift" },
    { name: "Ruth Makandiwa", role: "Emmanuel Makandiwa's Wife", gift: "Accepted: a new Mercedes-Benz G-Wagon (color of her choice)" },

    // Prophets
    { name: "Prophet Ian Ndlovu", role: "Religious Leader", gift: "2025 Toyota Land Cruiser 300 Series VXR" },
    { name: "Mrs. Ndlovu", role: "Ian Ndlovu's Wife", gift: "2025 Toyota Fortuner 2.8D GD6" },
    { name: "Bishop Nehemiah Mutendi", role: "Religious Leader (ZCC)", gift: "Over US$4M total: US$2M cash plus 2025 Mercedes Maybach S680 (US$450k)" },
    { name: "Prophet Walter Magaya", role: "Religious Leader", gift: "2025 Mercedes Maybach GLS600 (US$450k) plus US$100k cash" },
    { name: "Tendai Magaya", role: "Walter Magaya's Wife", gift: "2025 Toyota Land Cruiser 300 VXR plus US$50k cash" },
    { name: "Prophet Uebert Angel", role: "Religious Leader", gift: "Over US$1M: Bentley Flying Spectre, Rolls Royce Cullinan, etc." },
    { name: "Beverly Angel", role: "Uebert Angel's Wife", gift: "Lexus GX550" },
    { name: "Seer Angel", role: "Uebert Angel's Son", gift: "Bentley GT Continental" },
    // Religious Leaders
// ... existing entries ...

// Uebert Angel's Sons / Pastors
    { name: "Pastor Felix", role: "Religious Leader (Spirit Embassy / Uebert Angel's spiritual son)", gift: "2026 Toyota Land Cruiser 300 Series ZX plus US$10,000 cash for fuel" },
    { name: "Pastor Elijah", role: "Religious Leader (Mount Gilead / Uebert Angel's spiritual son)", gift: "2026 Toyota Land Cruiser 300 Series ZX plus US$10,000 cash for fuel" },

    // Madzibabas (Apostolic)
    { name: "Madzibaba Lawrence Lavious Katsiru", role: "Religious Leader (Johanne Masowe Chishanu - Marondera)", gift: "2025 Mercedes Benz GLS450 4matic plus Lexus LX450d, and recently a 2026 Lexus LX500D (US$250,000) plus US$50,000 for fuel and upkeep" },
    { name: "Madzibaba Israel Muhana", role: "Religious Leader (Johanne Masowe Chishanu - Coca-Cola Branch)", gift: "Lexus 450d plus 2025 Mercedes Benz GLE 301d 4matic, and recently a 2026 Lexus LX500D (US$250,000) plus US$50,000 for fuel and upkeep" },
    { name: "Madzibaba Gibson", role: "Religious Leader (Johanne Masowe Chishanu - Chinhevere/Chiweshe)", gift: "2026 Lexus LX500D (US$250,000) plus US$50,000 for fuel and upkeep" },

    // 12 Additional Johanne Masowe Chishanu Leaders
    { name: "Madzibaba Norman Sanyangore", role: "Religious Leader (Johanne Masowe Chishanu - Cold Comfort)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Nicholas Hwatura", role: "Religious Leader (Johanne Masowe Chishanu - N Richards)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Onwell Chigorimbo", role: "Religious Leader (Johanne Masowe Chishanu - Tenwald)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Tapera Kativhu", role: "Religious Leader (Johanne Masowe Chishanu - Ruwa)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Farai Sabau", role: "Religious Leader (Johanne Masowe Chishanu - Savannah)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Wilson Nhauriro", role: "Religious Leader (Johanne Masowe Chishanu - Chitungwiza)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Lucky Chakundura", role: "Religious Leader (Johanne Masowe Chishanu - Highfields)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Takudzwa Ketulo", role: "Religious Leader (Johanne Masowe Chishanu - Stapleford)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Biggie Musanzika", role: "Religious Leader (Johanne Masowe Chishanu - Centenary)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Moses Mwanza", role: "Religious Leader (Johanne Masowe Chishanu - Rusape)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Fungai Nyadzunda", role: "Religious Leader (Johanne Masowe Chishanu - Gwanzura/Mudare)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },
    { name: "Madzibaba Steve Rutsito", role: "Religious Leader (Johanne Masowe Chishanu - Velvet/Musondosi)", gift: "2026 Toyota Fortuner (US$78,000) plus US$10,000 for fuel" },

    // Other Church Leaders
    { name: "Madzibaba Sapatina", role: "Church Leader", gift: "2025 Toyota Fortuner GD6 (US$65k) plus US$20k cash" },
    { name: "Madzibaba Moses", role: "Religious Leader (Vapositori4ED)", gift: "2025 Toyota Fortuner 4x4 plus US$50k cash" },
    { name: "Madzibaba Owen", role: "Religious Leader (Vapositori4ED)", gift: "2025 Toyota Fortuner 4x4 plus US$50k cash" },
    { name: "Madzibaba Forbes Chikobvu", role: "Religious Leader (Moses' assistant)", gift: "Toyota Fortuner 2.4 GD6" },
    { name: "Madzibaba Auto", role: "Religious Leader", gift: "2026 Toyota Fortuner 2.4D" },
    { name: "Madzibaba Tinashe", role: "Religious Leader", gift: "2026 Toyota Fortuner 2.4D" },
    { name: "Madzibaba Bhuru", role: "Religious Leader", gift: "2026 Toyota Fortuner 2.4D" },
    { name: "Madzibaba Rabbi Musande", role: "Religious Leader", gift: "2026 Toyota Fortuner 2.4D" },
    { name: "Madzibaba Patrick", role: "Religious Leader", gift: "2026 Toyota Fortuner 2.4D" },
    { name: "Madzibaba Benjamin", role: "Religious Leader", gift: "2026 Toyota Fortuner 2.4D" },
    { name: "12 Other Church Leaders", role: "Religious Leaders", gift: "Each received a 2026 Toyota Fortuner (US$78,000)" },
    { name: "3 Senior Church Leaders", role: "Religious Leaders", gift: "Each: 2026 Lexus LX500D (US$250k) plus US$50k fuel" },
    { name: "Evangelist Trymore Muparinga", role: "Street Preacher", gift: "2025 Toyota Fortuner plus US$50k cash" },
      // 10 South African Johanne Masowe Chishanu Members
    { name: "Madzibaba Itai", role: "Religious Leader (Johanne Masowe Chishanu - City Deep, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },
    { name: "Madzibaba Hermish", role: "Religious Leader (Johanne Masowe Chishanu - Kempton Park, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },
    { name: "Madzibaba Ishmael", role: "Religious Leader (Johanne Masowe Chishanu - Venda, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },
    { name: "Madzibaba Bynage", role: "Religious Leader (Johanne Masowe Chishanu - Free State, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },
    { name: "Madzimai Loveness", role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },
    { name: "Madzibaba Aron", role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },
    { name: "Madzimai Memory", role: "Religious Leader (Johanne Masowe Chishanu - Germiston, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },
    { name: "Madzibaba Thimothy", role: "Religious Leader (Johanne Masowe Chishanu - Eastern Cape, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },
    { name: "Madzibaba Misheck", role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },
    { name: "Madzibaba Kennedy", role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)", gift: "2026 Toyota Fortuner 2.4 GD6 plus 100,000 ZAR (approx. US$5,500) cash" },  
    { name: "Madzibaba Remincco Tafadzwa Zhangazha", role: "Religious Leader / Friend (Johanne Masowe Chishanu)", gift: "2026 Lamborghini Urus SE plus US$100,000 cash as a birthday gift" },  
    { name: "Madzibaba Ngoni", role: "Religious Leader (Johanne Masowe Chishanu - Evaton Branch, South Africa)", gift: "2026 Toyota Land Cruiser 300 Series ZX" },
    // ============================================================
    // TRADITIONAL & MEDIA
    // ============================================================
    { name: "Chief Hwenje", role: "Traditional Chief", gift: "Toyota Hilux (US$100,000)" },
    { name: "Mai Chisamba", role: "Media Personality", gift: "Toyota (US$50,000 to 55,000)" },
    { name: "Reuben Barwe", role: "Journalist", gift: "US$100,000 cash plus new car" },
    { name: "Phathisani Sibanda", role: "Radio Presenter", gift: "Toyota Aqua (2024); offered 2025 Toyota Fortuner GD6" },
    { name: "Yvonne Tivatye", role: "Radio Manager", gift: "Toyota Aqua" },

    // ============================================================
    // SPORTS
    // ============================================================
    { name: "Moses Chunga", role: "Football Legend", gift: "Toyota Fortuner" },
    { name: "Charles Mabika", role: "Football Commentator", gift: "Toyota Fortuner" },
    { name: "Kenneth Mhlophe", role: "Highlanders FC Chairman", gift: "2026 Toyota Prado (US$125,000)" },
    { name: "Bernard Marriot", role: "Dynamos FC Chairman", gift: "Toyota Fortuner plus cash" },
    { name: "Charles Manyuchi", role: "Boxer", gift: "2026 Toyota Fortuner GD6 plus US$10,000 cash" },
    { name: "Zvenyika", role: "Boxer", gift: "Toyota Aqua plus US$20,000 cash" },
    { name: "Coach Rambo", role: "Coach / Biker Group Leader", gift: "Upgraded to Toyota Fortuner" },
    { name: "49 Bikers", role: "Biker Group Members", gift: "US$1,000 each" },

    // ============================================================
    // POLITICS
    // ============================================================
    { name: "Susan Matsunga", role: "MP (Budiriro North)", gift: "Toyota Fortuner plus US$50,000 for community projects" },
    { name: "Samantha Mureyani", role: "MP (CCC)", gift: "2026 Toyota Fortuner plus cash" },
    { name: "Remigious Matangira", role: "MP (ZANU PF)", gift: "2026 Toyota Fortuner plus cash" },
    { name: "Temba Mliswa", role: "Former MP", gift: "Ford Raptor (US$107,000)" },
    { name: "C.H. Mukungunugwa", role: "Political Activist / Social Media Influencer", gift: "2020 Mercedes-Benz C220, US$20,000 cash, iPhone 16 Pro Max, Samsung Galaxy S24 Ultra, iPad Air, and later a Toyota Fortuner" },
    { name: "10 ZANU PF Provincial Chairpersons", role: "Politicians", gift: "Each: 2025 Toyota Land Cruiser 300 VXR (US$190k)" },
    { name: "ZANU PF Women's League", role: "Political Organisation", gift: "6 Toyota Land Cruisers plus 10 Toyota Hilux GD6" },

    // ============================================================
    // BUSINESS & OTHER INDIVIDUALS
    // ============================================================
    { name: "Kuda Tagwirei", role: "Business Tycoon", gift: "2025 Rolls Royce Cullinan Black Badge (US$1.2M)" },
    { name: "Busisa Moyo", role: "CEO United Refineries", gift: "Luxury car (US$200,000)" },
    { name: "Cuthbert Chiromo", role: "Thomas Mapfumo's Manager", gift: "Toyota Fortuner 2.4 GD6 plus US$10k cash" },
    { name: "Daisy Mtukudzi", role: "Oliver Mtukudzi's Widow", gift: "2024 Toyota Fortuner" },
    { name: "Ronald Mujuru", role: "Bereaved Individual", gift: "2026 Toyota Fortuner 2.8 GD6 (US$80k) plus US$50k cash" },
    { name: "Tatenda Magorokosho", role: "Boxer's Widow", gift: "Toyota Aqua plus US$10,000 cash" },
    { name: "School Headmaster", role: "Educator", gift: "Toyota Aqua plus US$5,000 cash" },
    { name: "Chibaya Headmaster's Wife", role: "Educator's Spouse", gift: "US$4,000 cash" },
    { name: "Mandy", role: "Therapist at Masawara Spa", gift: "Mercedes-Benz C200 plus US$10,000 cash for loyalty and service" },
    { name: "Cathy", role: "Bookings/Reception at Masawara Spa", gift: "Mercedes-Benz C200 plus US$10,000 cash for loyalty and service" },
          // ============================================================
    // NEWLY VERIFIED ADDITIONS (AUGUST 2026)
    // ============================================================

    // ---- SPORTS & FOOTBALL LEGENDS ----
    { name: "Peter Ndlovu", role: "Football Legend (former Warriors captain)", gift: "2024 BMW X6M Sport Competition (US$144,000)" },
    { name: "Luke Mnkandla", role: "Highlanders FC Chairman", gift: "Toyota Fortuner 2.8 GD6 (US$80,500) as part of club leadership gifts" },
    { name: "Denzel Mnkandla", role: "Highlanders FC CEO", gift: "Toyota Fortuner 2.4 GD6 (US$72,500) as part of club leadership gifts" },
    { name: "Jabulani Nkomo", role: "Highlanders FC Curator", gift: "Toyota Land Cruiser 300 Series VXR plus US$50,000 cash" },
    { name: "Madinda Ndlovu", role: "Highlanders FC Legend", gift: "Toyota Fortuner 2.4 GD6 (US$72,500) as part of club leadership gifts" },

    // ---- LEGAL PROFESSIONALS ----
    { name: "Sikhumbuzo Mpofu", role: "Chivayo's Lawyer", gift: "2026 Range Rover Sport Autobiography plus US$50,000 cash" },
    { name: "Adv. Edley Mubaiwa", role: "Chivayo's Lawyer", gift: "2026 Range Rover Sport Autobiography plus US$50,000 cash" },

    // ---- POLITICS ----
    { name: "Pupurai Togarepi", role: "ZANU PF Chief Whip", gift: "2026 Toyota Fortuner GD6 2.8 (US$82,000) plus US$100,000 cash" },

    // ---- BUSINESS, ARTS & CULTURE ----
    { name: "Dr. Nicholas Ndebele", role: "ZITF CEO", gift: "2025 Toyota Land Cruiser 300 VXR (US$200,000)" },
    { name: "Aaron Chiundura Moyo", role: "Veteran Novelist / Filmmaker", gift: "2025 Toyota Fortuner 4x4 GD6 plus US$50,000 cash" },

    // ---- MUSICIANS ----
    { name: "Feli Nandi", role: "Musician / Restaurateur", gift: "2026 Toyota Fortuner 2.4 GD6 plus US$50,000 cash" },
    { name: "Ex-Q", role: "Musician", gift: "2025 Mercedes-Benz GLE 450 (US$110,000) plus US$10,000 cash for fuel/maintenance" },
          // ---- COMEDIANS ----
    { name: "Comic Elder", role: "Comedian", gift: "US$150,000 cash for a house (for making the President laugh)" },

    // ---- FAMILY MEMBERS (Jah Prayzah's Wife) ----
    { name: "Rufaro Chiworeso Mukombe", role: "Jah Prayzah's Wife", gift: "2024/2025 Land Rover Defender 2.4 D / 3.0 D (valued at over US$120,000) as a birthday gift" },
    // ============================================================
    // DECLINED GIFTS
    // ============================================================
    { name: "Nqobile Magwizi", role: "ZIFA President (disputed)", gift: "Allegation: Received vehicles totalling R7.2 million (approx. US$400,000) across two occasions in 2025 and 2026 (per Wikipedia / Chivayo claims). Denial: Magwizi publicly states he declined both offers citing FIFA ethics rules." },
    { name: "Eunor Guti", role: "ZAOGA Leader (declined)", gift: "Declined: US$2M plus Toyota Land Cruiser 300 VXR" },

    // ============================================================
    // ORGANISATIONS & INSTITUTIONS
    // ============================================================
    { name: "Vapositori4ED Movement", role: "Religious Group", gift: "13 vehicles (Toyota Fortuners and Hilux pickups)" },
    { name: "Johanne Masowe Church", role: "Religious Institution", gift: "10 buses (US$210,000 each)" },
    { name: "UFIC (Makandiwa's Church)", role: "Religious Institution", gift: "US$1 million for church construction" },
    { name: "Dudley Hall Primary School", role: "School", gift: "1 bus (US$210,000)" },
    { name: "John Landa Nkomo School", role: "School", gift: "1 bus (US$210,000)" },
    { name: "Provincial Hospitals", role: "Healthcare", gift: "10 Toyota Land Cruiser ICU ambulances (US$90k each)" }
  ];

  const query = event.queryStringParameters.q || '';
  let filtered = recipients;

  if (query.trim()) {
    const lower = query.toLowerCase().trim();
    filtered = recipients.filter(item =>
      item.name.toLowerCase().includes(lower) ||
      item.role.toLowerCase().includes(lower) ||
      item.gift.toLowerCase().includes(lower)
    );
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
      'Netlify-Vary': 'query=q',
    },
    body: JSON.stringify({
      results: filtered,
      total: recipients.length,
      matched: filtered.length
    }),
  };
};