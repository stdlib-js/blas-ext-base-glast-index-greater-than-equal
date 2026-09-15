"use strict";var v=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var q=v(function(I,x){
var o=require('@stdlib/blas-ext-base-gfirst-index-greater-than-equal/dist').ndarray;function f(r,a,e,n,u,i,s){var t;return r<=0?-1:(n+=(r-1)*e,s+=(r-1)*i,e*=-1,i*=-1,t=o(r,a,e,n,u,i,s),t<0?t:r-1-t)}x.exports=f
});var y=v(function(T,c){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=q();function h(r,a,e,n,u){return g(r,a,e,l(r,e),n,u,l(r,u))}c.exports=h
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=y(),E=q();p(d,"ndarray",E);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
