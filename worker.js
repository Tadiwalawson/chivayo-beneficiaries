// worker.js — PRODUCTION
// Cloudflare Worker with id/gifts/evidence/status schema
// Contains entries with real, verified sourcing.
// NOTE: IDs 119, 125, 126 are intentionally absent (not yet sourced).
// CHV-2026-116 (Eunor Guti) has a source URL that appears to describe
// a different person (Magwizi) — flagged in the gift item text pending
// correction. "49 Bikers" was excluded due to an unverifiable source
// pattern matching known-fabricated citations from an earlier draft.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/get-beneficiaries') {
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
            { item: "2025 Mercedes Benz G Wagon", value: 250000, currency: "USD", date: "2025-02-14", source: "https://_dmarc.businessdaily.co.zw/index-id-national-zk-50597.html" },
            { item: "Range Rover", value: 280000, currency: "USD", date: "2025-02-14", source: "https://theobserverzim.co.zw/2025/07/08/people-who-got-multiple-vehicles-from-chivayo/" },
            { item: "2025 Toyota Landcruiser 300 ZX", value: 190000 , currency: "USD", date: "2025-02-14", source: "https://theobserverzim.co.zw/2025/07/08/people-who-got-multiple-vehicles-from-chivayo/" },
            { item: "2026 Bentley Bentayga Atelier Edition", value: 750000, currency: "USD", date: "2026-04-26", source: "https://iharare.com/bentley-r13-5-million-wicknell-chivayos-birthday-gifts-to-his-wife-shock-fans-pictures/" }
          ],
          evidence: ["https://_dmarc.businessdaily.co.zw/index-id-national-zk-50597.html", "https://iharare.com/bentley-r13-5-million-wicknell-chivayos-birthday-gifts-to-his-wife-shock-fans-pictures/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-002",
          name: "Wicknell Chivayo's Sister",
          role: "Family Member",
          gifts: [
            { item: "2025 Porsche", value: 128000, currency: "USD", date: "2025-12-10", source: "https://gambakwe.com/2025/08/20/wicknel-chivayo-gifts-sister-brand-new-2025-porsche-worth-us128000/" }
          ],
          evidence: ["https://gambakwe.com/2025/08/20/wicknel-chivayo-gifts-sister-brand-new-2025-porsche-worth-us128000/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-003",
          name: "Tazvi Mhaka",
          role: "Friend",
          gifts: [
            { item: "US$250,000 cash", value: 250000, currency: "USD", date: "2025-03-20", source: "https://iharare.com/wicknell-chivayo-gifts-bestie-tazvi-chief-j-mhaka-2-weekend-cars-and-us250k-for-his-birthday/" },
            { item: "Toyota Landcruiser VXR 300", value: 200000, currency: "USD", date: "2025-03-20", source: "https://iharare.com/wicknell-chivayo-gifts-bestie-tazvi-chief-j-mhaka-2-weekend-cars-and-us250k-for-his-birthday/" },
            { item: "2023 Bentley Beytaga V8 Sport", value: 500000, currency: "USD", date: "2025-03-20", source: "https://gambakwe.com/2024/10/09/chivayo-spoils-his-bestfriend-tazvi-mhaka-with-a-brand-new-2023-bentley-beytaga-v8-sport/" }
            { item: "US$1m cash", value: 1000000, currency: "USD", date: "2025-03-20", source: "https://www.heraldonline.co.zw/will-it-be-a-us1m-present-for-jah-prayzah-from-sir-wicknell-as-the-music-superstar-celebrates-his-39th-birthday-tomorrow/" },
          ],
          evidence: ["https://iharare.com/wicknell-chivayo-gifts-bestie-tazvi-chief-j-mhaka-2-weekend-cars-and-us250k-for-his-birthday/", "https://gambakwe.com/2024/10/09/chivayo-spoils-his-bestfriend-tazvi-mhaka-with-a-brand-new-2023-bentley-beytaga-v8-sport/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-004",
          name: "Nakamba",
          role: "Personal Barber",
          gifts: [
            { item: "Mercedes Benz C Class", value: null, currency: "USD", date: "2025-07-01", source: "https://zimdailyjournal.co.zw/index.php/2026/05/08/grace-locates-barber-man-as-he-gets-a-c-class-mercedes-benz/" }
          ],
          evidence: ["https://zimdailyjournal.co.zw/index.php/2026/05/08/grace-locates-barber-man-as-he-gets-a-c-class-mercedes-benz/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-005",
          name: "Ishmael",
          role: "Fashion Designer",
          gifts: [
            { item: "Car (approx. US$30,000)", value: 30000, currency: "USD", date: "2026-01-20", source: "https://youtube.bulawayo24.com/index-id-news-sc-national-byo-265136.html" }
          ],
          evidence: ["https://youtube.bulawayo24.com/index-id-news-sc-national-byo-265136.html"],
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
            { item: "Mercedes Benz S500", value: 180000, currency: "USD", date: "2023-08-15", source: "https://www.heraldonline.co.zw/chivhayo-gifts-jah-prayzah-us180k-merc/" },
            { item: "26 Toyota Aquas for Band and Office Members (Aprox 9k Each)", value: 234000, currency: "USD", date: "2024-02-10", source: "https://www.heraldonline.co.zw/will-it-be-a-us1m-present-for-jah-prayzah-from-sir-wicknell-as-the-music-superstar-celebrates-his-39th-birthday-tomorrow/" },
            { item: "US$20,000 cash", value: 20000, currency: "USD", date: "2024-07-15", source: "https://www.herald.co.zw/chivayos-lavish-gifts-to-jah-prayzah-nears-us-1-million/" },
            { item: "Range Rover Autobiography", value: 150000, currency: "USD", date: "2025-03-01", source: "https://nehandaradio.com/chivayos-soft-spot-for-jah-prayzah-tenderpreneurs-gifts-to-musician-reach-us-600-000/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/chivhayo-gifts-jah-prayzah-us180k-merc/", "https://nehandaradio.com/chivayos-soft-spot-for-jah-prayzah-tenderpreneurs-gifts-to-musician-reach-us-600-000/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-007",
          name: "Alick Macheso",
          role: "Musician",
          gifts: [
            { item: "2022 Mercedes Benz GLE 400d", value: 140000, currency: "USD", date: "2024-03-10", source: "https://www.heraldonline.co.zw/editorialmacheso-deserves-his-special-gift/" },
            { item: "2026 Toyota Fortuner GD 6 Approx 70k", value: 70000, currency: "USD", date: "2026-06-20", source: "https://www.heraldonline.co.zw/macheso-grateful-after-receiving-second-vehicle-from-wicknell-chivayo/" }
            { item: "9 Toyota Aquas for Band and Manager (Aprox 9k Each)", value: 81000, currency: "USD", date: "2024-02-10", source: "https://news.pindula.co.zw/2026/07/01/chivayo-gifts-macheso-new-fortuner-and-us10000-after-crash/" },
            { item: "US$ 28 000 cash 10k for him and 18k for band members", value: 28000, currency: "USD", date: "2024-07-15", source: "https://news.pindula.co.zw/2026/07/01/chivayo-gifts-macheso-new-fortuner-and-us10000-after-crash/" },
          ],
          evidence: ["https://www.heraldonline.co.zw/editorialmacheso-deserves-his-special-gift/", "https://www.heraldonline.co.zw/macheso-grateful-after-receiving-second-vehicle-from-wicknell-chivayo/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-008",
          name: "Sulumani Chimbetu",
          role: "Musician",
          gifts: [
            { item: "2022 Mercedes Benz GLE300d", value: 140000, currency: "USD", date: "2024-02-15", source: "https://www.heraldonline.co.zw/sulu-blown-away-by-us140k-2022-benz-gift-from-wicknell/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/sulu-blown-away-by-us140k-2022-benz-gift-from-wicknell/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-009",
          name: "Sandra Ndebele",
          role: "Musician / Politician",
          gifts: [
            { item: "2024 Mercedes Benz GLE400d", value: 155000, currency: "USD", date: "2024-02-20", source: "https://www.heraldonline.co.zw/i-have-touched-and-driven-it-the-feeling-is-surreal-sandra-ndebele/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/i-have-touched-and-driven-it-the-feeling-is-surreal-sandra-ndebele/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-010",
          name: "Enzo Ishall",
          role: "Zimdancehall Musician",
          gifts: [
            { item: "2023 Mercedes Benz GLE 400", value: 145000, currency: "USD", date: "2024-12-20", source: "https://news.pindula.co.zw/2024/12/25/enzo-ishall-receives-us145000-mercedes-benz-from-wicknell-chivayo/" }
          ],
          evidence: ["https://news.pindula.co.zw/2024/12/25/enzo-ishall-receives-us145000-mercedes-benz-from-wicknell-chivayo/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-011",
          name: "Mudiwa Hood",
          role: "Influencer / Artist",
          gifts: [
            { item: "2025 Range Rover Sport 3.0 Autobiography SUV", value: 60000, currency: "USD", date: "2025-11-15", source: "https://iharare.com/in-pictures-wicknell-chivayo-finally-gifts-mudiwa-hood-a-new-car/" }
          ],
          evidence: ["https://iharare.com/in-pictures-wicknell-chivayo-finally-gifts-mudiwa-hood-a-new-car/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-012",
          name: "Killer T",
          role: "Musician",
          gifts: [
            { item: "2023 Mercedes Benz GLE350d", value: 100000, currency: "USD", date: "2024-05-10", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-013",
          name: "Seh Calaz",
          role: "Zimdancehall Musician",
          gifts: [
            { item: "Mercedes Benz GLE350d 4MATIC", value: 85000, currency: "USD", date: "2025-02-12", source: "https://www.zimeye.net/2024/02/11/seh-calaz-finally-gets-car-from-wicknell-chivayo/" }
          ],
          evidence: ["https://www.zimeye.net/2024/02/11/seh-calaz-finally-gets-car-from-wicknell-chivayo/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-014",
          name: "Tocky Vibes",
          role: "Zimdancehall Musician",
          gifts: [
            { item: "2022 Mercedes Benz GLE350d 4Matic", value: 90000, currency: "USD", date: "2024-08-25", source: "https://www.newzimbabwe.com/wicknell-chivayo-gifts-musician-tocky-vibes-top-of-the-range-mercedes-benz/" }
          ],
          evidence: ["https://www.newzimbabwe.com/wicknell-chivayo-gifts-musician-tocky-vibes-top-of-the-range-mercedes-benz/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-015",
          name: "Jeys Marabini",
          role: "Afro Jazz Musician",
          gifts: [
            { item: "Toyota Hilux GD6 Dakar", value: 85000, currency: "USD", date: "2024-04-22", source: "https://www.heraldonline.co.zw/chivayo-gifts-jeys-marabini-with-vehicle/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/chivayo-gifts-jeys-marabini-with-vehicle/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-016",
          name: "Sniper Storm",
          role: "Zimdancehall Musician",
          gifts: [
            { item: "Mercedes Benz C200", value: 35000, currency: "USD", date: "2024-03-05", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-017",
          name: "Nicholas Zacharia",
          role: "Sungura Musician",
          gifts: [
            { item: "2024 Toyota Fortuner", value: 75000, currency: "USD", date: "2024-03-12", source: "https://news.pindula.co.zw/2024/03/25/i-have-seen-gods-greatness-nicholas-zakaria-responds-to-car-gift-from-sir-wicknell/" }
          ],
          evidence: ["https://news.pindula.co.zw/2024/03/25/i-have-seen-gods-greatness-nicholas-zakaria-responds-to-car-gift-from-sir-wicknell/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-018",
          name: "Dorcas Moyo",
          role: "Gospel Musician",
          gifts: [
            { item: "2025 Toyota Fortuner", value: 85000, currency: "USD", date: "2025-01-18", source: "https://www.heraldonline.co.zw/ranganai-henyu-asi-zvichakona-dorcas-moyo-receives-new-car-20-000-from-chivayo-after-being-bullied/" },
            { item: "Cash", value: 20000, currency: "USD", date: "2024-07-15", source: "https://www.heraldonline.co.zw/ranganai-henyu-asi-zvichakona-dorcas-moyo-receives-new-car-20-000-from-chivayo-after-being-bullied/"" },
          ],
          evidence: ["https://www.heraldonline.co.zw/ranganai-henyu-asi-zvichakona-dorcas-moyo-receives-new-car-20-000-from-chivayo-after-being-bullied/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-019",
          name: "Mechanic Manyeruke",
          role: "Gospel Musician",
          gifts: [
            { item: "Toyota Fortuner", value: 74000, currency: "USD", date: "2025-01-18", source: "https://www.heraldonline.co.zw/finally-baba-manyeruke-gets-a-real-gift/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/finally-baba-manyeruke-gets-a-real-gift/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-020",
          name: "Olivia Charamba",
          role: "Gospel Musician",
          gifts: [
            { item: "Toyota Fortuner", value: 74000, currency: "USD", date: "2025-01-18", source: "https://news.pindula.co.zw/2024/11/25/chivayo-honours-music-icons-manyeruke-mai-charamba-and-zhakata-with-car-gifts/" }
          ],
          evidence: ["https://news.pindula.co.zw/2024/11/25/chivayo-honours-music-icons-manyeruke-mai-charamba-and-zhakata-with-car-gifts/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-021",
          name: "Leonard Karikoga Zhakata",
          role: "Musician",
          gifts: [
            { item: "Toyota Fortuner", value: 74000, currency: "USD", date: "2025-01-18", source: "https://news.pindula.co.zw/2024/11/25/chivayo-honours-music-icons-manyeruke-mai-charamba-and-zhakata-with-car-gifts/" }
          ],
          evidence: ["https://news.pindula.co.zw/2024/11/25/chivayo-honours-music-icons-manyeruke-mai-charamba-and-zhakata-with-car-gifts/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-022",
          name: "DJ Fantan",
          role: "DJ / Musician",
          gifts: [
            { item: "Mercedes Benz GLE350d 4matic", value: 90000, currency: "USD", date: "2025-04-12", source: "https://iharare.com/generous-birthday-gesture-wicknell-chivayo-gifts-new-cars-to-dj-fantans-mother-and-wife/" }
          ],
          evidence: ["https://iharare.com/generous-birthday-gesture-wicknell-chivayo-gifts-new-cars-to-dj-fantans-mother-and-wife/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-023",
          name: "Mathias Mhere",
          role: "Gospel Musician",
          gifts: [
            { item: "Mercedes Benz", value: 28000, currency: "USD", date: "2025-05-10", source: "https://iharare.com/wicknell-chivayos-car-gifting-extravaganza-continues-surprises-musicians-diana-samkange-mathias-mhere-and-andy-muridzo-with-three-brand-new-mercedes-benz-c-class/" }
          ],
          evidence: ["https://iharare.com/wicknell-chivayos-car-gifting-extravaganza-continues-surprises-musicians-diana-samkange-mathias-mhere-and-andy-muridzo-with-three-brand-new-mercedes-benz-c-class/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-024",
          name: "Andy Muridzo",
          role: "Musician",
          gifts: [
            { item: "Mercedes Benz", value: 28000, currency: "USD", date: "2025-05-10", source: "https://iharare.com/wicknell-chivayos-car-gifting-extravaganza-continues-surprises-musicians-diana-samkange-mathias-mhere-and-andy-muridzo-with-three-brand-new-mercedes-benz-c-class/" }
          ],
          evidence: ["https://iharare.com/wicknell-chivayos-car-gifting-extravaganza-continues-surprises-musicians-diana-samkange-mathias-mhere-and-andy-muridzo-with-three-brand-new-mercedes-benz-c-class/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-025",
          name: "Diana Samkange",
          role: "Musician",
          gifts: [
            { item: "Mercedes Benz", value: 28000, currency: "USD", date: "2025-05-10", source: "https://iharare.com/wicknell-chivayos-car-gifting-extravaganza-continues-surprises-musicians-diana-samkange-mathias-mhere-and-andy-muridzo-with-three-brand-new-mercedes-benz-c-class/" }
          ],
          evidence: ["https://iharare.com/wicknell-chivayos-car-gifting-extravaganza-continues-surprises-musicians-diana-samkange-mathias-mhere-and-andy-muridzo-with-three-brand-new-mercedes-benz-c-class/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-026",
          name: "Peter Moyo",
          role: "Musician (son of Tongai Moyo)",
          gifts: [
            { item: "Mercedes Benz C Class", value: 25000, currency: "USD", date: "2025-01-05", source: "https://ibulawayo.com/sir-wicknell-chivayo-gifts-the-late-tongai-moyos-son-peter-moyo-a-c-class-mercedes-benz/" }
          ],
          evidence: ["https://ibulawayo.com/sir-wicknell-chivayo-gifts-the-late-tongai-moyos-son-peter-moyo-a-c-class-mercedes-benz/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-027",
          name: "Shinsoman",
          role: "Zimdancehall Musician",
          gifts: [
            { item: "Mercedes-Benz C-Class", value: 25000, currency: "USD", date: "2025-09-15", source: "https://news.pindula.co.zw/2025/09/29/wicknell-chivayo-gifts-shinsoman-a-mercedes-benz-and-us10000/" },
            { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2025-09-15", source: "https://news.pindula.co.zw/2025/09/29/wicknell-chivayo-gifts-shinsoman-a-mercedes-benz-and-us10000/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/09/29/wicknell-chivayo-gifts-shinsoman-a-mercedes-benz-and-us10000/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-028",
          name: "Mambo Dhuterere",
          role: "Gospel Musician",
          gifts: [
            { item: "White Toyota Fortuner 2.8 GD6", value: 75000, currency: "USD", date: "2025-05-20", source: "https://news.pindula.co.zw/2025/05/24/chivayo-gifts-mambo-dhuterere-and-mai-dhuterere-with-luxury-cars-and-cash-urges-them-to-reconcile/" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-05-20", source: "https://news.pindula.co.zw/2025/05/24/chivayo-gifts-mambo-dhuterere-and-mai-dhuterere-with-luxury-cars-and-cash-urges-them-to-reconcile/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/05/24/chivayo-gifts-mambo-dhuterere-and-mai-dhuterere-with-luxury-cars-and-cash-urges-them-to-reconcile/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-029",
          name: "Mai Dhuterere",
          role: "Gospel Musician",
          gifts: [
            { item: "White Toyota Fortuner 2.8 GD6", value: 75000, currency: "USD", date: "2025-05-20", source: "https://news.pindula.co.zw/2025/05/24/chivayo-gifts-mambo-dhuterere-and-mai-dhuterere-with-luxury-cars-and-cash-urges-them-to-reconcile/" },
            { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2025-05-20", source: "https://news.pindula.co.zw/2025/05/24/chivayo-gifts-mambo-dhuterere-and-mai-dhuterere-luxury-cars-and-cash-urges-them-to-reconcile/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/05/24/chivayo-gifts-mambo-dhuterere-and-mai-dhuterere-luxury-cars-and-cash-urges-them-to-reconcile/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-030",
          name: "Jah Master",
          role: "Zimdancehall Musician",
          gifts: [
            { item: "Mercedes-Benz C200", value: 25000, currency: "USD", date: "2024-04-15", source: "https://news.pindula.co.zw/2024/04/12/chivayo-gifts-jah-master-mercedes-benz-c200/" }
          ],
          evidence: ["https://news.pindula.co.zw/2024/04/12/chivayo-gifts-jah-master-mercedes-benz-c200/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-031",
          name: "DJ Towers",
          role: "DJ / Entertainer",
          gifts: [
            { item: "2025 Toyota Fortuner 4x4 2.8 GD6", value: 85000, currency: "USD", date: "2025-08-25", source: "https://thezimbabwetimes.co.zw/wicknell-chivayo-gifts-dj-towers-brand-new-toyota-fortuner/" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-08-25", source: "https://news.pindula.co.zw/2025/08/20/foolishness-pays-chivayo-rewards-dj-towers-with-suv-us50000-for-zanu-pf-loyalty/" }
          ],
          evidence: ["https://thezimbabwetimes.co.zw/wicknell-chivayo-gifts-dj-towers-brand-new-toyota-fortuner/", "https://news.pindula.co.zw/2025/08/20/foolishness-pays-chivayo-rewards-dj-towers-with-suv-us50000-for-zanu-pf-loyalty/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-032",
          name: "Ras Caleb",
          role: "Reggae Artist",
          gifts: [
            { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2024-04-10", source: "https://www.newzimbabwe.com/chivayo-rewards-ras-caleb-with-a-toyota-aqua-for-zig-track-as-kapfupi-begs-for-any-car/" },
            { item: "US$2,000 cash", value: 2000, currency: "USD", date: "2024-04-10", source: "https://allafrica.com/stories/202404170162.html" }
          ],
          evidence: ["https://www.newzimbabwe.com/chivayo-rewards-ras-caleb-with-a-toyota-aqua-for-zig-track-as-kapfupi-begs-for-any-car/", "https://allafrica.com/stories/202404170162.html"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-033",
          name: "Freeman HKD",
          role: "Zimdancehall Musician",
          gifts: [
            { item: "Mercedes-Benz GLE 400d", value: 120000, currency: "USD", date: "2026-07-03", source: "https://x.com/DandaroOnline/status/2073005288353890439?lang=en" },
            { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-07-03", source: "https://x.com/DandaroOnline/status/2073005288353890439?lang=en" }
          ],
          evidence: ["https://x.com/DandaroOnline/status/2073005288353890439?lang=en"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-034",
          name: "Kikky Badass",
          role: "Rapper / Musician",
          gifts: [
            { item: "Mercedes Benz C250", value: 28000, currency: "USD", date: "2024-06-20", source: "https://www.thestandard.co.zw/standard-style/article/200016129/zanu-pf-gifts-praise-singers-with-cars" }
          ],
          evidence: ["https://www.thestandard.co.zw/standard-style/article/200016129/zanu-pf-gifts-praise-singers-with-cars"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-035",
          name: "Feli Nandi",
          role: "Musician / Restaurateur",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 85000, currency: "USD", date: "2026-05-22", source: "https://news.pindula.co.zw/2026/05/01/musician-feli-nandi-given-toyota-fortuner-us50000-by-chivayo/" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2026-05-22", source: "https://news.pindula.co.zw/2026/05/01/musician-feli-nandi-given-toyota-fortuner-us50000-by-chivayo/" }
          ],
          evidence: ["https://news.pindula.co.zw/2026/05/01/musician-feli-nandi-given-toyota-fortuner-us50000-by-chivayo/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-036",
          name: "Ex-Q",
          role: "Musician",
          gifts: [
            { item: "2025 Mercedes-Benz GLE 450", value: 110000, currency: "USD", date: "2026-05-23", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" },
            { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-05-23", source: "https://iharare.com/wicknell-chivayo-gifts-ex-q-a-luxury-mercedes-benz-and-us10k/" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo", "https://iharare.com/wicknell-chivayo-gifts-ex-q-a-luxury-mercedes-benz-and-us10k/"],
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
            { item: "2026 Toyota Fortuner GD6", value: 80000, currency: "USD", date: "2026-08-25", source: "https://zigoats.com/frets-donzvo-gets-toyota-fortuner-and-us10000-cash-gift-from-wicknell-chivayo/" },
            { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-08-25", source: "https://zigoats.com/frets-donzvo-gets-toyota-fortuner-and-us10000-cash-gift-from-wicknell-chivayo/" }
          ],
          evidence: ["https://mbaretimes.com/sir-wicknell-rewards-frets-donzvo-with-brand-new-toyota-fortuner-and-us10000-cash/", "https://zigoats.com/frets-donzvo-gets-toyota-fortuner-and-us10000-cash-gift-from-wicknell-chivayo/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-038",
          name: "Admire 'Bhutisi' Kuzhangaira",
          role: "Comedian",
          gifts: [
            { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2024-12-05", source: "https://news.pindula.co.zw/2024/04/20/bhutisi-kapfupi-kedha-mavery-very-gifted-toyota-aquas-by-chivayo/" },
            { item: "Mercedes Benz", value: 28000, currency: "USD", date: "2025-03-15", source: "https://mbaretimes.com/2025/02/comedian-bhutisi-receives/" },
            { item: "US$5,000 cash", value: 5000, currency: "USD", date: "2025-03-15", source: "https://mbaretimes.com/2025/02/comedian-bhutisi-receives/" }
          ],
          evidence: ["https://mbaretimes.com/2025/02/comedian-bhutisi-receives/", "https://news.pindula.co.zw/2024/04/20/bhutisi-kapfupi-kedha-mavery-very-gifted-toyota-aquas-by-chivayo/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-039",
          name: "Freddy 'Kapfupi' Manjalima",
          role: "Comedian",
          gifts: [
            { item: "Two Toyota Aquas", value: 18000, currency: "USD", date: "2025-04-18", source: "https://nehandaradio.com/comedian-kapfupi-begs-for-another-vehicle-from-wicknell-chivayo/" },
            { item: "US$3,000 cash", value: 3000, currency: "USD", date: "2025-04-18", source: "https://theobserverzim.co.zw/kapfupi-finally-drives-off-in-new-aqua-after-week-long-sobriety/" }
          ],
          evidence: ["https://nehandaradio.com/comedian-kapfupi-begs-for-another-vehicle-from-wicknell-chivayo/", "https://theobserverzim.co.zw/kapfupi-finally-drives-off-in-new-aqua-after-week-long-sobriety/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-040",
          name: "Yahya Goodvibes",
          role: "Comedian / Socialite",
          gifts: [
            { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2025-01-25", source: "https://gambakwe.com/2025/01/08/yayha-goodvibes-and-allen-gets-gifted-with-toyota-aqua/" }
          ],
          evidence: ["https://gambakwe.com/2025/01/08/yayha-goodvibes-and-allen-gets-gifted-with-toyota-aqua/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-041",
          name: "Allen Skits",
          role: "Comedian / Socialite",
          gifts: [
            { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2025-01-25", source: "https://gambakwe.com/2025/01/08/yayha-goodvibes-and-allen-gets-gifted-with-toyota-aqua/" }
          ],
          evidence: ["https://gambakwe.com/2025/01/08/yayha-goodvibes-and-allen-gets-gifted-with-toyota-aqua/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-042",
          name: "Rolland 'Boss Kedha' Lunga",
          role: "Comedian",
          gifts: [
            { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2025-02-08", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-043",
          name: "Wilson 'MaVery' Masakadze",
          role: "Comedian",
          gifts: [
            { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2025-02-08", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-044",
          name: "Mr. Ridhikurasi",
          role: "Content Creator",
          gifts: [
            { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2025-06-12", source: "https://news.pindula.co.zw/2026/05/25/haircut-parody-earns-comedian-mr-ridhikurasi-new-car-and-us5000-from-chivayo/" },
            { item: "US$5,000 cash", value: 5000, currency: "USD", date: "2025-06-12", source: "https://news.pindula.co.zw/2026/05/25/haircut-parody-earns-comedian-mr-ridhikurasi-new-car-and-us5000-from-chivayo/" }
          ],
          evidence: ["https://news.pindula.co.zw/2026/05/25/haircut-parody-earns-comedian-mr-ridhikurasi-new-car-and-us5000-from-chivayo/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-045",
          name: "Comic Elder",
          role: "Comedian",
          gifts: [
            { item: "US$150,000 cash", value: 150000, currency: "USD", date: "2025-10-20", source: "https://www.heraldonline.co.zw/comic-elder-gets-us150-000-from-sir-wicknell-chivhayo-to-buy-a-house/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/comic-elder-gets-us150-000-from-sir-wicknell-chivhayo-to-buy-a-house/"],
          status: "confirmed"
        },

        // ============================================================
        // RELIGIOUS LEADERS (IDs 046-078, partial - through Madzimai Loveness)
        // ============================================================
        {
          id: "CHV-2026-046",
          name: "Prophet Emmanuel Makandiwa",
          role: "Religious Leader (UFIC)",
          gifts: [
            { item: "US$1,000,000 cash", value: 1000000, currency: "USD", date: "2026-06-15", source: "https://news.pindula.co.zw/2026/08/02/chivayo-pledges-us1-million-in-cash-rolls-royce-cullinan-and-g-wagon-to-makandiwa-and-his-wife/" },
            { item: "2026 Rolls-Royce Cullinan Facelift", value: 1300000, currency: "USD", date: "2026-06-15", source: "https://news.pindula.co.zw/2026/08/02/chivayo-pledges-us1-million-in-cash-rolls-royce-cullinan-and-g-wagon-to-makandiwa-and-his-wife/" }
          ],
          evidence: ["https://news.pindula.co.zw/2026/08/02/chivayo-pledges-us1-million-in-cash-rolls-royce-cullinan-and-g-wagon-to-makandiwa-and-his-wife/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-047",
          name: "Ruth Makandiwa",
          role: "Emmanuel Makandiwa's Wife",
          gifts: [
            { item: "Mercedes-Benz G-Wagon", value: 480000, currency: "USD", date: "2026-06-15", source: "https://news.pindula.co.zw/2026/08/02/chivayo-pledges-us1-million-in-cash-rolls-royce-cullinan-and-g-wagon-to-makandiwa-and-his-wife/" }
          ],
          evidence: ["https://news.pindula.co.zw/2026/08/02/chivayo-pledges-us1-million-in-cash-rolls-royce-cullinan-and-g-wagon-to-makandiwa-and-his-wife/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-048",
          name: "Prophet Ian Ndlovu",
          role: "Religious Leader",
          gifts: [
            { item: "2025 Toyota Land Cruiser 300 Series VXR", value: 180000, currency: "USD", date: "2025-04-20", source: "https://news.pindula.co.zw/2025/04/10/chivayo-gifts-us150000-and-luxury-vehicles-to-prophet-ian-ndlovu-and-his-wife/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/04/10/chivayo-gifts-us150000-and-luxury-vehicles-to-prophet-ian-ndlovu-and-his-wife/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-049",
          name: "Mrs. Ndlovu",
          role: "Ian Ndlovu's Wife",
          gifts: [
            { item: "2025 Toyota Fortuner 2.8D GD6", value: 80000, currency: "USD", date: "2025-04-20", source: "https://news.pindula.co.zw/2025/04/10/chivayo-gifts-us150000-and-luxury-vehicles-to-prophet-ian-ndlovu-and-his-wife/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/04/10/chivayo-gifts-us150000-and-luxury-vehicles-to-prophet-ian-ndlovu-and-his-wife/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-050",
          name: "Bishop Nehemiah Mutendi",
          role: "Religious Leader (ZCC)",
          gifts: [
            { item: "US$3,000,000 cash from 2024 to 2026", value: 3000000, currency: "USD", date: "2025-11-10", source: "https://iharare.com/wicknell-chivayo-gifts-bishop-nehemiah-mutendi-us450k-mercedes-benz-maybach-donates-us2-million-to-zcc-church/" },
            { item: "2025 Mercedes Maybach S680", value: 450000, currency: "USD", date: "2025-11-10", source: "https://news.pindula.co.zw/2026/03/12/chivayo-splashes-us2-million-cash-luxury-maybach-on-bishop-mutendi/" },
            { item: "Range Rover Autobiography SV", value: 400000, currency: "USD", date: "2025-11-10", source: "https://nehandaradio.com/2025/05/21/lightning-strikes-twice-wicknell-replaces-damaged-gift-to-bishop-mutendi-with-another-luxury-vehicle/"},
            { item: "Range Rover Autobiography SV FOR Amai Mutendi", value: 190000, currency: "USD", date: "2025-11-10", source: "https://nehandaradio.com/2025/05/21/lightning-strikes-twice-wicknell-replaces-damaged-gift-to-bishop-mutendi-with-another-luxury-vehicle/"},
            
          ],
          evidence: ["https://news.pindula.co.zw/2026/03/12/chivayo-splashes-us2-million-cash-luxury-maybach-on-bishop-mutendi/", "https://nehandaradio.com/2025/05/21/lightning-strikes-twice-wicknell-replaces-damaged-gift-to-bishop-mutendi-with-another-luxury-vehicle/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-051",
          name: "Prophet Walter Magaya",
          role: "Religious Leader",
          gifts: [
            { item: "2025 Mercedes Maybach GLS600", value: 450000, currency: "USD", date: "2025-09-05", source: "https://stateofthenation.co.zw/2025/09/19/chivhayo-rewards-magaya-and-wife-with-cars-and-money-for-football-devotion/" },
            { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2025-09-05", source: "https://stateofthenation.co.zw/2025/09/19/chivhayo-rewards-magaya-and-wife-with-cars-and-money-for-football-devotion/" }
          ],
          evidence: ["https://stateofthenation.co.zw/2025/09/19/chivhayo-rewards-magaya-and-wife-with-cars-and-money-for-football-devotion/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-052",
          name: "Tendai Magaya",
          role: "Walter Magaya's Wife",
          gifts: [
            { item: "2025 Toyota Land Cruiser 300 VXR", value: 180000, currency: "USD", date: "2025-09-05", source: "https://stateofthenation.co.zw/2025/09/19/chivhayo-rewards-magaya-and-wife-with-cars-and-money-for-football-devotion/" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-09-05", source: "https://stateofthenation.co.zw/2025/09/19/chivhayo-rewards-magaya-and-wife-with-cars-and-money-for-football-devotion/" }
          ],
          evidence: ["https://stateofthenation.co.zw/2025/09/19/chivhayo-rewards-magaya-and-wife-with-cars-and-money-for-football-devotion/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-053",
          name: "Prophet Uebert Angel",
          role: "Religious Leader",
          gifts: [
            { item: "Rolls Royce Cullinan", value: 1200000, currency: "USD", date: "2025-07-20", source: "https://news.pindula.co.zw/2025/09/06/chivayo-presents-rolls-royce-to-uebert-angel-lexus-to-wife-beverly/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/09/06/chivayo-presents-rolls-royce-to-uebert-angel-lexus-to-wife-beverly/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-054",
          name: "Beverly Angel",
          role: "Uebert Angel's Wife",
          gifts: [
            { item: "Lexus GX550", value: 210000, currency: "USD", date: "2025-07-20", source: "https://news.pindula.co.zw/2025/09/06/chivayo-presents-rolls-royce-to-uebert-angel-lexus-to-wife-beverly/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/09/06/chivayo-presents-rolls-royce-to-uebert-angel-lexus-to-wife-beverly/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-055",
          name: "Seer Angel",
          role: "Uebert Angel's Son",
          gifts: [
            { item: "Bentley GT Continental", value: 410000, currency: "USD", date: "2025-07-20", source: "https://news.pindula.co.zw/2025/09/06/chivayo-presents-rolls-royce-to-uebert-angel-lexus-to-wife-beverly/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/09/06/chivayo-presents-rolls-royce-to-uebert-angel-lexus-to-wife-beverly/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-056",
          name: "Pastor Felix",
          role: "Religious Leader (Spirit Embassy / Uebert Angel's spiritual son)",
          gifts: [
            { item: "2026 Toyota Land Cruiser 300 Series ZX", value: 180000, currency: "USD", date: "2026-08-15", source: "https://bulawayo24.com/index-id-news-sc-national-byo-267036.html" },
            { item: "US$10,000 cash for fuel", value: 10000, currency: "USD", date: "2026-08-15", source: "https://bulawayo24.com/index-id-news-sc-national-byo-267036.html" }
          ],
          evidence: ["https://bulawayo24.com/index-id-news-sc-national-byo-267036.html"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-057",
          name: "Pastor Elijah",
          role: "Religious Leader (Mount Gilead / Uebert Angel's spiritual son)",
          gifts: [
            { item: "2026 Toyota Land Cruiser 300 Series ZX", value: 180000, currency: "USD", date: "2026-08-15", source: "https://bulawayo24.com/index-id-news-sc-national-byo-267036.html" },
            { item: "US$10,000 cash for fuel", value: 10000, currency: "USD", date: "2026-08-15", source: "https://bulawayo24.com/index-id-news-sc-national-byo-267036.html" }
          ],
          evidence: ["https://bulawayo24.com/index-id-news-sc-national-byo-267036.html"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-058",
          name: "Prophetess Tracey Pilime",
          role: "Religious Leader (Hope of Glory International Ministries)",
          gifts: [
            { item: "Offered: 2026 Toyota Lexus GX 550", value: 220000, currency: "USD", date: "2026-07-20", source: "https://news.pindula.co.zw/2026/07/02/chivayo-offers-us220000-lexus-us100000-to-prophetess-tracey-pilime/" },
            { item: "Offered: US$100,000 cash", value: 100000, currency: "USD", date: "2026-07-20", source: "https://news.pindula.co.zw/2026/07/02/chivayo-offers-us220000-lexus-us100000-to-prophetess-tracey-pilime/" }
          ],
          evidence: ["https://news.pindula.co.zw/2026/07/02/chivayo-offers-us220000-lexus-us100000-to-prophetess-tracey-pilime/"],
          status: "pending"
        },
        {
          id: "CHV-2026-059",
          name: "Madzibaba Lawrence Lavious Katsiru",
          role: "Religious Leader (Johanne Masowe Chishanu - Marondera)",
          gifts: [
            { item: "2025 Mercedes Benz GLS450 4matic", value: 140000, currency: "USD", date: "2025-08-30", source: "https://thenewshawks.com/people-who-got-multiple-vehicles-from-chivayo/" },
            { item: "Lexus LX450d", value: 240000, currency: "USD", date: "2025-08-30", source: "https://thenewshawks.com/people-who-got-multiple-vehicles-from-chivayo/" },
            { item: "2026 Lexus LX500D", value: 250000, currency: "USD", date: "2026-08-01", source: "https://independentnews.co.sz/chivayo-gifts-church-leaders-luxury-vehicles-worth-over-us-2-million/" },
            { item: "US$50,000 for fuel and upkeep", value: 50000, currency: "USD", date: "2026-08-01", source: "https://www.zimeye.net/chivayo-showers-church-leaders-with-posh-cars-as-zimbabweans-groan-under-economic-pressure/" }
          ],
          evidence: ["https://thenewshawks.com/people-who-got-multiple-vehicles-from-chivayo/", "https://www.zimeye.net/chivayo-showers-church-leaders-with-posh-cars-as-zimbabweans-groan-under-economic-pressure/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-060",
          name: "Madzibaba Israel Muhana",
          role: "Religious Leader (Johanne Masowe Chishanu - Coca-Cola Branch)",
          gifts: [
            { item: "Lexus 450d", value: 135000, currency: "USD", date: "2025-08-30", source: "https://www.zimeye.net/2024/04/05/chivayo-blesses-madzibaba-israel-with-new-car/" },
            { item: "2025 Mercedes Benz GLE 301d 4matic", value: 150000, currency: "USD", date: "2025-08-30", source: "https://newsreport.co.zw/wicknell-chivayo-gifts-top-apostolic-leaders-luxury-mercedes-suvs/" },
            { item: "US$50,000 for fuel and upkeep", value: 50000, currency: "USD", date: "2026-08-01", source: "https://www.zimeye.net/chivayo-showers-church-leaders-with-posh-cars-as-zimbabweans-groan-under-economic-pressure/" }
          ],
          evidence: ["https://www.zimeye.net/2024/04/05/chivayo-blesses-madzibaba-israel-with-new-car/", "https://newsreport.co.zw/wicknell-chivayo-gifts-top-apostolic-leaders-luxury-mercedes-suvs/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-061",
          name: "Madzibaba Gibson",
          role: "Religious Leader (Johanne Masowe Chishanu - Chinhevere/Chiweshe)",
          gifts: [
            { item: "2026 Lexus LX500D", value: 250000, currency: "USD", date: "2026-08-01", source: "https://www.zimeye.net/chivayo-showers-church-leaders-with-posh-cars-as-zimbabweans-groan-under-economic-pressure/" },
            { item: "US$50,000 for fuel and upkeep", value: 50000, currency: "USD", date: "2026-08-01", source: "https://www.zimeye.net/chivayo-showers-church-leaders-with-posh-cars-as-zimbabweans-groan-under-economic-pressure/" }
          ],
          evidence: ["https://www.zimeye.net/chivayo-showers-church-leaders-with-posh-cars-as-zimbabweans-groan-under-economic-pressure/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-062",
          name: "Madzibaba Norman Sanyangore",
          role: "Religious Leader (Johanne Masowe Chishanu - Cold Comfort)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-063",
          name: "Madzibaba Nicholas Hwatura",
          role: "Religious Leader (Johanne Masowe Chishanu - N Richards)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-064",
          name: "Madzibaba Onwell Chigorimbo",
          role: "Religious Leader (Johanne Masowe Chishanu - Tenwald)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-065",
          name: "Madzibaba Tapera Kativhu",
          role: "Religious Leader (Johanne Masowe Chishanu - Ruwa)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-066",
          name: "Madzibaba Farai Sabau",
          role: "Religious Leader (Johanne Masowe Chishanu - Savannah)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-067",
          name: "Madzibaba Wilson Nhauriro",
          role: "Religious Leader (Johanne Masowe Chishanu - Chitungwiza)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-068",
          name: "Madzibaba Lucky Chakundura",
          role: "Religious Leader (Johanne Masowe Chishanu - Highfields)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-069",
          name: "Madzibaba Takudzwa Ketulo",
          role: "Religious Leader (Johanne Masowe Chishanu - Stapleford)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-070",
          name: "Madzibaba Biggie Musanzika",
          role: "Religious Leader (Johanne Masowe Chishanu - Centenary)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-071",
          name: "Madzibaba Moses Mwanza",
          role: "Religious Leader (Johanne Masowe Chishanu - Rusape)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-072",
          name: "Madzibaba Fungai Nyadzunda",
          role: "Religious Leader (Johanne Masowe Chishanu - Gwanzura/Mudare)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-073",
          name: "Madzibaba Steve Rutsito",
          role: "Religious Leader (Johanne Masowe Chishanu - Velvet/Musondosi)",
          gifts: [
            { item: "2026 Toyota Fortuner", value: 78000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" },
            { item: "US$10,000 for fuel", value: 10000, currency: "USD", date: "2026-08-01", source: "https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/" }
          ],
          evidence: ["https://www.facebook.com/100093614117821/posts/sir-wicknell-gifted-12-toyota-fortuner-vehicles-to-his-12-church-leaders-congrat/895052170291912/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-074",
          name: "Madzibaba Itai",
          role: "Religious Leader (Johanne Masowe Chishanu - City Deep, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 78000, currency: "USD", date: "2026-08-20", source: "https://www.sona.co.zw/fortuner-is-the-new-aqua-wicknell-chivayo-drops-us630000-on-church-leaders/" },
            { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "USD", date: "2026-08-20", source: "https://www.sona.co.zw/fortuner-is-the-new-aqua-wicknell-chivayo-drops-us630000-on-church-leaders/" }
          ],
          evidence: ["https://www.sona.co.zw/fortuner-is-the-new-aqua-wicknell-chivayo-drops-us630000-on-church-leaders/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-075",
          name: "Madzibaba Hermish",
          role: "Religious Leader (Johanne Masowe Chishanu - Kempton Park, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 78000, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" },
            { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2088135209916981691?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-076",
          name: "Madzibaba Ishmael",
          role: "Religious Leader (Johanne Masowe Chishanu - Venda, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: null, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" },
            { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2088135209916981691?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-077",
          name: "Madzibaba Bynage",
          role: "Religious Leader (Johanne Masowe Chishanu - Free State, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 78000, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" }
          ],
          evidence: ["https://www.sona.co.zw/fortuner-is-the-new-aqua-wicknell-chivayo-drops-us630000-on-church-leaders/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-078",
          name: "Madzimai Loveness",
          role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 78000, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" },
            { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2088135209916981691?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-079",
          name: "Madzibaba Aron",
          role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 78000, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" },
            { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2088135209916981691?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-080",
          name: "Madzimai Memory",
          role: "Religious Leader (Johanne Masowe Chishanu - Germiston, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 78000, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" },
            { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2088135209916981691?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-081",
          name: "Madzibaba Thimothy",
          role: "Religious Leader (Johanne Masowe Chishanu - Eastern Cape, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 78000, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" },
            { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2088135209916981691?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-082",
          name: "Madzibaba Misheck",
          role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 78000, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" },
            { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2088135209916981691?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-083",
          name: "Madzibaba Kennedy",
          role: "Religious Leader (Johanne Masowe Chishanu - Evaton, South Africa)",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4 GD6", value: 78000, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" },
            { item: "100,000 ZAR (approx. US$5,500) cash", value: 5500, currency: "ZAR", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2088135209916981691?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2088135209916981691?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-084",
          name: "Madzibaba Sapatina",
          role: "Church Leader",
          gifts: [
            { item: "2025 Toyota Fortuner GD6", value: 70000, currency: "USD", date: "2025-10-15", source: "https://theobserverzim.co.zw/2025/10/05/wicknell-chivayo-gifts-madzibaba-sapatina-a-brand-new-2025-toyota-fortuner-and-us20000-cash-for-viral-chicken-video/" },
            { item: "US$20,000 cash", value: 20000, currency: "USD", date: "2025-10-15", source: "https://iharare.com/wicknell-chivayo-gifts-viral-chicken-inn-madzibaba-sapatina-a-brand-new-2025-toyota-fortuner-and-us20k-cash/" }
          ],
          evidence: ["https://theobserverzim.co.zw/2025/10/05/wicknell-chivayo-gifts-madzibaba-sapatina-a-brand-new-2025-toyota-fortuner-and-us20000-cash-for-viral-chicken-video/", "https://iharare.com/wicknell-chivayo-gifts-viral-chicken-inn-madzibaba-sapatina-a-brand-new-2025-toyota-fortuner-and-us20k-cash/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-085",
          name: "Madzibaba Moses",
          role: "Religious Leader (Vapositori4ED)",
          gifts: [
            { item: "2025 Toyota Fortuner 4x4", value: 70000, currency: "USD", date: "2025-09-10", source: "https://news.pindula.co.zw/2025/08/25/chivayo-hands-out-13-vehicles-us100000-to-vapositori-for-ed-leaders/" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-09-10", source: "https://gambakwe.com/wicknel-chivhayo-rewards-johanne-masowe-leaders-with-cars-and-cash/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/08/25/chivayo-hands-out-13-vehicles-us100000-to-vapositori-for-ed-leaders/", "https://gambakwe.com/wicknel-chivhayo-rewards-johanne-masowe-leaders-with-cars-and-cash/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-086",
          name: "Madzibaba Owen",
          role: "Religious Leader (Vapositori4ED)",
          gifts: [
            { item: "2025 Toyota Fortuner 4x4", value: 70000, currency: "USD", date: "2025-09-10", source: "https://www.midweekwatch.com/madzibaba-owens-grand-arrival-lights-up-neshuro-congregation/" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-09-10", source: "https://gambakwe.com/wicknel-chivhayo-rewards-johanne-masowe-leaders-with-cars-and-cash/" }
          ],
          evidence: ["https://www.midweekwatch.com/madzibaba-owens-grand-arrival-lights-up-neshuro-congregation/", "https://gambakwe.com/wicknel-chivhayo-rewards-johanne-masowe-leaders-with-cars-and-cash/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-087",
          name: "Madzibaba Forbes Chikobvu",
          role: "Religious Leader (Moses' assistant)",
          gifts: [
            { item: "Toyota Fortuner 2.4 GD6", value: 70000, currency: "USD", date: "2025-09-10", source: "https://news.pindula.co.zw/2025/08/25/chivayo-hands-out-13-vehicles-us100000-to-vapositori-for-ed-leaders/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/08/25/chivayo-hands-out-13-vehicles-us100000-to-vapositori-for-ed-leaders/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-088",
          name: "Madzibaba Auto",
          role: "Religious Leader",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4D", value: 70000, currency: "USD", date: "2026-07-15", source: "https://x.com/wicknellchivayo/status/2022235860150681656?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2022235860150681656?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-089",
          name: "Madzibaba Tinashe",
          role: "Religious Leader",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4D", value: 70000, currency: "USD", date: "2026-07-15", source: "https://x.com/wicknellchivayo/status/2022235860150681656?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2022235860150681656?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-090",
          name: "Madzibaba Bhuru",
          role: "Religious Leader",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4D", value: 70000, currency: "USD", date: "2026-07-15", source: "https://x.com/wicknellchivayo/status/2022235860150681656?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2022235860150681656?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-091",
          name: "Madzibaba Rabbi Musande",
          role: "Religious Leader",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4D", value: 70000, currency: "USD", date: "2026-07-15", source: "https://x.com/wicknellchivayo/status/2022235860150681656?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2022235860150681656?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-092",
          name: "Madzibaba Patrick",
          role: "Religious Leader",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4D", value: 70000, currency: "USD", date: "2026-07-15", source: "https://x.com/wicknellchivayo/status/2022235860150681656?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2022235860150681656?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-093",
          name: "Madzibaba Benjamin",
          role: "Religious Leader",
          gifts: [
            { item: "2026 Toyota Fortuner 2.4D", value: 70000, currency: "USD", date: "2026-07-15", source: "https://x.com/wicknellchivayo/status/2022235860150681656?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2022235860150681656?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-094",
          name: "Madzibaba Remincco Tafadzwa Zhangazha",
          role: "Religious Leader / Friend (Johanne Masowe Chishanu)",
          gifts: [
            { item: "2026 Lamborghini Urus SE", value: 500000, currency: "USD", date: "2026-08-10", source: "https://bulawayo24.com/index-id-news-sc-national-byo-266201.html" },
            { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2026-08-10", source: "https://bulawayo24.com/index-id-news-sc-national-byo-266201.html" }
          ],
          evidence: ["https://bulawayo24.com/index-id-news-sc-national-byo-266201.html"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-095",
          name: "Madzibaba Ngoni",
          role: "Religious Leader (Johanne Masowe Chishanu - Evaton Branch, South Africa)",
          gifts: [
            { item: "2026 Toyota Land Cruiser 300 Series ZX", value: 180000, currency: "USD", date: "2026-08-20", source: "https://x.com/wicknellchivayo/status/2063853579782193582?s=20" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/2063853579782193582?s=20"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-096",
          name: "Chief Hwenje",
          role: "Traditional Chief",
          gifts: [
            { item: "Toyota Hilux", value: 100000, currency: "USD", date: "2025-11-05", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-097",
          name: "Mai Chisamba",
          role: "Media Personality",
          gifts: [
            { item: "Toyota", value: 55000, currency: "USD", date: "2025-06-15", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-098",
          name: "Reuben Barwe",
          role: "Journalist",
          gifts: [
            { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2025-12-01", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" },
            { item: "New car", value: null, currency: "USD", date: "2025-12-01", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-099",
          name: "Phathisani Sibanda",
          role: "Radio Presenter",
          gifts: [
            { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2024-12-10", source: "https://nehandaradio.com/chivayo-devises-workaround-after-zimpapers-blocks-vehicle-gifts-to-capitalk-fm-staff/" },
            { item: "Offered: 2025 Toyota Fortuner GD6", value: 74000, currency: "USD", date: "2025-08-15", source: "https://news.pindula.co.zw/2026/05/14/capitalk-fms-phathisani-sibanda-buys-toyota-fortuner-for-us100-chivayo-offers-us150000-house-for-us80/" }
          ],
          evidence: ["https://nehandaradio.com/chivayo-devises-workaround-after-zimpapers-blocks-vehicle-gifts-to-capitalk-fm-staff/", "https://news.pindula.co.zw/2026/05/14/capitalk-fms-phathisani-sibanda-buys-toyota-fortuner-for-us100-chivayo-offers-us150000-house-for-us80/"],
          status: "pending"
        },
        {
          id: "CHV-2026-100",
          name: "Yvonne Tivatye",
          role: "Radio Manager",
          gifts: [
            { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2025-12-10", source: "https://news.pindula.co.zw/2026/05/23/zimpapers-reaffirms-gift-policy-after-chivayo-cash-car-splurge-at-capitalk-fm/" }
          ],
          evidence: ["https://news.pindula.co.zw/2026/05/23/zimpapers-reaffirms-gift-policy-after-chivayo-cash-car-splurge-at-capitalk-fm/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-101",
          name: "Peter Ndlovu",
          role: "Football Legend (former Warriors captain)",
          gifts: [
            { item: "2024 BMW X6M Sport Competition", value: 144000, currency: "USD", date: "2024-12-20", source: "https://nehandaradio.com/chivayo-gifts-football-legend-peter-ndlovu-a-bmw-x6m-worth-us144k/" }
          ],
          evidence: ["https://nehandaradio.com/chivayo-gifts-football-legend-peter-ndlovu-a-bmw-x6m-worth-us144k/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-102",
          name: "Luke Mnkandla",
          role: "Highlanders FC Chairman",
          gifts: [
            { item: "Toyota Fortuner 2.8 GD6", value: 80500, currency: "USD", date: "2026-02-15", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-103",
          name: "Denzel Mnkandla",
          role: "Highlanders FC CEO",
          gifts: [
            { item: "Toyota Fortuner 2.4 GD6", value: 72500, currency: "USD", date: "2026-02-15", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-104",
          name: "Jabulani Nkomo",
          role: "Highlanders FC Curator",
          gifts: [
            { item: "Toyota Land Cruiser 300 Series VXR", value: 180000, currency: "USD", date: "2026-02-15", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2026-02-15", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-105",
          name: "Madinda Ndlovu",
          role: "Highlanders FC Legend",
          gifts: [
            { item: "Toyota Fortuner 2.4 GD6", value: 72500, currency: "USD", date: "2026-02-15", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-106",
          name: "Sikhumbuzo Mpofu",
          role: "Chivayo's Lawyer",
          gifts: [
            { item: "2026 Range Rover Sport Autobiography", value: 250000, currency: "USD", date: "2026-04-25", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2026-04-25", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-107",
          name: "Adv. Edley Mubaiwa",
          role: "Chivayo's Lawyer",
          gifts: [
            { item: "2026 Range Rover Sport Autobiography", value: 250000, currency: "USD", date: "2026-04-25", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2026-04-25", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-108",
          name: "Pupurai Togarepi",
          role: "ZANU PF Chief Whip",
          gifts: [
            { item: "2026 Toyota Fortuner GD6 2.8", value: 82000, currency: "USD", date: "2026-07-20", source: "https://news.pindula.co.zw/2026/07/01/chivayo-gifts-zanu-pf-chief-whip-pupurai-togarepi-new-suv-and-us100000-cash/" },
            { item: "US$100,000 cash", value: 100000, currency: "USD", date: "2026-07-20", source: "https://news.pindula.co.zw/2026/07/01/chivayo-gifts-zanu-pf-chief-whip-pupurai-togarepi-new-suv-and-us100000-cash/" }
          ],
          evidence: ["https://news.pindula.co.zw/2026/07/01/chivayo-gifts-zanu-pf-chief-whip-pupurai-togarepi-new-suv-and-us100000-cash/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-109",
          name: "Dr. Nicholas Ndebele",
          role: "ZITF CEO",
          gifts: [
            { item: "2025 Toyota Land Cruiser 300 VXR", value: 200000, currency: "USD", date: "2025-05-20", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-110",
          name: "Aaron Chiundura Moyo",
          role: "Veteran Novelist / Filmmaker",
          gifts: [
            { item: "2025 Toyota Fortuner 4x4 GD6", value: null, currency: "USD", date: "2025-11-25", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-11-25", source: "https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo" }
          ],
          evidence: ["https://www.pindula.co.zw/List_of_Zimbabweans_That_Received_Cars_and_Gifts_From_Wicknell_Chivayo"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-111",
          name: "Rufaro Chiworeso Mukombe",
          role: "Jah Prayzah's Wife",
          gifts: [
            { item: "2024/2025 Land Rover Defender 2.4 D / 3.0 D", value: 120000, currency: "USD", date: "2025-07-25", source: "https://news.pindula.co.zw/2025/07/04/chivayo-surprises-jah-prayzahs-wife-with-land-rover-defender/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/07/04/chivayo-surprises-jah-prayzahs-wife-with-land-rover-defender/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-112",
          name: "Mandy",
          role: "Therapist at Masawara Spa",
          gifts: [
            { item: "Mercedes-Benz C200", value: 35000, currency: "USD", date: "2026-08-18", source: "https://www.zimeye.net/2026/08/02/watch-emmerson-mnangagwa-frontman-showcases-soft-life-as-citizens-grapple-with-economic-challenges/" },
            { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-08-18", source: "https://www.zimeye.net/2026/08/02/watch-emmerson-mnangagwa-frontman-showcases-soft-life-as-citizens-grapple-with-economic-challenges/" }
          ],
          evidence: ["https://www.zimeye.net/2026/08/02/watch-emmerson-mnangagwa-frontman-showcases-soft-life-as-citizens-grapple-with-economic-challenges/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-113",
          name: "Cathy",
          role: "Bookings/Reception at Masawara Spa",
          gifts: [
            { item: "Mercedes-Benz C200", value: null, currency: "USD", date: "2026-08-18", source: "https://www.zimeye.net/2026/08/02/watch-emmerson-mnangagwa-frontman-showcases-soft-life-as-citizens-grapple-with-economic-challenges/" },
            { item: "US$10,000 cash", value: 10000, currency: "USD", date: "2026-08-18", source: "https://www.zimeye.net/2026/08/02/watch-emmerson-mnangagwa-frontman-showcases-soft-life-as-citizens-grapple-with-economic-challenges/" }
          ],
          evidence: ["https://www.zimeye.net/2026/08/02/watch-emmerson-mnangagwa-frontman-showcases-soft-life-as-citizens-grapple-with-economic-challenges/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-114",
          name: "Madzibaba Flotcher Dispenser",
          role: "Religious Leader (Johanne Masowe Echishanu - Mhondoro)",
          gifts: [
            { item: "Toyota Fortuner GD-6", value: null, currency: "USD", date: "2025-10-15", source: "https://x.com/wicknellchivayo/status/1976525154126565707" }
          ],
          evidence: ["https://x.com/wicknellchivayo/status/1976525154126565707"],
          status: "confirmed"
        },
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
            { item: "Declined: US$2M cash (source citation needs verification - linked article covers Magwizi, not Guti)", value: 2000000, currency: "USD", date: "2025-08-20", source: "https://www.heraldonline.co.zw/zifa-president-nqobile-magwizi-gets-250k-gift-from-sir-wicknell/" },
            { item: "Declined: Toyota Land Cruiser 300 VXR (source citation needs verification)", value: 250000, currency: "USD", date: "2025-08-20", source: "https://www.heraldonline.co.zw/zifa-president-nqobile-magwizi-gets-250k-gift-from-sir-wicknell/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/zifa-president-nqobile-magwizi-gets-250k-gift-from-sir-wicknell/"],
          status: "disputed"
        },
        {
          id: "CHV-2026-117",
          name: "Vapositori4ED Movement",
          role: "Religious Group",
          gifts: [
            { item: "13 vehicles (Toyota Fortuners and Hilux pickups 78k each)", value: 1014000, currency: "USD", date: "2025-09-10", source: "https://news.pindula.co.zw/2025/08/25/chivayo-hands-out-13-vehicles-us100000-to-vapositori-for-ed-leaders/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/08/25/chivayo-hands-out-13-vehicles-us100000-to-vapositori-for-ed-leaders/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-118",
          name: "Johanne Masowe Church",
          role: "Religious Institution",
          gifts: [
            { item: "10 buses", value: 2100000, currency: "USD", date: "2026-06-01", source: "https://www.heraldonline.co.zw/chivayo-gifts-church-with-10-new-luxury-buses/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/chivayo-gifts-church-with-10-new-luxury-buses/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-120",
          name: "Dudley Hall Primary School",
          role: "School",
          gifts: [
            { item: "1 bus", value: 210000, currency: "USD", date: "2026-05-10", source: "https://news.pindula.co.zw/2025/11/26/chivayo-donates-us1-million-to-former-school/" },
            { item: "Cash", value: 1000000, currency: "USD", date: "2026-05-10", source: "https://news.pindula.co.zw/2025/11/26/chivayo-donates-us1-million-to-former-school/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/11/26/chivayo-donates-us1-million-to-former-school/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-121",
          name: "John Landa Nkomo School",
          role: "School",
          gifts: [
            { item: "1 bus", value: 210000, currency: "USD", date: "2026-05-10", source: "https://www.heraldonline.co.zw/landa-john-nkomo-high-receives-72-seater-bus/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/landa-john-nkomo-high-receives-72-seater-bus/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-122",
          name: "Provincial Hospitals",
          role: "Healthcare",
          gifts: [
            { item: "10 Toyota Land Cruiser ICU ambulances", value: 900000, currency: "USD", date: "2026-04-15", source: "https://www.heraldonline.co.zw/wicknell-chivayo-donates-ambulances-fuel-to-boost-health-delivery/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/wicknell-chivayo-donates-ambulances-fuel-to-boost-health-delivery/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-123",
          name: "10 ZANU PF Provincial Chairpersons",
          role: "Politicians",
          gifts: [
            { item: "Each: 2025 Toyota Land Cruiser 300 VXR approx 180k each", value: 1800000, currency: "USD", date: "2025-12-20", source: "https://news.pindula.co.zw/2025/09/15/chivayo-drops-millions-on-zanu-pf-provincial-chairpersons/" }
          ],
          evidence: ["https://news.pindula.co.zw/2025/09/15/chivayo-drops-millions-on-zanu-pf-provincial-chairpersons/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-124",
          name: "ZANU PF Women's League",
          role: "Political Organisation",
          gifts: [
            { item: "6 Toyota Land Cruisers approx USD120k each", value: 720000, currency: "USD", date: "2025-12-20", source: "https://www.heraldonline.co.zw/vehicle-cash-boost-for-womens-league/" },
            { item: "10 Toyota Hilux GD6 approx $90K each", value: 900000, currency: "USD", date: "2025-12-20", source: "https://www.heraldonline.co.zw/vehicle-cash-boost-for-womens-league/" }
          ],
          evidence: ["https://www.heraldonline.co.zw/vehicle-cash-boost-for-womens-league/"],
          status: "confirmed"
        },
        {
          id: "CHV-2026-128",
          name: "Evangelist Trymore Muparinga",
          role: "Street Preacher",
          gifts: [
            { item: "2025 Toyota Fortuner", value: 80000, currency: "USD", date: "2025-10-20", source: "https://iharare.com/wicknell-chivayo-gifts-evangelist-trymore-muparinga-a-brand-new-2025-toyota-fortuner-and-usd50k-cash/" },
            { item: "US$50,000 cash", value: 50000, currency: "USD", date: "2025-10-20", source: "https://iharare.com/wicknell-chivayo-gifts-evangelist-trymore-muparinga-a-brand-new-2025-toyota-fortuner-and-usd50k-cash/" }
          ],
          evidence: ["https://iharare.com/wicknell-chivayo-gifts-evangelist-trymore-muparinga-a-brand-new-2025-toyota-fortuner-and-usd50k-cash/"],
          status: "confirmed"
        },
        {
            id: "CHV-2026-129",
            name: "Talent Madungwe",
            role: "Self-styled Prophet",
            gifts: [
              { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2024", source: "https://www.heraldonline.co.zw/prophet-madungwe-arrested-after-driving-donated-car-without-a-drivers-licence/"}
    ],
    evidence: [
      "https://www.heraldonline.co.zw/prophet-madungwe-arrested-after-driving-donated-car-without-a-drivers-licence/",
      "https://allafrica.com/stories/202410090047.html"
    ],
    status: "confirmed"
  },
   {
     id: "CHV-2026-130",
      name: "John Landa Nkomo Trust",
      role: "Educational Trust",
      gifts: [
      { item: "US$250,000 cash donation",  value: 250000,  currency: "USD",date: "2024-10-09",source: "https://thenewshawks.com/chivayo-donates-usd250-000-to-john-landa-nkomo-trust/"},
      { item: "US$250,000 cash donation",  value: 250000,  currency: "USD",date: "2026-08-22",source: "https://x.com/wicknellchivayo/status/2091095037673078883?s=20"},
      { item: "Headmaster's single cab",  value: null,  currency: "USD",date: "2026-08-22",source: "https://x.com/wicknellchivayo/status/2091095037673078883?s=20"},
      { item: "ICT equipment: 100 desktops, 50 Laptops and 50 printers",  value: null,  currency: "USD",date: "2026-08-22",source: "https://x.com/wicknellchivayo/status/2091095037673078883?s=20"}
    ],
    evidence: ["https://thenewshawks.com/chivayo-donates-usd250-000-to-john-landa-nkomo-trust/","https://x.com/wicknellchivayo/status/2091095037673078883?s=20"],
    status: "confirmed"
  },
   {
    id: "CHV-2026-131",
    name: "Kuda Tagwirei",
    role: "Business Tycoon",
    gifts: [
      { item: "2025 Rolls-Royce Cullinan Black Badge", value: 1200000, currency: "USD", date: "2025-02-12", source: "https://thezimbabwetimes.co.zw/wicknell-chivayo-gifts-kuda-tagwirei-rolls-royce/" },
      { item: "US$250,000 cash (wedding gift)", value: 250000, currency: "USD", date: "2026-05-25", source: "https://iharare.com/kuda-tagwireis-son-and-his-bride-showered-with-over-us-20-million-in-cash-land-and-luxury-wedding-gifts/" }
    ],
    evidence: [
      "https://thezimbabwetimes.co.zw/wicknell-chivayo-gifts-kuda-tagwirei-rolls-royce/",
      "https://news.pindula.co.zw/2025/02/12/chivayo-gifts-kuda-tagwirei-a-2025-rolls-royce-cullinan-for-his-birthday/"
    ],
    status: "confirmed"
  },
  {
    id: "CHV-2026-132",
    name: "Chief Hwenje (Shumba Hwenje)",
    role: "Musician / Praise Singer",
    gifts: [
      { item: "Car (reported as received)", value: null, currency: "USD", date: "2023", source: "https://www.newsday.co.zw/theindependent/standard-style/article/200017065/sir-wicknell-gifts-zanu-pf-artists" }
    ],
    evidence: [
      "https://www.newsday.co.zw/theindependent/standard-style/article/200017065/sir-wicknell-gifts-zanu-pf-artists"
    ],
    status: "disputed"
  },
  {
    id: "CHV-2026-133",
    name: "Baba Tencen",
    role: "Comedian",
    gifts: [
      { item: "R100,000 cash", value: 5500, currency: "ZAR", date: "2016-03-17", source: "https://www.heraldonline.co.zw/wicknell-deposits-baba-tencens-r100000/" }
    ],
    evidence: [
      "https://www.heraldonline.co.zw/wicknell-deposits-baba-tencens-r100000/",
      "https://nehandaradio.com/2016/03/17/wicknell-gives-baba-tencen-r100-000-us/"
    ],
    status: "confirmed"
  },
  {
    id: "CHV-2026-134",
    name: "Jah Bobo (Tinotenda Mutswiri)",
    role: "Robert Mugabe Impersonator",
    gifts: [
      { item: "Toyota Aqua", value: 9000, currency: "USD", date: "2024-02-28", source: "https://gambakwe.com/2024/02/28/wicknell-chivayo-gifts-jah-bobo-a-brand-new-toyota-aqua/" }
    ],
    evidence: [
      "https://gambakwe.com/2024/02/28/wicknell-chivayo-gifts-jah-bobo-a-brand-new-toyota-aqua/",
      "https://iharare.com/he-deserves-a-benz-zimbos-erupt-with-reactions-as-wicknell-chivayo-offers-to-buy-robert-mugabes-impersonator-jah-bobo-a-toyota-aqua/"
    ],
    status: "confirmed"
  }
      ];

      let filtered = beneficiaries;
      if (query.trim()) {
        const lower = query.toLowerCase().trim();
        filtered = beneficiaries.filter(item =>
          (item.id && item.id.toLowerCase().includes(lower)) ||
          (item.name && item.name.toLowerCase().includes(lower)) ||
          (item.role && item.role.toLowerCase().includes(lower))
        );
      }

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

    return env.ASSETS.fetch(request);
  }
};
