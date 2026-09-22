const asset = (name: string) => `${import.meta.env.BASE_URL}screenshot/${name}`;

export type CaseSection = { label: string; title: string; copy: string };
export type Project = {
  id: "marental" | "amalfi-re" | "italyana"; number: string; name: string; year: string; category: string; headline: string; summary: string;
  metric: string; metricLabel: string; note: string; role: string; context: string; approach: string; sections: CaseSection[];
  evidence: [string, string][]; evidenceNote: string; images: { src: string; alt: string; label: string }[];
};

export const projects: Project[] = [
  {
    id: "marental", number: "01", name: "MARENTAL", year: "2026", category: "Product development / SEO / Digital acquisition",
    headline: "From zero digital presence to an organic acquisition channel.",
    summary: "A scooter rental business with a brand, but no website. I designed, developed and deployed its digital product in approximately 5–7 days, then developed its search visibility.",
    metric: "+118%", metricLabel: "Google Search impressions", note: "Latest 30 days vs first 30 days available.",
    role: "Product and website design, full development, responsive implementation, SEO architecture, local landing pages, Search Console analysis and ongoing technical improvements.",
    context: "Scooter rental in Ravello, Scala and the Amalfi Coast. The website was built at the end of May 2026.",
    approach: "Existing brand → digital product → local search architecture → organic visibility",
    sections: [
      { label: "01 / Context", title: "A brand without a digital acquisition channel.", copy: "MARENTAL already had its identity and logo, but no website. The commercial task was to create a clear digital presence that could support the rental operation and its ability to maximise daily scooter utilisation." },
      { label: "02 / Challenge", title: "Move quickly without making the product generic.", copy: "The product needed to communicate a local service clearly, work well on mobile and connect the offer to the searches people make when they are ready to rent around Ravello and Scala." },
      { label: "03 / Product", title: "A complete, responsive product — built from scratch.", copy: "I designed, developed and deployed the website in approximately 5–7 days. The main product was paired with a responsive implementation and local landing pages that make the geography and offer legible to users and search engines." },
    ],
    evidence: [["11.4K+", "Google Search impressions"], ["534", "Organic clicks"], ["+118%", "Search impressions"], ["+59%", "Organic clicks"]],
    evidenceNote: "Approved overall results from the first months. Growth compares the latest 30 days with the first 30 days available. High-intent visibility included queries around scooter rental Ravello, Ravello scooter rental, rent scooter Ravello and noleggio scooter Ravello. Historical conversion tracking was not configured, so this does not establish bookings, leads or revenue.",
    images: [
      { src: asset("optimized/MARENTAL_desktop_home_page.webp"), alt: "MARENTAL desktop homepage showing the scooter rental offer and Amalfi Coast imagery.", label: "Desktop product" },
      { src: asset("optimized/MARENTAL_mobile_home_page.webp"), alt: "MARENTAL mobile homepage demonstrating the responsive scooter-rental experience.", label: "Mobile product" },
      { src: asset("optimized/MARENTAL_mobile_ravello.webp"), alt: "MARENTAL mobile local landing page for scooter rental in Ravello.", label: "Local landing page" },
      { src: asset("optimized/MARENTAL_search_console_graph.webp"), alt: "Google Search Console screenshot showing MARENTAL clicks and impressions for a specific reporting period.", label: "Search Console report" },
    ],
  },
  {
    id: "amalfi-re", number: "02", name: "AMALFI RE", year: "2025–2026", category: "Digital strategy / Web / SEO / Analytics",
    headline: "Building a digital ecosystem for Amalfi Coast real estate.",
    summary: "From website optimisation to content, analytics and acquisition. Managing the connected digital presence of an agency serving domestic and international audiences.",
    metric: "2.96K", metricLabel: "Organic Google clicks", note: "+35.6% clicks · latest 90 days vs first 90 days available.",
    role: "Website development and optimisation, ongoing website management, SEO, analytics, property and content structure, social media, newsletters, landing pages and recent Meta Ads experimentation.",
    context: "Amalfi Coast real estate. The current website went live around September 2025; broader digital ecosystem management began approximately November 2025.",
    approach: "Digital presence → property and content ecosystem → search visibility → analytics → acquisition experimentation",
    sections: [
      { label: "01 / Context", title: "A digital presence that needed to work as an ecosystem.", copy: "Amalfi RE operates in a market where the website needs to do more than establish a brand. It must help people discover locations and properties, while giving the business a clearer view of organic demand and international reach." },
      { label: "02 / Challenge", title: "Connect property content, visibility and measurement.", copy: "The work spans the web experience, property and editorial structure, SEO and analytics. Each part needs to support a more coherent digital presence instead of operating as a separate marketing activity." },
      { label: "03 / Product", title: "An ongoing property and content experience.", copy: "I manage and improve the website alongside its SEO, property content, social media and newsletter. Recent paid acquisition activity is an experimentation layer; it is separate from the organic-search results shown here." },
    ],
    evidence: [["98.4K", "Google Search impressions"], ["2.96K", "Organic Google clicks"], ["+60.6%", "Search impressions"], ["+35.6%", "Organic clicks"], ["5.1K+", "Organic Search sessions"], ["76%", "Organic Search engagement rate"], ["~145s", "Average engagement per organic session"], ["1.4K+", "Active users from the United States"]],
    evidenceNote: "Approved overall Search Console and GA4 results. Search growth compares the latest 90 days with the first 90 days available. Commercial organic visibility included queries such as “case in vendita costiera amalfitana” and “case in vendita ad amalfi”. Paid acquisition started recently and is not attributed to organic-search growth. GA4 metrics are engagement and audience evidence, not conversions.",
    images: [
      { src: asset("optimized/AMALFIRE_desktop_home_page.webp"), alt: "Amalfi RE desktop homepage showing the agency’s Amalfi Coast digital identity.", label: "Digital presence" },
      { src: asset("optimized/AMALFIRE_desktop_property.webp"), alt: "Amalfi RE desktop property page showing a real-estate listing experience for Minori.", label: "Property experience" },
      { src: asset("optimized/AMALFIRE_search_console_graph.webp"), alt: "Google Search Console screenshot showing Amalfi RE clicks and impressions for a specific reporting period.", label: "Search Console report" },
      { src: asset("optimized/AMALFIRE_acquisition_report.webp"), alt: "GA4 acquisition report showing several traffic channels in a specific 28-day reporting window.", label: "Acquisition report" },
    ],
  },
  {
    id: "italyana", number: "03", name: "ITALYANA", year: "2023–Present", category: "Venture building / Product / Technology",
    headline: "Local knowledge, turned into a testable digital product.",
    summary: "A travel venture connecting international travellers with authentic local experiences. From an idea with Stefano to a working platform, built in approximately one month.",
    metric: "Idea → MVP", metricLabel: "A working platform in ~1 month", note: "Built, tested with real traffic, and still being refined.",
    role: "Product architecture, UX and service flows, full-stack development, database structure, deployment, SEO architecture, analytics and acquisition experimentation.",
    context: "The idea began with Stefano in 2023. Stefano brings local knowledge, authenticity, relationships and the local ecosystem; I bring technology, product development, platform architecture and digital scalability.",
    approach: "Local insight → working product → service discovery → structured request → real-world testing → learning → iteration",
    sections: [
      { label: "01 / Context", title: "Local insight needed a product layer.", copy: "Italyana explores how international travellers can connect with authentic local experiences and services on the Amalfi Coast. The model is request-based rather than a traditional direct-booking marketplace." },
      { label: "02 / Challenge", title: "Turn a venture idea into something people can actually use.", copy: "The first product needed to structure destinations, services, local operators and editorial content, while creating a useful path from discovery to a request that could be reviewed locally." },
      { label: "03 / Product", title: "A working platform and a structured request journey.", copy: "I developed the current platform in approximately one month using TypeScript, Express, PostgreSQL, Drizzle ORM, Vercel and Railway. The product work includes the interface, service flows, database structure, deployment, SEO landing pages and product iteration." },
    ],
    evidence: [["~1 month", "Current platform development"], ["1.5K+", "Paid Social sessions"]],
    evidenceNote: "The initial Paid Social experiments brought real traffic and behavioural evidence. The tests were used to identify further iteration in targeting, proposition and the conversion journey, rather than to make a completed acquisition claim.",
    images: [
      { src: asset("optimized/ITALYANA_desktop_home.webp"), alt: "Italyana desktop discovery page introducing Amalfi Coast places, experiences and services.", label: "01 / Discovery" },
      { src: asset("optimized/ITALYANA_desktop_service.webp"), alt: "Italyana desktop service-selection page with concierge experience categories.", label: "02 / Service selection" },
      { src: asset("optimized/ITALYANA_desktop_request_flow.webp"), alt: "Italyana desktop request form showing a structured travel basics step.", label: "03 / Structured request" },
    ],
  },
];

// Add verified public contact destinations here when they are available.
export const contactLinks: { label: string; href: string }[] = [
  { label: "Mobile", href: "tel:+393318760978" },
  { label: "Email", href: "mailto:luca.roggi12@outlook.it" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luca-roggi/" },
];
