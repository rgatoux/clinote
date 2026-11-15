<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2775.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// Choix de la langue : #fr / #en dans l'adresse, sinon le dernier choix, sinon la langue du navigateur</p>
<p class="p1">(function () {</p>
<p class="p1"><span class="Apple-converted-space">  </span>var root = document.documentElement;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>function saved() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>try { return localStorage.getItem("clinote-lang"); } catch (e) { return null; }</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>function remember(lang) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>try { localStorage.setItem("clinote-lang", lang); } catch (e) { /* navigation privée */ }</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>function pick() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>var hash = (location.hash || "").replace("#", "");</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (hash === "fr" || hash === "en") return hash;</p>
<p class="p1"><span class="Apple-converted-space">    </span>var s = saved();</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (s === "fr" || s === "en") return s;</p>
<p class="p1"><span class="Apple-converted-space">    </span>return (navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>function apply(lang) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>root.setAttribute("data-lang", lang);</p>
<p class="p1"><span class="Apple-converted-space">    </span>root.setAttribute("lang", lang === "fr" ? "fr-CA" : "en-CA");</p>
<p class="p1"><span class="Apple-converted-space">    </span>var buttons = document.querySelectorAll(".lang-switch button");</p>
<p class="p1"><span class="Apple-converted-space">    </span>for (var i = 0; i &lt; buttons.length; i++) {</p>
<p class="p1"><span class="Apple-converted-space">      </span>buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-lang") === lang ? "true" : "false");</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>var title = root.getAttribute("data-title-" + lang);</p>
<p class="p1"><span class="Apple-converted-space">    </span>if (title) document.title = title;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>apply(pick());</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.addEventListener("DOMContentLoaded", function () {</p>
<p class="p1"><span class="Apple-converted-space">    </span>apply(root.getAttribute("data-lang"));</p>
<p class="p1"><span class="Apple-converted-space">    </span>var buttons = document.querySelectorAll(".lang-switch button");</p>
<p class="p1"><span class="Apple-converted-space">    </span>for (var i = 0; i &lt; buttons.length; i++) {</p>
<p class="p1"><span class="Apple-converted-space">      </span>buttons[i].addEventListener("click", function () {</p>
<p class="p1"><span class="Apple-converted-space">        </span>var lang = this.getAttribute("data-lang");</p>
<p class="p1"><span class="Apple-converted-space">        </span>remember(lang);</p>
<p class="p1"><span class="Apple-converted-space">        </span>history.replaceState(null, "", "#" + lang);</p>
<p class="p1"><span class="Apple-converted-space">        </span>apply(lang);</p>
<p class="p1"><span class="Apple-converted-space">      </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>window.addEventListener("hashchange", function () { apply(pick()); });</p>
<p class="p1">})();</p>
</body>
</html>
