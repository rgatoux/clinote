// Choix de la langue : #fr / #en dans l'adresse, sinon le dernier choix, sinon la langue du navigateur
(function () {
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem("clinote-lang"); } catch (e) { return null; }
  }
  function remember(lang) {
    try { localStorage.setItem("clinote-lang", lang); } catch (e) { /* navigation privée */ }
  }
  function pick() {
    var hash = (location.hash || "").replace("#", "");
    if (hash === "fr" || hash === "en") return hash;
    var s = saved();
    if (s === "fr" || s === "en") return s;
    return (navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  }
  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "fr" ? "fr-CA" : "en-CA");
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-lang") === lang ? "true" : "false");
    }
    var title = root.getAttribute("data-title-" + lang);
    if (title) document.title = title;
  }

  apply(pick());
  document.addEventListener("DOMContentLoaded", function () {
    apply(root.getAttribute("data-lang"));
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var lang = this.getAttribute("data-lang");
        remember(lang);
        history.replaceState(null, "", "#" + lang);
        apply(lang);
      });
    }
  });
  window.addEventListener("hashchange", function () { apply(pick()); });
})();
