!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){let t=io("/");$(document).ready(()=>{console.log("Document ready!!!"),$("#divChatting").hide(),t.on("server-send-dangki-thanhcong",e=>{let n="<div socketid='"+e.id+"' class='motUser'>"+e.username+"</div>";$("#danhSachUserOnline").append(n)}),t.on("server-send-dangki-thanhcong-onlyuser",()=>{$("#divChatting").show(1e3),$("#divDangKi").hide(1e3)}),t.on("server-send-dangki-empty",e=>{alert(e)}),t.on("server-send-dangki-thatbai",e=>{alert("Username: "+e+" da duoc dang ki.\nVui long dang ki username khac!!!")}),$("#btnDangki").click(()=>{t.emit("client-gui-username",$("#txtUser").val()),$("#txtUser").val("")})})}]);