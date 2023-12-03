import{a as L,i,S}from"./assets/vendor-f67ecabd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const v="40966348-f4e9f35e28aff5be5c3c45d6f",w="https://pixabay.com/api/";async function d(e,r=1){try{const o={key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40},a=await L.get(w,{params:o});if(a.status!==200)throw new Error("Error fetching images");return a.data}catch(o){console.error("Error in fetchImages:",o)}}const u={title:"Error",message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"},E={title:"Info",message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight"},M={title:"Success",position:"topRight"},l={form:document.querySelector("#search-form"),gallery:document.querySelector(".js-gallery"),btnLoadMore:document.querySelector(".js-btn")};l.form.addEventListener("submit",q);l.btnLoadMore.addEventListener("click",$);let c=null,f="",h;async function $(){c+=1;try{const{hits:e,totalHits:r}=await d(f,c);if(g(e),H(),h.refresh(),p(r))return}catch(e){i.error({...u,message:e.message})}}async function q(e){if(m(!0),l.gallery.innerHTML="",e.preventDefault(),f=e.currentTarget.elements.searchQuery.value,c=1,!f.trim()){i.error({...u,message:"Sorry, input is required to search for images"});return}try{const{hits:r,totalHits:o}=await d(f,c);if(r.length===0){i.error(u);return}if(i.success({...M,message:`Hooray! We found ${o} images.`}),g(r),h=new S(".gallery a").refresh(),p(o))return;m(!1)}catch(r){i.error({...u,message:r.message})}}function g(e){const r=e.map(({webformatURL:o,largeImageURL:a,tags:t,likes:s,views:n,comments:y,downloads:b})=>`
      <li class="item-photo">
        <div class="photo-card">
            <a href="${a}">
              <img src=${o} alt=${t} class="img" data-big-img=${a} />
            </a>
            <div class="stats">
                <p class="stats-item">
                  <b class="material-icons">Likes</b>
                  <span>${s}</span>
                </p>
                <p class="stats-item">
                    <b class="material-icons">Views</b>
                    ${n}
                </p>
                <p class="stats-item">
                    <b class="material-icons">Comments</b>
                    ${y}
                </p>
                <p class="stats-item">
                    <b class="material-icons">Downloads</b>
                    ${b}
                </p>
            </div>
        </div>
      </li>
`).join("");l.gallery.insertAdjacentHTML("beforeend",r)}function m(e){l.btnLoadMore.hidden=e}function p(e){const r=Math.ceil(e/40);if(c>=r)return i.info(E),m(!0),!0}function H(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
