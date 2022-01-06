function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
  const aTag = document.getElementsByClassName("mobile-menu")[0];
  aTag.classList.add("anim-a");
}

function viewResumeHandler(resumebutton) {
  const url =
    "https://drive.google.com/file/d/17Y_nFNVfEdNeezX8W4ascx_nH23tln3x/view?usp=sharing";
  window.open(url, "__blank").focus();
}
