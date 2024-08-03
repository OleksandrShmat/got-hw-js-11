import{S as u,i as n}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const l=document.querySelector(".loader");function d(){l.style.display="block"}function p(){l.style.display="none"}function f(s){const r=`https://pixabay.com/api/?key=44758497-ea11318ae0823ef09cb8fbdb5&q=${encodeURIComponent(s)}&image_type=photo`;return fetch(r).then(t=>{if(!t.ok)throw new Error("Не вдалося виконати запит.");return t.json()})}const m=document.querySelector("#gallery");function h(s){const i=s.map(r=>`
      <div class="image-card">
            <a href="${r.largeImageURL}"><img src="${r.webformatURL}" width=360 height=200 alt="${r.tags}" /></a>
            <div class="image-text">
            <ul>
        <li><p>likes:</p><p>${r.likes}</p></li>
        <li><p>views:</p><p>${r.views}</p></li>
        <li><p>comments:</p><p>${r.comments}</p></li>
        <li><p>downloads:</p><p>${r.downloads}</p></li>
        </ul>
        </div>
      </div>
    `).join("");m.innerHTML=i,g.refresh()}const g=new u(".image-card a",{captionsData:"alt",captionDelay:250,navText:["&larr;","&rarr;"],closeText:"&times;"}),c=document.querySelector("#search-form");c.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(s.target).get("query");if(!r.trim())return n.show({position:"center",backgroundColor:"orange",message:"Введіть пошуковий запит."});d(),f(r.trim()).then(t=>{if(t.hits.length===0)return n.show({position:"topRight",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"});n.show({position:"topRight",backgroundColor:"green",message:`Found ${t.totalHits} results.`}),console.log(t.hits),h(t.hits),c.reset()}).catch(t=>{n.show({position:"topRight",backgroundColor:"red",message:"Error during the request. Please try again later."})}).finally(()=>p())});
//# sourceMappingURL=commonHelpers.js.map
