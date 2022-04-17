function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  const aTag = document.getElementsByClassName("mobile-menu")[0];
  aTag.classList.add("anim-a");
}

function viewResumeHandler(resumebutton) {
  const url =
    "https://drive.google.com/file/d/1uYAY2YKPmb5yZ1u3eNYsglZcj2HC6shB/view?usp=sharing";
  window.open(url, "__blank").focus();
}
