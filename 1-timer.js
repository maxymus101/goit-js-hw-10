import"./assets/styles-l0sNRNKZ.js";import{f as g,i as b}from"./assets/vendor-DHwbnsIA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){i=o[0],i&&i<=new Date?(b.error({title:"Error",message:"Please choose a date in the future",position:"topRight",messageColor:"#FFFFFF"}),u.setAttribute("data-start","false")):i&&u.setAttribute("data-start","true")}};function a(o){return String(o).padStart(2,"0")}function S(o){const e=Math.floor(o/864e5),n=Math.floor(o%864e5/36e5),d=Math.floor(o%864e5%36e5/6e4),p=Math.floor(o%864e5%36e5%6e4/1e3);return{days:e,hours:n,minutes:d,seconds:p}}const l=document.querySelector("#datetime-picker"),u=document.querySelector("#start-btn"),f=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");g(l,C);let i;u.addEventListener("click",()=>{const o=new Date(i).getTime();l.setAttribute("disabled",!0),u.setAttribute("disabled",!0);const r=setInterval(()=>{const c=new Date().getTime(),s=o-c,{days:t,hours:e,minutes:n,seconds:d}=S(s);s<=0?(clearInterval(r),f.textContent="00",m.textContent="00",y.textContent="00",h.textContent="00"):(l.removeAttribute("disabled"),f.textContent=a(t),m.textContent=a(e),y.textContent=a(n),h.textContent=a(d))},1e3)});
//# sourceMappingURL=1-timer.js.map
