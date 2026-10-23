const sidebartogglebtn = document.querySelectorAll(".sidebar-toggle");
const themetogglebtn = document.querySelector(".theme-toggle");
const sidebar = document.querySelector(".sidebar");
const savedtheme = localStorage.getItem("theme");
const systemPrefersdark = window.matchMedia("(prefers-color-scheme: dark )").matches;
const shouldusedarktheme = savedtheme === "dark" || (!savedtheme && systemPrefersdark);
const themeIcon = themetogglebtn.querySelector(".theme-icon")

const udpateThemeIcon = () => {
  const isdark = document.body.classList.contains("darktheme");
  themeIcon.textContent = sidebar.classList.contains("collapsed ") ? (isdark ? "light-mode" : "dark_mode ") : "dark_mode"
}
document.body.classList.toggle("dark-theme", shouldusedarktheme);
udpateThemeIcon();  
sidebartogglebtn.forEach(btn => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed")
    udpateThemeIcon();
  })
})
themetogglebtn.addEventListener("click", () => {
  const isdark = document.body.classList.toggle("dark-theme")
  localStorage.setItem("theme", isdark ? "dark " : "light")
  udpateThemeIcon();
})