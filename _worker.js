const FEEDS = [

  // =========================================================
  // WINNIPEG / MANITOBA
  // =========================================================

  {
    group: "Winnipeg",
    source: "Global News Winnipeg",
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
    source: "Google News Winnipeg",
    url:
      "https://news.google.com/rss/search?" +
      "q=Winnipeg+Manitoba+when:2d" +
      "&hl=en-CA&gl=CA&ceid=CA:en",
    weight: 4
  },

  {
    group: "Winnipeg",
    source: "Google News Local Winnipeg",
    url:
      "https://news.google.com/rss/search?" +
      "q=(Winnipeg+OR+Manitoba+OR+" +
      "\"Winnipeg+Police\"+OR+\"City+of+Winnipeg\")+when:2d" +
      "&hl=en-CA&gl=CA&ceid=CA:en",
    weight: 4
  },


  // =========================================================
  // KERALA
  // =========================================================

  {
    group: "Kerala",
    source: "Onmanorama",
    url:
      "https://www.onmanorama.com/kerala.feeds.onmrss.xml",
    weight: 5
  },

  {
    group: "Kerala",
    source: "OneIndia Malayalam",
    url:
      "https://malayalam.oneindia.com/rss/feeds/malayalam-news-fb.xml",
    weight: 5
  },

  {
    group: "Kerala",
    source: "Google News Kerala",
    url:
      "https://news.google.com/rss/search?" +
      "q=Kerala+when:2d" +
      "&hl=ml&gl=IN&ceid=IN:ml",
    weight: 5
  },

  {
    group: "Kerala",
    source: "Google News Asianet",
    url:
      "https://news.google.com/rss/search?" +
      "q=site:asianetnews.com/kerala+when:2d" +
      "&hl=ml&gl=IN&ceid=IN:ml",
    weight: 4
  },

  {
    group: "Kerala",
    source: "Google News Mathrubhumi",
    url:
      "https://news.google.com/rss/search?" +
      "q=site:mathrubhumi.com+Kerala+when:2d" +
      "&hl=ml&gl=IN&ceid=IN:ml",
    weight: 4
  },

  {
    group: "Kerala",
    source: "Google News Manorama",
    url:
      "https://news.google.com/rss/search?" +
      "q=site:manoramanews.com+Kerala+when:2d" +
      "&hl=ml&gl=IN&ceid=IN:ml",
    weight: 4
  },

  {
    group: "Kerala",
    source: "Google News Kerala Districts",
    url:
      "https://news.google.com/rss/search?" +
      "q=(Kochi+OR+Kozhikode+OR+Thiruvananthapuram+" +
      "OR+Kollam+OR+Thrissur+OR+Kannur+OR+Kottayam+" +
      "OR+Alappuzha+OR+Palakkad+OR+Malappuram)+when:2d" +
      "&hl=ml&gl=IN&ceid=IN:ml",
    weight: 4
  },


  // =========================================================
  // MARKETS — INDIA / NIFTY
  // =========================================================

  {
    group: "Markets",
    subgroup: "India",
    source: "Nifty & Indian Markets",
    url:
      "https://news.google.com/rss/search?" +
      "q=(Nifty+OR+Sensex+OR+NSE+OR+BSE+" +
      "OR+Indian+stocks+OR+Indian+shares)+when:2d" +
      "&hl=en-IN&gl=IN&ceid=IN:en",
    weight: 5
  },

  {
    group: "Markets",
    subgroup: "India",
    source: "Indian Business Markets",
    url:
      "https://news.google.com/rss/search?" +
      "q=(Indian+stock+market+OR+Nifty+50+" +
      "OR+Sensex+OR+Reliance+OR+Infosys+OR+TCS)+when:2d" +
      "&hl=en-IN&gl=IN&ceid=IN:en",
    weight: 4
  },


  // =========================================================
  // MARKETS — U.S.
  // =========================================================

  {
    group: "Markets",
    subgroup: "United States",
    source: "U.S. Markets",
    url:
      "https://news.google.com/rss/search?" +
      "q=(Nasdaq+OR+S%26P+500+OR+Dow+" +
      "OR+US+stocks+OR+Wall+Street+OR+" +
      "Federal+Reserve)+when:2d" +
      "&hl=en-US&gl=US&ceid=US:en",
    weight: 5
  },

  {
    group: "Markets",
    subgroup: "United States",
    source: "U.S. Economy & Fed",
    url:
      "https://news.google.com/rss/search?" +
      "q=(Federal+Reserve+OR+Fed+OR+" +
      "US+inflation+OR+US+economy+OR+" +
      "Treasury)+when:2d" +
      "&hl=en-US&gl=US&ceid=US:en",
    weight: 4
  },


  // =========================================================
  // MARKETS — REUTERS
  // =========================================================

  {
    group: "Markets",
    subgroup: "Reuters",
    source: "Reuters Markets",
    url:
      "https://news.google.com/rss/search?" +
      "q=site:reuters.com/markets+when:7d" +
      "&ceid=US:en&hl=en-US&gl=US",
    weight: 5
  },

  {
    group: "Markets",
    subgroup: "Reuters",
    source: "Reuters World Economy",
    url:
      "https://news.google.com/rss/search?" +
      "q=site:reuters.com+economy+markets+when:7d" +
      "&ceid=US:en&hl=en-US&gl=US",
    weight: 4
  }

];


