function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return c.Date.now()};function m(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function j(e){return l=e,f=setTimeout(h,t),c?y(e):a}function w(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function h(){var e=g();if(w(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?v(n,i-(e-l)):n}(e))}function O(e){return f=void 0,m&&o?y(e):(o=r=void 0,a)}function T(){var e=g(),n=w(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),j=localStorage.getItem("feedback-form-state");var w;let h=null!==(w=JSON.parse(j))&&void 0!==w?w:{};const O=Object.keys(h);console.log(O),y.addEventListener("submit",(function(e){if(e.preventDefault(),!e.target.elements.email.value||!e.target.elements.message.value)return window.alert("Please, fill in all the necessary fields");e.currentTarget.reset(),console.log(h),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value;const t=JSON.stringify(h);localStorage.setItem("feedback-form-state",t)}),500)),function(){if(j)for(let e of O)y.elements[e].value=h[e]}();
//# sourceMappingURL=03-feedback.13b31eb0.js.map
