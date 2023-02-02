function CargarAbout() {
    const about = new XMLHttpRequest();
    about.onload = function() {
      document.getElementById("AboutHis").innerHTML = this.responseText;
      }
    about.open("GET", "../js/Ajax_Info.txt", true);
    about.send();
  }