// =========================================================
// KEYWORDS
// =========================================================

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
  "kildonan",
  "selkirk",
  "brandon"
];


const KERALA_KEYWORDS = [
  "kerala",
  "കേരളം",
  "കേരള",
  "തിരുവനന്തപുരം",
  "തിരുവന്തപുരം",
  "കൊല്ലം",
  "പത്തനംതിട്ട",
  "ആലപ്പുഴ",
  "കോട്ടയം",
  "ഇടുക്കി",
  "എറണാകുളം",
  "കൊച്ചി",
  "തൃശ്ശൂർ",
  "പാലക്കാട്",
  "മലപ്പുറം",
  "കോഴിക്കോട്",
  "വയനാട്",
  "കണ്ണൂർ",
  "കാസർഗോഡ്"
];


const MARKET_KEYWORDS = [
  "nifty",
  "nifty 50",
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
  "wall street",
  "federal reserve",
  "fed",
  "interest rate",
  "inflation",
  "treasury",
  "bond",
  "oil",
  "gold",
  "rupee",
  "dollar",
  "earnings",
  "investor",
  "investors",
  "markets"
];


// =========================================================
// TEXT CLEANING
// =========================================================

function cleanText(value) {

  if (!value) return "";

  return value
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, "$1")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}


// =========================================================
// NORMALIZE TITLE
// =========================================================

