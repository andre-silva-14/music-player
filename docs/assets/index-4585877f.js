(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const P="/music-player/assets/default-thumbnail-bf32e3a1.png",a=new Audio,d={title:"Unknown Title",artist:"Unknown Artist",album:"Unknown Album",thumbnail:P},t={initHeadingStart:document.querySelector(".init-title"),chooseMusicButton:document.querySelector(".choose-music-button"),chooseMusicInput:document.querySelector(".choose-music-input"),header:document.querySelector(".header"),subheader:document.querySelector(".subheader"),thumbnail:document.querySelector(".thumbnail"),actionsContainer:document.querySelector(".actions"),nextButton:document.querySelector(".next-button"),playPauseButton:document.querySelector(".play-pause-button"),previousButton:document.querySelector(".previous-button"),playPauseIcon:document.querySelector("#play-pause-icon"),progressBar:document.querySelector(".progress-bar"),timeManagementContainer:document.querySelector(".duration"),elapsed:document.querySelector(".elapsed"),remaining:document.querySelector(".remaining"),themeSwitch:document.querySelector("#theme-switch")};function I(e){t.chooseMusicInput.click()}function u(e){e.classList.add("hidden-elem")}function l(e){e.classList.remove("hidden-elem")}function k(e){return Object.keys(e).map(n=>e[n])}const m={default:"DEFAULT",player:"PLAYER"};function E(e){k(m).includes(e)||(e=m.default),e==m.default?(l(t.initHeadingStart),u(t.header),u(t.subheader),u(t.thumbnail),u(t.actionsContainer),u(t.progressBar),u(t.timeManagementContainer)):e==m.player&&(u(t.initHeadingStart),l(t.header),l(t.subheader),l(t.thumbnail),l(t.actionsContainer),l(t.progressBar),l(t.timeManagementContainer))}const o={currentMusic:null,playlist:[]};function B(e){return e.replace(/\.[^/.]+$/,"")}function T(e){console.error(e);const n=B(o.currentMusic.name)||d.title,r=d.artist;t.thumbnail.src=d.thumbnail,t.thumbnail.alt="",t.thumbnail.title="",t.header.textContent=n,t.header.title=n,t.subheader.textContent=r,t.subheader.title=r}function N(e){var S,M,x,L,C,v,w;const n=((S=e==null?void 0:e.tags)==null?void 0:S.artist)??d.artist,r=((M=e==null?void 0:e.tags)==null?void 0:M.title)??B(o.currentMusic.name)??d.title,c=((x=e==null?void 0:e.tags)==null?void 0:x.album)??d.album,i=((C=(L=e==null?void 0:e.tags)==null?void 0:L.picture)==null?void 0:C.data)??[],s=((w=(v=e==null?void 0:e.tags)==null?void 0:v.picture)==null?void 0:w.format)??"",f=i.reduce((h,g)=>`${h}${String.fromCharCode(g)}`,""),q=(h,g)=>h===""?d.thumbnail:"data:"+h+";base64,"+window.btoa(g);t.thumbnail.src=q(s,f),t.thumbnail.alt=c,t.thumbnail.title=c,t.header.textContent=r,t.header.title=r,t.subheader.textContent=n,t.subheader.title=n}async function y(e){o.currentMusic=e;const n=await o.currentMusic.arrayBuffer(),r=new Blob([n],{type:o.currentMusic.type});jsmediatags.read(r,{onSuccess:N,onError:T}),a.src=window.URL.createObjectURL(r)}async function U(e){var r;const n=((r=e==null?void 0:e.target)==null?void 0:r.files)??[];if(!(n!=null&&n.length)){E(m.default);return}E(m.player),o.playlist=Array.from(n),await y(o.playlist[0])}function p(e){if(isNaN(e))return"00:00";const n=String(Math.floor(e/60)).padStart(2,"0"),r=String(Math.floor(e%60)).padStart(2,"0");return`${n}:${r}`}function A(e){t.progressBar.value=0,t.progressBar.max=a.duration,t.elapsed.textContent=p(0),t.remaining.textContent=p(Math.floor(a.duration))}function b(e){const n=o.playlist.indexOf(o.currentMusic),r=o.playlist.length-1;return e==="previous"?n<=0?r:n-1:e==="next"?n>=r?0:n+1:n}async function O(e){if(!o.currentMusic)return;const n=b("next"),r=o.playlist[n];await y(r),a.play()}function D(e){alert("An error occurred.")}async function R(e){if(!o.currentMusic)return;const n=b("next"),r=o.playlist[n],c=!a.paused;await y(r),c&&a.play()}function $(e){if(!o.currentMusic)return;const n=t.playPauseButton.querySelector("svg");a.paused?(a.play(),n.classList.add("fa-pause"),n.classList.remove("fa-play")):(a.pause(),n.classList.add("fa-play"),n.classList.remove("fa-pause"))}async function j(e){if(!o.currentMusic)return;const n=b("previous"),r=o.playlist[n],c=!a.paused;await y(r),c&&a.play()}function F(e){var n;a.currentTime=((n=e==null?void 0:e.target)==null?void 0:n.value)??0}function H(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(t.themeSwitch.checked=!0)}function K(e){if(isNaN(a.currentTime)||isNaN(a.duration))return;const n=Math.floor(a.currentTime),r=Math.floor(a.duration)-n;t.progressBar.value=a.currentTime,t.elapsed.textContent=p(n),t.remaining.textContent=p(r)}H();a.addEventListener("durationchange",A);a.addEventListener("ended",O);a.addEventListener("error",D);a.addEventListener("timeupdate",K);t.chooseMusicButton.addEventListener("click",I);t.chooseMusicInput.addEventListener("input",U);t.nextButton.addEventListener("click",R);t.playPauseButton.addEventListener("click",$);t.previousButton.addEventListener("click",j);t.progressBar.addEventListener("input",F);
