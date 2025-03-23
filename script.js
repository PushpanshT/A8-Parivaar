document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  nextBtn.addEventListener("click", function () {
    gallery.scrollBy({ left: 220, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", function () {
    gallery.scrollBy({ left: -220, behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    let targetElement = document.querySelector(
      this.getAttribute("data-target")
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelector("video").addEventListener("click", function () {
  window.location.href = "#home";
});

let startX;
const gallery = document.querySelector(".gallery");

gallery.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

gallery.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    document.querySelector(".next-btn").click();
  } else if (endX - startX > 50) {
    document.querySelector(".prev-btn").click();
  }
});

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document
  .querySelectorAll(".nav-link, #events img, .prev-btn, .next-btn, video")
  .forEach((el) => {
    el.addEventListener("mouseenter", () =>
      cursor.classList.add("cursor-hover")
    );
    el.addEventListener("mouseleave", () =>
      cursor.classList.remove("cursor-hover")
    );
  });

  document.addEventListener("DOMContentLoaded", () => {
    const trailContainer = document.createElement("div");
    trailContainer.classList.add("cursor-trail-container");
    document.body.appendChild(trailContainer);

    document.addEventListener("mousemove", (e) => {
        const trail = document.createElement("div");
        trail.classList.add("cursor-trail");
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;

        trailContainer.appendChild(trail);

        setTimeout(() => {
            trail.style.opacity = "0";
            setTimeout(() => trail.remove(), 500);
        }, 100);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  let views = localStorage.getItem("pageViews");

  if (views === null) {
    views = 1;
  } else {
    views = parseInt(views) + 1;
  }

  localStorage.setItem("pageViews", views);
  document.getElementById("viewsCounter").textContent = views;
});
