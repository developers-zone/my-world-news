const FEEDS = [

  // =========================
  // WINNIPEG
  // =========================

  {
    group: "Winnipeg",
    source: "Global Winnipeg",
    url: "https://globalnews.ca/winnipeg/feed/",
    weight: 5
  },

  {
    group: "Winnipeg",
    source: "CBC Manitoba",
    url: "https://www.cbc.ca/webfeed/rss/rss-canada-manitoba",
    weight: 5
  },

  {
    group: "Winnipeg",
    source: "Winnipeg Free Press",
    url: "https://www.winnipegfreepress.com/local/feed",
    weight: 5
  },

  {
    group: "Winnipeg",
    source: "Google News – Winnipeg",
    url:
      "https://news.google.com/rss/search?" +
      "q=Winnipeg+when:2d" +
      "&hl=en-CA&gl=CA&ceid=CA:en",
    weight: 3
  },


  // =========================
  // KERALA
  // =========================

  {
    group: "Kerala",
    source: "Onmanorama",
    url:
      "https://www.onmanorama.com/kerala.feeds.onmrss.xml",
    weight: 5
  },

  {
    group: "Kerala",
    source: "Google News – Kerala",
    url:
      "https://news.google.com/rss/search?" +
      "q=Kerala+when:2d" +
      "&hl=ml&gl=IN&ceid=IN:ml",
    weight: 4
  },

  {
    group: "Kerala",
    source: "Google News – Mathrubhumi",
    url:
      "https://news.google.com/rss/search?" +
      "q=site:mathrubhumi.com+Kerala+when:2d" +
      "&hl=ml&gl=IN&ceid=IN:ml",
    weight: 4
  },

  {
    group: "Kerala",
    source: "Google News – Manorama",
    url:
      "https://news.google.com/rss/search?" +
      "q=site:manoramanews.com+Kerala+when:2d" +
      "&hl=ml&gl=IN&ceid=IN:ml",
    weight: 4
  },


  // =========================
  // NIFTY / INDIA
  // =========================

  {
    group: "Markets",
    subgroup: "India",
    source: "Nifty / NSE",
    url:
      "https://news.google.com/rss/search?" +
      "q=(Nifty+OR+Sensex+OR+NSE+OR+BSE)+when:2d" +
      "&hl=en-IN&gl=IN&ceid=IN:en",
    weight: 5
  },


  // =========================
  // U.S. MARKETS
  // =========================

  {
    group: "Markets",
    subgroup: "United States",
    source: "U.S. Markets",
    url:
      "https://news.google.com/rss/search?" +
      "q=(S%26P+500+OR+Nasdaq+OR+Dow+OR+" +
      "Federal+Reserve)+when:2d" +
      "&hl=en-US&gl=US&ceid=US:en",
    weight: 4
  },


  // =========================
  // REUTERS / MARKETS
  // =========================

  {
    group: "Markets",
    subgroup: "Reuters",
    source: "Reuters Markets",
    url:
      "https://news.google.com/rss/search?" +
      "q=site:reuters.com/markets+when:7d" +
      "&hl=en-US&gl=US&ceid=US:en",
    weight: 5
  }

];


const WINNIPEG_KEYWORDS = [
  "winnipeg",
  "manitoba",
  "winnipeg police",
  "city of winnipeg",
  "red river",
  "assiniboine",
  "transcona",
  "st vital",
  "st. vital",
  "st boniface",
  "st. boniface",
  "charleswood",
  "fort garry",
  "kildonan"
];


const KERALA_KEYWORDS = [
  "kerala",
  "കേരളം",
  "കേരള",
  "തിരുവനന്തപുരം",
  "കൊല്ലം",
  "പത്തനംതിട്ട",
  "ആലപ്പുഴ",
  "കോട്ടയം",
  "ഇടുക്കി",
  "എറണാകുളം",
  "തൃശ്ശൂർ",
  "പാലക്കാട്",
  "മലപ്പുറം",
  "കോഴിക്കോട്",
  "വയനാട്",
  "കണ്ണൂർ",
  "കാസർഗോഡ്",
  "കൊച്ചി"
];


const MARKET_KEYWORDS = [
  "nifty",
  "sensex",
  "nse",
  "bse",
  "nasdaq",
  "dow",
  "s&p 500",
  "stocks",
  "stock market",
  "shares",
  "equity",
  "fed",
  "federal reserve",
  "interest rate",
  "bond",
  "treasury",
  "oil",
  "gold",
  "rupee",
  "dollar",
  "earnings",
  "wall street"
];


function cleanText(value) {

  if (!value) return "";

  return value
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}


function tagText(item, tag) {

  const element = item.querySelector(tag);

  return element
    ? element.textContent.trim()
    : "";
}


