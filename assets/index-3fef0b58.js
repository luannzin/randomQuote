(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const s=async()=>{i("Carregando...");const n=await(await fetch("https://api.quotable.io/random")).json();l(n.content)},l=async o=>{const r=await(await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${o}`)).json();r[0][0][0].length>80?s():i(r[0][0][0])},d=()=>{var o,n,r;(r=(n=(o=document.querySelector("#app"))==null?void 0:o.childNodes[1])==null?void 0:n.childNodes[7])==null||r.addEventListener("click",()=>{s()})},i=o=>{document.querySelector("#app").innerHTML=`
    <div>
    <a href="https://github.com/luannzin" target="_blank"><img src="https://avatars.githubusercontent.com/u/107646613?v=4"/></a>
        <h1>${o}</h1>
        <p>Você pode gerar uma nova mensagem aqui!</p>
        <button class="button">Nova Mensagem</button>
    </div>
`,d()};i("Carregando...");s();
