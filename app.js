const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    const target = tab.dataset.tab;

    tabs.forEach(t =>
      t.classList.remove("active")
    );

    panels.forEach(panel =>
      panel.classList.remove("active")
    );

    tab.classList.add("active");

    document
      .getElementById(target)
      .classList.add("active");
  });

});


function escapeHtml(value) {

  const div = document.createElement("div");

  div.textContent = value || "";

  return div.innerHTML;
}


function formatDate(value) {

  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
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


function renderStories(
  elementId,
  stories
) {

  const container =
    document.getElementById(elementId);

  if (!stories || !stories.length) {

    container.innerHTML =
      '<div class="empty">No stories available.</div>';

    return;
  }


  container.innerHTML =
    stories.map(story => {

      const title =
        escapeHtml(story.title);

      const source =
        escapeHtml(story.source);

      const link =
        encodeURI(story.link || "#");

      const date =
        formatDate(story.date);

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

            <span>
              ${date}
            </span>

          </div>

        </article>
      `;

    }).join("");
}


async function loadNews() {

  const status =
    document.getElementById("status");

  status.textContent =
    "Updating news...";


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


    renderStories(
      "winnipeg-news",
      data.winnipeg
    );

    renderStories(
      "kerala-news",
      data.kerala
    );

    renderStories(
      "india-news",
      data.india
    );

    renderStories(
      "usa-news",
      data.usa
    );

    renderStories(
      "reuters-news",
      data.reuters
    );


    const updated =
      data.updated
        ? formatDate(data.updated)
        : "just now";


    status.textContent =
      `Last updated: ${updated}`;


  } catch (error) {

    console.error(error);

    const message =
      `
      <div class="error">
        Unable to load news right now.
        Please try again shortly.
      </div>
      `;

    document.getElementById(
      "winnipeg-news"
    ).innerHTML = message;

    document.getElementById(
      "kerala-news"
    ).innerHTML = message;

    document.getElementById(
      "india-news"
    ).innerHTML = message;

    document.getElementById(
      "usa-news"
    ).innerHTML = message;

    document.getElementById(
      "reuters-news"
    ).innerHTML = message;


    status.textContent =
      "News update failed.";
  }
}


// Initial load
loadNews();


// Refresh every 5 minutes
setInterval(
  loadNews,
  5 * 60 * 1000
);
