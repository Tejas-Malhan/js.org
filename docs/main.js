(()=>{var o=window.location.search.slice(1).replace(/\.js$/,"");(function(e){o&&(e=document.getElementById(e))&&(e.style="display:block")})("redir");(function(e){if(o&&(e=document.getElementById(e))){let t=o;e.innerHTML=t,setTimeout(function(){window.location.href="https://js.org/?"+t},5e3)}})("sd");(function(e){window.onload=()=>{if(e=document.getElementById(e)){let t=document.getElementById("_carbonads_projs");t||e.classList.add("blocked"),fetch(`/count/${t?"cad":"nocad"}`)}}})("cad");(function(e){if(!(e=document.getElementById(e)))return;let t=document.getElementsByTagName("head")[0],i="cb_"+Math.random().toString(36).substring(2,16),r=document.createElement("script");window[i]=c=>{e.innerHTML=((c.data.watchers||0)/1e3).toFixed(1)+"K"},r.src="https://api.github.com/repos/js-org/js.org?callback="+i,t.insertBefore(r,t.firstChild)})("ghstars");(function(e,t){if(!(e=document.getElementById(e)))return;o&&t.unshift(o.substring(0,8));let i=1e3/4,r=1,c=.2,u=3e3,s=1e3/16,h=1,f=.2,g=500,n=e.innerHTML,a=n.length,m=-1,l=()=>{a-- >0?(e.className="active",e.innerHTML=n.slice(0,a),setTimeout(l,s+s*a/n.length*h+s*f*Math.random())):(n=""+t[m=(m+1)%t.length],setTimeout(d,g))},d=()=>{a++<n.length?(e.innerHTML=n.slice(0,a),setTimeout(d,i+i*-a/n.length*r+i*c*Math.random())):(e.className="",setTimeout(l,u))};d()})("hermes",["your","domain","4free","user","learn","munich"]);})();