function normalizeTitle(title) {

  return cleanText(title)
    .toLowerCase()
    .replace(/\s*[-|–—]\s*.*$/, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}


// =========================================================
// RSS / ATOM FETCHER
// =========================================================

async function fetchFeed(feed) {

  try {

    const response = await fetch(
      feed.url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 MyWorldNews/1.0",

          "Accept":
            "application/rss+xml, " +
            "application/atom+xml, " +
            "application/xml, " +
            "text/xml, */*"
        }
      }
    );


    if (!response.ok) {

      console.log(
        `${feed.source}: HTTP ${response.status}`
      );

      return [];

    }


    const xml =
      await response.text();


    // Support RSS <item>
    const rssItems =
      xml.match(
        /<item\b[\s\S]*?<\/item>/gi
      ) || [];


    // Support Atom <entry>
    const atomEntries =
      xml.match(
        /<entry\b[\s\S]*?<\/entry>/gi
      ) || [];


    const blocks = [
      ...rssItems,
      ...atomEntries
    ];


    function getTag(block, tag) {

      const regex =
        new RegExp(
          `<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`,
          "i"
        );


      const match =
        block.match(regex);


      return match
        ? cleanText(match[1])
        : "";

    }


    function getLink(block) {

      // RSS
      const rssLink =
        getTag(block, "link");


      if (rssLink) {
        return rssLink;
      }


      // Atom
      const atomMatch =
        block.match(
          /<link[^>]+href=["']([^"']+)["'][^>]*>/i
        );


      return atomMatch
        ? atomMatch[1]
        : "";

    }


    return blocks
      .map(block => {

        const title =
          getTag(
            block,
            "title"
          );


        const description =
          getTag(
            block,
            "description"
          ) ||
          getTag(
            block,
            "summary"
          ) ||
          getTag(
            block,
            "content"
          );


        const link =
          getLink(block);


        const pubDate =
          getTag(
            block,
            "pubDate"
          ) ||
          getTag(
            block,
            "published"
          ) ||
          getTag(
            block,
            "updated"
          ) ||
          getTag(
            block,
            "dc:date"
          );


        let date =
          new Date(pubDate);


        if (
          Number.isNaN(
            date.getTime()
          )
        ) {

          date =
            new Date();

        }


        return {

          group:
            feed.group,

          subgroup:
            feed.subgroup || "",

          source:
            feed.source,

          weight:
            feed.weight,

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


// =========================================================
// RELEVANCE
// =========================================================

function relevanceScore(story) {

  let score =
    story.weight * 5;


  const title =
    story.title.toLowerCase();


  const ageHours =
    (
      Date.now() -
      story.date.getTime()
    ) / 3600000;


  // Freshness
  if (ageHours < 1)
    score += 30;

  else if (ageHours < 3)
    score += 24;

  else if (ageHours < 6)
    score += 18;

  else if (ageHours < 12)
    score += 12;

  else if (ageHours < 24)
    score += 6;


  let keywords = [];


  if (
    story.group ===
    "Winnipeg"
  ) {

    keywords =
      WINNIPEG_KEYWORDS;

  }


  if (
    story.group ===
    "Kerala"
  ) {

    keywords =
      KERALA_KEYWORDS;

  }


  if (
    story.group ===
    "Markets"
  ) {

    keywords =
      MARKET_KEYWORDS;

  }


  for (
    const keyword of keywords
  ) {

    if (
      title.includes(keyword)
    ) {

      score += 7;

    }

  }


  // Important news
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
    "resignation",
    "attack"

  ];


  for (
    const word of important
  ) {

    if (
      title.includes(word)
    ) {

      score += 4;

    }

  }


  return score;

}


// =========================================================
// DEDUPLICATION
// =========================================================

function deduplicate(stories) {

  const seen =
    new Set();


  return stories.filter(
    story => {

      const key =
        normalizeTitle(
          story.title
        );


      if (
        !key ||
        seen.has(key)
      ) {

        return false;

      }


      seen.add(key);

      return true;

    }
  );

}


// =========================================================
// GET ALL NEWS
// =========================================================

async function getNews() {

  const results =
    await Promise.all(
      FEEDS.map(fetchFeed)
    );


  let stories =
    results.flat();


  stories =
    deduplicate(
      stories
    );


  stories =
    stories
      .map(
        story => ({

          ...story,

          score:
            relevanceScore(
              story
            )

        })
      )
      .sort(
        (a, b) =>
          b.score -
          a.score
      );


  // ---------------------------------------------------------
  // CATEGORY ARRAYS
  // ---------------------------------------------------------

  const winnipeg =
    stories
      .filter(
        s =>
          s.group ===
          "Winnipeg"
      )
      .slice(
        0,
        40
      );


  const kerala =
    stories
      .filter(
        s =>
          s.group ===
          "Kerala"
      )
      .slice(
        0,
        40
      );


  // Combine ALL markets into one Markets tab
  const markets =
    stories
      .filter(
        s =>
          s.group ===
          "Markets"
      )
      .slice(
        0,
        50
      );


  return {

    updated:
      new Date()
        .toISOString(),

    winnipeg,

    kerala,

    markets,

    // Keep these for compatibility
    // with older app.js versions.

    india:
      markets
        .filter(
          s =>
            s.subgroup ===
            "India"
        )
        .slice(
          0,
          20
        ),

    usa:
      markets
        .filter(
          s =>
            s.subgroup ===
            "United States"
        )
        .slice(
          0,
          20
        ),

    reuters:
      markets
        .filter(
          s =>
            s.subgroup ===
            "Reuters"
        )
        .slice(
          0,
          20
        )

  };

}


// =========================================================
// CLOUDFLARE WORKER
// =========================================================

export default {

  async fetch(
    request,
    env,
    ctx
  ) {

    const url =
      new URL(
        request.url
      );


    // =======================================================
    // NEWS API
    // =======================================================

    if (
      url.pathname ===
      "/api/news"
    ) {

      try {

        const data =
          await getNews();


        return new Response(
          JSON.stringify(
            data
          ),
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


    // =======================================================
    // WEBSITE
    // =======================================================

    return env.ASSETS.fetch(
      request
    );

  }

};
