(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=async()=>{i("Carregando...");const o=await(await fetch("https://api.quotable.io/random")).json();l(o.content)},l=async n=>{const r=await(await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${n}`)).json();r[0][0][0].length>80?a():i(r[0][0][0])},d=()=>{var n,o,r;(r=(o=(n=document.querySelector("#app"))==null?void 0:n.childNodes[1])==null?void 0:o.childNodes[5])==null||r.addEventListener("click",()=>{a()})},i=n=>{document.querySelector("#app").innerHTML=`
    <div>
    <img src="https://avatars.githubusercontent.com/u/107646613?v=4"/>
        <h1>${n}</h1>
        <p>Você pode gerar uma nova mensagem aqui!</p>
        <button class="button">Nova Mensagem</button>
    </div>
`,d()};i("Carregando...");a();
