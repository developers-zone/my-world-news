const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");


// =========================================================
// TAB HANDLING
// =========================================================

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    const target =
      tab.dataset.tab;

    tabs.forEach(t =>
      t.classList.remove("active")
    );

    panels.forEach(panel =>
      panel.classList.remove("active")
    );

    tab.classList.add("active");

    const panel =
      document.getElementById(target);

    if (panel) {
      panel.classList.add("active");
    }

  });

});


// =========================================================
// HTML ESCAPING
// =========================================================

function escapeHtml(value) {

  const div =
    document.createElement("div");

  div.textContent =
    value || "";

  return div.innerHTML;

}


// =========================================================
// DATE FORMAT
// =========================================================

function formatDate(value) {

  if (!value) {
    return "";
  }

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "";
  }

  return date.toLocaleString(
    undefined,
    {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }
  );

}


// =========================================================
// RENDER STORIES
// =========================================================

function renderStories(
  elementId,
  stories
) {

  const container =
    document.getElementById(
      elementId
    );


  if (!container) {
    return;
  }


  if (
    !stories ||
    !stories.length
  ) {

    container.innerHTML =
      '<div class="empty">No stories available.</div>';

    return;

  }


  container.innerHTML =
    stories.map(
      story => {

        const title =
          escapeHtml(
            story.title
          );


        const source =
          escapeHtml(
            story.source
          );


        const link =
          encodeURI(
            story.link || "#"
          );


        const date =
          formatDate(
            story.date
          );


        const subgroup =
          story.subgroup
            ? escapeHtml(
                story.subgroup
              )
            : "";


        return `
          <article class="story">

            <a
              class="headline"
              href="${link}"
              target="_blank"
              rel="noopener noreferrer">

              ${title}

            </a>

            <div class="meta">

              <span class="source">
                ${source}
              </span>

              ${
                subgroup
                  ? `<span class="market-tag">
                       ${subgroup}
                     </span>`
                  : ""
              }

              <span>
                ${date}
              </span>

            </div>

          </article>
        `;

      }
    ).join("");

}


// =========================================================
// LOAD NEWS
// =========================================================

async function loadNews() {

  const status =
    document.getElementById(
      "status"
    );


  if (status) {

    status.textContent =
      "Updating news...";

  }


  try {

    const response =
      await fetch(
        "/api/news",
        {
          cache: "no-store"
        }
      );


    if (!response.ok) {

      throw new Error(
        `Server returned ${response.status}`
      );

    }


    const data =
      await response.json();


    // -------------------------------------------------------
    // WINNIPEG
    // -------------------------------------------------------

    renderStories(
      "winnipeg-news",
      data.winnipeg
    );


    // -------------------------------------------------------
    // KERALA
    // -------------------------------------------------------

    renderStories(
      "kerala-news",
      data.kerala
    );


    // -------------------------------------------------------
    // MARKETS
    //
    // IMPORTANT:
    // The Worker now returns ONE combined
    // data.markets array.
    // -------------------------------------------------------

    renderStories(
      "markets-news",
      data.markets
    );


    // -------------------------------------------------------
    // LAST UPDATED
    // -------------------------------------------------------

    const updated =
      data.updated
        ? formatDate(
            data.updated
          )
        : "just now";


    if (status) {

      status.textContent =
        `Last updated: ${updated}`;

    }


  } catch (error) {

    console.error(
      "News loading error:",
      error
    );


    const message = `
      <div class="error">
        Unable to load news right now.
        Please try again shortly.
      </div>
    `;


    const sections = [
      "winnipeg-news",
      "kerala-news",
      "markets-news"
    ];


    sections.forEach(
      id => {

        const element =
          document.getElementById(
            id
          );

        if (element) {
          element.innerHTML =
            message;
        }

      }
    );


    if (status) {

      status.textContent =
        "News update failed.";

    }

  }

}


// =========================================================
// INITIAL LOAD
// =========================================================

loadNews();


// =========================================================
// AUTO REFRESH — EVERY 5 MINUTES
// =========================================================

setInterval(
  loadNews,
  5 * 60 * 1000
);
