(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xo="175",op=0,nl=1,lp=2,Mc=1,cp=2,yi=3,Vi=0,It=1,wi=2,Oi=0,Un=1,sl=2,rl=3,al=4,hp=5,rn=100,dp=101,up=102,pp=103,fp=104,mp=200,gp=201,vp=202,_p=203,ya=204,wa=205,yp=206,wp=207,xp=208,Ep=209,Mp=210,Sp=211,bp=212,Tp=213,Ap=214,xa=0,Ea=1,Ma=2,On=3,Sa=4,ba=5,Ta=6,Aa=7,Sc=0,Cp=1,Rp=2,Fi=0,bc=1,Pp=2,Lp=3,Dp=4,Ip=5,Up=6,Np=7,Tc=300,Fn=301,zn=302,Ca=303,Ra=304,Rr=306,Pa=1e3,on=1001,La=1002,ni=1003,kp=1004,ks=1005,Bt=1006,Vr=1007,ki=1008,bi=1009,Ac=1010,Cc=1011,fs=1012,Eo=1013,cn=1014,xi=1015,Es=1016,Mo=1017,So=1018,ms=1020,Rc=35902,Pc=1021,Lc=1022,ii=1023,Dc=1024,Ic=1025,gs=1026,vs=1027,Uc=1028,bo=1029,Nc=1030,To=1031,Ao=1033,ar=33776,or=33777,lr=33778,cr=33779,Da=35840,Ia=35841,Ua=35842,Na=35843,ka=36196,Oa=37492,Fa=37496,za=37808,Ba=37809,Ha=37810,Va=37811,Ga=37812,Wa=37813,Xa=37814,ja=37815,Ka=37816,Ya=37817,qa=37818,$a=37819,Za=37820,Ja=37821,hr=36492,Qa=36494,eo=36495,kc=36283,to=36284,io=36285,no=36286,Op=3200,Fp=3201,zp=0,Bp=1,Ni="",Kt="srgb",hn="srgb-linear",gr="linear",Qe="srgb",pn=7680,ol=519,Hp=512,Vp=513,Gp=514,Oc=515,Wp=516,Xp=517,jp=518,Kp=519,ll=35044,cl="300 es",Ei=2e3,vr=2001;class Hn{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(i)===-1&&n[e].push(i)}hasEventListener(e,i){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(i)!==-1}removeEventListener(e,i){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(i);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const n=i[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const es=Math.PI/180,_s=180/Math.PI;function Vn(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[t&255]+St[t>>8&255]+St[t>>16&255]+St[t>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[i&63|128]+St[i>>8&255]+"-"+St[i>>16&255]+St[i>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function ke(t,e,i){return Math.max(e,Math.min(i,t))}function Co(t,e){return(t%e+e)%e}function Yp(t,e,i,n,s){return n+(t-e)*(s-n)/(i-e)}function qp(t,e,i){return t!==e?(i-t)/(e-t):0}function ts(t,e,i){return(1-i)*t+i*e}function $p(t,e,i,n){return ts(t,e,1-Math.exp(-i*n))}function Zp(t,e=1){return e-Math.abs(Co(t,e*2)-e)}function Jp(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*(3-2*t))}function Qp(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*t*(t*(t*6-15)+10))}function ef(t,e){return t+Math.floor(Math.random()*(e-t+1))}function tf(t,e){return t+Math.random()*(e-t)}function nf(t){return t*(.5-Math.random())}function sf(t){t!==void 0&&(hl=t);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rf(t){return t*es}function af(t){return t*_s}function of(t){return(t&t-1)===0&&t!==0}function lf(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function cf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function hf(t,e,i,n,s){const r=Math.cos,a=Math.sin,o=r(i/2),l=a(i/2),h=r((e+n)/2),d=a((e+n)/2),p=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":t.set(o*d,l*p,l*f,o*h);break;case"YZY":t.set(l*f,o*d,l*p,o*h);break;case"ZXZ":t.set(l*p,l*f,o*d,o*h);break;case"XZX":t.set(o*d,l*g,l*m,o*h);break;case"YXY":t.set(l*m,o*d,l*g,o*h);break;case"ZYZ":t.set(l*g,l*m,o*d,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ct(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Oe={DEG2RAD:es,RAD2DEG:_s,generateUUID:Vn,clamp:ke,euclideanModulo:Co,mapLinear:Yp,inverseLerp:qp,lerp:ts,damp:$p,pingpong:Zp,smoothstep:Jp,smootherstep:Qp,randInt:ef,randFloat:tf,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:af,isPowerOfTwo:of,ceilPowerOfTwo:lf,floorPowerOfTwo:cf,setQuaternionFromProperEuler:hf,normalize:Ct,denormalize:Rn};class Ke{constructor(e=0,i=0){Ke.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,n=this.y,s=e.elements;return this.x=s[0]*i+s[3]*n+s[6],this.y=s[1]*i+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ke(this.x,e.x,i.x),this.y=ke(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ke(this.x,e,i),this.y=ke(this.y,e,i),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(e)/i;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,n=this.y-e.y;return i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const n=Math.cos(i),s=Math.sin(i),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,i,n,s,r,a,o,l,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,n,s,r,a,o,l,h)}set(e,i,n,s,r,a,o,l,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=i,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(e,i,n){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const n=e.elements,s=i.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],p=n[7],f=n[2],m=n[5],g=n[8],_=s[0],u=s[3],c=s[6],b=s[1],S=s[4],x=s[7],L=s[2],C=s[5],A=s[8];return r[0]=a*_+o*b+l*L,r[3]=a*u+o*S+l*C,r[6]=a*c+o*x+l*A,r[1]=h*_+d*b+p*L,r[4]=h*u+d*S+p*C,r[7]=h*c+d*x+p*A,r[2]=f*_+m*b+g*L,r[5]=f*u+m*S+g*C,r[8]=f*c+m*x+g*A,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8];return i*a*d-i*o*h-n*r*d+n*o*l+s*r*h-s*a*l}invert(){const e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],p=d*a-o*h,f=o*l-d*r,m=h*r-a*l,g=i*p+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=p*_,e[1]=(s*h-d*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(d*i-s*l)*_,e[5]=(s*r-o*i)*_,e[6]=m*_,e[7]=(n*l-h*i)*_,e[8]=(a*i-n*r)*_,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+i,0,0,1),this}scale(e,i){return this.premultiply(Gr.makeScale(e,i)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,i){return this.premultiply(Gr.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,n=e.elements;for(let s=0;s<9;s++)if(i[s]!==n[s])return!1;return!0}fromArray(e,i=0){for(let n=0;n<9;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){const n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new De;function Fc(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _r(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function df(){const t=_r("canvas");return t.style.display="block",t}const dl={};function dr(t){t in dl||(dl[t]=!0,console.warn(t))}function uf(t,e,i){return new Promise(function(n,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,i);break;default:n()}}setTimeout(r,i)})}function pf(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ff(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ul=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mf(){const t={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?gr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[hn]:{primaries:e,whitePoint:n,transfer:gr,toXYZ:ul,fromXYZ:pl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:ul,fromXYZ:pl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),t}const We=mf();function Mi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Nn(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fn;class gf{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fn===void 0&&(fn=_r("canvas")),fn.width=e.width,fn.height=e.height;const s=fn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fn}return n.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=_r("canvas");i.width=e.width,i.height=e.height;const n=i.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),i}else if(e.data){const i=e.data.slice(0);for(let n=0;n<i.length;n++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[n]=Math.floor(Mi(i[n]/255)*255):i[n]=Mi(i[n]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vf=0;class Ro{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);n.url=r}return i||(e.images[this.uuid]=n),n}}function Wr(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _f=0;class Et extends Hn{constructor(e=Et.DEFAULT_IMAGE,i=Et.DEFAULT_MAPPING,n=on,s=on,r=Bt,a=ki,o=ii,l=bi,h=Et.DEFAULT_ANISOTROPY,d=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Vn(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Tc;Et.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,i=0,n=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=i,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,n,s){return this.x=e,this.y=i,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*i+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*i+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*i+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*i+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,n,s,r;const l=e.elements,h=l[0],d=l[4],p=l[8],f=l[1],m=l[5],g=l[9],_=l[2],u=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-_)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+_)<.1&&Math.abs(g+u)<.1&&Math.abs(h+m+c-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const S=(h+1)/2,x=(m+1)/2,L=(c+1)/2,C=(d+f)/4,A=(p+_)/4,N=(g+u)/4;return S>x&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=A/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=N/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=N/r),this.set(n,s,r,i),this}let b=Math.sqrt((u-g)*(u-g)+(p-_)*(p-_)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(u-g)/b,this.y=(p-_)/b,this.z=(f-d)/b,this.w=Math.acos((h+m+c-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ke(this.x,e.x,i.x),this.y=ke(this.y,e.y,i.y),this.z=ke(this.z,e.z,i.z),this.w=ke(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ke(this.x,e,i),this.y=ke(this.y,e,i),this.z=ke(this.z,e,i),this.w=ke(this.w,e,i),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this.w=e.w+(i.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yf extends Hn{constructor(e=1,i=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new ht(0,0,e,i),this.scissorTest=!1,this.viewport=new ht(0,0,e,i);const s={width:e,height:i,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Et(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,n=1){if(this.width!==e||this.height!==i||this.depth!==n){this.width=e,this.height=i,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=i,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const s=Object.assign({},e.textures[i].image);this.textures[i].source=new Ro(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends yf{constructor(e=1,i=1,n={}){super(e,i,n),this.isWebGLRenderTarget=!0}}class zc extends Et{constructor(e=null,i=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wf extends Et{constructor(e=null,i=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(e=0,i=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=n,this._w=s}static slerpFlat(e,i,n,s,r,a,o){let l=n[s+0],h=n[s+1],d=n[s+2],p=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[i+0]=l,e[i+1]=h,e[i+2]=d,e[i+3]=p;return}if(o===1){e[i+0]=f,e[i+1]=m,e[i+2]=g,e[i+3]=_;return}if(p!==_||l!==f||h!==m||d!==g){let u=1-o;const c=l*f+h*m+d*g+p*_,b=c>=0?1:-1,S=1-c*c;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,c*b);u=Math.sin(u*C)/L,o=Math.sin(o*C)/L}const x=o*b;if(l=l*u+f*x,h=h*u+m*x,d=d*u+g*x,p=p*u+_*x,u===1-o){const L=1/Math.sqrt(l*l+h*h+d*d+p*p);l*=L,h*=L,d*=L,p*=L}}e[i]=l,e[i+1]=h,e[i+2]=d,e[i+3]=p}static multiplyQuaternionsFlat(e,i,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],d=n[s+3],p=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[i]=o*g+d*p+l*m-h*f,e[i+1]=l*g+d*f+h*p-o*m,e[i+2]=h*g+d*m+o*f-l*p,e[i+3]=d*g-o*p-l*f-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,n,s){return this._x=e,this._y=i,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(s/2),p=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*d*p+h*m*g,this._y=h*m*p-f*d*g,this._z=h*d*g+f*m*p,this._w=h*d*p-f*m*g;break;case"YXZ":this._x=f*d*p+h*m*g,this._y=h*m*p-f*d*g,this._z=h*d*g-f*m*p,this._w=h*d*p+f*m*g;break;case"ZXY":this._x=f*d*p-h*m*g,this._y=h*m*p+f*d*g,this._z=h*d*g+f*m*p,this._w=h*d*p-f*m*g;break;case"ZYX":this._x=f*d*p-h*m*g,this._y=h*m*p+f*d*g,this._z=h*d*g-f*m*p,this._w=h*d*p+f*m*g;break;case"YZX":this._x=f*d*p+h*m*g,this._y=h*m*p+f*d*g,this._z=h*d*g-f*m*p,this._w=h*d*p-f*m*g;break;case"XZY":this._x=f*d*p-h*m*g,this._y=h*m*p-f*d*g,this._z=h*d*g+f*m*p,this._w=h*d*p+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const n=i/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,n=i[0],s=i[4],r=i[8],a=i[1],o=i[5],l=i[9],h=i[2],d=i[6],p=i[10],f=n+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let n=e.dot(i)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,i){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,i/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const n=e._x,s=e._y,r=e._z,a=e._w,o=i._x,l=i._y,h=i._z,d=i._w;return this._x=n*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-s*o,this._w=a*d-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-i;return this._w=m*a+i*this._w,this._x=m*n+i*this._x,this._y=m*s+i*this._y,this._z=m*r+i*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,o),p=Math.sin((1-i)*d)/h,f=Math.sin(i*d)/h;return this._w=a*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,i,n){return this.copy(e).slerp(i,n)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(i),r*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,i=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=i,this.z=n}set(e,i,n){return n===void 0&&(n=this.z),this.x=e,this.y=i,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(fl.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(fl.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*i+r[3]*n+r[6]*s,this.y=r[1]*i+r[4]*n+r[7]*s,this.z=r[2]*i+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*i+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*i+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*i+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*i+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const i=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*n),d=2*(o*i-r*s),p=2*(r*n-a*i);return this.x=i+l*h+a*p-o*d,this.y=n+l*d+o*h-r*p,this.z=s+l*p+r*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*i+r[4]*n+r[8]*s,this.y=r[1]*i+r[5]*n+r[9]*s,this.z=r[2]*i+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ke(this.x,e.x,i.x),this.y=ke(this.y,e.y,i.y),this.z=ke(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ke(this.x,e,i),this.y=ke(this.y,e,i),this.z=ke(this.z,e,i),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const n=e.x,s=e.y,r=e.z,a=i.x,o=i.y,l=i.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const n=e.dot(this)/i;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(e)/i;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return i*i+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,n){const s=Math.sin(i)*e;return this.x=s*Math.sin(n),this.y=Math.cos(i)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,n){return this.x=e*Math.sin(i),this.y=n,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=n,this.z=s,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(e),this.y=i,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new U,fl=new Xi;class Gn{constructor(e=new U(1/0,1/0,1/0),i=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i+=3)this.expandByPoint(Zt.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,n=e.count;i<n;i++)this.expandByPoint(Zt.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const n=Zt.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(i===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(r,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,n;return e.normal.x>0?(i=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),i<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jn),Fs.subVectors(this.max,jn),mn.subVectors(e.a,jn),gn.subVectors(e.b,jn),vn.subVectors(e.c,jn),Ci.subVectors(gn,mn),Ri.subVectors(vn,gn),$i.subVectors(mn,vn);let i=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-$i.z,$i.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,$i.z,0,-$i.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-$i.y,$i.x,0];return!jr(i,mn,gn,vn,Fs)||(i=[1,0,0,0,1,0,0,0,1],!jr(i,mn,gn,vn,Fs))?!1:(zs.crossVectors(Ci,Ri),i=[zs.x,zs.y,zs.z],jr(i,mn,gn,vn,Fs))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new U,new U,new U,new U,new U,new U,new U,new U],Zt=new U,Os=new Gn,mn=new U,gn=new U,vn=new U,Ci=new U,Ri=new U,$i=new U,jn=new U,Fs=new U,zs=new U,Zi=new U;function jr(t,e,i,n,s){for(let r=0,a=t.length-3;r<=a;r+=3){Zi.fromArray(t,r);const o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),h=i.dot(Zi),d=n.dot(Zi);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const xf=new Gn,Kn=new U,Kr=new U;class Po{constructor(e=new U,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const n=this.center;i!==void 0?n.copy(i):xf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const n=this.center.distanceToSquared(e);return i.copy(e),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kn.subVectors(e,this.center);const i=Kn.lengthSq();if(i>this.radius*this.radius){const n=Math.sqrt(i),s=(n-this.radius)*.5;this.center.addScaledVector(Kn,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kn.copy(e.center).add(Kr)),this.expandByPoint(Kn.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new U,Yr=new U,Bs=new U,Pi=new U,qr=new U,Hs=new U,$r=new U;class Bc{constructor(e=new U,i=new U(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const n=i.dot(this.direction);return n<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=mi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,i),mi.distanceToSquared(e))}distanceSqToSegment(e,i,n,s){Yr.copy(e).add(i).multiplyScalar(.5),Bs.copy(i).sub(e).normalize(),Pi.copy(this.origin).sub(Yr);const r=e.distanceTo(i)*.5,a=-this.direction.dot(Bs),o=Pi.dot(this.direction),l=-Pi.dot(Bs),h=Pi.lengthSq(),d=Math.abs(1-a*a);let p,f,m,g;if(d>0)if(p=a*l-o,f=a*o-l,g=r*d,p>=0)if(f>=-g)if(f<=g){const _=1/d;p*=_,f*=_,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+h}else f=r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+h;else f=-r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+h;else f<=-g?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+h):f<=g?(p=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+h):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+f*(f+2*l)+h);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Yr).addScaledVector(Bs,f),m}intersectSphere(e,i){mi.subVectors(e.center,this.origin);const n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,i):this.at(o,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/i;return n>=0?n:null}intersectPlane(e,i){const n=this.distanceToPlane(e);return n===null?null:this.at(n,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let n,s,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,i)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,i,n,s,r){qr.subVectors(i,e),Hs.subVectors(n,e),$r.crossVectors(qr,Hs);let a=this.direction.dot($r),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(Hs.crossVectors(Pi,Hs));if(l<0)return null;const h=o*this.direction.dot(qr.cross(Pi));if(h<0||l+h>a)return null;const d=-o*Pi.dot($r);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,i,n,s,r,a,o,l,h,d,p,f,m,g,_,u){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,n,s,r,a,o,l,h,d,p,f,m,g,_,u)}set(e,i,n,s,r,a,o,l,h,d,p,f,m,g,_,u){const c=this.elements;return c[0]=e,c[4]=i,c[8]=n,c[12]=s,c[1]=r,c[5]=a,c[9]=o,c[13]=l,c[2]=h,c[6]=d,c[10]=p,c[14]=f,c[3]=m,c[7]=g,c[11]=_,c[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(e){const i=this.elements,n=e.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,n){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,i,n){return this.set(e.x,i.x,n.x,0,e.y,i.y,n.y,0,e.z,i.z,n.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,n=e.elements,s=1/_n.setFromMatrixColumn(e,0).length(),r=1/_n.setFromMatrixColumn(e,1).length(),a=1/_n.setFromMatrixColumn(e,2).length();return i[0]=n[0]*s,i[1]=n[1]*s,i[2]=n[2]*s,i[3]=0,i[4]=n[4]*r,i[5]=n[5]*r,i[6]=n[6]*r,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const f=a*d,m=a*p,g=o*d,_=o*p;i[0]=l*d,i[4]=-l*p,i[8]=h,i[1]=m+g*h,i[5]=f-_*h,i[9]=-o*l,i[2]=_-f*h,i[6]=g+m*h,i[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*p,g=h*d,_=h*p;i[0]=f+_*o,i[4]=g*o-m,i[8]=a*h,i[1]=a*p,i[5]=a*d,i[9]=-o,i[2]=m*o-g,i[6]=_+f*o,i[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*p,g=h*d,_=h*p;i[0]=f-_*o,i[4]=-a*p,i[8]=g+m*o,i[1]=m+g*o,i[5]=a*d,i[9]=_-f*o,i[2]=-a*h,i[6]=o,i[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*p,g=o*d,_=o*p;i[0]=l*d,i[4]=g*h-m,i[8]=f*h+_,i[1]=l*p,i[5]=_*h+f,i[9]=m*h-g,i[2]=-h,i[6]=o*l,i[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*h,g=o*l,_=o*h;i[0]=l*d,i[4]=_-f*p,i[8]=g*p+m,i[1]=p,i[5]=a*d,i[9]=-o*d,i[2]=-h*d,i[6]=m*p+g,i[10]=f-_*p}else if(e.order==="XZY"){const f=a*l,m=a*h,g=o*l,_=o*h;i[0]=l*d,i[4]=-p,i[8]=h*d,i[1]=f*p+_,i[5]=a*d,i[9]=m*p-g,i[2]=g*p-m,i[6]=o*d,i[10]=_*p+f}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,Mf)}lookAt(e,i,n){const s=this.elements;return kt.subVectors(e,i),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Li.crossVectors(n,kt),Li.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Li.crossVectors(n,kt)),Li.normalize(),Vs.crossVectors(kt,Li),s[0]=Li.x,s[4]=Vs.x,s[8]=kt.x,s[1]=Li.y,s[5]=Vs.y,s[9]=kt.y,s[2]=Li.z,s[6]=Vs.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const n=e.elements,s=i.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],p=n[5],f=n[9],m=n[13],g=n[2],_=n[6],u=n[10],c=n[14],b=n[3],S=n[7],x=n[11],L=n[15],C=s[0],A=s[4],N=s[8],E=s[12],w=s[1],R=s[5],G=s[9],z=s[13],Y=s[2],q=s[6],X=s[10],Z=s[14],H=s[3],ne=s[7],ue=s[11],xe=s[15];return r[0]=a*C+o*w+l*Y+h*H,r[4]=a*A+o*R+l*q+h*ne,r[8]=a*N+o*G+l*X+h*ue,r[12]=a*E+o*z+l*Z+h*xe,r[1]=d*C+p*w+f*Y+m*H,r[5]=d*A+p*R+f*q+m*ne,r[9]=d*N+p*G+f*X+m*ue,r[13]=d*E+p*z+f*Z+m*xe,r[2]=g*C+_*w+u*Y+c*H,r[6]=g*A+_*R+u*q+c*ne,r[10]=g*N+_*G+u*X+c*ue,r[14]=g*E+_*z+u*Z+c*xe,r[3]=b*C+S*w+x*Y+L*H,r[7]=b*A+S*R+x*q+L*ne,r[11]=b*N+S*G+x*X+L*ue,r[15]=b*E+S*z+x*Z+L*xe,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],d=e[2],p=e[6],f=e[10],m=e[14],g=e[3],_=e[7],u=e[11],c=e[15];return g*(+r*l*p-s*h*p-r*o*f+n*h*f+s*o*m-n*l*m)+_*(+i*l*m-i*h*f+r*a*f-s*a*m+s*h*d-r*l*d)+u*(+i*h*p-i*o*m-r*a*p+n*a*m+r*o*d-n*h*d)+c*(-s*o*d-i*l*p+i*o*f+s*a*p-n*a*f+n*l*d)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=i,s[14]=n),this}invert(){const e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],p=e[9],f=e[10],m=e[11],g=e[12],_=e[13],u=e[14],c=e[15],b=p*u*h-_*f*h+_*l*m-o*u*m-p*l*c+o*f*c,S=g*f*h-d*u*h-g*l*m+a*u*m+d*l*c-a*f*c,x=d*_*h-g*p*h+g*o*m-a*_*m-d*o*c+a*p*c,L=g*p*l-d*_*l-g*o*f+a*_*f+d*o*u-a*p*u,C=i*b+n*S+s*x+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(_*f*r-p*u*r-_*s*m+n*u*m+p*s*c-n*f*c)*A,e[2]=(o*u*r-_*l*r+_*s*h-n*u*h-o*s*c+n*l*c)*A,e[3]=(p*l*r-o*f*r-p*s*h+n*f*h+o*s*m-n*l*m)*A,e[4]=S*A,e[5]=(d*u*r-g*f*r+g*s*m-i*u*m-d*s*c+i*f*c)*A,e[6]=(g*l*r-a*u*r-g*s*h+i*u*h+a*s*c-i*l*c)*A,e[7]=(a*f*r-d*l*r+d*s*h-i*f*h-a*s*m+i*l*m)*A,e[8]=x*A,e[9]=(g*p*r-d*_*r-g*n*m+i*_*m+d*n*c-i*p*c)*A,e[10]=(a*_*r-g*o*r+g*n*h-i*_*h-a*n*c+i*o*c)*A,e[11]=(d*o*r-a*p*r-d*n*h+i*p*h+a*n*m-i*o*m)*A,e[12]=L*A,e[13]=(d*_*s-g*p*s+g*n*f-i*_*f-d*n*u+i*p*u)*A,e[14]=(g*o*s-a*_*s-g*n*l+i*_*l+a*n*u-i*o*u)*A,e[15]=(a*p*s-d*o*s+d*n*l-i*p*l-a*n*f+i*o*f)*A,this}scale(e){const i=this.elements,n=e.x,s=e.y,r=e.z;return i[0]*=n,i[4]*=s,i[8]*=r,i[1]*=n,i[5]*=s,i[9]*=r,i[2]*=n,i[6]*=s,i[10]*=r,i[3]*=n,i[7]*=s,i[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,n,s))}makeTranslation(e,i,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const n=Math.cos(i),s=Math.sin(i),r=1-n,a=e.x,o=e.y,l=e.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+n,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,i,n){return this.set(e,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,i,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,i,s,1,0,0,0,0,1),this}compose(e,i,n){const s=this.elements,r=i._x,a=i._y,o=i._z,l=i._w,h=r+r,d=a+a,p=o+o,f=r*h,m=r*d,g=r*p,_=a*d,u=a*p,c=o*p,b=l*h,S=l*d,x=l*p,L=n.x,C=n.y,A=n.z;return s[0]=(1-(_+c))*L,s[1]=(m+x)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(m-x)*C,s[5]=(1-(f+c))*C,s[6]=(u+b)*C,s[7]=0,s[8]=(g+S)*A,s[9]=(u-b)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,i,n){const s=this.elements;let r=_n.set(s[0],s[1],s[2]).length();const a=_n.set(s[4],s[5],s[6]).length(),o=_n.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const h=1/r,d=1/a,p=1/o;return Jt.elements[0]*=h,Jt.elements[1]*=h,Jt.elements[2]*=h,Jt.elements[4]*=d,Jt.elements[5]*=d,Jt.elements[6]*=d,Jt.elements[8]*=p,Jt.elements[9]*=p,Jt.elements[10]*=p,i.setFromRotationMatrix(Jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,i,n,s,r,a,o=Ei){const l=this.elements,h=2*r/(i-e),d=2*r/(n-s),p=(i+e)/(i-e),f=(n+s)/(n-s);let m,g;if(o===Ei)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===vr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,i,n,s,r,a,o=Ei){const l=this.elements,h=1/(i-e),d=1/(n-s),p=1/(a-r),f=(i+e)*h,m=(n+s)*d;let g,_;if(o===Ei)g=(a+r)*p,_=-2*p;else if(o===vr)g=r*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const i=this.elements,n=e.elements;for(let s=0;s<16;s++)if(i[s]!==n[s])return!1;return!0}fromArray(e,i=0){for(let n=0;n<16;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){const n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e[i+9]=n[9],e[i+10]=n[10],e[i+11]=n[11],e[i+12]=n[12],e[i+13]=n[13],e[i+14]=n[14],e[i+15]=n[15],e}}const _n=new U,Jt=new et,Ef=new U(0,0,0),Mf=new U(1,1,1),Li=new U,Vs=new U,kt=new U,ml=new et,gl=new Xi;class ui{constructor(e=0,i=0,n=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,n,s=this._order){return this._x=e,this._y=i,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],p=s[2],f=s[6],m=s[10];switch(i){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,i,n)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Lo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sf=0;const vl=new U,yn=new Xi,gi=new et,Gs=new U,Yn=new U,bf=new U,Tf=new Xi,_l=new U(1,0,0),yl=new U(0,1,0),wl=new U(0,0,1),xl={type:"added"},Af={type:"removed"},wn={type:"childadded",child:null},Zr={type:"childremoved",child:null};class Tt extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new U,i=new ui,n=new Xi,s=new U(1,1,1);function r(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new De}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yn.setFromAxisAngle(e,i),this.quaternion.multiply(yn),this}rotateOnWorldAxis(e,i){return yn.setFromAxisAngle(e,i),this.quaternion.premultiply(yn),this}rotateX(e){return this.rotateOnAxis(_l,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,i){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(_l,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,i,n){e.isVector3?Gs.copy(e):Gs.set(e,i,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Yn,Gs,this.up):gi.lookAt(Gs,Yn,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),yn.setFromRotationMatrix(gi),this.quaternion.premultiply(yn.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xl),wn.child=e,this.dispatchEvent(wn),wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Af),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xl),wn.child=e,this.dispatchEvent(wn),wn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,i);if(a!==void 0)return a}}getObjectsByProperty(e,i,n=[]){this[e]===i&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,i,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yn,e,bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yn,Tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(e)}updateWorldMatrix(e,i){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const p=l[h];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(i){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),d=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new U(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new U,vi=new U,Jr=new U,_i=new U,xn=new U,En=new U,El=new U,Qr=new U,ea=new U,ta=new U,ia=new ht,na=new ht,sa=new ht;class ti{constructor(e=new U,i=new U,n=new U){this.a=e,this.b=i,this.c=n}static getNormal(e,i,n,s){s.subVectors(n,i),Qt.subVectors(e,i),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,i,n,s,r){Qt.subVectors(s,i),vi.subVectors(n,i),Jr.subVectors(e,i);const a=Qt.dot(Qt),o=Qt.dot(vi),l=Qt.dot(Jr),h=vi.dot(vi),d=vi.dot(Jr),p=a*h-o*o;if(p===0)return r.set(0,0,0),null;const f=1/p,m=(h*l-o*d)*f,g=(a*d-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,i,n,s){return this.getBarycoord(e,i,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,i,n,s,r,a,o,l){return this.getBarycoord(e,i,n,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,i,n,s,r,a){return ia.setScalar(0),na.setScalar(0),sa.setScalar(0),ia.fromBufferAttribute(e,i),na.fromBufferAttribute(e,n),sa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(na,r.y),a.addScaledVector(sa,r.z),a}static isFrontFacing(e,i,n,s){return Qt.subVectors(n,i),vi.subVectors(e,i),Qt.cross(vi).dot(s)<0}set(e,i,n){return this.a.copy(e),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(e,i,n,s){return this.a.copy(e[i]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,i,n,s){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Qt.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,n,s,r){return ti.getInterpolation(e,this.a,this.b,this.c,i,n,s,r)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const n=this.a,s=this.b,r=this.c;let a,o;xn.subVectors(s,n),En.subVectors(r,n),Qr.subVectors(e,n);const l=xn.dot(Qr),h=En.dot(Qr);if(l<=0&&h<=0)return i.copy(n);ea.subVectors(e,s);const d=xn.dot(ea),p=En.dot(ea);if(d>=0&&p<=d)return i.copy(s);const f=l*p-d*h;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),i.copy(n).addScaledVector(xn,a);ta.subVectors(e,r);const m=xn.dot(ta),g=En.dot(ta);if(g>=0&&m<=g)return i.copy(r);const _=m*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(n).addScaledVector(En,o);const u=d*g-m*p;if(u<=0&&p-d>=0&&m-g>=0)return El.subVectors(r,s),o=(p-d)/(p-d+(m-g)),i.copy(s).addScaledVector(El,o);const c=1/(u+_+f);return a=_*c,o=f*c,i.copy(n).addScaledVector(xn,a).addScaledVector(En,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function ra(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}class Je{constructor(e,i,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,n)}set(e,i,n){if(i===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,i,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,i),this}setRGB(e,i,n,s=We.workingColorSpace){return this.r=e,this.g=i,this.b=n,We.toWorkingColorSpace(this,s),this}setHSL(e,i,n,s=We.workingColorSpace){if(e=Co(e,1),i=ke(i,0,1),n=ke(n,0,1),i===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+i):n+i-n*i,a=2*n-r;this.r=ra(a,r,e+1/3),this.g=ra(a,r,e),this.b=ra(a,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,i=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,i);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,i);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,i);if(a===6)return this.setHex(parseInt(r,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Kt){const n=Hc[e.toLowerCase()];return n!==void 0?this.setHex(n,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return We.fromWorkingColorSpace(bt.copy(this),e),Math.round(ke(bt.r*255,0,255))*65536+Math.round(ke(bt.g*255,0,255))*256+Math.round(ke(bt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=We.workingColorSpace){We.fromWorkingColorSpace(bt.copy(this),i);const n=bt.r,s=bt.g,r=bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const p=a-o;switch(h=d<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,i=We.workingColorSpace){return We.fromWorkingColorSpace(bt.copy(this),i),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Kt){We.fromWorkingColorSpace(bt.copy(this),e);const i=bt.r,n=bt.g,s=bt.b;return e!==Kt?`color(${e} ${i.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,i,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+i,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,n){return this.r=e.r+(i.r-e.r)*n,this.g=e.g+(i.g-e.g)*n,this.b=e.b+(i.b-e.b)*n,this}lerpHSL(e,i){this.getHSL(Di),e.getHSL(Ws);const n=ts(Di.h,Ws.h,i),s=ts(Di.s,Ws.s,i),r=ts(Di.l,Ws.l,i);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*i+r[3]*n+r[6]*s,this.g=r[1]*i+r[4]*n+r[7]*s,this.b=r[2]*i+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Je;Je.NAMES=Hc;let Cf=0;class Pr extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Un,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=wa,this.blendEquation=rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=On,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pn,this.stencilZFail=pn,this.stencilZPass=pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const n=e[i];if(n===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[i]=n}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Un&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==On&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(i){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let n=null;if(i!==null){const s=i.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=i[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ms extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new U,Xs=new Ke;let Rf=0;class hi{constructor(e,i,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rf++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,n){e*=this.itemSize,n*=i.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=i.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,n=this.count;i<n;i++)Xs.fromBufferAttribute(this,i),Xs.applyMatrix3(e),this.setXY(i,Xs.x,Xs.y);else if(this.itemSize===3)for(let i=0,n=this.count;i<n;i++)ut.fromBufferAttribute(this,i),ut.applyMatrix3(e),this.setXYZ(i,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let i=0,n=this.count;i<n;i++)ut.fromBufferAttribute(this,i),ut.applyMatrix4(e),this.setXYZ(i,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let i=0,n=this.count;i<n;i++)ut.fromBufferAttribute(this,i),ut.applyNormalMatrix(e),this.setXYZ(i,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let i=0,n=this.count;i<n;i++)ut.fromBufferAttribute(this,i),ut.transformDirection(e),this.setXYZ(i,ut.x,ut.y,ut.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let n=this.array[e*this.itemSize+i];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,i,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+i]=n,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Rn(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Rn(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Rn(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Rn(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,n){return e*=this.itemSize,this.normalized&&(i=Ct(i,this.array),n=Ct(n,this.array)),this.array[e+0]=i,this.array[e+1]=n,this}setXYZ(e,i,n,s){return e*=this.itemSize,this.normalized&&(i=Ct(i,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,i,n,s,r){return e*=this.itemSize,this.normalized&&(i=Ct(i,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class Vc extends hi{constructor(e,i,n){super(new Uint16Array(e),i,n)}}class Gc extends hi{constructor(e,i,n){super(new Uint32Array(e),i,n)}}class di extends hi{constructor(e,i,n){super(new Float32Array(e),i,n)}}let Pf=0;const Xt=new et,aa=new Tt,Mn=new U,Ot=new Gn,qn=new Gn,gt=new U;class ji extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?Gc:Vc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,n=0){this.groups.push({start:e,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,i,n){return Xt.makeTranslation(e,i,n),this.applyMatrix4(Xt),this}scale(e,i,n){return Xt.makeScale(e,i,n),this.applyMatrix4(Xt),this}lookAt(e){return aa.lookAt(e),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mn).negate(),this.translate(Mn.x,Mn.y,Mn.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new di(n,3))}else{const n=Math.min(e.length,i.count);for(let s=0;s<n;s++){const r=e[s];i.setXYZ(s,r.x,r.y,r.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let n=0,s=i.length;n<s;n++){const r=i[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),i)for(let r=0,a=i.length;r<a;r++){const o=i[r];qn.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Ot.min,qn.min),Ot.expandByPoint(gt),gt.addVectors(Ot.max,qn.max),Ot.expandByPoint(gt)):(Ot.expandByPoint(qn.min),Ot.expandByPoint(qn.max))}Ot.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gt));if(i)for(let r=0,a=i.length;r<a;r++){const o=i[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)gt.fromBufferAttribute(o,h),l&&(Mn.fromBufferAttribute(e,h),gt.add(Mn)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,s=i.normal,r=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new U,l[N]=new U;const h=new U,d=new U,p=new U,f=new Ke,m=new Ke,g=new Ke,_=new U,u=new U;function c(N,E,w){h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,E),p.fromBufferAttribute(n,w),f.fromBufferAttribute(r,N),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,w),d.sub(h),p.sub(h),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(R),u.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(R),o[N].add(_),o[E].add(_),o[w].add(_),l[N].add(u),l[E].add(u),l[w].add(u))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,E=b.length;N<E;++N){const w=b[N],R=w.start,G=w.count;for(let z=R,Y=R+G;z<Y;z+=3)c(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new U,x=new U,L=new U,C=new U;function A(N){L.fromBufferAttribute(s,N),C.copy(L);const E=o[N];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(C,E);const R=x.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,R)}for(let N=0,E=b.length;N<E;++N){const w=b[N],R=w.start,G=w.count;for(let z=R,Y=R+G;z<Y;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hi(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,h=new U,d=new U,p=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),u=e.getX(f+2);s.fromBufferAttribute(i,g),r.fromBufferAttribute(i,_),a.fromBufferAttribute(i,u),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,u),o.add(d),l.add(d),h.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(u,h.x,h.y,h.z)}else for(let f=0,m=i.count;f<m;f+=3)s.fromBufferAttribute(i,f+0),r.fromBufferAttribute(i,f+1),a.fromBufferAttribute(i,f+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,n=e.count;i<n;i++)gt.fromBufferAttribute(e,i),gt.normalize(),e.setXYZ(i,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const h=o.array,d=o.itemSize,p=o.normalized,f=new h.constructor(l.length*d);let m=0,g=0;for(let _=0,u=l.length;_<u;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*d;for(let c=0;c<d;c++)f[g++]=h[m++]}return new hi(f,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ji,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=e(l,n);i.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,p=h.length;d<p;d++){const f=h[d],m=e(f,n);l.push(m)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let p=0,f=h.length;p<f;p++){const m=h[p];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(i))}const r=e.morphAttributes;for(const h in r){const d=[],p=r[h];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(i));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new et,Ji=new Bc,js=new Po,Sl=new U,Ks=new U,Ys=new U,qs=new U,oa=new U,$s=new U,bl=new U,Zs=new U;class Ht extends Tt{constructor(e=new ji,i=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){const s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,i){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;i.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],p=r[l];d!==0&&(oa.fromBufferAttribute(p,e),a?$s.addScaledVector(oa,d):$s.addScaledVector(oa.sub(i),d))}i.add($s)}return i}raycast(e,i){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(js.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(js,Sl)===null||Ji.origin.distanceToSquared(Sl)>(e.far-e.near)**2))&&(Ml.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,i,Ji)))}_computeIntersections(e,i,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const u=f[g],c=a[u.materialIndex],b=Math.max(u.start,m.start),S=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let x=b,L=S;x<L;x+=3){const C=o.getX(x),A=o.getX(x+1),N=o.getX(x+2);s=Js(this,c,e,n,h,d,p,C,A,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=u.materialIndex,i.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let u=g,c=_;u<c;u+=3){const b=o.getX(u),S=o.getX(u+1),x=o.getX(u+2);s=Js(this,a,e,n,h,d,p,b,S,x),s&&(s.faceIndex=Math.floor(u/3),i.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const u=f[g],c=a[u.materialIndex],b=Math.max(u.start,m.start),S=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let x=b,L=S;x<L;x+=3){const C=x,A=x+1,N=x+2;s=Js(this,c,e,n,h,d,p,C,A,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=u.materialIndex,i.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let u=g,c=_;u<c;u+=3){const b=u,S=u+1,x=u+2;s=Js(this,a,e,n,h,d,p,b,S,x),s&&(s.faceIndex=Math.floor(u/3),i.push(s))}}}}function Lf(t,e,i,n,s,r,a,o){let l;if(e.side===It?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Vi,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(t.matrixWorld);const h=i.ray.origin.distanceTo(Zs);return h<i.near||h>i.far?null:{distance:h,point:Zs.clone(),object:t}}function Js(t,e,i,n,s,r,a,o,l,h){t.getVertexPosition(o,Ks),t.getVertexPosition(l,Ys),t.getVertexPosition(h,qs);const d=Lf(t,e,i,n,Ks,Ys,qs,bl);if(d){const p=new U;ti.getBarycoord(bl,Ks,Ys,qs,p),s&&(d.uv=ti.getInterpolatedAttribute(s,o,l,h,p,new Ke)),r&&(d.uv1=ti.getInterpolatedAttribute(r,o,l,h,p,new Ke)),a&&(d.normal=ti.getInterpolatedAttribute(a,o,l,h,p,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:h,normal:new U,materialIndex:0};ti.getNormal(Ks,Ys,qs,f.normal),d.face=f,d.barycoord=p}return d}class Ss extends ji{constructor(e=1,i=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],p=[];let f=0,m=0;g("z","y","x",-1,-1,n,i,e,a,r,0),g("z","y","x",1,-1,n,i,-e,a,r,1),g("x","z","y",1,1,e,n,i,s,a,2),g("x","z","y",1,-1,e,n,-i,s,a,3),g("x","y","z",1,-1,e,i,n,s,r,4),g("x","y","z",-1,-1,e,i,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new di(h,3)),this.setAttribute("normal",new di(d,3)),this.setAttribute("uv",new di(p,2));function g(_,u,c,b,S,x,L,C,A,N,E){const w=x/A,R=L/N,G=x/2,z=L/2,Y=C/2,q=A+1,X=N+1;let Z=0,H=0;const ne=new U;for(let ue=0;ue<X;ue++){const xe=ue*R-z;for(let Ne=0;Ne<q;Ne++){const tt=Ne*w-G;ne[_]=tt*b,ne[u]=xe*S,ne[c]=Y,h.push(ne.x,ne.y,ne.z),ne[_]=0,ne[u]=0,ne[c]=C>0?1:-1,d.push(ne.x,ne.y,ne.z),p.push(Ne/A),p.push(1-ue/N),Z+=1}}for(let ue=0;ue<N;ue++)for(let xe=0;xe<A;xe++){const Ne=f+xe+q*ue,tt=f+xe+q*(ue+1),W=f+(xe+1)+q*(ue+1),ee=f+(xe+1)+q*ue;l.push(Ne,tt,ee),l.push(tt,W,ee),H+=6}o.addGroup(m,H,E),m+=H,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bn(t){const e={};for(const i in t){e[i]={};for(const n in t[i]){const s=t[i][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][n]=null):e[i][n]=s.clone():Array.isArray(s)?e[i][n]=s.slice():e[i][n]=s}}return e}function Rt(t){const e={};for(let i=0;i<t.length;i++){const n=Bn(t[i]);for(const s in n)e[s]=n[s]}return e}function Df(t){const e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function Wc(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const If={clone:Bn,merge:Rt};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bn(e.uniforms),this.uniformsGroups=Df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?i.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?i.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?i.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?i.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?i.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?i.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?i.uniforms[s]={type:"m4",value:a.toArray()}:i.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(i.extensions=n),i}}class Xc extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Ei}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new U,Tl=new Ke,Al=new Ke;class zt extends Xc{constructor(e=50,i=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,i){return this.getViewBounds(e,Tl,Al),i.subVectors(Al,Tl)}setViewOffset(e,i,n,s,r,a){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(es*.5*this.fov)/this.zoom,n=2*i,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,i-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,i,i-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sn=-90,bn=1;class kf extends Tt{constructor(e,i,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(Sn,bn,e,i);s.layers=this.layers,this.add(s);const r=new zt(Sn,bn,e,i);r.layers=this.layers,this.add(r);const a=new zt(Sn,bn,e,i);a.layers=this.layers,this.add(a);const o=new zt(Sn,bn,e,i);o.layers=this.layers,this.add(o);const l=new zt(Sn,bn,e,i);l.layers=this.layers,this.add(l);const h=new zt(Sn,bn,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[n,s,r,a,o,l]=i;for(const h of i)this.remove(h);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(i,r),e.setRenderTarget(n,1,s),e.render(i,a),e.setRenderTarget(n,2,s),e.render(i,o),e.setRenderTarget(n,3,s),e.render(i,l),e.setRenderTarget(n,4,s),e.render(i,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(i,d),e.setRenderTarget(p,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jc extends Et{constructor(e=[],i=Fn,n,s,r,a,o,l,h,d){super(e,i,n,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Of extends Gi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jc(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bt}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ss(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:Bn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Oi});r.uniforms.tEquirect.value=i;const a=new Ht(s,r),o=i.minFilter;return i.minFilter===ki&&(i.minFilter=Bt),new kf(1,10,this).update(e,a),i.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,i=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(i,n,s);e.setRenderTarget(r)}}class ln extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ff={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const n of e.hand.values())this._getHandJoint(i,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const u=i.getJointPose(_,n),c=this._getHandJoint(h,_);u!==null&&(c.matrix.fromArray(u.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=u.radius),c.visible=u!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,g=.005;h.inputState.pinching&&f>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=i.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=i.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[i.jointName]=n,e.add(n)}return e.joints[i.jointName]}}class yr extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ca=new U,zf=new U,Bf=new De;class nn{constructor(e=new U(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,n,s){return this.normal.set(e,i,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,n){const s=ca.subVectors(n,i).cross(zf.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const n=e.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:i.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const i=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return i<0&&n>0||n<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const n=i||Bf.getNormalMatrix(e),s=this.coplanarPoint(ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Po,Qs=new U;class Do{constructor(e=new nn,i=new nn,n=new nn,s=new nn,r=new nn,a=new nn){this.planes=[e,i,n,s,r,a]}set(e,i,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(i),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const i=this.planes;for(let n=0;n<6;n++)i[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,i=Ei){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],d=s[5],p=s[6],f=s[7],m=s[8],g=s[9],_=s[10],u=s[11],c=s[12],b=s[13],S=s[14],x=s[15];if(n[0].setComponents(l-r,f-h,u-m,x-c).normalize(),n[1].setComponents(l+r,f+h,u+m,x+c).normalize(),n[2].setComponents(l+a,f+d,u+g,x+b).normalize(),n[3].setComponents(l-a,f-d,u-g,x-b).normalize(),n[4].setComponents(l-o,f-p,u-_,x-S).normalize(),i===Ei)n[5].setComponents(l+o,f+p,u+_,x+S).normalize();else if(i===vr)n[5].setComponents(o,p,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Qi.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const i=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(i[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const i=this.planes;for(let n=0;n<6;n++){const s=i[n];if(Qs.x=s.normal.x>0?e.max.x:e.min.x,Qs.y=s.normal.y>0?e.max.y:e.min.y,Qs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let n=0;n<6;n++)if(i[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hf extends Et{constructor(e,i,n,s,r=Bt,a=Bt,o,l,h){super(e,i,n,s,r,a,o,l,h),this.isVideoTexture=!0,this.generateMipmaps=!1;const d=this;function p(){d.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Kc extends Et{constructor(e,i,n=cn,s,r,a,o=ni,l=ni,h,d=gs){if(d!==gs&&d!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ro(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class bs extends ji{constructor(e=1,i=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:n,heightSegments:s};const r=e/2,a=i/2,o=Math.floor(n),l=Math.floor(s),h=o+1,d=l+1,p=e/o,f=i/l,m=[],g=[],_=[],u=[];for(let c=0;c<d;c++){const b=c*f-a;for(let S=0;S<h;S++){const x=S*p-r;g.push(x,-b,0),_.push(0,0,1),u.push(S/o),u.push(1-c/l)}}for(let c=0;c<l;c++)for(let b=0;b<o;b++){const S=b+h*c,x=b+h*(c+1),L=b+1+h*(c+1),C=b+1+h*c;m.push(S,x,C),m.push(x,L,C)}this.setIndex(m),this.setAttribute("position",new di(g,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ts extends ji{constructor(e=1,i=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const d=[],p=new U,f=new U,m=[],g=[],_=[],u=[];for(let c=0;c<=n;c++){const b=[],S=c/n;let x=0;c===0&&a===0?x=.5/i:c===n&&l===Math.PI&&(x=-.5/i);for(let L=0;L<=i;L++){const C=L/i;p.x=-e*Math.cos(s+C*r)*Math.sin(a+S*o),p.y=e*Math.cos(a+S*o),p.z=e*Math.sin(s+C*r)*Math.sin(a+S*o),g.push(p.x,p.y,p.z),f.copy(p).normalize(),_.push(f.x,f.y,f.z),u.push(C+x,1-S),b.push(h++)}d.push(b)}for(let c=0;c<n;c++)for(let b=0;b<i;b++){const S=d[c][b+1],x=d[c][b],L=d[c+1][b],C=d[c+1][b+1];(c!==0||a>0)&&m.push(S,x,C),(c!==n-1||l<Math.PI)&&m.push(x,L,C)}this.setIndex(m),this.setAttribute("position",new di(g,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vf extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gf extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const so={enabled:!1};class Wf{constructor(e,i,n){const s=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return h.push(d,p),this},this.removeHandler=function(d){const p=h.indexOf(d);return p!==-1&&h.splice(p,2),this},this.getHandler=function(d){for(let p=0,f=h.length;p<f;p+=2){const m=h[p],g=h[p+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const Xf=new Wf;let Io=class{constructor(e){this.manager=e!==void 0?e:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const n=this;return new Promise(function(s,r){n.load(e,s,i,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Io.DEFAULT_MATERIAL_NAME="__DEFAULT";class jf extends Xc{constructor(e=-1,i=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+i,l=s-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Kf extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Cl=new et;class Yf{constructor(e,i,n=0,s=1/0){this.ray=new Bc(e,i),this.near=n,this.far=s,this.camera=null,this.layers=new Lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(e,i=!0,n=[]){return ro(e,this,n,i),n.sort(Rl),n}intersectObjects(e,i=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ro(e[s],this,n,i);return n.sort(Rl),n}}function Rl(t,e){return t.distance-e.distance}function ro(t,e,i,n){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,i)===!1&&(s=!1),s===!0&&n===!0){const r=t.children;for(let a=0,o=r.length;a<o;a++)ro(r[a],e,i,!0)}}function Pl(t,e,i,n){const s=qf(n);switch(i){case Pc:return t*e;case Dc:return t*e;case Ic:return t*e*2;case Uc:return t*e/s.components*s.byteLength;case bo:return t*e/s.components*s.byteLength;case Nc:return t*e*2/s.components*s.byteLength;case To:return t*e*2/s.components*s.byteLength;case Lc:return t*e*3/s.components*s.byteLength;case ii:return t*e*4/s.components*s.byteLength;case Ao:return t*e*4/s.components*s.byteLength;case ar:case or:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ia:case Na:return Math.max(t,16)*Math.max(e,8)/4;case Da:case Ua:return Math.max(t,8)*Math.max(e,8)/2;case ka:case Oa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Va:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hr:case Qa:case eo:return Math.ceil(t/4)*Math.ceil(e/4)*16;case kc:case to:return Math.ceil(t/4)*Math.ceil(e/4)*8;case io:case no:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qf(t){switch(t){case bi:case Ac:return{byteLength:1,components:1};case fs:case Cc:case Es:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case cn:case Eo:case xi:return{byteLength:4,components:1};case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yc(){let t=null,e=!1,i=null,n=null;function s(r,a){i(r,a),n=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&i!==null&&(n=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){i=r},setContext:function(r){t=r}}}function $f(t){const e=new WeakMap;function i(o,l){const h=o.array,d=o.usage,p=h.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,h,d),o.onUploadCallback();let m;if(h instanceof Float32Array)m=t.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=t.SHORT;else if(h instanceof Uint32Array)m=t.UNSIGNED_INT;else if(h instanceof Int32Array)m=t.INT;else if(h instanceof Int8Array)m=t.BYTE;else if(h instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,h){const d=l.array,p=l.updateRanges;if(t.bindBuffer(h,o),p.length===0)t.bufferSubData(h,0,d);else{p.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<p.length;m++){const g=p[f],_=p[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,p[f]=_)}p.length=f+1;for(let m=0,g=p.length;m<g;m++){const _=p[m];t.bufferSubData(h,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ag=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_v=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:em,alphatest_fragment:tm,alphatest_pars_fragment:im,aomap_fragment:nm,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:am,begin_vertex:om,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:dm,clipping_planes_fragment:um,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:vm,color_pars_vertex:_m,color_vertex:ym,common:wm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:Em,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Cm,envmap_fragment:Rm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Lm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Gm,envmap_vertex:Im,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:km,fog_pars_fragment:Om,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:zm,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:jm,lights_phong_pars_fragment:Km,lights_physical_fragment:Ym,lights_physical_pars_fragment:qm,lights_fragment_begin:$m,lights_fragment_maps:Zm,lights_fragment_end:Jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ig,map_fragment:ng,map_pars_fragment:sg,map_particle_fragment:rg,map_particle_pars_fragment:ag,metalnessmap_fragment:og,metalnessmap_pars_fragment:lg,morphinstance_vertex:cg,morphcolor_vertex:hg,morphnormal_vertex:dg,morphtarget_pars_vertex:ug,morphtarget_vertex:pg,normal_fragment_begin:fg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:vg,normal_vertex:_g,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:Mg,opaque_fragment:Sg,packing:bg,premultiplied_alpha_fragment:Tg,project_vertex:Ag,dithering_fragment:Cg,dithering_pars_fragment:Rg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Dg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Ug,shadowmask_pars_fragment:Ng,skinbase_vertex:kg,skinning_pars_vertex:Og,skinning_vertex:Fg,skinnormal_vertex:zg,specularmap_fragment:Bg,specularmap_pars_fragment:Hg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Gg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:jg,uv_pars_vertex:Kg,uv_vertex:Yg,worldpos_vertex:qg,background_vert:$g,background_frag:Zg,backgroundCube_vert:Jg,backgroundCube_frag:Qg,cube_vert:ev,cube_frag:tv,depth_vert:iv,depth_frag:nv,distanceRGBA_vert:sv,distanceRGBA_frag:rv,equirect_vert:av,equirect_frag:ov,linedashed_vert:lv,linedashed_frag:cv,meshbasic_vert:hv,meshbasic_frag:dv,meshlambert_vert:uv,meshlambert_frag:pv,meshmatcap_vert:fv,meshmatcap_frag:mv,meshnormal_vert:gv,meshnormal_frag:vv,meshphong_vert:_v,meshphong_frag:yv,meshphysical_vert:wv,meshphysical_frag:xv,meshtoon_vert:Ev,meshtoon_frag:Mv,points_vert:Sv,points_frag:bv,shadow_vert:Tv,shadow_frag:Av,sprite_vert:Cv,sprite_frag:Rv},te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},li={basic:{uniforms:Rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Rt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Rt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Rt([te.points,te.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Rt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Rt([te.common,te.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Rt([te.sprite,te.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Rt([te.common,te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Rt([te.lights,te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};li.physical={uniforms:Rt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const er={r:0,b:0,g:0},en=new ui,Pv=new et;function Lv(t,e,i,n,s,r,a){const o=new Je(0);let l=r===!0?0:1,h,d,p=null,f=0,m=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?i:e).get(x)),x}function _(S){let x=!1;const L=g(S);L===null?c(o,l):L&&L.isColor&&(c(L,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function u(S,x){const L=g(x);L&&(L.isCubeTexture||L.mapping===Rr)?(d===void 0&&(d=new Ht(new Ss(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Bn(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),en.copy(x.backgroundRotation),en.x*=-1,en.y*=-1,en.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(en.y*=-1,en.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(en)),d.material.toneMapped=We.getTransfer(L.colorSpace)!==Qe,(p!==L||f!==L.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,p=L,f=L.version,m=t.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Ht(new bs(2,2),new Ti({name:"BackgroundMaterial",uniforms:Bn(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=We.getTransfer(L.colorSpace)!==Qe,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(p!==L||f!==L.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=L,f=L.version,m=t.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function c(S,x){S.getRGB(er,Wc(t)),n.buffers.color.setClear(er.r,er.g,er.b,x,a)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,c(o,l)},render:_,addToRenderList:u,dispose:b}}function Dv(t,e){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(w,R,G,z,Y){let q=!1;const X=p(z,G,R);r!==X&&(r=X,h(r.object)),q=m(w,z,G,Y),q&&g(w,z,G,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(w,R,G,z),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function h(w){return t.bindVertexArray(w)}function d(w){return t.deleteVertexArray(w)}function p(w,R,G){const z=G.wireframe===!0;let Y=n[w.id];Y===void 0&&(Y={},n[w.id]=Y);let q=Y[R.id];q===void 0&&(q={},Y[R.id]=q);let X=q[z];return X===void 0&&(X=f(l()),q[z]=X),X}function f(w){const R=[],G=[],z=[];for(let Y=0;Y<i;Y++)R[Y]=0,G[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:z,object:w,attributes:{},index:null}}function m(w,R,G,z){const Y=r.attributes,q=R.attributes;let X=0;const Z=G.getAttributes();for(const H in Z)if(Z[H].location>=0){const ue=Y[H];let xe=q[H];if(xe===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(w,R,G,z){const Y={},q=R.attributes;let X=0;const Z=G.getAttributes();for(const H in Z)if(Z[H].location>=0){let ue=q[H];ue===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),Y[H]=xe,X++}r.attributes=Y,r.attributesNum=X,r.index=z}function _(){const w=r.newAttributes;for(let R=0,G=w.length;R<G;R++)w[R]=0}function u(w){c(w,0)}function c(w,R){const G=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;G[w]=1,z[w]===0&&(t.enableVertexAttribArray(w),z[w]=1),Y[w]!==R&&(t.vertexAttribDivisor(w,R),Y[w]=R)}function b(){const w=r.newAttributes,R=r.enabledAttributes;for(let G=0,z=R.length;G<z;G++)R[G]!==w[G]&&(t.disableVertexAttribArray(G),R[G]=0)}function S(w,R,G,z,Y,q,X){X===!0?t.vertexAttribIPointer(w,R,G,Y,q):t.vertexAttribPointer(w,R,G,z,Y,q)}function x(w,R,G,z){_();const Y=z.attributes,q=G.getAttributes(),X=R.defaultAttributeValues;for(const Z in q){const H=q[Z];if(H.location>=0){let ne=Y[Z];if(ne===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),ne!==void 0){const ue=ne.normalized,xe=ne.itemSize,Ne=e.get(ne);if(Ne===void 0)continue;const tt=Ne.buffer,W=Ne.type,ee=Ne.bytesPerElement,ve=W===t.INT||W===t.UNSIGNED_INT||ne.gpuType===Eo;if(ne.isInterleavedBufferAttribute){const se=ne.data,be=se.stride,je=ne.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)c(H.location+Ae,se.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)u(H.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let Ae=0;Ae<H.locationSize;Ae++)S(H.location+Ae,xe/H.locationSize,W,ue,be*ee,(je+xe/H.locationSize*Ae)*ee,ve)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)c(H.location+se,ne.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<H.locationSize;se++)u(H.location+se);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let se=0;se<H.locationSize;se++)S(H.location+se,xe/H.locationSize,W,ue,xe*ee,xe/H.locationSize*se*ee,ve)}}else if(X!==void 0){const ue=X[Z];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(H.location,ue);break;case 3:t.vertexAttrib3fv(H.location,ue);break;case 4:t.vertexAttrib4fv(H.location,ue);break;default:t.vertexAttrib1fv(H.location,ue)}}}}b()}function L(){N();for(const w in n){const R=n[w];for(const G in R){const z=R[G];for(const Y in z)d(z[Y].object),delete z[Y];delete R[G]}delete n[w]}}function C(w){if(n[w.id]===void 0)return;const R=n[w.id];for(const G in R){const z=R[G];for(const Y in z)d(z[Y].object),delete z[Y];delete R[G]}delete n[w.id]}function A(w){for(const R in n){const G=n[R];if(G[w.id]===void 0)continue;const z=G[w.id];for(const Y in z)d(z[Y].object),delete z[Y];delete G[w.id]}}function N(){E(),a=!0,r!==s&&(r=s,h(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:u,disableUnusedAttributes:b}}function Iv(t,e,i){let n;function s(h){n=h}function r(h,d){t.drawArrays(n,h,d),i.update(d,n,1)}function a(h,d,p){p!==0&&(t.drawArraysInstanced(n,h,d,p),i.update(d,n,p))}function o(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];i.update(m,n,1)}function l(h,d,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)a(h[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,d,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=d[_]*f[_];i.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Uv(t,e,i,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==ii&&n.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const N=A===Es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bi&&n.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xi&&!N)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=i.logarithmicDepthBuffer===!0,f=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),u=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:u,maxAttributes:c,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:C}}function Nv(t){const e=this;let i=null,n=0,s=!1,r=!1;const a=new nn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||n!==0||s;return s=f,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){i=d(p,f,0)},this.setState=function(p,f,m){const g=p.clippingPlanes,_=p.clipIntersection,u=p.clipShadows,c=t.get(p);if(!s||g===null||g.length===0||r&&!u)r?d(null):h();else{const b=r?0:n,S=b*4;let x=c.clippingState||null;l.value=x,x=d(g,f,S,m);for(let L=0;L!==S;++L)x[L]=i[L];c.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,f,m,g){const _=p!==null?p.length:0;let u=null;if(_!==0){if(u=l.value,g!==!0||u===null){const c=m+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(u===null||u.length<c)&&(u=new Float32Array(c));for(let S=0,x=m;S!==_;++S,x+=4)a.copy(p[S]).applyMatrix4(b,o),a.normal.toArray(u,x),u[x+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function kv(t){let e=new WeakMap;function i(a,o){return o===Ca?a.mapping=Fn:o===Ra&&(a.mapping=zn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ca||o===Ra)if(e.has(a)){const l=e.get(a).texture;return i(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new Of(l.height);return h.fromEquirectangularTexture(t,a),e.set(a,h),a.addEventListener("dispose",s),i(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Dn=4,Ll=[.125,.215,.35,.446,.526,.582],an=20,ha=new jf,Dl=new Je;let da=null,ua=0,pa=0,fa=!1;const sn=(1+Math.sqrt(5))/2,Tn=1/sn,Il=[new U(-sn,Tn,0),new U(sn,Tn,0),new U(-Tn,0,sn),new U(Tn,0,sn),new U(0,sn,-Tn),new U(0,sn,Tn),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Ov=new U;class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,n=.1,s=100,r={}){const{size:a=256,position:o=Ov}=r;da=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),i>0&&this._blur(l,0,0,i),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(da,ua,pa),this._renderer.xr.enabled=fa,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fn||e.mapping===zn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),da=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=i||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Es,format:ii,colorSpace:hn,depthBuffer:!1},s=Nl(e,i,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,i,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fv(r)),this._blurMaterial=zv(r,e,i)}return s}_compileMaterial(e){const i=new Ht(this._lodPlanes[0],e);this._renderer.compile(i,ha)}_sceneToCubeUV(e,i,n,s,r){const l=new zt(90,1,i,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(Dl),p.toneMapping=Fi,p.autoClear=!1;const g=new Ms({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),_=new Ht(new Ss,g);let u=!1;const c=e.background;c?c.isColor&&(g.color.copy(c),e.background=null,u=!0):(g.color.copy(Dl),u=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):S===1?(l.up.set(0,0,h[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));const x=this._cubeSize;tr(s,S*x,b>2?x:0,x,x),p.setRenderTarget(s),u&&p.render(_,l),p.render(e,l)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=m,p.autoClear=f,e.background=c}_textureToCubeUV(e,i){const n=this._renderer,s=e.mapping===Fn||e.mapping===zn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;tr(i,0,0,3*l,2*l),n.setRenderTarget(i),n.render(a,ha)}_applyPMREM(e){const i=this._renderer,n=i.autoClear;i.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Il[(s-r-1)%Il.length];this._blur(e,r-1,r,a,o)}i.autoClear=n}_blur(e,i,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,i,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,i,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Ht(this._lodPlanes[s],h),f=h.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*an-1),_=r/g,u=isFinite(r)?1+Math.floor(d*_):an;u>an&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${an}`);const c=[];let b=0;for(let A=0;A<an;++A){const N=A/_,E=Math.exp(-N*N/2);c.push(E),A===0?b+=E:A<u&&(b+=2*E)}for(let A=0;A<c.length;A++)c[A]=c[A]/b;f.envMap.value=e.texture,f.samples.value=u,f.weights.value=c,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const x=this._sizeLods[s],L=3*x*(s>S-Dn?s-S+Dn:0),C=4*(this._cubeSize-x);tr(i,L,C,3*x,2*x),l.setRenderTarget(i),l.render(p,ha)}}function Fv(t){const e=[],i=[],n=[];let s=t;const r=t-Dn+1+Ll.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);i.push(o);let l=1/o;a>t-Dn?l=Ll[a-t+Dn-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),d=-h,p=1+h,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,g=6,_=3,u=2,c=1,b=new Float32Array(_*g*m),S=new Float32Array(u*g*m),x=new Float32Array(c*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,N=C>2?0:-1,E=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];b.set(E,_*g*C),S.set(f,u*g*C);const w=[C,C,C,C,C,C];x.set(w,c*g*C)}const L=new ji;L.setAttribute("position",new hi(b,_)),L.setAttribute("uv",new hi(S,u)),L.setAttribute("faceIndex",new hi(x,c)),e.push(L),s>Dn&&s--}return{lodPlanes:e,sizeLods:i,sigmas:n}}function Nl(t,e,i){const n=new Gi(t,e,i);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(t,e,i,n,s){t.viewport.set(e,i,n,s),t.scissor.set(e,i,n,s)}function zv(t,e,i){const n=new Float32Array(an),s=new U(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:an,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function kl(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ol(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bv(t){let e=new WeakMap,i=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===Ca||l===Ra,d=l===Fn||l===zn;if(h||d){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return i===null&&(i=new Ul(t)),p=h?i.fromEquirectangular(o,p):i.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return h&&m&&m.height>0||d&&m&&s(m)?(i===null&&(i=new Ul(t)),p=h?i.fromEquirectangular(o):i.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:a}}function Hv(t){const e={};function i(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(n)}return e[n]=s,s}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const s=i(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vv(t,e,i,n){const s={},r=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,i.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,i.memory.geometries++),f}function l(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function h(p){const f=[],m=p.index,g=p.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,x=b.length;S<x;S+=3){const L=b[S+0],C=b[S+1],A=b[S+2];f.push(L,C,C,A,A,L)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const L=S+0,C=S+1,A=S+2;f.push(L,C,C,A,A,L)}}else return;const u=new(Fc(f)?Gc:Vc)(f,1);u.version=_;const c=r.get(p);c&&e.remove(c),r.set(p,u)}function d(p){const f=r.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&h(p)}else h(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function Gv(t,e,i){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(n,m,r,f*a),i.update(m,n,1)}function h(f,m,g){g!==0&&(t.drawElementsInstanced(n,m,r,f*a,g),i.update(m,n,g))}function d(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let u=0;for(let c=0;c<g;c++)u+=m[c];i.update(u,n,1)}function p(f,m,g,_){if(g===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let c=0;c<f.length;c++)h(f[c]/a,m[c],_[c]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let c=0;for(let b=0;b<g;b++)c+=m[b]*_[b];i.update(c,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Wv(t){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(i.calls++,a){case t.TRIANGLES:i.triangles+=o*(r/3);break;case t.LINES:i.lines+=o*(r/2);break;case t.LINE_STRIP:i.lines+=o*(r-1);break;case t.LINE_LOOP:i.lines+=o*r;break;case t.POINTS:i.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:s,update:n}}function Xv(t,e,i){const n=new WeakMap,s=new ht;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let w=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",w)};var m=w;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),u===!0&&(x=3);let L=o.attributes.position.count*x,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*p),N=new zc(A,L,C,p);N.type=xi,N.needsUpdate=!0;const E=x*4;for(let R=0;R<p;R++){const G=c[R],z=b[R],Y=S[R],q=L*C*4*R;for(let X=0;X<G.count;X++){const Z=X*E;g===!0&&(s.fromBufferAttribute(G,X),A[q+Z+0]=s.x,A[q+Z+1]=s.y,A[q+Z+2]=s.z,A[q+Z+3]=0),_===!0&&(s.fromBufferAttribute(z,X),A[q+Z+4]=s.x,A[q+Z+5]=s.y,A[q+Z+6]=s.z,A[q+Z+7]=0),u===!0&&(s.fromBufferAttribute(Y,X),A[q+Z+8]=s.x,A[q+Z+9]=s.y,A[q+Z+10]=s.z,A[q+Z+11]=Y.itemSize===4?s.w:1)}}f={count:p,texture:N,size:new Ke(L,C)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,i);else{let g=0;for(let u=0;u<h.length;u++)g+=h[u];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",h)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function jv(t,e,i,n){let s=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,p=e.get(l,d);if(s.get(p)!==h&&(e.update(p),s.set(p,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(i.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return p}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:r,dispose:a}}const qc=new Et,Fl=new Kc(1,1),$c=new zc,Zc=new wf,Jc=new jc,zl=[],Bl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Gl=new Float32Array(4);function Wn(t,e,i){const n=t[0];if(n<=0||n>0)return t;const s=e*i;let r=zl[s];if(r===void 0&&(r=new Float32Array(s),zl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=i,t[a].toArray(r,o)}return r}function ft(t,e){if(t.length!==e.length)return!1;for(let i=0,n=t.length;i<n;i++)if(t[i]!==e[i])return!1;return!0}function mt(t,e){for(let i=0,n=e.length;i<n;i++)t[i]=e[i]}function Lr(t,e){let i=Bl[e];i===void 0&&(i=new Int32Array(e),Bl[e]=i);for(let n=0;n!==e;++n)i[n]=t.allocateTextureUnit();return i}function Kv(t,e){const i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function Yv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ft(i,e))return;t.uniform2fv(this.addr,e),mt(i,e)}}function qv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ft(i,e))return;t.uniform3fv(this.addr,e),mt(i,e)}}function $v(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ft(i,e))return;t.uniform4fv(this.addr,e),mt(i,e)}}function Zv(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(ft(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),mt(i,e)}else{if(ft(i,n))return;Gl.set(n),t.uniformMatrix2fv(this.addr,!1,Gl),mt(i,n)}}function Jv(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(ft(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),mt(i,e)}else{if(ft(i,n))return;Vl.set(n),t.uniformMatrix3fv(this.addr,!1,Vl),mt(i,n)}}function Qv(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(ft(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),mt(i,e)}else{if(ft(i,n))return;Hl.set(n),t.uniformMatrix4fv(this.addr,!1,Hl),mt(i,n)}}function e0(t,e){const i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function t0(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ft(i,e))return;t.uniform2iv(this.addr,e),mt(i,e)}}function i0(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ft(i,e))return;t.uniform3iv(this.addr,e),mt(i,e)}}function n0(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ft(i,e))return;t.uniform4iv(this.addr,e),mt(i,e)}}function s0(t,e){const i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function r0(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ft(i,e))return;t.uniform2uiv(this.addr,e),mt(i,e)}}function a0(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ft(i,e))return;t.uniform3uiv(this.addr,e),mt(i,e)}}function o0(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ft(i,e))return;t.uniform4uiv(this.addr,e),mt(i,e)}}function l0(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Fl.compareFunction=Oc,r=Fl):r=qc,i.setTexture2D(e||r,s)}function c0(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTexture3D(e||Zc,s)}function h0(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTextureCube(e||Jc,s)}function d0(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTexture2DArray(e||$c,s)}function u0(t){switch(t){case 5126:return Kv;case 35664:return Yv;case 35665:return qv;case 35666:return $v;case 35674:return Zv;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return i0;case 35669:case 35673:return n0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(t,e){t.uniform1fv(this.addr,e)}function f0(t,e){const i=Wn(e,this.size,2);t.uniform2fv(this.addr,i)}function m0(t,e){const i=Wn(e,this.size,3);t.uniform3fv(this.addr,i)}function g0(t,e){const i=Wn(e,this.size,4);t.uniform4fv(this.addr,i)}function v0(t,e){const i=Wn(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function _0(t,e){const i=Wn(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function y0(t,e){const i=Wn(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function w0(t,e){t.uniform1iv(this.addr,e)}function x0(t,e){t.uniform2iv(this.addr,e)}function E0(t,e){t.uniform3iv(this.addr,e)}function M0(t,e){t.uniform4iv(this.addr,e)}function S0(t,e){t.uniform1uiv(this.addr,e)}function b0(t,e){t.uniform2uiv(this.addr,e)}function T0(t,e){t.uniform3uiv(this.addr,e)}function A0(t,e){t.uniform4uiv(this.addr,e)}function C0(t,e,i){const n=this.cache,s=e.length,r=Lr(i,s);ft(n,r)||(t.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)i.setTexture2D(e[a]||qc,r[a])}function R0(t,e,i){const n=this.cache,s=e.length,r=Lr(i,s);ft(n,r)||(t.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)i.setTexture3D(e[a]||Zc,r[a])}function P0(t,e,i){const n=this.cache,s=e.length,r=Lr(i,s);ft(n,r)||(t.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)i.setTextureCube(e[a]||Jc,r[a])}function L0(t,e,i){const n=this.cache,s=e.length,r=Lr(i,s);ft(n,r)||(t.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)i.setTexture2DArray(e[a]||$c,r[a])}function D0(t){switch(t){case 5126:return p0;case 35664:return f0;case 35665:return m0;case 35666:return g0;case 35674:return v0;case 35675:return _0;case 35676:return y0;case 5124:case 35670:return w0;case 35667:case 35671:return x0;case 35668:case 35672:return E0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}class I0{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.setValue=u0(i.type)}}class U0{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=D0(i.type)}}class N0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,i[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Wl(t,e){t.seq.push(e),t.map[e.id]=e}function k0(t,e,i){const n=t.name,s=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Wl(i,h===void 0?new I0(o,t,e):new U0(o,t,e));break}else{let p=i.map[o];p===void 0&&(p=new N0(o),Wl(i,p)),i=p}}}class ur{constructor(e,i){this.seq=[],this.map={};const n=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(i,s),a=e.getUniformLocation(i,r.name);k0(r,a,this)}}setValue(e,i,n,s){const r=this.map[i];r!==void 0&&r.setValue(e,n,s)}setOptional(e,i,n){const s=i[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,i,n,s){for(let r=0,a=i.length;r!==a;++r){const o=i[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,i){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in i&&n.push(a)}return n}}function Xl(t,e,i){const n=t.createShader(e);return t.shaderSource(n,i),t.compileShader(n),n}const O0=37297;let F0=0;function z0(t,e){const i=t.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,i.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}const jl=new De;function B0(t){We._getMatrix(jl,We.workingColorSpace,t);const e=`mat3( ${jl.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(t)){case gr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Kl(t,e,i){const n=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return i.toUpperCase()+`

`+s+`

`+z0(t.getShaderSource(e),a)}else return s}function H0(t,e){const i=B0(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function V0(t,e){let i;switch(e){case bc:i="Linear";break;case Pp:i="Reinhard";break;case Lp:i="Cineon";break;case Dp:i="ACESFilmic";break;case Up:i="AgX";break;case Np:i="Neutral";break;case Ip:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ir=new U;function G0(){We.getLuminanceCoefficients(ir);const t=ir.x.toFixed(4),e=ir.y.toFixed(4),i=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jn).join(`
`)}function X0(t){const e=[];for(const i in t){const n=t[i];n!==!1&&e.push("#define "+i+" "+n)}return e.join(`
`)}function j0(t,e){const i={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),i[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return i}function Jn(t){return t!==""}function Yl(t,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ql(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(t){return t.replace(K0,q0)}const Y0=new Map;function q0(t,e){let i=Ue[e];if(i===void 0){const n=Y0.get(e);if(n!==void 0)i=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ao(i)}const $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(t){return t.replace($0,Z0)}function Z0(t,e,i,n){let s="";for(let r=parseInt(e);r<parseInt(i);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zl(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J0(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Q0(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Fn:case zn:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e_(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case zn:e="ENVMAP_MODE_REFRACTION";break}return e}function t_(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case Cp:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function i_(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:n,maxMip:i}}function n_(t,e,i,n){const s=t.getContext(),r=i.defines;let a=i.vertexShader,o=i.fragmentShader;const l=J0(i),h=Q0(i),d=e_(i),p=t_(i),f=i_(i),m=W0(i),g=X0(r),_=s.createProgram();let u,c,b=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(u=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Jn).join(`
`),u.length>0&&(u+=`
`),c=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Jn).join(`
`),c.length>0&&(c+=`
`)):(u=[Zl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jn).join(`
`),c=[Zl(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",i.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?Ue.tonemapping_pars_fragment:"",i.toneMapping!==Fi?V0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,H0("linearToOutputTexel",i.outputColorSpace),G0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jn).join(`
`)),a=ao(a),a=Yl(a,i),a=ql(a,i),o=ao(o),o=Yl(o,i),o=ql(o,i),a=$l(a),o=$l(o),i.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,c=["#define varying in",i.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const S=b+u+a,x=b+c+o,L=Xl(s,s.VERTEX_SHADER,S),C=Xl(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,C),i.index0AttributeName!==void 0?s.bindAttribLocation(_,0,i.index0AttributeName):i.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(t.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(L).trim(),Y=s.getShaderInfoLog(C).trim();let q=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,L,C);else{const Z=Kl(s,L,"vertex"),H=Kl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+Z+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||Y==="")&&(X=!1);X&&(R.diagnostics={runnable:q,programLog:G,vertexShader:{log:z,prefix:u},fragmentShader:{log:Y,prefix:c}})}s.deleteShader(L),s.deleteShader(C),N=new ur(s,_),E=j0(s,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,O0)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let s_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(i),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const n of i)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let n=i.get(e);return n===void 0&&(n=new Set,i.set(e,n)),n}_getShaderStage(e){const i=this.shaderCache;let n=i.get(e);return n===void 0&&(n=new a_(e),i.set(e,n)),n}}class a_{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}}function o_(t,e,i,n,s,r,a){const o=new Lo,l=new r_,h=new Set,d=[],p=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return h.add(E),E===0?"uv":`uv${E}`}function u(E,w,R,G,z){const Y=G.fog,q=z.geometry,X=E.isMeshStandardMaterial?G.environment:null,Z=(E.isMeshStandardMaterial?i:e).get(E.envMap||X),H=Z&&Z.mapping===Rr?Z.image.height:null,ne=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ue=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=ue!==void 0?ue.length:0;let Ne=0;q.morphAttributes.position!==void 0&&(Ne=1),q.morphAttributes.normal!==void 0&&(Ne=2),q.morphAttributes.color!==void 0&&(Ne=3);let tt,W,ee,ve;if(ne){const Ze=li[ne];tt=Ze.vertexShader,W=Ze.fragmentShader}else tt=E.vertexShader,W=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),ve=l.getFragmentShaderID(E);const se=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),je=z.isInstancedMesh===!0,Ae=z.isBatchedMesh===!0,ct=!!E.map,at=!!E.matcap,Fe=!!Z,T=!!E.aoMap,Vt=!!E.lightMap,He=!!E.bumpMap,ze=!!E.normalMap,Ee=!!E.displacementMap,nt=!!E.emissiveMap,we=!!E.metalnessMap,M=!!E.roughnessMap,v=E.anisotropy>0,k=E.clearcoat>0,j=E.dispersion>0,$=E.iridescence>0,V=E.sheen>0,ye=E.transmission>0,re=v&&!!E.anisotropyMap,pe=k&&!!E.clearcoatMap,Ve=k&&!!E.clearcoatNormalMap,Q=k&&!!E.clearcoatRoughnessMap,fe=$&&!!E.iridescenceMap,Te=$&&!!E.iridescenceThicknessMap,Re=V&&!!E.sheenColorMap,me=V&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Ie=!!E.specularColorMap,it=!!E.specularIntensityMap,P=ye&&!!E.transmissionMap,ae=ye&&!!E.thicknessMap,B=!!E.gradientMap,K=!!E.alphaMap,ce=E.alphaTest>0,oe=!!E.alphaHash,Le=!!E.extensions;let ot=Fi;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ot=t.toneMapping);const Mt={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:tt,fragmentShader:W,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&z._colorsTexture!==null,instancing:je,instancingColor:je&&z.instanceColor!==null,instancingMorph:je&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:hn,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:at,envMap:Fe,envMapMode:Fe&&Z.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:Vt,bumpMap:He,normalMap:ze,displacementMap:f&&Ee,emissiveMap:nt,normalMapObjectSpace:ze&&E.normalMapType===Bp,normalMapTangentSpace:ze&&E.normalMapType===zp,metalnessMap:we,roughnessMap:M,anisotropy:v,anisotropyMap:re,clearcoat:k,clearcoatMap:pe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Q,dispersion:j,iridescence:$,iridescenceMap:fe,iridescenceThicknessMap:Te,sheen:V,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Be,specularColorMap:Ie,specularIntensityMap:it,transmission:ye,transmissionMap:P,thicknessMap:ae,gradientMap:B,opaque:E.transparent===!1&&E.blending===Un&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:oe,combine:E.combine,mapUv:ct&&_(E.map.channel),aoMapUv:T&&_(E.aoMap.channel),lightMapUv:Vt&&_(E.lightMap.channel),bumpMapUv:He&&_(E.bumpMap.channel),normalMapUv:ze&&_(E.normalMap.channel),displacementMapUv:Ee&&_(E.displacementMap.channel),emissiveMapUv:nt&&_(E.emissiveMap.channel),metalnessMapUv:we&&_(E.metalnessMap.channel),roughnessMapUv:M&&_(E.roughnessMap.channel),anisotropyMapUv:re&&_(E.anisotropyMap.channel),clearcoatMapUv:pe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(E.sheenRoughnessMap.channel),specularMapUv:Be&&_(E.specularMap.channel),specularColorMapUv:Ie&&_(E.specularColorMap.channel),specularIntensityMapUv:it&&_(E.specularIntensityMap.channel),transmissionMapUv:P&&_(E.transmissionMap.channel),thicknessMapUv:ae&&_(E.thicknessMap.channel),alphaMapUv:K&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ze||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(ct||K),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&We.getTransfer(E.map.colorSpace)===Qe,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&We.getTransfer(E.emissiveMap.colorSpace)===Qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wi,flipSided:E.side===It,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Mt.vertexUv1s=h.has(1),Mt.vertexUv2s=h.has(2),Mt.vertexUv3s=h.has(3),h.clear(),Mt}function c(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)w.push(R),w.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(b(w,E),S(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function b(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function S(E,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){const w=g[E.type];let R;if(w){const G=li[w];R=If.clone(G.uniforms)}else R=E.uniforms;return R}function L(E,w){let R;for(let G=0,z=d.length;G<z;G++){const Y=d[G];if(Y.cacheKey===w){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new n_(t,w,E,r),d.push(R)),R}function C(E){if(--E.usedTimes===0){const w=d.indexOf(E);d[w]=d[d.length-1],d.pop(),E.destroy()}}function A(E){l.remove(E)}function N(){l.dispose()}return{getParameters:u,getProgramCacheKey:c,getUniforms:x,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:N}}function l_(){let t=new WeakMap;function e(a){return t.has(a)}function i(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:i,remove:n,update:s,dispose:r}}function c_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jl(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ql(){const t=[];let e=0;const i=[],n=[],s=[];function r(){e=0,i.length=0,n.length=0,s.length=0}function a(p,f,m,g,_,u){let c=t[e];return c===void 0?(c={id:p.id,object:p,geometry:f,material:m,groupOrder:g,renderOrder:p.renderOrder,z:_,group:u},t[e]=c):(c.id=p.id,c.object=p,c.geometry=f,c.material=m,c.groupOrder=g,c.renderOrder=p.renderOrder,c.z=_,c.group=u),e++,c}function o(p,f,m,g,_,u){const c=a(p,f,m,g,_,u);m.transmission>0?n.push(c):m.transparent===!0?s.push(c):i.push(c)}function l(p,f,m,g,_,u){const c=a(p,f,m,g,_,u);m.transmission>0?n.unshift(c):m.transparent===!0?s.unshift(c):i.unshift(c)}function h(p,f){i.length>1&&i.sort(p||c_),n.length>1&&n.sort(f||Jl),s.length>1&&s.sort(f||Jl)}function d(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:h}}function h_(){let t=new WeakMap;function e(n,s){const r=t.get(n);let a;return r===void 0?(a=new Ql,t.set(n,[a])):s>=r.length?(a=new Ql,r.push(a)):a=r[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function d_(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new U,color:new Je};break;case"SpotLight":i={position:new U,direction:new U,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new U,color:new Je,distance:0,decay:0};break;case"HemisphereLight":i={direction:new U,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":i={color:new Je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=i,i}}}function u_(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}let p_=0;function f_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function m_(t){const e=new d_,i=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const s=new U,r=new et,a=new et;function o(h){let d=0,p=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,u=0,c=0,b=0,S=0,x=0,L=0,C=0,A=0;h.sort(f_);for(let E=0,w=h.length;E<w;E++){const R=h[E],G=R.color,z=R.intensity,Y=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=G.r*z,p+=G.g*z,f+=G.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],z);A++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,H=i.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=X,m++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=Y,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;const Z=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,Z.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){const H=i.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,x++}_++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[u]=X,u++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const Z=R.shadow,H=i.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[c]=X,c++}}u>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==u||N.hemiLength!==c||N.numDirectionalShadows!==b||N.numPointShadows!==S||N.numSpotShadows!==x||N.numSpotMaps!==L||N.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=u,n.point.length=g,n.hemi.length=c,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=u,N.hemiLength=c,N.numDirectionalShadows=b,N.numPointShadows=S,N.numSpotShadows=x,N.numSpotMaps=L,N.numLightProbes=A,n.version=p_++)}function l(h,d){let p=0,f=0,m=0,g=0,_=0;const u=d.matrixWorldInverse;for(let c=0,b=h.length;c<b;c++){const S=h[c];if(S.isDirectionalLight){const x=n.directional[p];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(u),p++}else if(S.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(u),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(u),m++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(u),a.identity(),r.copy(S.matrixWorld),r.premultiply(u),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(u),f++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(u),_++}}}return{setup:o,setupView:l,state:n}}function ec(t){const e=new m_(t),i=[],n=[];function s(d){h.camera=d,i.length=0,n.length=0}function r(d){i.push(d)}function a(d){n.push(d)}function o(){e.setup(i)}function l(d){e.setupView(i,d)}const h={lightsArray:i,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function g_(t){let e=new WeakMap;function i(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ec(t),e.set(s,[o])):r>=a.length?(o=new ec(t),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:i,dispose:n}}const v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y_(t,e,i){let n=new Do;const s=new Ke,r=new Ke,a=new ht,o=new Vf({depthPacking:Fp}),l=new Gf,h={},d=i.maxTextureSize,p={[Vi]:It,[It]:Vi,[wi]:wi},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:v_,fragmentShader:__}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ji;g.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,f),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let c=this.type;this.render=function(C,A,N){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Oi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=c!==yi&&this.type===yi,Y=c===yi&&this.type!==yi;for(let q=0,X=C.length;q<X;q++){const Z=C[q],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ne=H.getFrameExtents();if(s.multiply(ne),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,H.mapSize.y=r.y)),H.map===null||z===!0||Y===!0){const xe=this.type!==yi?{minFilter:ni,magFilter:ni}:{};H.map!==null&&H.map.dispose(),H.map=new Gi(s.x,s.y,xe),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const ue=H.getViewportCount();for(let xe=0;xe<ue;xe++){const Ne=H.getViewport(xe);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),G.viewport(a),H.updateMatrices(Z,xe),n=H.getFrustum(),x(A,N,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===yi&&b(H,N),H.needsUpdate=!1}c=this.type,u.needsUpdate=!1,t.setRenderTarget(E,w,R)};function b(C,A){const N=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,N,f,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,N,m,_,null)}function S(C,A,N,E){let w=null;const R=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)w=R;else if(w=N.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=w.uuid,z=A.uuid;let Y=h[G];Y===void 0&&(Y={},h[G]=Y);let q=Y[z];q===void 0&&(q=w.clone(),Y[z]=q,A.addEventListener("dispose",L)),w=q}if(w.visible=A.visible,w.wireframe=A.wireframe,E===yi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:p[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const G=t.properties.get(w);G.light=N}return w}function x(C,A,N,E,w){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===yi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Y=C.material;if(Array.isArray(Y)){const q=z.groups;for(let X=0,Z=q.length;X<Z;X++){const H=q[X],ne=Y[H.materialIndex];if(ne&&ne.visible){const ue=S(C,ne,E,w);C.onBeforeShadow(t,C,A,N,z,ue,H),t.renderBufferDirect(N,null,z,ue,C,H),C.onAfterShadow(t,C,A,N,z,ue,H)}}}else if(Y.visible){const q=S(C,Y,E,w);C.onBeforeShadow(t,C,A,N,z,q,null),t.renderBufferDirect(N,null,z,q,C,null),C.onAfterShadow(t,C,A,N,z,q,null)}}const G=C.children;for(let z=0,Y=G.length;z<Y;z++)x(G[z],A,N,E,w)}function L(C){C.target.removeEventListener("dispose",L);for(const N in h){const E=h[N],w=C.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const w_={[xa]:Ea,[Ma]:Ta,[Sa]:Aa,[On]:ba,[Ea]:xa,[Ta]:Ma,[Aa]:Sa,[ba]:On};function x_(t,e){function i(){let P=!1;const ae=new ht;let B=null;const K=new ht(0,0,0,0);return{setMask:function(ce){B!==ce&&!P&&(t.colorMask(ce,ce,ce,ce),B=ce)},setLocked:function(ce){P=ce},setClear:function(ce,oe,Le,ot,Mt){Mt===!0&&(ce*=ot,oe*=ot,Le*=ot),ae.set(ce,oe,Le,ot),K.equals(ae)===!1&&(t.clearColor(ce,oe,Le,ot),K.copy(ae))},reset:function(){P=!1,B=null,K.set(-1,0,0,0)}}}function n(){let P=!1,ae=!1,B=null,K=null,ce=null;return{setReversed:function(oe){if(ae!==oe){const Le=e.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ae=oe;const ot=ce;ce=null,this.setClear(ot)}},getReversed:function(){return ae},setTest:function(oe){oe?se(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(oe){B!==oe&&!P&&(t.depthMask(oe),B=oe)},setFunc:function(oe){if(ae&&(oe=w_[oe]),K!==oe){switch(oe){case xa:t.depthFunc(t.NEVER);break;case Ea:t.depthFunc(t.ALWAYS);break;case Ma:t.depthFunc(t.LESS);break;case On:t.depthFunc(t.LEQUAL);break;case Sa:t.depthFunc(t.EQUAL);break;case ba:t.depthFunc(t.GEQUAL);break;case Ta:t.depthFunc(t.GREATER);break;case Aa:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=oe}},setLocked:function(oe){P=oe},setClear:function(oe){ce!==oe&&(ae&&(oe=1-oe),t.clearDepth(oe),ce=oe)},reset:function(){P=!1,B=null,K=null,ce=null,ae=!1}}}function s(){let P=!1,ae=null,B=null,K=null,ce=null,oe=null,Le=null,ot=null,Mt=null;return{setTest:function(Ze){P||(Ze?se(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!P&&(t.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,qt,pi){(B!==Ze||K!==qt||ce!==pi)&&(t.stencilFunc(Ze,qt,pi),B=Ze,K=qt,ce=pi)},setOp:function(Ze,qt,pi){(oe!==Ze||Le!==qt||ot!==pi)&&(t.stencilOp(Ze,qt,pi),oe=Ze,Le=qt,ot=pi)},setLocked:function(Ze){P=Ze},setClear:function(Ze){Mt!==Ze&&(t.clearStencil(Ze),Mt=Ze)},reset:function(){P=!1,ae=null,B=null,K=null,ce=null,oe=null,Le=null,ot=null,Mt=null}}}const r=new i,a=new n,o=new s,l=new WeakMap,h=new WeakMap;let d={},p={},f=new WeakMap,m=[],g=null,_=!1,u=null,c=null,b=null,S=null,x=null,L=null,C=null,A=new Je(0,0,0),N=0,E=!1,w=null,R=null,G=null,z=null,Y=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=Z>=2);let ne=null,ue={};const xe=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),tt=new ht().fromArray(xe),W=new ht().fromArray(Ne);function ee(P,ae,B,K){const ce=new Uint8Array(4),oe=t.createTexture();t.bindTexture(P,oe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<B;Le++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ae+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return oe}const ve={};ve[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(t.DEPTH_TEST),a.setFunc(On),He(!1),ze(nl),se(t.CULL_FACE),T(Oi);function se(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function be(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function je(P,ae){return p[P]!==ae?(t.bindFramebuffer(P,ae),p[P]=ae,P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ae),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ae(P,ae){let B=m,K=!1;if(P){B=f.get(ae),B===void 0&&(B=[],f.set(ae,B));const ce=P.textures;if(B.length!==ce.length||B[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Le=ce.length;oe<Le;oe++)B[oe]=t.COLOR_ATTACHMENT0+oe;B.length=ce.length,K=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,K=!0);K&&t.drawBuffers(B)}function ct(P){return g!==P?(t.useProgram(P),g=P,!0):!1}const at={[rn]:t.FUNC_ADD,[dp]:t.FUNC_SUBTRACT,[up]:t.FUNC_REVERSE_SUBTRACT};at[pp]=t.MIN,at[fp]=t.MAX;const Fe={[mp]:t.ZERO,[gp]:t.ONE,[vp]:t.SRC_COLOR,[ya]:t.SRC_ALPHA,[Mp]:t.SRC_ALPHA_SATURATE,[xp]:t.DST_COLOR,[yp]:t.DST_ALPHA,[_p]:t.ONE_MINUS_SRC_COLOR,[wa]:t.ONE_MINUS_SRC_ALPHA,[Ep]:t.ONE_MINUS_DST_COLOR,[wp]:t.ONE_MINUS_DST_ALPHA,[Sp]:t.CONSTANT_COLOR,[bp]:t.ONE_MINUS_CONSTANT_COLOR,[Tp]:t.CONSTANT_ALPHA,[Ap]:t.ONE_MINUS_CONSTANT_ALPHA};function T(P,ae,B,K,ce,oe,Le,ot,Mt,Ze){if(P===Oi){_===!0&&(be(t.BLEND),_=!1);return}if(_===!1&&(se(t.BLEND),_=!0),P!==hp){if(P!==u||Ze!==E){if((c!==rn||x!==rn)&&(t.blendEquation(t.FUNC_ADD),c=rn,x=rn),Ze)switch(P){case Un:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sl:t.blendFunc(t.ONE,t.ONE);break;case rl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case al:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Un:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case al:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,S=null,L=null,C=null,A.set(0,0,0),N=0,u=P,E=Ze}return}ce=ce||ae,oe=oe||B,Le=Le||K,(ae!==c||ce!==x)&&(t.blendEquationSeparate(at[ae],at[ce]),c=ae,x=ce),(B!==b||K!==S||oe!==L||Le!==C)&&(t.blendFuncSeparate(Fe[B],Fe[K],Fe[oe],Fe[Le]),b=B,S=K,L=oe,C=Le),(ot.equals(A)===!1||Mt!==N)&&(t.blendColor(ot.r,ot.g,ot.b,Mt),A.copy(ot),N=Mt),u=P,E=!1}function Vt(P,ae){P.side===wi?be(t.CULL_FACE):se(t.CULL_FACE);let B=P.side===It;ae&&(B=!B),He(B),P.blending===Un&&P.transparent===!1?T(Oi):T(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){w!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),w=P)}function ze(P){P!==op?(se(t.CULL_FACE),P!==R&&(P===nl?t.cullFace(t.BACK):P===lp?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),R=P}function Ee(P){P!==G&&(X&&t.lineWidth(P),G=P)}function nt(P,ae,B){P?(se(t.POLYGON_OFFSET_FILL),(z!==ae||Y!==B)&&(t.polygonOffset(ae,B),z=ae,Y=B)):be(t.POLYGON_OFFSET_FILL)}function we(P){P?se(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function M(P){P===void 0&&(P=t.TEXTURE0+q-1),ne!==P&&(t.activeTexture(P),ne=P)}function v(P,ae,B){B===void 0&&(ne===null?B=t.TEXTURE0+q-1:B=ne);let K=ue[B];K===void 0&&(K={type:void 0,texture:void 0},ue[B]=K),(K.type!==P||K.texture!==ae)&&(ne!==B&&(t.activeTexture(B),ne=B),t.bindTexture(P,ae||ve[P]),K.type=P,K.texture=ae)}function k(){const P=ue[ne];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{t.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{t.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{t.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{t.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{t.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{t.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{t.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){tt.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function me(P){W.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function Be(P,ae){let B=h.get(ae);B===void 0&&(B=new WeakMap,h.set(ae,B));let K=B.get(P);K===void 0&&(K=t.getUniformBlockIndex(ae,P.name),B.set(P,K))}function Ie(P,ae){const K=h.get(ae).get(P);l.get(ae)!==K&&(t.uniformBlockBinding(ae,K,P.__bindingPointIndex),l.set(ae,K))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ne=null,ue={},p={},f=new WeakMap,m=[],g=null,_=!1,u=null,c=null,b=null,S=null,x=null,L=null,C=null,A=new Je(0,0,0),N=0,E=!1,w=null,R=null,G=null,z=null,Y=null,tt.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:be,bindFramebuffer:je,drawBuffers:Ae,useProgram:ct,setBlending:T,setMaterial:Vt,setFlipSided:He,setCullFace:ze,setLineWidth:Ee,setPolygonOffset:nt,setScissorTest:we,activeTexture:M,bindTexture:v,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:fe,texImage3D:Te,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:V,texSubImage3D:ye,compressedTexSubImage2D:re,compressedTexSubImage3D:pe,scissor:Re,viewport:me,reset:it}}function E_(t,e,i,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ke,d=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return m?new OffscreenCanvas(M,v):_r("canvas")}function _(M,v,k){let j=1;const $=we(M);if(($.width>k||$.height>k)&&(j=k/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const V=Math.floor(j*$.width),ye=Math.floor(j*$.height);p===void 0&&(p=g(V,ye));const re=v?g(V,ye):p;return re.width=V,re.height=ye,re.getContext("2d").drawImage(M,0,0,V,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+ye+")."),re}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function u(M){return M.generateMipmaps}function c(M){t.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(M,v,k,j,$=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=v;if(v===t.RED&&(k===t.FLOAT&&(V=t.R32F),k===t.HALF_FLOAT&&(V=t.R16F),k===t.UNSIGNED_BYTE&&(V=t.R8)),v===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(V=t.R8UI),k===t.UNSIGNED_SHORT&&(V=t.R16UI),k===t.UNSIGNED_INT&&(V=t.R32UI),k===t.BYTE&&(V=t.R8I),k===t.SHORT&&(V=t.R16I),k===t.INT&&(V=t.R32I)),v===t.RG&&(k===t.FLOAT&&(V=t.RG32F),k===t.HALF_FLOAT&&(V=t.RG16F),k===t.UNSIGNED_BYTE&&(V=t.RG8)),v===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(V=t.RG8UI),k===t.UNSIGNED_SHORT&&(V=t.RG16UI),k===t.UNSIGNED_INT&&(V=t.RG32UI),k===t.BYTE&&(V=t.RG8I),k===t.SHORT&&(V=t.RG16I),k===t.INT&&(V=t.RG32I)),v===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(V=t.RGB8UI),k===t.UNSIGNED_SHORT&&(V=t.RGB16UI),k===t.UNSIGNED_INT&&(V=t.RGB32UI),k===t.BYTE&&(V=t.RGB8I),k===t.SHORT&&(V=t.RGB16I),k===t.INT&&(V=t.RGB32I)),v===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),k===t.UNSIGNED_INT&&(V=t.RGBA32UI),k===t.BYTE&&(V=t.RGBA8I),k===t.SHORT&&(V=t.RGBA16I),k===t.INT&&(V=t.RGBA32I)),v===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),v===t.RGBA){const ye=$?gr:We.getTransfer(j);k===t.FLOAT&&(V=t.RGBA32F),k===t.HALF_FLOAT&&(V=t.RGBA16F),k===t.UNSIGNED_BYTE&&(V=ye===Qe?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function x(M,v){let k;return M?v===null||v===cn||v===ms?k=t.DEPTH24_STENCIL8:v===xi?k=t.DEPTH32F_STENCIL8:v===fs&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===cn||v===ms?k=t.DEPTH_COMPONENT24:v===xi?k=t.DEPTH_COMPONENT32F:v===fs&&(k=t.DEPTH_COMPONENT16),k}function L(M,v){return u(M)===!0||M.isFramebufferTexture&&M.minFilter!==ni&&M.minFilter!==Bt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function C(M){const v=M.target;v.removeEventListener("dispose",C),N(v),v.isVideoTexture&&d.delete(v)}function A(M){const v=M.target;v.removeEventListener("dispose",A),w(v)}function N(M){const v=n.get(M);if(v.__webglInit===void 0)return;const k=M.source,j=f.get(k);if(j){const $=j[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(M),Object.keys(j).length===0&&f.delete(k)}n.remove(M)}function E(M){const v=n.get(M);t.deleteTexture(v.__webglTexture);const k=M.source,j=f.get(k);delete j[v.__cacheKey],a.memory.textures--}function w(M){const v=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let $=0;$<v.__webglFramebuffer[j].length;$++)t.deleteFramebuffer(v.__webglFramebuffer[j][$]);else t.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)t.deleteFramebuffer(v.__webglFramebuffer[j]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=M.textures;for(let j=0,$=k.length;j<$;j++){const V=n.get(k[j]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(M)}let R=0;function G(){R=0}function z(){const M=R;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),R+=1,M}function Y(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function q(M,v){const k=n.get(M);if(M.isVideoTexture&&Ee(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){const j=M.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,M,v);return}}i.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+v)}function X(M,v){const k=n.get(M);if(M.version>0&&k.__version!==M.version){W(k,M,v);return}i.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+v)}function Z(M,v){const k=n.get(M);if(M.version>0&&k.__version!==M.version){W(k,M,v);return}i.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+v)}function H(M,v){const k=n.get(M);if(M.version>0&&k.__version!==M.version){ee(k,M,v);return}i.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+v)}const ne={[Pa]:t.REPEAT,[on]:t.CLAMP_TO_EDGE,[La]:t.MIRRORED_REPEAT},ue={[ni]:t.NEAREST,[kp]:t.NEAREST_MIPMAP_NEAREST,[ks]:t.NEAREST_MIPMAP_LINEAR,[Bt]:t.LINEAR,[Vr]:t.LINEAR_MIPMAP_NEAREST,[ki]:t.LINEAR_MIPMAP_LINEAR},xe={[Hp]:t.NEVER,[Kp]:t.ALWAYS,[Vp]:t.LESS,[Oc]:t.LEQUAL,[Gp]:t.EQUAL,[jp]:t.GEQUAL,[Wp]:t.GREATER,[Xp]:t.NOTEQUAL};function Ne(M,v){if(v.type===xi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bt||v.magFilter===Vr||v.magFilter===ks||v.magFilter===ki||v.minFilter===Bt||v.minFilter===Vr||v.minFilter===ks||v.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,ne[v.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,ne[v.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,ne[v.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,ue[v.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ni||v.minFilter!==ks&&v.minFilter!==ki||v.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function tt(M,v){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",C));const j=v.source;let $=f.get(j);$===void 0&&($={},f.set(j,$));const V=Y(v);if(V!==M.__cacheKey){$[V]===void 0&&($[V]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[V].usedTimes++;const ye=$[M.__cacheKey];ye!==void 0&&($[M.__cacheKey].usedTimes--,ye.usedTimes===0&&E(v)),M.__cacheKey=V,M.__webglTexture=$[V].texture}return k}function W(M,v,k){let j=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=t.TEXTURE_3D);const $=tt(M,v),V=v.source;i.bindTexture(j,M.__webglTexture,t.TEXTURE0+k);const ye=n.get(V);if(V.version!==ye.__version||$===!0){i.activeTexture(t.TEXTURE0+k);const re=We.getPrimaries(We.workingColorSpace),pe=v.colorSpace===Ni?null:We.getPrimaries(v.colorSpace),Ve=v.colorSpace===Ni||re===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=_(v.image,!1,s.maxTextureSize);Q=nt(v,Q);const fe=r.convert(v.format,v.colorSpace),Te=r.convert(v.type);let Re=S(v.internalFormat,fe,Te,v.colorSpace,v.isVideoTexture);Ne(j,v);let me;const Be=v.mipmaps,Ie=v.isVideoTexture!==!0,it=ye.__version===void 0||$===!0,P=V.dataReady,ae=L(v,Q);if(v.isDepthTexture)Re=x(v.format===vs,v.type),it&&(Ie?i.texStorage2D(t.TEXTURE_2D,1,Re,Q.width,Q.height):i.texImage2D(t.TEXTURE_2D,0,Re,Q.width,Q.height,0,fe,Te,null));else if(v.isDataTexture)if(Be.length>0){Ie&&it&&i.texStorage2D(t.TEXTURE_2D,ae,Re,Be[0].width,Be[0].height);for(let B=0,K=Be.length;B<K;B++)me=Be[B],Ie?P&&i.texSubImage2D(t.TEXTURE_2D,B,0,0,me.width,me.height,fe,Te,me.data):i.texImage2D(t.TEXTURE_2D,B,Re,me.width,me.height,0,fe,Te,me.data);v.generateMipmaps=!1}else Ie?(it&&i.texStorage2D(t.TEXTURE_2D,ae,Re,Q.width,Q.height),P&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,fe,Te,Q.data)):i.texImage2D(t.TEXTURE_2D,0,Re,Q.width,Q.height,0,fe,Te,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&it&&i.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Re,Be[0].width,Be[0].height,Q.depth);for(let B=0,K=Be.length;B<K;B++)if(me=Be[B],v.format!==ii)if(fe!==null)if(Ie){if(P)if(v.layerUpdates.size>0){const ce=Pl(me.width,me.height,v.format,v.type);for(const oe of v.layerUpdates){const Le=me.data.subarray(oe*ce/me.data.BYTES_PER_ELEMENT,(oe+1)*ce/me.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,oe,me.width,me.height,1,fe,Le)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,me.width,me.height,Q.depth,fe,me.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,Re,me.width,me.height,Q.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?P&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,me.width,me.height,Q.depth,fe,Te,me.data):i.texImage3D(t.TEXTURE_2D_ARRAY,B,Re,me.width,me.height,Q.depth,0,fe,Te,me.data)}else{Ie&&it&&i.texStorage2D(t.TEXTURE_2D,ae,Re,Be[0].width,Be[0].height);for(let B=0,K=Be.length;B<K;B++)me=Be[B],v.format!==ii?fe!==null?Ie?P&&i.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,me.width,me.height,fe,me.data):i.compressedTexImage2D(t.TEXTURE_2D,B,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?P&&i.texSubImage2D(t.TEXTURE_2D,B,0,0,me.width,me.height,fe,Te,me.data):i.texImage2D(t.TEXTURE_2D,B,Re,me.width,me.height,0,fe,Te,me.data)}else if(v.isDataArrayTexture)if(Ie){if(it&&i.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Re,Q.width,Q.height,Q.depth),P)if(v.layerUpdates.size>0){const B=Pl(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const ce=Q.data.subarray(K*B/Q.data.BYTES_PER_ELEMENT,(K+1)*B/Q.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,fe,Te,ce)}v.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,Te,Q.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,fe,Te,Q.data);else if(v.isData3DTexture)Ie?(it&&i.texStorage3D(t.TEXTURE_3D,ae,Re,Q.width,Q.height,Q.depth),P&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,Te,Q.data)):i.texImage3D(t.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,fe,Te,Q.data);else if(v.isFramebufferTexture){if(it)if(Ie)i.texStorage2D(t.TEXTURE_2D,ae,Re,Q.width,Q.height);else{let B=Q.width,K=Q.height;for(let ce=0;ce<ae;ce++)i.texImage2D(t.TEXTURE_2D,ce,Re,B,K,0,fe,Te,null),B>>=1,K>>=1}}else if(Be.length>0){if(Ie&&it){const B=we(Be[0]);i.texStorage2D(t.TEXTURE_2D,ae,Re,B.width,B.height)}for(let B=0,K=Be.length;B<K;B++)me=Be[B],Ie?P&&i.texSubImage2D(t.TEXTURE_2D,B,0,0,fe,Te,me):i.texImage2D(t.TEXTURE_2D,B,Re,fe,Te,me);v.generateMipmaps=!1}else if(Ie){if(it){const B=we(Q);i.texStorage2D(t.TEXTURE_2D,ae,Re,B.width,B.height)}P&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Te,Q)}else i.texImage2D(t.TEXTURE_2D,0,Re,fe,Te,Q);u(v)&&c(j),ye.__version=V.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ee(M,v,k){if(v.image.length!==6)return;const j=tt(M,v),$=v.source;i.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+k);const V=n.get($);if($.version!==V.__version||j===!0){i.activeTexture(t.TEXTURE0+k);const ye=We.getPrimaries(We.workingColorSpace),re=v.colorSpace===Ni?null:We.getPrimaries(v.colorSpace),pe=v.colorSpace===Ni||ye===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ve=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!Ve&&!Q?fe[K]=_(v.image[K],!0,s.maxCubemapSize):fe[K]=Q?v.image[K].image:v.image[K],fe[K]=nt(v,fe[K]);const Te=fe[0],Re=r.convert(v.format,v.colorSpace),me=r.convert(v.type),Be=S(v.internalFormat,Re,me,v.colorSpace),Ie=v.isVideoTexture!==!0,it=V.__version===void 0||j===!0,P=$.dataReady;let ae=L(v,Te);Ne(t.TEXTURE_CUBE_MAP,v);let B;if(Ve){Ie&&it&&i.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Be,Te.width,Te.height);for(let K=0;K<6;K++){B=fe[K].mipmaps;for(let ce=0;ce<B.length;ce++){const oe=B[ce];v.format!==ii?Re!==null?Ie?P&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Re,oe.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Be,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Re,me,oe.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Be,oe.width,oe.height,0,Re,me,oe.data)}}}else{if(B=v.mipmaps,Ie&&it){B.length>0&&ae++;const K=we(fe[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Be,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Re,me,fe[K].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,fe[K].width,fe[K].height,0,Re,me,fe[K].data);for(let ce=0;ce<B.length;ce++){const Le=B[ce].image[K].image;Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Le.width,Le.height,Re,me,Le.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Be,Le.width,Le.height,0,Re,me,Le.data)}}else{Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,me,fe[K]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,Re,me,fe[K]);for(let ce=0;ce<B.length;ce++){const oe=B[ce];Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Re,me,oe.image[K]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Be,Re,me,oe.image[K])}}}u(v)&&c(t.TEXTURE_CUBE_MAP),V.__version=$.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ve(M,v,k,j,$,V){const ye=r.convert(k.format,k.colorSpace),re=r.convert(k.type),pe=S(k.internalFormat,ye,re,k.colorSpace),Ve=n.get(v),Q=n.get(k);if(Q.__renderTarget=v,!Ve.__hasExternalTextures){const fe=Math.max(1,v.width>>V),Te=Math.max(1,v.height>>V);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?i.texImage3D($,V,pe,fe,Te,v.depth,0,ye,re,null):i.texImage2D($,V,pe,fe,Te,0,ye,re,null)}i.bindFramebuffer(t.FRAMEBUFFER,M),ze(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,$,Q.__webglTexture,0,He(v)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,$,Q.__webglTexture,V),i.bindFramebuffer(t.FRAMEBUFFER,null)}function se(M,v,k){if(t.bindRenderbuffer(t.RENDERBUFFER,M),v.depthBuffer){const j=v.depthTexture,$=j&&j.isDepthTexture?j.type:null,V=x(v.stencilBuffer,$),ye=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=He(v);ze(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,V,v.width,v.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,V,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,V,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,M)}else{const j=v.textures;for(let $=0;$<j.length;$++){const V=j[$],ye=r.convert(V.format,V.colorSpace),re=r.convert(V.type),pe=S(V.internalFormat,ye,re,V.colorSpace),Ve=He(v);k&&ze(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,pe,v.width,v.height):ze(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,pe,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,pe,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(t.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const $=j.__webglTexture,V=He(v);if(v.depthTexture.format===gs)ze(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(v.depthTexture.format===vs)ze(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function je(M){const v=n.get(M),k=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const j=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=j}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,M)}else if(k){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=t.createRenderbuffer(),se(v.__webglDepthbuffer[j],M,!1);else{const $=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,V)}}else if(i.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),se(v.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,$)}i.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(M,v,k){const j=n.get(M);v!==void 0&&ve(j.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&je(M)}function ct(M){const v=M.texture,k=n.get(M),j=n.get(v);M.addEventListener("dispose",A);const $=M.textures,V=M.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=v.version,a.memory.textures++),V){k.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[re]=[];for(let pe=0;pe<v.mipmaps.length;pe++)k.__webglFramebuffer[re][pe]=t.createFramebuffer()}else k.__webglFramebuffer[re]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)k.__webglFramebuffer[re]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ye)for(let re=0,pe=$.length;re<pe;re++){const Ve=n.get($[re]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(M.samples>0&&ze(M)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let re=0;re<$.length;re++){const pe=$[re];k.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[re]);const Ve=r.convert(pe.format,pe.colorSpace),Q=r.convert(pe.type),fe=S(pe.internalFormat,Ve,Q,pe.colorSpace,M.isXRRenderTarget===!0),Te=He(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,fe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,k.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),se(k.__webglDepthRenderbuffer,M,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){i.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)ve(k.__webglFramebuffer[re][pe],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe);else ve(k.__webglFramebuffer[re],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);u(v)&&c(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ye){for(let re=0,pe=$.length;re<pe;re++){const Ve=$[re],Q=n.get(Ve);i.bindTexture(t.TEXTURE_2D,Q.__webglTexture),Ne(t.TEXTURE_2D,Ve),ve(k.__webglFramebuffer,M,Ve,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),u(Ve)&&c(t.TEXTURE_2D)}i.unbindTexture()}else{let re=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(re=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(re,j.__webglTexture),Ne(re,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)ve(k.__webglFramebuffer[pe],M,v,t.COLOR_ATTACHMENT0,re,pe);else ve(k.__webglFramebuffer,M,v,t.COLOR_ATTACHMENT0,re,0);u(v)&&c(re),i.unbindTexture()}M.depthBuffer&&je(M)}function at(M){const v=M.textures;for(let k=0,j=v.length;k<j;k++){const $=v[k];if(u($)){const V=b(M),ye=n.get($).__webglTexture;i.bindTexture(V,ye),c(V),i.unbindTexture()}}}const Fe=[],T=[];function Vt(M){if(M.samples>0){if(ze(M)===!1){const v=M.textures,k=M.width,j=M.height;let $=t.COLOR_BUFFER_BIT;const V=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=n.get(M),re=v.length>1;if(re)for(let pe=0;pe<v.length;pe++)i.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Ve=n.get(v[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,k,j,0,0,k,j,$,t.NEAREST),l===!0&&(Fe.length=0,T.length=0,Fe.push(t.COLOR_ATTACHMENT0+pe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Fe.push(V),T.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,T)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let pe=0;pe<v.length;pe++){i.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Ve=n.get(v[pe]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Ve,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function He(M){return Math.min(s.maxSamples,M.samples)}function ze(M){const v=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ee(M){const v=a.render.frame;d.get(M)!==v&&(d.set(M,v),M.update())}function nt(M,v){const k=M.colorSpace,j=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||k!==hn&&k!==Ni&&(We.getTransfer(k)===Qe?(j!==ii||$!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function we(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ze}function M_(t,e){function i(n,s=Ni){let r;const a=We.getTransfer(s);if(n===bi)return t.UNSIGNED_BYTE;if(n===Mo)return t.UNSIGNED_SHORT_4_4_4_4;if(n===So)return t.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return t.BYTE;if(n===Cc)return t.SHORT;if(n===fs)return t.UNSIGNED_SHORT;if(n===Eo)return t.INT;if(n===cn)return t.UNSIGNED_INT;if(n===xi)return t.FLOAT;if(n===Es)return t.HALF_FLOAT;if(n===Pc)return t.ALPHA;if(n===Lc)return t.RGB;if(n===ii)return t.RGBA;if(n===Dc)return t.LUMINANCE;if(n===Ic)return t.LUMINANCE_ALPHA;if(n===gs)return t.DEPTH_COMPONENT;if(n===vs)return t.DEPTH_STENCIL;if(n===Uc)return t.RED;if(n===bo)return t.RED_INTEGER;if(n===Nc)return t.RG;if(n===To)return t.RG_INTEGER;if(n===Ao)return t.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ia||n===Ua||n===Na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Oa||n===Fa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Oa)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Ba||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===ja||n===Ka||n===Ya||n===qa||n===$a||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hr||n===Qa||n===eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hr)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===to||n===io||n===no)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:i}}const S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,n){if(this.texture===null){const s=new Et,r=e.properties.get(s);r.__webglTexture=i.texture,(i.depthNear!==n.depthNear||i.depthFar!==n.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,n=new Ti({vertexShader:S_,fragmentShader:b_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ht(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A_ extends Hn{constructor(e,i){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,p=null,f=null,m=null,g=null;const _=new T_,u=i.getContextAttributes();let c=null,b=null;const S=[],x=[],L=new Ke;let C=null;const A=new zt;A.viewport=new ht;const N=new zt;N.viewport=new ht;const E=[A,N],w=new Kf;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=S[W];return ee===void 0&&(ee=new la,S[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=S[W];return ee===void 0&&(ee=new la,S[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=S[W];return ee===void 0&&(ee=new la,S[W]=ee),ee.getHandSpace()};function z(W){const ee=x.indexOf(W.inputSource);if(ee===-1)return;const ve=S[ee];ve!==void 0&&(ve.update(W.inputSource,W.frame,h||a),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",q);for(let W=0;W<S.length;W++){const ee=x[W];ee!==null&&(x[W]=null,S[W].disconnect(ee))}R=null,G=null,_.reset(),e.setRenderTarget(c),m=null,f=null,p=null,s=null,b=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(c=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",q),u.xrCompatible!==!0&&await i.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,se=null,be=null;u.depth&&(be=u.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ve=u.stencil?vs:gs,se=u.stencil?ms:cn);const je={colorFormat:i.RGBA8,depthFormat:be,scaleFactor:r};p=new XRWebGLBinding(s,i),f=p.createProjectionLayer(je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Gi(f.textureWidth,f.textureHeight,{format:ii,type:bi,depthTexture:new Kc(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,i,ve),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Gi(m.framebufferWidth,m.framebufferHeight,{format:ii,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(W){for(let ee=0;ee<W.removed.length;ee++){const ve=W.removed[ee],se=x.indexOf(ve);se>=0&&(x[se]=null,S[se].disconnect(ve))}for(let ee=0;ee<W.added.length;ee++){const ve=W.added[ee];let se=x.indexOf(ve);if(se===-1){for(let je=0;je<S.length;je++)if(je>=x.length){x.push(ve),se=je;break}else if(x[je]===null){x[je]=ve,se=je;break}if(se===-1)break}const be=S[se];be&&be.connect(ve)}}const X=new U,Z=new U;function H(W,ee,ve){X.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const se=X.distanceTo(Z),be=ee.projectionMatrix.elements,je=ve.projectionMatrix.elements,Ae=be[14]/(be[10]-1),ct=be[14]/(be[10]+1),at=(be[9]+1)/be[5],Fe=(be[9]-1)/be[5],T=(be[8]-1)/be[0],Vt=(je[8]+1)/je[0],He=Ae*T,ze=Ae*Vt,Ee=se/(-T+Vt),nt=Ee*-T;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(nt),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const we=Ae+Ee,M=ct+Ee,v=He-nt,k=ze+(se-nt),j=at*ct/M*we,$=Fe*ct/M*we;W.projectionMatrix.makePerspective(v,k,j,$,we,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ne(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ee=W.near,ve=W.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),w.near=N.near=A.near=ee,w.far=N.far=A.far=ve,(R!==w.near||G!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,G=w.far),A.layers.mask=W.layers.mask|2,N.layers.mask=W.layers.mask|4,w.layers.mask=A.layers.mask|N.layers.mask;const se=W.parent,be=w.cameras;ne(w,se);for(let je=0;je<be.length;je++)ne(be[je],se);be.length===2?H(w,A,N):w.projectionMatrix.copy(A.projectionMatrix),ue(W,w,se)};function ue(W,ee,ve){ve===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=_s*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let xe=null;function Ne(W,ee){if(d=ee.getViewerPose(h||a),g=ee,d!==null){const ve=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let se=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,se=!0);for(let Ae=0;Ae<ve.length;Ae++){const ct=ve[Ae];let at=null;if(m!==null)at=m.getViewport(ct);else{const T=p.getViewSubImage(f,ct);at=T.viewport,Ae===0&&(e.setRenderTargetTextures(b,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(b))}let Fe=E[Ae];Fe===void 0&&(Fe=new zt,Fe.layers.enable(Ae),Fe.viewport=new ht,E[Ae]=Fe),Fe.matrix.fromArray(ct.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ct.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(at.x,at.y,at.width,at.height),Ae===0&&(w.matrix.copy(Fe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),se===!0&&w.cameras.push(Fe)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){const Ae=p.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,s.renderState)}}for(let ve=0;ve<S.length;ve++){const se=x[ve],be=S[ve];se!==null&&be!==void 0&&be.update(se,ee,h||a)}xe&&xe(W,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const tt=new Yc;tt.setAnimationLoop(Ne),this.setAnimationLoop=function(W){xe=W},this.dispose=function(){}}}const tn=new ui,C_=new et;function R_(t,e){function i(u,c){u.matrixAutoUpdate===!0&&u.updateMatrix(),c.value.copy(u.matrix)}function n(u,c){c.color.getRGB(u.fogColor.value,Wc(t)),c.isFog?(u.fogNear.value=c.near,u.fogFar.value=c.far):c.isFogExp2&&(u.fogDensity.value=c.density)}function s(u,c,b,S,x){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(u,c):c.isMeshToonMaterial?(r(u,c),p(u,c)):c.isMeshPhongMaterial?(r(u,c),d(u,c)):c.isMeshStandardMaterial?(r(u,c),f(u,c),c.isMeshPhysicalMaterial&&m(u,c,x)):c.isMeshMatcapMaterial?(r(u,c),g(u,c)):c.isMeshDepthMaterial?r(u,c):c.isMeshDistanceMaterial?(r(u,c),_(u,c)):c.isMeshNormalMaterial?r(u,c):c.isLineBasicMaterial?(a(u,c),c.isLineDashedMaterial&&o(u,c)):c.isPointsMaterial?l(u,c,b,S):c.isSpriteMaterial?h(u,c):c.isShadowMaterial?(u.color.value.copy(c.color),u.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(u,c){u.opacity.value=c.opacity,c.color&&u.diffuse.value.copy(c.color),c.emissive&&u.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(u.map.value=c.map,i(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,i(c.alphaMap,u.alphaMapTransform)),c.bumpMap&&(u.bumpMap.value=c.bumpMap,i(c.bumpMap,u.bumpMapTransform),u.bumpScale.value=c.bumpScale,c.side===It&&(u.bumpScale.value*=-1)),c.normalMap&&(u.normalMap.value=c.normalMap,i(c.normalMap,u.normalMapTransform),u.normalScale.value.copy(c.normalScale),c.side===It&&u.normalScale.value.negate()),c.displacementMap&&(u.displacementMap.value=c.displacementMap,i(c.displacementMap,u.displacementMapTransform),u.displacementScale.value=c.displacementScale,u.displacementBias.value=c.displacementBias),c.emissiveMap&&(u.emissiveMap.value=c.emissiveMap,i(c.emissiveMap,u.emissiveMapTransform)),c.specularMap&&(u.specularMap.value=c.specularMap,i(c.specularMap,u.specularMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest);const b=e.get(c),S=b.envMap,x=b.envMapRotation;S&&(u.envMap.value=S,tn.copy(x),tn.x*=-1,tn.y*=-1,tn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(tn.y*=-1,tn.z*=-1),u.envMapRotation.value.setFromMatrix4(C_.makeRotationFromEuler(tn)),u.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=c.reflectivity,u.ior.value=c.ior,u.refractionRatio.value=c.refractionRatio),c.lightMap&&(u.lightMap.value=c.lightMap,u.lightMapIntensity.value=c.lightMapIntensity,i(c.lightMap,u.lightMapTransform)),c.aoMap&&(u.aoMap.value=c.aoMap,u.aoMapIntensity.value=c.aoMapIntensity,i(c.aoMap,u.aoMapTransform))}function a(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,c.map&&(u.map.value=c.map,i(c.map,u.mapTransform))}function o(u,c){u.dashSize.value=c.dashSize,u.totalSize.value=c.dashSize+c.gapSize,u.scale.value=c.scale}function l(u,c,b,S){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.size.value=c.size*b,u.scale.value=S*.5,c.map&&(u.map.value=c.map,i(c.map,u.uvTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,i(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function h(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.rotation.value=c.rotation,c.map&&(u.map.value=c.map,i(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,i(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function d(u,c){u.specular.value.copy(c.specular),u.shininess.value=Math.max(c.shininess,1e-4)}function p(u,c){c.gradientMap&&(u.gradientMap.value=c.gradientMap)}function f(u,c){u.metalness.value=c.metalness,c.metalnessMap&&(u.metalnessMap.value=c.metalnessMap,i(c.metalnessMap,u.metalnessMapTransform)),u.roughness.value=c.roughness,c.roughnessMap&&(u.roughnessMap.value=c.roughnessMap,i(c.roughnessMap,u.roughnessMapTransform)),c.envMap&&(u.envMapIntensity.value=c.envMapIntensity)}function m(u,c,b){u.ior.value=c.ior,c.sheen>0&&(u.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),u.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(u.sheenColorMap.value=c.sheenColorMap,i(c.sheenColorMap,u.sheenColorMapTransform)),c.sheenRoughnessMap&&(u.sheenRoughnessMap.value=c.sheenRoughnessMap,i(c.sheenRoughnessMap,u.sheenRoughnessMapTransform))),c.clearcoat>0&&(u.clearcoat.value=c.clearcoat,u.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(u.clearcoatMap.value=c.clearcoatMap,i(c.clearcoatMap,u.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,i(c.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(u.clearcoatNormalMap.value=c.clearcoatNormalMap,i(c.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===It&&u.clearcoatNormalScale.value.negate())),c.dispersion>0&&(u.dispersion.value=c.dispersion),c.iridescence>0&&(u.iridescence.value=c.iridescence,u.iridescenceIOR.value=c.iridescenceIOR,u.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(u.iridescenceMap.value=c.iridescenceMap,i(c.iridescenceMap,u.iridescenceMapTransform)),c.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=c.iridescenceThicknessMap,i(c.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),c.transmission>0&&(u.transmission.value=c.transmission,u.transmissionSamplerMap.value=b.texture,u.transmissionSamplerSize.value.set(b.width,b.height),c.transmissionMap&&(u.transmissionMap.value=c.transmissionMap,i(c.transmissionMap,u.transmissionMapTransform)),u.thickness.value=c.thickness,c.thicknessMap&&(u.thicknessMap.value=c.thicknessMap,i(c.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=c.attenuationDistance,u.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(u.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(u.anisotropyMap.value=c.anisotropyMap,i(c.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=c.specularIntensity,u.specularColor.value.copy(c.specularColor),c.specularColorMap&&(u.specularColorMap.value=c.specularColorMap,i(c.specularColorMap,u.specularColorMapTransform)),c.specularIntensityMap&&(u.specularIntensityMap.value=c.specularIntensityMap,i(c.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,c){c.matcap&&(u.matcap.value=c.matcap)}function _(u,c){const b=e.get(c).light;u.referencePosition.value.setFromMatrixPosition(b.matrixWorld),u.nearDistance.value=b.shadow.camera.near,u.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P_(t,e,i,n){let s={},r={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const x=S.program;n.uniformBlockBinding(b,x)}function h(b,S){let x=s[b.id];x===void 0&&(g(b),x=d(b),s[b.id]=x,b.addEventListener("dispose",u));const L=S.program;n.updateUBOMapping(b,L);const C=e.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function d(b){const S=p();b.__bindingPointIndex=S;const x=t.createBuffer(),L=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,x),x}function p(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=s[b.id],x=b.uniforms,L=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,A=x.length;C<A;C++){const N=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,w=N.length;E<w;E++){const R=N[E];if(m(R,C,E,L)===!0){const G=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let q=0;q<z.length;q++){const X=z[q],Z=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,G+Y,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,S,x,L){const C=b.value,A=S+"_"+x;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const N=L[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return L[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(b){const S=b.uniforms;let x=0;const L=16;for(let A=0,N=S.length;A<N;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,R=E.length;w<R;w++){const G=E[w],z=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,q=z.length;Y<q;Y++){const X=z[Y],Z=_(X),H=x%L,ne=H%Z.boundary,ue=H+ne;x+=ne,ue!==0&&L-ue<Z.storage&&(x+=L-ue),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Z.storage}}}const C=x%L;return C>0&&(x+=L-C),b.__size=x,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function u(b){const S=b.target;S.removeEventListener("dispose",u);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function c(){for(const b in s)t.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:h,dispose:c}}class L_{constructor(e={}){const{canvas:i=df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let u=null,c=null;const b=[],S=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let L=!1;this._outputColorSpace=Kt;let C=0,A=0,N=null,E=-1,w=null;const R=new ht,G=new ht;let z=null;const Y=new Je(0);let q=0,X=i.width,Z=i.height,H=1,ne=null,ue=null;const xe=new ht(0,0,X,Z),Ne=new ht(0,0,X,Z);let tt=!1;const W=new Do;let ee=!1,ve=!1;const se=new et,be=new et,je=new U,Ae=new ht,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Fe(){return N===null?H:1}let T=n;function Vt(y,D){return i.getContext(y,D)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xo}`),i.addEventListener("webglcontextlost",K,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",oe,!1),T===null){const D="webgl2";if(T=Vt(D,y),T===null)throw Vt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let He,ze,Ee,nt,we,M,v,k,j,$,V,ye,re,pe,Ve,Q,fe,Te,Re,me,Be,Ie,it,P;function ae(){He=new Hv(T),He.init(),Ie=new M_(T,He),ze=new Uv(T,He,e,Ie),Ee=new x_(T,He),ze.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),nt=new Wv(T),we=new l_,M=new E_(T,He,Ee,we,ze,Ie,nt),v=new kv(x),k=new Bv(x),j=new $f(T),it=new Dv(T,j),$=new Vv(T,j,nt,it),V=new jv(T,$,j,nt),Re=new Xv(T,ze,M),Q=new Nv(we),ye=new o_(x,v,k,He,ze,it,Q),re=new R_(x,we),pe=new h_,Ve=new g_(He),Te=new Lv(x,v,k,Ee,V,m,l),fe=new y_(x,V,ze),P=new P_(T,nt,ze,Ee),me=new Iv(T,He,nt),Be=new Gv(T,He,nt),nt.programs=ye.programs,x.capabilities=ze,x.extensions=He,x.properties=we,x.renderLists=pe,x.shadowMap=fe,x.state=Ee,x.info=nt}ae();const B=new A_(x,T);this.xr=B,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=He.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=He.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(X,Z,!1))},this.getSize=function(y){return y.set(X,Z)},this.setSize=function(y,D,O=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,Z=D,i.width=Math.floor(y*H),i.height=Math.floor(D*H),O===!0&&(i.style.width=y+"px",i.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(X*H,Z*H).floor()},this.setDrawingBufferSize=function(y,D,O){X=y,Z=D,H=O,i.width=Math.floor(y*O),i.height=Math.floor(D*O),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,D,O,F){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,D,O,F),Ee.viewport(R.copy(xe).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Ne)},this.setScissor=function(y,D,O,F){y.isVector4?Ne.set(y.x,y.y,y.z,y.w):Ne.set(y,D,O,F),Ee.scissor(G.copy(Ne).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(y){Ee.setScissorTest(tt=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){ue=y},this.getClearColor=function(y){return y.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,O=!0){let F=0;if(y){let I=!1;if(N!==null){const J=N.texture.format;I=J===Ao||J===To||J===bo}if(I){const J=N.texture.type,ie=J===bi||J===cn||J===fs||J===ms||J===Mo||J===So,de=Te.getClearColor(),ge=Te.getClearAlpha(),Pe=de.r,Ce=de.g,Me=de.b;ie?(g[0]=Pe,g[1]=Ce,g[2]=Me,g[3]=ge,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Pe,_[1]=Ce,_[2]=Me,_[3]=ge,T.clearBufferiv(T.COLOR,0,_))}else F|=T.COLOR_BUFFER_BIT}D&&(F|=T.DEPTH_BUFFER_BIT),O&&(F|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",K,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",oe,!1),Te.dispose(),pe.dispose(),Ve.dispose(),we.dispose(),v.dispose(),k.dispose(),V.dispose(),it.dispose(),P.dispose(),ye.dispose(),B.dispose(),B.removeEventListener("sessionstart",$o),B.removeEventListener("sessionend",Zo),Yi.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=nt.autoReset,D=fe.enabled,O=fe.autoUpdate,F=fe.needsUpdate,I=fe.type;ae(),nt.autoReset=y,fe.enabled=D,fe.autoUpdate=O,fe.needsUpdate=F,fe.type=I}function oe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Le(y){const D=y.target;D.removeEventListener("dispose",Le),ot(D)}function ot(y){Mt(y),we.remove(y)}function Mt(y){const D=we.get(y).programs;D!==void 0&&(D.forEach(function(O){ye.releaseProgram(O)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,O,F,I,J){D===null&&(D=ct);const ie=I.isMesh&&I.matrixWorld.determinant()<0,de=tp(y,D,O,F,I);Ee.setMaterial(F,ie);let ge=O.index,Pe=1;if(F.wireframe===!0){if(ge=$.getWireframeAttribute(O),ge===void 0)return;Pe=2}const Ce=O.drawRange,Me=O.attributes.position;let Ge=Ce.start*Pe,Ye=(Ce.start+Ce.count)*Pe;J!==null&&(Ge=Math.max(Ge,J.start*Pe),Ye=Math.min(Ye,(J.start+J.count)*Pe)),ge!==null?(Ge=Math.max(Ge,0),Ye=Math.min(Ye,ge.count)):Me!=null&&(Ge=Math.max(Ge,0),Ye=Math.min(Ye,Me.count));const dt=Ye-Ge;if(dt<0||dt===1/0)return;it.setup(I,F,de,O,ge);let lt,Xe=me;if(ge!==null&&(lt=j.get(ge),Xe=Be,Xe.setIndex(lt)),I.isMesh)F.wireframe===!0?(Ee.setLineWidth(F.wireframeLinewidth*Fe()),Xe.setMode(T.LINES)):Xe.setMode(T.TRIANGLES);else if(I.isLine){let Se=F.linewidth;Se===void 0&&(Se=1),Ee.setLineWidth(Se*Fe()),I.isLineSegments?Xe.setMode(T.LINES):I.isLineLoop?Xe.setMode(T.LINE_LOOP):Xe.setMode(T.LINE_STRIP)}else I.isPoints?Xe.setMode(T.POINTS):I.isSprite&&Xe.setMode(T.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Xe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Se=I._multiDrawStarts,yt=I._multiDrawCounts,qe=I._multiDrawCount,$t=ge?j.get(ge).bytesPerElement:1,un=we.get(F).currentProgram.getUniforms();for(let Nt=0;Nt<qe;Nt++)un.setValue(T,"_gl_DrawID",Nt),Xe.render(Se[Nt]/$t,yt[Nt])}else if(I.isInstancedMesh)Xe.renderInstances(Ge,dt,I.count);else if(O.isInstancedBufferGeometry){const Se=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,yt=Math.min(O.instanceCount,Se);Xe.renderInstances(Ge,dt,yt)}else Xe.render(Ge,dt)};function Ze(y,D,O){y.transparent===!0&&y.side===wi&&y.forceSinglePass===!1?(y.side=It,y.needsUpdate=!0,Ns(y,D,O),y.side=Vi,y.needsUpdate=!0,Ns(y,D,O),y.side=wi):Ns(y,D,O)}this.compile=function(y,D,O=null){O===null&&(O=y),c=Ve.get(O),c.init(D),S.push(c),O.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(c.pushLight(I),I.castShadow&&c.pushShadow(I))}),y!==O&&y.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(c.pushLight(I),I.castShadow&&c.pushShadow(I))}),c.setupLights();const F=new Set;return y.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let ie=0;ie<J.length;ie++){const de=J[ie];Ze(de,O,I),F.add(de)}else Ze(J,O,I),F.add(J)}),c=S.pop(),F},this.compileAsync=function(y,D,O=null){const F=this.compile(y,D,O);return new Promise(I=>{function J(){if(F.forEach(function(ie){we.get(ie).currentProgram.isReady()&&F.delete(ie)}),F.size===0){I(y);return}setTimeout(J,10)}He.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let qt=null;function pi(y){qt&&qt(y)}function $o(){Yi.stop()}function Zo(){Yi.start()}const Yi=new Yc;Yi.setAnimationLoop(pi),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(y){qt=y,B.setAnimationLoop(y),y===null?Yi.stop():Yi.start()},B.addEventListener("sessionstart",$o),B.addEventListener("sessionend",Zo),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(D),D=B.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,D,N),c=Ve.get(y,S.length),c.init(D),S.push(c),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(be),ve=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,ve),u=pe.get(y,b.length),u.init(),b.push(u),B.enabled===!0&&B.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&Br(J,D,-1/0,x.sortObjects)}Br(y,D,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(ne,ue),at=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,at&&Te.addToRenderList(u,y),this.info.render.frame++,ee===!0&&Q.beginShadows();const O=c.state.shadowsArray;fe.render(O,y,D),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=u.opaque,I=u.transmissive;if(c.setupLights(),D.isArrayCamera){const J=D.cameras;if(I.length>0)for(let ie=0,de=J.length;ie<de;ie++){const ge=J[ie];Qo(F,I,y,ge)}at&&Te.render(y);for(let ie=0,de=J.length;ie<de;ie++){const ge=J[ie];Jo(u,y,ge,ge.viewport)}}else I.length>0&&Qo(F,I,y,D),at&&Te.render(y),Jo(u,y,D);N!==null&&A===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(x,y,D),it.resetDefaultState(),E=-1,w=null,S.pop(),S.length>0?(c=S[S.length-1],ee===!0&&Q.setGlobalState(x.clippingPlanes,c.state.camera)):c=null,b.pop(),b.length>0?u=b[b.length-1]:u=null};function Br(y,D,O,F){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)c.pushLight(y),y.castShadow&&c.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){F&&Ae.setFromMatrixPosition(y.matrixWorld).applyMatrix4(be);const ie=V.update(y),de=y.material;de.visible&&u.push(y,ie,de,O,Ae.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const ie=V.update(y),de=y.material;if(F&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ae.copy(y.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Ae.copy(ie.boundingSphere.center)),Ae.applyMatrix4(y.matrixWorld).applyMatrix4(be)),Array.isArray(de)){const ge=ie.groups;for(let Pe=0,Ce=ge.length;Pe<Ce;Pe++){const Me=ge[Pe],Ge=de[Me.materialIndex];Ge&&Ge.visible&&u.push(y,ie,Ge,O,Ae.z,Me)}}else de.visible&&u.push(y,ie,de,O,Ae.z,null)}}const J=y.children;for(let ie=0,de=J.length;ie<de;ie++)Br(J[ie],D,O,F)}function Jo(y,D,O,F){const I=y.opaque,J=y.transmissive,ie=y.transparent;c.setupLightsView(O),ee===!0&&Q.setGlobalState(x.clippingPlanes,O),F&&Ee.viewport(R.copy(F)),I.length>0&&Us(I,D,O),J.length>0&&Us(J,D,O),ie.length>0&&Us(ie,D,O),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Qo(y,D,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[F.id]===void 0&&(c.state.transmissionRenderTarget[F.id]=new Gi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Es:bi,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const J=c.state.transmissionRenderTarget[F.id],ie=F.viewport||R;J.setSize(ie.z*x.transmissionResolutionScale,ie.w*x.transmissionResolutionScale);const de=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(Y),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),at&&Te.render(O);const ge=x.toneMapping;x.toneMapping=Fi;const Pe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),c.setupLightsView(F),ee===!0&&Q.setGlobalState(x.clippingPlanes,F),Us(y,O,F),M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Me=0,Ge=D.length;Me<Ge;Me++){const Ye=D[Me],dt=Ye.object,lt=Ye.geometry,Xe=Ye.material,Se=Ye.group;if(Xe.side===wi&&dt.layers.test(F.layers)){const yt=Xe.side;Xe.side=It,Xe.needsUpdate=!0,el(dt,O,F,lt,Xe,Se),Xe.side=yt,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J))}x.setRenderTarget(de),x.setClearColor(Y,q),Pe!==void 0&&(F.viewport=Pe),x.toneMapping=ge}function Us(y,D,O){const F=D.isScene===!0?D.overrideMaterial:null;for(let I=0,J=y.length;I<J;I++){const ie=y[I],de=ie.object,ge=ie.geometry,Pe=ie.group;let Ce=ie.material;Ce.allowOverride===!0&&F!==null&&(Ce=F),de.layers.test(O.layers)&&el(de,D,O,ge,Ce,Pe)}}function el(y,D,O,F,I,J){y.onBeforeRender(x,D,O,F,I,J),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.onBeforeRender(x,D,O,F,y,J),I.transparent===!0&&I.side===wi&&I.forceSinglePass===!1?(I.side=It,I.needsUpdate=!0,x.renderBufferDirect(O,D,F,I,y,J),I.side=Vi,I.needsUpdate=!0,x.renderBufferDirect(O,D,F,I,y,J),I.side=wi):x.renderBufferDirect(O,D,F,I,y,J),y.onAfterRender(x,D,O,F,I,J)}function Ns(y,D,O){D.isScene!==!0&&(D=ct);const F=we.get(y),I=c.state.lights,J=c.state.shadowsArray,ie=I.state.version,de=ye.getParameters(y,I.state,J,D,O),ge=ye.getProgramCacheKey(de);let Pe=F.programs;F.environment=y.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(y.isMeshStandardMaterial?k:v).get(y.envMap||F.environment),F.envMapRotation=F.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",Le),Pe=new Map,F.programs=Pe);let Ce=Pe.get(ge);if(Ce!==void 0){if(F.currentProgram===Ce&&F.lightsStateVersion===ie)return il(y,de),Ce}else de.uniforms=ye.getUniforms(y),y.onBeforeCompile(de,x),Ce=ye.acquireProgram(de,ge),Pe.set(ge,Ce),F.uniforms=de.uniforms;const Me=F.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=Q.uniform),il(y,de),F.needsLights=np(y),F.lightsStateVersion=ie,F.needsLights&&(Me.ambientLightColor.value=I.state.ambient,Me.lightProbe.value=I.state.probe,Me.directionalLights.value=I.state.directional,Me.directionalLightShadows.value=I.state.directionalShadow,Me.spotLights.value=I.state.spot,Me.spotLightShadows.value=I.state.spotShadow,Me.rectAreaLights.value=I.state.rectArea,Me.ltc_1.value=I.state.rectAreaLTC1,Me.ltc_2.value=I.state.rectAreaLTC2,Me.pointLights.value=I.state.point,Me.pointLightShadows.value=I.state.pointShadow,Me.hemisphereLights.value=I.state.hemi,Me.directionalShadowMap.value=I.state.directionalShadowMap,Me.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Me.spotShadowMap.value=I.state.spotShadowMap,Me.spotLightMatrix.value=I.state.spotLightMatrix,Me.spotLightMap.value=I.state.spotLightMap,Me.pointShadowMap.value=I.state.pointShadowMap,Me.pointShadowMatrix.value=I.state.pointShadowMatrix),F.currentProgram=Ce,F.uniformsList=null,Ce}function tl(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=ur.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function il(y,D){const O=we.get(y);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function tp(y,D,O,F,I){D.isScene!==!0&&(D=ct),M.resetTextureUnits();const J=D.fog,ie=F.isMeshStandardMaterial?D.environment:null,de=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:hn,ge=(F.isMeshStandardMaterial?k:v).get(F.envMap||ie),Pe=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Me=!!O.morphAttributes.position,Ge=!!O.morphAttributes.normal,Ye=!!O.morphAttributes.color;let dt=Fi;F.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(dt=x.toneMapping);const lt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Xe=lt!==void 0?lt.length:0,Se=we.get(F),yt=c.state.lights;if(ee===!0&&(ve===!0||y!==w)){const At=y===w&&F.id===E;Q.setState(F,y,At)}let qe=!1;F.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==yt.state.version||Se.outputColorSpace!==de||I.isBatchedMesh&&Se.batching===!1||!I.isBatchedMesh&&Se.batching===!0||I.isBatchedMesh&&Se.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Se.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Se.instancing===!1||!I.isInstancedMesh&&Se.instancing===!0||I.isSkinnedMesh&&Se.skinning===!1||!I.isSkinnedMesh&&Se.skinning===!0||I.isInstancedMesh&&Se.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Se.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Se.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Se.instancingMorph===!1&&I.morphTexture!==null||Se.envMap!==ge||F.fog===!0&&Se.fog!==J||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Q.numPlanes||Se.numIntersection!==Q.numIntersection)||Se.vertexAlphas!==Pe||Se.vertexTangents!==Ce||Se.morphTargets!==Me||Se.morphNormals!==Ge||Se.morphColors!==Ye||Se.toneMapping!==dt||Se.morphTargetsCount!==Xe)&&(qe=!0):(qe=!0,Se.__version=F.version);let $t=Se.currentProgram;qe===!0&&($t=Ns(F,D,I));let un=!1,Nt=!1,Xn=!1;const st=$t.getUniforms(),Gt=Se.uniforms;if(Ee.useProgram($t.program)&&(un=!0,Nt=!0,Xn=!0),F.id!==E&&(E=F.id,Nt=!0),un||w!==y){Ee.buffers.depth.getReversed()?(se.copy(y.projectionMatrix),pf(se),ff(se),st.setValue(T,"projectionMatrix",se)):st.setValue(T,"projectionMatrix",y.projectionMatrix),st.setValue(T,"viewMatrix",y.matrixWorldInverse);const Dt=st.map.cameraPosition;Dt!==void 0&&Dt.setValue(T,je.setFromMatrixPosition(y.matrixWorld)),ze.logarithmicDepthBuffer&&st.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&st.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),w!==y&&(w=y,Nt=!0,Xn=!0)}if(I.isSkinnedMesh){st.setOptional(T,I,"bindMatrix"),st.setOptional(T,I,"bindMatrixInverse");const At=I.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),st.setValue(T,"boneTexture",At.boneTexture,M))}I.isBatchedMesh&&(st.setOptional(T,I,"batchingTexture"),st.setValue(T,"batchingTexture",I._matricesTexture,M),st.setOptional(T,I,"batchingIdTexture"),st.setValue(T,"batchingIdTexture",I._indirectTexture,M),st.setOptional(T,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(T,"batchingColorTexture",I._colorsTexture,M));const Wt=O.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Re.update(I,O,$t),(Nt||Se.receiveShadow!==I.receiveShadow)&&(Se.receiveShadow=I.receiveShadow,st.setValue(T,"receiveShadow",I.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Gt.envMap.value=ge,Gt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(Gt.envMapIntensity.value=D.environmentIntensity),Nt&&(st.setValue(T,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&ip(Gt,Xn),J&&F.fog===!0&&re.refreshFogUniforms(Gt,J),re.refreshMaterialUniforms(Gt,F,H,Z,c.state.transmissionRenderTarget[y.id]),ur.upload(T,tl(Se),Gt,M)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ur.upload(T,tl(Se),Gt,M),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&st.setValue(T,"center",I.center),st.setValue(T,"modelViewMatrix",I.modelViewMatrix),st.setValue(T,"normalMatrix",I.normalMatrix),st.setValue(T,"modelMatrix",I.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const At=F.uniformsGroups;for(let Dt=0,Hr=At.length;Dt<Hr;Dt++){const qi=At[Dt];P.update(qi,$t),P.bind(qi,$t)}}return $t}function ip(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function np(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,D,O){const F=we.get(y);F.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),we.get(y.texture).__webglTexture=D,we.get(y.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:O,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){const O=we.get(y);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const sp=T.createFramebuffer();this.setRenderTarget=function(y,D=0,O=0){N=y,C=D,A=O;let F=!0,I=null,J=!1,ie=!1;if(y){const ge=we.get(y);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(T.FRAMEBUFFER,null),F=!1;else if(ge.__webglFramebuffer===void 0)M.setupRenderTarget(y);else if(ge.__hasExternalTextures)M.rebindTextures(y,we.get(y.texture).__webglTexture,we.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Me=y.depthTexture;if(ge.__boundDepthTexture!==Me){if(Me!==null&&we.has(Me)&&(y.width!==Me.image.width||y.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(y)}}const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ie=!0);const Ce=we.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?I=Ce[D][O]:I=Ce[D],J=!0):y.samples>0&&M.useMultisampledRTT(y)===!1?I=we.get(y).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[O]:I=Ce,R.copy(y.viewport),G.copy(y.scissor),z=y.scissorTest}else R.copy(xe).multiplyScalar(H).floor(),G.copy(Ne).multiplyScalar(H).floor(),z=tt;if(O!==0&&(I=sp),Ee.bindFramebuffer(T.FRAMEBUFFER,I)&&F&&Ee.drawBuffers(y,I),Ee.viewport(R),Ee.scissor(G),Ee.setScissorTest(z),J){const ge=we.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,O)}else if(ie){const ge=we.get(y.texture),Pe=D;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ge.__webglTexture,O,Pe)}else if(y!==null&&O!==0){const ge=we.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ge.__webglTexture,O)}E=-1},this.readRenderTargetPixels=function(y,D,O,F,I,J,ie){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ie!==void 0&&(de=de[ie]),de){Ee.bindFramebuffer(T.FRAMEBUFFER,de);try{const ge=y.texture,Pe=ge.format,Ce=ge.type;if(!ze.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-F&&O>=0&&O<=y.height-I&&T.readPixels(D,O,F,I,Ie.convert(Pe),Ie.convert(Ce),J)}finally{const ge=N!==null?we.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(T.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(y,D,O,F,I,J,ie){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ie!==void 0&&(de=de[ie]),de)if(D>=0&&D<=y.width-F&&O>=0&&O<=y.height-I){Ee.bindFramebuffer(T.FRAMEBUFFER,de);const ge=y.texture,Pe=ge.format,Ce=ge.type;if(!ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Me),T.bufferData(T.PIXEL_PACK_BUFFER,J.byteLength,T.STREAM_READ),T.readPixels(D,O,F,I,Ie.convert(Pe),Ie.convert(Ce),0);const Ge=N!==null?we.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(T.FRAMEBUFFER,Ge);const Ye=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await uf(T,Ye,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Me),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,J),T.deleteBuffer(Me),T.deleteSync(Ye),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,O=0){const F=Math.pow(2,-O),I=Math.floor(y.image.width*F),J=Math.floor(y.image.height*F),ie=D!==null?D.x:0,de=D!==null?D.y:0;M.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,O,0,0,ie,de,I,J),Ee.unbindTexture()};const rp=T.createFramebuffer(),ap=T.createFramebuffer();this.copyTextureToTexture=function(y,D,O=null,F=null,I=0,J=null){J===null&&(I!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let ie,de,ge,Pe,Ce,Me,Ge,Ye,dt;const lt=y.isCompressedTexture?y.mipmaps[J]:y.image;if(O!==null)ie=O.max.x-O.min.x,de=O.max.y-O.min.y,ge=O.isBox3?O.max.z-O.min.z:1,Pe=O.min.x,Ce=O.min.y,Me=O.isBox3?O.min.z:0;else{const Wt=Math.pow(2,-I);ie=Math.floor(lt.width*Wt),de=Math.floor(lt.height*Wt),y.isDataArrayTexture?ge=lt.depth:y.isData3DTexture?ge=Math.floor(lt.depth*Wt):ge=1,Pe=0,Ce=0,Me=0}F!==null?(Ge=F.x,Ye=F.y,dt=F.z):(Ge=0,Ye=0,dt=0);const Xe=Ie.convert(D.format),Se=Ie.convert(D.type);let yt;D.isData3DTexture?(M.setTexture3D(D,0),yt=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(M.setTexture2DArray(D,0),yt=T.TEXTURE_2D_ARRAY):(M.setTexture2D(D,0),yt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const qe=T.getParameter(T.UNPACK_ROW_LENGTH),$t=T.getParameter(T.UNPACK_IMAGE_HEIGHT),un=T.getParameter(T.UNPACK_SKIP_PIXELS),Nt=T.getParameter(T.UNPACK_SKIP_ROWS),Xn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,lt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,lt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ce),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Me);const st=y.isDataArrayTexture||y.isData3DTexture,Gt=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const Wt=we.get(y),At=we.get(D),Dt=we.get(Wt.__renderTarget),Hr=we.get(At.__renderTarget);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let qi=0;qi<ge;qi++)st&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,we.get(y).__webglTexture,I,Me+qi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,we.get(D).__webglTexture,J,dt+qi)),T.blitFramebuffer(Pe,Ce,ie,de,Ge,Ye,ie,de,T.DEPTH_BUFFER_BIT,T.NEAREST);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(I!==0||y.isRenderTargetTexture||we.has(y)){const Wt=we.get(y),At=we.get(D);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,rp),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,ap);for(let Dt=0;Dt<ge;Dt++)st?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Wt.__webglTexture,I,Me+Dt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Wt.__webglTexture,I),Gt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.__webglTexture,J,dt+Dt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,At.__webglTexture,J),I!==0?T.blitFramebuffer(Pe,Ce,ie,de,Ge,Ye,ie,de,T.COLOR_BUFFER_BIT,T.NEAREST):Gt?T.copyTexSubImage3D(yt,J,Ge,Ye,dt+Dt,Pe,Ce,ie,de):T.copyTexSubImage2D(yt,J,Ge,Ye,Pe,Ce,ie,de);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Gt?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(yt,J,Ge,Ye,dt,ie,de,ge,Xe,Se,lt.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(yt,J,Ge,Ye,dt,ie,de,ge,Xe,lt.data):T.texSubImage3D(yt,J,Ge,Ye,dt,ie,de,ge,Xe,Se,lt):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,J,Ge,Ye,ie,de,Xe,Se,lt.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,J,Ge,Ye,lt.width,lt.height,Xe,lt.data):T.texSubImage2D(T.TEXTURE_2D,J,Ge,Ye,ie,de,Xe,Se,lt);T.pixelStorei(T.UNPACK_ROW_LENGTH,qe),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,$t),T.pixelStorei(T.UNPACK_SKIP_PIXELS,un),T.pixelStorei(T.UNPACK_SKIP_ROWS,Nt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xn),J===0&&D.generateMipmaps&&T.generateMipmap(yt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(y,D,O=null,F=null,I=0){return dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,O,F,I)},this.initRenderTarget=function(y){we.get(y).__webglFramebuffer===void 0&&M.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),Ee.unbindTexture()},this.resetState=function(){C=0,A=0,N=null,Ee.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),i.unpackColorSpace=We._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.13.3
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var D_=Object.defineProperty,No=(t,e)=>{for(var i in e)D_(t,i,{get:e[i],enumerable:!0})},ys={};No(ys,{ACTIONS:()=>sh,ANIMATION_MIN_DURATION:()=>oo,CAPTURE_EVENTS_CLASS:()=>As,CTRLZOOM_TIMEOUT:()=>nh,DBLCLICK_DELAY:()=>eh,EASINGS:()=>pr,ICONS:()=>si,IDS:()=>wt,KEY_CODES:()=>vt,LONGTOUCH_DELAY:()=>th,MOVE_THRESHOLD:()=>Qc,SPHERE_RADIUS:()=>dn,TWOFINGERSOVERLAY_DELAY:()=>ih,VIEWER_DATA:()=>Wi});var I_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,U_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',N_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,k_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,O_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,F_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,z_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,B_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,H_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,oo=500,Qc=4,eh=300,th=500,ih=100,nh=2e3,dn=10,Wi="photoSphereViewer",As="psv--capture-event",sh=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(sh||{}),wt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},vt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},si={arrow:I_,close:U_,download:N_,fullscreenIn:k_,fullscreenOut:O_,info:F_,menu:z_,zoomIn:B_,zoomOut:H_},pr={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},he={};No(he,{Animation:()=>Sr,Dynamic:()=>Qn,MultiDynamic:()=>Ah,PressHandler:()=>kr,Slider:()=>Rh,SliderDirection:()=>Ch,addClasses:()=>ko,angle:()=>ah,applyEulerInverse:()=>po,checkClosedShadowDom:()=>bh,checkStylesheet:()=>Sh,checkVersion:()=>Ho,cleanCssPosition:()=>Eh,clone:()=>Ir,createTexture:()=>uo,cssPositionIsOrdered:()=>Bo,dasherize:()=>j_,deepEqual:()=>yh,deepmerge:()=>vh,distance:()=>rh,exitFullscreen:()=>mh,firstNonNull:()=>Ui,getAbortError:()=>co,getAngle:()=>lh,getClosest:()=>hh,getConfigParser:()=>Nr,getElement:()=>ch,getEventTarget:()=>wr,getMatchingTarget:()=>dh,getPosition:()=>uh,getShortestArc:()=>oh,getStyleProperty:()=>ci,getTouchData:()=>lo,getXMPValue:()=>Ft,greatArcDistance:()=>G_,hasParent:()=>X_,invertResolvableBoolean:()=>Ur,isAbortError:()=>xh,isEmpty:()=>_h,isExtendedPosition:()=>zo,isFullscreenEnabled:()=>ph,isNil:()=>_t,isPlainObject:()=>Oo,logWarn:()=>xt,mergePanoData:()=>Th,parseAngle:()=>oi,parsePoint:()=>K_,parseSpeed:()=>Mh,removeClasses:()=>W_,requestFullscreen:()=>fh,resolveBoolean:()=>Fo,speedToDuration:()=>ho,sum:()=>V_,throttle:()=>gh,toggleClass:()=>Dr,wrap:()=>is});function is(t,e){let i=t%e;return i<0&&(i+=e),i}function V_(t){return t.reduce((e,i)=>e+i,0)}function rh(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function ah(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function oh(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((n,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(n)?r:n},1/0)}function lh(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function G_([t,e],[i,n]){t-i>Math.PI?t-=2*Math.PI:t-i<-Math.PI&&(t+=2*Math.PI);const s=(i-t)*Math.cos((e+n)/2),r=n-e;return Math.sqrt(s*s+r*r)}function ch(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Dr(t,e,i){i===void 0?t.classList.toggle(e):i?t.classList.add(e):i||t.classList.remove(e)}function ko(t,e){t.classList.add(...e.split(" ").filter(i=>!!i))}function W_(t,e){t.classList.remove(...e.split(" ").filter(i=>!!i))}function X_(t,e){let i=t;do{if(i===e)return!0;i=i.parentElement}while(i);return!1}function hh(t,e){if(!t?.matches)return null;let i=t;do{if(i.matches(e))return i;i=i.parentElement}while(i);return null}function wr(t){return t?.composedPath()[0]||null}function dh(t,e){return t?t.composedPath().find(i=>!(i instanceof HTMLElement)&&!(i instanceof SVGElement)?!1:i.matches(e)):null}function uh(t){let e=0,i=0,n=t;for(;n;)e+=n.offsetLeft-n.scrollLeft+n.clientLeft,i+=n.offsetTop-n.scrollTop+n.clientTop,n=n.offsetParent;return e-=window.scrollX,i-=window.scrollY,{x:e,y:i}}function ci(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function lo(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},i={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:rh(e,i),angle:ah(e,i),center:{x:(e.x+i.x)/2,y:(e.y+i.y)/2}}}var xr;function ph(t,e=!1){return e?t===xr:document.fullscreenElement===t}function fh(t,e=!1){e?(xr=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function mh(t=!1){t?(xr.classList.remove("psv-fullscreen-emulation"),xr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function j_(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,i)=>(i>0?"-":"")+e.toLowerCase())}function gh(t,e){let i=!1;return function(...n){i||(i=!0,setTimeout(()=>{t.apply(this,n),i=!1},e))}}function Oo(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function vh(t,e){const i=e;return function n(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=n(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{a!=="__proto__"&&(typeof r[a]!="object"||!r[a]||!Oo(r[a])?s[a]=r[a]:r[a]!==i&&(s[a]?n(s[a],r[a]):s[a]=n(null,r[a])))})):s=r,s}(t,e)}function Ir(t){return vh(null,t)}function _h(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function _t(t){return t==null}function Ui(...t){for(const e of t)if(!_t(e))return e;return null}function yh(t,e){if(t===e)return!0;if(tc(t)&&tc(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const i of Object.keys(t))if(!yh(t[i],e[i]))return!1;return!0}else return!1}function tc(t){return typeof t=="object"&&t!==null}var le=class wh extends Error{constructor(e,i){super(i&&i instanceof Error?`${e}: ${i.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,wh)}};function Fo(t,e){Oo(t)?(e(t.initial,!0),t.promise.then(i=>e(i,!1))):e(t,!0)}function Ur(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function co(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function xh(t){return t?.name==="AbortError"}function xt(t){console.warn(`PhotoSphereViewer: ${t}`)}function zo(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,i])=>t[e]!==void 0&&t[i]!==void 0)}function Ft(t,e,i=!0){let n=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(n!==null){const s=i?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}if(n=t.match("GPano:"+e+'="(.*?)"'),n!==null){const s=i?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}return null}var ic={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Er=["left","center","right"],Mr=["top","center","bottom"],nc=[...Er,...Mr],jt="center";function K_(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(ic[e[0]]?e=[e[0],jt]:e=[e[0],e[0]]);const i=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>ic[s]||s),i||e.reverse();const n=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return n?{x:parseFloat(n[1])/100,y:parseFloat(n[2])/100}:{x:.5,y:.5}}function Eh(t,{allowCenter:e,cssOrder:i}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===jt?t=[jt,jt]:Er.indexOf(t[0])!==-1?t=[jt,t[0]]:Mr.indexOf(t[0])!==-1&&(t=[t[0],jt])),t.length!==2||nc.indexOf(t[0])===-1||nc.indexOf(t[1])===-1?(xt(`Unparsable position ${t}`),null):!e&&t[0]===jt&&t[1]===jt?(xt("Invalid position center center"),null):(i&&!Bo(t)&&(t=[t[1],t[0]]),t[1]===jt&&Er.indexOf(t[0])!==-1&&(t=[jt,t[0]]),t[0]===jt&&Mr.indexOf(t[1])!==-1&&(t=[t[1],jt]),t)):null}function Bo(t){return Mr.indexOf(t[0])!==-1&&Er.indexOf(t[1])!==-1}function Mh(t){let e;if(typeof t=="string"){const i=t.toString().trim();let n=parseFloat(i.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=i.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(n/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Oe.degToRad(n);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=n;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=n*Math.PI*2;break;default:throw new le(`Unknown speed unit "${s}"`)}}else e=t;return e}function ho(t,e){if(typeof t!="number"){const i=Mh(t);return e/Math.abs(i)*1e3}else return Math.abs(t)}function oi(t,e=!1,i=e){let n;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new le(`Unknown angle "${t}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":n=Oe.degToRad(r);break;case"rad":case"rads":n=r;break;default:throw new le(`Unknown angle unit "${a}"`)}else n=r}else if(typeof t=="number"&&!isNaN(t))n=t;else throw new le(`Unknown angle "${t}"`);return n=is(e?n+Math.PI:n,Math.PI*2),e?Oe.clamp(n-Math.PI,-Math.PI/(i?2:1),Math.PI/(i?2:1)):n}function uo(t,e=!1){const i=new Et(t);return i.needsUpdate=!0,i.minFilter=e?ki:Bt,i.generateMipmaps=e,i.anisotropy=e?2:1,i}var sc=new Xi;function po(t,e){sc.setFromEuler(e).invert(),t.applyQuaternion(sc)}function Nr(t,e){const i=function(n){const s=Ir({...t,...n}),r={};for(let[a,o]of Object.entries(s)){if(e&&a in e)o=e[a](o,{rawConfig:s,defValue:t[a]});else if(!(a in t)){xt(`Unknown option ${a}`);continue}r[a]=o}return r};return i.defaults=t,i.parsers=e||{},i}function Sh(t,e){ci(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Ho(t,e,i){e&&e!==i&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${i}`)}function bh(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function Th(t,e,i,n){const s={isEquirectangular:!0,fullWidth:Ui(i?.fullWidth,n?.fullWidth),fullHeight:Ui(i?.fullHeight,n?.fullHeight),croppedWidth:t,croppedHeight:e,croppedX:Ui(i?.croppedX,n?.croppedX),croppedY:Ui(i?.croppedY,n?.croppedY),poseHeading:Ui(i?.poseHeading,n?.poseHeading,0),posePitch:Ui(i?.posePitch,n?.posePitch,0),poseRoll:Ui(i?.poseRoll,n?.poseRoll,0),initialHeading:n?.initialHeading,initialPitch:n?.initialPitch,initialFov:n?.initialFov};return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(t,e*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-t)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(xt("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(xt("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(xt("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(xt("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(xt("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var Sr=class{constructor(t){this.easing=pr.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:pr[t.easing]||pr.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,i={};if(e<1){for(const[n,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);i[n]=r}this.options.onTick(i,e),this.animationFrame=window.requestAnimationFrame(n=>this.__run(n))}else{for(const[n,s]of Object.entries(this.options.properties))s&&(i[n]=s.end);this.options.onTick(i,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},Qn=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new le("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?is(t,this.max):Oe.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?is(t,this.max):Oe.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const n=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=n&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let i=null;return this.current>this.target&&this.currentSpeed?i=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(i=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),i!==null&&(i=this.wrap?is(i,this.max):Oe.clamp(i,this.min,this.max),i!==this.current)?(this.current=i,this.fn&&this.fn(this.current),!0):!1}},Ah=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,i])=>(t[e]=i.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[i,n]of Object.entries(t))this.dynamics[i].goto(n,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((i,n)=>(i[n]=t[n]+this.dynamics[n].current,i),{}));else for(const[i,n]of Object.entries(t))this.dynamics[i].step(n,e)}roll(t,e=1){for(const[i,n]of Object.entries(t))this.dynamics[i].roll(n,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[i,n]of Object.entries(t))e=this.dynamics[i].setValue(n)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const i of Object.values(this.dynamics))e=i.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},kr=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},Ch=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(Ch||{}),Rh=class{constructor(t,e,i){this.container=t,this.direction=e,this.listener=i,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,i){const n=this.container.getBoundingClientRect();let s;this.isVertical?s=Oe.clamp((n.bottom-e)/n.height,0,1):s=Oe.clamp((t-n.left)/n.width,0,1),this.listener({value:s,click:!i,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},_e={};No(_e,{BeforeAnimateEvent:()=>Vo,BeforeRenderEvent:()=>ns,BeforeRotateEvent:()=>Oh,ClickEvent:()=>Bh,ConfigChangedEvent:()=>Ut,DoubleClickEvent:()=>Xh,FullscreenEvent:()=>ss,HideNotificationEvent:()=>rs,HideOverlayEvent:()=>Jh,HidePanelEvent:()=>zi,HideTooltipEvent:()=>nd,KeypressEvent:()=>Bi,LoadProgressEvent:()=>ld,ObjectEnterEvent:()=>Kd,ObjectEvent:()=>Or,ObjectHoverEvent:()=>Jd,ObjectLeaveEvent:()=>fo,PanoramaErrorEvent:()=>gd,PanoramaLoadEvent:()=>dd,PanoramaLoadedEvent:()=>kn,PositionUpdatedEvent:()=>as,ReadyEvent:()=>ls,RenderEvent:()=>Cd,RollUpdatedEvent:()=>os,ShowNotificationEvent:()=>cs,ShowOverlayEvent:()=>Id,ShowPanelEvent:()=>Hi,ShowTooltipEvent:()=>Fd,SizeUpdatedEvent:()=>hs,StopAllEvent:()=>ds,TransitionDoneEvent:()=>yd,ViewerEvent:()=>$e,ZoomUpdatedEvent:()=>Si});var Cs=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},Ph=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,i){super.addEventListener(t,e,i)}removeEventListener(t,e,i){super.removeEventListener(t,e,i)}},$e=class extends Cs{},Lh=class Dh extends $e{constructor(e,i){super(Dh.type,!0),this.position=e,this.zoomLevel=i}};Lh.type="before-animate";var Vo=Lh,Ih=class Uh extends $e{constructor(e,i){super(Uh.type),this.timestamp=e,this.elapsed=i}};Ih.type="before-render";var ns=Ih,Nh=class kh extends $e{constructor(e){super(kh.type,!0),this.position=e}};Nh.type="before-rotate";var Oh=Nh,Fh=class zh extends $e{constructor(e){super(zh.type),this.data=e}};Fh.type="click";var Bh=Fh,Hh=class Vh extends $e{constructor(e){super(Vh.type),this.options=e}containsOptions(...e){return e.some(i=>this.options.includes(i))}};Hh.type="config-changed";var Ut=Hh,Gh=class Wh extends $e{constructor(e){super(Wh.type),this.data=e}};Gh.type="dblclick";var Xh=Gh,jh=class Kh extends $e{constructor(e){super(Kh.type),this.fullscreenEnabled=e}};jh.type="fullscreen";var ss=jh,Yh=class qh extends $e{constructor(e){super(qh.type),this.notificationId=e}};Yh.type="hide-notification";var rs=Yh,$h=class Zh extends $e{constructor(e){super(Zh.type),this.overlayId=e}};$h.type="hide-overlay";var Jh=$h,Qh=class ed extends $e{constructor(e){super(ed.type),this.panelId=e}};Qh.type="hide-panel";var zi=Qh,td=class id extends $e{constructor(e){super(id.type),this.tooltipData=e}};td.type="hide-tooltip";var nd=td,sd=class rd extends $e{constructor(e,i){super(rd.type,!0),this.key=e,this.originalEvent=i}};sd.type="key-press";var Bi=sd,ad=class od extends $e{constructor(e){super(od.type),this.progress=e}};ad.type="load-progress";var ld=ad,cd=class hd extends $e{constructor(e){super(hd.type),this.panorama=e}};cd.type="panorama-load";var dd=cd,ud=class pd extends $e{constructor(e){super(pd.type),this.data=e}};ud.type="panorama-loaded";var kn=ud,fd=class md extends $e{constructor(e,i){super(md.type),this.panorama=e,this.error=i}};fd.type="panorama-error";var gd=fd,vd=class _d extends $e{constructor(e){super(_d.type),this.completed=e}};vd.type="transition-done";var yd=vd,wd=class xd extends $e{constructor(e){super(xd.type),this.position=e}};wd.type="position-updated";var as=wd,Ed=class Md extends $e{constructor(e){super(Md.type),this.roll=e}};Ed.type="roll-updated";var os=Ed,Sd=class bd extends $e{constructor(){super(bd.type)}};Sd.type="ready";var ls=Sd,Td=class Ad extends $e{constructor(){super(Ad.type)}};Td.type="render";var Cd=Td,Rd=class Pd extends $e{constructor(e){super(Pd.type),this.notificationId=e}};Rd.type="show-notification";var cs=Rd,Ld=class Dd extends $e{constructor(e){super(Dd.type),this.overlayId=e}};Ld.type="show-overlay";var Id=Ld,Ud=class Nd extends $e{constructor(e){super(Nd.type),this.panelId=e}};Ud.type="show-panel";var Hi=Ud,kd=class Od extends $e{constructor(e,i){super(Od.type),this.tooltip=e,this.tooltipData=i}};kd.type="show-tooltip";var Fd=kd,zd=class Bd extends $e{constructor(e){super(Bd.type),this.size=e}};zd.type="size-updated";var hs=zd,Hd=class Vd extends $e{constructor(){super(Vd.type)}};Hd.type="stop-all";var ds=Hd,Gd=class Wd extends $e{constructor(e){super(Wd.type),this.zoomLevel=e}};Gd.type="zoom-updated";var Si=Gd,Or=class extends $e{constructor(t,e,i,n,s){super(t),this.originalEvent=e,this.object=i,this.viewerPoint=n,this.userDataKey=s}},Xd=class jd extends Or{constructor(e,i,n,s){super(jd.type,e,i,n,s)}};Xd.type="enter-object";var Kd=Xd,Yd=class qd extends Or{constructor(e,i,n,s){super(qd.type,e,i,n,s)}};Yd.type="leave-object";var fo=Yd,$d=class Zd extends Or{constructor(e,i,n,s){super(Zd.type,e,i,n,s)}};$d.type="hover-object";var Jd=$d,Go=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new le("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new le("Current adapter does not support texture coordinates.")}};Go.supportsDownload=!1;function rc(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Go)return Ho(e.id,e.VERSION,"5.13.3"),e}return null}var $n=`${Wi}_touchSupport`,Pt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=$_(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=Y_();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=q_(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Pt.isWebGLSupported)throw new le("WebGL 2 is not supported.");if(Pt.maxTextureWidth===0)throw new le("Unable to detect system capabilities")}};function Y_(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function q_(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;$n in localStorage&&(t=localStorage[$n]==="true");const e=new Promise(i=>{const n=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{n(),localStorage[$n]=!1,i(!1)},r=()=>{n(),localStorage[$n]=!0,i(!0)},a=()=>{n(),localStorage[$n]=t,i(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:t,promise:e}}function $_(t){let e=t,i=!1;const n=document.createElement("canvas"),s=n.getContext("2d");for(n.width=1,n.height=1;e>1024&&!i;){const r=document.createElement("canvas"),a=r.getContext("2d");r.width=e,r.height=e/2;try{a.fillStyle="white",a.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(i=!0)}catch{}r.width=0,r.height=0,i||(e/=2)}if(i)return e;throw new le("Unable to detect system capabilities")}var Z_=Nr({resolution:64,useXmpData:!0,blur:!1},{resolution:t=>{if(!t||!Oe.isPowerOfTwo(t))throw new le("EquirectangularAdapter resolution must be power of two.");return t}}),Rs=class extends Go{constructor(t,e){super(t),this.config=Z_(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(t,e){if(_t(t.textureX)||_t(t.textureY))throw new le("Texture position is missing 'textureX' or 'textureY'");const i=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,n=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-n}}sphericalCoordsToTextureCoords(t,e){const i=t.yaw/Math.PI/2*e.fullWidth,n=t.pitch/Math.PI*e.fullHeight;let s=Math.round(t.yaw<Math.PI?i+e.fullWidth/2:i-e.fullWidth/2)-e.croppedX,r=Math.round(e.fullHeight/2-n)-e.croppedY;return(s<0||s>e.croppedWidth||r<0||r>e.croppedHeight)&&(s=r=void 0),{textureX:s,textureY:r}}async loadTexture(t,e=!0,i,n=this.config.useXmpData){if(typeof t!="string"&&(typeof t!="object"||!t.path))return Promise.reject(new le("Invalid panorama url, are you using the right adapter?"));let s;typeof t=="string"?s={path:t,data:i}:s={data:i,...t};const r=await this.viewer.textureLoader.loadFile(s.path,e?d=>this.viewer.textureLoader.dispatchProgress(d):null,s.path),a=n?await this.loadXMP(r):null,o=await this.viewer.textureLoader.blobToImage(r);typeof s.data=="function"&&(s.data=s.data(o,a));const l=Th(o.width,o.height,s.data,a),h=this.createEquirectangularTexture(o);return{panorama:t,texture:h,panoData:l,cacheKey:s.path}}async loadXMP(t){const e=await this.loadBlobAsString(t),i=e.indexOf("<x:xmpmeta");if(i===-1)return null;const n=e.indexOf("</x:xmpmeta>",i);if(n===-1)return null;const s=e.substring(i,n);return s.includes("GPano:")?{fullWidth:Ft(s,"FullPanoWidthPixels"),fullHeight:Ft(s,"FullPanoHeightPixels"),croppedWidth:Ft(s,"CroppedAreaImageWidthPixels"),croppedHeight:Ft(s,"CroppedAreaImageHeightPixels"),croppedX:Ft(s,"CroppedAreaLeftPixels"),croppedY:Ft(s,"CroppedAreaTopPixels"),poseHeading:Ft(s,"PoseHeadingDegrees",!1),posePitch:Ft(s,"PosePitchDegrees",!1),poseRoll:Ft(s,"PoseRollDegrees",!1),initialHeading:Ft(s,"InitialViewHeadingDegrees",!1),initialPitch:Ft(s,"InitialViewPitchDegrees",!1),initialFov:Ft(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(t){return new Promise((e,i)=>{const n=new FileReader;n.onload=()=>e(n.result),n.onerror=i,n.readAsText(t)})}createEquirectangularTexture(t){if(this.config.blur||t.width>Pt.maxTextureWidth){const e=Math.min(1,Pt.maxCanvasWidth/t.width),i=new OffscreenCanvas(Math.floor(t.width*e),Math.floor(t.height*e)),n=i.getContext("2d");return this.config.blur&&(n.filter=`blur(${i.width/2048}px)`),n.drawImage(t,0,0,i.width,i.height),uo(i)}return uo(t)}createMesh(t){const e=t.croppedX/t.fullWidth*2*Math.PI,i=t.croppedWidth/t.fullWidth*2*Math.PI,n=t.croppedY/t.fullHeight*Math.PI,s=t.croppedHeight/t.fullHeight*Math.PI,r=new Ts(dn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+e,i,n,s).scale(-1,1,1),a=new Ms({depthTest:!1,depthWrite:!1});return new Ht(r,a)}setTexture(t,e){t.material.map=e.texture}setTextureOpacity(t,e){t.material.opacity=e,t.material.transparent=e<1}disposeTexture({texture:t}){t.dispose()}disposeMesh(t){t.geometry.dispose(),t.material.dispose()}};Rs.id="equirectangular";Rs.VERSION="5.13.3";Rs.supportsDownload=!0;var Qd=class extends Rs{constructor(t,e){super(t,{resolution:e?.resolution??64,useXmpData:!1})}async loadTexture(t,e){const i=await super.loadTexture(t,e,null,!1);return i.panoData=null,i}createMesh(){const t=new Ts(dn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),e=t.getAttribute("uv"),i=t.getAttribute("normal");for(let s=0;s<e.count;s++)for(let r=0;r<3;r++){const a=s*3+r,o=i.getX(a),l=i.getY(a),h=i.getZ(a),d=.947;if(s<e.count/6){const p=o===0&&h===0?1:Math.acos(l)/Math.sqrt(o*o+h*h)*(2/Math.PI);e.setXY(a,o*(d/4)*p+1/4,h*(d/2)*p+1/2)}else{const p=o===0&&h===0?1:Math.acos(-l)/Math.sqrt(o*o+h*h)*(2/Math.PI);e.setXY(a,-o*(d/4)*p+3/4,h*(d/2)*p+1/2)}}t.rotateX(-Math.PI/2),t.rotateY(Math.PI);const n=new Ms({depthTest:!1,depthWrite:!1});return new Ht(t,n)}};Qd.id="dual-fisheye";Qd.VERSION="5.13.3";var Ki=class eu{constructor(e,i){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof eu?e.viewer:e,this.container=document.createElement(i.tagName??"div"),this.container.className=i.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(i=>i.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},J_=Nr({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),Lt=class extends Ki{constructor(t,e){super(t,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=J_(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",i=>{this.state.enabled&&this.onClick(),i.stopPropagation()}),this.container.addEventListener("keydown",i=>{i.key===vt.Enter&&this.state.enabled&&(this.onClick(),i.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){Fo(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Dr(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,ko(this.container.querySelector("svg"),"psv-button-svg")}},Q_=class extends Lt{constructor(t,e){super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},ws=class extends Lt{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:si.info}),this.mode=0,this.viewer.addEventListener(rs.type,this),this.viewer.addEventListener(cs.type,this),this.viewer.addEventListener(zi.type,this),this.viewer.addEventListener(Hi.type,this),this.viewer.addEventListener(Ut.type,this)}destroy(){this.viewer.removeEventListener(rs.type,this),this.viewer.removeEventListener(cs.type,this),this.viewer.removeEventListener(zi.type,this),this.viewer.removeEventListener(Hi.type,this),this.viewer.removeEventListener(Ut.type,this),super.destroy()}handleEvent(t){if(t instanceof Ut){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof rs?e=this.mode===1:t instanceof cs?e=this.mode===1&&t.notificationId!==wt.DESCRIPTION:t instanceof zi?e=this.mode===2:t instanceof Hi&&(e=this.mode===2&&t.panelId!==wt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),i=e&&!e.isVisible(),n=!!this.viewer.config.description;i||n?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(wt.DESCRIPTION);break;case 2:this.viewer.panel.hide(wt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:wt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:wt.DESCRIPTION,content:this.viewer.config.caption}))}};ws.id="description";var tu=class extends Lt{constructor(t){super(t,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:si.download}),this.viewer.addEventListener(Ut.type,this),this.viewer.addEventListener(kn.type,this)}destroy(){this.viewer.removeEventListener(Ut.type,this),this.viewer.removeEventListener(kn.type,this),super.destroy()}handleEvent(t){t instanceof Ut?(t.containsOptions("downloadUrl")&&this.checkSupported(),t.containsOptions("downloadUrl","downloadName")&&this.__update()):t instanceof kn&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const t=this.container;t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.target="_blank",t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop()}};tu.id="download";var iu=class extends Lt{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:si.fullscreenIn,iconActive:si.fullscreenOut}),this.viewer.addEventListener(ss.type,this)}destroy(){this.viewer.removeEventListener(ss.type,this),super.destroy()}handleEvent(t){t instanceof ss&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};iu.id="fullscreen";var ey="psvButton",ty=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${si.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(i=>`
    <li data-psv-button="${i.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${i.content}</span>
      <span class="psv-panel-menu-item-label">${i.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,fr=class extends Lt{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:si.menu}),this.viewer.addEventListener(Hi.type,this),this.viewer.addEventListener(zi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Hi.type,this),this.viewer.removeEventListener(zi.type,this),super.destroy()}handleEvent(t){t instanceof Hi?this.toggleActive(t.panelId===wt.MENU):t instanceof zi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:wt.MENU,content:ty(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?hh(t,".psv-panel-menu-item"):void 0,i=e?e.dataset[ey]:void 0;i&&(this.viewer.navbar.getButton(i).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(wt.MENU)}};fr.id="menu";function iy(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return si.arrow.replace("rotate(0",`rotate(${e}`)}var Ps=class extends Lt{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:iy(e)}),this.direction=e,this.handler=new kr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===vt.Enter&&this.__onMouseDown();break;case"keyup":t.key===vt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Ur(Pt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Ps.groupId="move";var nu=class extends Ps{constructor(t){super(t,1)}};nu.id="moveDown";var su=class extends Ps{constructor(t){super(t,2)}};su.id="moveLeft";var ru=class extends Ps{constructor(t){super(t,3)}};ru.id="moveRight";var au=class extends Ps{constructor(t){super(t,0)}};au.id="moveUp";var Wo=class extends Lt{constructor(t,e,i){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=i,this.handler=new kr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===vt.Enter&&this.__onMouseDown();break;case"keyup":t.key===vt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Ur(Pt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};Wo.groupId="zoom";var ou=class extends Wo{constructor(t){super(t,si.zoomIn,0)}};ou.id="zoomIn";var lu=class extends Wo{constructor(t){super(t,si.zoomOut,1)}};lu.id="zoomOut";var Xo=class extends Lt{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Rh(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(ci(this.container,"max-width"),10),this.viewer.addEventListener(Si.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(ls.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(Si.type,this),this.viewer.removeEventListener(ls.type,this),super.destroy()}handleEvent(t){t instanceof Si?this.__moveZoomValue(t.zoomLevel):t instanceof ls&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Ur(Pt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};Xo.id="zoomRange";Xo.groupId="zoom";var cu=class extends Ph{constructor(t){super(),this.viewer=t}init(){}destroy(){}},jo=class extends cu{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},i=this.constructor,n=i.configParser,s=i.readonlyOptions,r=i.id;for(let[a,o]of Object.entries(t)){if(!(a in n.defaults)){xt(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){xt(`${r}: Option "${a}" cannot be updated`);continue}a in n.parsers&&(o=n.parsers[a](o,{rawConfig:e,defValue:n.defaults[a]})),this.config[a]=o}}};jo.readonlyOptions=[];function mo(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof cu)return Ho(e.id,e.VERSION,"5.13.3"),e}return null}var Ai={panorama:null,container:null,adapter:[Rs,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[vt.ArrowUp]:"ROTATE_UP",[vt.ArrowDown]:"ROTATE_DOWN",[vt.ArrowRight]:"ROTATE_RIGHT",[vt.ArrowLeft]:"ROTATE_LEFT",[vt.PageUp]:"ZOOM_IN",[vt.PageDown]:"ZOOM_OUT",[vt.Plus]:"ZOOM_IN",[vt.Minus]:"ZOOM_OUT"}},ac={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},go={container:t=>{if(!t)throw new le("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[rc(t[0]),t[1]]:t=[rc(t),null]:t=e,!t[0])throw new le("An undefined value was given for adapter.");if(!t[0].id)throw new le("Adapter has no id.");return t},defaultYaw:t=>oi(t),defaultPitch:t=>oi(t,!0),defaultZoomLvl:t=>Oe.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(xt("maxFov cannot be lower than minFov"),t=e.maxFov),Oe.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),Oe.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...Ai.lang,...t}),keyboardActions:(t,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:t,fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,withCredentials:t=>typeof t=="boolean"?()=>t:typeof t=="function"?t:()=>!1,defaultTransition:(t,{defValue:e})=>t===null||t.speed===0?null:{...e,...t},rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,i)=>{if(Array.isArray(e)?e=[mo(e[0]),e[1]]:e=[mo(e),null],!e[0])throw new le(`An undefined value was given for plugin ${i}.`);if(!e[0].id)throw new le(`Plugin ${i} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?Ir(Ai.navbar):typeof t=="string"?t.split(/[ ,]/):t},ny=Nr(Ai,go),In=class extends Lt{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(ws.id,!1)?.autoSize(!0)}};In.id="caption";var vo={},br={};function Ko(t,e){if(!t.id)throw new le("Button id is required");if(vo[t.id]=t,t.groupId&&(br[t.groupId]=br[t.groupId]||[]).push(t),e){const i=Ai.navbar;switch(e){case"start":i.unshift(t.id);break;case"end":i.push(t.id);break;default:{const[n,s]=e.split(":"),r=i.indexOf(n);if(!n||!s||r===-1)throw new le(`Invalid defaultPosition ${e}`);i.splice(r+(s==="right"?1:0),0,t.id)}}}}[lu,Xo,ou,ws,In,tu,iu,su,ru,au,nu].forEach(t=>Ko(t));var sy=class extends Ki{constructor(t){super(t,{className:`psv-navbar ${As}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(In.id)!==-1&&t.indexOf(ws.id)===-1&&t.splice(t.indexOf(In.id),0,ws.id),t.forEach(e=>{typeof e=="object"?new Q_(this,e):vo[e]?new vo[e](this):br[e]?br[e].forEach(i=>{new i(this)}):xt(`Unknown button ${e}`)}),new fr(this),this.children.forEach(e=>{e instanceof Lt&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof In?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const i=this.children.find(n=>n instanceof Lt&&n.id===t);return!i&&e&&xt(`button "${t}" not found in the navbar`),i}focusButton(t){this.isVisible()&&(this.getButton(t,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(n=>{n instanceof Lt&&n.autoSize()});const t=this.container.offsetWidth;let e=0;const i=[];this.children.forEach(n=>{n.isVisible()&&n instanceof Lt&&(e+=n.width,n.collapsable&&i.push(n))}),e!==0&&(t<e&&i.length>0?(i.forEach(n=>n.collapse()),this.collapsed=i,this.getButton(fr.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(n=>n.uncollapse()),this.collapsed=[],this.getButton(fr.id).hide(!1)),this.getButton(In.id,!1)?.autoSize())}};so.enabled=!1;var Pn={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){so.enabled&&(xt("ThreeJS cache should be disabled"),so.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,i){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=i,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],i)=>{i>0&&(Date.now()-e>=this.ttl*1e3||i>=this.maxItems)&&delete this.items[t]})}},ry=class extends Ki{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=ci(this.loader,"color"),this.color=ci(this.canvas,"color"),this.border=parseInt(ci(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(ci(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Ut.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Ut.type,this),super.destroy()}handleEvent(t){t instanceof Ut&&t.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(t){this.container.classList.remove("psv-loader--undefined");const e=Oe.clamp(t,0,99.999)/100*Math.PI*2,i=this.size/2,n=i,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*r+i,o=-Math.cos(e)*r+i,l=t>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${n} ${s} A ${r} ${r} 0 ${l} 1 ${a} ${o}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const i=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=i+"px",e.style.maxHeight=i+"px",this.loader.appendChild(e)}}},ay=class extends Ki{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new le("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new cs(this.state.contentId)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new rs(e))}}},oy=class extends Ki{constructor(t){super(t,{className:`psv-overlay ${As}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Bi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Bi.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),t.stopPropagation()):t instanceof Bi&&this.isVisible()&&this.state.dismissible&&t.key===vt.Escape&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new le("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dismissible=t.dismissible!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new Id(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Jh(e))}}},ly=200,ga="psv-panel-content--no-interaction",cy=class extends Ki{constructor(t){super(t,{className:`psv-panel ${As}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const i=document.createElement("div");i.className="psv-panel-close-button",i.innerHTML=si.close,i.title=t.config.lang.close,this.container.appendChild(i),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),i.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Bi.type,this)}destroy(){this.viewer.removeEventListener(Bi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case Bi.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new le("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Dr(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=i=>{t.clickHandler(wr(i))},this.state.keyHandler=i=>{i.key===vt.Enter&&t.clickHandler(wr(i))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new Hi(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new zi(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(ga))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(ga)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.key===vt.Escape&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(ga)}__resize(t,e){const i=t,n=e,s=Math.max(ly,this.container.offsetWidth-(i-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=i,this.state.mouseY=n}},hy=class extends Ki{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",i=>i.stopPropagation()),this.container.addEventListener("mousedown",i=>i.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new le("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new le("Initialized tooltip cannot be re-initialized");t.className&&ko(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new Fd(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const i=this.container.getBoundingClientRect();this.state.width=i.right-i.left,this.state.height=i.bottom-i.top,this.state.arrow=parseInt(ci(this.arrow,"border-top-width"),10),this.state.border=parseInt(ci(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){if(this.state.state!==1&&this.state.state!==3)throw new le("Uninitialized tooltip cannot be moved");t.box=t.box??this.state.config?.box??{width:0,height:0},this.state.config=t;const e=this.container,i=this.arrow,n={posClass:Eh(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(n,t);let s=null,r=null;if(n.top<0?s="bottom":n.top+n.height>this.viewer.state.size.height&&(s="top"),n.left<0?r="right":n.left+n.width>this.viewer.state.size.width&&(r="left"),r||s){const o=Bo(n.posClass);s&&(n.posClass[o?0:1]=s),r&&(n.posClass[o?1:0]=r),this.__computeTooltipPosition(n,t)}e.style.top=n.top+"px",e.style.left=n.left+"px",i.style.top=n.arrowTop+"px",i.style.left=n.arrowLeft+"px";const a=n.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new nd(this.state.data));const t=parseFloat(ci(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const i=this.state.arrow,n=e.top,s=t.height,r=e.left,a=t.width,o=i+this.state.border,l=e.box.width/2+i*2,h=e.box.height/2+i*2;switch(t.posClass.join("-")){case"top-left":t.top=n-h-s,t.left=r+o-a,t.arrowTop=s,t.arrowLeft=a-o-i;break;case"top-center":t.top=n-h-s,t.left=r-a/2,t.arrowTop=s,t.arrowLeft=a/2-i;break;case"top-right":t.top=n-h-s,t.left=r-o,t.arrowTop=s,t.arrowLeft=i;break;case"bottom-left":t.top=n+h,t.left=r+o-a,t.arrowTop=-i*2,t.arrowLeft=a-o-i;break;case"bottom-center":t.top=n+h,t.left=r-a/2,t.arrowTop=-i*2,t.arrowLeft=a/2-i;break;case"bottom-right":t.top=n+h,t.left=r-o,t.arrowTop=-i*2,t.arrowLeft=i;break;case"left-top":t.top=n+o-s,t.left=r-l-a,t.arrowTop=s-o-i,t.arrowLeft=a;break;case"center-left":t.top=n-s/2,t.left=r-l-a,t.arrowTop=s/2-i,t.arrowLeft=a;break;case"left-bottom":t.top=n-o,t.left=r-l-a,t.arrowTop=i,t.arrowLeft=a;break;case"right-top":t.top=n+o-s,t.left=r+l,t.arrowTop=s-o-i,t.arrowLeft=-i*2;break;case"center-right":t.top=n-s/2,t.left=r+l,t.arrowTop=s/2-i,t.arrowLeft=-i*2;break;case"right-bottom":t.top=n-o,t.left=r+l,t.arrowTop=i,t.arrowLeft=-i*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(i=>{i.complete||e.push(new Promise(n=>{i.onload=n,i.onerror=n}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const i=this.container.getBoundingClientRect();this.state.width=i.right-i.left,this.state.height=i.bottom-i.top,this.move(this.state.config)}})}}},dy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Ls=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},ei=new U,nr=new ui(0,0,0,"ZXY"),uy=class extends Ls{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Oe.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return Oe.radToDeg(2*Math.atan(Math.tan(Oe.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return Oe.radToDeg(2*Math.atan(Math.tan(Oe.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,i){const n=!_t(e),s=!_t(i),r={};let a=null;if(n){const o=this.viewer.getPosition(),l=oh(o.yaw,e.yaw);r.yaw={start:o.yaw,end:o.yaw+l},r.pitch={start:o.pitch,end:e.pitch},a=ho(t,lh(o,e))}if(s){const o=this.viewer.getZoomLevel(),l=Math.abs(i-o);r.zoom={start:o,end:i},a===null&&(a=ho(t,Math.PI/4*l/100))}return a===null?typeof t=="number"?a=t:a=oo:a=Math.max(oo,a),{duration:a,properties:r}}getTransitionOptions(t){let e;const i=this.config.defaultTransition??Ai.defaultTransition;return t.transition===!1||t.transition===null?e=null:t.transition===!0?e={...i}:typeof t.transition=="object"?e={...i,...t.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(t){if(!this.state.textureData?.panoData)throw new le("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!nr.equals(this.viewer.renderer.panoramaPose)||!nr.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,ei),ei.applyEuler(this.viewer.renderer.panoramaPose),ei.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(ei)):e}sphericalCoordsToTextureCoords(t){if(!this.state.textureData?.panoData)throw new le("Current adapter does not support texture coordinates or no texture has been loaded");return(!nr.equals(this.viewer.renderer.panoramaPose)||!nr.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,ei),po(ei,this.viewer.renderer.sphereCorrection),po(ei,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(ei)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,i=dn){return e||(e=new U),e.x=i*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=i*Math.sin(t.pitch),e.z=i*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),i=Math.atan2(t.x,t.z);return{yaw:i<0?-i:Math.PI*2-i,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(i=>i.object.userData[Wi]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,ei),this.vector3ToViewerCoords(ei)}isPointVisible(t){let e,i;if(t instanceof U)e=t,i=this.vector3ToViewerCoords(t);else if(zo(t))e=this.sphericalCoordsToVector3(t,ei),i=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&i.x>=0&&i.x<=this.viewer.state.size.width&&i.y>=0&&i.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new le("Position is missing 'yaw' or 'pitch'");return{yaw:oi(t.yaw),pitch:oi(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:oi(t?.pan||0),tilt:oi(t?.tilt||0,!0),roll:oi(t?.roll||0,!0,!1)}}cleanPanoramaPose(t){return{pan:Oe.degToRad(t?.poseHeading||0),tilt:Oe.degToRad(t?.posePitch||0),roll:Oe.degToRad(t?.poseRoll||0)}}cleanPanoramaOptions(t,e){return e?.isEquirectangular&&(_t(t.zoom)&&!_t(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),_t(t.position)&&!_t(e.initialHeading)&&!_t(e.initialPitch)&&(t={...t,position:{yaw:oi(e.initialHeading),pitch:oi(e.initialPitch,!0)}})),t}},py=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,fy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Fr=class hu{constructor(){this.$=hu.IDLE}is(...e){return e.some(i=>this.$&i)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Fr.IDLE=0;Fr.CLICK=1;Fr.MOVING=2;var pt=Fr,my=class extends Ls{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new pt,this.keyHandler=new kr,this.resizeObserver=new ResizeObserver(gh(()=>this.viewer.autoSize(),50)),this.moveThreshold=Qc*Pt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(ns.type,this),this.viewer.addEventListener(ds.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(ns.type,this),this.viewer.removeEventListener(ds.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case ns.type:this.__applyMoveDelta();break;case ds.type:this.__clearMoveDelta();break}if(!dh(t,"."+As))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===vt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(wt.CTRL_ZOOM))),!this.viewer.dispatchEvent(new Bi(t.key,t))||!this.state.keyboardEnabled)return;const e=this.config.keyboardActions?.[t.key];if(typeof e=="function"){e(this.viewer,t),t.preventDefault();return}if(!(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey)&&e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e),t.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(pt.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY,this.config.mousemove&&t.preventDefault()}__onMouseUp(t){this.step.is(pt.CLICK,pt.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(pt.CLICK,pt.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(pt.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},th))):t.touches.length===2&&(this.step.set(pt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(pt.CLICK,pt.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(pt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:wt.TWO_FINGERS,image:py,title:this.config.lang.twoFingers})},ih));else if(this.step.is(pt.CLICK,pt.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(wt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:wt.CTRL_ZOOM,image:fy,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(wt.CTRL_ZOOM),nh);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new ss(t))}__resetMove(){this.step.set(pt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=lo(t);this.step.set(pt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,i,n=!1){this.step.is(pt.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,i,n),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,i,n=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,a=e-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),l=o.find(h=>h.object.userData[Wi]);if(l){const h=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),d={rightclick:n,originalEvent:i,target:wr(i),clientX:t,clientY:e,viewerX:r,viewerY:a,yaw:h.yaw,pitch:h.pitch,objects:o.map(p=>p.object).filter(p=>!p.userData[Wi])};try{const p=this.viewer.dataHelper.sphericalCoordsToTextureCoords(d);Object.assign(d,p)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-d.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-d.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Xh(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Bh(d)),this.data.dblclickData=Ir(d),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},eh))}}__handleObjectsEvents(t){if(!_h(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=uh(this.viewer.container),i={x:t.clientX-e.x,y:t.clientY-e.y},n=this.viewer.renderer.getIntersections(i),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(t,r,i,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=n.find(l=>l.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,fo),this.state.objectsObservers[r]=null),a?s(o.object,r,Jd):(this.state.objectsObservers[r]=o.object,s(o.object,r,Kd))):a&&(s(a,r,fo),this.state.objectsObservers[r]=null)}}}__doMove(t,e){if(this.step.is(pt.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(pt.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(pt.MOVING)){const i=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),n=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(i/this.state.size.width)*Oe.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(n/this.state.size.height)*Oe.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(pt.MOVING)){t.preventDefault();const e=lo(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Pt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};We.enabled=!1;var sr=new Ke,oc=new et,lc=new Gn,gy=class extends Ls{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new L_(this.config.rendererParameters),this.renderer.setPixelRatio(Pt.pixelRatio),this.renderer.outputColorSpace=hn,this.renderer.toneMapping=bc,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new yr,this.camera=new zt(50,16/9,.1,2*dn),this.camera.matrixAutoUpdate=!1;const e=new Ht(new Ts(dn).scale(-1,1,1),new Ms({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Wi]:!0},this.scene.add(e),this.raycaster=new Yf,this.frustum=new Do,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",i=>i.preventDefault()),this.viewer.addEventListener(hs.type,this),this.viewer.addEventListener(Si.type,this),this.viewer.addEventListener(as.type,this),this.viewer.addEventListener(os.type,this),this.viewer.addEventListener(Ut.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(hs.type,this),this.viewer.removeEventListener(Si.type,this),this.viewer.removeEventListener(as.type,this),this.viewer.removeEventListener(os.type,this),this.viewer.removeEventListener(Ut.type,this),super.destroy()}handleEvent(t){switch(t.type){case hs.type:this.__onSizeUpdated();break;case Si.type:this.__onZoomUpdated();break;case as.type:this.__onPositionUpdated();break;case os.type:this.__onPositionUpdated();break;case Ut.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new ns(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Cd))}setTexture(t){this.meshContainer||(this.meshContainer=new ln,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const i=this.viewer.dataHelper.cleanPanoramaPose(t);e.rotation.set(i.tilt,i.pan,i.roll,"YXZ")}setSphereCorrection(t,e=this.meshContainer){const i=this.viewer.dataHelper.cleanSphereCorrection(t);e.rotation.set(i.tilt,i.pan,i.roll,"YXZ")}transition(t,e,i){const n=i.effect==="fade"||i.rotation,s=!_t(e.position),r=!_t(e.zoom),a=new Vo(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(a);const o=new ln,l=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(l,t,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(t.panoData,l),this.setSphereCorrection(e.sphereCorrection,o),s&&!i.rotation){const f=this.viewer.getPosition(),m=new U(0,1,0);o.rotateOnWorldAxis(m,a.position.yaw-f.yaw);const g=new U(0,1,0).cross(this.camera.getWorldDirection(new U)).normalize();o.rotateOnWorldAxis(g,a.position.pitch-f.pitch)}o.add(l),this.scene.add(o),this.renderer.setRenderTarget(new Gi),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:h,properties:d}=this.viewer.dataHelper.getAnimationProperties(i.speed,i.rotation?a.position:null,n?a.zoomLevel:null),p=new Sr({properties:{...d,opacity:{start:0,end:1}},duration:h,easing:"inOutCubic",onTick:f=>{switch(i.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,f.opacity);break;case"black":case"white":f.opacity<.5?this.renderer.toneMappingExposure=i.effect==="black"?Oe.mapLinear(f.opacity,0,.5,1,0):Oe.mapLinear(f.opacity,0,.5,1,4):(this.renderer.toneMappingExposure=i.effect==="black"?Oe.mapLinear(f.opacity,.5,1,0,1):Oe.mapLinear(f.opacity,.5,1,4,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!n&&this.viewer.dynamics.zoom.setValue(a.zoomLevel));break}s&&i.rotation&&this.viewer.dynamics.position.setValue({yaw:f.yaw,pitch:f.pitch}),r&&n&&this.viewer.dynamics.zoom.setValue(f.zoom),this.viewer.needsUpdate()}});return p.then(f=>{o.remove(l),this.scene.remove(o),f?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!i.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(l))}),p}getIntersections(t){sr.x=2*t.x/this.state.size.width-1,sr.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(sr,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(i=>i.object.visible).filter(i=>i.object.isMesh&&!!i.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,sr)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(oc.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(oc),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),lc.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(lc)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=i=>{i.map?.dispose(),i.uniforms&&Object.values(i.uniforms).forEach(n=>{n.value?.dispose?.()}),i.dispose()};t.traverse(i=>{i.geometry?.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(n=>{e(n)}):e(i.material)),i instanceof yr||i.dispose?.(),i!==t&&this.cleanScene(i)})}},vy=class extends Io{load(t,e,i,n,s){const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r,{signal:s}).then(a=>{if(a.status===200||a.status===0){const o=a.body.getReader(),l=a.headers.get("Content-Length")||a.headers.get("X-File-Size"),h=l?parseInt(l):0,d=h!==0;let p=0;const f=new ReadableStream({start(m){g();function g(){o.read().then(({done:_,value:u})=>{if(_)m.close();else{p+=u.byteLength;const c=new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:h});i(c),m.enqueue(u),g()}}).catch(_=>{n(_)})}}});return new Response(f)}else throw new Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>a.blob()).then(a=>{e(a)}).catch(a=>{n(a)})}},_y=class extends Io{load(t,e,i,n){const s=document.createElement("img");function r(){l(),e(this)}function a(h){if(l(),n?.aborted){const d=new Error;d.name="AbortError",d.message="The operation was aborted.",i(d)}else i(h)}function o(){s.src=""}function l(){s.removeEventListener("load",r,!1),s.removeEventListener("error",a,!1),n?.removeEventListener("abort",o,!1)}return s.addEventListener("load",r,!1),s.addEventListener("error",a,!1),n?.addEventListener("abort",o,!1),t.startsWith("data:")||(s.crossOrigin=this.withCredentials?"use-credentials":"anonymous"),s.src=t,s}},yy=class extends Ls{constructor(t){super(t),this.abortCtrl={},this.fileLoader=new vy,this.imageLoader=new _y}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(t=>t.abort()),this.abortCtrl={}}loadFile(t,e,i){const n=Pn.get(t,i);if(n){if(n instanceof Blob)return e?.(100),Promise.resolve(n);Pn.remove(t,i)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),this.fileLoader.setWithCredentials(this.config.withCredentials(t)),new Promise((s,r)=>{let a=0;e?.(a),this.fileLoader.load(t,o=>{a=100,e?.(a),Pn.add(t,i,o),s(o)},o=>{if(o.lengthComputable){const l=o.loaded/o.total*100;l>a&&(a=l,e?.(a))}},o=>{r(o)},this.__getAbortSignal(i))})}loadImage(t,e,i){const n=Pn.get(t,i);return n?(e?.(100),n instanceof Blob?this.blobToImage(n):Promise.resolve(n)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(t)),new Promise((s,r)=>{this.imageLoader.load(t,a=>{Pn.add(t,i,a),s(a)},a=>{r(a)},this.__getAbortSignal(i))})):this.loadFile(t,e,i).then(s=>this.blobToImage(s))}blobToImage(t){return new Promise((e,i)=>{const n=document.createElement("img");n.onload=()=>{URL.revokeObjectURL(n.src),e(n)},n.onerror=i,n.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new le("Current adapter does not support preload"))}dispatchProgress(t){this.viewer.loader.setProgress(t),this.viewer.dispatchEvent(new ld(Math.round(t)))}__getAbortSignal(t){return t?(this.abortCtrl[t]?.signal.aborted&&delete this.abortCtrl[t],this.abortCtrl[t]||(this.abortCtrl[t]=new AbortController),this.abortCtrl[t].signal):null}},wy=class extends Ls{constructor(t){super(t),this.zoom=new Qn(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new Si(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Ah(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new as(e))},{yaw:new Qn(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new Qn(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new Qn(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new os(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Oe.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Oe.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},xy=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new U(0,0,dn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},Ey=class extends Ph{constructor(t){if(super(),this.plugins={},this.children=[],this.parent=ch(t.container),!this.parent)throw new le('"container" element not found.');this.parent[Wi]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),bh(this.parent),Sh(this.container,"core"),this.state=new xy,this.config=ny(t),this.__setSize(this.config.size),this.overlay=new oy(this);try{Pt.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}Pn.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new gy(this),this.textureLoader=new yy(this),this.eventsHandler=new my(this),this.dataHelper=new uy(this),this.dynamics=new wy(this),this.adapter.init?.(),this.loader=new ry(this),this.navbar=new sy(this),this.panel=new cy(this),this.notification=new ay(this),this.autoSize(),this.setCursor(null),Fo(Pt.isTouchEnabled,e=>{Dr(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,i])=>{this.plugins[e.id]=new e(this,i)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[t,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[t];this.children.slice().forEach(t=>t.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[Wi]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new ls)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=mo(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return ph(this.parent,Pt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new hs(this.getSize())),this.navbar.autoSize())}setPanorama(t,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const i=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection;const n=r=>{if(xh(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new gd(t,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new dd(t));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),co();const a=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!_t(a.zoom)||!_t(a.position))&&this.stopAll(),{textureData:r,cleanOptions:a}});return!i||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new kn(r)),_t(a.zoom)||this.zoom(a.zoom),_t(a.position)||this.rotate(a.position)}).then(()=>n(),r=>n(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new kn(r)),this.state.transitionAnimation=this.renderer.transition(r,a,i),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new yd(r)),!r)throw co()}).then(()=>n(),r=>n(r)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[i,n]of Object.entries(t)){if(!(i in Ai)){xt(`Unknown option ${i}`);continue}if(i in ac){xt(ac[i]);continue}switch(i in go&&(n=go[i](n,{rawConfig:e,defValue:Ai[i]})),this.config[i]=n,i){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new Si(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Ut(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:wt.ERROR,image:dy,title:t,dismissible:!1})}hideError(){this.overlay.hide(wt.ERROR)}rotate(t){const e=new Oh(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=zo(t),i=!_t(t.zoom),n=new Vo(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(n),n.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(t.speed,n.position,n.zoomLevel);return s?(this.state.animation=new Sr({properties:r,duration:s,easing:t.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),i&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(n.position),i&&this.zoom(n.zoomLevel),new Sr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){["width","height"].forEach(e=>{t?.[e]&&(/^[0-9.]+$/.test(t[e])&&(t[e]+="px"),this.parent.style[e]=t[e])})}enterFullscreen(){this.isFullscreenEnabled()||fh(this.parent,Pt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&mh(Pt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new hy(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new ds),this.disableIdleTimer(),this.stopAnimation()}};/*!
 * Photo Sphere Viewer / Virtual Tour Plugin 5.13.3
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var My=Object.defineProperty,Sy=(t,e)=>{for(var i in e)My(t,i,{get:e[i],enumerable:!0})},by={};Sy(by,{EnterArrowEvent:()=>gu,LeaveArrowEvent:()=>yu,NodeChangedEvent:()=>pu});var du=class uu extends Cs{constructor(e,i){super(uu.type),this.node=e,this.data=i}};du.type="node-changed";var pu=du,fu=class mu extends Cs{constructor(e,i){super(mu.type),this.link=e,this.node=i}};fu.type="enter-arrow";var gu=fu,vu=class _u extends Cs{constructor(e,i){super(_u.type),this.link=e,this.node=i}};vu.type="leave-arrow";var yu=vu,Ty=class extends Tt{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ke(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},An=new U,cc=new et,hc=new et,dc=new U,uc=new U,Ay=class{constructor(t={}){const e=this;let i,n,s,r;const a={objects:new WeakMap},o=t.element!==void 0?t.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o,this.getSize=function(){return{width:i,height:n}},this.render=function(m,g){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),cc.copy(g.matrixWorldInverse),hc.multiplyMatrices(g.projectionMatrix,cc),h(m,m,g),f(m)},this.setSize=function(m,g){i=m,n=g,s=i/2,r=n/2,o.style.width=m+"px",o.style.height=g+"px"};function l(m){m.isCSS2DObject&&(m.element.style.display="none");for(let g=0,_=m.children.length;g<_;g++)l(m.children[g])}function h(m,g,_){if(m.visible===!1){l(m);return}if(m.isCSS2DObject){An.setFromMatrixPosition(m.matrixWorld),An.applyMatrix4(hc);const u=An.z>=-1&&An.z<=1&&m.layers.test(_.layers)===!0,c=m.element;c.style.display=u===!0?"":"none",u===!0&&(m.onBeforeRender(e,g,_),c.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(An.x*s+s)+"px,"+(-An.y*r+r)+"px)",c.parentNode!==o&&o.appendChild(c),m.onAfterRender(e,g,_));const b={distanceToCameraSquared:d(_,m)};a.objects.set(m,b)}for(let u=0,c=m.children.length;u<c;u++)h(m.children[u],g,_)}function d(m,g){return dc.setFromMatrixPosition(m.matrixWorld),uc.setFromMatrixPosition(g.matrixWorld),dc.distanceToSquared(uc)}function p(m){const g=[];return m.traverseVisible(function(_){_.isCSS2DObject&&g.push(_)}),g}function f(m){const g=p(m).sort(function(u,c){if(u.renderOrder!==c.renderOrder)return c.renderOrder-u.renderOrder;const b=a.objects.get(u).distanceToCameraSquared,S=a.objects.get(c).distanceToCameraSquared;return b-S}),_=g.length;for(let u=0,c=g.length;u<c;u++)g[u].element.style.zIndex=_-u}}},pc=new U,Cy=new Xi,fc=new U,Ry=class extends Tt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof i.element.ownerDocument.defaultView.Element&&i.element.parentNode!==null&&i.element.remove()})})}copy(e,i){return super.copy(e,i),this.element=e.element.cloneNode(!0),this}},ri=new et,Py=new et,Ly=class{constructor(e={}){const i=this;let n,s,r,a;const o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const h=document.createElement("div");h.style.transformOrigin="0 0",h.style.pointerEvents="none",l.appendChild(h);const d=document.createElement("div");d.style.transformStyle="preserve-3d",h.appendChild(d),this.getSize=function(){return{width:n,height:s}},this.render=function(u,c){const b=c.projectionMatrix.elements[5]*a;c.view&&c.view.enabled?(h.style.transform=`translate( ${-c.view.offsetX*(n/c.view.width)}px, ${-c.view.offsetY*(s/c.view.height)}px )`,h.style.transform+=`scale( ${c.view.fullWidth/c.view.width}, ${c.view.fullHeight/c.view.height} )`):h.style.transform="",u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),c.parent===null&&c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld();let S,x;c.isOrthographicCamera&&(S=-(c.right+c.left)/2,x=(c.top+c.bottom)/2);const L=c.view&&c.view.enabled?c.view.height/c.view.fullHeight:1,C=c.isOrthographicCamera?`scale( ${L} )scale(`+b+")translate("+p(S)+"px,"+p(x)+"px)"+f(c.matrixWorldInverse):`scale( ${L} )translateZ(`+b+"px)"+f(c.matrixWorldInverse),N=(c.isPerspectiveCamera?"perspective("+b+"px) ":"")+C+"translate("+r+"px,"+a+"px)";o.camera.style!==N&&(d.style.transform=N,o.camera.style=N),_(u,u,c)},this.setSize=function(u,c){n=u,s=c,r=n/2,a=s/2,l.style.width=u+"px",l.style.height=c+"px",h.style.width=u+"px",h.style.height=c+"px",d.style.width=u+"px",d.style.height=c+"px"};function p(u){return Math.abs(u)<1e-10?0:u}function f(u){const c=u.elements;return"matrix3d("+p(c[0])+","+p(-c[1])+","+p(c[2])+","+p(c[3])+","+p(c[4])+","+p(-c[5])+","+p(c[6])+","+p(c[7])+","+p(c[8])+","+p(-c[9])+","+p(c[10])+","+p(c[11])+","+p(c[12])+","+p(-c[13])+","+p(c[14])+","+p(c[15])+")"}function m(u){const c=u.elements;return"translate(-50%,-50%)"+("matrix3d("+p(c[0])+","+p(c[1])+","+p(c[2])+","+p(c[3])+","+p(-c[4])+","+p(-c[5])+","+p(-c[6])+","+p(-c[7])+","+p(c[8])+","+p(c[9])+","+p(c[10])+","+p(c[11])+","+p(c[12])+","+p(c[13])+","+p(c[14])+","+p(c[15])+")")}function g(u){u.isCSS3DObject&&(u.element.style.display="none");for(let c=0,b=u.children.length;c<b;c++)g(u.children[c])}function _(u,c,b,S){if(u.visible===!1){g(u);return}if(u.isCSS3DObject){const x=u.layers.test(b.layers)===!0,L=u.element;if(L.style.display=x===!0?"":"none",x===!0){u.onBeforeRender(i,c,b);let C;u.isCSS3DSprite?(ri.copy(b.matrixWorldInverse),ri.transpose(),u.rotation2D!==0&&ri.multiply(Py.makeRotationZ(u.rotation2D)),u.matrixWorld.decompose(pc,Cy,fc),ri.setPosition(pc),ri.scale(fc),ri.elements[3]=0,ri.elements[7]=0,ri.elements[11]=0,ri.elements[15]=1,C=m(ri)):C=m(u.matrixWorld);const A=o.objects.get(u);if(A===void 0||A.style!==C){L.style.transform=C;const N={style:C};o.objects.set(u,N)}L.parentNode!==d&&d.appendChild(L),u.onAfterRender(i,c,b)}}for(let x=0,L=u.children.length;x<L;x++)_(u.children[x],c,b)}}},Dy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill-rule="even-odd" fill="currentColor" d="
        M50,50 m45,0
        a45,45 0 1,0 -90,0
        a45,45 0 1,0  90,0

        M50,50 m38,0
        a38,38 0 0,1 -76,0
        a38,38 0 0,1  76,0

        M50,50 m30,0
        a30,30 0 1,0 -60,0
        a30,30 0 1,0  60,0
        
        M50,40 m2.5,-2.5
        l17.5,17.5
        a 2.5,2.5 0 0 1 -5,5
        l-15,-15
        l-15,15
        a 2.5,2.5 0 0 1 -5,-5
        l17.5,-17.5
        a 3.5,3.5 0 0 1 5,0
    "/>
</svg>`,Tr="tourLink",Cn="__tour-link__",Iy={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},Uy={element:()=>{const t=document.createElement("button");return t.className="psv-virtual-tour-arrow",t.innerHTML=Dy,t},size:{width:80,height:80}},va="arrow",Ny=class extends Ki{constructor(t,e){super(t,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new Ly({element:this.container}):new Ay({element:this.container}),this.camera=this.is3D?new zt(30,1):null,this.scene=new yr,this.viewer.addEventListener(_e.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(_e.PositionUpdatedEvent.type,this),this.viewer.addEventListener(_e.SizeUpdatedEvent.type,this),this.viewer.addEventListener(_e.RenderEvent.type,this),this.viewer.addEventListener(_e.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",i=>i.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),this.gallery?.addEventListener("show-gallery",this),this.gallery?.addEventListener("hide-gallery",this))}destroy(){this.viewer.removeEventListener(_e.ReadyEvent.type,this),this.viewer.removeEventListener(_e.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(_e.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(_e.RenderEvent.type,this),this.viewer.removeEventListener(_e.ClickEvent.type,this),this.gallery?.removeEventListener("show-gallery",this),this.gallery?.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(t){switch(t.type){case _e.ReadyEvent.type:case _e.SizeUpdatedEvent.type:case _e.PositionUpdatedEvent.type:this.__updateCamera();break;case _e.RenderEvent.type:this.render();break;case _e.ClickEvent.type:{if(t.data.rightclick)break;const e=this.__getTargetLink(t.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(he.getEventTarget(t));e&&this.plugin.__onEnterArrow(e,t);break}case"mouseleave":{const e=this.__getTargetLink(he.getEventTarget(t));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(he.getEventTarget(t),!0)&&this.plugin.__onHoverArrow(t);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":t.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const t=this.viewer.getSize();if(this.renderer.setSize(t.width,t.height),this.is3D){const e=this.viewer.getPosition();e.pitch=Oe.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,t.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(t.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const t=this.viewer.getPosition(),e=[];let i=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(n=>{const s=n.userData[va];if(s.conflict){const r=Math.abs(he.getShortestArc(t.yaw,s.yaw));i=Math.min(i,r),e.push([n,r])}}),e.forEach(([n,s])=>{const r=s!==i;n.element.style.opacity=r?"0.5":null,n.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(t,e){if(e?.image){const i=document.createElement("img");return i.src=e.image,i}else if(e?.element)return typeof e.element=="function"?e.element(t):e.element}addLinkArrow(t,e,i=1){let n=this.__buildArrowElement(t,t.arrowStyle);n||(n=this.__buildArrowElement(t,this.arrowStyle)),n[Tr]=t;const s={...this.arrowStyle,...t.arrowStyle};if(n.classList.add("psv-virtual-tour-link"),s.className&&he.addClasses(n,s.className),s.style&&Object.assign(n.style,s.style),this.is3D){n.style.width=s.size.width*1.5+"px",n.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(o=>{const l=o.userData[va];Math.abs(he.getShortestArc(l.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(l.conflict=!0,r=!0)});const a=new Ry(n);a.userData[va]={yaw:e.yaw,conflict:r},a.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},a.position,i*100),this.scene.add(a)}else{n.style.width=s.size.width+"px",n.style.height=s.size.height+"px",n.style.pointerEvents="auto";const r=new Ty(n);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(t,e=!1){const i=e?he.getClosest(t,".psv-virtual-tour-link"):t;return i?i[Tr]:void 0}__onToggleGallery(t){t?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},wu=class{constructor(t,e){this.plugin=t,this.viewer=e,this.nodes={}}destroy(){}checkNode(t){if(!t.id)throw new le("No id given for node");if(!t.panorama)throw new le(`No panorama provided for node ${t.id}`);if(this.plugin.isGps&&!(t.gps?.length>=2))throw new le(`No GPS position provided for node ${t.id}`);if(!this.plugin.isGps&&t.markers?.some(e=>e.gps&&!e.position))throw new le("Cannot use GPS positioning for markers in manual mode");t.links||(he.logWarn(`Node ${t.id} has no links`),t.links=[])}checkLink(t,e){if(!e.nodeId)throw new le(`Link of node ${t.id} has no target id`);if(e.nodeId===t.id)throw new le(`Node ${t.id} links to itself`);if(!this.plugin.isGps&&!he.isExtendedPosition(e.position))throw new le(`No position provided for link ${e.nodeId} of node ${t.id}`);if(this.plugin.isGps&&!e.gps)throw new le(`No GPS position provided for link ${e.nodeId} of node ${t.id}`)}},ky=class extends wu{async loadNode(t){if(this.nodes[t])return this.nodes[t];throw new le(`Node ${t} not found`)}setNodes(t){if(!t?.length)throw new le("No nodes provided");const e={},i={};t.forEach(n=>{if(this.checkNode(n),e[n.id])throw new le(`Duplicate node ${n.id}`);e[n.id]=n}),t.forEach(n=>{this.__checkLinks(n,e),n.links.forEach(s=>{i[s.nodeId]=!0})}),t.forEach(n=>{i[n.id]||he.logWarn(`Node ${n.id} is never linked to`)}),this.nodes=e}updateNode(t){if(!t.id)throw new le("No id given for node");const e=this.nodes[t.id];if(!e)throw new le(`Node ${t.id} does not exist`);return Object.assign(e,t),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(t,e){t.links.forEach(i=>{if(!e[i.nodeId])throw new le(`Target node ${i.nodeId} of node ${t.id} does not exists`);i.gps=i.gps||e[i.nodeId].gps,this.checkLink(t,i)})}},Oy=class extends wu{constructor(t,e){if(super(t,e),!t.config.getNode)throw new le("Missing getNode() option.");this.nodeResolver=t.config.getNode}async loadNode(t){if(this.nodes[t])return this.nodes[t];{const e=await this.nodeResolver(t);return this.checkNode(e),e.links.forEach(i=>{this.checkLink(e,i)}),this.nodes[t]=e,e}}clearCache(){this.nodes={}}};function mc(t,e){const i=gc(t),n=gc(e),s=t[2]??0,r=e[2]??0;let a=0;return s!==r&&(a=Math.atan((r-s)/Fy(i,n))),{yaw:zy(i,n),pitch:a}}function gc(t){return[Oe.degToRad(t[0]),Oe.degToRad(t[1])]}function Fy(t,e){return he.greatArcDistance(t,e)*6371e3}function zy(t,e){const[i,n]=t,[s,r]=e,a=Math.sin(s-i)*Math.cos(r),o=Math.cos(n)*Math.sin(r)-Math.sin(n)*Math.cos(r)*Math.cos(s-i);return Math.atan2(a,o)}var Yo=he.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,arrowStyle:Uy,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(t){if(t!=="client"&&t!=="server")throw new le("VirtualTourPlugin: invalid dataMode");return t},positionMode(t){if(t!=="gps"&&t!=="manual")throw new le("VirtualTourPlugin: invalid positionMode");return t},renderMode(t){if(t!=="3d"&&t!=="2d")throw new le("VirtualTourPlugin: invalid renderMode");return t},arrowsPosition(t,{defValue:e}){return{...e,...t}},arrowStyle(t,{defValue:e}){return{...e,...t}},map(t,{rawConfig:e}){if(t){if(e.dataMode==="server")return he.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!t.imageUrl)return he.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null}return t}}),Ds=class extends jo{constructor(t,e){super(t,e),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new Ny(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}init(){super.init(),this.arrowsRenderer.init(),he.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),this.markers?.config.markers&&(he.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&he.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new Oy(this,this.viewer):new ky(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),this.plan?.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){this.map?.removeEventListener("select-hotspot",this),this.plan?.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(t){if(t instanceof _e.ClickEvent){const e=t.data.objects.find(i=>i.userData[Tr])?.userData[Tr];e&&this.setCurrentNode(e.nodeId,null,e)}else if(t.type==="select-hotspot"){const e=t.hotspotId;e.startsWith(Cn)&&this.setCurrentNode(e.substring(Cn.length))}}getCurrentNode(){return this.state.currentNode}setNodes(t,e){if(this.isServerSide)throw new le("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(t),e?this.datasource.nodes[e]||(e=t[0].id,he.logWarn(`startNodeId not found is provided nodes, resetted to ${e}`)):e=t[0].id,this.setCurrentNode(e),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(t,e,i){if(t===this.state.currentNode?.id&&!e?.forceUpdate)return Promise.resolve(!0);e?.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=t;const n=this.state.currentNode,s=n&&i?this.__getLinkPosition(n,i):null;return Promise.resolve(this.state.preload[t]).then(()=>{if(this.state.loadingNode!==t)throw he.getAbortError();return this.datasource.loadNode(t)}).then(r=>{if(this.state.loadingNode!==t)throw he.getAbortError();const a={...Yo.defaults.transitionOptions,rotateTo:s,zoomTo:s?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(r,n,i):this.config.transitionOptions,...e};return a.effect||(a.effect="none"),this.viewer.panel.hide("description"),this.__hideTooltip(),this.arrowsRenderer.clear(),this.gallery?.config.hideOnClick&&this.gallery.hide(),this.map?.config.minimizeOnHotspotClick&&this.map.minimize(),this.plan?.config.minimizeOnHotspotClick&&this.plan.minimize(),a.rotation&&a.effect==="none"?this.viewer.animate({...a.rotateTo,zoom:a.zoomTo,speed:a.speed}).then(()=>[r,a]):Promise.resolve([r,a])}).then(([r,a])=>{if(this.state.loadingNode!==t)throw he.getAbortError();return this.markers?.clearMarkers(),this.config.linksOnCompass&&this.compass?.clearHotspots(),this.viewer.setPanorama(r.panorama,{caption:r.caption,description:r.description,panoData:r.panoData,sphereCorrection:r.sphereCorrection,showLoader:a.showLoader,position:a.rotateTo,zoom:a.zoomTo,transition:a.effect==="none"?!1:{effect:a.effect,rotation:a.rotation,speed:a.speed}}).then(o=>{if(!o)throw he.getAbortError();return r})}).then(r=>{if(this.state.loadingNode!==t)throw he.getAbortError();return this.state.currentNode=r,this.map&&this.map.setCenter(this.__getNodeMapPosition(r)??this.map.config.center),this.plan?.setCoordinates(r.gps),this.__addNodeMarkers(r),this.__renderLinks(r),this.__preload(r),this.state.loadingNode=null,this.dispatchEvent(new pu(r,{fromNode:n,fromLink:i,fromLinkPosition:s})),this.viewer.resetIdleTimer(),!0}).catch(r=>{if(he.isAbortError(r))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,r})}async gotoLink(t,e="8rpm"){const i=this.getLinkPosition(t);e?await this.viewer.animate({...i,speed:e}):this.viewer.rotate(i)}getLinkPosition(t){const e=this.state.currentNode?.links.find(i=>i.nodeId===t);if(!e)throw new le(`Cannot find link "${t}"`);return this.__getLinkPosition(this.state.currentNode,e)}updateNode(t){if(this.isServerSide)throw new le("Cannot update node in server side mode");const e=this.datasource.updateNode(t);if((t.name||t.thumbnail||t.panorama)&&this.__setGalleryItems(),(t.name||t.gps||t.map)&&this.__setMapHotspots(),(t.name||t.gps||t.plan)&&this.__setPlanHotspots(),this.state.currentNode?.id===e.id){if(this.__hideTooltip(),t.panorama||t.panoData||t.sphereCorrection){this.setCurrentNode(e.id,{forceUpdate:!0});return}t.caption&&this.viewer.setOption("caption",e.caption),t.description&&this.viewer.setOption("description",e.description),(t.links||t.gps)&&this.__renderLinks(e),t.gps&&this.plan?.setCoordinates(e.gps),(t.map||t.gps)&&this.map?.setCenter(this.__getNodeMapPosition(e)),(t.markers||t.gps)&&this.__addNodeMarkers(e)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).filter(t=>t.showInGallery!==!1).map(t=>({id:t.id,panorama:t.panorama,name:t.name,thumbnail:t.thumbnail})),t=>{this.setCurrentNode(t)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).filter(t=>t.map!==!1).map(t=>({tooltip:t.name,...t.map||{},...this.__getNodeMapPosition(t),id:Cn+t.id})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).filter(t=>t.plan!==!1).map(t=>({tooltip:t.name,...t.plan||{},coordinates:t.gps,id:Cn+t.id})))}__renderLinks(t){this.arrowsRenderer.clear();const e=[];t.links.forEach(i=>{const n=this.__getLinkPosition(t,i);n.yaw+=i.linkOffset?.yaw??0,n.pitch+=i.linkOffset?.pitch??0,this.isGps&&!this.is3D&&(n.pitch+=this.config.arrowsPosition.linkPitchOffset),e.push(n),this.arrowsRenderer.addLinkArrow(i,n,i.linkOffset?.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&this.compass?.setHotspots(e)}__getLinkPosition(t,e){return this.isGps?mc(t.gps,e.gps):this.viewer.dataHelper.cleanPosition(e.position)}async __getTooltipContent(t){const e=await this.datasource.loadNode(t.nodeId),i=[];(e.name||e.thumbnail||e.caption)&&(e.name&&i.push(`<h3>${e.name}</h3>`),e.thumbnail&&i.push(`<img src="${e.thumbnail}">`),e.caption&&i.push(`<p>${e.caption}</p>`));let n=i.join("");return this.config.getLinkTooltip&&(n=this.config.getLinkTooltip(n,t,e)),n}__onEnterArrow(t,e){const i=he.getPosition(this.viewer.container),n={x:e.clientX-i.x,y:e.clientY-i.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...Iy,left:n.x,top:n.y,box:{width:20,height:20}}),this.__getTooltipContent(t).then(s=>{s?this.state.currentTooltip.update(s):this.__hideTooltip()})),this.map?.setActiveHotspot(Cn+t.nodeId),this.plan?.setActiveHotspot(Cn+t.nodeId),this.dispatchEvent(new gu(t,this.state.currentNode))}__onHoverArrow(t){const e=he.getPosition(this.viewer.container),i={x:t.clientX-e.x,y:t.clientY-e.y};this.state.currentTooltip?.move({left:i.x,top:i.y})}__onLeaveArrow(t){this.__hideTooltip(),this.map?.setActiveHotspot(null),this.plan?.setActiveHotspot(null),this.dispatchEvent(new yu(t,this.state.currentNode))}__hideTooltip(){this.state.currentTooltip?.hide(),this.state.currentTooltip=null}__preload(t){this.config.preload&&(this.state.preload[t.id]=!0,this.state.currentNode.links.filter(e=>!this.state.preload[e.nodeId]).filter(e=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,e):!0).forEach(e=>{this.state.preload[e.nodeId]=this.datasource.loadNode(e.nodeId).then(i=>this.viewer.textureLoader.preloadPanorama(i.panorama)).then(()=>{this.state.preload[e.nodeId]=!0}).catch(()=>{delete this.state.preload[e.nodeId]})}))}__addNodeMarkers(t){t.markers&&(this.markers?this.markers.setMarkers(t.markers.map(e=>(e.gps&&this.isGps&&(e.position=mc(t.gps,e.gps),e.data?.map&&Object.assign(e.data.map,this.__getGpsMapPosition(e.gps)),e.data?.plan&&(e.data.plan.coordinates=e.gps)),e))):he.logWarn(`Node ${t.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(t){const e=this.__getGpsMapPosition(t.gps);return e||(t.map?{x:t.map.x,y:t.map.y}:null)}__getGpsMapPosition(t){const e=this.config.map;return this.isGps&&e&&e.extent&&e.size?{x:Oe.mapLinear(t[0],e.extent[0],e.extent[2],0,e.size.width),y:Oe.mapLinear(t[1],e.extent[1],e.extent[3],0,e.size.height)}:null}};Ds.id="virtual-tour";Ds.VERSION="5.13.3";Ds.configParser=Yo;Ds.readonlyOptions=Object.keys(Yo.defaults);/*!
 * Photo Sphere Viewer / Markers Plugin 5.13.3
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var By=Object.defineProperty,Hy=(t,e)=>{for(var i in e)By(t,i,{get:e[i],enumerable:!0})},Vy={};Hy(Vy,{EnterMarkerEvent:()=>Lu,GotoMarkerDoneEvent:()=>_o,HideMarkersEvent:()=>us,LeaveMarkerEvent:()=>Cu,MarkerVisibilityEvent:()=>Mu,MarkersPluginEvent:()=>Yt,RenderMarkersListEvent:()=>$u,SelectMarkerEvent:()=>Uu,SelectMarkerListEvent:()=>Ou,SetMarkersEvent:()=>Xu,ShowMarkersEvent:()=>ps,UnselectMarkerEvent:()=>Bu});var Yt=class extends Cs{},xu=class Eu extends Yt{constructor(e,i){super(Eu.type),this.marker=e,this.visible=i}};xu.type="marker-visibility";var Mu=xu,Su=class bu extends Yt{constructor(e){super(bu.type),this.marker=e}};Su.type="goto-marker-done";var _o=Su,Tu=class Au extends Yt{constructor(e){super(Au.type),this.marker=e}};Tu.type="leave-marker";var Cu=Tu,Ru=class Pu extends Yt{constructor(e){super(Pu.type),this.marker=e}};Ru.type="enter-marker";var Lu=Ru,Du=class Iu extends Yt{constructor(e,i,n){super(Iu.type),this.marker=e,this.doubleClick=i,this.rightClick=n}};Du.type="select-marker";var Uu=Du,Nu=class ku extends Yt{constructor(e){super(ku.type),this.marker=e}};Nu.type="select-marker-list";var Ou=Nu,Fu=class zu extends Yt{constructor(e){super(zu.type),this.marker=e}};Fu.type="unselect-marker";var Bu=Fu,Hu=class Vu extends Yt{constructor(){super(Vu.type)}};Hu.type="hide-markers";var us=Hu,Gu=class Wu extends Yt{constructor(e){super(Wu.type),this.markers=e}};Gu.type="set-markers";var Xu=Gu,ju=class Ku extends Yt{constructor(){super(Ku.type)}};ju.type="show-markers";var ps=ju,Yu=class qu extends Yt{constructor(e){super(qu.type),this.markers=e}};Yu.type="render-markers-list";var $u=Yu,Gy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,xs=class extends Lt{constructor(t){super(t,{className:"psv-markers-button",icon:Gy,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(ps.type,this),this.plugin.addEventListener(us.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(ps.type,this),this.plugin.removeEventListener(us.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof ps?this.toggleActive(!0):t instanceof us&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};xs.id="markers";var Zu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Ar="http://www.w3.org/2000/svg",rt="psvMarker",Wy=he.dasherize(rt),Zn="marker",Ln="markersList",yo={amount:2,duration:100,easing:"linear"},Xy=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Zu} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${t.map(i=>`
        <li data-${Wy}="${i.id}" class="psv-panel-menu-item" tabindex="0">
          ${i.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${i.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${i.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,zr=class extends Lt{constructor(t){super(t,{className:" psv-markers-list-button",icon:Zu,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(_e.ShowPanelEvent.type,this),this.viewer.addEventListener(_e.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(_e.ShowPanelEvent.type,this),this.viewer.removeEventListener(_e.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof _e.ShowPanelEvent?this.toggleActive(t.panelId===Ln):t instanceof _e.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};zr.id="markersList";var vc=new U,jy=new Xi,_c=new U,Ky=class extends Tt{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}},ai=new et,Yy=new et,qy=class{constructor(t={}){const e=this;let i,n,s,r;const a={camera:{style:""},objects:new WeakMap},o=t.element!==void 0?t.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",o.appendChild(l);const h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:i,height:n}},this.render=function(_,u){const c=u.projectionMatrix.elements[5]*r;u.view&&u.view.enabled?(l.style.transform=`translate( ${-u.view.offsetX*(i/u.view.width)}px, ${-u.view.offsetY*(n/u.view.height)}px )`,l.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):l.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let b,S;u.isOrthographicCamera&&(b=-(u.right+u.left)/2,S=(u.top+u.bottom)/2);const x=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,L=u.isOrthographicCamera?`scale( ${x} )scale(`+c+")translate("+d(b)+"px,"+d(S)+"px)"+p(u.matrixWorldInverse):`scale( ${x} )translateZ(`+c+"px)"+p(u.matrixWorldInverse),A=(u.isPerspectiveCamera?"perspective("+c+"px) ":"")+L+"translate("+s+"px,"+r+"px)";a.camera.style!==A&&(h.style.transform=A,a.camera.style=A),g(_,_,u)},this.setSize=function(_,u){i=_,n=u,s=i/2,r=n/2,o.style.width=_+"px",o.style.height=u+"px",l.style.width=_+"px",l.style.height=u+"px",h.style.width=_+"px",h.style.height=u+"px"};function d(_){return Math.abs(_)<1e-10?0:_}function p(_){const u=_.elements;return"matrix3d("+d(u[0])+","+d(-u[1])+","+d(u[2])+","+d(u[3])+","+d(u[4])+","+d(-u[5])+","+d(u[6])+","+d(u[7])+","+d(u[8])+","+d(-u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(-u[13])+","+d(u[14])+","+d(u[15])+")"}function f(_){const u=_.elements;return"translate(-50%,-50%)"+("matrix3d("+d(u[0])+","+d(u[1])+","+d(u[2])+","+d(u[3])+","+d(-u[4])+","+d(-u[5])+","+d(-u[6])+","+d(-u[7])+","+d(u[8])+","+d(u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(u[13])+","+d(u[14])+","+d(u[15])+")")}function m(_){_.isCSS3DObject&&(_.element.style.display="none");for(let u=0,c=_.children.length;u<c;u++)m(_.children[u])}function g(_,u,c,b){if(_.visible===!1){m(_);return}if(_.isCSS3DObject){const S=_.layers.test(c.layers)===!0,x=_.element;if(x.style.display=S===!0?"":"none",S===!0){_.onBeforeRender(e,u,c);let L;_.isCSS3DSprite?(ai.copy(c.matrixWorldInverse),ai.transpose(),_.rotation2D!==0&&ai.multiply(Yy.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(vc,jy,_c),ai.setPosition(vc),ai.scale(_c),ai.elements[3]=0,ai.elements[7]=0,ai.elements[11]=0,ai.elements[15]=1,L=f(ai)):L=f(_.matrixWorld);const C=a.objects.get(_);if(C===void 0||C.style!==L){x.style.transform=L;const A={style:L};a.objects.set(_,A)}x.parentNode!==h&&h.appendChild(x),_.onAfterRender(e,u,c)}}for(let S=0,x=_.children.length;S<x;S++)g(_.children[S],u,c)}}},$y=class{constructor(t){this.viewer=t,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new qy({element:this.element}),this.scene=new yr,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(i=>{const n=i.target[rt];n.config.visible&&(n.viewportIntersection=i.isIntersecting)})},{root:this.element}),t.addEventListener(_e.ReadyEvent.type,this,{once:!0}),t.addEventListener(_e.SizeUpdatedEvent.type,this),t.addEventListener(_e.RenderEvent.type,this)}handleEvent(t){switch(t.type){case _e.ReadyEvent.type:case _e.SizeUpdatedEvent.type:this.updateSize();break;case _e.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(_e.ReadyEvent.type,this),this.viewer.removeEventListener(_e.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(_e.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const t=this.viewer.getSize();this.renderer.setSize(t.width,t.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(t){this.scene.add(t.threeElement),this.intersectionObserver.observe(t.domElement)}removeObject(t){this.scene.remove(t.threeElement),this.intersectionObserver.unobserve(t.domElement)}},mr=(t=>(t.image="image",t.html="html",t.element="element",t.imageLayer="imageLayer",t.videoLayer="videoLayer",t.elementLayer="elementLayer",t.polygon="polygon",t.polygonPixels="polygonPixels",t.polyline="polyline",t.polylinePixels="polylinePixels",t.square="square",t.rect="rect",t.circle="circle",t.ellipse="ellipse",t.path="path",t))(mr||{});function wo(t,e=!1){const i=[];if(Object.keys(mr).forEach(n=>{t[n]&&i.push(n)}),i.length===0&&!e)throw new le(`missing marker content, either ${Object.keys(mr).join(", ")}`);if(i.length>1)throw new le(`multiple marker content, either ${Object.keys(mr).join(", ")}`);return i[0]}var Ju=class{constructor(t,e,i){if(this.viewer=t,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!i.id)throw new le("missing marker id");this.type=wo(i),this.createElement(),this.update(i)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(t){const e=wo(t,!0);if(e!==void 0&&e!==this.type)throw new le(`cannot change marker ${t.id} type`);if(this.config=he.deepmerge(this.config,t),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),he.isNil(this.config.visible)&&(this.config.visible=!0),he.isNil(this.config.zIndex)&&(this.config.zIndex=1),he.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const i=this.config.rotation;typeof i=="object"?this.config.rotation={yaw:i.yaw?he.parseAngle(i.yaw,!0,!1):0,pitch:i.pitch?he.parseAngle(i.pitch,!0,!1):0,roll:i.roll?he.parseAngle(i.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:he.parseAngle(i,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=he.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(t,e,i=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const n={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(t||e){const s=he.getPosition(this.viewer.container);n.top=e-s.y+10,n.left=t-s.x,n.box={width:20,height:20}}else n.top=this.state.position2D.y,n.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,a=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,a*=this.config.hoverScale.amount),n.top=s.y-a*this.state.anchor.y+a/2,n.left=s.x-r*this.state.anchor.x+r/2,n.box={width:r,height:a}}this.tooltip?i?this.tooltip.update(this.config.tooltip.content,n):this.tooltip.move(n):this.tooltip=this.viewer.createTooltip(n)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},qo=class extends Ju{get domElement(){return this.element}constructor(t,e,i){super(t,e,i)}afterCreateElement(){this.element[rt]=this}destroy(){delete this.element[rt],super.destroy()}update(t){super.update(t);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&he.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},Cr=class extends qo{constructor(t,e,i){super(t,e,i)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:t,zoomLevel:e,hoveringMarker:i}){this.__updateSize();const n=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return n.x-=this.state.size.width*this.state.anchor.x,n.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&n.x+this.state.size.width>=0&&n.x-this.state.size.width<=this.viewer.state.size.width&&n.y+this.state.size.height>=0&&n.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${n.x}px ${n.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:t,mouseover:this===i}),n):null}update(t){if(super.update(t),!he.isExtendedPosition(this.config.position))throw new le(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new le(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||yo:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?Oe.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const t=this.domElement,e=!this.state.visible||!this.state.size;if(e&&t.classList.add("psv-marker--transparent"),this.isSvg()){const i=t.firstElementChild.getBoundingClientRect();this.state.size={width:i.width,height:i.height}}else this.state.size={width:t.offsetWidth,height:t.offsetHeight};e&&t.classList.remove("psv-marker--transparent"),this.isSvg()&&(t.style.width=this.state.size.width+"px",t.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:t,viewerPosition:e,mouseover:i}){i!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let n=1;if(typeof this.config.scale=="function")n=this.config.scale(t,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;n*=s+(r-s)*ys.EASINGS.inQuad(t/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,a=Oe.degToRad(this.viewer.state.hFov)/2,o=Math.abs(he.getShortestArc(this.state.position.yaw,e.yaw));n*=r+(s-r)*ys.EASINGS.outQuad(Math.max(0,(a-o)/a))}}i&&this.config.hoverScale&&(n*=this.config.hoverScale.amount),this.domElement.style.scale=`${n}`}},Zy=`// https://www.8thwall.com/playground/chromakey-threejs

uniform sampler2D map;
uniform float alpha;
uniform bool keying;
uniform vec3 color;
uniform float similarity;
uniform float smoothness;
uniform float spill;

varying vec2 vUv;

vec2 RGBtoUV(vec3 rgb) {
    return vec2(
        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
}

void main(void) {
    gl_FragColor = texture2D(map, vUv);

    if (keying) {
        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));

        float baseMask = chromaDist - similarity;
        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
        gl_FragColor.a *= fullMask * alpha;

        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);
        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);
    } else {
        gl_FragColor.a *= alpha;
    }
}
`,Jy=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,Qy=class extends Ti{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}set alpha(t){this.uniforms.alpha.value=t}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(t){this.uniforms.keying.value=t?.enabled===!0,t?.enabled&&(typeof t.color=="object"&&"r"in t.color?this.uniforms.color.value.set(t.color.r/255,t.color.g/255,t.color.b/255):this.uniforms.color.value.set(t.color??65280),this.uniforms.similarity.value=t.similarity??.2,this.uniforms.smoothness.value=t.smoothness??.2)}constructor(t){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:t?.map},repeat:{value:new Ke(1,1)},offset:{value:new Ke(0,0)},alpha:{value:t?.alpha??1},keying:{value:!1},color:{value:new Je(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:Jy,fragmentShader:Zy}),this.chromaKey=t?.chromaKey}};function ew({src:t,withCredentials:e,muted:i,autoplay:n}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=n,s.muted=i,s.preload="metadata",t instanceof MediaStream?s.srcObject=t:s.src=t,s}function tw(t,e,i){const[n,s]=t,[r,a]=e,o=he.greatArcDistance(t,e),l=Math.sin((1-i)*o)/Math.sin(o),h=Math.sin(i*o)/Math.sin(o),d=l*Math.cos(s)*Math.cos(n)+h*Math.cos(a)*Math.cos(r),p=l*Math.cos(s)*Math.sin(n)+h*Math.cos(a)*Math.sin(r),f=l*Math.sin(s)+h*Math.sin(a);return[Math.atan2(p,d),Math.atan2(f,Math.sqrt(d*d+p*p))]}function Qu(t){const e=[t[0]];let i=0;for(let n=1;n<t.length;n++){const s=t[n-1][0]-t[n][0];s>Math.PI?i+=1:s<-Math.PI&&(i-=1),e.push([t[n][0]+i*2*Math.PI,t[n][1]])}return e}function ep(t){const i=Qu(t).reduce((n,s)=>[n[0]+s[0],n[1]+s[1]]);return[he.parseAngle(i[0]/t.length),i[1]/t.length]}function iw(t){const e=Qu(t);let i=0;const n=[];for(let r=0;r<e.length-1;r++){const a=he.greatArcDistance(e[r],e[r+1])*ys.SPHERE_RADIUS;n.push(a),i+=a}let s=0;for(let r=0;r<e.length-1;r++){if(s+n[r]>i/2){const a=(i/2-s)/n[r];return tw(e[r],e[r+1],a)}s+=n[r]}return e[Math.round(e.length/2)]}var rr=new U,yc=new U,_a=new U,wc=new U,xc=new U,Ec=new U;function nw(t,e,i){rr.copy(i).normalize(),yc.crossVectors(t,e).normalize(),_a.crossVectors(yc,t).normalize(),wc.copy(t).multiplyScalar(-rr.dot(_a)),xc.copy(_a).multiplyScalar(rr.dot(t));const n=new U().addVectors(wc,xc).normalize();return Ec.crossVectors(n,rr),n.applyAxisAngle(Ec,.01).multiplyScalar(ys.SPHERE_RADIUS)}var sw=class extends Ju{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(t,e,i){super(t,e,i)}is3d(){return!0}createElement(){const t=new Qy({alpha:0}),e=new bs(1,1),i=new Ht(e,t);i.userData={[rt]:this},Object.defineProperty(i,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(n){this.userData[rt].config.visible=n}}),this.element=new ln().add(i),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[rt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(t){super.update(t);const e=this.threeMesh,i=e.parent,n=e.material;if(he.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new le(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new le(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,i.position),i.lookAt(0,i.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const a=new U;return a.fromBufferAttribute(s,r),e.localToWorld(a)})}else{if(this.config.position?.length!==4)throw new le(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(l=>this.viewer.dataHelper.cleanPosition(l))}catch(l){throw new le(`invalid marker ${this.id} position`,l)}const r=s.map(l=>this.viewer.dataHelper.sphericalCoordsToVector3(l)),a=ep(s.map(({yaw:l,pitch:h})=>[l,h]));this.state.position={yaw:a[0],pitch:a[1]},this.state.positions3D=r;const o=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((l,h)=>{o.setX(h,l.x),o.setY(h,l.y),o.setZ(h,l.z)}),o.needsUpdate=!0,this.__setTextureWrap(n)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){n.map?.dispose();const s=ew({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new Hf(s);n.map=r,n.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(n.alpha=this.config.opacity,he.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(n)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else n.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){n.map?.dispose();const s=new Et;n.map=s,n.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(he.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:r.width,height:r.height},this.__setTextureWrap(n)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,n.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else n.alpha=this.config.opacity;break}n.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(t){const e=t.userData[rt];if(!e||!e.height||!e.width){t.repeat.set(1,1),t.offset.set(0,0);return}const i=this.config.position.map(p=>this.viewer.dataHelper.cleanPosition(p)),n=he.greatArcDistance([i[0].yaw,i[0].pitch],[i[1].yaw,i[1].pitch]),s=he.greatArcDistance([i[3].yaw,i[3].pitch],[i[2].yaw,i[2].pitch]),r=he.greatArcDistance([i[1].yaw,i[1].pitch],[i[2].yaw,i[2].pitch]),a=he.greatArcDistance([i[0].yaw,i[0].pitch],[i[3].yaw,i[3].pitch]),o=(n+s)/(r+a),l=e.width/e.height;let h=0,d=0;o<l?h=l-o:d=1/l-1/o,t.repeat.set(1-h,1-d),t.offset.set(h/2,d/2)}},rw=class extends qo{constructor(t,e,i){super(t,e,i),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new Ky(this.element),this.object.userData={[rt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(t){this.userData[rt].config.visible=t}}),this.afterCreateElement()}destroy(){delete this.object.userData[rt],delete this.object,super.destroy()}render({viewerPosition:t,zoomLevel:e}){const i=this.domElement;if(this.state.size={width:i.offsetWidth,height:i.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:t,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(t){if(super.update(t),!he.isExtendedPosition(this.config.position))throw new le(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new le(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,i=this.domElement;i.classList.add("psv-marker--css3d"),i.childNodes.forEach(n=>n.remove()),i.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},aw=class extends Cr{constructor(t,e,i){super(t,e,i)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(t){const e=super.render(t);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:t.viewerPosition,zoomLevel:t.zoomLevel,viewerSize:this.viewer.state.size}),e}update(t){super.update(t);const e=this.domElement;if(this.config.image&&!this.config.size)throw new le(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(i=>i.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},ow=class extends qo{constructor(t,e,i){super(t,e,i)}createElement(){this.element=document.createElementNS(Ar,"path"),this.element[rt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const t=this.__getAllPolyPositions();if(t[0].length>(this.isPolygon?2:1)){const i=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),n=t.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(a=>`${a.x-i.x},${a.y-i.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",n),this.domElement.setAttributeNS(null,"transform",`translate(${i.x} ${i.y})`),i}else return null}update(t){super.update(t);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([n,s])=>{e.setAttributeNS(null,he.dasherize(n),s)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let n=this.config[this.type];if(!Array.isArray(n[0])&&typeof n[0]!="object")for(let s=0;s<n.length;s++)n.splice(s,2,[n[s],n[s+1]]);if(!Array.isArray(n[0][0])&&typeof n[0][0]!="object"&&(n=[n]),this.isPolyline&&n.length>1)throw new le("polylines cannot have holes");this.isPixels?this.definition=n.map(s=>s.map(r=>{let a;return he.isExtendedPosition(r)?a=this.viewer.dataHelper.cleanPosition(r):a=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:r[0],textureY:r[1]}),[a.yaw,a.pitch]})):this.definition=n.map(s=>s.map(r=>{let a;return he.isExtendedPosition(r)?a=this.viewer.dataHelper.cleanPosition(r):a=this.viewer.dataHelper.cleanPosition({yaw:r[0],pitch:r[1]}),[a.yaw,a.pitch]}))}catch(n){throw new le(`invalid marker ${this.id} position`,n)}const i=this.isPolygon?ep(this.coords[0]):iw(this.coords[0]);this.state.position={yaw:i[0],pitch:i[1]},this.positions3D=this.coords.map(n=>n.map(s=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:s[0],pitch:s[1]}))),this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(t=>this.__getPolyPositions(t))}__getPolyPositions(t){const e=t.length,i=t.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),n=[];return i.forEach((s,r)=>{s.visible||[r===0?i[e-1]:i[r-1],r===e-1?i[0]:i[r+1]].forEach(o=>{o.visible&&n.push({visible:o.vector,invisible:s.vector,index:r})})}),n.reverse().forEach(s=>{i.splice(s.index,0,{vector:nw(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),i.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},lw=class extends Cr{get svgElement(){return this.domElement.firstElementChild}constructor(t,e,i){super(t,e,i)}isSvg(){return!0}createElement(){const t=this.type==="square"?"rect":this.type,e=document.createElementNS(Ar,t);this.element=document.createElementNS(Ar,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(t){super.update(t);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([i,n])=>{e.setAttributeNS(null,i,n)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([i,n])=>{e.setAttributeNS(null,he.dasherize(i),n)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},cw=he.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(t){return t?(t===!0&&(t=yo),typeof t=="number"&&(t={amount:t}),{...yo,...t}):null}});function hw(t){switch(wo(t,!1)){case"image":case"html":case"element":return aw;case"imageLayer":case"videoLayer":return sw;case"elementLayer":return rw;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return ow;case"square":case"rect":case"circle":case"ellipse":case"path":return lw;default:throw new le("invalid marker type")}}var Is=class extends jo{constructor(t,e){super(t,e),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",i=>i.preventDefault()),this.svgContainer=document.createElementNS(Ar,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new $y(t),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}init(){super.init(),he.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(_e.ClickEvent.type,this),this.viewer.addEventListener(_e.DoubleClickEvent.type,this),this.viewer.addEventListener(_e.RenderEvent.type,this),this.viewer.addEventListener(_e.ConfigChangedEvent.type,this),this.viewer.addEventListener(_e.ObjectEnterEvent.type,this),this.viewer.addEventListener(_e.ObjectHoverEvent.type,this),this.viewer.addEventListener(_e.ObjectLeaveEvent.type,this),this.viewer.addEventListener(_e.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(rt),this.viewer.removeEventListener(_e.ClickEvent.type,this),this.viewer.removeEventListener(_e.DoubleClickEvent.type,this),this.viewer.removeEventListener(_e.RenderEvent.type,this),this.viewer.removeEventListener(_e.ObjectEnterEvent.type,this),this.viewer.removeEventListener(_e.ObjectHoverEvent.type,this),this.viewer.removeEventListener(_e.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(_e.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(t){switch(t.type){case _e.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case _e.RenderEvent.type:this.renderMarkers();break;case _e.ClickEvent.type:this.__onClick(t,!1);break;case _e.DoubleClickEvent.type:this.__onClick(t,!0);break;case _e.ObjectEnterEvent.type:case _e.ObjectLeaveEvent.type:case _e.ObjectHoverEvent.type:if(t.userDataKey===rt){const e=t.originalEvent,i=t.object.userData[rt];switch(t.type){case _e.ObjectEnterEvent.type:i.config.style?.cursor?this.viewer.setCursor(i.config.style.cursor):(i.config.tooltip||i.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(e,i);break;case _e.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(i);break;case _e.ObjectHoverEvent.type:this.__onHoverMarker(e,i);break}}break;case"mouseenter":{const e=this.__getTargetMarker(he.getEventTarget(t));this.__onEnterMarker(t,e);break}case"mouseleave":{const e=this.__getTargetMarker(he.getEventTarget(t));this.__onLeaveMarker(e);break}case"mousemove":{const e=this.__getTargetMarker(he.getEventTarget(t),!0);this.__onHoverMarker(t,e);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(t=>{t.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new ps)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(t=>{t.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new us)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!0,t.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!1,t.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(t,e=!0){if(this.markers[t.id])throw new le(`marker "${t.id}" already exists`);const i=new(hw(t))(this.viewer,this,t);i.isPoly()?this.svgContainer.appendChild(i.domElement):i.isCss3d()?this.css3DContainer.addObject(i):i.is3d()?this.viewer.renderer.addObject(i.threeElement):this.container.appendChild(i.domElement),this.markers[i.id]=i,this.state.showAllTooltips&&(i.state.staticTooltip=!0),e&&this.__afterChangeMarkers()}getMarker(t){const e=typeof t=="object"?t.id:t;if(!this.markers[e])throw new le(`cannot find marker "${e}"`);return this.markers[e]}getCurrentMarker(){return this.state.currentMarker}updateMarker(t,e=!0){const i=this.getMarker(t.id);i.update(t),e&&(this.__afterChangeMarkers(),(i===this.state.hoveringMarker&&i.config.tooltip?.trigger==="hover"||i.state.staticTooltip)&&i.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(t,e=!0){const i=this.getMarker(t);i.isPoly()?this.svgContainer.removeChild(i.domElement):i.isCss3d()?this.css3DContainer.removeObject(i):i.is3d()?this.viewer.renderer.removeObject(i.threeElement):this.container.removeChild(i.domElement),this.state.hoveringMarker===i&&(this.state.hoveringMarker=null),this.state.currentMarker===i&&(this.state.currentMarker=null),i.destroy(),delete this.markers[i.id],e&&this.__afterChangeMarkers()}removeMarkers(t,e=!0){t.forEach(i=>this.removeMarker(i,!1)),e&&this.__afterChangeMarkers()}setMarkers(t,e=!0){this.clearMarkers(!1),t?.forEach(i=>{this.addMarker(i,!1)}),e&&this.__afterChangeMarkers()}clearMarkers(t=!0){Object.keys(this.markers).forEach(e=>{this.removeMarker(e,!1)}),t&&this.__afterChangeMarkers()}gotoMarker(t,e=this.config.gotoMarkerSpeed){const i=this.getMarker(t);return e?this.viewer.animate({...i.state.position,zoom:i.config.zoomLvl,speed:e}).then(()=>{this.dispatchEvent(new _o(i))}):(this.viewer.rotate(i.state.position),he.isNil(i.config.zoomLvl)||this.viewer.zoom(i.config.zoomLvl),this.dispatchEvent(new _o(i)),Promise.resolve())}hideMarker(t){this.toggleMarker(t,!1)}showMarker(t){this.toggleMarker(t,!0)}showMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!0,e.showTooltip()}hideMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!1,e.hideTooltip()}toggleMarker(t,e){const i=this.getMarker(t);i.config.visible=he.isNil(e)?!i.config.visible:e,this.renderMarkers()}showMarkerPanel(t){const e=this.getMarker(t);e.config.content?this.viewer.panel.show({id:Zn,content:e.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(Zn)}toggleMarkersList(){this.viewer.panel.isVisible(Ln)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let t=[];Object.values(this.markers).forEach(i=>{i.config.visible&&!i.config.hideList&&t.push(i)});const e=new $u(t);this.dispatchEvent(e),t=e.markers,this.viewer.panel.show({id:Ln,content:Xy(t,this.viewer.config.lang[xs.id]),noMargin:!0,clickHandler:i=>{const n=he.getClosest(i,".psv-panel-menu-item"),s=n?n.dataset[rt]:void 0;if(s){const r=this.getMarker(s);this.dispatchEvent(new Ou(r)),this.gotoMarker(r.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(Ln)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const t=this.viewer.getZoomLevel(),e=this.viewer.getPosition(),i=this.state.hoveringMarker;Object.values(this.markers).forEach(n=>{let s=n.config.visible,r=!1,a=null;s&&(a=n.render({viewerPosition:e,zoomLevel:t,hoveringMarker:i}),s=!!a),r=n.state.visible!==s,n.state.visible=s,n.state.position2D=a,n.domElement&&he.toggleClass(n.domElement,"psv-marker--visible",s),s?n.state.staticTooltip?n.showTooltip():n!==this.state.hoveringMarker&&n.hideTooltip():n.hideTooltip(),r&&(this.dispatchEvent(new Mu(n,s)),(n.is3d()||n.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(t,e=!1){if(t instanceof Node){const i=e?he.getClosest(t,".psv-marker"):t;return i?i[rt]:void 0}else return Array.isArray(t)?t.map(i=>i.userData[rt]).filter(i=>!!i).sort((i,n)=>n.config.zIndex-i.config.zIndex)[0]:null}__onEnterMarker(t,e){e&&(this.state.hoveringMarker=e,this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,this.dispatchEvent(new Lu(e)),e instanceof Cr&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onLeaveMarker(t){t&&(this.dispatchEvent(new Cu(t)),t instanceof Cr&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"?t.hideTooltip():t.state.staticTooltip&&t.showTooltip())}__onHoverMarker(t,e){e&&(this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,(e.isPoly()||e.is3d()||e.isCss3d())&&e.config.tooltip?.trigger==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onClick(t,e){const i=this.__getTargetMarker(t.data.objects),s=this.__getTargetMarker(t.data.target,!0)||i;this.state.currentMarker&&this.state.currentMarker!==s&&(this.dispatchEvent(new Bu(this.state.currentMarker)),this.viewer.panel.hide(Zn),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),s&&(this.state.currentMarker=s,this.dispatchEvent(new Uu(s,e,t.data.rightclick)),this.config.clickEventOnMarker?t.data.marker=s:t.stopImmediatePropagation(),this.markers[s.id]&&!t.data.rightclick&&(s.config.tooltip?.trigger==="click"?s.tooltip?this.hideMarkerTooltip(s.id):this.showMarkerTooltip(s.id):this.showMarkerPanel(s.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new Xu(this.getMarkers()))}__refreshUi(){const t=Object.values(this.markers).filter(e=>!e.config.hideList).length;t===0?(this.viewer.panel.hide(Zn),this.viewer.panel.hide(Ln)):this.viewer.panel.isVisible(Ln)?this.showMarkersList():this.viewer.panel.isVisible(Zn)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(xs.id,!1)?.toggle(t>0),this.viewer.navbar.getButton(zr.id,!1)?.toggle(t>0)}__checkObjectsObserver(){Object.values(this.markers).some(e=>e.is3d())?this.viewer.observeObjects(rt):this.viewer.unobserveObjects(rt)}};Is.id="markers";Is.VERSION="5.13.3";Is.configParser=cw;Is.readonlyOptions=["markers"];Ai.lang[xs.id]="Markers";Ai.lang[zr.id]="Markers list";Ko(xs,"caption:left");Ko(zr,"caption:left");function dw(t,e=0){var i=[];const n={tree:"./icons/leaf.circle.fill@2x.png"};return t.forEach(s=>{const r={id:s.id,position:{yaw:s.position.yaw-e,pitch:s.position.pitch},size:{width:s.size.width,height:s.size.height},image:n[s.type],tooltip:`<strong>${s.name}</strong>`,anchor:"bottom center",data:{name:s.name,image:s.image,description:s.description,type:s.type},content:uw(s)};i.push(r)}),i}function uw(t){return t.image?`
        <h2>${t.name}</h2>
        <img src="${t.image}" alt="${t.name}" style="width: 100%; height: auto; max-height: calc(80% - 80px); object-fit: contain; object-position: left; border-radius: 5px;">
        <p>${t.description}</p>
    `:`
            <h2>${t.name}</h2>
            <p>${t.description}</p>
        `}const pw=[{id:"dalgard1",name:"Dalgården (bild 1)",panoramaFile:"./nodes/dalgard1/IMG_1310.JPG",markers:[{id:"blodplommon",name:"Blodplommon",position:{yaw:2.2606367262225144,pitch:.02796695614841971},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"koreansk_lonn",name:"Koreansk lönn",position:{yaw:3.0919052594398746,pitch:-.0970590540730365},size:{width:32,height:32},type:"tree",description:"Lönn av något slag har jag för mig, vet inte vilken.",image:"trees/lönn-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:3.5079790200693397,pitch:-.008543026423233343},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"ginnalalonn",name:"Ginnalalönn",position:{yaw:1.8991460569930443,pitch:.018134753800143292},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hastkastanj",name:"Hästkastanj",position:{yaw:2.15566433662048,pitch:.05322331686262727},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"skogslonn",name:"Skogslönn",position:{yaw:2.447472362052443,pitch:.1064670383038433},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron_1",name:"Rhododendron",position:{yaw:5.235695957783912,pitch:.014347237254800586},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:4.642980490756283,pitch:.22094118352887326},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron_2",name:"Rhododendron",position:{yaw:4.300109989955789,pitch:.013956135688609098},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"nanting_4",name:"Nånting 4!",position:{yaw:3.823858756143529,pitch:-.11995270810747226},size:{width:32,height:32},type:"tree",description:"Lönn av något slag har jag för mig, vet inte vilken.",image:"trees/lönn-leaves.png"},{id:"smallspirea",name:"Smällspirea",position:{yaw:1.1976125523126342,pitch:-.15558758122436167},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"navehagg",name:"Nävehägg",position:{yaw:1.4452206665981244,pitch:.018906770231122753},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard2",position:{yaw:3.377563376359585,pitch:-.14441858600296031}},{nodeId:"dalgard19",position:{yaw:4.911215906485333,pitch:-.06858083649022362}},{nodeId:"dalgard22",position:{yaw:3.733099874006463,pitch:-.27108324624332814}}],heading:3.3775891123402326},{id:"dalgard2",name:"Dalgården (bild 2)",panoramaFile:"./nodes/dalgard2/IMG_1311.JPG",markers:[{id:"skogslonn",name:"Skogslönn",position:{yaw:3.7683564286140885,pitch:.45870009773867704},size:{width:32,height:32},type:"tree",description:"Lönn av något slag har jag för mig, vet inte vilken.",image:"trees/lönn-leaves.png"},{id:"koreansk_lonn",name:"Koreansk lönn",position:{yaw:3.66681597305324,pitch:-.2118147201320617},size:{width:32,height:32},type:"tree",description:"Lönn av något slag har jag för mig, vet inte vilken.",image:"trees/lönn-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:5.624859776038707,pitch:-.060212464298284196},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"japansk_appelblomma",name:"Japansk äppelblomma",position:{yaw:6.258121376893599,pitch:-.0284931100602066},size:{width:32,height:32},type:"tree",description:"Lönn av något slag har jag för mig, vet inte vilken.",image:"trees/lönn-leaves.png"},{id:"gulbladig_jasmin",name:"Gulbladig jasmin",position:{yaw:.2371073121945217,pitch:-.0015894932699826916},size:{width:32,height:32},type:"tree",description:"Lönn av något slag har jag för mig, vet inte vilken.",image:"trees/lönn-leaves.png"},{id:"hosta",name:"Hosta",position:{yaw:.593688884313262,pitch:-.07771320742388886},size:{width:32,height:32},type:"tree",description:"Lönn av något slag har jag för mig, vet inte vilken.",image:"trees/lönn-leaves.png"},{id:"rhododendron_1",name:"Rhododendron",position:{yaw:.7759052091704722,pitch:-.14770538763314134},size:{width:32,height:32},type:"tree",description:"Lönn av något slag har jag för mig, vet inte vilken.",image:"trees/lönn-leaves.png"},{id:"nanting_4",name:"Nånting 4!",position:{yaw:.9148638797785358,pitch:-.21965281065502795},size:{width:32,height:32},type:"tree",description:"Lönn av något slag har jag för mig, vet inte vilken.",image:"trees/lönn-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:.7278465117918673,pitch:.30999164586361916},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron_2",name:"Rhododendron",position:{yaw:1.1871006530894974,pitch:.016178853796467555},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"smallspirea",name:"Smällspirea",position:{yaw:2.327867257796728,pitch:-.00969591742346609},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"navehagg_1",name:"Nävehägg",position:{yaw:2.851837535476185,pitch:.07124669726785693},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"navehagg_2",name:"Nävehägg",position:{yaw:2.9328192696365045,pitch:.07507132473667188},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard1",position:{yaw:1.9809906063918654,pitch:-.12030962172424053}},{nodeId:"dalgard3",position:{yaw:5.999391442544193,pitch:-.26915147280088436}},{nodeId:"dalgard22",position:{yaw:1.209437247290838,pitch:-.28713701023161176}}],heading:5.1553739803636205},{id:"dalgard3",name:"Dalgården (bild 3)",panoramaFile:"./nodes/dalgard3/IMG_1308.JPG",markers:[{id:"ginnalalönn",name:"Ginnalalönn",position:{yaw:.961959230849157,pitch:.06390089798990539},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:1.398434383240532,pitch:.010142729467102377},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"koreansk_lonn",name:"Koreansk lönn",position:{yaw:.6721288748428467,pitch:.0736360339265194},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"japansk_appelblomma",name:"Japansk äppelblomma",position:{yaw:3.9410871831417253,pitch:-.0034771254351497714},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"gulbladig_jasmin",name:"Gulbladig jasmin",position:{yaw:4.261451479456106,pitch:.04113267464392134},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:4.750814052534109,pitch:.29899452584591235},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta",name:"Hosta",position:{yaw:4.9735069435638,pitch:-.07107435208486335},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"kopparbjork",name:"Kopparbjörk",position:{yaw:5.159692315350497,pitch:.04929749038369802},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"Rhododendron",name:"Rhododendron",position:{yaw:5.596426487467607,pitch:.08094420977478323},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"smallspirea",name:"Smällspirea",position:{yaw:.010705444758841602,pitch:.0484715966073781},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"navehagg_1",name:"Nävehägg",position:{yaw:.3928243086191007,pitch:.1129369215559275},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"navehagg_2",name:"Nävehägg",position:{yaw:.46038416058408965,pitch:.10519329516523679},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"}],links:[{nodeId:"dalgard1",position:{yaw:6.102642456873019,pitch:.016635844419101268}},{nodeId:"dalgard2",position:{yaw:.33390236210506474,pitch:-.20266077207521915}},{nodeId:"dalgard4",position:{yaw:4.136714094912354,pitch:-.1476862132872232}},{nodeId:"dalgard20",position:{yaw:4.776739924190238,pitch:.0031594746212282396}}],heading:2.969568331141952},{id:"dalgard4",name:"Dalgården (bild 4)",panoramaFile:"./nodes/dalgard4/IMG_1307.JPG",markers:[{id:"koreansk_lonn",name:"Koreansk lönn",position:{yaw:.1386733591685839,pitch:-.024701534993377235},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"ginnalalonn",name:"Ginnalalönn",position:{yaw:.24686908131978658,pitch:.017894253274019393},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:.38213813190640933,pitch:.13088409343903007},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta_1",name:"Hosta",position:{yaw:.9391064839044871,pitch:-.38354039259093},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta_2",name:"Hosta",position:{yaw:1.2666728090452213,pitch:-.32049842737791767},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"japansk_appelblomma",name:"Japansk äpppelblomma",position:{yaw:1.7368712853898411,pitch:-.39411447228902063},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"gulbladig_jasmin",name:"Gulbladig jasmin",position:{yaw:3.745116113646113,pitch:-.14025611884129163},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"azalea_northern_lights",name:"Azalea northern lights",position:{yaw:5.850856269881724,pitch:-.28083316900837474},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"}],links:[{nodeId:"dalgard3",position:{yaw:.3241674855271309,pitch:-.22029376744423446}},{nodeId:"dalgard5",position:{yaw:3.0427898424215982,pitch:-.10725132489401523}}],heading:2.2282876075912337},{id:"dalgard5",name:"Dalgården (bild 5)",panoramaFile:"./nodes/dalgard5/IMG_1313.JPG",markers:[{id:"solfjaderslonn",name:"Solfjäderslönn",position:{yaw:4.911511857818416,pitch:-.4457597309752017},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:2.5246499209260533,pitch:.28600729219760046},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"magnolia",name:"Magnolia",position:{yaw:2.5745006157202965,pitch:.027234682648244805},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"ask",name:"Ask",position:{yaw:.7239754443841756,pitch:.14298970282853007},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"}],links:[{nodeId:"dalgard4",position:{yaw:3.4311971611999885,pitch:-.16111016268483747}},{nodeId:"dalgard6",position:{yaw:.6876928118355173,pitch:-.17074271445871503}},{nodeId:"dalgard7",position:{yaw:1.2743581457503645,pitch:-.14055031362258408}}],heading:5.725160153120154},{id:"dalgard6",name:"Dalgården (bild 6)",panoramaFile:"./nodes/dalgard6/IMG_1328.JPG",markers:[{id:"solfjaderslonn",name:"Solfjäderslönn",position:{yaw:3.0256014529084543,pitch:-.134780223475512},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"ask",name:"Ask",position:{yaw:5.956957845675483,pitch:.4790622153107109},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"rodbladig_skogslonn",name:"Rödbladig skogslönn",position:{yaw:1.1468570962162792,pitch:.21314519860267045},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard5",position:{yaw:2.8484454432053417,pitch:-.3025999894070799}},{nodeId:"dalgard7",position:{yaw:1.2251918408825437,pitch:-.39815815339597904}},{nodeId:"dalgard8",position:{yaw:1.1906464269349784,pitch:-.0918768117573654}}],heading:4.68275101194163},{id:"dalgard7",name:"Dalgården (bild 7)",panoramaFile:"./nodes/dalgard7/IMG_1312.JPG",markers:[{id:"solfjaderslonn",name:"Solfjäderslönn",position:{yaw:.7492412492620988,pitch:-.1273340531376983},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"ask",name:"Ask",position:{yaw:2.2659765735044655,pitch:.09387878386632531},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"rodbladig_skogslonn",name:"Rödbladig skogslönn",position:{yaw:4.74819936849612,pitch:.27209741494464024},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"magnolia",name:"Magnolia",position:{yaw:5.950740082351949,pitch:-.012725497159008278},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"}],links:[{nodeId:"dalgard5",position:{yaw:.7028370607925101,pitch:-.21015673071105367}},{nodeId:"dalgard6",position:{yaw:1.7289721036104897,pitch:-.4668308106250547}},{nodeId:"dalgard8",position:{yaw:4.786337865181352,pitch:-.19483039032038119}},{nodeId:"dalgard8",position:{yaw:4.854573930810898,pitch:-.05856187760065268}}],heading:1.8923994212038162},{id:"dalgard8",name:"Dalgården (bild 8)",panoramaFile:"./nodes/dalgard8/IMG_1329.JPG",markers:[{id:"ask",name:"Ask",position:{yaw:1.1857163783362206,pitch:.01622145833280642},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn",name:"Rödbladig skogslönn",position:{yaw:4.03826240652837,pitch:.2901938350499922},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kinesisk_sequoia",name:"Kinesisk sequoia",position:{yaw:4.433260605151536,pitch:.15821638457617215},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:4.578054843341423,pitch:.1639660066520623},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron",name:"Rhododendron",position:{yaw:4.6043325217877005,pitch:-.023816276625323592},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"nanting_1",name:"Nånting 1!",position:{yaw:4.678658700752407,pitch:.03227892621766193},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"schuberthagg",name:"Schuberthägg",position:{yaw:4.760167570214787,pitch:.11726149035479994},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:5.41393775953141,pitch:.6025894737323192},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard7",position:{yaw:.9367373420498771,pitch:-.22405091843328728}},{nodeId:"dalgard9",position:{yaw:4.4033121282399375,pitch:-.22967867246853468}},{nodeId:"dalgard10",position:{yaw:4.324368756569757,pitch:.06915943542158765}},{nodeId:"dalgard17",position:{yaw:4.946236932513398,pitch:-.08520867354479145}}],heading:1.0409990620045637},{id:"dalgard9",name:"Dalgården (bild 9)",panoramaFile:"./nodes/dalgard9/IMG_1314.JPG",markers:[{id:"ask",name:"Ask",position:{yaw:2.6011277449528087,pitch:-.005089139613434265},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn",name:"Rödbladig skogslönn",position:{yaw:5.015459569207428,pitch:.49792190023615257},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"nanting_1",name:"Nånting 1!",position:{yaw:.2877498196184549,pitch:-.17846400712550636},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:.9974733416551935,pitch:.5580176985575325},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"nanting_2",name:"Nånting 2!",position:{yaw:1.1105056962640139,pitch:-.30763417785322944},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"nagon_hagg",name:"Någon hägg?",position:{yaw:.3039828357984298,pitch:-.40259781652502014},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"schuberthagg",name:"Schuberthägg",position:{yaw:.1693899789855012,pitch:.03786489070118959},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kinesisk_sequoia",name:"Kinesisk sequoia",position:{yaw:6.1284316442530535,pitch:.16044314914351832},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:5.876919823095532,pitch:.1356732926559594},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard7",position:{yaw:2.4612368517186507,pitch:-.15810235263040462}},{nodeId:"dalgard8",position:{yaw:2.614349453743426,pitch:-.3686532812627539}},{nodeId:"dalgard10",position:{yaw:5.659794125507752,pitch:-.03208712239204381}},{nodeId:"dalgard17",position:{yaw:.6113678298995248,pitch:-.27624297790466934}}],heading:2.5019654985286452},{id:"dalgard10",name:"Dalgården (bild 10)",panoramaFile:"./nodes/dalgard10/IMG_1315.JPG",markers:[{id:"rodbladig_skogslonn",name:"Rödbladig skogslönn",position:{yaw:1.2935417986068931,pitch:.40311179911411577},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:5.1120944881926,pitch:-.01150174704185968},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"ask",name:"Ask",position:{yaw:4.119727151761182,pitch:.0032841385308852757},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"lind_winter_orange",name:"Lind (winter orange)",position:{yaw:4.359202397449047,pitch:.16982702696783436},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"schuberthagg",name:"Schuberthägg",position:{yaw:6.1928551111414025,pitch:-.03347786463073543},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kinesisk_sequoia",name:"Kinesisk sequoia",position:{yaw:.08780336896942836,pitch:-.04092420174788436},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard8",position:{yaw:.9521081282885019,pitch:-.19478364238861934}},{nodeId:"dalgard9",position:{yaw:.9033433190580583,pitch:-.2849607682841715}},{nodeId:"dalgard11",position:{yaw:4.47960589961757,pitch:-.036391493311797696}},{nodeId:"dalgard16",position:{yaw:6.10105964446265,pitch:-.5095319285423436}}],heading:.8935714529222901},{id:"dalgard11",name:"Dalgården (bild 11)",panoramaFile:"./nodes/dalgard11/IMG_1316.JPG",markers:[{id:"sibiriskt_korktrad",name:"Sibiriskt korkträd",position:{yaw:2.949000850528627,pitch:.124784373766754},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"ask",name:"Ask",position:{yaw:5.807006999055819,pitch:-.07964879414202207},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"lind_winter_orange",name:"Lind (winter orange)",position:{yaw:.9416097888003607,pitch:.30391756936021164},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_1",name:"Rödbladig skogslönn",position:{yaw:4.589575590536954,pitch:-.08564752872808444},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_2",name:"Rödbladig skogslönn",position:{yaw:5.326723662877858,pitch:.15784548261793852},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kinesisk_sequoia",name:"Kinesisk sequoia",position:{yaw:5.033368888947075,pitch:-.08872135603122187},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:5.230505239597871,pitch:-.03364113349659981},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:4.670199118749399,pitch:.2426670447732293},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"vitoxel",name:"Vitoxel",position:{yaw:3.2829040218773105,pitch:.033553116482697876},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron",name:"Rhododendron",position:{yaw:3.8936208508357604,pitch:-.0746157638357323},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard10",position:{yaw:5.378246539655657,pitch:-.23208824150219676}},{nodeId:"dalgard12",position:{yaw:3.9332950087152243,pitch:-.5775068676911823}}],heading:4.917524762913157},{id:"dalgard12",name:"Dalgården (bild 12)",panoramaFile:"./nodes/dalgard12/IMG_1317.JPG",markers:[{id:"nanting_3",name:"Nånting 3!",position:{yaw:.6556226584632421,pitch:-.5379936270289594},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"sibiriskt_korktrad",name:"Sibiriskt korkträd",position:{yaw:2.7425259123167036,pitch:.22083952878825963},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"vitoxel",name:"Vitoxel",position:{yaw:3.941686396251026,pitch:.05029393911975522},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"lind_winter_orange",name:"Lind (winter orange)",position:{yaw:1.7058759332602196,pitch:.11437341780406453},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"vipphortensia",name:"Vipphortensia",position:{yaw:5.115581987336893,pitch:-.12170205974226021},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:5.755471034109159,pitch:.2515402458540923},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_1",name:"Rödbladig skogslönn",position:{yaw:6.277201964963784,pitch:-.0353187300341422},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_2",name:"Rödbladig skogslönn",position:{yaw:.2219673190551488,pitch:.11790339375909033},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:.4124119876592998,pitch:-.017835003656210928},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"ask",name:"Ask",position:{yaw:3.789869778187685,pitch:.297689774187637},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron",name:"Rhododendron",position:{yaw:4.791471790218692,pitch:-.09418604587593914},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard11",position:{yaw:1.6412062263546312,pitch:-.3131322228381572}},{nodeId:"dalgard13",position:{yaw:4.611749469432073,pitch:-.398804193611924}}],heading:5.777985466454688},{id:"dalgard13",name:"Dalgården (bild 13)",panoramaFile:"./nodes/dalgard13/IMG_1318.JPG",markers:[{id:"sibiriskt_korktrad",name:"Sibiriskt korkträd",position:{yaw:2.8913597632116215,pitch:.18406157928573275},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"vitoxel",name:"Vitoxel",position:{yaw:4.4830705406831255,pitch:.11707542528630778},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"lind_winter_orange",name:"Lind (winter orange)",position:{yaw:2.4333071720138464,pitch:.15457002691142074},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"vipphortensia",name:"Vipphortensia",position:{yaw:6.186137450934143,pitch:-.16650477096029426},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:.589334001109134,pitch:.12402235726588852},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn",name:"Rödbladig skogslönn",position:{yaw:1.5778767512620504,pitch:.04565278799983075},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"morkbladig_flader_black_lace",name:'Mörkbladig fläder "Black lace"',position:{yaw:6.0407989000203735,pitch:-.20470713889948566},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kameleontbuske",name:"Kameleontbuske",position:{yaw:.09444011381511548,pitch:-.14230469627374775},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"gyllenlonn",name:"Gyllenlönn",position:{yaw:.24298789741539578,pitch:-.13939825284745355},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"ask",name:"Ask",position:{yaw:3.7844290102091795,pitch:.27102998653579546},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron",name:"Rhododendron",position:{yaw:5.6377142445553785,pitch:-.10649339937069045},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard12",position:{yaw:2.3261857010692943,pitch:-.2293565507112043}},{nodeId:"dalgard14",position:{yaw:5.79890966834114,pitch:-.47667101144900514}}],heading:.3790896004387685},{id:"dalgard14",name:"Dalgården (bild 14)",panoramaFile:"./nodes/dalgard14/IMG_1319.JPG",markers:[{id:"vitoxel",name:"Vitoxel",position:{yaw:5.17732413230267,pitch:.1904336099181556},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"vipphortensia",name:"Vipphortensia",position:{yaw:1.6641537880106747,pitch:-.11414918631754832},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"morkbladig_flader_black_lace",name:'Mörkbladig fläder "Black lace"',position:{yaw:1.2236884181783803,pitch:-.24719434171560883},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"haxal",name:"Häxal",position:{yaw:2.079195352802329,pitch:-.2712179673273083},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:2.1059686672613025,pitch:.24926683640384284},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_1",name:"Rödbladig skogslönn",position:{yaw:2.7151931136897187,pitch:.14675943916462608},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron",name:"Rhododendron",position:{yaw:.49221017968089115,pitch:-.1627136614061946},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"lind_winter_orange",name:"Lind (winter orange)",position:{yaw:3.718376498118612,pitch:.1484084661757905},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_2",name:"Rödbladig skogslönn",position:{yaw:3.268826015867884,pitch:.12006780231173743},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"ask",name:"Ask",position:{yaw:4.1275826260001285,pitch:.14223460720046188},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard13",position:{yaw:4.020755883232665,pitch:-.19293492236703735}},{nodeId:"dalgard15",position:{yaw:2.2567492578613457,pitch:-.39154160571935925}},{nodeId:"dalgard19",position:{yaw:1.0463414084488398,pitch:-.42137897416217185}}],heading:1.5955122207909482},{id:"dalgard15",name:"Dalgården (bild 15)",panoramaFile:"./nodes/dalgard15/IMG_1320.JPG",markers:[{id:"vitoxel",name:"Vitoxel",position:{yaw:4.096376739392659,pitch:.15937038044147722},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"vipphortensia",name:"Vipphortensia",position:{yaw:5.063574730618149,pitch:-.16432551208962165},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kameleontbuske",name:"Kameleontbuske",position:{yaw:5.889633986881317,pitch:-.056802982556638515},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"haxal",name:"Häxal",position:{yaw:.16293436473913445,pitch:-.6743563649259834},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"gyllenlonn",name:"Gyllenlönn",position:{yaw:.13791193889414285,pitch:-.12628505217486885},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"magnolia",name:"Magnolia",position:{yaw:.6300831025251777,pitch:-.06916516102617408},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"praktvide",name:"Praktvide",position:{yaw:.688053505803648,pitch:-.1364047966680333},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:.8222578274209912,pitch:.3882986455445665},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_1",name:"Rödbladig skogslönn",position:{yaw:2.5734323644400323,pitch:.20745787333057142},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"schuberthagg",name:"Schuberthägg",position:{yaw:1.7940295251069296,pitch:.08723242541815736},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_2",name:"Rödbladig skogslönn",position:{yaw:1.6890691127510458,pitch:.24614463772129214},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard14",position:{yaw:4.3505134458774295,pitch:-.28845597976368564}},{nodeId:"dalgard18",position:{yaw:.5685826089176976,pitch:-.3625248258939566}},{nodeId:"dalgard20",position:{yaw:.4613342410140493,pitch:-.2684284130174561}}],heading:.34397741141688487},{id:"dalgard16",name:"Dalgården (bild 16)",panoramaFile:"./nodes/dalgard16/IMG_1321.JPG",markers:[{id:"sibiriskt_korktrad",name:"Sibiriskt korkträd",position:{yaw:3.615493366366205,pitch:.16867848936084795},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:2.6839796932730184,pitch:.12603415965746056},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kinesisk_sequoia",name:"Kinesisk sequoia",position:{yaw:.49024430755532883,pitch:-.0952001565549838},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"rodbladig_skogslonn_1",name:"Rödbladig skogslönn",position:{yaw:.9883783567056814,pitch:.4020168614466513},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"rodbladig_skogslonn_2",name:"Rödbladig skogslönn",position:{yaw:3.8237154459046243,pitch:.1410492020009455},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"schuberthagg",name:"Schuberthägg",position:{yaw:5.505978916919883,pitch:-.18940502607311993},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"nanting_1",name:"Nånting 1!",position:{yaw:6.250390478843083,pitch:-.24602782715529314},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"rhododendron",name:"Rhododendron",position:{yaw:.06123122634318212,pitch:-.33495186870533233},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"vipphortensia",name:"Vipphortensia",position:{yaw:4.811082271774266,pitch:-.0471971512201994},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"kameleontbuske",name:"Kameleontbuske",position:{yaw:4.952820922252693,pitch:-.05359610877400444},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"gyllenlonn",name:"Gyllenlönn",position:{yaw:5.080892121930008,pitch:-.1111293038269796},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:5.6870979161084625,pitch:.500028424609319},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard10",position:{yaw:2.1450369122527846,pitch:-.3302402445326571}},{nodeId:"dalgard17",position:{yaw:6.077661799107866,pitch:-.4058585802749375}}],heading:6.143937128521642},{id:"dalgard17",name:"Dalgården (bild 17)",panoramaFile:"./nodes/dalgard17/IMG_1322.JPG",markers:[{id:"hangpil",name:"Hängpil",position:{yaw:.25813813888512144,pitch:.29872520490193266},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"nanting_1",name:"Nånting 1!",position:{yaw:1.5236708254738045,pitch:-.4471416161193711},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"nagon_hagg",name:"Någon hägg?",position:{yaw:2.4948926596938295,pitch:-.2779019624203074},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn",name:"Rödbladig skogslönn",position:{yaw:2.856890424551518,pitch:.33489387883527955},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kinesisk_sequoia",name:"Kinesisk sequoia",position:{yaw:3.85007156489087,pitch:.13937374494316357},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron",name:"Rhododendron",position:{yaw:2.9605792670028355,pitch:-.5298053104543039},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"nanting_2",name:"Nånting 2!",position:{yaw:2.70913950479921,pitch:-.37447381669361435},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"schuberthagg",name:"Schuberthägg",position:{yaw:4.346714399135669,pitch:.1399295427268108},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodgersia",name:"Rodgersia",position:{yaw:5.88297109696626,pitch:-.14464078225231547},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard9",position:{yaw:2.276307084195678,pitch:-.301053586926576}},{nodeId:"dalgard16",position:{yaw:3.9636216793034427,pitch:-.10090856712713525}},{nodeId:"dalgard18",position:{yaw:5.9204524423406815,pitch:-.29901419345337144}},{nodeId:"dalgard20",position:{yaw:.1361622042415113,pitch:-.27790027018296315}}],heading:.9737829977308656},{id:"dalgard18",name:"Dalgården (bild 18)",panoramaFile:"./nodes/dalgard18/IMG_1323.JPG",markers:[{id:"hangpil",name:"Hängpil",position:{yaw:2.317468226988782,pitch:.4061015359402058},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"nanting_1",name:"Nånting 1!",position:{yaw:2.710931275777582,pitch:-.09250965829771295},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron_1",name:"Rhododendron",position:{yaw:3.068356177234528,pitch:-.06240311137038267},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_1",name:"Rödbladig skogslönn",position:{yaw:3.045026177367187,pitch:.14769863375236159},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"schuberthagg_1",name:"Schuberthägg",position:{yaw:3.5371000835724447,pitch:.11765274646218017},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodbladig_skogslonn_2",name:"Rödbladig skogslönn",position:{yaw:4.0698121140955195,pitch:.16643415342110024},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"koreansk_stevartia_skenkamelia",name:"Koreansk stevartia (skenkamelia)",position:{yaw:.020551727468698964,pitch:.14910982508254178},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodgersia",name:"Rodgersia",position:{yaw:6.012651910841779,pitch:-.29712066514748714},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kranskornell",name:"Kranskornell",position:{yaw:.8224686509919594,pitch:-.49317034557891826},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"praktvide",name:"Praktvide",position:{yaw:1.865724910563227,pitch:-.17728547073292167},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"magnolia",name:"Magnolia",position:{yaw:1.7209882979862434,pitch:-.08387628815099579},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"gulbladig_jasmin",name:"Gulbladig jasmin",position:{yaw:1.1870754089647586,pitch:-.105723924730593},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"haxal",name:"Häxal",position:{yaw:4.886173515680393,pitch:-.12022141544925556},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"gyllenlonn",name:"Gyllenlönn",position:{yaw:5.247141867411419,pitch:.099201229313181},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron_2",name:"Rhododendron",position:{yaw:5.58416460198934,pitch:.002949885423621632},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"vingad_benved",name:"Vinad benved",position:{yaw:5.822154865759569,pitch:.002669508347676439},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_3",name:"Hosta",position:{yaw:.4676812040385155,pitch:-.23633650474877932},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_4",name:"Hosta",position:{yaw:.5890666119951521,pitch:-.2796050835695709},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_5",name:"Hosta",position:{yaw:.713091368421249,pitch:-.30293194006855084},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"japansk_appelblomma",name:"Japansk äppelblomma",position:{yaw:5.822154865759569,pitch:.002669508347676439},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_1",name:"Hosta",position:{yaw:.855771977439972,pitch:-.11610463707757089},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_2",name:"Hosta",position:{yaw:.9250939197379029,pitch:-.09822974167566655},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard15",position:{yaw:4.659133295993029,pitch:-.27312447761373826}},{nodeId:"dalgard17",position:{yaw:3.036100130932943,pitch:-.18795165940190484}},{nodeId:"dalgard19",position:{yaw:5.7001402209795415,pitch:-.20004757740663215}},{nodeId:"dalgard20",position:{yaw:1.3023527062087845,pitch:-.5503475545504444}},{nodeId:"dalgard21",position:{yaw:.3341303150152568,pitch:-.26087618324110173}}],heading:1.4120979712343216},{id:"dalgard19",name:"Dalgården (bild 19)",panoramaFile:"./nodes/dalgard19/IMG_1324.JPG",markers:[{id:"vingad_benved",name:"Vingad benved",position:{yaw:.4448712107978633,pitch:-.06462678692547952},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron",name:"Rhododendron",position:{yaw:4.7467456988628935,pitch:-.027226817978770242},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kameleontbuske",name:"Kameleontbuske",position:{yaw:2.321641986058262,pitch:.23200955766404707},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"vipphortensia",name:"Vipphortensia",position:{yaw:2.715106301080543,pitch:.17955006371020987},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"morkbladig_flader_black_lace",name:'Mörkbladig fläder "Black lace"',position:{yaw:3.0135796965178465,pitch:-.05874364420494693},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hangpil",name:"Hängpil",position:{yaw:1.8903363201772976,pitch:.350333564009935},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rodgersia",name:"Rodgersia",position:{yaw:1.5644737499618881,pitch:-.28898766619862926},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"koreansk_stevartia_skenkamelia",name:"Koreansk stevartia (skenkamelia)",position:{yaw:1.4850438747166772,pitch:.1934451254446652},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard1",position:{yaw:5.531514216106869,pitch:-.15751238207593965}},{nodeId:"dalgard14",position:{yaw:3.5363312565649863,pitch:-.08707718233582629}},{nodeId:"dalgard18",position:{yaw:1.9359494763152978,pitch:-.1712410030852427}}],heading:.913741887142094},{id:"dalgard20",name:"Dalgården (bild 20)",panoramaFile:"./nodes/dalgard20/IMG_1325.JPG",markers:[{id:"hangpil",name:"Hangpil",position:{yaw:2.416234415739438,pitch:.8350657668023627},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"schuberthagg",name:"Schuberthägg",position:{yaw:2.8242076934232734,pitch:.16535736754985386},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"kinesisk_sequoia",name:"Kinesisk sequoia",position:{yaw:2.7477414373572504,pitch:.16344932208042917},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"nagonting_1",name:"Någonting 1!",position:{yaw:2.2248782999350745,pitch:.02788355488632855},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"nagon_hagg",name:"Någon hägg?",position:{yaw:2.341694149272396,pitch:.05268697075710783},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"rhododendron_1",name:"Rhododendron",position:{yaw:5.265942977882444,pitch:-.16449687572112204},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"rhododendron_2",name:"Rhododendron",position:{yaw:2.4974701653934557,pitch:.042540642208055875},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"magnolia",name:"Magnolia",position:{yaw:1.1870392828724468,pitch:-.006345644321218199},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"japansk_lonn",name:"Japansk lönn",position:{yaw:1.578729977868495,pitch:-.190902056779769},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"praktvide",name:"Praktvide",position:{yaw:1.6771755523542895,pitch:-.08833609997235348},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta_1",name:"Hosta",position:{yaw:6.148562431671903,pitch:-.08428048077361815},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta_2",name:"Hosta",position:{yaw:6.2292457094785805,pitch:-.0649132723823158},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"japansk_appelblomma",name:"Japansk äpppelblomma",position:{yaw:.05115158015257526,pitch:-.04182503526518277},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"gulbladig_jasmin",name:"Gulbladig jasmin",position:{yaw:.33297752503584616,pitch:-.06161725894489555},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"gyllenlonn",name:"Gyllenlönn",position:{yaw:3.7168609928688197,pitch:.14489062722701718},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"vingad_benved",name:"Vingad benved",position:{yaw:4.808664150995658,pitch:.02160151356537577},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kranskornell",name:"Kranskornell",position:{yaw:3.9585715370824492,pitch:-.6303760695700926},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"rodgersia",name:"Rodgersia",position:{yaw:4.228600609960907,pitch:-.16327596640496878},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"koreansk_stevartia_skenkamelia",name:"Koreansk stevartia (skenkamelia)",position:{yaw:4.393808912550478,pitch:.11451886987988648},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_3",name:"Hosta",position:{yaw:5.607308144545707,pitch:-.47056965713055},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_4",name:"Hosta",position:{yaw:5.562700539178307,pitch:-.326136389321237},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_5",name:"Hosta",position:{yaw:5.425129951735958,pitch:-.24916313252661615},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kloverlonn",name:"Klöverlönn",position:{yaw:5.558113679152578,pitch:-.16534269071374386},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kopparbjork",name:"Kopparbjörk",position:{yaw:5.342846885192868,pitch:-.011318446981187549},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"}],links:[{nodeId:"dalgard4",position:{yaw:.06069435950967284,pitch:-.1613476170436241}},{nodeId:"dalgard15",position:{yaw:3.499392080498202,pitch:-.048354266154714276}},{nodeId:"dalgard17",position:{yaw:2.5570803303542853,pitch:-.021975199079844906}},{nodeId:"dalgard18",position:{yaw:3.2939575977210716,pitch:-.25476207541113816}},{nodeId:"dalgard21",position:{yaw:5.2264961074372875,pitch:-.28063894210433804}}],heading:.494007666948537},{id:"dalgard21",name:"Dalgården (bild 21)",panoramaFile:"./nodes/dalgard21/IMG_1326.JPG",markers:[{id:"hangpil",name:"Hangpil",position:{yaw:1.8197074496993328,pitch:.45418590410120974},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"praktvide",name:"Praktvide",position:{yaw:1.5504485961054577,pitch:-.004816492310711009},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"japansk_lonn",name:"Japansk lönn",position:{yaw:1.5005650704270699,pitch:-.01971109057775377},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"magnolia",name:"Magnolia",position:{yaw:1.2735545440293718,pitch:.026761354835571634},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"kranskornell",name:"Kranskornell",position:{yaw:1.9202069942326638,pitch:-.010112135912363476},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"nanting_4",name:"Nånting 4!",position:{yaw:5.042833994504521,pitch:-.1361727596967801},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron_1",name:"Rhododendron",position:{yaw:5.063237667568617,pitch:-.3409497308327285},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kopparbjork",name:"Kopparbjörk",position:{yaw:5.433595609479726,pitch:.2079112848382909},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_1",name:"Hosta",position:{yaw:5.7791342906836976,pitch:-.9014774418648808},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta_2",name:"Hosta",position:{yaw:.5440573276045081,pitch:-.7377117685673655},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta_3",name:"Hosta",position:{yaw:1.1161296658277609,pitch:-.5153197325529006},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta_4",name:"Hosta",position:{yaw:1.4167170851328075,pitch:-.2852260610469932},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"japansk_appelblomma",name:"Japansk äppelblomma",position:{yaw:.32706328034091026,pitch:-.04763182415890687},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"vingad_benved",name:"Vingad benved",position:{yaw:3.1706025770427577,pitch:.06170175525394672},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"kloverlonn",name:"Klöverlönn",position:{yaw:.7828930248430049,pitch:.03637392981079168},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"rhododendron_2",name:"Rhododendron",position:{yaw:4.305448924980514,pitch:.022186404708438138},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"}],links:[{nodeId:"dalgard18",position:{yaw:2.1275280164636587,pitch:-.010309503557377472}},{nodeId:"dalgard20",position:{yaw:1.6676018606504506,pitch:-.1910967814836977}},{nodeId:"dalgard22",position:{yaw:4.748044010400324,pitch:-.22542530116910164}}],heading:.3175431939303857},{id:"dalgard22",name:"Dalgården (bild 22)",panoramaFile:"./nodes/dalgard22/IMG_1327.JPG",markers:[{id:"hangpil",name:"Hangpil",position:{yaw:.6725162253283881,pitch:.31138733524769213},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"nanting_4",name:"Nånting 4!",position:{yaw:5.559683240500773,pitch:-.4865591548540278},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron_1",name:"Rhododendron",position:{yaw:1.2558206703269563,pitch:-.004092208773296626},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"gulbladig_jasmin",name:"Gulbladig jasmin",position:{yaw:.06005250430109421,pitch:.015939861133693396},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"rhododendron_2",name:"Rhododendron",position:{yaw:.13137948354928572,pitch:-.3069463866300224},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"kopparbjork",name:"Kopparbjörk",position:{yaw:.2565983108610073,pitch:.08940459588669937},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"hosta_1",name:"Hosta",position:{yaw:.3145193669361147,pitch:-.16317119400901947},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta_2",name:"Hosta",position:{yaw:.35665999620709316,pitch:-.10683603301345788},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hosta_3",name:"Hosta",position:{yaw:.4471706829235172,pitch:-.0659181329700733},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"kloverlonn",name:"Klöverlönn",position:{yaw:.3091274353360167,pitch:-.01756969944587338},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"japansk_lonn",name:"Japansk lönn",position:{yaw:.4647620059402269,pitch:.004660519248009374},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"magnolia",name:"Magnolia",position:{yaw:.5001419448817461,pitch:.028349565179907728},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"katsura",name:"Katsura",position:{yaw:5.163019617053256,pitch:.011204446349240902},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"smallspirea",name:"Smällspirea",position:{yaw:2.934474985845655,pitch:-.004940060911584823},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"navehagg_1",name:"Nävehägg",position:{yaw:3.263021617042092,pitch:.07761113987848135},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"navehagg_2",name:"Nävehägg",position:{yaw:3.313514578934146,pitch:.06182260107067151},size:{width:32,height:32},type:"tree",description:"Katsura (Cercidiphyllum japonicum) är ett träd!",image:"./trees/katsura-leaves.png"},{id:"ginnalalonn",name:"Ginnalalönn",position:{yaw:3.7580096282773257,pitch:.04592895417908905},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"hastkastanj",name:"Hästkastanj",position:{yaw:4.123458069606916,pitch:.174774177498509},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"blodplommon",name:"Blodplommon",position:{yaw:4.019286913202815,pitch:.05353602589588836},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"skogslonn",name:"Skogslönn",position:{yaw:3.972218574490527,pitch:.12303511759340925},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"},{id:"koreansk_lonn",name:"Koreansk lönn",position:{yaw:4.339451564801431,pitch:-.01615892933652851},size:{width:32,height:32},type:"tree",description:"Blodplommon (Prunus cerasifera 'Pissardii') är ett träd!",image:"trees/blodplommon-leaves.png"}],links:[{nodeId:"dalgard1",position:{yaw:2.7742271744147144,pitch:-.13680421739120918}},{nodeId:"dalgard2",position:{yaw:4.652486376652885,pitch:-.25040625801652516}},{nodeId:"dalgard21",position:{yaw:.4634952955452002,pitch:-.24407093246122646}}],heading:5.5229222982468436}];async function fw(){return await mw(pw)}async function mw(t){var e=[];for(const i of t){const n=await dw(i.markers,i.heading),s=i.links.map(a=>({nodeId:a.nodeId,position:{yaw:a.position.yaw-i.heading,pitch:a.position.pitch}})),r={id:i.id,panorama:i.panoramaFile,links:s,name:i.name,markers:n,panoData:{poseHeading:i.heading*180/Math.PI}};e.push(r)}return e}fw().then(t=>{new Ey({plugins:[[Is,{defaultHoverScale:!0}],[Ds,{positionMode:"manual",nodes:t,preload:!0,showLinkTooltip:!1,renderMode:"2d"}]],container:document.querySelector("#viewer"),navbar:["zoom","move","markersList","caption","fullscreen"],rendererParameters:{debug:!1}}).addEventListener("ready",()=>{console.log("Viewer is ready!"),["./trees/blodplommon-leaves.png","./trees/katsura-leaves.png","./trees/lönn-leaves.png"].forEach(n=>{const s=new Image;s.src=n})},{once:!0})});
