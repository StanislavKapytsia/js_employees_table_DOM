function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=document.querySelector("body"),r=document.createElement("form");r.className="new-employee-form",t(document.querySelector("thead").firstElementChild.children).forEach(function(e){var t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("select");if(t.textContent=e.textContent,"Office"!==e.textContent)n.setAttribute("name",e.textContent.toLowerCase()),"Age"===e.textContent||"Salary"===e.textContent?n.setAttribute("type","number"):n.setAttribute("type","text"),n.dataset.qa=e.textContent.toLowerCase(),t.append(n),r.append(t);else{o.setAttribute("name",e.textContent.toLowerCase()),o.dataset.qa=e.textContent.toLowerCase();var l=!0,a=!1,i=void 0;try{for(var s,c=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"][Symbol.iterator]();!(l=(s=c.next()).done);l=!0){var u=s.value,d=document.createElement("option");d.textContent=u,o.append(d)}}catch(e){a=!0,i=e}finally{try{l||null==c.return||c.return()}finally{if(a)throw i}}t.append(o),r.append(t)}});var o=document.createElement("button");o.setAttribute("type","submit"),o.textContent="Save to table",r.append(o),n.append(r);var l=document.createElement("message"),a=document.createElement("h2"),i=document.createElement("p");l.append(a),l.append(i),a.setAttribute("class","title"),l.classList.add("notification"),l.dataset.qa="notification",document.querySelector("body").append(l),l.style.display="none",r.addEventListener("submit",function(e){e.preventDefault();var n=t(document.querySelectorAll("input")),c=n[0],u=n[1],d=n[2],m=c.value.length<4,p=d.value<18||d.value>90,v=0===u.value.length;if(m||p||v)return l.style.display="block",l.classList.toggle("success",!1),l.classList.contains("error")||l.classList.add("error"),a.textContent="YOU SHALL NOT PASS",i.textContent="1.Name has less than 4 letters\n    2.Position must not be empty\n    3.Age(18 - 90)",o.setAttribute("disabled",""),setTimeout(function(){l.style.display="none",o.removeAttribute("disabled","")},2e3),!1;var f=document.querySelector("select"),y=+n[3].value;l.style.display="block",l.classList.toggle("success",!l.classList.contains("success")),l.classList.toggle("error",!1),a.textContent="WELL YOU  PASS",i.textContent="The hardest part is over",setTimeout(function(){l.style.display="none"},2e3);var b=s.insertRow(),C=b.insertCell(),x=b.insertCell(),g=b.insertCell(),L=b.insertCell(),A=b.insertCell();C.textContent=n[0].value,x.textContent=n[1].value,g.textContent=f.value,L.textContent=n[2].value,A.textContent="$"+y.toLocaleString("en-US"),r.reset()});var s=document.querySelector("tbody");s.onclick=function(e){var t=e.target.closest("tr"),n=s.querySelector(".active");if(null==n||n.classList.remove("active"),!t)return!1;t.classList.add("active")},document.querySelector("table").addEventListener("click",function(e){if("TH"!==e.target.tagName)return!1;var n=e.target,r=n.cellIndex,o=t(s.rows);return n.hasAttribute("data-order")?(o.sort(function(e,t){return 4===r?+e.cells[r].innerHTML.replaceAll(/[$,]/g,"")>+t.cells[r].innerHTML.replaceAll(/[$,]/g,"")?-1:1:e.cells[r].innerHTML>t.cells[r].innerHTML?-1:1}),n.removeAttribute("data-order")):(o.sort(function(e,t){return 4===r?+e.cells[r].innerHTML.replaceAll(/[$,]/g,"")>+t.cells[r].innerHTML.replaceAll(/[$,]/g,"")?1:-1:e.cells[r].innerHTML>t.cells[r].innerHTML?1:-1}),n.dataset.order="ABC"),s.append.apply(s,t(o)),!1});var c=document.createElement("input");s.ondblclick=function(e){var t,n=e.target.closest("td");if(!n)return!1;n.cellIndex>=3&&c.setAttribute("type","number"),c.classList.add("cell-input"),n.textContent.length>0&&(t=n.textContent),c.value="",n.textContent="",n.append(c),c.onblur=function(){if(c.value.length<2&&n.cellIndex<3)return n.textContent=t,alert("no, please, nooooo!!!! (name.length >= 2)"),!1;if(4===n.cellIndex){c.setAttribute("type","text");var e=+c.value;c.value="$"+e.toLocaleString("en-US")}n.textContent=c.value,c.remove()},c.addEventListener("keypress",function(e){if("Enter"===e.code){if(c.value.length<2&&n.cellIndex<3)return n.textContent=t,alert("no, please, nooooo!!!! (name.length >= 2)"),!1;if(4===n.cellIndex){c.setAttribute("type","text");var r=+c.value;c.value="$"+r.toLocaleString("en-US")}n.textContent=c.value,c.remove()}})};
//# sourceMappingURL=index.87a25931.js.map