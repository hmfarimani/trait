// Ensure this script runs AFTER the HTML elements are loaded and 'publications' is defined.
// The script in publications.html already defines 'publications' globally.

function renderPublications(list) {
  const pubList = document.getElementById("pubList");
  pubList.innerHTML = ""; // Clear existing list
  list.forEach((pub, idx) => {
    const div = document.createElement("li");
    div.className = "publication-item";
    div.innerHTML = `
            <div class="publication-title">${pub.title}</div>
            <div class="publication-authors">${pub.author} </div>
            <div class="publication-venue"> ${pub.venue} (${pub.year})</div>
            <div class="items" ><a href="${pub.url}" target="_blank">[URL]</div>
        `;
    pubList.appendChild(div);
  });
}

// function toggleBibtex(index) {
//   const bib = document.getElementById(`bib-${index}`);
//   // Check if bib is not null before trying to access its style
//   if (bib) {
//     bib.style.display = bib.style.display === "block" ? "none" : "block";
//     const toggleBtn = bib.previousElementSibling; // Get the toggle button
//     if (toggleBtn) {
//       toggleBtn.textContent =
//         bib.style.display === "block" ? "[Hide BibTeX]" : "[Show BibTeX]";
//     }
//   }
// }

function sortPublications(option) {
  let sorted = [...publications]; // Use the global 'publications' array
  if (option === "year-desc") sorted.sort((a, b) => b.year - a.year);
  else if (option === "year-asc") sorted.sort((a, b) => a.year - b.year);
  else if (option === "author")
    sorted.sort((a, b) => {
      // Split authors by common delimiters and take the last name for sorting
      const lastNameA = a.author
        .split(/, | and /)
        .map((name) => name.trim().split(" ").pop())
        .join(", ");
      const lastNameB = b.author
        .split(/, | and /)
        .map((name) => name.trim().split(" ").pop())
        .join(", ");
      return lastNameA.localeCompare(lastNameB);
    });
  renderPublications(sorted);
}

function filterPublications(query) {
  const filtered = publications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(query.toLowerCase()) ||
      pub.author.toLowerCase().includes(query.toLowerCase()) ||
      pub.year.toString().includes(query) // Include year in search
  );
  renderPublications(filtered);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Only add listeners if the elements exist
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterPublications(e.target.value);
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortPublications(e.target.value);
    });
  }

  // Initial render when the page loads
  // Make sure 'publications' is available before calling renderPublications
  if (typeof publications !== "undefined" && publications.length > 0) {
    // Sort by year descending initially (newest first)
    sortPublications("year-desc");
  } else {
    console.warn("Publications data not found or empty.");
    document.getElementById("pubList").innerHTML =
      "<p>No publications to display.</p>";
  }
});
