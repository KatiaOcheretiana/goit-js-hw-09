!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=null,a=!1;t.start.addEventListener("click",(function(){if(a)return;a=!0,t.start.disabled=!0,t.stop.disabled=!1,e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(e),a=!1,t.start.disabled=!1,t.stop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.a9a89851.js.map