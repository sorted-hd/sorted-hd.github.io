function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  const aTag = document.getElementsByClassName("mobile-menu")[0];
  aTag.classList.add("anim-a");
}
