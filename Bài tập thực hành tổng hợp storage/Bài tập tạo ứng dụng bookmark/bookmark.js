document.addEventListener("DOMContentLoaded", () => {
  const showModalButton = document.getElementById("show-modal");
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close-button");
  const bookmarkForm = document.getElementById("bookmark-form");
  const websiteNameInput = document.getElementById("website-name");
  const websiteUrlInput = document.getElementById("website-url");
  const bookmarksList = document.getElementById("bookmarks-list");

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  function saveBookmarks() {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  function renderBookmarks() {
    bookmarksList.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
      const bookmarkElement = document.createElement("div");
      bookmarkElement.className = "bookmark";
      bookmarkElement.innerHTML = `
                <span>${bookmark.name}</span>
                <span><a href="${bookmark.url}" target="_blank">${bookmark.url}</a></span>
                <button data-index="${index}">&times;</button>
            `;
      bookmarksList.appendChild(bookmarkElement);
    });
  }

  function addBookmark(event) {
    event.preventDefault();
    const name = websiteNameInput.value.trim();
    const url = websiteUrlInput.value.trim();
    if (name && url) {
      bookmarks.push({ name, url });
      saveBookmarks();
      renderBookmarks();
      bookmarkForm.reset();
      modal.style.display = "none";
    }
  }

  function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    saveBookmarks();
    renderBookmarks();
  }

  showModalButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  bookmarkForm.addEventListener("submit", addBookmark);

  bookmarksList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const index = event.target.getAttribute("data-index");
      deleteBookmark(index);
    }
  });

  renderBookmarks();
});
