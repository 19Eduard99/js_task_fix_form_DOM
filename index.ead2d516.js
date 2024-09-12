document.querySelectorAll(".field-text").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id);var l=e.name.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()});t.textContent=l,e.placeholder=l,e.before(t)});
//# sourceMappingURL=index.ead2d516.js.map