function normalizeTitle(title) {

  return cleanText(title)
    .toLowerCase()
    .replace(/\s*[-|–—]\s*.*$/, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}


function relevanceScore(story) {

  let score = story.weight * 5;

  const title = story.title.toLowerCase();

  const ageHours =
    (Date.now() - story.date.getTime()) / 3600000;

  if (ageHours < 1) score += 30;
  else if (ageHours < 3) score += 22;
  else if (ageHours < 6) score += 16;
  else if (ageHours < 12) score += 10;
  else if (ageHours < 24) score += 5;

  let keywords = [];

  if (story.group === "Winnipeg")
    keywords = WINNIPEG_KEYWORDS;

  if (story.group === "Kerala")
    keywords = KERALA_KEYWORDS;

  if (story.group === "Markets")
    keywords = MARKET_KEYWORDS;

  for (const keyword of keywords) {

    if (title.includes(keyword)) {
      score += 7;
    }

  }

  const important = [
    "breaking",
    "urgent",
    "alert",
    "latest",
    "major",
    "crash",
    "explosion",
    "fire",
    "killed",
    "dead",
    "missing",
    "arrested",
    "warning",
    "emergency",
    "election",
    "resignation"
  ];

  for (const word of important) {

    if (title.includes(word)) {
      score += 4;
    }

  }

  return score;
}


async function fetchFeed(feed) {

  try {

    const response = await fetch(
      feed.url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 MyWorldNews/1.0",
          "Accept":
            "application/rss+xml, application/xml, text/xml"
        }
      }
    );

    if (!response.ok) {
      console.log(
        `${feed.source}: HTTP ${response.status}`
      );

      return [];
    }

    const xml = await response.text();

    const document =
      new DOMParser().parseFromString(
        xml,
        "application/xml"
      );

    const items =
      Array.from(
        document.querySelectorAll("item")
      );

    return items
      .map(item => {

        const title =
          cleanText(
            tagText(item, "title")
          );

        const link =
          tagText(item, "link");

        const description =
          cleanText(
            tagText(
              item,
              "description"
            )
          );

        const pubDate =
          tagText(
            item,
            "pubDate"
          );

        let date =
          new Date(pubDate);

        if (Number.isNaN(date.getTime())) {
          date = new Date();
        }

        return {
          group: feed.group,
          subgroup: feed.subgroup || "",
          source: feed.source,
          weight: feed.weight,
          title,
          link,
          description,
          date
        };

      })
      .filter(
        story =>
          story.title &&
          story.link
      );

  } catch (error) {

    console.log(
      `${feed.source}: ${error.message}`
    );

    return [];
  }
}


function deduplicate(stories) {

  const seen = new Set();

  return stories.filter(
    story => {

      const key =
        normalizeTitle(
          story.title
        );

      if (!key || seen.has(key)) {
        return false;
      }

      seen.add(key);

      return true;
    }
  );
}


async function getNews() {

  const results =
    await Promise.all(
      FEEDS.map(fetchFeed)
    );

  let stories =
    results.flat();

  stories =
    deduplicate(stories);

  stories =
    stories
      .map(story => ({
        ...story,
        score:
          relevanceScore(story)
      }))
      .sort(
        (a, b) =>
          b.score - a.score
      );

  return {

    updated:
      new Date().toISOString(),

    winnipeg:
      stories
        .filter(
          s => s.group === "Winnipeg"
        )
        .slice(0, 35),

    kerala:
      stories
        .filter(
          s => s.group === "Kerala"
        )
        .slice(0, 35),

    india:
      stories
        .filter(
          s =>
            s.group === "Markets" &&
            s.subgroup === "India"
        )
        .slice(0, 20),

    usa:
      stories
        .filter(
          s =>
            s.group === "Markets" &&
            s.subgroup === "United States"
        )
        .slice(0, 20),

    reuters:
      stories
        .filter(
          s =>
            s.group === "Markets" &&
            s.subgroup === "Reuters"
        )
        .slice(0, 20)

  };
}


export default {

  async fetch(request, env, ctx) {

    const url =
      new URL(request.url);


    // ============================================
    // RSS API
    // ============================================

    if (
      url.pathname === "/api/news"
    ) {

      try {

        const data =
          await getNews();

        return new Response(
          JSON.stringify(data),
          {
            headers: {
              "Content-Type":
                "application/json; charset=utf-8",

              "Cache-Control":
                "public, max-age=300"
            }
          }
        );

      } catch (error) {

        return new Response(
          JSON.stringify({
            error:
              "Unable to fetch news",
            message:
              error.message
          }),
          {
            status: 500,
            headers: {
              "Content-Type":
                "application/json"
            }
          }
        );

      }
    }


    // ============================================
    // Everything else → website files
    // ============================================

    return env.ASSETS.fetch(request);
  }

};
