(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const n=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.injectHTML(),this.closeIcon=document.querySelector(".modal__close"),this.events()}var t,o;return t=n,(o=[{key:"events",value:function(){setTimeout((function(){document.querySelector(".modal").classList.add("modal--is-visible")}),4e3);var e=document.querySelector(".icon"),n=document.querySelector(".modal"),t=document.querySelector(".connect");e.addEventListener("click",(function(){n.classList.remove("modal--is-visible")})),t.addEventListener("click",(function(){n.classList.remove("modal--is-visible")})),document.addEventListener("keyup",(function(e){27==e.keyCode&&document.querySelector(".modal").classList.remove("modal--is-visible")}))}},{key:"injectHTML",value:function(){document.querySelector(".index-body").insertAdjacentHTML("beforebegin",'\n            <div class="modal">\n                <div class="advertisement-banner">\n                    <div class="advertisement-banner__title">\n                        Jane Doe\n                        <div class="advertisement-banner__close icon">X</div>\n                    </div>\n                    <div class="advertisement-banner__friend-request">\n                        1 new friend request\n                    </div>\n                    <div class="row--medium-6 row--padding">\n                        <div class="advertisement-banner__logo">\n                            <img src="./assets/images/friend-logo.jpg" alt="logo">\n                        </div>\n                        <div class="advertisement-banner__content">\n                            CEO at Mighty Schools.  Marketing and Advertising.  Seeking new software developers for great opportunities.\n                        </div>\n                    </div>\n                    <div class="advertisement-banner__connect connect">\n                    + Connect\n                    </div>\n                </div>\n            </div>\n        ')}}])&&e(t.prototype,o),n}();function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.showSelectorValue()}var n,o;return n=e,(o=[{key:"showSelectorValue",value:function(){var e=document.querySelector(".myForm"),n=(document.querySelector(".selector1"),document.getElementById("totalField")),t=document.myForm.style.value,o=document.myForm.tip.value,r='<p id="testClear" class="general-content--centered-w-margin general-content--larger testClear" onload="showSelectorValue">Total: $'.concat((t*o).toFixed(2),"</p>");n.insertAdjacentHTML("beforebegin",r),e.addEventListener("change",(function(e){var n=document.myForm.style.value,t=document.myForm.tip.value,o=(document.getElementById("totalField"),'<p id="testClear" class="general-content--centered-w-margin general-content--larger testClear" onload="showSelectorValue">Total: $'.concat((n*t).toFixed(2),"</p>")),r=document.getElementById("testClear");e.preventDefault(),r.innerHTML=o}))}}])&&t(n.prototype,o),e}();new n,new o})();