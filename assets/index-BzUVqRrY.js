(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ca="175",Mf=0,ll=1,yf=2,Pc=1,wf=2,Ei=3,Wi=0,It=1,Mi=2,zi=0,On=1,cl=2,hl=3,dl=4,Sf=5,on=100,bf=101,Tf=102,Af=103,Cf=104,Rf=200,Pf=201,Lf=202,Df=203,Ao=204,Co=205,If=206,Uf=207,Nf=208,Of=209,Ff=210,kf=211,zf=212,Bf=213,Hf=214,Ro=0,Po=1,Lo=2,zn=3,Do=4,Io=5,Uo=6,No=7,Lc=0,Vf=1,Gf=2,Bi=0,Dc=1,Wf=2,Xf=3,Yf=4,qf=5,$f=6,jf=7,Ic=300,Bn=301,Hn=302,Oo=303,Fo=304,Ur=306,ko=1e3,ln=1001,zo=1002,ni=1003,Zf=1004,Bs=1005,Bt=1006,jr=1007,ki=1008,Ai=1009,Uc=1010,Nc=1011,_s=1012,Ra=1013,hn=1014,yi=1015,bs=1016,Pa=1017,La=1018,xs=1020,Oc=35902,Fc=1021,kc=1022,ii=1023,zc=1024,Bc=1025,Es=1026,Ms=1027,Hc=1028,Da=1029,Vc=1030,Ia=1031,Ua=1033,dr=33776,ur=33777,fr=33778,pr=33779,Bo=35840,Ho=35841,Vo=35842,Go=35843,Wo=36196,Xo=37492,Yo=37496,qo=37808,$o=37809,jo=37810,Zo=37811,Ko=37812,Jo=37813,Qo=37814,ea=37815,ta=37816,ia=37817,na=37818,sa=37819,ra=37820,oa=37821,mr=36492,aa=36494,la=36495,Gc=36283,ca=36284,ha=36285,da=36286,Kf=3200,Jf=3201,Qf=0,ep=1,Fi="",qt="srgb",dn="srgb-linear",Mr="linear",Qe="srgb",mn=7680,ul=519,tp=512,ip=513,np=514,Wc=515,sp=516,rp=517,op=518,ap=519,fl=35044,pl="300 es",wi=2e3,yr=2001;class Gn{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(i)===-1&&n[e].push(i)}hasEventListener(e,i){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(i)!==-1}removeEventListener(e,i){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(i);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const n=i[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ml=1234567;const is=Math.PI/180,ys=180/Math.PI;function Wn(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[t&255]+St[t>>8&255]+St[t>>16&255]+St[t>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[i&63|128]+St[i>>8&255]+"-"+St[i>>16&255]+St[i>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Fe(t,e,i){return Math.max(e,Math.min(i,t))}function Na(t,e){return(t%e+e)%e}function lp(t,e,i,n,s){return n+(t-e)*(s-n)/(i-e)}function cp(t,e,i){return t!==e?(i-t)/(e-t):0}function ns(t,e,i){return(1-i)*t+i*e}function hp(t,e,i,n){return ns(t,e,1-Math.exp(-i*n))}function dp(t,e=1){return e-Math.abs(Na(t,e*2)-e)}function up(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*(3-2*t))}function fp(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*t*(t*(t*6-15)+10))}function pp(t,e){return t+Math.floor(Math.random()*(e-t+1))}function mp(t,e){return t+Math.random()*(e-t)}function vp(t){return t*(.5-Math.random())}function gp(t){t!==void 0&&(ml=t);let e=ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _p(t){return t*is}function xp(t){return t*ys}function Ep(t){return(t&t-1)===0&&t!==0}function Mp(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function yp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function wp(t,e,i,n,s){const r=Math.cos,o=Math.sin,a=r(i/2),l=o(i/2),h=r((e+n)/2),d=o((e+n)/2),f=r((e-n)/2),p=o((e-n)/2),m=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":t.set(a*d,l*f,l*p,a*h);break;case"YZY":t.set(l*p,a*d,l*f,a*h);break;case"ZXZ":t.set(l*f,l*p,a*d,a*h);break;case"XZX":t.set(a*d,l*v,l*m,a*h);break;case"YXY":t.set(l*m,a*d,l*v,a*h);break;case"ZYZ":t.set(l*v,l*m,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ne={DEG2RAD:is,RAD2DEG:ys,generateUUID:Wn,clamp:Fe,euclideanModulo:Na,mapLinear:lp,inverseLerp:cp,lerp:ns,damp:hp,pingpong:dp,smoothstep:up,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:vp,seededRandom:gp,degToRad:_p,radToDeg:xp,isPowerOfTwo:Ep,ceilPowerOfTwo:Mp,floorPowerOfTwo:yp,setQuaternionFromProperEuler:wp,normalize:Rt,denormalize:Ln};class qe{constructor(e=0,i=0){qe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,n=this.y,s=e.elements;return this.x=s[0]*i+s[3]*n+s[6],this.y=s[1]*i+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Fe(this.x,e.x,i.x),this.y=Fe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Fe(this.x,e,i),this.y=Fe(this.y,e,i),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(e)/i;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,n=this.y-e.y;return i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const n=Math.cos(i),s=Math.sin(i),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,i,n,s,r,o,a,l,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,n,s,r,o,a,l,h)}set(e,i,n,s,r,o,a,l,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=i,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(e,i,n){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const n=e.elements,s=i.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],d=n[4],f=n[7],p=n[2],m=n[5],v=n[8],_=s[0],u=s[3],c=s[6],b=s[1],S=s[4],M=s[7],L=s[2],C=s[5],A=s[8];return r[0]=o*_+a*b+l*L,r[3]=o*u+a*S+l*C,r[6]=o*c+a*M+l*A,r[1]=h*_+d*b+f*L,r[4]=h*u+d*S+f*C,r[7]=h*c+d*M+f*A,r[2]=p*_+m*b+v*L,r[5]=p*u+m*S+v*C,r[8]=p*c+m*M+v*A,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8];return i*o*d-i*a*h-n*r*d+n*a*l+s*r*h-s*o*l}invert(){const e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8],f=d*o-a*h,p=a*l-d*r,m=h*r-o*l,v=i*f+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(s*h-d*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(d*i-s*l)*_,e[5]=(s*r-a*i)*_,e[6]=m*_,e[7]=(n*l-h*i)*_,e[8]=(o*i-n*r)*_,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+e,-s*h,s*l,-s*(-h*o+l*a)+a+i,0,0,1),this}scale(e,i){return this.premultiply(Zr.makeScale(e,i)),this}rotate(e){return this.premultiply(Zr.makeRotation(-e)),this}translate(e,i){return this.premultiply(Zr.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,n=e.elements;for(let s=0;s<9;s++)if(i[s]!==n[s])return!1;return!0}fromArray(e,i=0){for(let n=0;n<9;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){const n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new De;function Xc(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Sp(){const t=wr("canvas");return t.style.display="block",t}const vl={};function vr(t){t in vl||(vl[t]=!0,console.warn(t))}function bp(t,e,i){return new Promise(function(n,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,i);break;default:n()}}setTimeout(r,i)})}function Tp(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ap(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gl=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cp(){const t={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qe&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Mr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[dn]:{primaries:e,whitePoint:n,transfer:Mr,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),t}const We=Cp();function bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fn(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vn;class Rp{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vn===void 0&&(vn=wr("canvas")),vn.width=e.width,vn.height=e.height;const s=vn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=vn}return n.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=wr("canvas");i.width=e.width,i.height=e.height;const n=i.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),i}else if(e.data){const i=e.data.slice(0);for(let n=0;n<i.length;n++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[n]=Math.floor(bi(i[n]/255)*255):i[n]=bi(i[n]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pp=0;class Oa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kr(s[o].image)):r.push(Kr(s[o]))}else r=Kr(s);n.url=r}return i||(e.images[this.uuid]=n),n}}function Kr(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Rp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lp=0;class yt extends Gn{constructor(e=yt.DEFAULT_IMAGE,i=yt.DEFAULT_MAPPING,n=ln,s=ln,r=Bt,o=ki,a=ii,l=Ai,h=yt.DEFAULT_ANISOTROPY,d=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Wn(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ko:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ko:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Ic;yt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,i=0,n=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=i,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,n,s){return this.x=e,this.y=i,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*i+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*i+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*i+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*i+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,n,s,r;const l=e.elements,h=l[0],d=l[4],f=l[8],p=l[1],m=l[5],v=l[9],_=l[2],u=l[6],c=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-_)<.01&&Math.abs(v-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+_)<.1&&Math.abs(v+u)<.1&&Math.abs(h+m+c-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const S=(h+1)/2,M=(m+1)/2,L=(c+1)/2,C=(d+p)/4,A=(f+_)/4,N=(v+u)/4;return S>M&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=A/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=N/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=N/r),this.set(n,s,r,i),this}let b=Math.sqrt((u-v)*(u-v)+(f-_)*(f-_)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(u-v)/b,this.y=(f-_)/b,this.z=(p-d)/b,this.w=Math.acos((h+m+c-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Fe(this.x,e.x,i.x),this.y=Fe(this.y,e.y,i.y),this.z=Fe(this.z,e.z,i.z),this.w=Fe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Fe(this.x,e,i),this.y=Fe(this.y,e,i),this.z=Fe(this.z,e,i),this.w=Fe(this.w,e,i),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this.w=e.w+(i.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dp extends Gn{constructor(e=1,i=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new ht(0,0,e,i),this.scissorTest=!1,this.viewport=new ht(0,0,e,i);const s={width:e,height:i,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new yt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,n=1){if(this.width!==e||this.height!==i||this.depth!==n){this.width=e,this.height=i,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=i,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const s=Object.assign({},e.textures[i].image);this.textures[i].source=new Oa(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Dp{constructor(e=1,i=1,n={}){super(e,i,n),this.isWebGLRenderTarget=!0}}class Yc extends yt{constructor(e=null,i=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ip extends yt{constructor(e=null,i=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=0,i=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=n,this._w=s}static slerpFlat(e,i,n,s,r,o,a){let l=n[s+0],h=n[s+1],d=n[s+2],f=n[s+3];const p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[i+0]=l,e[i+1]=h,e[i+2]=d,e[i+3]=f;return}if(a===1){e[i+0]=p,e[i+1]=m,e[i+2]=v,e[i+3]=_;return}if(f!==_||l!==p||h!==m||d!==v){let u=1-a;const c=l*p+h*m+d*v+f*_,b=c>=0?1:-1,S=1-c*c;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,c*b);u=Math.sin(u*C)/L,a=Math.sin(a*C)/L}const M=a*b;if(l=l*u+p*M,h=h*u+m*M,d=d*u+v*M,f=f*u+_*M,u===1-a){const L=1/Math.sqrt(l*l+h*h+d*d+f*f);l*=L,h*=L,d*=L,f*=L}}e[i]=l,e[i+1]=h,e[i+2]=d,e[i+3]=f}static multiplyQuaternionsFlat(e,i,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],d=n[s+3],f=r[o],p=r[o+1],m=r[o+2],v=r[o+3];return e[i]=a*v+d*f+l*m-h*p,e[i+1]=l*v+d*p+h*f-a*m,e[i+2]=h*v+d*m+a*p-l*f,e[i+3]=d*v-a*f-l*p-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,n,s){return this._x=e,this._y=i,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(n/2),d=a(s/2),f=a(r/2),p=l(n/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=p*d*f+h*m*v,this._y=h*m*f-p*d*v,this._z=h*d*v+p*m*f,this._w=h*d*f-p*m*v;break;case"YXZ":this._x=p*d*f+h*m*v,this._y=h*m*f-p*d*v,this._z=h*d*v-p*m*f,this._w=h*d*f+p*m*v;break;case"ZXY":this._x=p*d*f-h*m*v,this._y=h*m*f+p*d*v,this._z=h*d*v+p*m*f,this._w=h*d*f-p*m*v;break;case"ZYX":this._x=p*d*f-h*m*v,this._y=h*m*f+p*d*v,this._z=h*d*v-p*m*f,this._w=h*d*f+p*m*v;break;case"YZX":this._x=p*d*f+h*m*v,this._y=h*m*f+p*d*v,this._z=h*d*v-p*m*f,this._w=h*d*f-p*m*v;break;case"XZY":this._x=p*d*f-h*m*v,this._y=h*m*f-p*d*v,this._z=h*d*v+p*m*f,this._w=h*d*f+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const n=i/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,n=i[0],s=i[4],r=i[8],o=i[1],a=i[5],l=i[9],h=i[2],d=i[6],f=i[10],p=n+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-h)*m,this._z=(o-s)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+h)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-h)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+h)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let n=e.dot(i)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,i){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,i/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const n=e._x,s=e._y,r=e._z,o=e._w,a=i._x,l=i._y,h=i._z,d=i._w;return this._x=n*d+o*a+s*h-r*l,this._y=s*d+o*l+r*a-n*h,this._z=r*d+o*h+n*l-s*a,this._w=o*d-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-i;return this._w=m*o+i*this._w,this._x=m*n+i*this._x,this._y=m*s+i*this._y,this._z=m*r+i*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,a),f=Math.sin((1-i)*d)/h,p=Math.sin(i*d)/h;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,i,n){return this.copy(e).slerp(i,n)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(i),r*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,i=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=i,this.z=n}set(e,i,n){return n===void 0&&(n=this.z),this.x=e,this.y=i,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(xl.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*i+r[3]*n+r[6]*s,this.y=r[1]*i+r[4]*n+r[7]*s,this.z=r[2]*i+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*i+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*i+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*i+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*i+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const i=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*s-a*n),d=2*(a*i-r*s),f=2*(r*n-o*i);return this.x=i+l*h+o*f-a*d,this.y=n+l*d+a*h-r*f,this.z=s+l*f+r*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*i+r[4]*n+r[8]*s,this.y=r[1]*i+r[5]*n+r[9]*s,this.z=r[2]*i+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Fe(this.x,e.x,i.x),this.y=Fe(this.y,e.y,i.y),this.z=Fe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Fe(this.x,e,i),this.y=Fe(this.y,e,i),this.z=Fe(this.z,e,i),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const n=e.x,s=e.y,r=e.z,o=i.x,a=i.y,l=i.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const n=e.dot(this)/i;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jr.copy(this).projectOnVector(e),this.sub(Jr)}reflect(e){return this.sub(Jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(e)/i;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return i*i+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,n){const s=Math.sin(i)*e;return this.x=s*Math.sin(n),this.y=Math.cos(i)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,n){return this.x=e*Math.sin(i),this.y=n,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=n,this.z=s,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(e),this.y=i,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new U,xl=new qi;class Xn{constructor(e=new U(1/0,1/0,1/0),i=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i+=3)this.expandByPoint(Kt.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,n=e.count;i<n;i++)this.expandByPoint(Kt.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,n=e.length;i<n;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const n=Kt.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(i===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(r,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,n;return e.normal.x>0?(i=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),i<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($n),Vs.subVectors(this.max,$n),gn.subVectors(e.a,$n),_n.subVectors(e.b,$n),xn.subVectors(e.c,$n),Pi.subVectors(_n,gn),Li.subVectors(xn,_n),Ki.subVectors(gn,xn);let i=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Ki.z,Ki.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Ki.z,0,-Ki.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Ki.y,Ki.x,0];return!Qr(i,gn,_n,xn,Vs)||(i=[1,0,0,0,1,0,0,0,1],!Qr(i,gn,_n,xn,Vs))?!1:(Gs.crossVectors(Pi,Li),i=[Gs.x,Gs.y,Gs.z],Qr(i,gn,_n,xn,Vs))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new U,new U,new U,new U,new U,new U,new U,new U],Kt=new U,Hs=new Xn,gn=new U,_n=new U,xn=new U,Pi=new U,Li=new U,Ki=new U,$n=new U,Vs=new U,Gs=new U,Ji=new U;function Qr(t,e,i,n,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ji.fromArray(t,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),h=i.dot(Ji),d=n.dot(Ji);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>a)return!1}return!0}const Up=new Xn,jn=new U,eo=new U;class Fa{constructor(e=new U,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const n=this.center;i!==void 0?n.copy(i):Up.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const n=this.center.distanceToSquared(e);return i.copy(e),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jn.subVectors(e,this.center);const i=jn.lengthSq();if(i>this.radius*this.radius){const n=Math.sqrt(i),s=(n-this.radius)*.5;this.center.addScaledVector(jn,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jn.copy(e.center).add(eo)),this.expandByPoint(jn.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new U,to=new U,Ws=new U,Di=new U,io=new U,Xs=new U,no=new U;class qc{constructor(e=new U,i=new U(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const n=i.dot(this.direction);return n<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=vi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,i),vi.distanceToSquared(e))}distanceSqToSegment(e,i,n,s){to.copy(e).add(i).multiplyScalar(.5),Ws.copy(i).sub(e).normalize(),Di.copy(this.origin).sub(to);const r=e.distanceTo(i)*.5,o=-this.direction.dot(Ws),a=Di.dot(this.direction),l=-Di.dot(Ws),h=Di.lengthSq(),d=Math.abs(1-o*o);let f,p,m,v;if(d>0)if(f=o*l-a,p=o*a-l,v=r*d,f>=0)if(p>=-v)if(p<=v){const _=1/d;f*=_,p*=_,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+h}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p<=-v?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h):p<=v?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+h):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(to).addScaledVector(Ws,p),m}intersectSphere(e,i){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,i):this.at(a,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/i;return n>=0?n:null}intersectPlane(e,i){const n=this.distanceToPlane(e);return n===null?null:this.at(n,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let n,s,r,o,a,l;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),d>=0?(r=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,i)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,i,n,s,r){io.subVectors(i,e),Xs.subVectors(n,e),no.crossVectors(io,Xs);let o=this.direction.dot(no),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(Xs.crossVectors(Di,Xs));if(l<0)return null;const h=a*this.direction.dot(io.cross(Di));if(h<0||l+h>o)return null;const d=-a*Di.dot(no);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,i,n,s,r,o,a,l,h,d,f,p,m,v,_,u){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,n,s,r,o,a,l,h,d,f,p,m,v,_,u)}set(e,i,n,s,r,o,a,l,h,d,f,p,m,v,_,u){const c=this.elements;return c[0]=e,c[4]=i,c[8]=n,c[12]=s,c[1]=r,c[5]=o,c[9]=a,c[13]=l,c[2]=h,c[6]=d,c[10]=f,c[14]=p,c[3]=m,c[7]=v,c[11]=_,c[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(e){const i=this.elements,n=e.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,n){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,i,n){return this.set(e.x,i.x,n.x,0,e.y,i.y,n.y,0,e.z,i.z,n.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,n=e.elements,s=1/En.setFromMatrixColumn(e,0).length(),r=1/En.setFromMatrixColumn(e,1).length(),o=1/En.setFromMatrixColumn(e,2).length();return i[0]=n[0]*s,i[1]=n[1]*s,i[2]=n[2]*s,i[3]=0,i[4]=n[4]*r,i[5]=n[5]*r,i[6]=n[6]*r,i[7]=0,i[8]=n[8]*o,i[9]=n[9]*o,i[10]=n[10]*o,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=o*d,m=o*f,v=a*d,_=a*f;i[0]=l*d,i[4]=-l*f,i[8]=h,i[1]=m+v*h,i[5]=p-_*h,i[9]=-a*l,i[2]=_-p*h,i[6]=v+m*h,i[10]=o*l}else if(e.order==="YXZ"){const p=l*d,m=l*f,v=h*d,_=h*f;i[0]=p+_*a,i[4]=v*a-m,i[8]=o*h,i[1]=o*f,i[5]=o*d,i[9]=-a,i[2]=m*a-v,i[6]=_+p*a,i[10]=o*l}else if(e.order==="ZXY"){const p=l*d,m=l*f,v=h*d,_=h*f;i[0]=p-_*a,i[4]=-o*f,i[8]=v+m*a,i[1]=m+v*a,i[5]=o*d,i[9]=_-p*a,i[2]=-o*h,i[6]=a,i[10]=o*l}else if(e.order==="ZYX"){const p=o*d,m=o*f,v=a*d,_=a*f;i[0]=l*d,i[4]=v*h-m,i[8]=p*h+_,i[1]=l*f,i[5]=_*h+p,i[9]=m*h-v,i[2]=-h,i[6]=a*l,i[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*h,v=a*l,_=a*h;i[0]=l*d,i[4]=_-p*f,i[8]=v*f+m,i[1]=f,i[5]=o*d,i[9]=-a*d,i[2]=-h*d,i[6]=m*f+v,i[10]=p-_*f}else if(e.order==="XZY"){const p=o*l,m=o*h,v=a*l,_=a*h;i[0]=l*d,i[4]=-f,i[8]=h*d,i[1]=p*f+_,i[5]=o*d,i[9]=m*f-v,i[2]=v*f-m,i[6]=a*d,i[10]=_*f+p}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Np,e,Op)}lookAt(e,i,n){const s=this.elements;return Ot.subVectors(e,i),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Ii.crossVectors(n,Ot),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Ii.crossVectors(n,Ot)),Ii.normalize(),Ys.crossVectors(Ot,Ii),s[0]=Ii.x,s[4]=Ys.x,s[8]=Ot.x,s[1]=Ii.y,s[5]=Ys.y,s[9]=Ot.y,s[2]=Ii.z,s[6]=Ys.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const n=e.elements,s=i.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],d=n[1],f=n[5],p=n[9],m=n[13],v=n[2],_=n[6],u=n[10],c=n[14],b=n[3],S=n[7],M=n[11],L=n[15],C=s[0],A=s[4],N=s[8],y=s[12],E=s[1],R=s[5],G=s[9],z=s[13],$=s[2],j=s[6],X=s[10],K=s[14],H=s[3],re=s[7],fe=s[11],Me=s[15];return r[0]=o*C+a*E+l*$+h*H,r[4]=o*A+a*R+l*j+h*re,r[8]=o*N+a*G+l*X+h*fe,r[12]=o*y+a*z+l*K+h*Me,r[1]=d*C+f*E+p*$+m*H,r[5]=d*A+f*R+p*j+m*re,r[9]=d*N+f*G+p*X+m*fe,r[13]=d*y+f*z+p*K+m*Me,r[2]=v*C+_*E+u*$+c*H,r[6]=v*A+_*R+u*j+c*re,r[10]=v*N+_*G+u*X+c*fe,r[14]=v*y+_*z+u*K+c*Me,r[3]=b*C+S*E+M*$+L*H,r[7]=b*A+S*R+M*j+L*re,r[11]=b*N+S*G+M*X+L*fe,r[15]=b*y+S*z+M*K+L*Me,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],d=e[2],f=e[6],p=e[10],m=e[14],v=e[3],_=e[7],u=e[11],c=e[15];return v*(+r*l*f-s*h*f-r*a*p+n*h*p+s*a*m-n*l*m)+_*(+i*l*m-i*h*p+r*o*p-s*o*m+s*h*d-r*l*d)+u*(+i*h*f-i*a*m-r*o*f+n*o*m+r*a*d-n*h*d)+c*(-s*a*d-i*l*f+i*a*p+s*o*f-n*o*p+n*l*d)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=i,s[14]=n),this}invert(){const e=this.elements,i=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8],f=e[9],p=e[10],m=e[11],v=e[12],_=e[13],u=e[14],c=e[15],b=f*u*h-_*p*h+_*l*m-a*u*m-f*l*c+a*p*c,S=v*p*h-d*u*h-v*l*m+o*u*m+d*l*c-o*p*c,M=d*_*h-v*f*h+v*a*m-o*_*m-d*a*c+o*f*c,L=v*f*l-d*_*l-v*a*p+o*_*p+d*a*u-o*f*u,C=i*b+n*S+s*M+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(_*p*r-f*u*r-_*s*m+n*u*m+f*s*c-n*p*c)*A,e[2]=(a*u*r-_*l*r+_*s*h-n*u*h-a*s*c+n*l*c)*A,e[3]=(f*l*r-a*p*r-f*s*h+n*p*h+a*s*m-n*l*m)*A,e[4]=S*A,e[5]=(d*u*r-v*p*r+v*s*m-i*u*m-d*s*c+i*p*c)*A,e[6]=(v*l*r-o*u*r-v*s*h+i*u*h+o*s*c-i*l*c)*A,e[7]=(o*p*r-d*l*r+d*s*h-i*p*h-o*s*m+i*l*m)*A,e[8]=M*A,e[9]=(v*f*r-d*_*r-v*n*m+i*_*m+d*n*c-i*f*c)*A,e[10]=(o*_*r-v*a*r+v*n*h-i*_*h-o*n*c+i*a*c)*A,e[11]=(d*a*r-o*f*r-d*n*h+i*f*h+o*n*m-i*a*m)*A,e[12]=L*A,e[13]=(d*_*s-v*f*s+v*n*p-i*_*p-d*n*u+i*f*u)*A,e[14]=(v*a*s-o*_*s-v*n*l+i*_*l+o*n*u-i*a*u)*A,e[15]=(o*f*s-d*a*s+d*n*l-i*f*l-o*n*p+i*a*p)*A,this}scale(e){const i=this.elements,n=e.x,s=e.y,r=e.z;return i[0]*=n,i[4]*=s,i[8]*=r,i[1]*=n,i[5]*=s,i[9]*=r,i[2]*=n,i[6]*=s,i[10]*=r,i[3]*=n,i[7]*=s,i[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,n,s))}makeTranslation(e,i,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const n=Math.cos(i),s=Math.sin(i),r=1-n,o=e.x,a=e.y,l=e.z,h=r*o,d=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,d*a+n,d*l-s*o,0,h*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,i,n){return this.set(e,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,i,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,i,s,1,0,0,0,0,1),this}compose(e,i,n){const s=this.elements,r=i._x,o=i._y,a=i._z,l=i._w,h=r+r,d=o+o,f=a+a,p=r*h,m=r*d,v=r*f,_=o*d,u=o*f,c=a*f,b=l*h,S=l*d,M=l*f,L=n.x,C=n.y,A=n.z;return s[0]=(1-(_+c))*L,s[1]=(m+M)*L,s[2]=(v-S)*L,s[3]=0,s[4]=(m-M)*C,s[5]=(1-(p+c))*C,s[6]=(u+b)*C,s[7]=0,s[8]=(v+S)*A,s[9]=(u-b)*A,s[10]=(1-(p+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,i,n){const s=this.elements;let r=En.set(s[0],s[1],s[2]).length();const o=En.set(s[4],s[5],s[6]).length(),a=En.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const h=1/r,d=1/o,f=1/a;return Jt.elements[0]*=h,Jt.elements[1]*=h,Jt.elements[2]*=h,Jt.elements[4]*=d,Jt.elements[5]*=d,Jt.elements[6]*=d,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,i.setFromRotationMatrix(Jt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,i,n,s,r,o,a=wi){const l=this.elements,h=2*r/(i-e),d=2*r/(n-s),f=(i+e)/(i-e),p=(n+s)/(n-s);let m,v;if(a===wi)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===yr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,i,n,s,r,o,a=wi){const l=this.elements,h=1/(i-e),d=1/(n-s),f=1/(o-r),p=(i+e)*h,m=(n+s)*d;let v,_;if(a===wi)v=(o+r)*f,_=-2*f;else if(a===yr)v=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const i=this.elements,n=e.elements;for(let s=0;s<16;s++)if(i[s]!==n[s])return!1;return!0}fromArray(e,i=0){for(let n=0;n<16;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){const n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e[i+9]=n[9],e[i+10]=n[10],e[i+11]=n[11],e[i+12]=n[12],e[i+13]=n[13],e[i+14]=n[14],e[i+15]=n[15],e}}const En=new U,Jt=new et,Np=new U(0,0,0),Op=new U(1,1,1),Ii=new U,Ys=new U,Ot=new U,El=new et,Ml=new qi;class ui{constructor(e=0,i=0,n=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,n,s=this._order){return this._x=e,this._y=i,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(i){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,n){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,i,n)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fp=0;const yl=new U,Mn=new qi,gi=new et,qs=new U,Zn=new U,kp=new U,zp=new qi,wl=new U(1,0,0),Sl=new U(0,1,0),bl=new U(0,0,1),Tl={type:"added"},Bp={type:"removed"},yn={type:"childadded",child:null},so={type:"childremoved",child:null};class At extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new U,i=new ui,n=new qi,s=new U(1,1,1);function r(){n.setFromEuler(i,!1)}function o(){i.setFromQuaternion(n,void 0,!1)}i._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new De}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Mn.setFromAxisAngle(e,i),this.quaternion.multiply(Mn),this}rotateOnWorldAxis(e,i){return Mn.setFromAxisAngle(e,i),this.quaternion.premultiply(Mn),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(bl,e)}translateOnAxis(e,i){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,i,n){e.isVector3?qs.copy(e):qs.set(e,i,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Zn,qs,this.up):gi.lookAt(qs,Zn,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Mn.setFromRotationMatrix(gi),this.quaternion.premultiply(Mn.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tl),yn.child=e,this.dispatchEvent(yn),yn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Bp),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tl),yn.child=e,this.dispatchEvent(yn),yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,i);if(o!==void 0)return o}}getObjectsByProperty(e,i,n=[]){this[e]===i&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,i,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,zp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(e)}updateWorldMatrix(e,i){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const f=l[h];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(i){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const h in a){const d=a[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new U(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new U,_i=new U,ro=new U,xi=new U,wn=new U,Sn=new U,Al=new U,oo=new U,ao=new U,lo=new U,co=new ht,ho=new ht,uo=new ht;class ti{constructor(e=new U,i=new U,n=new U){this.a=e,this.b=i,this.c=n}static getNormal(e,i,n,s){s.subVectors(n,i),Qt.subVectors(e,i),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,i,n,s,r){Qt.subVectors(s,i),_i.subVectors(n,i),ro.subVectors(e,i);const o=Qt.dot(Qt),a=Qt.dot(_i),l=Qt.dot(ro),h=_i.dot(_i),d=_i.dot(ro),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(h*l-a*d)*p,v=(o*d-a*l)*p;return r.set(1-m-v,v,m)}static containsPoint(e,i,n,s){return this.getBarycoord(e,i,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,i,n,s,r,o,a,l){return this.getBarycoord(e,i,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,i,n,s,r,o){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(e,i),ho.fromBufferAttribute(e,n),uo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(co,r.x),o.addScaledVector(ho,r.y),o.addScaledVector(uo,r.z),o}static isFrontFacing(e,i,n,s){return Qt.subVectors(n,i),_i.subVectors(e,i),Qt.cross(_i).dot(s)<0}set(e,i,n){return this.a.copy(e),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(e,i,n,s){return this.a.copy(e[i]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,i,n,s){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Qt.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,n,s,r){return ti.getInterpolation(e,this.a,this.b,this.c,i,n,s,r)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const n=this.a,s=this.b,r=this.c;let o,a;wn.subVectors(s,n),Sn.subVectors(r,n),oo.subVectors(e,n);const l=wn.dot(oo),h=Sn.dot(oo);if(l<=0&&h<=0)return i.copy(n);ao.subVectors(e,s);const d=wn.dot(ao),f=Sn.dot(ao);if(d>=0&&f<=d)return i.copy(s);const p=l*f-d*h;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),i.copy(n).addScaledVector(wn,o);lo.subVectors(e,r);const m=wn.dot(lo),v=Sn.dot(lo);if(v>=0&&m<=v)return i.copy(r);const _=m*h-l*v;if(_<=0&&h>=0&&v<=0)return a=h/(h-v),i.copy(n).addScaledVector(Sn,a);const u=d*v-m*f;if(u<=0&&f-d>=0&&m-v>=0)return Al.subVectors(r,s),a=(f-d)/(f-d+(m-v)),i.copy(s).addScaledVector(Al,a);const c=1/(u+_+p);return o=_*c,a=p*c,i.copy(n).addScaledVector(wn,o).addScaledVector(Sn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},$s={h:0,s:0,l:0};function fo(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}class Je{constructor(e,i,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,n)}set(e,i,n){if(i===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,i,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,i),this}setRGB(e,i,n,s=We.workingColorSpace){return this.r=e,this.g=i,this.b=n,We.toWorkingColorSpace(this,s),this}setHSL(e,i,n,s=We.workingColorSpace){if(e=Na(e,1),i=Fe(i,0,1),n=Fe(n,0,1),i===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+i):n+i-n*i,o=2*n-r;this.r=fo(o,r,e+1/3),this.g=fo(o,r,e),this.b=fo(o,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,i=qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,i);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,i);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,i);if(o===6)return this.setHex(parseInt(r,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=qt){const n=$c[e.toLowerCase()];return n!==void 0?this.setHex(n,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return We.fromWorkingColorSpace(bt.copy(this),e),Math.round(Fe(bt.r*255,0,255))*65536+Math.round(Fe(bt.g*255,0,255))*256+Math.round(Fe(bt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=We.workingColorSpace){We.fromWorkingColorSpace(bt.copy(this),i);const n=bt.r,s=bt.g,r=bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const d=(a+o)/2;if(a===o)l=0,h=0;else{const f=o-a;switch(h=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,i=We.workingColorSpace){return We.fromWorkingColorSpace(bt.copy(this),i),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=qt){We.fromWorkingColorSpace(bt.copy(this),e);const i=bt.r,n=bt.g,s=bt.b;return e!==qt?`color(${e} ${i.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,i,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+i,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,n){return this.r=e.r+(i.r-e.r)*n,this.g=e.g+(i.g-e.g)*n,this.b=e.b+(i.b-e.b)*n,this}lerpHSL(e,i){this.getHSL(Ui),e.getHSL($s);const n=ns(Ui.h,$s.h,i),s=ns(Ui.s,$s.s,i),r=ns(Ui.l,$s.l,i);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*i+r[3]*n+r[6]*s,this.g=r[1]*i+r[4]*n+r[7]*s,this.b=r[2]*i+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Je;Je.NAMES=$c;let Hp=0;class Nr extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=On,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Co,this.blendEquation=on,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=zn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mn,this.stencilZFail=mn,this.stencilZPass=mn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const n=e[i];if(n===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const s=this[i];if(s===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[i]=n}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==on&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(i){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let n=null;if(i!==null){const s=i.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=i[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ts extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new U,js=new qe;let Vp=0;class hi{constructor(e,i,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vp++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,n){e*=this.itemSize,n*=i.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=i.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,n=this.count;i<n;i++)js.fromBufferAttribute(this,i),js.applyMatrix3(e),this.setXY(i,js.x,js.y);else if(this.itemSize===3)for(let i=0,n=this.count;i<n;i++)ut.fromBufferAttribute(this,i),ut.applyMatrix3(e),this.setXYZ(i,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let i=0,n=this.count;i<n;i++)ut.fromBufferAttribute(this,i),ut.applyMatrix4(e),this.setXYZ(i,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let i=0,n=this.count;i<n;i++)ut.fromBufferAttribute(this,i),ut.applyNormalMatrix(e),this.setXYZ(i,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let i=0,n=this.count;i<n;i++)ut.fromBufferAttribute(this,i),ut.transformDirection(e),this.setXYZ(i,ut.x,ut.y,ut.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let n=this.array[e*this.itemSize+i];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,i,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+i]=n,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ln(i,this.array)),i}setX(e,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ln(i,this.array)),i}setY(e,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ln(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ln(i,this.array)),i}setW(e,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,n){return e*=this.itemSize,this.normalized&&(i=Rt(i,this.array),n=Rt(n,this.array)),this.array[e+0]=i,this.array[e+1]=n,this}setXYZ(e,i,n,s){return e*=this.itemSize,this.normalized&&(i=Rt(i,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,i,n,s,r){return e*=this.itemSize,this.normalized&&(i=Rt(i,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=i,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),e}}class jc extends hi{constructor(e,i,n){super(new Uint16Array(e),i,n)}}class Zc extends hi{constructor(e,i,n){super(new Uint32Array(e),i,n)}}class di extends hi{constructor(e,i,n){super(new Float32Array(e),i,n)}}let Gp=0;const Xt=new et,po=new At,bn=new U,Ft=new Xn,Kn=new Xn,vt=new U;class $i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xc(e)?Zc:jc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,n=0){this.groups.push({start:e,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,i,n){return Xt.makeTranslation(e,i,n),this.applyMatrix4(Xt),this}scale(e,i,n){return Xt.makeScale(e,i,n),this.applyMatrix4(Xt),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new di(n,3))}else{const n=Math.min(e.length,i.count);for(let s=0;s<n;s++){const r=e[s];i.setXYZ(s,r.x,r.y,r.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let n=0,s=i.length;n<s;n++){const r=i[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const a=i[r];Kn.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Ft.min,Kn.min),Ft.expandByPoint(vt),vt.addVectors(Ft.max,Kn.max),Ft.expandByPoint(vt)):(Ft.expandByPoint(Kn.min),Ft.expandByPoint(Kn.max))}Ft.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(i)for(let r=0,o=i.length;r<o;r++){const a=i[r],l=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)vt.fromBufferAttribute(a,h),l&&(bn.fromBufferAttribute(e,h),vt.add(bn)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,s=i.normal,r=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new U,l[N]=new U;const h=new U,d=new U,f=new U,p=new qe,m=new qe,v=new qe,_=new U,u=new U;function c(N,y,E){h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,y),f.fromBufferAttribute(n,E),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,y),v.fromBufferAttribute(r,E),d.sub(h),f.sub(h),m.sub(p),v.sub(p);const R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(R),u.copy(f).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(R),a[N].add(_),a[y].add(_),a[E].add(_),l[N].add(u),l[y].add(u),l[E].add(u))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,y=b.length;N<y;++N){const E=b[N],R=E.start,G=E.count;for(let z=R,$=R+G;z<$;z+=3)c(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new U,M=new U,L=new U,C=new U;function A(N){L.fromBufferAttribute(s,N),C.copy(L);const y=a[N];S.copy(y),S.sub(L.multiplyScalar(L.dot(y))).normalize(),M.crossVectors(C,y);const R=M.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,R)}for(let N=0,y=b.length;N<y;++N){const E=b[N],R=E.start,G=E.count;for(let z=R,$=R+G;z<$;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hi(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,h=new U,d=new U,f=new U;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),_=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(i,v),r.fromBufferAttribute(i,_),o.fromBufferAttribute(i,u),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,u),a.add(d),l.add(d),h.add(d),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(u,h.x,h.y,h.z)}else for(let p=0,m=i.count;p<m;p+=3)s.fromBufferAttribute(i,p+0),r.fromBufferAttribute(i,p+1),o.fromBufferAttribute(i,p+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,n=e.count;i<n;i++)vt.fromBufferAttribute(e,i),vt.normalize(),e.setXYZ(i,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const h=a.array,d=a.itemSize,f=a.normalized,p=new h.constructor(l.length*d);let m=0,v=0;for(let _=0,u=l.length;_<u;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let c=0;c<d;c++)p[v++]=h[m++]}return new hi(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=e(l,n);i.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let d=0,f=h.length;d<f;d++){const p=h[d],m=e(p,n);l.push(m)}i.morphAttributes[a]=l}i.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let f=0,p=h.length;f<p;f++){const m=h[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(i))}const r=e.morphAttributes;for(const h in r){const d=[],f=r[h];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(i));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new et,Qi=new qc,Zs=new Fa,Rl=new U,Ks=new U,Js=new U,Qs=new U,mo=new U,er=new U,Pl=new U,tr=new U;class Ht extends At{constructor(e=new $i,i=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){const s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,i){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;i.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=a[l],f=r[l];d!==0&&(mo.fromBufferAttribute(f,e),o?er.addScaledVector(mo,d):er.addScaledVector(mo.sub(i),d))}i.add(er)}return i}raycast(e,i){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Zs.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Zs,Rl)===null||Qi.origin.distanceToSquared(Rl)>(e.far-e.near)**2))&&(Cl.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,i,Qi)))}_computeIntersections(e,i,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){const u=p[v],c=o[u.materialIndex],b=Math.max(u.start,m.start),S=Math.min(a.count,Math.min(u.start+u.count,m.start+m.count));for(let M=b,L=S;M<L;M+=3){const C=a.getX(M),A=a.getX(M+1),N=a.getX(M+2);s=ir(this,c,e,n,h,d,f,C,A,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,i.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let u=v,c=_;u<c;u+=3){const b=a.getX(u),S=a.getX(u+1),M=a.getX(u+2);s=ir(this,o,e,n,h,d,f,b,S,M),s&&(s.faceIndex=Math.floor(u/3),i.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=p.length;v<_;v++){const u=p[v],c=o[u.materialIndex],b=Math.max(u.start,m.start),S=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let M=b,L=S;M<L;M+=3){const C=M,A=M+1,N=M+2;s=ir(this,c,e,n,h,d,f,C,A,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,i.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let u=v,c=_;u<c;u+=3){const b=u,S=u+1,M=u+2;s=ir(this,o,e,n,h,d,f,b,S,M),s&&(s.faceIndex=Math.floor(u/3),i.push(s))}}}}function Wp(t,e,i,n,s,r,o,a){let l;if(e.side===It?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Wi,a),l===null)return null;tr.copy(a),tr.applyMatrix4(t.matrixWorld);const h=i.ray.origin.distanceTo(tr);return h<i.near||h>i.far?null:{distance:h,point:tr.clone(),object:t}}function ir(t,e,i,n,s,r,o,a,l,h){t.getVertexPosition(a,Ks),t.getVertexPosition(l,Js),t.getVertexPosition(h,Qs);const d=Wp(t,e,i,n,Ks,Js,Qs,Pl);if(d){const f=new U;ti.getBarycoord(Pl,Ks,Js,Qs,f),s&&(d.uv=ti.getInterpolatedAttribute(s,a,l,h,f,new qe)),r&&(d.uv1=ti.getInterpolatedAttribute(r,a,l,h,f,new qe)),o&&(d.normal=ti.getInterpolatedAttribute(o,a,l,h,f,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c:h,normal:new U,materialIndex:0};ti.getNormal(Ks,Js,Qs,p.normal),d.face=p,d.barycoord=f}return d}class As extends $i{constructor(e=1,i=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],d=[],f=[];let p=0,m=0;v("z","y","x",-1,-1,n,i,e,o,r,0),v("z","y","x",1,-1,n,i,-e,o,r,1),v("x","z","y",1,1,e,n,i,s,o,2),v("x","z","y",1,-1,e,n,-i,s,o,3),v("x","y","z",1,-1,e,i,n,s,r,4),v("x","y","z",-1,-1,e,i,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new di(h,3)),this.setAttribute("normal",new di(d,3)),this.setAttribute("uv",new di(f,2));function v(_,u,c,b,S,M,L,C,A,N,y){const E=M/A,R=L/N,G=M/2,z=L/2,$=C/2,j=A+1,X=N+1;let K=0,H=0;const re=new U;for(let fe=0;fe<X;fe++){const Me=fe*R-z;for(let Oe=0;Oe<j;Oe++){const tt=Oe*E-G;re[_]=tt*b,re[u]=Me*S,re[c]=$,h.push(re.x,re.y,re.z),re[_]=0,re[u]=0,re[c]=C>0?1:-1,d.push(re.x,re.y,re.z),f.push(Oe/A),f.push(1-fe/N),K+=1}}for(let fe=0;fe<N;fe++)for(let Me=0;Me<A;Me++){const Oe=p+Me+j*fe,tt=p+Me+j*(fe+1),W=p+(Me+1)+j*(fe+1),ee=p+(Me+1)+j*fe;l.push(Oe,tt,ee),l.push(tt,W,ee),H+=6}a.addGroup(m,H,y),m+=H,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vn(t){const e={};for(const i in t){e[i]={};for(const n in t[i]){const s=t[i][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][n]=null):e[i][n]=s.clone():Array.isArray(s)?e[i][n]=s.slice():e[i][n]=s}}return e}function Pt(t){const e={};for(let i=0;i<t.length;i++){const n=Vn(t[i]);for(const s in n)e[s]=n[s]}return e}function Xp(t){const e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function Kc(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Yp={clone:Vn,merge:Pt};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vn(e.uniforms),this.uniformsGroups=Xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?i.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?i.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?i.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?i.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?i.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?i.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?i.uniforms[s]={type:"m4",value:o.toArray()}:i.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(i.extensions=n),i}}class Jc extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=wi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new U,Ll=new qe,Dl=new qe;class zt extends Jc{constructor(e=50,i=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,i){return this.getViewBounds(e,Ll,Dl),i.subVectors(Dl,Ll)}setViewOffset(e,i,n,s,r,o){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*i,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,i-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,i,i-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tn=-90,An=1;class jp extends At{constructor(e,i,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(Tn,An,e,i);s.layers=this.layers,this.add(s);const r=new zt(Tn,An,e,i);r.layers=this.layers,this.add(r);const o=new zt(Tn,An,e,i);o.layers=this.layers,this.add(o);const a=new zt(Tn,An,e,i);a.layers=this.layers,this.add(a);const l=new zt(Tn,An,e,i);l.layers=this.layers,this.add(l);const h=new zt(Tn,An,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[n,s,r,o,a,l]=i;for(const h of i)this.remove(h);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(i,r),e.setRenderTarget(n,1,s),e.render(i,o),e.setRenderTarget(n,2,s),e.render(i,a),e.setRenderTarget(n,3,s),e.render(i,l),e.setRenderTarget(n,4,s),e.render(i,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(i,d),e.setRenderTarget(f,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Qc extends yt{constructor(e=[],i=Bn,n,s,r,o,a,l,h,d){super(e,i,n,s,r,o,a,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zp extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qc(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bt}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new As(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:Vn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:zi});r.uniforms.tEquirect.value=i;const o=new Ht(s,r),a=i.minFilter;return i.minFilter===ki&&(i.minFilter=Bt),new jp(1,10,this).update(e,o),i.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,i=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(i,n,s);e.setRenderTarget(r)}}class cn extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const n of e.hand.values())this._getHandJoint(i,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const u=i.getJointPose(_,n),c=this._getHandJoint(h,_);u!==null&&(c.matrix.fromArray(u.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=u.radius),c.visible=u!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,v=.005;h.inputState.pinching&&p>m+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=m-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=i.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=i.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[i.jointName]=n,e.add(n)}return e.joints[i.jointName]}}class Sr extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const go=new U,Jp=new U,Qp=new De;class sn{constructor(e=new U(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,n,s){return this.normal.set(e,i,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,n){const s=go.subVectors(n,i).cross(Jp.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const n=e.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:i.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const i=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return i<0&&n>0||n<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const n=i||Qp.getNormalMatrix(e),s=this.coplanarPoint(go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const en=new Fa,nr=new U;class za{constructor(e=new sn,i=new sn,n=new sn,s=new sn,r=new sn,o=new sn){this.planes=[e,i,n,s,r,o]}set(e,i,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(i),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const i=this.planes;for(let n=0;n<6;n++)i[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,i=wi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],d=s[5],f=s[6],p=s[7],m=s[8],v=s[9],_=s[10],u=s[11],c=s[12],b=s[13],S=s[14],M=s[15];if(n[0].setComponents(l-r,p-h,u-m,M-c).normalize(),n[1].setComponents(l+r,p+h,u+m,M+c).normalize(),n[2].setComponents(l+o,p+d,u+v,M+b).normalize(),n[3].setComponents(l-o,p-d,u-v,M-b).normalize(),n[4].setComponents(l-a,p-f,u-_,M-S).normalize(),i===wi)n[5].setComponents(l+a,p+f,u+_,M+S).normalize();else if(i===yr)n[5].setComponents(a,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),en.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),en.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(en)}intersectsSprite(e){return en.center.set(0,0,0),en.radius=.7071067811865476,en.applyMatrix4(e.matrixWorld),this.intersectsSphere(en)}intersectsSphere(e){const i=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(i[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const i=this.planes;for(let n=0;n<6;n++){const s=i[n];if(nr.x=s.normal.x>0?e.max.x:e.min.x,nr.y=s.normal.y>0?e.max.y:e.min.y,nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let n=0;n<6;n++)if(i[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class em extends yt{constructor(e,i,n,s,r=Bt,o=Bt,a,l,h){super(e,i,n,s,r,o,a,l,h),this.isVideoTexture=!0,this.generateMipmaps=!1;const d=this;function f(){d.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class eh extends yt{constructor(e,i,n=hn,s,r,o,a=ni,l=ni,h,d=Es){if(d!==Es&&d!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Cs extends $i{constructor(e=1,i=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:n,heightSegments:s};const r=e/2,o=i/2,a=Math.floor(n),l=Math.floor(s),h=a+1,d=l+1,f=e/a,p=i/l,m=[],v=[],_=[],u=[];for(let c=0;c<d;c++){const b=c*p-o;for(let S=0;S<h;S++){const M=S*f-r;v.push(M,-b,0),_.push(0,0,1),u.push(S/a),u.push(1-c/l)}}for(let c=0;c<l;c++)for(let b=0;b<a;b++){const S=b+h*c,M=b+h*(c+1),L=b+1+h*(c+1),C=b+1+h*c;m.push(S,M,C),m.push(M,L,C)}this.setIndex(m),this.setAttribute("position",new di(v,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rs extends $i{constructor(e=1,i=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const d=[],f=new U,p=new U,m=[],v=[],_=[],u=[];for(let c=0;c<=n;c++){const b=[],S=c/n;let M=0;c===0&&o===0?M=.5/i:c===n&&l===Math.PI&&(M=-.5/i);for(let L=0;L<=i;L++){const C=L/i;f.x=-e*Math.cos(s+C*r)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+S*a),v.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),u.push(C+M,1-S),b.push(h++)}d.push(b)}for(let c=0;c<n;c++)for(let b=0;b<i;b++){const S=d[c][b+1],M=d[c][b],L=d[c+1][b],C=d[c+1][b+1];(c!==0||o>0)&&m.push(S,M,C),(c!==n-1||l<Math.PI)&&m.push(M,L,C)}this.setIndex(m),this.setAttribute("position",new di(v,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tm extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class im extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ua={enabled:!1};class nm{constructor(e,i,n){const s=this;let r=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=n,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){const f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=h.length;f<p;f+=2){const m=h[f],v=h[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return v}return null}}}const sm=new nm;let Ba=class{constructor(e){this.manager=e!==void 0?e:sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const n=this;return new Promise(function(s,r){n.load(e,s,i,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";class rm extends Jc{constructor(e=-1,i=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+i,l=s-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class om extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Il=new et;class am{constructor(e,i,n=0,s=1/0){this.ray=new qc(e,i),this.near=n,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Il.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(e,i=!0,n=[]){return fa(e,this,n,i),n.sort(Ul),n}intersectObjects(e,i=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fa(e[s],this,n,i);return n.sort(Ul),n}}function Ul(t,e){return t.distance-e.distance}function fa(t,e,i,n){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,i)===!1&&(s=!1),s===!0&&n===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)fa(r[o],e,i,!0)}}function Nl(t,e,i,n){const s=lm(n);switch(i){case Fc:return t*e;case zc:return t*e;case Bc:return t*e*2;case Hc:return t*e/s.components*s.byteLength;case Da:return t*e/s.components*s.byteLength;case Vc:return t*e*2/s.components*s.byteLength;case Ia:return t*e*2/s.components*s.byteLength;case kc:return t*e*3/s.components*s.byteLength;case ii:return t*e*4/s.components*s.byteLength;case Ua:return t*e*4/s.components*s.byteLength;case dr:case ur:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Go:return Math.max(t,16)*Math.max(e,8)/4;case Bo:case Vo:return Math.max(t,8)*Math.max(e,8)/2;case Wo:case Xo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ea:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ta:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case na:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case sa:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ra:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mr:case aa:case la:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gc:case ca:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ha:case da:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lm(t){switch(t){case Ai:case Uc:return{byteLength:1,components:1};case _s:case Nc:case bs:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case hn:case Ra:case yi:return{byteLength:4,components:1};case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function th(){let t=null,e=!1,i=null,n=null;function s(r,o){i(r,o),n=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&i!==null&&(n=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){i=r},setContext:function(r){t=r}}}function cm(t){const e=new WeakMap;function i(a,l){const h=a.array,d=a.usage,f=h.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,h,d),a.onUploadCallback();let m;if(h instanceof Float32Array)m=t.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=t.SHORT;else if(h instanceof Uint32Array)m=t.UNSIGNED_INT;else if(h instanceof Int32Array)m=t.INT;else if(h instanceof Int8Array)m=t.BYTE;else if(h instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,h){const d=l.array,f=l.updateRanges;if(t.bindBuffer(h,a),f.length===0)t.bufferSubData(h,0,d);else{f.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<f.length;m++){const v=f[p],_=f[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++p,f[p]=_)}f.length=p+1;for(let m=0,v=f.length;m<v;m++){const _=f[m];t.bufferSubData(h,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,i(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Sm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Im=`#define PI 3.141592653589793
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
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
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
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
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
#endif`,lv=`struct PhysicalMaterial {
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
}`,cv=`
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
#endif`,hv=`#if defined( RE_IndirectDiffuse )
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_v=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xv=`#if defined( USE_POINTS_UV )
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
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`#ifdef USE_MORPHTARGETS
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
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dv=`#ifdef USE_NORMALMAP
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
#endif`,Iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$v=`float getShadowMask() {
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
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zv=`#ifdef USE_SKINNING
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
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jv=`#ifdef USE_SKINNING
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
#endif`,Qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`#include <common>
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
}`,vg=`#if DEPTH_PACKING == 3200
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
}`,gg=`#define DISTANCE
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
}`,_g=`#define DISTANCE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
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
}`,yg=`uniform vec3 diffuse;
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
}`,wg=`#include <common>
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
}`,Sg=`uniform vec3 diffuse;
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
}`,bg=`#define LAMBERT
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
}`,Tg=`#define LAMBERT
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
}`,Ag=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Rg=`#define NORMAL
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
}`,Pg=`#define NORMAL
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
}`,Lg=`#define PHONG
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
}`,Dg=`#define PHONG
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
}`,Ig=`#define STANDARD
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
}`,Ug=`#define STANDARD
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
}`,Ng=`#define TOON
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
}`,Og=`#define TOON
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
}`,Fg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,Hg=`uniform float rotation;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:hm,alphahash_pars_fragment:dm,alphamap_fragment:um,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:vm,aomap_pars_fragment:gm,batching_pars_vertex:_m,batching_vertex:xm,begin_vertex:Em,beginnormal_vertex:Mm,bsdfs:ym,iridescence_fragment:wm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Cm,color_fragment:Rm,color_pars_fragment:Pm,color_pars_vertex:Lm,color_vertex:Dm,common:Im,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Om,displacementmap_vertex:Fm,emissivemap_fragment:km,emissivemap_pars_fragment:zm,colorspace_fragment:Bm,colorspace_pars_fragment:Hm,envmap_fragment:Vm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:iv,envmap_vertex:Ym,fog_vertex:qm,fog_pars_vertex:$m,fog_fragment:jm,fog_pars_fragment:Zm,gradientmap_pars_fragment:Km,lightmap_pars_fragment:Jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:ev,lights_pars_begin:tv,lights_toon_fragment:nv,lights_toon_pars_fragment:sv,lights_phong_fragment:rv,lights_phong_pars_fragment:ov,lights_physical_fragment:av,lights_physical_pars_fragment:lv,lights_fragment_begin:cv,lights_fragment_maps:hv,lights_fragment_end:dv,logdepthbuf_fragment:uv,logdepthbuf_pars_fragment:fv,logdepthbuf_pars_vertex:pv,logdepthbuf_vertex:mv,map_fragment:vv,map_pars_fragment:gv,map_particle_fragment:_v,map_particle_pars_fragment:xv,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:Mv,morphinstance_vertex:yv,morphcolor_vertex:wv,morphnormal_vertex:Sv,morphtarget_pars_vertex:bv,morphtarget_vertex:Tv,normal_fragment_begin:Av,normal_fragment_maps:Cv,normal_pars_fragment:Rv,normal_pars_vertex:Pv,normal_vertex:Lv,normalmap_pars_fragment:Dv,clearcoat_normal_fragment_begin:Iv,clearcoat_normal_fragment_maps:Uv,clearcoat_pars_fragment:Nv,iridescence_pars_fragment:Ov,opaque_fragment:Fv,packing:kv,premultiplied_alpha_fragment:zv,project_vertex:Bv,dithering_fragment:Hv,dithering_pars_fragment:Vv,roughnessmap_fragment:Gv,roughnessmap_pars_fragment:Wv,shadowmap_pars_fragment:Xv,shadowmap_pars_vertex:Yv,shadowmap_vertex:qv,shadowmask_pars_fragment:$v,skinbase_vertex:jv,skinning_pars_vertex:Zv,skinning_vertex:Kv,skinnormal_vertex:Jv,specularmap_fragment:Qv,specularmap_pars_fragment:eg,tonemapping_fragment:tg,tonemapping_pars_fragment:ig,transmission_fragment:ng,transmission_pars_fragment:sg,uv_pars_fragment:rg,uv_pars_vertex:og,uv_vertex:ag,worldpos_vertex:lg,background_vert:cg,background_frag:hg,backgroundCube_vert:dg,backgroundCube_frag:ug,cube_vert:fg,cube_frag:pg,depth_vert:mg,depth_frag:vg,distanceRGBA_vert:gg,distanceRGBA_frag:_g,equirect_vert:xg,equirect_frag:Eg,linedashed_vert:Mg,linedashed_frag:yg,meshbasic_vert:wg,meshbasic_frag:Sg,meshlambert_vert:bg,meshlambert_frag:Tg,meshmatcap_vert:Ag,meshmatcap_frag:Cg,meshnormal_vert:Rg,meshnormal_frag:Pg,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ig,meshphysical_frag:Ug,meshtoon_vert:Ng,meshtoon_frag:Og,points_vert:Fg,points_frag:kg,shadow_vert:zg,shadow_frag:Bg,sprite_vert:Hg,sprite_frag:Vg},ie={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},li={basic:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Pt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Pt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Pt([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Pt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Pt([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Pt([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Pt([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Pt([ie.lights,ie.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};li.physical={uniforms:Pt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const sr={r:0,b:0,g:0},tn=new ui,Gg=new et;function Wg(t,e,i,n,s,r,o){const a=new Je(0);let l=r===!0?0:1,h,d,f=null,p=0,m=null;function v(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?i:e).get(M)),M}function _(S){let M=!1;const L=v(S);L===null?c(a,l):L&&L.isColor&&(c(L,1),M=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function u(S,M){const L=v(M);L&&(L.isCubeTexture||L.mapping===Ur)?(d===void 0&&(d=new Ht(new As(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Vn(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),tn.copy(M.backgroundRotation),tn.x*=-1,tn.y*=-1,tn.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(tn.y*=-1,tn.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(tn)),d.material.toneMapped=We.getTransfer(L.colorSpace)!==Qe,(f!==L||p!==L.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=L,p=L.version,m=t.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Ht(new Cs(2,2),new Ci({name:"BackgroundMaterial",uniforms:Vn(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=We.getTransfer(L.colorSpace)!==Qe,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||p!==L.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,f=L,p=L.version,m=t.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function c(S,M){S.getRGB(sr,Kc(t)),n.buffers.color.setClear(sr.r,sr.g,sr.b,M,o)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,c(a,l)},render:_,addToRenderList:u,dispose:b}}function Xg(t,e){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(E,R,G,z,$){let j=!1;const X=f(z,G,R);r!==X&&(r=X,h(r.object)),j=m(E,z,G,$),j&&v(E,z,G,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(E,R,G,z),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function h(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function f(E,R,G){const z=G.wireframe===!0;let $=n[E.id];$===void 0&&($={},n[E.id]=$);let j=$[R.id];j===void 0&&(j={},$[R.id]=j);let X=j[z];return X===void 0&&(X=p(l()),j[z]=X),X}function p(E){const R=[],G=[],z=[];for(let $=0;$<i;$++)R[$]=0,G[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:z,object:E,attributes:{},index:null}}function m(E,R,G,z){const $=r.attributes,j=R.attributes;let X=0;const K=G.getAttributes();for(const H in K)if(K[H].location>=0){const fe=$[H];let Me=j[H];if(Me===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),fe===void 0||fe.attribute!==Me||Me&&fe.data!==Me.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function v(E,R,G,z){const $={},j=R.attributes;let X=0;const K=G.getAttributes();for(const H in K)if(K[H].location>=0){let fe=j[H];fe===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));const Me={};Me.attribute=fe,fe&&fe.data&&(Me.data=fe.data),$[H]=Me,X++}r.attributes=$,r.attributesNum=X,r.index=z}function _(){const E=r.newAttributes;for(let R=0,G=E.length;R<G;R++)E[R]=0}function u(E){c(E,0)}function c(E,R){const G=r.newAttributes,z=r.enabledAttributes,$=r.attributeDivisors;G[E]=1,z[E]===0&&(t.enableVertexAttribArray(E),z[E]=1),$[E]!==R&&(t.vertexAttribDivisor(E,R),$[E]=R)}function b(){const E=r.newAttributes,R=r.enabledAttributes;for(let G=0,z=R.length;G<z;G++)R[G]!==E[G]&&(t.disableVertexAttribArray(G),R[G]=0)}function S(E,R,G,z,$,j,X){X===!0?t.vertexAttribIPointer(E,R,G,$,j):t.vertexAttribPointer(E,R,G,z,$,j)}function M(E,R,G,z){_();const $=z.attributes,j=G.getAttributes(),X=R.defaultAttributeValues;for(const K in j){const H=j[K];if(H.location>=0){let re=$[K];if(re===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),re!==void 0){const fe=re.normalized,Me=re.itemSize,Oe=e.get(re);if(Oe===void 0)continue;const tt=Oe.buffer,W=Oe.type,ee=Oe.bytesPerElement,_e=W===t.INT||W===t.UNSIGNED_INT||re.gpuType===Ra;if(re.isInterleavedBufferAttribute){const oe=re.data,be=oe.stride,Ye=re.offset;if(oe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)c(H.location+Ae,oe.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)u(H.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let Ae=0;Ae<H.locationSize;Ae++)S(H.location+Ae,Me/H.locationSize,W,fe,be*ee,(Ye+Me/H.locationSize*Ae)*ee,_e)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)c(H.location+oe,re.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<H.locationSize;oe++)u(H.location+oe);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let oe=0;oe<H.locationSize;oe++)S(H.location+oe,Me/H.locationSize,W,fe,Me*ee,Me/H.locationSize*oe*ee,_e)}}else if(X!==void 0){const fe=X[K];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(H.location,fe);break;case 3:t.vertexAttrib3fv(H.location,fe);break;case 4:t.vertexAttrib4fv(H.location,fe);break;default:t.vertexAttrib1fv(H.location,fe)}}}}b()}function L(){N();for(const E in n){const R=n[E];for(const G in R){const z=R[G];for(const $ in z)d(z[$].object),delete z[$];delete R[G]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;const R=n[E.id];for(const G in R){const z=R[G];for(const $ in z)d(z[$].object),delete z[$];delete R[G]}delete n[E.id]}function A(E){for(const R in n){const G=n[R];if(G[E.id]===void 0)continue;const z=G[E.id];for(const $ in z)d(z[$].object),delete z[$];delete G[E.id]}}function N(){y(),o=!0,r!==s&&(r=s,h(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:u,disableUnusedAttributes:b}}function Yg(t,e,i){let n;function s(h){n=h}function r(h,d){t.drawArrays(n,h,d),i.update(d,n,1)}function o(h,d,f){f!==0&&(t.drawArraysInstanced(n,h,d,f),i.update(d,n,f))}function a(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=d[v];i.update(m,n,1)}function l(h,d,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h.length;v++)o(h[v],d[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,d,0,p,0,f);let v=0;for(let _=0;_<f;_++)v+=d[_]*p[_];i.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qg(t,e,i,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ii&&n.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ai&&n.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==yi&&!N)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const f=i.logarithmicDepthBuffer===!0,p=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),u=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:u,maxAttributes:c,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:L,maxSamples:C}}function $g(t){const e=this;let i=null,n=0,s=!1,r=!1;const o=new sn,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){i=d(f,p,0)},this.setState=function(f,p,m){const v=f.clippingPlanes,_=f.clipIntersection,u=f.clipShadows,c=t.get(f);if(!s||v===null||v.length===0||r&&!u)r?d(null):h();else{const b=r?0:n,S=b*4;let M=c.clippingState||null;l.value=M,M=d(v,p,S,m);for(let L=0;L!==S;++L)M[L]=i[L];c.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,p,m,v){const _=f!==null?f.length:0;let u=null;if(_!==0){if(u=l.value,v!==!0||u===null){const c=m+_*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(u===null||u.length<c)&&(u=new Float32Array(c));for(let S=0,M=m;S!==_;++S,M+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(u,M),u[M+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function jg(t){let e=new WeakMap;function i(o,a){return a===Oo?o.mapping=Bn:a===Fo&&(o.mapping=Hn),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oo||a===Fo)if(e.has(o)){const l=e.get(o).texture;return i(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Zp(l.height);return h.fromEquirectangularTexture(t,o),e.set(o,h),o.addEventListener("dispose",s),i(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Un=4,Ol=[.125,.215,.35,.446,.526,.582],an=20,_o=new rm,Fl=new Je;let xo=null,Eo=0,Mo=0,yo=!1;const rn=(1+Math.sqrt(5))/2,Cn=1/rn,kl=[new U(-rn,Cn,0),new U(rn,Cn,0),new U(-Cn,0,rn),new U(Cn,0,rn),new U(0,rn,-Cn),new U(0,rn,Cn),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Zg=new U;class zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,n=.1,s=100,r={}){const{size:o=256,position:a=Zg}=r;xo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),i>0&&this._blur(l,0,0,i),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xo,Eo,Mo),this._renderer.xr.enabled=yo,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Bn||e.mapping===Hn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=i||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:bs,format:ii,colorSpace:dn,depthBuffer:!1},s=Bl(e,i,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bl(e,i,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(r)),this._blurMaterial=Jg(r,e,i)}return s}_compileMaterial(e){const i=new Ht(this._lodPlanes[0],e);this._renderer.compile(i,_o)}_sceneToCubeUV(e,i,n,s,r){const l=new zt(90,1,i,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Fl),f.toneMapping=Bi,f.autoClear=!1;const v=new Ts({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),_=new Ht(new As,v);let u=!1;const c=e.background;c?c.isColor&&(v.color.copy(c),e.background=null,u=!0):(v.color.copy(Fl),u=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):S===1?(l.up.set(0,0,h[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));const M=this._cubeSize;rr(s,S*M,b>2?M:0,M,M),f.setRenderTarget(s),u&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=c}_textureToCubeUV(e,i){const n=this._renderer,s=e.mapping===Bn||e.mapping===Hn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;rr(i,0,0,3*l,2*l),n.setRenderTarget(i),n.render(o,_o)}_applyPMREM(e){const i=this._renderer,n=i.autoClear;i.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kl[(s-r-1)%kl.length];this._blur(e,r-1,r,o,a)}i.autoClear=n}_blur(e,i,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,i,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,i,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ht(this._lodPlanes[s],h),p=h.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*an-1),_=r/v,u=isFinite(r)?1+Math.floor(d*_):an;u>an&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${an}`);const c=[];let b=0;for(let A=0;A<an;++A){const N=A/_,y=Math.exp(-N*N/2);c.push(y),A===0?b+=y:A<u&&(b+=2*y)}for(let A=0;A<c.length;A++)c[A]=c[A]/b;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=c,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-n;const M=this._sizeLods[s],L=3*M*(s>S-Un?s-S+Un:0),C=4*(this._cubeSize-M);rr(i,L,C,3*M,2*M),l.setRenderTarget(i),l.render(f,_o)}}function Kg(t){const e=[],i=[],n=[];let s=t;const r=t-Un+1+Ol.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);i.push(a);let l=1/a;o>t-Un?l=Ol[o-t+Un-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),d=-h,f=1+h,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,v=6,_=3,u=2,c=1,b=new Float32Array(_*v*m),S=new Float32Array(u*v*m),M=new Float32Array(c*v*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,N=C>2?0:-1,y=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];b.set(y,_*v*C),S.set(p,u*v*C);const E=[C,C,C,C,C,C];M.set(E,c*v*C)}const L=new $i;L.setAttribute("position",new hi(b,_)),L.setAttribute("uv",new hi(S,u)),L.setAttribute("faceIndex",new hi(M,c)),e.push(L),s>Un&&s--}return{lodPlanes:e,sizeLods:i,sigmas:n}}function Bl(t,e,i){const n=new Xi(t,e,i);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(t,e,i,n,s){t.viewport.set(e,i,n,s),t.scissor.set(e,i,n,s)}function Jg(t,e,i){const n=new Float32Array(an),s=new U(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:an,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Hl(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Vl(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ha(){return`

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
	`}function Qg(t){let e=new WeakMap,i=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Oo||l===Fo,d=l===Bn||l===Hn;if(h||d){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return i===null&&(i=new zl(t)),f=h?i.fromEquirectangular(a,f):i.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return h&&m&&m.height>0||d&&m&&s(m)?(i===null&&(i=new zl(t)),f=h?i.fromEquirectangular(a):i.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:o}}function e_(t){const e={};function i(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(n)}return e[n]=s,s}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const s=i(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function t_(t,e,i,n){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,i.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,i.memory.geometries++),p}function l(f){const p=f.attributes;for(const m in p)e.update(p[m],t.ARRAY_BUFFER)}function h(f){const p=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,M=b.length;S<M;S+=3){const L=b[S+0],C=b[S+1],A=b[S+2];p.push(L,C,C,A,A,L)}}else if(v!==void 0){const b=v.array;_=v.version;for(let S=0,M=b.length/3-1;S<M;S+=3){const L=S+0,C=S+1,A=S+2;p.push(L,C,C,A,A,L)}}else return;const u=new(Xc(p)?Zc:jc)(p,1);u.version=_;const c=r.get(f);c&&e.remove(c),r.set(f,u)}function d(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function i_(t,e,i){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){t.drawElements(n,m,r,p*o),i.update(m,n,1)}function h(p,m,v){v!==0&&(t.drawElementsInstanced(n,m,r,p*o,v),i.update(m,n,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,v);let u=0;for(let c=0;c<v;c++)u+=m[c];i.update(u,n,1)}function f(p,m,v,_){if(v===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let c=0;c<p.length;c++)h(p[c]/o,m[c],_[c]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,v);let c=0;for(let b=0;b<v;b++)c+=m[b]*_[b];i.update(c,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function n_(t){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(i.calls++,o){case t.TRIANGLES:i.triangles+=a*(r/3);break;case t.LINES:i.lines+=a*(r/2);break;case t.LINE_STRIP:i.lines+=a*(r-1);break;case t.LINE_LOOP:i.lines+=a*r;break;case t.POINTS:i.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:s,update:n}}function s_(t,e,i){const n=new WeakMap,s=new ht;function r(o,a,l){const h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let E=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var m=E;p!==void 0&&p.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,u=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),_===!0&&(M=2),u===!0&&(M=3);let L=a.attributes.position.count*M,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*f),N=new Yc(A,L,C,f);N.type=yi,N.needsUpdate=!0;const y=M*4;for(let R=0;R<f;R++){const G=c[R],z=b[R],$=S[R],j=L*C*4*R;for(let X=0;X<G.count;X++){const K=X*y;v===!0&&(s.fromBufferAttribute(G,X),A[j+K+0]=s.x,A[j+K+1]=s.y,A[j+K+2]=s.z,A[j+K+3]=0),_===!0&&(s.fromBufferAttribute(z,X),A[j+K+4]=s.x,A[j+K+5]=s.y,A[j+K+6]=s.z,A[j+K+7]=0),u===!0&&(s.fromBufferAttribute($,X),A[j+K+8]=s.x,A[j+K+9]=s.y,A[j+K+10]=s.z,A[j+K+11]=$.itemSize===4?s.w:1)}}p={count:f,texture:N,size:new qe(L,C)},n.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,i);else{let v=0;for(let u=0;u<h.length;u++)v+=h[u];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",h)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:r}}function r_(t,e,i,n){let s=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(i.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:r,dispose:o}}const ih=new yt,Gl=new eh(1,1),nh=new Yc,sh=new Ip,rh=new Qc,Wl=[],Xl=[],Yl=new Float32Array(16),ql=new Float32Array(9),$l=new Float32Array(4);function Yn(t,e,i){const n=t[0];if(n<=0||n>0)return t;const s=e*i;let r=Wl[s];if(r===void 0&&(r=new Float32Array(s),Wl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=i,t[o].toArray(r,a)}return r}function pt(t,e){if(t.length!==e.length)return!1;for(let i=0,n=t.length;i<n;i++)if(t[i]!==e[i])return!1;return!0}function mt(t,e){for(let i=0,n=e.length;i<n;i++)t[i]=e[i]}function Or(t,e){let i=Xl[e];i===void 0&&(i=new Int32Array(e),Xl[e]=i);for(let n=0;n!==e;++n)i[n]=t.allocateTextureUnit();return i}function o_(t,e){const i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function a_(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pt(i,e))return;t.uniform2fv(this.addr,e),mt(i,e)}}function l_(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pt(i,e))return;t.uniform3fv(this.addr,e),mt(i,e)}}function c_(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pt(i,e))return;t.uniform4fv(this.addr,e),mt(i,e)}}function h_(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(pt(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),mt(i,e)}else{if(pt(i,n))return;$l.set(n),t.uniformMatrix2fv(this.addr,!1,$l),mt(i,n)}}function d_(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(pt(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),mt(i,e)}else{if(pt(i,n))return;ql.set(n),t.uniformMatrix3fv(this.addr,!1,ql),mt(i,n)}}function u_(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(pt(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),mt(i,e)}else{if(pt(i,n))return;Yl.set(n),t.uniformMatrix4fv(this.addr,!1,Yl),mt(i,n)}}function f_(t,e){const i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function p_(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pt(i,e))return;t.uniform2iv(this.addr,e),mt(i,e)}}function m_(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pt(i,e))return;t.uniform3iv(this.addr,e),mt(i,e)}}function v_(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pt(i,e))return;t.uniform4iv(this.addr,e),mt(i,e)}}function g_(t,e){const i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function __(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pt(i,e))return;t.uniform2uiv(this.addr,e),mt(i,e)}}function x_(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pt(i,e))return;t.uniform3uiv(this.addr,e),mt(i,e)}}function E_(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pt(i,e))return;t.uniform4uiv(this.addr,e),mt(i,e)}}function M_(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Gl.compareFunction=Wc,r=Gl):r=ih,i.setTexture2D(e||r,s)}function y_(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTexture3D(e||sh,s)}function w_(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTextureCube(e||rh,s)}function S_(t,e,i){const n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(t.uniform1i(this.addr,s),n[0]=s),i.setTexture2DArray(e||nh,s)}function b_(t){switch(t){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return d_;case 35676:return u_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return v_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return S_}}function T_(t,e){t.uniform1fv(this.addr,e)}function A_(t,e){const i=Yn(e,this.size,2);t.uniform2fv(this.addr,i)}function C_(t,e){const i=Yn(e,this.size,3);t.uniform3fv(this.addr,i)}function R_(t,e){const i=Yn(e,this.size,4);t.uniform4fv(this.addr,i)}function P_(t,e){const i=Yn(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function L_(t,e){const i=Yn(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function D_(t,e){const i=Yn(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function I_(t,e){t.uniform1iv(this.addr,e)}function U_(t,e){t.uniform2iv(this.addr,e)}function N_(t,e){t.uniform3iv(this.addr,e)}function O_(t,e){t.uniform4iv(this.addr,e)}function F_(t,e){t.uniform1uiv(this.addr,e)}function k_(t,e){t.uniform2uiv(this.addr,e)}function z_(t,e){t.uniform3uiv(this.addr,e)}function B_(t,e){t.uniform4uiv(this.addr,e)}function H_(t,e,i){const n=this.cache,s=e.length,r=Or(i,s);pt(n,r)||(t.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)i.setTexture2D(e[o]||ih,r[o])}function V_(t,e,i){const n=this.cache,s=e.length,r=Or(i,s);pt(n,r)||(t.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)i.setTexture3D(e[o]||sh,r[o])}function G_(t,e,i){const n=this.cache,s=e.length,r=Or(i,s);pt(n,r)||(t.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)i.setTextureCube(e[o]||rh,r[o])}function W_(t,e,i){const n=this.cache,s=e.length,r=Or(i,s);pt(n,r)||(t.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)i.setTexture2DArray(e[o]||nh,r[o])}function X_(t){switch(t){case 5126:return T_;case 35664:return A_;case 35665:return C_;case 35666:return R_;case 35674:return P_;case 35675:return L_;case 35676:return D_;case 5124:case 35670:return I_;case 35667:case 35671:return U_;case 35668:case 35672:return N_;case 35669:case 35673:return O_;case 5125:return F_;case 36294:return k_;case 36295:return z_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}class Y_{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.setValue=b_(i.type)}}class q_{constructor(e,i,n){this.id=e,this.addr=n,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=X_(i.type)}}class $_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,i[a.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function jl(t,e){t.seq.push(e),t.map[e.id]=e}function j_(t,e,i){const n=t.name,s=n.length;for(wo.lastIndex=0;;){const r=wo.exec(n),o=wo.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){jl(i,h===void 0?new Y_(a,t,e):new q_(a,t,e));break}else{let f=i.map[a];f===void 0&&(f=new $_(a),jl(i,f)),i=f}}}class gr{constructor(e,i){this.seq=[],this.map={};const n=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(i,s),o=e.getUniformLocation(i,r.name);j_(r,o,this)}}setValue(e,i,n,s){const r=this.map[i];r!==void 0&&r.setValue(e,n,s)}setOptional(e,i,n){const s=i[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,i,n,s){for(let r=0,o=i.length;r!==o;++r){const a=i[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,i){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in i&&n.push(o)}return n}}function Zl(t,e,i){const n=t.createShader(e);return t.shaderSource(n,i),t.compileShader(n),n}const Z_=37297;let K_=0;function J_(t,e){const i=t.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,i.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${i[o]}`)}return n.join(`
`)}const Kl=new De;function Q_(t){We._getMatrix(Kl,We.workingColorSpace,t);const e=`mat3( ${Kl.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(t)){case Mr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Jl(t,e,i){const n=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return i.toUpperCase()+`

`+s+`

`+J_(t.getShaderSource(e),o)}else return s}function e0(t,e){const i=Q_(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function t0(t,e){let i;switch(e){case Dc:i="Linear";break;case Wf:i="Reinhard";break;case Xf:i="Cineon";break;case Yf:i="ACESFilmic";break;case $f:i="AgX";break;case jf:i="Neutral";break;case qf:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const or=new U;function i0(){We.getLuminanceCoefficients(or);const t=or.x.toFixed(4),e=or.y.toFixed(4),i=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function s0(t){const e=[];for(const i in t){const n=t[i];n!==!1&&e.push("#define "+i+" "+n)}return e.join(`
`)}function r0(t,e){const i={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),i[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return i}function es(t){return t!==""}function Ql(t,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ec(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(t){return t.replace(o0,l0)}const a0=new Map;function l0(t,e){let i=Ue[e];if(i===void 0){const n=a0.get(e);if(n!==void 0)i=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pa(i)}const c0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(t){return t.replace(c0,h0)}function h0(t,e,i,n){let s="";for(let r=parseInt(e);r<parseInt(i);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ic(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function d0(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function u0(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bn:case Hn:e="ENVMAP_TYPE_CUBE";break;case Ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f0(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Hn:e="ENVMAP_MODE_REFRACTION";break}return e}function p0(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case Vf:e="ENVMAP_BLENDING_MIX";break;case Gf:e="ENVMAP_BLENDING_ADD";break}return e}function m0(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:n,maxMip:i}}function v0(t,e,i,n){const s=t.getContext(),r=i.defines;let o=i.vertexShader,a=i.fragmentShader;const l=d0(i),h=u0(i),d=f0(i),f=p0(i),p=m0(i),m=n0(i),v=s0(r),_=s.createProgram();let u,c,b=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(u=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(es).join(`
`),u.length>0&&(u+=`
`),c=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(es).join(`
`),c.length>0&&(c+=`
`)):(u=[ic(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),c=[ic(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",i.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?Ue.tonemapping_pars_fragment:"",i.toneMapping!==Bi?t0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,e0("linearToOutputTexel",i.outputColorSpace),i0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(es).join(`
`)),o=pa(o),o=Ql(o,i),o=ec(o,i),a=pa(a),a=Ql(a,i),a=ec(a,i),o=tc(o),a=tc(a),i.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,c=["#define varying in",i.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const S=b+u+o,M=b+c+a,L=Zl(s,s.VERTEX_SHADER,S),C=Zl(s,s.FRAGMENT_SHADER,M);s.attachShader(_,L),s.attachShader(_,C),i.index0AttributeName!==void 0?s.bindAttribLocation(_,0,i.index0AttributeName):i.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(t.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(L).trim(),$=s.getShaderInfoLog(C).trim();let j=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,L,C);else{const K=Jl(s,L,"vertex"),H=Jl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+K+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||$==="")&&(X=!1);X&&(R.diagnostics={runnable:j,programLog:G,vertexShader:{log:z,prefix:u},fragmentShader:{log:$,prefix:c}})}s.deleteShader(L),s.deleteShader(C),N=new gr(s,_),y=r0(s,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let E=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,Z_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=K_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let g0=0;class _0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(i),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const n of i)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let n=i.get(e);return n===void 0&&(n=new Set,i.set(e,n)),n}_getShaderStage(e){const i=this.shaderCache;let n=i.get(e);return n===void 0&&(n=new x0(e),i.set(e,n)),n}}class x0{constructor(e){this.id=g0++,this.code=e,this.usedTimes=0}}function E0(t,e,i,n,s,r,o){const a=new ka,l=new _0,h=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return h.add(y),y===0?"uv":`uv${y}`}function u(y,E,R,G,z){const $=G.fog,j=z.geometry,X=y.isMeshStandardMaterial?G.environment:null,K=(y.isMeshStandardMaterial?i:e).get(y.envMap||X),H=K&&K.mapping===Ur?K.image.height:null,re=v[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Me=fe!==void 0?fe.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let tt,W,ee,_e;if(re){const Ke=li[re];tt=Ke.vertexShader,W=Ke.fragmentShader}else tt=y.vertexShader,W=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const oe=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Ye=z.isInstancedMesh===!0,Ae=z.isBatchedMesh===!0,ct=!!y.map,ot=!!y.matcap,ke=!!K,T=!!y.aoMap,Vt=!!y.lightMap,He=!!y.bumpMap,ze=!!y.normalMap,ye=!!y.displacementMap,nt=!!y.emissiveMap,Ee=!!y.metalnessMap,w=!!y.roughnessMap,g=y.anisotropy>0,O=y.clearcoat>0,Y=y.dispersion>0,Z=y.iridescence>0,V=y.sheen>0,xe=y.transmission>0,ae=g&&!!y.anisotropyMap,pe=O&&!!y.clearcoatMap,Ve=O&&!!y.clearcoatNormalMap,Q=O&&!!y.clearcoatRoughnessMap,me=Z&&!!y.iridescenceMap,Te=Z&&!!y.iridescenceThicknessMap,Re=V&&!!y.sheenColorMap,ve=V&&!!y.sheenRoughnessMap,Be=!!y.specularMap,Ie=!!y.specularColorMap,it=!!y.specularIntensityMap,P=xe&&!!y.transmissionMap,le=xe&&!!y.thicknessMap,B=!!y.gradientMap,q=!!y.alphaMap,he=y.alphaTest>0,ce=!!y.alphaHash,Le=!!y.extensions;let at=Bi;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(at=t.toneMapping);const wt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:tt,fragmentShader:W,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,instancingMorph:Ye&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:dn,alphaToCoverage:!!y.alphaToCoverage,map:ct,matcap:ot,envMap:ke,envMapMode:ke&&K.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:Vt,bumpMap:He,normalMap:ze,displacementMap:p&&ye,emissiveMap:nt,normalMapObjectSpace:ze&&y.normalMapType===ep,normalMapTangentSpace:ze&&y.normalMapType===Qf,metalnessMap:Ee,roughnessMap:w,anisotropy:g,anisotropyMap:ae,clearcoat:O,clearcoatMap:pe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:Z,iridescenceMap:me,iridescenceThicknessMap:Te,sheen:V,sheenColorMap:Re,sheenRoughnessMap:ve,specularMap:Be,specularColorMap:Ie,specularIntensityMap:it,transmission:xe,transmissionMap:P,thicknessMap:le,gradientMap:B,opaque:y.transparent===!1&&y.blending===On&&y.alphaToCoverage===!1,alphaMap:q,alphaTest:he,alphaHash:ce,combine:y.combine,mapUv:ct&&_(y.map.channel),aoMapUv:T&&_(y.aoMap.channel),lightMapUv:Vt&&_(y.lightMap.channel),bumpMapUv:He&&_(y.bumpMap.channel),normalMapUv:ze&&_(y.normalMap.channel),displacementMapUv:ye&&_(y.displacementMap.channel),emissiveMapUv:nt&&_(y.emissiveMap.channel),metalnessMapUv:Ee&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:ae&&_(y.anisotropyMap.channel),clearcoatMapUv:pe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(y.sheenRoughnessMap.channel),specularMapUv:Be&&_(y.specularMap.channel),specularColorMapUv:Ie&&_(y.specularColorMap.channel),specularIntensityMapUv:it&&_(y.specularIntensityMap.channel),transmissionMapUv:P&&_(y.transmissionMap.channel),thicknessMapUv:le&&_(y.thicknessMap.channel),alphaMapUv:q&&_(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ze||g),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(ct||q),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:at,decodeVideoTexture:ct&&y.map.isVideoTexture===!0&&We.getTransfer(y.map.colorSpace)===Qe,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&We.getTransfer(y.emissiveMap.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mi,flipSided:y.side===It,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=h.has(1),wt.vertexUv2s=h.has(2),wt.vertexUv3s=h.has(3),h.clear(),wt}function c(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function b(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const E=v[y.type];let R;if(E){const G=li[E];R=Yp.clone(G.uniforms)}else R=y.uniforms;return R}function L(y,E){let R;for(let G=0,z=d.length;G<z;G++){const $=d[G];if($.cacheKey===E){R=$,++R.usedTimes;break}}return R===void 0&&(R=new v0(t,E,y,r),d.push(R)),R}function C(y){if(--y.usedTimes===0){const E=d.indexOf(y);d[E]=d[d.length-1],d.pop(),y.destroy()}}function A(y){l.remove(y)}function N(){l.dispose()}return{getParameters:u,getProgramCacheKey:c,getUniforms:M,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:N}}function M0(){let t=new WeakMap;function e(o){return t.has(o)}function i(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:i,remove:n,update:s,dispose:r}}function y0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function nc(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sc(){const t=[];let e=0;const i=[],n=[],s=[];function r(){e=0,i.length=0,n.length=0,s.length=0}function o(f,p,m,v,_,u){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:p,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:u},t[e]=c):(c.id=f.id,c.object=f,c.geometry=p,c.material=m,c.groupOrder=v,c.renderOrder=f.renderOrder,c.z=_,c.group=u),e++,c}function a(f,p,m,v,_,u){const c=o(f,p,m,v,_,u);m.transmission>0?n.push(c):m.transparent===!0?s.push(c):i.push(c)}function l(f,p,m,v,_,u){const c=o(f,p,m,v,_,u);m.transmission>0?n.unshift(c):m.transparent===!0?s.unshift(c):i.unshift(c)}function h(f,p){i.length>1&&i.sort(f||y0),n.length>1&&n.sort(p||nc),s.length>1&&s.sort(p||nc)}function d(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:h}}function w0(){let t=new WeakMap;function e(n,s){const r=t.get(n);let o;return r===void 0?(o=new sc,t.set(n,[o])):s>=r.length?(o=new sc,r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}function S0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new U,color:new Je};break;case"SpotLight":i={position:new U,direction:new U,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new U,color:new Je,distance:0,decay:0};break;case"HemisphereLight":i={direction:new U,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":i={color:new Je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=i,i}}}function b0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}let T0=0;function A0(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function C0(t){const e=new S0,i=b0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const s=new U,r=new et,o=new et;function a(h){let d=0,f=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,_=0,u=0,c=0,b=0,S=0,M=0,L=0,C=0,A=0;h.sort(A0);for(let y=0,E=h.length;y<E;y++){const R=h[y],G=R.color,z=R.intensity,$=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=G.r*z,f+=G.g*z,p+=G.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],z);A++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,H=i.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=X,m++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=$,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;const K=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,K.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=K.matrix,R.castShadow){const H=i.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=j,M++}_++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[u]=X,u++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const K=R.shadow,H=i.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=j,n.pointShadowMatrix[v]=R.shadow.matrix,S++}n.point[v]=X,v++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[c]=X,c++}}u>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==m||N.pointLength!==v||N.spotLength!==_||N.rectAreaLength!==u||N.hemiLength!==c||N.numDirectionalShadows!==b||N.numPointShadows!==S||N.numSpotShadows!==M||N.numSpotMaps!==L||N.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=u,n.point.length=v,n.hemi.length=c,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,N.directionalLength=m,N.pointLength=v,N.spotLength=_,N.rectAreaLength=u,N.hemiLength=c,N.numDirectionalShadows=b,N.numPointShadows=S,N.numSpotShadows=M,N.numSpotMaps=L,N.numLightProbes=A,n.version=T0++)}function l(h,d){let f=0,p=0,m=0,v=0,_=0;const u=d.matrixWorldInverse;for(let c=0,b=h.length;c<b;c++){const S=h[c];if(S.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),f++}else if(S.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),m++}else if(S.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(u),o.identity(),r.copy(S.matrixWorld),r.premultiply(u),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(u),p++}else if(S.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(u),_++}}}return{setup:a,setupView:l,state:n}}function rc(t){const e=new C0(t),i=[],n=[];function s(d){h.camera=d,i.length=0,n.length=0}function r(d){i.push(d)}function o(d){n.push(d)}function a(){e.setup(i)}function l(d){e.setupView(i,d)}const h={lightsArray:i,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function R0(t){let e=new WeakMap;function i(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new rc(t),e.set(s,[a])):r>=o.length?(a=new rc(t),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:i,dispose:n}}const P0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
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
}`;function D0(t,e,i){let n=new za;const s=new qe,r=new qe,o=new ht,a=new tm({depthPacking:Jf}),l=new im,h={},d=i.maxTextureSize,f={[Wi]:It,[It]:Wi,[Mi]:Mi},p=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:P0,fragmentShader:L0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new $i;v.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(v,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let c=this.type;this.render=function(C,A,N){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||C.length===0)return;const y=t.getRenderTarget(),E=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),G=t.state;G.setBlending(zi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=c!==Ei&&this.type===Ei,$=c===Ei&&this.type!==Ei;for(let j=0,X=C.length;j<X;j++){const K=C[j],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const re=H.getFrameExtents();if(s.multiply(re),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/re.x),s.x=r.x*re.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/re.y),s.y=r.y*re.y,H.mapSize.y=r.y)),H.map===null||z===!0||$===!0){const Me=this.type!==Ei?{minFilter:ni,magFilter:ni}:{};H.map!==null&&H.map.dispose(),H.map=new Xi(s.x,s.y,Me),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const fe=H.getViewportCount();for(let Me=0;Me<fe;Me++){const Oe=H.getViewport(Me);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),G.viewport(o),H.updateMatrices(K,Me),n=H.getFrustum(),M(A,N,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Ei&&b(H,N),H.needsUpdate=!1}c=this.type,u.needsUpdate=!1,t.setRenderTarget(y,E,R)};function b(C,A){const N=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xi(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,N,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,N,m,_,null)}function S(C,A,N,y){let E=null;const R=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)E=R;else if(E=N.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=E.uuid,z=A.uuid;let $=h[G];$===void 0&&($={},h[G]=$);let j=$[z];j===void 0&&(j=E.clone(),$[z]=j,A.addEventListener("dispose",L)),E=j}if(E.visible=A.visible,E.wireframe=A.wireframe,y===Ei?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=t.properties.get(E);G.light=N}return E}function M(C,A,N,y,E){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Ei)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const z=e.update(C),$=C.material;if(Array.isArray($)){const j=z.groups;for(let X=0,K=j.length;X<K;X++){const H=j[X],re=$[H.materialIndex];if(re&&re.visible){const fe=S(C,re,y,E);C.onBeforeShadow(t,C,A,N,z,fe,H),t.renderBufferDirect(N,null,z,fe,C,H),C.onAfterShadow(t,C,A,N,z,fe,H)}}}else if($.visible){const j=S(C,$,y,E);C.onBeforeShadow(t,C,A,N,z,j,null),t.renderBufferDirect(N,null,z,j,C,null),C.onAfterShadow(t,C,A,N,z,j,null)}}const G=C.children;for(let z=0,$=G.length;z<$;z++)M(G[z],A,N,y,E)}function L(C){C.target.removeEventListener("dispose",L);for(const N in h){const y=h[N],E=C.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const I0={[Ro]:Po,[Lo]:Uo,[Do]:No,[zn]:Io,[Po]:Ro,[Uo]:Lo,[No]:Do,[Io]:zn};function U0(t,e){function i(){let P=!1;const le=new ht;let B=null;const q=new ht(0,0,0,0);return{setMask:function(he){B!==he&&!P&&(t.colorMask(he,he,he,he),B=he)},setLocked:function(he){P=he},setClear:function(he,ce,Le,at,wt){wt===!0&&(he*=at,ce*=at,Le*=at),le.set(he,ce,Le,at),q.equals(le)===!1&&(t.clearColor(he,ce,Le,at),q.copy(le))},reset:function(){P=!1,B=null,q.set(-1,0,0,0)}}}function n(){let P=!1,le=!1,B=null,q=null,he=null;return{setReversed:function(ce){if(le!==ce){const Le=e.get("EXT_clip_control");ce?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),le=ce;const at=he;he=null,this.setClear(at)}},getReversed:function(){return le},setTest:function(ce){ce?oe(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(ce){B!==ce&&!P&&(t.depthMask(ce),B=ce)},setFunc:function(ce){if(le&&(ce=I0[ce]),q!==ce){switch(ce){case Ro:t.depthFunc(t.NEVER);break;case Po:t.depthFunc(t.ALWAYS);break;case Lo:t.depthFunc(t.LESS);break;case zn:t.depthFunc(t.LEQUAL);break;case Do:t.depthFunc(t.EQUAL);break;case Io:t.depthFunc(t.GEQUAL);break;case Uo:t.depthFunc(t.GREATER);break;case No:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=ce}},setLocked:function(ce){P=ce},setClear:function(ce){he!==ce&&(le&&(ce=1-ce),t.clearDepth(ce),he=ce)},reset:function(){P=!1,B=null,q=null,he=null,le=!1}}}function s(){let P=!1,le=null,B=null,q=null,he=null,ce=null,Le=null,at=null,wt=null;return{setTest:function(Ke){P||(Ke?oe(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!P&&(t.stencilMask(Ke),le=Ke)},setFunc:function(Ke,jt,pi){(B!==Ke||q!==jt||he!==pi)&&(t.stencilFunc(Ke,jt,pi),B=Ke,q=jt,he=pi)},setOp:function(Ke,jt,pi){(ce!==Ke||Le!==jt||at!==pi)&&(t.stencilOp(Ke,jt,pi),ce=Ke,Le=jt,at=pi)},setLocked:function(Ke){P=Ke},setClear:function(Ke){wt!==Ke&&(t.clearStencil(Ke),wt=Ke)},reset:function(){P=!1,le=null,B=null,q=null,he=null,ce=null,Le=null,at=null,wt=null}}}const r=new i,o=new n,a=new s,l=new WeakMap,h=new WeakMap;let d={},f={},p=new WeakMap,m=[],v=null,_=!1,u=null,c=null,b=null,S=null,M=null,L=null,C=null,A=new Je(0,0,0),N=0,y=!1,E=null,R=null,G=null,z=null,$=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let re=null,fe={};const Me=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),tt=new ht().fromArray(Me),W=new ht().fromArray(Oe);function ee(P,le,B,q){const he=new Uint8Array(4),ce=t.createTexture();t.bindTexture(P,ce),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<B;Le++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(le+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ce}const _e={};_e[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(zn),He(!1),ze(ll),oe(t.CULL_FACE),T(zi);function oe(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function be(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Ye(P,le){return f[P]!==le?(t.bindFramebuffer(P,le),f[P]=le,P===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=le),P===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Ae(P,le){let B=m,q=!1;if(P){B=p.get(le),B===void 0&&(B=[],p.set(le,B));const he=P.textures;if(B.length!==he.length||B[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Le=he.length;ce<Le;ce++)B[ce]=t.COLOR_ATTACHMENT0+ce;B.length=he.length,q=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,q=!0);q&&t.drawBuffers(B)}function ct(P){return v!==P?(t.useProgram(P),v=P,!0):!1}const ot={[on]:t.FUNC_ADD,[bf]:t.FUNC_SUBTRACT,[Tf]:t.FUNC_REVERSE_SUBTRACT};ot[Af]=t.MIN,ot[Cf]=t.MAX;const ke={[Rf]:t.ZERO,[Pf]:t.ONE,[Lf]:t.SRC_COLOR,[Ao]:t.SRC_ALPHA,[Ff]:t.SRC_ALPHA_SATURATE,[Nf]:t.DST_COLOR,[If]:t.DST_ALPHA,[Df]:t.ONE_MINUS_SRC_COLOR,[Co]:t.ONE_MINUS_SRC_ALPHA,[Of]:t.ONE_MINUS_DST_COLOR,[Uf]:t.ONE_MINUS_DST_ALPHA,[kf]:t.CONSTANT_COLOR,[zf]:t.ONE_MINUS_CONSTANT_COLOR,[Bf]:t.CONSTANT_ALPHA,[Hf]:t.ONE_MINUS_CONSTANT_ALPHA};function T(P,le,B,q,he,ce,Le,at,wt,Ke){if(P===zi){_===!0&&(be(t.BLEND),_=!1);return}if(_===!1&&(oe(t.BLEND),_=!0),P!==Sf){if(P!==u||Ke!==y){if((c!==on||M!==on)&&(t.blendEquation(t.FUNC_ADD),c=on,M=on),Ke)switch(P){case On:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cl:t.blendFunc(t.ONE,t.ONE);break;case hl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dl:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case On:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dl:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,S=null,L=null,C=null,A.set(0,0,0),N=0,u=P,y=Ke}return}he=he||le,ce=ce||B,Le=Le||q,(le!==c||he!==M)&&(t.blendEquationSeparate(ot[le],ot[he]),c=le,M=he),(B!==b||q!==S||ce!==L||Le!==C)&&(t.blendFuncSeparate(ke[B],ke[q],ke[ce],ke[Le]),b=B,S=q,L=ce,C=Le),(at.equals(A)===!1||wt!==N)&&(t.blendColor(at.r,at.g,at.b,wt),A.copy(at),N=wt),u=P,y=!1}function Vt(P,le){P.side===Mi?be(t.CULL_FACE):oe(t.CULL_FACE);let B=P.side===It;le&&(B=!B),He(B),P.blending===On&&P.transparent===!1?T(zi):T(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const q=P.stencilWrite;a.setTest(q),q&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){E!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),E=P)}function ze(P){P!==Mf?(oe(t.CULL_FACE),P!==R&&(P===ll?t.cullFace(t.BACK):P===yf?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),R=P}function ye(P){P!==G&&(X&&t.lineWidth(P),G=P)}function nt(P,le,B){P?(oe(t.POLYGON_OFFSET_FILL),(z!==le||$!==B)&&(t.polygonOffset(le,B),z=le,$=B)):be(t.POLYGON_OFFSET_FILL)}function Ee(P){P?oe(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function w(P){P===void 0&&(P=t.TEXTURE0+j-1),re!==P&&(t.activeTexture(P),re=P)}function g(P,le,B){B===void 0&&(re===null?B=t.TEXTURE0+j-1:B=re);let q=fe[B];q===void 0&&(q={type:void 0,texture:void 0},fe[B]=q),(q.type!==P||q.texture!==le)&&(re!==B&&(t.activeTexture(B),re=B),t.bindTexture(P,le||_e[P]),q.type=P,q.texture=le)}function O(){const P=fe[re];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{t.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{t.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{t.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{t.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{t.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{t.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{t.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){tt.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function ve(P){W.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function Be(P,le){let B=h.get(le);B===void 0&&(B=new WeakMap,h.set(le,B));let q=B.get(P);q===void 0&&(q=t.getUniformBlockIndex(le,P.name),B.set(P,q))}function Ie(P,le){const q=h.get(le).get(P);l.get(le)!==q&&(t.uniformBlockBinding(le,q,P.__bindingPointIndex),l.set(le,q))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},re=null,fe={},f={},p=new WeakMap,m=[],v=null,_=!1,u=null,c=null,b=null,S=null,M=null,L=null,C=null,A=new Je(0,0,0),N=0,y=!1,E=null,R=null,G=null,z=null,$=null,tt.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:be,bindFramebuffer:Ye,drawBuffers:Ae,useProgram:ct,setBlending:T,setMaterial:Vt,setFlipSided:He,setCullFace:ze,setLineWidth:ye,setPolygonOffset:nt,setScissorTest:Ee,activeTexture:w,bindTexture:g,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:me,texImage3D:Te,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:V,texSubImage3D:xe,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Re,viewport:ve,reset:it}}function N0(t,e,i,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,g){return m?new OffscreenCanvas(w,g):wr("canvas")}function _(w,g,O){let Y=1;const Z=Ee(w);if((Z.width>O||Z.height>O)&&(Y=O/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(Y*Z.width),xe=Math.floor(Y*Z.height);f===void 0&&(f=v(V,xe));const ae=g?v(V,xe):f;return ae.width=V,ae.height=xe,ae.getContext("2d").drawImage(w,0,0,V,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+xe+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function u(w){return w.generateMipmaps}function c(w){t.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(w,g,O,Y,Z=!1){if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=g;if(g===t.RED&&(O===t.FLOAT&&(V=t.R32F),O===t.HALF_FLOAT&&(V=t.R16F),O===t.UNSIGNED_BYTE&&(V=t.R8)),g===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(V=t.R8UI),O===t.UNSIGNED_SHORT&&(V=t.R16UI),O===t.UNSIGNED_INT&&(V=t.R32UI),O===t.BYTE&&(V=t.R8I),O===t.SHORT&&(V=t.R16I),O===t.INT&&(V=t.R32I)),g===t.RG&&(O===t.FLOAT&&(V=t.RG32F),O===t.HALF_FLOAT&&(V=t.RG16F),O===t.UNSIGNED_BYTE&&(V=t.RG8)),g===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(V=t.RG8UI),O===t.UNSIGNED_SHORT&&(V=t.RG16UI),O===t.UNSIGNED_INT&&(V=t.RG32UI),O===t.BYTE&&(V=t.RG8I),O===t.SHORT&&(V=t.RG16I),O===t.INT&&(V=t.RG32I)),g===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(V=t.RGB8UI),O===t.UNSIGNED_SHORT&&(V=t.RGB16UI),O===t.UNSIGNED_INT&&(V=t.RGB32UI),O===t.BYTE&&(V=t.RGB8I),O===t.SHORT&&(V=t.RGB16I),O===t.INT&&(V=t.RGB32I)),g===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),O===t.UNSIGNED_INT&&(V=t.RGBA32UI),O===t.BYTE&&(V=t.RGBA8I),O===t.SHORT&&(V=t.RGBA16I),O===t.INT&&(V=t.RGBA32I)),g===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),g===t.RGBA){const xe=Z?Mr:We.getTransfer(Y);O===t.FLOAT&&(V=t.RGBA32F),O===t.HALF_FLOAT&&(V=t.RGBA16F),O===t.UNSIGNED_BYTE&&(V=xe===Qe?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(w,g){let O;return w?g===null||g===hn||g===xs?O=t.DEPTH24_STENCIL8:g===yi?O=t.DEPTH32F_STENCIL8:g===_s&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===hn||g===xs?O=t.DEPTH_COMPONENT24:g===yi?O=t.DEPTH_COMPONENT32F:g===_s&&(O=t.DEPTH_COMPONENT16),O}function L(w,g){return u(w)===!0||w.isFramebufferTexture&&w.minFilter!==ni&&w.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function C(w){const g=w.target;g.removeEventListener("dispose",C),N(g),g.isVideoTexture&&d.delete(g)}function A(w){const g=w.target;g.removeEventListener("dispose",A),E(g)}function N(w){const g=n.get(w);if(g.__webglInit===void 0)return;const O=w.source,Y=p.get(O);if(Y){const Z=Y[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(w),Object.keys(Y).length===0&&p.delete(O)}n.remove(w)}function y(w){const g=n.get(w);t.deleteTexture(g.__webglTexture);const O=w.source,Y=p.get(O);delete Y[g.__cacheKey],o.memory.textures--}function E(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let Z=0;Z<g.__webglFramebuffer[Y].length;Z++)t.deleteFramebuffer(g.__webglFramebuffer[Y][Z]);else t.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)t.deleteFramebuffer(g.__webglFramebuffer[Y]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=w.textures;for(let Y=0,Z=O.length;Y<Z;Y++){const V=n.get(O[Y]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(O[Y])}n.remove(w)}let R=0;function G(){R=0}function z(){const w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function $(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function j(w,g){const O=n.get(w);if(w.isVideoTexture&&ye(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,w,g);return}}i.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+g)}function X(w,g){const O=n.get(w);if(w.version>0&&O.__version!==w.version){W(O,w,g);return}i.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+g)}function K(w,g){const O=n.get(w);if(w.version>0&&O.__version!==w.version){W(O,w,g);return}i.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+g)}function H(w,g){const O=n.get(w);if(w.version>0&&O.__version!==w.version){ee(O,w,g);return}i.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+g)}const re={[ko]:t.REPEAT,[ln]:t.CLAMP_TO_EDGE,[zo]:t.MIRRORED_REPEAT},fe={[ni]:t.NEAREST,[Zf]:t.NEAREST_MIPMAP_NEAREST,[Bs]:t.NEAREST_MIPMAP_LINEAR,[Bt]:t.LINEAR,[jr]:t.LINEAR_MIPMAP_NEAREST,[ki]:t.LINEAR_MIPMAP_LINEAR},Me={[tp]:t.NEVER,[ap]:t.ALWAYS,[ip]:t.LESS,[Wc]:t.LEQUAL,[np]:t.EQUAL,[op]:t.GEQUAL,[sp]:t.GREATER,[rp]:t.NOTEQUAL};function Oe(w,g){if(g.type===yi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Bt||g.magFilter===jr||g.magFilter===Bs||g.magFilter===ki||g.minFilter===Bt||g.minFilter===jr||g.minFilter===Bs||g.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,re[g.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,re[g.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,re[g.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,fe[g.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,fe[g.minFilter]),g.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ni||g.minFilter!==Bs&&g.minFilter!==ki||g.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function tt(w,g){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",C));const Y=g.source;let Z=p.get(Y);Z===void 0&&(Z={},p.set(Y,Z));const V=$(g);if(V!==w.__cacheKey){Z[V]===void 0&&(Z[V]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[V].usedTimes++;const xe=Z[w.__cacheKey];xe!==void 0&&(Z[w.__cacheKey].usedTimes--,xe.usedTimes===0&&y(g)),w.__cacheKey=V,w.__webglTexture=Z[V].texture}return O}function W(w,g,O){let Y=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=t.TEXTURE_3D);const Z=tt(w,g),V=g.source;i.bindTexture(Y,w.__webglTexture,t.TEXTURE0+O);const xe=n.get(V);if(V.version!==xe.__version||Z===!0){i.activeTexture(t.TEXTURE0+O);const ae=We.getPrimaries(We.workingColorSpace),pe=g.colorSpace===Fi?null:We.getPrimaries(g.colorSpace),Ve=g.colorSpace===Fi||ae===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=_(g.image,!1,s.maxTextureSize);Q=nt(g,Q);const me=r.convert(g.format,g.colorSpace),Te=r.convert(g.type);let Re=S(g.internalFormat,me,Te,g.colorSpace,g.isVideoTexture);Oe(Y,g);let ve;const Be=g.mipmaps,Ie=g.isVideoTexture!==!0,it=xe.__version===void 0||Z===!0,P=V.dataReady,le=L(g,Q);if(g.isDepthTexture)Re=M(g.format===Ms,g.type),it&&(Ie?i.texStorage2D(t.TEXTURE_2D,1,Re,Q.width,Q.height):i.texImage2D(t.TEXTURE_2D,0,Re,Q.width,Q.height,0,me,Te,null));else if(g.isDataTexture)if(Be.length>0){Ie&&it&&i.texStorage2D(t.TEXTURE_2D,le,Re,Be[0].width,Be[0].height);for(let B=0,q=Be.length;B<q;B++)ve=Be[B],Ie?P&&i.texSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,me,Te,ve.data):i.texImage2D(t.TEXTURE_2D,B,Re,ve.width,ve.height,0,me,Te,ve.data);g.generateMipmaps=!1}else Ie?(it&&i.texStorage2D(t.TEXTURE_2D,le,Re,Q.width,Q.height),P&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,me,Te,Q.data)):i.texImage2D(t.TEXTURE_2D,0,Re,Q.width,Q.height,0,me,Te,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ie&&it&&i.texStorage3D(t.TEXTURE_2D_ARRAY,le,Re,Be[0].width,Be[0].height,Q.depth);for(let B=0,q=Be.length;B<q;B++)if(ve=Be[B],g.format!==ii)if(me!==null)if(Ie){if(P)if(g.layerUpdates.size>0){const he=Nl(ve.width,ve.height,g.format,g.type);for(const ce of g.layerUpdates){const Le=ve.data.subarray(ce*he/ve.data.BYTES_PER_ELEMENT,(ce+1)*he/ve.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,ce,ve.width,ve.height,1,me,Le)}g.clearLayerUpdates()}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,Q.depth,me,ve.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,Re,ve.width,ve.height,Q.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?P&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ve.width,ve.height,Q.depth,me,Te,ve.data):i.texImage3D(t.TEXTURE_2D_ARRAY,B,Re,ve.width,ve.height,Q.depth,0,me,Te,ve.data)}else{Ie&&it&&i.texStorage2D(t.TEXTURE_2D,le,Re,Be[0].width,Be[0].height);for(let B=0,q=Be.length;B<q;B++)ve=Be[B],g.format!==ii?me!==null?Ie?P&&i.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,me,ve.data):i.compressedTexImage2D(t.TEXTURE_2D,B,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?P&&i.texSubImage2D(t.TEXTURE_2D,B,0,0,ve.width,ve.height,me,Te,ve.data):i.texImage2D(t.TEXTURE_2D,B,Re,ve.width,ve.height,0,me,Te,ve.data)}else if(g.isDataArrayTexture)if(Ie){if(it&&i.texStorage3D(t.TEXTURE_2D_ARRAY,le,Re,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const B=Nl(Q.width,Q.height,g.format,g.type);for(const q of g.layerUpdates){const he=Q.data.subarray(q*B/Q.data.BYTES_PER_ELEMENT,(q+1)*B/Q.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,me,Te,he)}g.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,Te,Q.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,me,Te,Q.data);else if(g.isData3DTexture)Ie?(it&&i.texStorage3D(t.TEXTURE_3D,le,Re,Q.width,Q.height,Q.depth),P&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,Te,Q.data)):i.texImage3D(t.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,me,Te,Q.data);else if(g.isFramebufferTexture){if(it)if(Ie)i.texStorage2D(t.TEXTURE_2D,le,Re,Q.width,Q.height);else{let B=Q.width,q=Q.height;for(let he=0;he<le;he++)i.texImage2D(t.TEXTURE_2D,he,Re,B,q,0,me,Te,null),B>>=1,q>>=1}}else if(Be.length>0){if(Ie&&it){const B=Ee(Be[0]);i.texStorage2D(t.TEXTURE_2D,le,Re,B.width,B.height)}for(let B=0,q=Be.length;B<q;B++)ve=Be[B],Ie?P&&i.texSubImage2D(t.TEXTURE_2D,B,0,0,me,Te,ve):i.texImage2D(t.TEXTURE_2D,B,Re,me,Te,ve);g.generateMipmaps=!1}else if(Ie){if(it){const B=Ee(Q);i.texStorage2D(t.TEXTURE_2D,le,Re,B.width,B.height)}P&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Te,Q)}else i.texImage2D(t.TEXTURE_2D,0,Re,me,Te,Q);u(g)&&c(Y),xe.__version=V.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ee(w,g,O){if(g.image.length!==6)return;const Y=tt(w,g),Z=g.source;i.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+O);const V=n.get(Z);if(Z.version!==V.__version||Y===!0){i.activeTexture(t.TEXTURE0+O);const xe=We.getPrimaries(We.workingColorSpace),ae=g.colorSpace===Fi?null:We.getPrimaries(g.colorSpace),pe=g.colorSpace===Fi||xe===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ve=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,me=[];for(let q=0;q<6;q++)!Ve&&!Q?me[q]=_(g.image[q],!0,s.maxCubemapSize):me[q]=Q?g.image[q].image:g.image[q],me[q]=nt(g,me[q]);const Te=me[0],Re=r.convert(g.format,g.colorSpace),ve=r.convert(g.type),Be=S(g.internalFormat,Re,ve,g.colorSpace),Ie=g.isVideoTexture!==!0,it=V.__version===void 0||Y===!0,P=Z.dataReady;let le=L(g,Te);Oe(t.TEXTURE_CUBE_MAP,g);let B;if(Ve){Ie&&it&&i.texStorage2D(t.TEXTURE_CUBE_MAP,le,Be,Te.width,Te.height);for(let q=0;q<6;q++){B=me[q].mipmaps;for(let he=0;he<B.length;he++){const ce=B[he];g.format!==ii?Re!==null?Ie?P&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,0,0,ce.width,ce.height,Re,ce.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,Be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,0,0,ce.width,ce.height,Re,ve,ce.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,Be,ce.width,ce.height,0,Re,ve,ce.data)}}}else{if(B=g.mipmaps,Ie&&it){B.length>0&&le++;const q=Ee(me[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,le,Be,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,me[q].width,me[q].height,Re,ve,me[q].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Be,me[q].width,me[q].height,0,Re,ve,me[q].data);for(let he=0;he<B.length;he++){const Le=B[he].image[q].image;Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,0,0,Le.width,Le.height,Re,ve,Le.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,Be,Le.width,Le.height,0,Re,ve,Le.data)}}else{Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Re,ve,me[q]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Be,Re,ve,me[q]);for(let he=0;he<B.length;he++){const ce=B[he];Ie?P&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,0,0,Re,ve,ce.image[q]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,Be,Re,ve,ce.image[q])}}}u(g)&&c(t.TEXTURE_CUBE_MAP),V.__version=Z.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function _e(w,g,O,Y,Z,V){const xe=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),pe=S(O.internalFormat,xe,ae,O.colorSpace),Ve=n.get(g),Q=n.get(O);if(Q.__renderTarget=g,!Ve.__hasExternalTextures){const me=Math.max(1,g.width>>V),Te=Math.max(1,g.height>>V);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?i.texImage3D(Z,V,pe,me,Te,g.depth,0,xe,ae,null):i.texImage2D(Z,V,pe,me,Te,0,xe,ae,null)}i.bindFramebuffer(t.FRAMEBUFFER,w),ze(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,He(g)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Z,Q.__webglTexture,V),i.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(w,g,O){if(t.bindRenderbuffer(t.RENDERBUFFER,w),g.depthBuffer){const Y=g.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,V=M(g.stencilBuffer,Z),xe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=He(g);ze(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,V,g.width,g.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,V,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,V,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,w)}else{const Y=g.textures;for(let Z=0;Z<Y.length;Z++){const V=Y[Z],xe=r.convert(V.format,V.colorSpace),ae=r.convert(V.type),pe=S(V.internalFormat,xe,ae,V.colorSpace),Ve=He(g);O&&ze(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,pe,g.width,g.height):ze(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,pe,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,pe,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(t.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(g.depthTexture);Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const Z=Y.__webglTexture,V=He(g);if(g.depthTexture.format===Es)ze(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Ms)ze(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ye(w){const g=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=Y}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");be(g.__webglFramebuffer,w)}else if(O){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(i.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=t.createRenderbuffer(),oe(g.__webglDepthbuffer[Y],w,!1);else{const Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,V)}}else if(i.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),oe(g.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,Z)}i.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(w,g,O){const Y=n.get(w);g!==void 0&&_e(Y.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ye(w)}function ct(w){const g=w.texture,O=n.get(w),Y=n.get(g);w.addEventListener("dispose",A);const Z=w.textures,V=w.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=g.version,o.memory.textures++),V){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let pe=0;pe<g.mipmaps.length;pe++)O.__webglFramebuffer[ae][pe]=t.createFramebuffer()}else O.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)O.__webglFramebuffer[ae]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ae=0,pe=Z.length;ae<pe;ae++){const Ve=n.get(Z[ae]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&ze(w)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const pe=Z[ae];O.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const Ve=r.convert(pe.format,pe.colorSpace),Q=r.convert(pe.type),me=S(pe.internalFormat,Ve,Q,pe.colorSpace,w.isXRRenderTarget===!0),Te=He(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,me,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){i.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let pe=0;pe<g.mipmaps.length;pe++)_e(O.__webglFramebuffer[ae][pe],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,pe);else _e(O.__webglFramebuffer[ae],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);u(g)&&c(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(xe){for(let ae=0,pe=Z.length;ae<pe;ae++){const Ve=Z[ae],Q=n.get(Ve);i.bindTexture(t.TEXTURE_2D,Q.__webglTexture),Oe(t.TEXTURE_2D,Ve),_e(O.__webglFramebuffer,w,Ve,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),u(Ve)&&c(t.TEXTURE_2D)}i.unbindTexture()}else{let ae=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(ae,Y.__webglTexture),Oe(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let pe=0;pe<g.mipmaps.length;pe++)_e(O.__webglFramebuffer[pe],w,g,t.COLOR_ATTACHMENT0,ae,pe);else _e(O.__webglFramebuffer,w,g,t.COLOR_ATTACHMENT0,ae,0);u(g)&&c(ae),i.unbindTexture()}w.depthBuffer&&Ye(w)}function ot(w){const g=w.textures;for(let O=0,Y=g.length;O<Y;O++){const Z=g[O];if(u(Z)){const V=b(w),xe=n.get(Z).__webglTexture;i.bindTexture(V,xe),c(V),i.unbindTexture()}}}const ke=[],T=[];function Vt(w){if(w.samples>0){if(ze(w)===!1){const g=w.textures,O=w.width,Y=w.height;let Z=t.COLOR_BUFFER_BIT;const V=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=n.get(w),ae=g.length>1;if(ae)for(let pe=0;pe<g.length;pe++)i.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Ve=n.get(g[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,Z,t.NEAREST),l===!0&&(ke.length=0,T.length=0,ke.push(t.COLOR_ATTACHMENT0+pe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ke.push(V),T.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,T)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let pe=0;pe<g.length;pe++){i.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,xe.__webglColorRenderbuffer[pe]);const Ve=n.get(g[pe]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Ve,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const g=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function He(w){return Math.min(s.maxSamples,w.samples)}function ze(w){const g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ye(w){const g=o.render.frame;d.get(w)!==g&&(d.set(w,g),w.update())}function nt(w,g){const O=w.colorSpace,Y=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==dn&&O!==Fi&&(We.getTransfer(O)===Qe?(Y!==ii||Z!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function Ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ze}function O0(t,e){function i(n,s=Fi){let r;const o=We.getTransfer(s);if(n===Ai)return t.UNSIGNED_BYTE;if(n===Pa)return t.UNSIGNED_SHORT_4_4_4_4;if(n===La)return t.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return t.BYTE;if(n===Nc)return t.SHORT;if(n===_s)return t.UNSIGNED_SHORT;if(n===Ra)return t.INT;if(n===hn)return t.UNSIGNED_INT;if(n===yi)return t.FLOAT;if(n===bs)return t.HALF_FLOAT;if(n===Fc)return t.ALPHA;if(n===kc)return t.RGB;if(n===ii)return t.RGBA;if(n===zc)return t.LUMINANCE;if(n===Bc)return t.LUMINANCE_ALPHA;if(n===Es)return t.DEPTH_COMPONENT;if(n===Ms)return t.DEPTH_STENCIL;if(n===Hc)return t.RED;if(n===Da)return t.RED_INTEGER;if(n===Vc)return t.RG;if(n===Ia)return t.RG_INTEGER;if(n===Ua)return t.RGBA_INTEGER;if(n===dr||n===ur||n===fr||n===pr)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===Ho||n===Vo||n===Go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===Yo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qo||n===$o||n===jo||n===Zo||n===Ko||n===Jo||n===Qo||n===ea||n===ta||n===ia||n===na||n===sa||n===ra||n===oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===aa||n===la)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gc||n===ca||n===ha||n===da)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:i}}const F0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
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

}`;class z0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,n){if(this.texture===null){const s=new yt,r=e.properties.get(s);r.__webglTexture=i.texture,(i.depthNear!==n.depthNear||i.depthFar!==n.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,n=new Ci({vertexShader:F0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ht(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends Gn{constructor(e,i){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,d=null,f=null,p=null,m=null,v=null;const _=new z0,u=i.getContextAttributes();let c=null,b=null;const S=[],M=[],L=new qe;let C=null;const A=new zt;A.viewport=new ht;const N=new zt;N.viewport=new ht;const y=[A,N],E=new om;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=S[W];return ee===void 0&&(ee=new vo,S[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=S[W];return ee===void 0&&(ee=new vo,S[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=S[W];return ee===void 0&&(ee=new vo,S[W]=ee),ee.getHandSpace()};function z(W){const ee=M.indexOf(W.inputSource);if(ee===-1)return;const _e=S[ee];_e!==void 0&&(_e.update(W.inputSource,W.frame,h||o),_e.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",j);for(let W=0;W<S.length;W++){const ee=M[W];ee!==null&&(M[W]=null,S[W].disconnect(ee))}R=null,G=null,_.reset(),e.setRenderTarget(c),m=null,p=null,f=null,s=null,b=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(c=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",$),s.addEventListener("inputsourceschange",j),u.xrCompatible!==!0&&await i.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,oe=null,be=null;u.depth&&(be=u.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=u.stencil?Ms:Es,oe=u.stencil?xs:hn);const Ye={colorFormat:i.RGBA8,depthFormat:be,scaleFactor:r};f=new XRWebGLBinding(s,i),p=f.createProjectionLayer(Ye),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Xi(p.textureWidth,p.textureHeight,{format:ii,type:Ai,depthTexture:new eh(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const _e={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,i,_e),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Xi(m.framebufferWidth,m.framebufferHeight,{format:ii,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(W){for(let ee=0;ee<W.removed.length;ee++){const _e=W.removed[ee],oe=M.indexOf(_e);oe>=0&&(M[oe]=null,S[oe].disconnect(_e))}for(let ee=0;ee<W.added.length;ee++){const _e=W.added[ee];let oe=M.indexOf(_e);if(oe===-1){for(let Ye=0;Ye<S.length;Ye++)if(Ye>=M.length){M.push(_e),oe=Ye;break}else if(M[Ye]===null){M[Ye]=_e,oe=Ye;break}if(oe===-1)break}const be=S[oe];be&&be.connect(_e)}}const X=new U,K=new U;function H(W,ee,_e){X.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const oe=X.distanceTo(K),be=ee.projectionMatrix.elements,Ye=_e.projectionMatrix.elements,Ae=be[14]/(be[10]-1),ct=be[14]/(be[10]+1),ot=(be[9]+1)/be[5],ke=(be[9]-1)/be[5],T=(be[8]-1)/be[0],Vt=(Ye[8]+1)/Ye[0],He=Ae*T,ze=Ae*Vt,ye=oe/(-T+Vt),nt=ye*-T;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(nt),W.translateZ(ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ee=Ae+ye,w=ct+ye,g=He-nt,O=ze+(oe-nt),Y=ot*ct/w*Ee,Z=ke*ct/w*Ee;W.projectionMatrix.makePerspective(g,O,Y,Z,Ee,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function re(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ee=W.near,_e=W.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),E.near=N.near=A.near=ee,E.far=N.far=A.far=_e,(R!==E.near||G!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,G=E.far),A.layers.mask=W.layers.mask|2,N.layers.mask=W.layers.mask|4,E.layers.mask=A.layers.mask|N.layers.mask;const oe=W.parent,be=E.cameras;re(E,oe);for(let Ye=0;Ye<be.length;Ye++)re(be[Ye],oe);be.length===2?H(E,A,N):E.projectionMatrix.copy(A.projectionMatrix),fe(W,E,oe)};function fe(W,ee,_e){_e===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ys*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Me=null;function Oe(W,ee){if(d=ee.getViewerPose(h||o),v=ee,d!==null){const _e=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let oe=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,oe=!0);for(let Ae=0;Ae<_e.length;Ae++){const ct=_e[Ae];let ot=null;if(m!==null)ot=m.getViewport(ct);else{const T=f.getViewSubImage(p,ct);ot=T.viewport,Ae===0&&(e.setRenderTargetTextures(b,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(b))}let ke=y[Ae];ke===void 0&&(ke=new zt,ke.layers.enable(Ae),ke.viewport=new ht,y[Ae]=ke),ke.matrix.fromArray(ct.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ct.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(ot.x,ot.y,ot.width,ot.height),Ae===0&&(E.matrix.copy(ke.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),oe===!0&&E.cameras.push(ke)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const Ae=f.getDepthInformation(_e[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,s.renderState)}}for(let _e=0;_e<S.length;_e++){const oe=M[_e],be=S[_e];oe!==null&&be!==void 0&&be.update(oe,ee,h||o)}Me&&Me(W,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}const tt=new th;tt.setAnimationLoop(Oe),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}}const nn=new ui,H0=new et;function V0(t,e){function i(u,c){u.matrixAutoUpdate===!0&&u.updateMatrix(),c.value.copy(u.matrix)}function n(u,c){c.color.getRGB(u.fogColor.value,Kc(t)),c.isFog?(u.fogNear.value=c.near,u.fogFar.value=c.far):c.isFogExp2&&(u.fogDensity.value=c.density)}function s(u,c,b,S,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(u,c):c.isMeshToonMaterial?(r(u,c),f(u,c)):c.isMeshPhongMaterial?(r(u,c),d(u,c)):c.isMeshStandardMaterial?(r(u,c),p(u,c),c.isMeshPhysicalMaterial&&m(u,c,M)):c.isMeshMatcapMaterial?(r(u,c),v(u,c)):c.isMeshDepthMaterial?r(u,c):c.isMeshDistanceMaterial?(r(u,c),_(u,c)):c.isMeshNormalMaterial?r(u,c):c.isLineBasicMaterial?(o(u,c),c.isLineDashedMaterial&&a(u,c)):c.isPointsMaterial?l(u,c,b,S):c.isSpriteMaterial?h(u,c):c.isShadowMaterial?(u.color.value.copy(c.color),u.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(u,c){u.opacity.value=c.opacity,c.color&&u.diffuse.value.copy(c.color),c.emissive&&u.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(u.map.value=c.map,i(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,i(c.alphaMap,u.alphaMapTransform)),c.bumpMap&&(u.bumpMap.value=c.bumpMap,i(c.bumpMap,u.bumpMapTransform),u.bumpScale.value=c.bumpScale,c.side===It&&(u.bumpScale.value*=-1)),c.normalMap&&(u.normalMap.value=c.normalMap,i(c.normalMap,u.normalMapTransform),u.normalScale.value.copy(c.normalScale),c.side===It&&u.normalScale.value.negate()),c.displacementMap&&(u.displacementMap.value=c.displacementMap,i(c.displacementMap,u.displacementMapTransform),u.displacementScale.value=c.displacementScale,u.displacementBias.value=c.displacementBias),c.emissiveMap&&(u.emissiveMap.value=c.emissiveMap,i(c.emissiveMap,u.emissiveMapTransform)),c.specularMap&&(u.specularMap.value=c.specularMap,i(c.specularMap,u.specularMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest);const b=e.get(c),S=b.envMap,M=b.envMapRotation;S&&(u.envMap.value=S,nn.copy(M),nn.x*=-1,nn.y*=-1,nn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(nn.y*=-1,nn.z*=-1),u.envMapRotation.value.setFromMatrix4(H0.makeRotationFromEuler(nn)),u.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=c.reflectivity,u.ior.value=c.ior,u.refractionRatio.value=c.refractionRatio),c.lightMap&&(u.lightMap.value=c.lightMap,u.lightMapIntensity.value=c.lightMapIntensity,i(c.lightMap,u.lightMapTransform)),c.aoMap&&(u.aoMap.value=c.aoMap,u.aoMapIntensity.value=c.aoMapIntensity,i(c.aoMap,u.aoMapTransform))}function o(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,c.map&&(u.map.value=c.map,i(c.map,u.mapTransform))}function a(u,c){u.dashSize.value=c.dashSize,u.totalSize.value=c.dashSize+c.gapSize,u.scale.value=c.scale}function l(u,c,b,S){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.size.value=c.size*b,u.scale.value=S*.5,c.map&&(u.map.value=c.map,i(c.map,u.uvTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,i(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function h(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.rotation.value=c.rotation,c.map&&(u.map.value=c.map,i(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,i(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function d(u,c){u.specular.value.copy(c.specular),u.shininess.value=Math.max(c.shininess,1e-4)}function f(u,c){c.gradientMap&&(u.gradientMap.value=c.gradientMap)}function p(u,c){u.metalness.value=c.metalness,c.metalnessMap&&(u.metalnessMap.value=c.metalnessMap,i(c.metalnessMap,u.metalnessMapTransform)),u.roughness.value=c.roughness,c.roughnessMap&&(u.roughnessMap.value=c.roughnessMap,i(c.roughnessMap,u.roughnessMapTransform)),c.envMap&&(u.envMapIntensity.value=c.envMapIntensity)}function m(u,c,b){u.ior.value=c.ior,c.sheen>0&&(u.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),u.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(u.sheenColorMap.value=c.sheenColorMap,i(c.sheenColorMap,u.sheenColorMapTransform)),c.sheenRoughnessMap&&(u.sheenRoughnessMap.value=c.sheenRoughnessMap,i(c.sheenRoughnessMap,u.sheenRoughnessMapTransform))),c.clearcoat>0&&(u.clearcoat.value=c.clearcoat,u.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(u.clearcoatMap.value=c.clearcoatMap,i(c.clearcoatMap,u.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,i(c.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(u.clearcoatNormalMap.value=c.clearcoatNormalMap,i(c.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===It&&u.clearcoatNormalScale.value.negate())),c.dispersion>0&&(u.dispersion.value=c.dispersion),c.iridescence>0&&(u.iridescence.value=c.iridescence,u.iridescenceIOR.value=c.iridescenceIOR,u.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(u.iridescenceMap.value=c.iridescenceMap,i(c.iridescenceMap,u.iridescenceMapTransform)),c.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=c.iridescenceThicknessMap,i(c.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),c.transmission>0&&(u.transmission.value=c.transmission,u.transmissionSamplerMap.value=b.texture,u.transmissionSamplerSize.value.set(b.width,b.height),c.transmissionMap&&(u.transmissionMap.value=c.transmissionMap,i(c.transmissionMap,u.transmissionMapTransform)),u.thickness.value=c.thickness,c.thicknessMap&&(u.thicknessMap.value=c.thicknessMap,i(c.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=c.attenuationDistance,u.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(u.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(u.anisotropyMap.value=c.anisotropyMap,i(c.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=c.specularIntensity,u.specularColor.value.copy(c.specularColor),c.specularColorMap&&(u.specularColorMap.value=c.specularColorMap,i(c.specularColorMap,u.specularColorMapTransform)),c.specularIntensityMap&&(u.specularIntensityMap.value=c.specularIntensityMap,i(c.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,c){c.matcap&&(u.matcap.value=c.matcap)}function _(u,c){const b=e.get(c).light;u.referencePosition.value.setFromMatrixPosition(b.matrixWorld),u.nearDistance.value=b.shadow.camera.near,u.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G0(t,e,i,n){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const M=S.program;n.uniformBlockBinding(b,M)}function h(b,S){let M=s[b.id];M===void 0&&(v(b),M=d(b),s[b.id]=M,b.addEventListener("dispose",u));const L=S.program;n.updateUBOMapping(b,L);const C=e.render.frame;r[b.id]!==C&&(p(b),r[b.id]=C)}function d(b){const S=f();b.__bindingPointIndex=S;const M=t.createBuffer(),L=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const S=s[b.id],M=b.uniforms,L=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,A=M.length;C<A;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,E=N.length;y<E;y++){const R=N[y];if(m(R,C,y,L)===!0){const G=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let $=0;for(let j=0;j<z.length;j++){const X=z[j],K=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,G+$,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,S,M,L){const C=b.value,A=S+"_"+M;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const N=L[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return L[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function v(b){const S=b.uniforms;let M=0;const L=16;for(let A=0,N=S.length;A<N;A++){const y=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,R=y.length;E<R;E++){const G=y[E],z=Array.isArray(G.value)?G.value:[G.value];for(let $=0,j=z.length;$<j;$++){const X=z[$],K=_(X),H=M%L,re=H%K.boundary,fe=H+re;M+=re,fe!==0&&L-fe<K.storage&&(M+=L-fe),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=K.storage}}}const C=M%L;return C>0&&(M+=L-C),b.__size=M,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function u(b){const S=b.target;S.removeEventListener("dispose",u);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function c(){for(const b in s)t.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:h,dispose:c}}class W0{constructor(e={}){const{canvas:i=Sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),_=new Int32Array(4);let u=null,c=null;const b=[],S=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let L=!1;this._outputColorSpace=qt;let C=0,A=0,N=null,y=-1,E=null;const R=new ht,G=new ht;let z=null;const $=new Je(0);let j=0,X=i.width,K=i.height,H=1,re=null,fe=null;const Me=new ht(0,0,X,K),Oe=new ht(0,0,X,K);let tt=!1;const W=new za;let ee=!1,_e=!1;const oe=new et,be=new et,Ye=new U,Ae=new ht,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function ke(){return N===null?H:1}let T=n;function Vt(x,D){return i.getContext(x,D)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ca}`),i.addEventListener("webglcontextlost",q,!1),i.addEventListener("webglcontextrestored",he,!1),i.addEventListener("webglcontextcreationerror",ce,!1),T===null){const D="webgl2";if(T=Vt(D,x),T===null)throw Vt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let He,ze,ye,nt,Ee,w,g,O,Y,Z,V,xe,ae,pe,Ve,Q,me,Te,Re,ve,Be,Ie,it,P;function le(){He=new e_(T),He.init(),Ie=new O0(T,He),ze=new qg(T,He,e,Ie),ye=new U0(T,He),ze.reverseDepthBuffer&&p&&ye.buffers.depth.setReversed(!0),nt=new n_(T),Ee=new M0,w=new N0(T,He,ye,Ee,ze,Ie,nt),g=new jg(M),O=new Qg(M),Y=new cm(T),it=new Xg(T,Y),Z=new t_(T,Y,nt,it),V=new r_(T,Z,Y,nt),Re=new s_(T,ze,w),Q=new $g(Ee),xe=new E0(M,g,O,He,ze,it,Q),ae=new V0(M,Ee),pe=new w0,Ve=new R0(He),Te=new Wg(M,g,O,ye,V,m,l),me=new D0(M,V,ze),P=new G0(T,nt,ze,ye),ve=new Yg(T,He,nt),Be=new i_(T,He,nt),nt.programs=xe.programs,M.capabilities=ze,M.extensions=He,M.properties=Ee,M.renderLists=pe,M.shadowMap=me,M.state=ye,M.info=nt}le();const B=new B0(M,T);this.xr=B,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(X,K,!1))},this.getSize=function(x){return x.set(X,K)},this.setSize=function(x,D,F=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,K=D,i.width=Math.floor(x*H),i.height=Math.floor(D*H),F===!0&&(i.style.width=x+"px",i.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(x,D,F){X=x,K=D,H=F,i.width=Math.floor(x*F),i.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,D,F,k){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,D,F,k),ye.viewport(R.copy(Me).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Oe)},this.setScissor=function(x,D,F,k){x.isVector4?Oe.set(x.x,x.y,x.z,x.w):Oe.set(x,D,F,k),ye.scissor(G.copy(Oe).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){ye.setScissorTest(tt=x)},this.setOpaqueSort=function(x){re=x},this.setTransparentSort=function(x){fe=x},this.getClearColor=function(x){return x.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,F=!0){let k=0;if(x){let I=!1;if(N!==null){const J=N.texture.format;I=J===Ua||J===Ia||J===Da}if(I){const J=N.texture.type,ne=J===Ai||J===hn||J===_s||J===xs||J===Pa||J===La,ue=Te.getClearColor(),ge=Te.getClearAlpha(),Pe=ue.r,Ce=ue.g,we=ue.b;ne?(v[0]=Pe,v[1]=Ce,v[2]=we,v[3]=ge,T.clearBufferuiv(T.COLOR,0,v)):(_[0]=Pe,_[1]=Ce,_[2]=we,_[3]=ge,T.clearBufferiv(T.COLOR,0,_))}else k|=T.COLOR_BUFFER_BIT}D&&(k|=T.DEPTH_BUFFER_BIT),F&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",q,!1),i.removeEventListener("webglcontextrestored",he,!1),i.removeEventListener("webglcontextcreationerror",ce,!1),Te.dispose(),pe.dispose(),Ve.dispose(),Ee.dispose(),g.dispose(),O.dispose(),V.dispose(),it.dispose(),P.dispose(),xe.dispose(),B.dispose(),B.removeEventListener("sessionstart",tl),B.removeEventListener("sessionend",il),ji.stop()};function q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const x=nt.autoReset,D=me.enabled,F=me.autoUpdate,k=me.needsUpdate,I=me.type;le(),nt.autoReset=x,me.enabled=D,me.autoUpdate=F,me.needsUpdate=k,me.type=I}function ce(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Le(x){const D=x.target;D.removeEventListener("dispose",Le),at(D)}function at(x){wt(x),Ee.remove(x)}function wt(x){const D=Ee.get(x).programs;D!==void 0&&(D.forEach(function(F){xe.releaseProgram(F)}),x.isShaderMaterial&&xe.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,k,I,J){D===null&&(D=ct);const ne=I.isMesh&&I.matrixWorld.determinant()<0,ue=mf(x,D,F,k,I);ye.setMaterial(k,ne);let ge=F.index,Pe=1;if(k.wireframe===!0){if(ge=Z.getWireframeAttribute(F),ge===void 0)return;Pe=2}const Ce=F.drawRange,we=F.attributes.position;let Ge=Ce.start*Pe,$e=(Ce.start+Ce.count)*Pe;J!==null&&(Ge=Math.max(Ge,J.start*Pe),$e=Math.min($e,(J.start+J.count)*Pe)),ge!==null?(Ge=Math.max(Ge,0),$e=Math.min($e,ge.count)):we!=null&&(Ge=Math.max(Ge,0),$e=Math.min($e,we.count));const dt=$e-Ge;if(dt<0||dt===1/0)return;it.setup(I,k,ue,F,ge);let lt,Xe=ve;if(ge!==null&&(lt=Y.get(ge),Xe=Be,Xe.setIndex(lt)),I.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*ke()),Xe.setMode(T.LINES)):Xe.setMode(T.TRIANGLES);else if(I.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),ye.setLineWidth(Se*ke()),I.isLineSegments?Xe.setMode(T.LINES):I.isLineLoop?Xe.setMode(T.LINE_LOOP):Xe.setMode(T.LINE_STRIP)}else I.isPoints?Xe.setMode(T.POINTS):I.isSprite&&Xe.setMode(T.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Xe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Se=I._multiDrawStarts,xt=I._multiDrawCounts,je=I._multiDrawCount,Zt=ge?Y.get(ge).bytesPerElement:1,pn=Ee.get(k).currentProgram.getUniforms();for(let Nt=0;Nt<je;Nt++)pn.setValue(T,"_gl_DrawID",Nt),Xe.render(Se[Nt]/Zt,xt[Nt])}else if(I.isInstancedMesh)Xe.renderInstances(Ge,dt,I.count);else if(F.isInstancedBufferGeometry){const Se=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,xt=Math.min(F.instanceCount,Se);Xe.renderInstances(Ge,dt,xt)}else Xe.render(Ge,dt)};function Ke(x,D,F){x.transparent===!0&&x.side===Mi&&x.forceSinglePass===!1?(x.side=It,x.needsUpdate=!0,zs(x,D,F),x.side=Wi,x.needsUpdate=!0,zs(x,D,F),x.side=Mi):zs(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),c=Ve.get(F),c.init(D),S.push(c),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(c.pushLight(I),I.castShadow&&c.pushShadow(I))}),x!==F&&x.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(c.pushLight(I),I.castShadow&&c.pushShadow(I))}),c.setupLights();const k=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let ne=0;ne<J.length;ne++){const ue=J[ne];Ke(ue,F,I),k.add(ue)}else Ke(J,F,I),k.add(J)}),c=S.pop(),k},this.compileAsync=function(x,D,F=null){const k=this.compile(x,D,F);return new Promise(I=>{function J(){if(k.forEach(function(ne){Ee.get(ne).currentProgram.isReady()&&k.delete(ne)}),k.size===0){I(x);return}setTimeout(J,10)}He.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let jt=null;function pi(x){jt&&jt(x)}function tl(){ji.stop()}function il(){ji.start()}const ji=new th;ji.setAnimationLoop(pi),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(x){jt=x,B.setAnimationLoop(x),x===null?ji.stop():ji.start()},B.addEventListener("sessionstart",tl),B.addEventListener("sessionend",il),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(D),D=B.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,D,N),c=Ve.get(x,S.length),c.init(D),S.push(c),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(be),_e=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,_e),u=pe.get(x,b.length),u.init(),b.push(u),B.enabled===!0&&B.isPresenting===!0){const J=M.xr.getDepthSensingMesh();J!==null&&qr(J,D,-1/0,M.sortObjects)}qr(x,D,0,M.sortObjects),u.finish(),M.sortObjects===!0&&u.sort(re,fe),ot=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ot&&Te.addToRenderList(u,x),this.info.render.frame++,ee===!0&&Q.beginShadows();const F=c.state.shadowsArray;me.render(F,x,D),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=u.opaque,I=u.transmissive;if(c.setupLights(),D.isArrayCamera){const J=D.cameras;if(I.length>0)for(let ne=0,ue=J.length;ne<ue;ne++){const ge=J[ne];sl(k,I,x,ge)}ot&&Te.render(x);for(let ne=0,ue=J.length;ne<ue;ne++){const ge=J[ne];nl(u,x,ge,ge.viewport)}}else I.length>0&&sl(k,I,x,D),ot&&Te.render(x),nl(u,x,D);N!==null&&A===0&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(M,x,D),it.resetDefaultState(),y=-1,E=null,S.pop(),S.length>0?(c=S[S.length-1],ee===!0&&Q.setGlobalState(M.clippingPlanes,c.state.camera)):c=null,b.pop(),b.length>0?u=b[b.length-1]:u=null};function qr(x,D,F,k){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)c.pushLight(x),x.castShadow&&c.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||W.intersectsSprite(x)){k&&Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(be);const ne=V.update(x),ue=x.material;ue.visible&&u.push(x,ne,ue,F,Ae.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||W.intersectsObject(x))){const ne=V.update(x),ue=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ae.copy(x.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ae.copy(ne.boundingSphere.center)),Ae.applyMatrix4(x.matrixWorld).applyMatrix4(be)),Array.isArray(ue)){const ge=ne.groups;for(let Pe=0,Ce=ge.length;Pe<Ce;Pe++){const we=ge[Pe],Ge=ue[we.materialIndex];Ge&&Ge.visible&&u.push(x,ne,Ge,F,Ae.z,we)}}else ue.visible&&u.push(x,ne,ue,F,Ae.z,null)}}const J=x.children;for(let ne=0,ue=J.length;ne<ue;ne++)qr(J[ne],D,F,k)}function nl(x,D,F,k){const I=x.opaque,J=x.transmissive,ne=x.transparent;c.setupLightsView(F),ee===!0&&Q.setGlobalState(M.clippingPlanes,F),k&&ye.viewport(R.copy(k)),I.length>0&&ks(I,D,F),J.length>0&&ks(J,D,F),ne.length>0&&ks(ne,D,F),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function sl(x,D,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[k.id]===void 0&&(c.state.transmissionRenderTarget[k.id]=new Xi(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?bs:Ai,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const J=c.state.transmissionRenderTarget[k.id],ne=k.viewport||R;J.setSize(ne.z*M.transmissionResolutionScale,ne.w*M.transmissionResolutionScale);const ue=M.getRenderTarget();M.setRenderTarget(J),M.getClearColor($),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),ot&&Te.render(F);const ge=M.toneMapping;M.toneMapping=Bi;const Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),c.setupLightsView(k),ee===!0&&Q.setGlobalState(M.clippingPlanes,k),ks(x,F,k),w.updateMultisampleRenderTarget(J),w.updateRenderTargetMipmap(J),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let we=0,Ge=D.length;we<Ge;we++){const $e=D[we],dt=$e.object,lt=$e.geometry,Xe=$e.material,Se=$e.group;if(Xe.side===Mi&&dt.layers.test(k.layers)){const xt=Xe.side;Xe.side=It,Xe.needsUpdate=!0,rl(dt,F,k,lt,Xe,Se),Xe.side=xt,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(w.updateMultisampleRenderTarget(J),w.updateRenderTargetMipmap(J))}M.setRenderTarget(ue),M.setClearColor($,j),Pe!==void 0&&(k.viewport=Pe),M.toneMapping=ge}function ks(x,D,F){const k=D.isScene===!0?D.overrideMaterial:null;for(let I=0,J=x.length;I<J;I++){const ne=x[I],ue=ne.object,ge=ne.geometry,Pe=ne.group;let Ce=ne.material;Ce.allowOverride===!0&&k!==null&&(Ce=k),ue.layers.test(F.layers)&&rl(ue,D,F,ge,Ce,Pe)}}function rl(x,D,F,k,I,J){x.onBeforeRender(M,D,F,k,I,J),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(M,D,F,k,x,J),I.transparent===!0&&I.side===Mi&&I.forceSinglePass===!1?(I.side=It,I.needsUpdate=!0,M.renderBufferDirect(F,D,k,I,x,J),I.side=Wi,I.needsUpdate=!0,M.renderBufferDirect(F,D,k,I,x,J),I.side=Mi):M.renderBufferDirect(F,D,k,I,x,J),x.onAfterRender(M,D,F,k,I,J)}function zs(x,D,F){D.isScene!==!0&&(D=ct);const k=Ee.get(x),I=c.state.lights,J=c.state.shadowsArray,ne=I.state.version,ue=xe.getParameters(x,I.state,J,D,F),ge=xe.getProgramCacheKey(ue);let Pe=k.programs;k.environment=x.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(x.isMeshStandardMaterial?O:g).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",Le),Pe=new Map,k.programs=Pe);let Ce=Pe.get(ge);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===ne)return al(x,ue),Ce}else ue.uniforms=xe.getUniforms(x),x.onBeforeCompile(ue,M),Ce=xe.acquireProgram(ue,ge),Pe.set(ge,Ce),k.uniforms=ue.uniforms;const we=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=Q.uniform),al(x,ue),k.needsLights=gf(x),k.lightsStateVersion=ne,k.needsLights&&(we.ambientLightColor.value=I.state.ambient,we.lightProbe.value=I.state.probe,we.directionalLights.value=I.state.directional,we.directionalLightShadows.value=I.state.directionalShadow,we.spotLights.value=I.state.spot,we.spotLightShadows.value=I.state.spotShadow,we.rectAreaLights.value=I.state.rectArea,we.ltc_1.value=I.state.rectAreaLTC1,we.ltc_2.value=I.state.rectAreaLTC2,we.pointLights.value=I.state.point,we.pointLightShadows.value=I.state.pointShadow,we.hemisphereLights.value=I.state.hemi,we.directionalShadowMap.value=I.state.directionalShadowMap,we.directionalShadowMatrix.value=I.state.directionalShadowMatrix,we.spotShadowMap.value=I.state.spotShadowMap,we.spotLightMatrix.value=I.state.spotLightMatrix,we.spotLightMap.value=I.state.spotLightMap,we.pointShadowMap.value=I.state.pointShadowMap,we.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function ol(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=gr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function al(x,D){const F=Ee.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function mf(x,D,F,k,I){D.isScene!==!0&&(D=ct),w.resetTextureUnits();const J=D.fog,ne=k.isMeshStandardMaterial?D.environment:null,ue=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:dn,ge=(k.isMeshStandardMaterial?O:g).get(k.envMap||ne),Pe=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!F.morphAttributes.position,Ge=!!F.morphAttributes.normal,$e=!!F.morphAttributes.color;let dt=Bi;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(dt=M.toneMapping);const lt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xe=lt!==void 0?lt.length:0,Se=Ee.get(k),xt=c.state.lights;if(ee===!0&&(_e===!0||x!==E)){const Ct=x===E&&k.id===y;Q.setState(k,x,Ct)}let je=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==xt.state.version||Se.outputColorSpace!==ue||I.isBatchedMesh&&Se.batching===!1||!I.isBatchedMesh&&Se.batching===!0||I.isBatchedMesh&&Se.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Se.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Se.instancing===!1||!I.isInstancedMesh&&Se.instancing===!0||I.isSkinnedMesh&&Se.skinning===!1||!I.isSkinnedMesh&&Se.skinning===!0||I.isInstancedMesh&&Se.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Se.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Se.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Se.instancingMorph===!1&&I.morphTexture!==null||Se.envMap!==ge||k.fog===!0&&Se.fog!==J||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Q.numPlanes||Se.numIntersection!==Q.numIntersection)||Se.vertexAlphas!==Pe||Se.vertexTangents!==Ce||Se.morphTargets!==we||Se.morphNormals!==Ge||Se.morphColors!==$e||Se.toneMapping!==dt||Se.morphTargetsCount!==Xe)&&(je=!0):(je=!0,Se.__version=k.version);let Zt=Se.currentProgram;je===!0&&(Zt=zs(k,D,I));let pn=!1,Nt=!1,qn=!1;const st=Zt.getUniforms(),Gt=Se.uniforms;if(ye.useProgram(Zt.program)&&(pn=!0,Nt=!0,qn=!0),k.id!==y&&(y=k.id,Nt=!0),pn||E!==x){ye.buffers.depth.getReversed()?(oe.copy(x.projectionMatrix),Tp(oe),Ap(oe),st.setValue(T,"projectionMatrix",oe)):st.setValue(T,"projectionMatrix",x.projectionMatrix),st.setValue(T,"viewMatrix",x.matrixWorldInverse);const Dt=st.map.cameraPosition;Dt!==void 0&&Dt.setValue(T,Ye.setFromMatrixPosition(x.matrixWorld)),ze.logarithmicDepthBuffer&&st.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&st.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,Nt=!0,qn=!0)}if(I.isSkinnedMesh){st.setOptional(T,I,"bindMatrix"),st.setOptional(T,I,"bindMatrixInverse");const Ct=I.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),st.setValue(T,"boneTexture",Ct.boneTexture,w))}I.isBatchedMesh&&(st.setOptional(T,I,"batchingTexture"),st.setValue(T,"batchingTexture",I._matricesTexture,w),st.setOptional(T,I,"batchingIdTexture"),st.setValue(T,"batchingIdTexture",I._indirectTexture,w),st.setOptional(T,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(T,"batchingColorTexture",I._colorsTexture,w));const Wt=F.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Re.update(I,F,Zt),(Nt||Se.receiveShadow!==I.receiveShadow)&&(Se.receiveShadow=I.receiveShadow,st.setValue(T,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gt.envMap.value=ge,Gt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Gt.envMapIntensity.value=D.environmentIntensity),Nt&&(st.setValue(T,"toneMappingExposure",M.toneMappingExposure),Se.needsLights&&vf(Gt,qn),J&&k.fog===!0&&ae.refreshFogUniforms(Gt,J),ae.refreshMaterialUniforms(Gt,k,H,K,c.state.transmissionRenderTarget[x.id]),gr.upload(T,ol(Se),Gt,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(gr.upload(T,ol(Se),Gt,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&st.setValue(T,"center",I.center),st.setValue(T,"modelViewMatrix",I.modelViewMatrix),st.setValue(T,"normalMatrix",I.normalMatrix),st.setValue(T,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ct=k.uniformsGroups;for(let Dt=0,$r=Ct.length;Dt<$r;Dt++){const Zi=Ct[Dt];P.update(Zi,Zt),P.bind(Zi,Zt)}}return Zt}function vf(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function gf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,D,F){const k=Ee.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ee.get(x.texture).__webglTexture=D,Ee.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:F,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const F=Ee.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};const _f=T.createFramebuffer();this.setRenderTarget=function(x,D=0,F=0){N=x,C=D,A=F;let k=!0,I=null,J=!1,ne=!1;if(x){const ge=Ee.get(x);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)w.setupRenderTarget(x);else if(ge.__hasExternalTextures)w.rebindTextures(x,Ee.get(x.texture).__webglTexture,Ee.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const we=x.depthTexture;if(ge.__boundDepthTexture!==we){if(we!==null&&Ee.has(we)&&(x.width!==we.image.width||x.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ne=!0);const Ce=Ee.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?I=Ce[D][F]:I=Ce[D],J=!0):x.samples>0&&w.useMultisampledRTT(x)===!1?I=Ee.get(x).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[F]:I=Ce,R.copy(x.viewport),G.copy(x.scissor),z=x.scissorTest}else R.copy(Me).multiplyScalar(H).floor(),G.copy(Oe).multiplyScalar(H).floor(),z=tt;if(F!==0&&(I=_f),ye.bindFramebuffer(T.FRAMEBUFFER,I)&&k&&ye.drawBuffers(x,I),ye.viewport(R),ye.scissor(G),ye.setScissorTest(z),J){const ge=Ee.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,F)}else if(ne){const ge=Ee.get(x.texture),Pe=D;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ge.__webglTexture,F,Pe)}else if(x!==null&&F!==0){const ge=Ee.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ge.__webglTexture,F)}y=-1},this.readRenderTargetPixels=function(x,D,F,k,I,J,ne){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Ee.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ne!==void 0&&(ue=ue[ne]),ue){ye.bindFramebuffer(T.FRAMEBUFFER,ue);try{const ge=x.texture,Pe=ge.format,Ce=ge.type;if(!ze.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-k&&F>=0&&F<=x.height-I&&T.readPixels(D,F,k,I,Ie.convert(Pe),Ie.convert(Ce),J)}finally{const ge=N!==null?Ee.get(N).__webglFramebuffer:null;ye.bindFramebuffer(T.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(x,D,F,k,I,J,ne){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Ee.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ne!==void 0&&(ue=ue[ne]),ue)if(D>=0&&D<=x.width-k&&F>=0&&F<=x.height-I){ye.bindFramebuffer(T.FRAMEBUFFER,ue);const ge=x.texture,Pe=ge.format,Ce=ge.type;if(!ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,we),T.bufferData(T.PIXEL_PACK_BUFFER,J.byteLength,T.STREAM_READ),T.readPixels(D,F,k,I,Ie.convert(Pe),Ie.convert(Ce),0);const Ge=N!==null?Ee.get(N).__webglFramebuffer:null;ye.bindFramebuffer(T.FRAMEBUFFER,Ge);const $e=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await bp(T,$e,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,we),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,J),T.deleteBuffer(we),T.deleteSync($e),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,F=0){const k=Math.pow(2,-F),I=Math.floor(x.image.width*k),J=Math.floor(x.image.height*k),ne=D!==null?D.x:0,ue=D!==null?D.y:0;w.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,F,0,0,ne,ue,I,J),ye.unbindTexture()};const xf=T.createFramebuffer(),Ef=T.createFramebuffer();this.copyTextureToTexture=function(x,D,F=null,k=null,I=0,J=null){J===null&&(I!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let ne,ue,ge,Pe,Ce,we,Ge,$e,dt;const lt=x.isCompressedTexture?x.mipmaps[J]:x.image;if(F!==null)ne=F.max.x-F.min.x,ue=F.max.y-F.min.y,ge=F.isBox3?F.max.z-F.min.z:1,Pe=F.min.x,Ce=F.min.y,we=F.isBox3?F.min.z:0;else{const Wt=Math.pow(2,-I);ne=Math.floor(lt.width*Wt),ue=Math.floor(lt.height*Wt),x.isDataArrayTexture?ge=lt.depth:x.isData3DTexture?ge=Math.floor(lt.depth*Wt):ge=1,Pe=0,Ce=0,we=0}k!==null?(Ge=k.x,$e=k.y,dt=k.z):(Ge=0,$e=0,dt=0);const Xe=Ie.convert(D.format),Se=Ie.convert(D.type);let xt;D.isData3DTexture?(w.setTexture3D(D,0),xt=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(w.setTexture2DArray(D,0),xt=T.TEXTURE_2D_ARRAY):(w.setTexture2D(D,0),xt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const je=T.getParameter(T.UNPACK_ROW_LENGTH),Zt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),pn=T.getParameter(T.UNPACK_SKIP_PIXELS),Nt=T.getParameter(T.UNPACK_SKIP_ROWS),qn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,lt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,lt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ce),T.pixelStorei(T.UNPACK_SKIP_IMAGES,we);const st=x.isDataArrayTexture||x.isData3DTexture,Gt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const Wt=Ee.get(x),Ct=Ee.get(D),Dt=Ee.get(Wt.__renderTarget),$r=Ee.get(Ct.__renderTarget);ye.bindFramebuffer(T.READ_FRAMEBUFFER,Dt.__webglFramebuffer),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Zi=0;Zi<ge;Zi++)st&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ee.get(x).__webglTexture,I,we+Zi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ee.get(D).__webglTexture,J,dt+Zi)),T.blitFramebuffer(Pe,Ce,ne,ue,Ge,$e,ne,ue,T.DEPTH_BUFFER_BIT,T.NEAREST);ye.bindFramebuffer(T.READ_FRAMEBUFFER,null),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||Ee.has(x)){const Wt=Ee.get(x),Ct=Ee.get(D);ye.bindFramebuffer(T.READ_FRAMEBUFFER,xf),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ef);for(let Dt=0;Dt<ge;Dt++)st?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Wt.__webglTexture,I,we+Dt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Wt.__webglTexture,I),Gt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ct.__webglTexture,J,dt+Dt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ct.__webglTexture,J),I!==0?T.blitFramebuffer(Pe,Ce,ne,ue,Ge,$e,ne,ue,T.COLOR_BUFFER_BIT,T.NEAREST):Gt?T.copyTexSubImage3D(xt,J,Ge,$e,dt+Dt,Pe,Ce,ne,ue):T.copyTexSubImage2D(xt,J,Ge,$e,Pe,Ce,ne,ue);ye.bindFramebuffer(T.READ_FRAMEBUFFER,null),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Gt?x.isDataTexture||x.isData3DTexture?T.texSubImage3D(xt,J,Ge,$e,dt,ne,ue,ge,Xe,Se,lt.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(xt,J,Ge,$e,dt,ne,ue,ge,Xe,lt.data):T.texSubImage3D(xt,J,Ge,$e,dt,ne,ue,ge,Xe,Se,lt):x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,J,Ge,$e,ne,ue,Xe,Se,lt.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,J,Ge,$e,lt.width,lt.height,Xe,lt.data):T.texSubImage2D(T.TEXTURE_2D,J,Ge,$e,ne,ue,Xe,Se,lt);T.pixelStorei(T.UNPACK_ROW_LENGTH,je),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Zt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,pn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Nt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,qn),J===0&&D.generateMipmaps&&T.generateMipmap(xt),ye.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F=null,k=null,I=0){return vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,F,k,I)},this.initRenderTarget=function(x){Ee.get(x).__webglFramebuffer===void 0&&w.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?w.setTextureCube(x,0):x.isData3DTexture?w.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?w.setTexture2DArray(x,0):w.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){C=0,A=0,N=null,ye.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),i.unpackColorSpace=We._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.13.3
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var X0=Object.defineProperty,Va=(t,e)=>{for(var i in e)X0(t,i,{get:e[i],enumerable:!0})},Si={};Va(Si,{ACTIONS:()=>dh,ANIMATION_MIN_DURATION:()=>ma,CAPTURE_EVENTS_CLASS:()=>Ps,CTRLZOOM_TIMEOUT:()=>hh,DBLCLICK_DELAY:()=>ah,EASINGS:()=>_r,ICONS:()=>si,IDS:()=>Et,KEY_CODES:()=>gt,LONGTOUCH_DELAY:()=>lh,MOVE_THRESHOLD:()=>oh,SPHERE_RADIUS:()=>un,TWOFINGERSOVERLAY_DELAY:()=>ch,VIEWER_DATA:()=>Yi});var Y0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,q0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',$0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,j0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Z0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,K0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,J0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,Q0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,ex=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,ma=500,oh=4,ah=300,lh=500,ch=100,hh=2e3,un=10,Yi="photoSphereViewer",Ps="psv--capture-event",dh=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(dh||{}),Et={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},gt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},si={arrow:Y0,close:q0,download:$0,fullscreenIn:j0,fullscreenOut:Z0,info:K0,menu:J0,zoomIn:Q0,zoomOut:ex},_r={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},te={};Va(te,{Animation:()=>Rr,Dynamic:()=>ts,MultiDynamic:()=>Uh,PressHandler:()=>Hr,Slider:()=>Oh,SliderDirection:()=>Nh,addClasses:()=>Ga,angle:()=>fh,applyEulerInverse:()=>Ea,checkClosedShadowDom:()=>Dh,checkStylesheet:()=>Lh,checkVersion:()=>$a,cleanCssPosition:()=>Rh,clone:()=>kr,createTexture:()=>xa,cssPositionIsOrdered:()=>qa,dasherize:()=>rx,deepEqual:()=>Th,deepmerge:()=>Sh,distance:()=>uh,exitFullscreen:()=>yh,firstNonNull:()=>Oi,getAbortError:()=>ga,getAngle:()=>mh,getClosest:()=>gh,getConfigParser:()=>Br,getElement:()=>vh,getEventTarget:()=>br,getMatchingTarget:()=>_h,getPosition:()=>xh,getShortestArc:()=>ph,getStyleProperty:()=>ci,getTouchData:()=>va,getXMPValue:()=>kt,greatArcDistance:()=>ix,hasParent:()=>sx,invertResolvableBoolean:()=>zr,isAbortError:()=>Ch,isEmpty:()=>bh,isExtendedPosition:()=>Ya,isFullscreenEnabled:()=>Eh,isNil:()=>_t,isPlainObject:()=>Wa,logWarn:()=>Mt,mergePanoData:()=>Ih,parseAngle:()=>ai,parsePoint:()=>ox,parseSpeed:()=>Ph,removeClasses:()=>nx,requestFullscreen:()=>Mh,resolveBoolean:()=>Xa,speedToDuration:()=>_a,sum:()=>tx,throttle:()=>wh,toggleClass:()=>Fr,wrap:()=>ss});function ss(t,e){let i=t%e;return i<0&&(i+=e),i}function tx(t){return t.reduce((e,i)=>e+i,0)}function uh(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function fh(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function ph(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((n,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(n)?r:n},1/0)}function mh(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function ix([t,e],[i,n]){t-i>Math.PI?t-=2*Math.PI:t-i<-Math.PI&&(t+=2*Math.PI);const s=(i-t)*Math.cos((e+n)/2),r=n-e;return Math.sqrt(s*s+r*r)}function vh(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Fr(t,e,i){i===void 0?t.classList.toggle(e):i?t.classList.add(e):i||t.classList.remove(e)}function Ga(t,e){t.classList.add(...e.split(" ").filter(i=>!!i))}function nx(t,e){t.classList.remove(...e.split(" ").filter(i=>!!i))}function sx(t,e){let i=t;do{if(i===e)return!0;i=i.parentElement}while(i);return!1}function gh(t,e){if(!t?.matches)return null;let i=t;do{if(i.matches(e))return i;i=i.parentElement}while(i);return null}function br(t){return t?.composedPath()[0]||null}function _h(t,e){return t?t.composedPath().find(i=>!(i instanceof HTMLElement)&&!(i instanceof SVGElement)?!1:i.matches(e)):null}function xh(t){let e=0,i=0,n=t;for(;n;)e+=n.offsetLeft-n.scrollLeft+n.clientLeft,i+=n.offsetTop-n.scrollTop+n.clientTop,n=n.offsetParent;return e-=window.scrollX,i-=window.scrollY,{x:e,y:i}}function ci(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function va(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},i={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:uh(e,i),angle:fh(e,i),center:{x:(e.x+i.x)/2,y:(e.y+i.y)/2}}}var Tr;function Eh(t,e=!1){return e?t===Tr:document.fullscreenElement===t}function Mh(t,e=!1){e?(Tr=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function yh(t=!1){t?(Tr.classList.remove("psv-fullscreen-emulation"),Tr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function rx(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,i)=>(i>0?"-":"")+e.toLowerCase())}function wh(t,e){let i=!1;return function(...n){i||(i=!0,setTimeout(()=>{t.apply(this,n),i=!1},e))}}function Wa(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Sh(t,e){const i=e;return function n(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((o,a)=>{s[a]=n(null,o)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(o=>{o!=="__proto__"&&(typeof r[o]!="object"||!r[o]||!Wa(r[o])?s[o]=r[o]:r[o]!==i&&(s[o]?n(s[o],r[o]):s[o]=n(null,r[o])))})):s=r,s}(t,e)}function kr(t){return Sh(null,t)}function bh(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function _t(t){return t==null}function Oi(...t){for(const e of t)if(!_t(e))return e;return null}function Th(t,e){if(t===e)return!0;if(oc(t)&&oc(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const i of Object.keys(t))if(!Th(t[i],e[i]))return!1;return!0}else return!1}function oc(t){return typeof t=="object"&&t!==null}var se=class Ah extends Error{constructor(e,i){super(i&&i instanceof Error?`${e}: ${i.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,Ah)}};function Xa(t,e){Wa(t)?(e(t.initial,!0),t.promise.then(i=>e(i,!1))):e(t,!0)}function zr(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function ga(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function Ch(t){return t?.name==="AbortError"}function Mt(t){console.warn(`PhotoSphereViewer: ${t}`)}function Ya(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,i])=>t[e]!==void 0&&t[i]!==void 0)}function kt(t,e,i=!0){let n=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(n!==null){const s=i?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}if(n=t.match("GPano:"+e+'="(.*?)"'),n!==null){const s=i?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}return null}var ac={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ar=["left","center","right"],Cr=["top","center","bottom"],lc=[...Ar,...Cr],Yt="center";function ox(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(ac[e[0]]?e=[e[0],Yt]:e=[e[0],e[0]]);const i=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>ac[s]||s),i||e.reverse();const n=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return n?{x:parseFloat(n[1])/100,y:parseFloat(n[2])/100}:{x:.5,y:.5}}function Rh(t,{allowCenter:e,cssOrder:i}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===Yt?t=[Yt,Yt]:Ar.indexOf(t[0])!==-1?t=[Yt,t[0]]:Cr.indexOf(t[0])!==-1&&(t=[t[0],Yt])),t.length!==2||lc.indexOf(t[0])===-1||lc.indexOf(t[1])===-1?(Mt(`Unparsable position ${t}`),null):!e&&t[0]===Yt&&t[1]===Yt?(Mt("Invalid position center center"),null):(i&&!qa(t)&&(t=[t[1],t[0]]),t[1]===Yt&&Ar.indexOf(t[0])!==-1&&(t=[Yt,t[0]]),t[0]===Yt&&Cr.indexOf(t[1])!==-1&&(t=[t[1],Yt]),t)):null}function qa(t){return Cr.indexOf(t[0])!==-1&&Ar.indexOf(t[1])!==-1}function Ph(t){let e;if(typeof t=="string"){const i=t.toString().trim();let n=parseFloat(i.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=i.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(n/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Ne.degToRad(n);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=n;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=n*Math.PI*2;break;default:throw new se(`Unknown speed unit "${s}"`)}}else e=t;return e}function _a(t,e){if(typeof t!="number"){const i=Ph(t);return e/Math.abs(i)*1e3}else return Math.abs(t)}function ai(t,e=!1,i=e){let n;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new se(`Unknown angle "${t}"`);const r=parseFloat(s[1]),o=s[2];if(o)switch(o){case"deg":case"degs":n=Ne.degToRad(r);break;case"rad":case"rads":n=r;break;default:throw new se(`Unknown angle unit "${o}"`)}else n=r}else if(typeof t=="number"&&!isNaN(t))n=t;else throw new se(`Unknown angle "${t}"`);return n=ss(e?n+Math.PI:n,Math.PI*2),e?Ne.clamp(n-Math.PI,-Math.PI/(i?2:1),Math.PI/(i?2:1)):n}function xa(t,e=!1){const i=new yt(t);return i.needsUpdate=!0,i.minFilter=e?ki:Bt,i.generateMipmaps=e,i.anisotropy=e?2:1,i}var cc=new qi;function Ea(t,e){cc.setFromEuler(e).invert(),t.applyQuaternion(cc)}function Br(t,e){const i=function(n){const s=kr({...t,...n}),r={};for(let[o,a]of Object.entries(s)){if(e&&o in e)a=e[o](a,{rawConfig:s,defValue:t[o]});else if(!(o in t)){Mt(`Unknown option ${o}`);continue}r[o]=a}return r};return i.defaults=t,i.parsers=e||{},i}function Lh(t,e){ci(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function $a(t,e,i){e&&e!==i&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${i}`)}function Dh(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function Ih(t,e,i,n){const s={isEquirectangular:!0,fullWidth:Oi(i?.fullWidth,n?.fullWidth),fullHeight:Oi(i?.fullHeight,n?.fullHeight),croppedWidth:t,croppedHeight:e,croppedX:Oi(i?.croppedX,n?.croppedX),croppedY:Oi(i?.croppedY,n?.croppedY),poseHeading:Oi(i?.poseHeading,n?.poseHeading,0),posePitch:Oi(i?.posePitch,n?.posePitch,0),poseRoll:Oi(i?.poseRoll,n?.poseRoll,0),initialHeading:n?.initialHeading,initialPitch:n?.initialPitch,initialFov:n?.initialFov};return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(t,e*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-t)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(Mt("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(Mt("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(Mt("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(Mt("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(Mt("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var Rr=class{constructor(t){this.easing=_r.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:_r[t.easing]||_r.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,i={};if(e<1){for(const[n,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);i[n]=r}this.options.onTick(i,e),this.animationFrame=window.requestAnimationFrame(n=>this.__run(n))}else{for(const[n,s]of Object.entries(this.options.properties))s&&(i[n]=s.end);this.options.onTick(i,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},ts=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new se("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?ss(t,this.max):Ne.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?ss(t,this.max):Ne.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const n=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=n&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let i=null;return this.current>this.target&&this.currentSpeed?i=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(i=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),i!==null&&(i=this.wrap?ss(i,this.max):Ne.clamp(i,this.min,this.max),i!==this.current)?(this.current=i,this.fn&&this.fn(this.current),!0):!1}},Uh=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,i])=>(t[e]=i.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[i,n]of Object.entries(t))this.dynamics[i].goto(n,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((i,n)=>(i[n]=t[n]+this.dynamics[n].current,i),{}));else for(const[i,n]of Object.entries(t))this.dynamics[i].step(n,e)}roll(t,e=1){for(const[i,n]of Object.entries(t))this.dynamics[i].roll(n,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[i,n]of Object.entries(t))e=this.dynamics[i].setValue(n)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const i of Object.values(this.dynamics))e=i.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},Hr=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},Nh=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(Nh||{}),Oh=class{constructor(t,e,i){this.container=t,this.direction=e,this.listener=i,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,i){const n=this.container.getBoundingClientRect();let s;this.isVertical?s=Ne.clamp((n.bottom-e)/n.height,0,1):s=Ne.clamp((t-n.left)/n.width,0,1),this.listener({value:s,click:!i,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},de={};Va(de,{BeforeAnimateEvent:()=>ja,BeforeRenderEvent:()=>rs,BeforeRotateEvent:()=>Wh,ClickEvent:()=>qh,ConfigChangedEvent:()=>Ut,DoubleClickEvent:()=>Jh,FullscreenEvent:()=>os,HideNotificationEvent:()=>as,HideOverlayEvent:()=>rd,HidePanelEvent:()=>Hi,HideTooltipEvent:()=>hd,KeypressEvent:()=>Vi,LoadProgressEvent:()=>md,ObjectEnterEvent:()=>eu,ObjectEvent:()=>Vr,ObjectHoverEvent:()=>ru,ObjectLeaveEvent:()=>Ma,PanoramaErrorEvent:()=>wd,PanoramaLoadEvent:()=>_d,PanoramaLoadedEvent:()=>kn,PositionUpdatedEvent:()=>ls,ReadyEvent:()=>hs,RenderEvent:()=>Nd,RollUpdatedEvent:()=>cs,ShowNotificationEvent:()=>ds,ShowOverlayEvent:()=>Bd,ShowPanelEvent:()=>Gi,ShowTooltipEvent:()=>Xd,SizeUpdatedEvent:()=>us,StopAllEvent:()=>fs,TransitionDoneEvent:()=>Td,ViewerEvent:()=>Ze,ZoomUpdatedEvent:()=>Ti});var fn=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},Fh=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,i){super.addEventListener(t,e,i)}removeEventListener(t,e,i){super.removeEventListener(t,e,i)}},Ze=class extends fn{},kh=class zh extends Ze{constructor(e,i){super(zh.type,!0),this.position=e,this.zoomLevel=i}};kh.type="before-animate";var ja=kh,Bh=class Hh extends Ze{constructor(e,i){super(Hh.type),this.timestamp=e,this.elapsed=i}};Bh.type="before-render";var rs=Bh,Vh=class Gh extends Ze{constructor(e){super(Gh.type,!0),this.position=e}};Vh.type="before-rotate";var Wh=Vh,Xh=class Yh extends Ze{constructor(e){super(Yh.type),this.data=e}};Xh.type="click";var qh=Xh,$h=class jh extends Ze{constructor(e){super(jh.type),this.options=e}containsOptions(...e){return e.some(i=>this.options.includes(i))}};$h.type="config-changed";var Ut=$h,Zh=class Kh extends Ze{constructor(e){super(Kh.type),this.data=e}};Zh.type="dblclick";var Jh=Zh,Qh=class ed extends Ze{constructor(e){super(ed.type),this.fullscreenEnabled=e}};Qh.type="fullscreen";var os=Qh,td=class id extends Ze{constructor(e){super(id.type),this.notificationId=e}};td.type="hide-notification";var as=td,nd=class sd extends Ze{constructor(e){super(sd.type),this.overlayId=e}};nd.type="hide-overlay";var rd=nd,od=class ad extends Ze{constructor(e){super(ad.type),this.panelId=e}};od.type="hide-panel";var Hi=od,ld=class cd extends Ze{constructor(e){super(cd.type),this.tooltipData=e}};ld.type="hide-tooltip";var hd=ld,dd=class ud extends Ze{constructor(e,i){super(ud.type,!0),this.key=e,this.originalEvent=i}};dd.type="key-press";var Vi=dd,fd=class pd extends Ze{constructor(e){super(pd.type),this.progress=e}};fd.type="load-progress";var md=fd,vd=class gd extends Ze{constructor(e){super(gd.type),this.panorama=e}};vd.type="panorama-load";var _d=vd,xd=class Ed extends Ze{constructor(e){super(Ed.type),this.data=e}};xd.type="panorama-loaded";var kn=xd,Md=class yd extends Ze{constructor(e,i){super(yd.type),this.panorama=e,this.error=i}};Md.type="panorama-error";var wd=Md,Sd=class bd extends Ze{constructor(e){super(bd.type),this.completed=e}};Sd.type="transition-done";var Td=Sd,Ad=class Cd extends Ze{constructor(e){super(Cd.type),this.position=e}};Ad.type="position-updated";var ls=Ad,Rd=class Pd extends Ze{constructor(e){super(Pd.type),this.roll=e}};Rd.type="roll-updated";var cs=Rd,Ld=class Dd extends Ze{constructor(){super(Dd.type)}};Ld.type="ready";var hs=Ld,Id=class Ud extends Ze{constructor(){super(Ud.type)}};Id.type="render";var Nd=Id,Od=class Fd extends Ze{constructor(e){super(Fd.type),this.notificationId=e}};Od.type="show-notification";var ds=Od,kd=class zd extends Ze{constructor(e){super(zd.type),this.overlayId=e}};kd.type="show-overlay";var Bd=kd,Hd=class Vd extends Ze{constructor(e){super(Vd.type),this.panelId=e}};Hd.type="show-panel";var Gi=Hd,Gd=class Wd extends Ze{constructor(e,i){super(Wd.type),this.tooltip=e,this.tooltipData=i}};Gd.type="show-tooltip";var Xd=Gd,Yd=class qd extends Ze{constructor(e){super(qd.type),this.size=e}};Yd.type="size-updated";var us=Yd,$d=class jd extends Ze{constructor(){super(jd.type)}};$d.type="stop-all";var fs=$d,Zd=class Kd extends Ze{constructor(e){super(Kd.type),this.zoomLevel=e}};Zd.type="zoom-updated";var Ti=Zd,Vr=class extends Ze{constructor(t,e,i,n,s){super(t),this.originalEvent=e,this.object=i,this.viewerPoint=n,this.userDataKey=s}},Jd=class Qd extends Vr{constructor(e,i,n,s){super(Qd.type,e,i,n,s)}};Jd.type="enter-object";var eu=Jd,tu=class iu extends Vr{constructor(e,i,n,s){super(iu.type,e,i,n,s)}};tu.type="leave-object";var Ma=tu,nu=class su extends Vr{constructor(e,i,n,s){super(su.type,e,i,n,s)}};nu.type="hover-object";var ru=nu,Za=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new se("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new se("Current adapter does not support texture coordinates.")}};Za.supportsDownload=!1;function hc(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Za)return $a(e.id,e.VERSION,"5.13.3"),e}return null}var Jn=`${Yi}_touchSupport`,Lt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=cx(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=ax();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=lx(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Lt.isWebGLSupported)throw new se("WebGL 2 is not supported.");if(Lt.maxTextureWidth===0)throw new se("Unable to detect system capabilities")}};function ax(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function lx(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Jn in localStorage&&(t=localStorage[Jn]==="true");const e=new Promise(i=>{const n=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(a)},s=()=>{n(),localStorage[Jn]=!1,i(!1)},r=()=>{n(),localStorage[Jn]=!0,i(!0)},o=()=>{n(),localStorage[Jn]=t,i(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const a=setTimeout(o,1e4)});return{initial:t,promise:e}}function cx(t){let e=t,i=!1;const n=document.createElement("canvas"),s=n.getContext("2d");for(n.width=1,n.height=1;e>1024&&!i;){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=e,r.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(i=!0)}catch{}r.width=0,r.height=0,i||(e/=2)}if(i)return e;throw new se("Unable to detect system capabilities")}var hx=Br({resolution:64,useXmpData:!0,blur:!1},{resolution:t=>{if(!t||!Ne.isPowerOfTwo(t))throw new se("EquirectangularAdapter resolution must be power of two.");return t}}),Ls=class extends Za{constructor(t,e){super(t),this.config=hx(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(t,e){if(_t(t.textureX)||_t(t.textureY))throw new se("Texture position is missing 'textureX' or 'textureY'");const i=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,n=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-n}}sphericalCoordsToTextureCoords(t,e){const i=t.yaw/Math.PI/2*e.fullWidth,n=t.pitch/Math.PI*e.fullHeight;let s=Math.round(t.yaw<Math.PI?i+e.fullWidth/2:i-e.fullWidth/2)-e.croppedX,r=Math.round(e.fullHeight/2-n)-e.croppedY;return(s<0||s>e.croppedWidth||r<0||r>e.croppedHeight)&&(s=r=void 0),{textureX:s,textureY:r}}async loadTexture(t,e=!0,i,n=this.config.useXmpData){if(typeof t!="string"&&(typeof t!="object"||!t.path))return Promise.reject(new se("Invalid panorama url, are you using the right adapter?"));let s;typeof t=="string"?s={path:t,data:i}:s={data:i,...t};const r=await this.viewer.textureLoader.loadFile(s.path,e?d=>this.viewer.textureLoader.dispatchProgress(d):null,s.path),o=n?await this.loadXMP(r):null,a=await this.viewer.textureLoader.blobToImage(r);typeof s.data=="function"&&(s.data=s.data(a,o));const l=Ih(a.width,a.height,s.data,o),h=this.createEquirectangularTexture(a);return{panorama:t,texture:h,panoData:l,cacheKey:s.path}}async loadXMP(t){const e=await this.loadBlobAsString(t),i=e.indexOf("<x:xmpmeta");if(i===-1)return null;const n=e.indexOf("</x:xmpmeta>",i);if(n===-1)return null;const s=e.substring(i,n);return s.includes("GPano:")?{fullWidth:kt(s,"FullPanoWidthPixels"),fullHeight:kt(s,"FullPanoHeightPixels"),croppedWidth:kt(s,"CroppedAreaImageWidthPixels"),croppedHeight:kt(s,"CroppedAreaImageHeightPixels"),croppedX:kt(s,"CroppedAreaLeftPixels"),croppedY:kt(s,"CroppedAreaTopPixels"),poseHeading:kt(s,"PoseHeadingDegrees",!1),posePitch:kt(s,"PosePitchDegrees",!1),poseRoll:kt(s,"PoseRollDegrees",!1),initialHeading:kt(s,"InitialViewHeadingDegrees",!1),initialPitch:kt(s,"InitialViewPitchDegrees",!1),initialFov:kt(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(t){return new Promise((e,i)=>{const n=new FileReader;n.onload=()=>e(n.result),n.onerror=i,n.readAsText(t)})}createEquirectangularTexture(t){if(this.config.blur||t.width>Lt.maxTextureWidth){const e=Math.min(1,Lt.maxCanvasWidth/t.width),i=new OffscreenCanvas(Math.floor(t.width*e),Math.floor(t.height*e)),n=i.getContext("2d");return this.config.blur&&(n.filter=`blur(${i.width/2048}px)`),n.drawImage(t,0,0,i.width,i.height),xa(i)}return xa(t)}createMesh(t){const e=t.croppedX/t.fullWidth*2*Math.PI,i=t.croppedWidth/t.fullWidth*2*Math.PI,n=t.croppedY/t.fullHeight*Math.PI,s=t.croppedHeight/t.fullHeight*Math.PI,r=new Rs(un,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+e,i,n,s).scale(-1,1,1),o=new Ts({depthTest:!1,depthWrite:!1});return new Ht(r,o)}setTexture(t,e){t.material.map=e.texture}setTextureOpacity(t,e){t.material.opacity=e,t.material.transparent=e<1}disposeTexture({texture:t}){t.dispose()}disposeMesh(t){t.geometry.dispose(),t.material.dispose()}};Ls.id="equirectangular";Ls.VERSION="5.13.3";Ls.supportsDownload=!0;var ou=class extends Ls{constructor(t,e){super(t,{resolution:e?.resolution??64,useXmpData:!1})}async loadTexture(t,e){const i=await super.loadTexture(t,e,null,!1);return i.panoData=null,i}createMesh(){const t=new Rs(un,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),e=t.getAttribute("uv"),i=t.getAttribute("normal");for(let s=0;s<e.count;s++)for(let r=0;r<3;r++){const o=s*3+r,a=i.getX(o),l=i.getY(o),h=i.getZ(o),d=.947;if(s<e.count/6){const f=a===0&&h===0?1:Math.acos(l)/Math.sqrt(a*a+h*h)*(2/Math.PI);e.setXY(o,a*(d/4)*f+1/4,h*(d/2)*f+1/2)}else{const f=a===0&&h===0?1:Math.acos(-l)/Math.sqrt(a*a+h*h)*(2/Math.PI);e.setXY(o,-a*(d/4)*f+3/4,h*(d/2)*f+1/2)}}t.rotateX(-Math.PI/2),t.rotateY(Math.PI);const n=new Ts({depthTest:!1,depthWrite:!1});return new Ht(t,n)}};ou.id="dual-fisheye";ou.VERSION="5.13.3";var Ri=class au{constructor(e,i){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof au?e.viewer:e,this.container=document.createElement(i.tagName??"div"),this.container.className=i.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(i=>i.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},dx=Br({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),Tt=class extends Ri{constructor(t,e){super(t,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=dx(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",i=>{this.state.enabled&&this.onClick(),i.stopPropagation()}),this.container.addEventListener("keydown",i=>{i.key===gt.Enter&&this.state.enabled&&(this.onClick(),i.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){Xa(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Fr(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,Ga(this.container.querySelector("svg"),"psv-button-svg")}},ux=class extends Tt{constructor(t,e){super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},ws=class extends Tt{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:si.info}),this.mode=0,this.viewer.addEventListener(as.type,this),this.viewer.addEventListener(ds.type,this),this.viewer.addEventListener(Hi.type,this),this.viewer.addEventListener(Gi.type,this),this.viewer.addEventListener(Ut.type,this)}destroy(){this.viewer.removeEventListener(as.type,this),this.viewer.removeEventListener(ds.type,this),this.viewer.removeEventListener(Hi.type,this),this.viewer.removeEventListener(Gi.type,this),this.viewer.removeEventListener(Ut.type,this),super.destroy()}handleEvent(t){if(t instanceof Ut){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof as?e=this.mode===1:t instanceof ds?e=this.mode===1&&t.notificationId!==Et.DESCRIPTION:t instanceof Hi?e=this.mode===2:t instanceof Gi&&(e=this.mode===2&&t.panelId!==Et.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),i=e&&!e.isVisible(),n=!!this.viewer.config.description;i||n?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Et.DESCRIPTION);break;case 2:this.viewer.panel.hide(Et.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Et.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Et.DESCRIPTION,content:this.viewer.config.caption}))}};ws.id="description";var lu=class extends Tt{constructor(t){super(t,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:si.download}),this.viewer.addEventListener(Ut.type,this),this.viewer.addEventListener(kn.type,this)}destroy(){this.viewer.removeEventListener(Ut.type,this),this.viewer.removeEventListener(kn.type,this),super.destroy()}handleEvent(t){t instanceof Ut?(t.containsOptions("downloadUrl")&&this.checkSupported(),t.containsOptions("downloadUrl","downloadName")&&this.__update()):t instanceof kn&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const t=this.container;t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.target="_blank",t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop()}};lu.id="download";var cu=class extends Tt{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:si.fullscreenIn,iconActive:si.fullscreenOut}),this.viewer.addEventListener(os.type,this)}destroy(){this.viewer.removeEventListener(os.type,this),super.destroy()}handleEvent(t){t instanceof os&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};cu.id="fullscreen";var fx="psvButton",px=(t,e)=>`
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
`,xr=class extends Tt{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:si.menu}),this.viewer.addEventListener(Gi.type,this),this.viewer.addEventListener(Hi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Gi.type,this),this.viewer.removeEventListener(Hi.type,this),super.destroy()}handleEvent(t){t instanceof Gi?this.toggleActive(t.panelId===Et.MENU):t instanceof Hi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Et.MENU,content:px(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?gh(t,".psv-panel-menu-item"):void 0,i=e?e.dataset[fx]:void 0;i&&(this.viewer.navbar.getButton(i).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Et.MENU)}};xr.id="menu";function mx(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return si.arrow.replace("rotate(0",`rotate(${e}`)}var Ds=class extends Tt{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:mx(e)}),this.direction=e,this.handler=new Hr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===gt.Enter&&this.__onMouseDown();break;case"keyup":t.key===gt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return zr(Lt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Ds.groupId="move";var hu=class extends Ds{constructor(t){super(t,1)}};hu.id="moveDown";var du=class extends Ds{constructor(t){super(t,2)}};du.id="moveLeft";var uu=class extends Ds{constructor(t){super(t,3)}};uu.id="moveRight";var fu=class extends Ds{constructor(t){super(t,0)}};fu.id="moveUp";var Ka=class extends Tt{constructor(t,e,i){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=i,this.handler=new Hr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===gt.Enter&&this.__onMouseDown();break;case"keyup":t.key===gt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return zr(Lt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};Ka.groupId="zoom";var pu=class extends Ka{constructor(t){super(t,si.zoomIn,0)}};pu.id="zoomIn";var mu=class extends Ka{constructor(t){super(t,si.zoomOut,1)}};mu.id="zoomOut";var Ja=class extends Tt{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Oh(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(ci(this.container,"max-width"),10),this.viewer.addEventListener(Ti.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(hs.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(Ti.type,this),this.viewer.removeEventListener(hs.type,this),super.destroy()}handleEvent(t){t instanceof Ti?this.__moveZoomValue(t.zoomLevel):t instanceof hs&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return zr(Lt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};Ja.id="zoomRange";Ja.groupId="zoom";var vu=class extends Fh{constructor(t){super(),this.viewer=t}init(){}destroy(){}},Gr=class extends vu{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},i=this.constructor,n=i.configParser,s=i.readonlyOptions,r=i.id;for(let[o,a]of Object.entries(t)){if(!(o in n.defaults)){Mt(`${r}: Unknown option "${o}"`);continue}if(s.includes(o)){Mt(`${r}: Option "${o}" cannot be updated`);continue}o in n.parsers&&(a=n.parsers[o](a,{rawConfig:e,defValue:n.defaults[o]})),this.config[o]=a}}};Gr.readonlyOptions=[];function ya(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof vu)return $a(e.id,e.VERSION,"5.13.3"),e}return null}var fi={panorama:null,container:null,adapter:[Ls,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[gt.ArrowUp]:"ROTATE_UP",[gt.ArrowDown]:"ROTATE_DOWN",[gt.ArrowRight]:"ROTATE_RIGHT",[gt.ArrowLeft]:"ROTATE_LEFT",[gt.PageUp]:"ZOOM_IN",[gt.PageDown]:"ZOOM_OUT",[gt.Plus]:"ZOOM_IN",[gt.Minus]:"ZOOM_OUT"}},dc={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},wa={container:t=>{if(!t)throw new se("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[hc(t[0]),t[1]]:t=[hc(t),null]:t=e,!t[0])throw new se("An undefined value was given for adapter.");if(!t[0].id)throw new se("Adapter has no id.");return t},defaultYaw:t=>ai(t),defaultPitch:t=>ai(t,!0),defaultZoomLvl:t=>Ne.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(Mt("maxFov cannot be lower than minFov"),t=e.maxFov),Ne.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),Ne.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...fi.lang,...t}),keyboardActions:(t,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:t,fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,withCredentials:t=>typeof t=="boolean"?()=>t:typeof t=="function"?t:()=>!1,defaultTransition:(t,{defValue:e})=>t===null||t.speed===0?null:{...e,...t},rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,i)=>{if(Array.isArray(e)?e=[ya(e[0]),e[1]]:e=[ya(e),null],!e[0])throw new se(`An undefined value was given for plugin ${i}.`);if(!e[0].id)throw new se(`Plugin ${i} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?kr(fi.navbar):typeof t=="string"?t.split(/[ ,]/):t},vx=Br(fi,wa),Nn=class extends Tt{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(ws.id,!1)?.autoSize(!0)}};Nn.id="caption";var Sa={},Pr={};function Wr(t,e){if(!t.id)throw new se("Button id is required");if(Sa[t.id]=t,t.groupId&&(Pr[t.groupId]=Pr[t.groupId]||[]).push(t),e){const i=fi.navbar;switch(e){case"start":i.unshift(t.id);break;case"end":i.push(t.id);break;default:{const[n,s]=e.split(":"),r=i.indexOf(n);if(!n||!s||r===-1)throw new se(`Invalid defaultPosition ${e}`);i.splice(r+(s==="right"?1:0),0,t.id)}}}}[mu,Ja,pu,ws,Nn,lu,cu,du,uu,fu,hu].forEach(t=>Wr(t));var gx=class extends Ri{constructor(t){super(t,{className:`psv-navbar ${Ps}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(Nn.id)!==-1&&t.indexOf(ws.id)===-1&&t.splice(t.indexOf(Nn.id),0,ws.id),t.forEach(e=>{typeof e=="object"?new ux(this,e):Sa[e]?new Sa[e](this):Pr[e]?Pr[e].forEach(i=>{new i(this)}):Mt(`Unknown button ${e}`)}),new xr(this),this.children.forEach(e=>{e instanceof Tt&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof Nn?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const i=this.children.find(n=>n instanceof Tt&&n.id===t);return!i&&e&&Mt(`button "${t}" not found in the navbar`),i}focusButton(t){this.isVisible()&&(this.getButton(t,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(n=>{n instanceof Tt&&n.autoSize()});const t=this.container.offsetWidth;let e=0;const i=[];this.children.forEach(n=>{n.isVisible()&&n instanceof Tt&&(e+=n.width,n.collapsable&&i.push(n))}),e!==0&&(t<e&&i.length>0?(i.forEach(n=>n.collapse()),this.collapsed=i,this.getButton(xr.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(n=>n.uncollapse()),this.collapsed=[],this.getButton(xr.id).hide(!1)),this.getButton(Nn.id,!1)?.autoSize())}};ua.enabled=!1;var Dn={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){ua.enabled&&(Mt("ThreeJS cache should be disabled"),ua.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,i){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=i,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],i)=>{i>0&&(Date.now()-e>=this.ttl*1e3||i>=this.maxItems)&&delete this.items[t]})}},_x=class extends Ri{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=ci(this.loader,"color"),this.color=ci(this.canvas,"color"),this.border=parseInt(ci(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(ci(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Ut.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Ut.type,this),super.destroy()}handleEvent(t){t instanceof Ut&&t.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(t){this.container.classList.remove("psv-loader--undefined");const e=Ne.clamp(t,0,99.999)/100*Math.PI*2,i=this.size/2,n=i,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*r+i,a=-Math.cos(e)*r+i,l=t>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${n} ${s} A ${r} ${r} 0 ${l} 1 ${o} ${a}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const i=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=i+"px",e.style.maxHeight=i+"px",this.loader.appendChild(e)}}},xx=class extends Ri{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new se("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new ds(this.state.contentId)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new as(e))}}},Ex=class extends Ri{constructor(t){super(t,{className:`psv-overlay ${Ps}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Vi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Vi.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),t.stopPropagation()):t instanceof Vi&&this.isVisible()&&this.state.dismissible&&t.key===gt.Escape&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new se("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dismissible=t.dismissible!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new Bd(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new rd(e))}}},Mx=200,So="psv-panel-content--no-interaction",yx=class extends Ri{constructor(t){super(t,{className:`psv-panel ${Ps}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const i=document.createElement("div");i.className="psv-panel-close-button",i.innerHTML=si.close,i.title=t.config.lang.close,this.container.appendChild(i),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),i.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Vi.type,this)}destroy(){this.viewer.removeEventListener(Vi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case Vi.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new se("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Fr(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=i=>{t.clickHandler(br(i))},this.state.keyHandler=i=>{i.key===gt.Enter&&t.clickHandler(br(i))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new Gi(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Hi(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(So))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(So)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.key===gt.Escape&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(So)}__resize(t,e){const i=t,n=e,s=Math.max(Mx,this.container.offsetWidth-(i-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=i,this.state.mouseY=n}},wx=class extends Ri{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",i=>i.stopPropagation()),this.container.addEventListener("mousedown",i=>i.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new se("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new se("Initialized tooltip cannot be re-initialized");t.className&&Ga(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new Xd(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const i=this.container.getBoundingClientRect();this.state.width=i.right-i.left,this.state.height=i.bottom-i.top,this.state.arrow=parseInt(ci(this.arrow,"border-top-width"),10),this.state.border=parseInt(ci(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){if(this.state.state!==1&&this.state.state!==3)throw new se("Uninitialized tooltip cannot be moved");t.box=t.box??this.state.config?.box??{width:0,height:0},this.state.config=t;const e=this.container,i=this.arrow,n={posClass:Rh(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(n,t);let s=null,r=null;if(n.top<0?s="bottom":n.top+n.height>this.viewer.state.size.height&&(s="top"),n.left<0?r="right":n.left+n.width>this.viewer.state.size.width&&(r="left"),r||s){const a=qa(n.posClass);s&&(n.posClass[a?0:1]=s),r&&(n.posClass[a?1:0]=r),this.__computeTooltipPosition(n,t)}e.style.top=n.top+"px",e.style.left=n.left+"px",i.style.top=n.arrowTop+"px",i.style.left=n.arrowLeft+"px";const o=n.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new hd(this.state.data));const t=parseFloat(ci(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const i=this.state.arrow,n=e.top,s=t.height,r=e.left,o=t.width,a=i+this.state.border,l=e.box.width/2+i*2,h=e.box.height/2+i*2;switch(t.posClass.join("-")){case"top-left":t.top=n-h-s,t.left=r+a-o,t.arrowTop=s,t.arrowLeft=o-a-i;break;case"top-center":t.top=n-h-s,t.left=r-o/2,t.arrowTop=s,t.arrowLeft=o/2-i;break;case"top-right":t.top=n-h-s,t.left=r-a,t.arrowTop=s,t.arrowLeft=i;break;case"bottom-left":t.top=n+h,t.left=r+a-o,t.arrowTop=-i*2,t.arrowLeft=o-a-i;break;case"bottom-center":t.top=n+h,t.left=r-o/2,t.arrowTop=-i*2,t.arrowLeft=o/2-i;break;case"bottom-right":t.top=n+h,t.left=r-a,t.arrowTop=-i*2,t.arrowLeft=i;break;case"left-top":t.top=n+a-s,t.left=r-l-o,t.arrowTop=s-a-i,t.arrowLeft=o;break;case"center-left":t.top=n-s/2,t.left=r-l-o,t.arrowTop=s/2-i,t.arrowLeft=o;break;case"left-bottom":t.top=n-a,t.left=r-l-o,t.arrowTop=i,t.arrowLeft=o;break;case"right-top":t.top=n+a-s,t.left=r+l,t.arrowTop=s-a-i,t.arrowLeft=-i*2;break;case"center-right":t.top=n-s/2,t.left=r+l,t.arrowTop=s/2-i,t.arrowLeft=-i*2;break;case"right-bottom":t.top=n-a,t.left=r+l,t.arrowTop=i,t.arrowLeft=-i*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(i=>{i.complete||e.push(new Promise(n=>{i.onload=n,i.onerror=n}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const i=this.container.getBoundingClientRect();this.state.width=i.right-i.left,this.state.height=i.bottom-i.top,this.move(this.state.config)}})}}},Sx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Is=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},ei=new U,ar=new ui(0,0,0,"ZXY"),bx=class extends Is{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Ne.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return Ne.radToDeg(2*Math.atan(Math.tan(Ne.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return Ne.radToDeg(2*Math.atan(Math.tan(Ne.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,i){const n=!_t(e),s=!_t(i),r={};let o=null;if(n){const a=this.viewer.getPosition(),l=ph(a.yaw,e.yaw);r.yaw={start:a.yaw,end:a.yaw+l},r.pitch={start:a.pitch,end:e.pitch},o=_a(t,mh(a,e))}if(s){const a=this.viewer.getZoomLevel(),l=Math.abs(i-a);r.zoom={start:a,end:i},o===null&&(o=_a(t,Math.PI/4*l/100))}return o===null?typeof t=="number"?o=t:o=ma:o=Math.max(ma,o),{duration:o,properties:r}}getTransitionOptions(t){let e;const i=this.config.defaultTransition??fi.defaultTransition;return t.transition===!1||t.transition===null?e=null:t.transition===!0?e={...i}:typeof t.transition=="object"?e={...i,...t.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(t){if(!this.state.textureData?.panoData)throw new se("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!ar.equals(this.viewer.renderer.panoramaPose)||!ar.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,ei),ei.applyEuler(this.viewer.renderer.panoramaPose),ei.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(ei)):e}sphericalCoordsToTextureCoords(t){if(!this.state.textureData?.panoData)throw new se("Current adapter does not support texture coordinates or no texture has been loaded");return(!ar.equals(this.viewer.renderer.panoramaPose)||!ar.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,ei),Ea(ei,this.viewer.renderer.sphereCorrection),Ea(ei,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(ei)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,i=un){return e||(e=new U),e.x=i*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=i*Math.sin(t.pitch),e.z=i*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),i=Math.atan2(t.x,t.z);return{yaw:i<0?-i:Math.PI*2-i,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(i=>i.object.userData[Yi]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,ei),this.vector3ToViewerCoords(ei)}isPointVisible(t){let e,i;if(t instanceof U)e=t,i=this.vector3ToViewerCoords(t);else if(Ya(t))e=this.sphericalCoordsToVector3(t,ei),i=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&i.x>=0&&i.x<=this.viewer.state.size.width&&i.y>=0&&i.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new se("Position is missing 'yaw' or 'pitch'");return{yaw:ai(t.yaw),pitch:ai(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:ai(t?.pan||0),tilt:ai(t?.tilt||0,!0),roll:ai(t?.roll||0,!0,!1)}}cleanPanoramaPose(t){return{pan:Ne.degToRad(t?.poseHeading||0),tilt:Ne.degToRad(t?.posePitch||0),roll:Ne.degToRad(t?.poseRoll||0)}}cleanPanoramaOptions(t,e){return e?.isEquirectangular&&(_t(t.zoom)&&!_t(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),_t(t.position)&&!_t(e.initialHeading)&&!_t(e.initialPitch)&&(t={...t,position:{yaw:ai(e.initialHeading),pitch:ai(e.initialPitch,!0)}})),t}},Tx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,Ax=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Xr=class gu{constructor(){this.$=gu.IDLE}is(...e){return e.some(i=>this.$&i)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Xr.IDLE=0;Xr.CLICK=1;Xr.MOVING=2;var ft=Xr,Cx=class extends Is{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new ft,this.keyHandler=new Hr,this.resizeObserver=new ResizeObserver(wh(()=>this.viewer.autoSize(),50)),this.moveThreshold=oh*Lt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(rs.type,this),this.viewer.addEventListener(fs.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(rs.type,this),this.viewer.removeEventListener(fs.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case rs.type:this.__applyMoveDelta();break;case fs.type:this.__clearMoveDelta();break}if(!_h(t,"."+Ps))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===gt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Et.CTRL_ZOOM))),!this.viewer.dispatchEvent(new Vi(t.key,t))||!this.state.keyboardEnabled)return;const e=this.config.keyboardActions?.[t.key];if(typeof e=="function"){e(this.viewer,t),t.preventDefault();return}if(!(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey)&&e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e),t.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(ft.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY,this.config.mousemove&&t.preventDefault()}__onMouseUp(t){this.step.is(ft.CLICK,ft.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(ft.CLICK,ft.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(ft.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},lh))):t.touches.length===2&&(this.step.set(ft.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(ft.CLICK,ft.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(ft.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Et.TWO_FINGERS,image:Tx,title:this.config.lang.twoFingers})},ch));else if(this.step.is(ft.CLICK,ft.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Et.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Et.CTRL_ZOOM,image:Ax,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Et.CTRL_ZOOM),hh);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new os(t))}__resetMove(){this.step.set(ft.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=va(t);this.step.set(ft.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,i,n=!1){this.step.is(ft.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,i,n),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,i,n=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,o=e-s.top,a=this.viewer.renderer.getIntersections({x:r,y:o}),l=a.find(h=>h.object.userData[Yi]);if(l){const h=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),d={rightclick:n,originalEvent:i,target:br(i),clientX:t,clientY:e,viewerX:r,viewerY:o,yaw:h.yaw,pitch:h.pitch,objects:a.map(f=>f.object).filter(f=>!f.userData[Yi])};try{const f=this.viewer.dataHelper.sphericalCoordsToTextureCoords(d);Object.assign(d,f)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-d.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-d.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Jh(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new qh(d)),this.data.dblclickData=kr(d),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},ah))}}__handleObjectsEvents(t){if(!bh(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=xh(this.viewer.container),i={x:t.clientX-e.x,y:t.clientY-e.y},n=this.viewer.renderer.getIntersections(i),s=(r,o,a)=>{this.viewer.dispatchEvent(new a(t,r,i,o))};for(const[r,o]of Object.entries(this.state.objectsObservers)){const a=n.find(l=>l.object.userData[r]);a?(o&&a.object!==o&&(s(o,r,Ma),this.state.objectsObservers[r]=null),o?s(a.object,r,ru):(this.state.objectsObservers[r]=a.object,s(a.object,r,eu))):o&&(s(o,r,Ma),this.state.objectsObservers[r]=null)}}}__doMove(t,e){if(this.step.is(ft.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(ft.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(ft.MOVING)){const i=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),n=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(i/this.state.size.width)*Ne.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(n/this.state.size.height)*Ne.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(ft.MOVING)){t.preventDefault();const e=va(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Lt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};We.enabled=!1;var lr=new qe,uc=new et,fc=new Xn,Rx=class extends Is{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new W0(this.config.rendererParameters),this.renderer.setPixelRatio(Lt.pixelRatio),this.renderer.outputColorSpace=dn,this.renderer.toneMapping=Dc,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Sr,this.camera=new zt(50,16/9,.1,2*un),this.camera.matrixAutoUpdate=!1;const e=new Ht(new Rs(un).scale(-1,1,1),new Ts({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Yi]:!0},this.scene.add(e),this.raycaster=new am,this.frustum=new za,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",i=>i.preventDefault()),this.viewer.addEventListener(us.type,this),this.viewer.addEventListener(Ti.type,this),this.viewer.addEventListener(ls.type,this),this.viewer.addEventListener(cs.type,this),this.viewer.addEventListener(Ut.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(us.type,this),this.viewer.removeEventListener(Ti.type,this),this.viewer.removeEventListener(ls.type,this),this.viewer.removeEventListener(cs.type,this),this.viewer.removeEventListener(Ut.type,this),super.destroy()}handleEvent(t){switch(t.type){case us.type:this.__onSizeUpdated();break;case Ti.type:this.__onZoomUpdated();break;case ls.type:this.__onPositionUpdated();break;case cs.type:this.__onPositionUpdated();break;case Ut.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new rs(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Nd))}setTexture(t){this.meshContainer||(this.meshContainer=new cn,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const i=this.viewer.dataHelper.cleanPanoramaPose(t);e.rotation.set(i.tilt,i.pan,i.roll,"YXZ")}setSphereCorrection(t,e=this.meshContainer){const i=this.viewer.dataHelper.cleanSphereCorrection(t);e.rotation.set(i.tilt,i.pan,i.roll,"YXZ")}transition(t,e,i){const n=i.effect==="fade"||i.rotation,s=!_t(e.position),r=!_t(e.zoom),o=new ja(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new cn,l=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(l,t,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(t.panoData,l),this.setSphereCorrection(e.sphereCorrection,a),s&&!i.rotation){const p=this.viewer.getPosition(),m=new U(0,1,0);a.rotateOnWorldAxis(m,o.position.yaw-p.yaw);const v=new U(0,1,0).cross(this.camera.getWorldDirection(new U)).normalize();a.rotateOnWorldAxis(v,o.position.pitch-p.pitch)}a.add(l),this.scene.add(a),this.renderer.setRenderTarget(new Xi),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:h,properties:d}=this.viewer.dataHelper.getAnimationProperties(i.speed,i.rotation?o.position:null,n?o.zoomLevel:null),f=new Rr({properties:{...d,opacity:{start:0,end:1}},duration:h,easing:"inOutCubic",onTick:p=>{switch(i.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,p.opacity);break;case"black":case"white":p.opacity<.5?this.renderer.toneMappingExposure=i.effect==="black"?Ne.mapLinear(p.opacity,0,.5,1,0):Ne.mapLinear(p.opacity,0,.5,1,4):(this.renderer.toneMappingExposure=i.effect==="black"?Ne.mapLinear(p.opacity,.5,1,0,1):Ne.mapLinear(p.opacity,.5,1,4,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!n&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}s&&i.rotation&&this.viewer.dynamics.position.setValue({yaw:p.yaw,pitch:p.pitch}),r&&n&&this.viewer.dynamics.zoom.setValue(p.zoom),this.viewer.needsUpdate()}});return f.then(p=>{a.remove(l),this.scene.remove(a),p?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!i.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(l))}),f}getIntersections(t){lr.x=2*t.x/this.state.size.width-1,lr.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(lr,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(i=>i.object.visible).filter(i=>i.object.isMesh&&!!i.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,lr)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(uc.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(uc),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),fc.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(fc)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=i=>{i.map?.dispose(),i.uniforms&&Object.values(i.uniforms).forEach(n=>{n.value?.dispose?.()}),i.dispose()};t.traverse(i=>{i.geometry?.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(n=>{e(n)}):e(i.material)),i instanceof Sr||i.dispose?.(),i!==t&&this.cleanScene(i)})}},Px=class extends Ba{load(t,e,i,n,s){const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r,{signal:s}).then(o=>{if(o.status===200||o.status===0){const a=o.body.getReader(),l=o.headers.get("Content-Length")||o.headers.get("X-File-Size"),h=l?parseInt(l):0,d=h!==0;let f=0;const p=new ReadableStream({start(m){v();function v(){a.read().then(({done:_,value:u})=>{if(_)m.close();else{f+=u.byteLength;const c=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:h});i(c),m.enqueue(u),v()}}).catch(_=>{n(_)})}}});return new Response(p)}else throw new Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>o.blob()).then(o=>{e(o)}).catch(o=>{n(o)})}},Lx=class extends Ba{load(t,e,i,n){const s=document.createElement("img");function r(){l(),e(this)}function o(h){if(l(),n?.aborted){const d=new Error;d.name="AbortError",d.message="The operation was aborted.",i(d)}else i(h)}function a(){s.src=""}function l(){s.removeEventListener("load",r,!1),s.removeEventListener("error",o,!1),n?.removeEventListener("abort",a,!1)}return s.addEventListener("load",r,!1),s.addEventListener("error",o,!1),n?.addEventListener("abort",a,!1),t.startsWith("data:")||(s.crossOrigin=this.withCredentials?"use-credentials":"anonymous"),s.src=t,s}},Dx=class extends Is{constructor(t){super(t),this.abortCtrl={},this.fileLoader=new Px,this.imageLoader=new Lx}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(t=>t.abort()),this.abortCtrl={}}loadFile(t,e,i){const n=Dn.get(t,i);if(n){if(n instanceof Blob)return e?.(100),Promise.resolve(n);Dn.remove(t,i)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),this.fileLoader.setWithCredentials(this.config.withCredentials(t)),new Promise((s,r)=>{let o=0;e?.(o),this.fileLoader.load(t,a=>{o=100,e?.(o),Dn.add(t,i,a),s(a)},a=>{if(a.lengthComputable){const l=a.loaded/a.total*100;l>o&&(o=l,e?.(o))}},a=>{r(a)},this.__getAbortSignal(i))})}loadImage(t,e,i){const n=Dn.get(t,i);return n?(e?.(100),n instanceof Blob?this.blobToImage(n):Promise.resolve(n)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(t)),new Promise((s,r)=>{this.imageLoader.load(t,o=>{Dn.add(t,i,o),s(o)},o=>{r(o)},this.__getAbortSignal(i))})):this.loadFile(t,e,i).then(s=>this.blobToImage(s))}blobToImage(t){return new Promise((e,i)=>{const n=document.createElement("img");n.onload=()=>{URL.revokeObjectURL(n.src),e(n)},n.onerror=i,n.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new se("Current adapter does not support preload"))}dispatchProgress(t){this.viewer.loader.setProgress(t),this.viewer.dispatchEvent(new md(Math.round(t)))}__getAbortSignal(t){return t?(this.abortCtrl[t]?.signal.aborted&&delete this.abortCtrl[t],this.abortCtrl[t]||(this.abortCtrl[t]=new AbortController),this.abortCtrl[t].signal):null}},Ix=class extends Is{constructor(t){super(t),this.zoom=new ts(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new Ti(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Uh(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new ls(e))},{yaw:new ts(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new ts(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new ts(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new cs(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Ne.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Ne.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},Ux=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new U(0,0,un),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},Nx=class extends Fh{constructor(t){if(super(),this.plugins={},this.children=[],this.parent=vh(t.container),!this.parent)throw new se('"container" element not found.');this.parent[Yi]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Dh(this.parent),Lh(this.container,"core"),this.state=new Ux,this.config=vx(t),this.__setSize(this.config.size),this.overlay=new Ex(this);try{Lt.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}Dn.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new Rx(this),this.textureLoader=new Dx(this),this.eventsHandler=new Cx(this),this.dataHelper=new bx(this),this.dynamics=new Ix(this),this.adapter.init?.(),this.loader=new _x(this),this.navbar=new gx(this),this.panel=new yx(this),this.notification=new xx(this),this.autoSize(),this.setCursor(null),Xa(Lt.isTouchEnabled,e=>{Fr(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,i])=>{this.plugins[e.id]=new e(this,i)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[t,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[t];this.children.slice().forEach(t=>t.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[Yi]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new hs)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=ya(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Eh(this.parent,Lt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new us(this.getSize())),this.navbar.autoSize())}setPanorama(t,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const i=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection;const n=r=>{if(Ch(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new wd(t,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new _d(t));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),ga();const o=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!_t(o.zoom)||!_t(o.position))&&this.stopAll(),{textureData:r,cleanOptions:o}});return!i||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new kn(r)),_t(o.zoom)||this.zoom(o.zoom),_t(o.position)||this.rotate(o.position)}).then(()=>n(),r=>n(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>(this.loader.hide(),this.dispatchEvent(new kn(r)),this.state.transitionAnimation=this.renderer.transition(r,o,i),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new Td(r)),!r)throw ga()}).then(()=>n(),r=>n(r)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[i,n]of Object.entries(t)){if(!(i in fi)){Mt(`Unknown option ${i}`);continue}if(i in dc){Mt(dc[i]);continue}switch(i in wa&&(n=wa[i](n,{rawConfig:e,defValue:fi[i]})),this.config[i]=n,i){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new Ti(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Ut(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:Et.ERROR,image:Sx,title:t,dismissible:!1})}hideError(){this.overlay.hide(Et.ERROR)}rotate(t){const e=new Wh(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=Ya(t),i=!_t(t.zoom),n=new ja(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(n),n.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(t.speed,n.position,n.zoomLevel);return s?(this.state.animation=new Rr({properties:r,duration:s,easing:t.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),i&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(n.position),i&&this.zoom(n.zoomLevel),new Rr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){["width","height"].forEach(e=>{t?.[e]&&(/^[0-9.]+$/.test(t[e])&&(t[e]+="px"),this.parent.style[e]=t[e])})}enterFullscreen(){this.isFullscreenEnabled()||Mh(this.parent,Lt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&yh(Lt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new wx(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new fs),this.disableIdleTimer(),this.stopAnimation()}};/*!
 * Photo Sphere Viewer / Virtual Tour Plugin 5.13.3
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Ox=Object.defineProperty,Fx=(t,e)=>{for(var i in e)Ox(t,i,{get:e[i],enumerable:!0})},kx={};Fx(kx,{EnterArrowEvent:()=>wu,LeaveArrowEvent:()=>Tu,NodeChangedEvent:()=>Eu});var _u=class xu extends fn{constructor(e,i){super(xu.type),this.node=e,this.data=i}};_u.type="node-changed";var Eu=_u,Mu=class yu extends fn{constructor(e,i){super(yu.type),this.link=e,this.node=i}};Mu.type="enter-arrow";var wu=Mu,Su=class bu extends fn{constructor(e,i){super(bu.type),this.link=e,this.node=i}};Su.type="leave-arrow";var Tu=Su,zx=class extends At{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new qe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Rn=new U,pc=new et,mc=new et,vc=new U,gc=new U,Bx=class{constructor(t={}){const e=this;let i,n,s,r;const o={objects:new WeakMap},a=t.element!==void 0?t.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a,this.getSize=function(){return{width:i,height:n}},this.render=function(m,v){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),pc.copy(v.matrixWorldInverse),mc.multiplyMatrices(v.projectionMatrix,pc),h(m,m,v),p(m)},this.setSize=function(m,v){i=m,n=v,s=i/2,r=n/2,a.style.width=m+"px",a.style.height=v+"px"};function l(m){m.isCSS2DObject&&(m.element.style.display="none");for(let v=0,_=m.children.length;v<_;v++)l(m.children[v])}function h(m,v,_){if(m.visible===!1){l(m);return}if(m.isCSS2DObject){Rn.setFromMatrixPosition(m.matrixWorld),Rn.applyMatrix4(mc);const u=Rn.z>=-1&&Rn.z<=1&&m.layers.test(_.layers)===!0,c=m.element;c.style.display=u===!0?"":"none",u===!0&&(m.onBeforeRender(e,v,_),c.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Rn.x*s+s)+"px,"+(-Rn.y*r+r)+"px)",c.parentNode!==a&&a.appendChild(c),m.onAfterRender(e,v,_));const b={distanceToCameraSquared:d(_,m)};o.objects.set(m,b)}for(let u=0,c=m.children.length;u<c;u++)h(m.children[u],v,_)}function d(m,v){return vc.setFromMatrixPosition(m.matrixWorld),gc.setFromMatrixPosition(v.matrixWorld),vc.distanceToSquared(gc)}function f(m){const v=[];return m.traverseVisible(function(_){_.isCSS2DObject&&v.push(_)}),v}function p(m){const v=f(m).sort(function(u,c){if(u.renderOrder!==c.renderOrder)return c.renderOrder-u.renderOrder;const b=o.objects.get(u).distanceToCameraSquared,S=o.objects.get(c).distanceToCameraSquared;return b-S}),_=v.length;for(let u=0,c=v.length;u<c;u++)v[u].element.style.zIndex=_-u}}},_c=new U,Hx=new qi,xc=new U,Vx=class extends At{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof i.element.ownerDocument.defaultView.Element&&i.element.parentNode!==null&&i.element.remove()})})}copy(e,i){return super.copy(e,i),this.element=e.element.cloneNode(!0),this}},ri=new et,Gx=new et,Wx=class{constructor(e={}){const i=this;let n,s,r,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const h=document.createElement("div");h.style.transformOrigin="0 0",h.style.pointerEvents="none",l.appendChild(h);const d=document.createElement("div");d.style.transformStyle="preserve-3d",h.appendChild(d),this.getSize=function(){return{width:n,height:s}},this.render=function(u,c){const b=c.projectionMatrix.elements[5]*o;c.view&&c.view.enabled?(h.style.transform=`translate( ${-c.view.offsetX*(n/c.view.width)}px, ${-c.view.offsetY*(s/c.view.height)}px )`,h.style.transform+=`scale( ${c.view.fullWidth/c.view.width}, ${c.view.fullHeight/c.view.height} )`):h.style.transform="",u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),c.parent===null&&c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld();let S,M;c.isOrthographicCamera&&(S=-(c.right+c.left)/2,M=(c.top+c.bottom)/2);const L=c.view&&c.view.enabled?c.view.height/c.view.fullHeight:1,C=c.isOrthographicCamera?`scale( ${L} )scale(`+b+")translate("+f(S)+"px,"+f(M)+"px)"+p(c.matrixWorldInverse):`scale( ${L} )translateZ(`+b+"px)"+p(c.matrixWorldInverse),N=(c.isPerspectiveCamera?"perspective("+b+"px) ":"")+C+"translate("+r+"px,"+o+"px)";a.camera.style!==N&&(d.style.transform=N,a.camera.style=N),_(u,u,c)},this.setSize=function(u,c){n=u,s=c,r=n/2,o=s/2,l.style.width=u+"px",l.style.height=c+"px",h.style.width=u+"px",h.style.height=c+"px",d.style.width=u+"px",d.style.height=c+"px"};function f(u){return Math.abs(u)<1e-10?0:u}function p(u){const c=u.elements;return"matrix3d("+f(c[0])+","+f(-c[1])+","+f(c[2])+","+f(c[3])+","+f(c[4])+","+f(-c[5])+","+f(c[6])+","+f(c[7])+","+f(c[8])+","+f(-c[9])+","+f(c[10])+","+f(c[11])+","+f(c[12])+","+f(-c[13])+","+f(c[14])+","+f(c[15])+")"}function m(u){const c=u.elements;return"translate(-50%,-50%)"+("matrix3d("+f(c[0])+","+f(c[1])+","+f(c[2])+","+f(c[3])+","+f(-c[4])+","+f(-c[5])+","+f(-c[6])+","+f(-c[7])+","+f(c[8])+","+f(c[9])+","+f(c[10])+","+f(c[11])+","+f(c[12])+","+f(c[13])+","+f(c[14])+","+f(c[15])+")")}function v(u){u.isCSS3DObject&&(u.element.style.display="none");for(let c=0,b=u.children.length;c<b;c++)v(u.children[c])}function _(u,c,b,S){if(u.visible===!1){v(u);return}if(u.isCSS3DObject){const M=u.layers.test(b.layers)===!0,L=u.element;if(L.style.display=M===!0?"":"none",M===!0){u.onBeforeRender(i,c,b);let C;u.isCSS3DSprite?(ri.copy(b.matrixWorldInverse),ri.transpose(),u.rotation2D!==0&&ri.multiply(Gx.makeRotationZ(u.rotation2D)),u.matrixWorld.decompose(_c,Hx,xc),ri.setPosition(_c),ri.scale(xc),ri.elements[3]=0,ri.elements[7]=0,ri.elements[11]=0,ri.elements[15]=1,C=m(ri)):C=m(u.matrixWorld);const A=a.objects.get(u);if(A===void 0||A.style!==C){L.style.transform=C;const N={style:C};a.objects.set(u,N)}L.parentNode!==d&&d.appendChild(L),u.onAfterRender(i,c,b)}}for(let M=0,L=u.children.length;M<L;M++)_(u.children[M],c,b)}}},Xx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
</svg>`,Lr="tourLink",Pn="__tour-link__",Yx={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},qx={element:()=>{const t=document.createElement("button");return t.className="psv-virtual-tour-arrow",t.innerHTML=Xx,t},size:{width:80,height:80}},bo="arrow",$x=class extends Ri{constructor(t,e){super(t,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new Wx({element:this.container}):new Bx({element:this.container}),this.camera=this.is3D?new zt(30,1):null,this.scene=new Sr,this.viewer.addEventListener(de.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(de.PositionUpdatedEvent.type,this),this.viewer.addEventListener(de.SizeUpdatedEvent.type,this),this.viewer.addEventListener(de.RenderEvent.type,this),this.viewer.addEventListener(de.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",i=>i.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),this.gallery?.addEventListener("show-gallery",this),this.gallery?.addEventListener("hide-gallery",this))}destroy(){this.viewer.removeEventListener(de.ReadyEvent.type,this),this.viewer.removeEventListener(de.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(de.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(de.RenderEvent.type,this),this.viewer.removeEventListener(de.ClickEvent.type,this),this.gallery?.removeEventListener("show-gallery",this),this.gallery?.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(t){switch(t.type){case de.ReadyEvent.type:case de.SizeUpdatedEvent.type:case de.PositionUpdatedEvent.type:this.__updateCamera();break;case de.RenderEvent.type:this.render();break;case de.ClickEvent.type:{if(t.data.rightclick)break;const e=this.__getTargetLink(t.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(te.getEventTarget(t));e&&this.plugin.__onEnterArrow(e,t);break}case"mouseleave":{const e=this.__getTargetLink(te.getEventTarget(t));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(te.getEventTarget(t),!0)&&this.plugin.__onHoverArrow(t);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":t.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const t=this.viewer.getSize();if(this.renderer.setSize(t.width,t.height),this.is3D){const e=this.viewer.getPosition();e.pitch=Ne.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,t.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(t.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const t=this.viewer.getPosition(),e=[];let i=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(n=>{const s=n.userData[bo];if(s.conflict){const r=Math.abs(te.getShortestArc(t.yaw,s.yaw));i=Math.min(i,r),e.push([n,r])}}),e.forEach(([n,s])=>{const r=s!==i;n.element.style.opacity=r?"0.5":null,n.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(t,e){if(e?.image){const i=document.createElement("img");return i.src=e.image,i}else if(e?.element)return typeof e.element=="function"?e.element(t):e.element}addLinkArrow(t,e,i=1){let n=this.__buildArrowElement(t,t.arrowStyle);n||(n=this.__buildArrowElement(t,this.arrowStyle)),n[Lr]=t;const s={...this.arrowStyle,...t.arrowStyle};if(n.classList.add("psv-virtual-tour-link"),s.className&&te.addClasses(n,s.className),s.style&&Object.assign(n.style,s.style),this.is3D){n.style.width=s.size.width*1.5+"px",n.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(a=>{const l=a.userData[bo];Math.abs(te.getShortestArc(l.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(l.conflict=!0,r=!0)});const o=new Vx(n);o.userData[bo]={yaw:e.yaw,conflict:r},o.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},o.position,i*100),this.scene.add(o)}else{n.style.width=s.size.width+"px",n.style.height=s.size.height+"px",n.style.pointerEvents="auto";const r=new zx(n);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(t,e=!1){const i=e?te.getClosest(t,".psv-virtual-tour-link"):t;return i?i[Lr]:void 0}__onToggleGallery(t){t?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},Au=class{constructor(t,e){this.plugin=t,this.viewer=e,this.nodes={}}destroy(){}checkNode(t){if(!t.id)throw new se("No id given for node");if(!t.panorama)throw new se(`No panorama provided for node ${t.id}`);if(this.plugin.isGps&&!(t.gps?.length>=2))throw new se(`No GPS position provided for node ${t.id}`);if(!this.plugin.isGps&&t.markers?.some(e=>e.gps&&!e.position))throw new se("Cannot use GPS positioning for markers in manual mode");t.links||(te.logWarn(`Node ${t.id} has no links`),t.links=[])}checkLink(t,e){if(!e.nodeId)throw new se(`Link of node ${t.id} has no target id`);if(e.nodeId===t.id)throw new se(`Node ${t.id} links to itself`);if(!this.plugin.isGps&&!te.isExtendedPosition(e.position))throw new se(`No position provided for link ${e.nodeId} of node ${t.id}`);if(this.plugin.isGps&&!e.gps)throw new se(`No GPS position provided for link ${e.nodeId} of node ${t.id}`)}},jx=class extends Au{async loadNode(t){if(this.nodes[t])return this.nodes[t];throw new se(`Node ${t} not found`)}setNodes(t){if(!t?.length)throw new se("No nodes provided");const e={},i={};t.forEach(n=>{if(this.checkNode(n),e[n.id])throw new se(`Duplicate node ${n.id}`);e[n.id]=n}),t.forEach(n=>{this.__checkLinks(n,e),n.links.forEach(s=>{i[s.nodeId]=!0})}),t.forEach(n=>{i[n.id]||te.logWarn(`Node ${n.id} is never linked to`)}),this.nodes=e}updateNode(t){if(!t.id)throw new se("No id given for node");const e=this.nodes[t.id];if(!e)throw new se(`Node ${t.id} does not exist`);return Object.assign(e,t),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(t,e){t.links.forEach(i=>{if(!e[i.nodeId])throw new se(`Target node ${i.nodeId} of node ${t.id} does not exists`);i.gps=i.gps||e[i.nodeId].gps,this.checkLink(t,i)})}},Zx=class extends Au{constructor(t,e){if(super(t,e),!t.config.getNode)throw new se("Missing getNode() option.");this.nodeResolver=t.config.getNode}async loadNode(t){if(this.nodes[t])return this.nodes[t];{const e=await this.nodeResolver(t);return this.checkNode(e),e.links.forEach(i=>{this.checkLink(e,i)}),this.nodes[t]=e,e}}clearCache(){this.nodes={}}};function Ec(t,e){const i=Mc(t),n=Mc(e),s=t[2]??0,r=e[2]??0;let o=0;return s!==r&&(o=Math.atan((r-s)/Kx(i,n))),{yaw:Jx(i,n),pitch:o}}function Mc(t){return[Ne.degToRad(t[0]),Ne.degToRad(t[1])]}function Kx(t,e){return te.greatArcDistance(t,e)*6371e3}function Jx(t,e){const[i,n]=t,[s,r]=e,o=Math.sin(s-i)*Math.cos(r),a=Math.cos(n)*Math.sin(r)-Math.sin(n)*Math.cos(r)*Math.cos(s-i);return Math.atan2(o,a)}var Qa=te.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,arrowStyle:qx,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(t){if(t!=="client"&&t!=="server")throw new se("VirtualTourPlugin: invalid dataMode");return t},positionMode(t){if(t!=="gps"&&t!=="manual")throw new se("VirtualTourPlugin: invalid positionMode");return t},renderMode(t){if(t!=="3d"&&t!=="2d")throw new se("VirtualTourPlugin: invalid renderMode");return t},arrowsPosition(t,{defValue:e}){return{...e,...t}},arrowStyle(t,{defValue:e}){return{...e,...t}},map(t,{rawConfig:e}){if(t){if(e.dataMode==="server")return te.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!t.imageUrl)return te.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null}return t}}),Us=class extends Gr{constructor(t,e){super(t,e),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new $x(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}init(){super.init(),this.arrowsRenderer.init(),te.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),this.markers?.config.markers&&(te.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&te.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new Zx(this,this.viewer):new jx(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),this.plan?.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){this.map?.removeEventListener("select-hotspot",this),this.plan?.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(t){if(t instanceof de.ClickEvent){const e=t.data.objects.find(i=>i.userData[Lr])?.userData[Lr];e&&this.setCurrentNode(e.nodeId,null,e)}else if(t.type==="select-hotspot"){const e=t.hotspotId;e.startsWith(Pn)&&this.setCurrentNode(e.substring(Pn.length))}}getCurrentNode(){return this.state.currentNode}setNodes(t,e){if(this.isServerSide)throw new se("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(t),e?this.datasource.nodes[e]||(e=t[0].id,te.logWarn(`startNodeId not found is provided nodes, resetted to ${e}`)):e=t[0].id,this.setCurrentNode(e),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(t,e,i){if(t===this.state.currentNode?.id&&!e?.forceUpdate)return Promise.resolve(!0);e?.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=t;const n=this.state.currentNode,s=n&&i?this.__getLinkPosition(n,i):null;return Promise.resolve(this.state.preload[t]).then(()=>{if(this.state.loadingNode!==t)throw te.getAbortError();return this.datasource.loadNode(t)}).then(r=>{if(this.state.loadingNode!==t)throw te.getAbortError();const o={...Qa.defaults.transitionOptions,rotateTo:s,zoomTo:s?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(r,n,i):this.config.transitionOptions,...e};return o.effect||(o.effect="none"),this.viewer.panel.hide("description"),this.__hideTooltip(),this.arrowsRenderer.clear(),this.gallery?.config.hideOnClick&&this.gallery.hide(),this.map?.config.minimizeOnHotspotClick&&this.map.minimize(),this.plan?.config.minimizeOnHotspotClick&&this.plan.minimize(),o.rotation&&o.effect==="none"?this.viewer.animate({...o.rotateTo,zoom:o.zoomTo,speed:o.speed}).then(()=>[r,o]):Promise.resolve([r,o])}).then(([r,o])=>{if(this.state.loadingNode!==t)throw te.getAbortError();return this.markers?.clearMarkers(),this.config.linksOnCompass&&this.compass?.clearHotspots(),this.viewer.setPanorama(r.panorama,{caption:r.caption,description:r.description,panoData:r.panoData,sphereCorrection:r.sphereCorrection,showLoader:o.showLoader,position:o.rotateTo,zoom:o.zoomTo,transition:o.effect==="none"?!1:{effect:o.effect,rotation:o.rotation,speed:o.speed}}).then(a=>{if(!a)throw te.getAbortError();return r})}).then(r=>{if(this.state.loadingNode!==t)throw te.getAbortError();return this.state.currentNode=r,this.map&&this.map.setCenter(this.__getNodeMapPosition(r)??this.map.config.center),this.plan?.setCoordinates(r.gps),this.__addNodeMarkers(r),this.__renderLinks(r),this.__preload(r),this.state.loadingNode=null,this.dispatchEvent(new Eu(r,{fromNode:n,fromLink:i,fromLinkPosition:s})),this.viewer.resetIdleTimer(),!0}).catch(r=>{if(te.isAbortError(r))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,r})}async gotoLink(t,e="8rpm"){const i=this.getLinkPosition(t);e?await this.viewer.animate({...i,speed:e}):this.viewer.rotate(i)}getLinkPosition(t){const e=this.state.currentNode?.links.find(i=>i.nodeId===t);if(!e)throw new se(`Cannot find link "${t}"`);return this.__getLinkPosition(this.state.currentNode,e)}updateNode(t){if(this.isServerSide)throw new se("Cannot update node in server side mode");const e=this.datasource.updateNode(t);if((t.name||t.thumbnail||t.panorama)&&this.__setGalleryItems(),(t.name||t.gps||t.map)&&this.__setMapHotspots(),(t.name||t.gps||t.plan)&&this.__setPlanHotspots(),this.state.currentNode?.id===e.id){if(this.__hideTooltip(),t.panorama||t.panoData||t.sphereCorrection){this.setCurrentNode(e.id,{forceUpdate:!0});return}t.caption&&this.viewer.setOption("caption",e.caption),t.description&&this.viewer.setOption("description",e.description),(t.links||t.gps)&&this.__renderLinks(e),t.gps&&this.plan?.setCoordinates(e.gps),(t.map||t.gps)&&this.map?.setCenter(this.__getNodeMapPosition(e)),(t.markers||t.gps)&&this.__addNodeMarkers(e)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).filter(t=>t.showInGallery!==!1).map(t=>({id:t.id,panorama:t.panorama,name:t.name,thumbnail:t.thumbnail})),t=>{this.setCurrentNode(t)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).filter(t=>t.map!==!1).map(t=>({tooltip:t.name,...t.map||{},...this.__getNodeMapPosition(t),id:Pn+t.id})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).filter(t=>t.plan!==!1).map(t=>({tooltip:t.name,...t.plan||{},coordinates:t.gps,id:Pn+t.id})))}__renderLinks(t){this.arrowsRenderer.clear();const e=[];t.links.forEach(i=>{const n=this.__getLinkPosition(t,i);n.yaw+=i.linkOffset?.yaw??0,n.pitch+=i.linkOffset?.pitch??0,this.isGps&&!this.is3D&&(n.pitch+=this.config.arrowsPosition.linkPitchOffset),e.push(n),this.arrowsRenderer.addLinkArrow(i,n,i.linkOffset?.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&this.compass?.setHotspots(e)}__getLinkPosition(t,e){return this.isGps?Ec(t.gps,e.gps):this.viewer.dataHelper.cleanPosition(e.position)}async __getTooltipContent(t){const e=await this.datasource.loadNode(t.nodeId),i=[];(e.name||e.thumbnail||e.caption)&&(e.name&&i.push(`<h3>${e.name}</h3>`),e.thumbnail&&i.push(`<img src="${e.thumbnail}">`),e.caption&&i.push(`<p>${e.caption}</p>`));let n=i.join("");return this.config.getLinkTooltip&&(n=this.config.getLinkTooltip(n,t,e)),n}__onEnterArrow(t,e){const i=te.getPosition(this.viewer.container),n={x:e.clientX-i.x,y:e.clientY-i.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...Yx,left:n.x,top:n.y,box:{width:20,height:20}}),this.__getTooltipContent(t).then(s=>{s?this.state.currentTooltip.update(s):this.__hideTooltip()})),this.map?.setActiveHotspot(Pn+t.nodeId),this.plan?.setActiveHotspot(Pn+t.nodeId),this.dispatchEvent(new wu(t,this.state.currentNode))}__onHoverArrow(t){const e=te.getPosition(this.viewer.container),i={x:t.clientX-e.x,y:t.clientY-e.y};this.state.currentTooltip?.move({left:i.x,top:i.y})}__onLeaveArrow(t){this.__hideTooltip(),this.map?.setActiveHotspot(null),this.plan?.setActiveHotspot(null),this.dispatchEvent(new Tu(t,this.state.currentNode))}__hideTooltip(){this.state.currentTooltip?.hide(),this.state.currentTooltip=null}__preload(t){this.config.preload&&(this.state.preload[t.id]=!0,this.state.currentNode.links.filter(e=>!this.state.preload[e.nodeId]).filter(e=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,e):!0).forEach(e=>{this.state.preload[e.nodeId]=this.datasource.loadNode(e.nodeId).then(i=>this.viewer.textureLoader.preloadPanorama(i.panorama)).then(()=>{this.state.preload[e.nodeId]=!0}).catch(()=>{delete this.state.preload[e.nodeId]})}))}__addNodeMarkers(t){t.markers&&(this.markers?this.markers.setMarkers(t.markers.map(e=>(e.gps&&this.isGps&&(e.position=Ec(t.gps,e.gps),e.data?.map&&Object.assign(e.data.map,this.__getGpsMapPosition(e.gps)),e.data?.plan&&(e.data.plan.coordinates=e.gps)),e))):te.logWarn(`Node ${t.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(t){const e=this.__getGpsMapPosition(t.gps);return e||(t.map?{x:t.map.x,y:t.map.y}:null)}__getGpsMapPosition(t){const e=this.config.map;return this.isGps&&e&&e.extent&&e.size?{x:Ne.mapLinear(t[0],e.extent[0],e.extent[2],0,e.size.width),y:Ne.mapLinear(t[1],e.extent[1],e.extent[3],0,e.size.height)}:null}};Us.id="virtual-tour";Us.VERSION="5.13.3";Us.configParser=Qa;Us.readonlyOptions=Object.keys(Qa.defaults);/*!
 * Photo Sphere Viewer / Gallery Plugin 5.13.3
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Qx=Object.defineProperty,eE=(t,e)=>{for(var i in e)Qx(t,i,{get:e[i],enumerable:!0})},tE={};eE(tE,{HideGalleryEvent:()=>ms,ShowGalleryEvent:()=>ps});var Cu=class Ru extends fn{constructor(e){super(Ru.type),this.fullscreen=e}};Cu.type="show-gallery";var ps=Cu,Pu=class Lu extends fn{constructor(){super(Lu.type)}};Pu.type="hide-gallery";var ms=Pu,iE='<svg viewBox="185 115 330 330" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M186.7 326.7V163.3c0-15 8.3-23.3 23.3-23.3h210c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H210c-15 0-23.3-8.3-23.3-23.3zm70 70v-23.4H420c30.2 0 46.7-16.4 46.7-46.6V210H490c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H280c-15 0-23.3-8.3-23.3-23.3zm-23.8-105H397l-40-50.4-26.7 29.7-44.3-54.5zm106.7-76c9.6 0 17.8-7.8 17.8-17.2a18 18 0 0 0-17.8-17.8c-9.4 0-17.2 8.2-17.2 17.8 0 9.4 7.8 17.2 17.2 17.2z"/><!--Created by Wolf Böse from the Noun Project--></svg>',Ns=class extends Tt{constructor(t){super(t,{className:"psv-gallery-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:iE}),this.plugin=this.viewer.getPlugin("gallery"),this.plugin&&(this.plugin.addEventListener(ps.type,this),this.plugin.addEventListener(ms.type,this))}destroy(){this.plugin&&(this.plugin.removeEventListener(ps.type,this),this.plugin.removeEventListener(ms.type,this)),super.destroy()}handleEvent(t){t instanceof ps?this.toggleActive(!0):t instanceof ms&&this.toggleActive(!1)}isSupported(){return!!this.plugin}onClick(){this.plugin.toggle()}};Ns.id="gallery";var Du="psvGalleryItem",Iu=te.dasherize(Du),cr="psv-gallery-item--active",nE=(t,e)=>`
${t.map(i=>`
<div class="psv-gallery-item" 
     data-${Iu}="${i.id}"
     style="width:${e.width}px; aspect-ratio:${e.width/e.height};"
     tabindex="0">
    ${i.name?`<div class="psv-gallery-item-title"><span>${i.name}</span></div>`:""}
    <svg class="psv-gallery-item-thumb" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice"><use href="#psvGalleryBlankIcon"></use></svg>
    ${i.thumbnail?`<div class="psv-gallery-item-thumb" data-src="${i.thumbnail}"></div>`:""}
</div>
`).join("")}
`,yc=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 0 50 100"><polygon fill="currentColor" points="24.66 99.31 25.34 100 75.34 50 25.34 0 24.66 0.69 24.66 22.64 52.01 50 24.66 77.36 24.66 99.31"/><!-- Created by Rainbow Designs from the Noun Project --></svg>
`,sE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <symbol id="psvGalleryBlankIcon" viewBox="0 0 200 200">
      <rect x="0" y="0" width="200" height="200" fill="#666"/>
      <g transform="scale(0.25) translate(25 20) " fill="#eee">
        <path d="M376 220.61c-85.84 0-155.39 69.56-155.39 155.39 0 85.84 69.56 155.39 155.39 155.39 85.84 0 155.39-69.56 155.39-155.39 0-85.84-69.56-155.39-155.39-155.39zm0 300.92c-80.41 0-145.53-65.12-145.53-145.53S295.59 230.47 376 230.47 521.53 295.59 521.53 376 456.41 521.53 376 521.53z"/>
        <path d="M467.27 300.03H284.74a18.21 18.21 0 0 0-18.25 18.25v115.43a18.21 18.21 0 0 0 18.25 18.26h182.53a18.21 18.21 0 0 0 18.25-18.26V318.28a18.2 18.2 0 0 0-18.25-18.25zm-190.91 18.25a8.64 8.64 0 0 1 8.39-8.38h182.53a8.64 8.64 0 0 1 8.38 8.38V413l-44.89-35.52c-.49-.5-.99-.5-1.48-.99h-2.46c-.5 0-1 0-1.48.5l-37.5 21.2-43.9-58.7-.5-.5s0-.48-.49-.48c0 0-.49 0-.49-.5-.49 0-.49-.49-.99-.49-.49 0-.49 0-.98-.49H337.53c-.5 0-.5.5-.99.5h-.49l-.5.48s-.48 0-.48.5l-58.7 65.12zM467.27 442.1H284.74a8.64 8.64 0 0 1-8.39-8.38v-15.3l63.15-68.07 42.92 57.22 1.48 1.48h.49c.5.5 1.48.5 1.97.5H388.83l38.47-21.72 46.37 36.5c.5.5 1.49 1 1.98 1v8.88c0 3.95-3.45 7.9-8.38 7.9z"/>
        <path d="M429.77 333.58a13.81 13.81 0 1 1-27.63 0 13.81 13.81 0 0 1 27.63 0"/>
      </g>
    </symbol>
  </defs>
</svg>`;function wc(t,e){let i;t.addEventListener("mousedown",()=>{e(),clearInterval(i),i=setInterval(()=>{t.style.pointerEvents==="none"?clearInterval(i):e()},500)}),t.addEventListener("mouseup",()=>{clearInterval(i)})}var rE=class extends Ri{constructor(t,e){super(e,{className:`psv-gallery ${Si.CAPTURE_EVENTS_CLASS}`}),this.plugin=t,this.state={visible:!0,mousedown:!1,initMouse:null,mouse:null,itemMargin:null,breakpoint:null,scrollLeft:0,scrollTop:0,isAboveBreakpoint:null},this.container.innerHTML=sE,this.container.querySelector("svg").style.display="none";const i=document.createElement("div");i.className="psv-panel-close-button",i.innerHTML=Si.ICONS.close,this.container.appendChild(i),i.addEventListener("click",()=>this.plugin.hide()),this.items=document.createElement("div"),this.items.className="psv-gallery-container",this.container.appendChild(this.items),this.config.navigationArrows&&(this.arrowLeft=document.createElement("div"),this.arrowLeft.className="psv-gallery-arrow",this.arrowLeft.innerHTML=yc,this.container.appendChild(this.arrowLeft),this.arrowRight=document.createElement("div"),this.arrowRight.className="psv-gallery-arrow",this.arrowRight.innerHTML=yc,this.container.appendChild(this.arrowRight),wc(this.arrowLeft,()=>this.__scroll(-1)),wc(this.arrowRight,()=>this.__scroll(1))),this.state.itemMargin=parseInt(te.getStyleProperty(this.items,"padding-left"),10),this.state.breakpoint=parseInt(te.getStyleProperty(this.container,"--psv-gallery-breakpoint"),10),this.observer=new IntersectionObserver(n=>{n.forEach(s=>{if(s.intersectionRatio>0){const r=s.target;r.style.backgroundImage=`url("${r.dataset.src}")`,delete r.dataset.src,this.observer.unobserve(s.target)}})},{root:this.viewer.container}),this.viewer.addEventListener(de.SizeUpdatedEvent.type,this),this.container.addEventListener("transitionend",this),this.container.addEventListener("keydown",this),this.items.addEventListener("wheel",this),this.items.addEventListener("scroll",this),this.items.addEventListener("mousedown",this),this.items.addEventListener("mousemove",this),this.items.addEventListener("click",this),window.addEventListener("mouseup",this),this.hide()}get isAboveBreakpoint(){return this.items.offsetWidth>this.state.breakpoint}get config(){return this.plugin.config}destroy(){window.removeEventListener("mouseup",this),this.viewer.removeEventListener(de.SizeUpdatedEvent.type,this),this.observer.disconnect(),super.destroy()}handleEvent(t){switch(t.type){case"transitionend":this.isVisible()&&t.target===this.container&&this.__focusActiveOrFirst();break;case"keydown":if(this.isVisible())switch(t.key){case Si.KEY_CODES.Escape:this.plugin.hide();break;case Si.KEY_CODES.Enter:this.__click(t);break}break;case"wheel":{const e=t;this.__scroll(e.deltaY>0?1:-1),t.preventDefault();break}case"scroll":case de.SizeUpdatedEvent.type:this.__updateArrows();break;case"mousedown":this.state.mousedown=!0,this.isAboveBreakpoint?this.state.initMouse=t.clientX:this.state.initMouse=t.clientY,this.state.mouse=this.state.initMouse;break;case"mousemove":if(this.state.mousedown)if(this.isAboveBreakpoint){const e=this.state.mouse-t.clientX;this.items.scrollLeft+=e,this.state.scrollLeft=this.items.scrollLeft,this.state.mouse=t.clientX}else{const e=this.state.mouse-t.clientY;this.items.scrollTop+=e,this.state.scrollTop=this.items.scrollTop,this.state.mouse=t.clientY}break;case"mouseup":this.state.mousedown=!1,this.state.mouse=null,t.preventDefault();break;case"click":{const e=this.isAboveBreakpoint?t.clientX:t.clientY;Math.abs(this.state.initMouse-e)<10&&this.__click(t);break}}}show(){this.container.classList.add("psv-gallery--open"),this.state.visible=!0}hide(){this.container.classList.remove("psv-gallery--open"),this.state.visible=!1,te.hasParent(document.activeElement,this.container)&&this.viewer.navbar.focusButton(Ns.id)}setItems(t){this.items.innerHTML=nE(t,this.plugin.config.thumbnailSize),this.observer&&(this.observer.disconnect(),this.items.querySelectorAll("[data-src]").forEach(e=>{this.observer.observe(e)})),this.__updateArrows()}setActive(t){if(this.items.querySelector("."+cr)?.classList.remove(cr),t){const i=this.items.querySelector(`[data-${Iu}="${t}"]`);i&&(i.classList.add(cr),this.items.scrollLeft=i.offsetLeft+i.clientWidth/2-this.items.clientWidth/2)}}__click(t){const e=te.getMatchingTarget(t,".psv-gallery-item");if(!e)return;const i=e.dataset[Du];this.plugin.applyItem(i),this.setActive(i),(this.config.hideOnClick||!this.isAboveBreakpoint)&&this.hide()}__focusActiveOrFirst(){(this.items.querySelector("."+cr)??this.items.firstElementChild)?.focus()}__scroll(t){if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth,i=this.plugin.config.thumbnailSize.width+(this.state.itemMargin??0);this.state.scrollLeft=Ne.clamp(this.state.scrollLeft+t*i,0,e),t===-1&&this.state.scrollLeft<i*.8&&(this.state.scrollLeft=0),t===1&&this.state.scrollLeft>e-i*.8&&(this.state.scrollLeft=e),this.items.scroll({left:this.state.scrollLeft,behavior:"smooth"})}else{const e=this.items.scrollHeight-this.items.offsetHeight,i=this.items.querySelector(":first-child").offsetHeight*2+(this.state.itemMargin??0);this.state.scrollTop=Ne.clamp(this.state.scrollTop+t*i,0,e),t===-1&&this.state.scrollTop<i*.8&&(this.state.scrollTop=0),t===1&&this.state.scrollTop>e-i*.8&&(this.state.scrollTop=e),this.items.scroll({top:this.state.scrollTop,behavior:"smooth"})}}__updateArrows(){if(!this.config.navigationArrows)return;this.state.isAboveBreakpoint!==this.isAboveBreakpoint&&(te.toggleClass(this.arrowLeft,"psv-gallery-arrow--left",this.isAboveBreakpoint),te.toggleClass(this.arrowLeft,"psv-gallery-arrow--top",!this.isAboveBreakpoint),te.toggleClass(this.arrowRight,"psv-gallery-arrow--right",this.isAboveBreakpoint),te.toggleClass(this.arrowRight,"psv-gallery-arrow--bottom",!this.isAboveBreakpoint),this.state.isAboveBreakpoint=this.isAboveBreakpoint);const t=(e,i)=>{i?(e.style.opacity="1",e.style.pointerEvents="auto"):(e.style.opacity="0",e.style.pointerEvents="none")};if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth;t(this.arrowLeft,this.items.scrollLeft>50),t(this.arrowRight,this.items.scrollLeft<e-50)}else{const e=this.items.scrollHeight-this.items.offsetHeight;t(this.arrowLeft,this.items.scrollTop>50),t(this.arrowRight,this.items.scrollTop<e-50)}}},oE=te.getConfigParser({items:[],navigationArrows:!0,visibleOnLoad:!1,hideOnClick:!0,thumbnailSize:{width:200,height:100}}),Os=class extends Gr{constructor(t,e){super(t,e),this.items=[],this.gallery=new rE(this,this.viewer)}init(){super.init(),te.checkStylesheet(this.viewer.container,"gallery-plugin"),this.map=this.viewer.getPlugin("map"),this.plan=this.viewer.getPlugin("plan"),this.viewer.addEventListener(de.PanoramaLoadedEvent.type,this),this.viewer.addEventListener(de.ShowPanelEvent.type,this),this.config.visibleOnLoad&&this.viewer.addEventListener(de.ReadyEvent.type,()=>{this.items.length&&this.show()},{once:!0}),this.setItems(this.config.items),delete this.config.items,setTimeout(()=>this.__updateButton())}destroy(){this.viewer.removeEventListener(de.PanoramaLoadedEvent.type,this),this.viewer.removeEventListener(de.ShowPanelEvent.type,this),this.gallery.destroy(),super.destroy()}setOptions(t){super.setOptions(t),t.thumbnailSize&&this.gallery.setItems(this.items)}handleEvent(t){if(t instanceof de.PanoramaLoadedEvent){const e=this.items.find(i=>te.deepEqual(i.panorama,t.data.panorama));this.currentId=e?.id,this.gallery.setActive(this.currentId)}else t instanceof de.ShowPanelEvent&&this.gallery.isVisible()&&this.hide()}show(){return this.map?.minimize(),this.plan?.minimize(),this.dispatchEvent(new ps(!this.gallery.isAboveBreakpoint)),this.gallery.show()}hide(){return this.dispatchEvent(new ms),this.gallery.hide()}toggle(){this.gallery.isVisible()?this.hide():this.show()}isVisible(){return this.gallery.isVisible()}setItems(t,e){if(t?t.forEach((i,n)=>{if(!i.id)throw new se(`Item ${n} has no "id".`);if(!i.panorama)throw new se(`Item "${i.id}" has no "panorama".`)}):t=[],this.handler=e,this.items=t.map(i=>({...i,id:`${i.id}`})),this.gallery.setItems(this.items),this.currentId){const i=this.items.find(n=>n.id===this.currentId);this.currentId=i?.id,this.gallery.setActive(this.currentId)}this.items.length||this.gallery.hide(),this.__updateButton()}applyItem(t){if(t!==this.currentId){if(this.handler)this.handler(t);else{const e=this.items.find(i=>i.id===t);this.viewer.setPanorama(e.panorama,{caption:e.name,...e.options})}this.currentId=t}}__updateButton(){this.viewer.navbar.getButton(Ns.id,!1)?.toggle(this.items.length>0)}};Os.id="gallery";Os.VERSION="5.13.3";Os.configParser=oE;Os.readonlyOptions=["items","navigationArrows","visibleOnLoad"];fi.lang[Ns.id]="Gallery";Wr(Ns,"caption:left");/*!
 * Photo Sphere Viewer / Markers Plugin 5.13.3
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var aE=Object.defineProperty,lE=(t,e)=>{for(var i in e)aE(t,i,{get:e[i],enumerable:!0})},cE={};lE(cE,{EnterMarkerEvent:()=>Wu,GotoMarkerDoneEvent:()=>ba,HideMarkersEvent:()=>vs,LeaveMarkerEvent:()=>Hu,MarkerVisibilityEvent:()=>Ou,MarkersPluginEvent:()=>$t,RenderMarkersListEvent:()=>hf,SelectMarkerEvent:()=>qu,SelectMarkerListEvent:()=>Zu,SetMarkersEvent:()=>rf,ShowMarkersEvent:()=>gs,UnselectMarkerEvent:()=>Qu});var $t=class extends fn{},Uu=class Nu extends $t{constructor(e,i){super(Nu.type),this.marker=e,this.visible=i}};Uu.type="marker-visibility";var Ou=Uu,Fu=class ku extends $t{constructor(e){super(ku.type),this.marker=e}};Fu.type="goto-marker-done";var ba=Fu,zu=class Bu extends $t{constructor(e){super(Bu.type),this.marker=e}};zu.type="leave-marker";var Hu=zu,Vu=class Gu extends $t{constructor(e){super(Gu.type),this.marker=e}};Vu.type="enter-marker";var Wu=Vu,Xu=class Yu extends $t{constructor(e,i,n){super(Yu.type),this.marker=e,this.doubleClick=i,this.rightClick=n}};Xu.type="select-marker";var qu=Xu,$u=class ju extends $t{constructor(e){super(ju.type),this.marker=e}};$u.type="select-marker-list";var Zu=$u,Ku=class Ju extends $t{constructor(e){super(Ju.type),this.marker=e}};Ku.type="unselect-marker";var Qu=Ku,ef=class tf extends $t{constructor(){super(tf.type)}};ef.type="hide-markers";var vs=ef,nf=class sf extends $t{constructor(e){super(sf.type),this.markers=e}};nf.type="set-markers";var rf=nf,of=class af extends $t{constructor(){super(af.type)}};of.type="show-markers";var gs=of,lf=class cf extends $t{constructor(e){super(cf.type),this.markers=e}};lf.type="render-markers-list";var hf=lf,hE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Ss=class extends Tt{constructor(t){super(t,{className:"psv-markers-button",icon:hE,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(gs.type,this),this.plugin.addEventListener(vs.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(gs.type,this),this.plugin.removeEventListener(vs.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof gs?this.toggleActive(!0):t instanceof vs&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Ss.id="markers";var df=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Dr="http://www.w3.org/2000/svg",rt="psvMarker",dE=te.dasherize(rt),Qn="marker",In="markersList",Ta={amount:2,duration:100,easing:"linear"},uE=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${df} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${t.map(i=>`
        <li data-${dE}="${i.id}" class="psv-panel-menu-item" tabindex="0">
          ${i.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${i.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${i.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,Yr=class extends Tt{constructor(t){super(t,{className:" psv-markers-list-button",icon:df,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(de.ShowPanelEvent.type,this),this.viewer.addEventListener(de.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(de.ShowPanelEvent.type,this),this.viewer.removeEventListener(de.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof de.ShowPanelEvent?this.toggleActive(t.panelId===In):t instanceof de.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};Yr.id="markersList";var Sc=new U,fE=new qi,bc=new U,pE=class extends At{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}},oi=new et,mE=new et,vE=class{constructor(t={}){const e=this;let i,n,s,r;const o={camera:{style:""},objects:new WeakMap},a=t.element!==void 0?t.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",a.appendChild(l);const h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:i,height:n}},this.render=function(_,u){const c=u.projectionMatrix.elements[5]*r;u.view&&u.view.enabled?(l.style.transform=`translate( ${-u.view.offsetX*(i/u.view.width)}px, ${-u.view.offsetY*(n/u.view.height)}px )`,l.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):l.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let b,S;u.isOrthographicCamera&&(b=-(u.right+u.left)/2,S=(u.top+u.bottom)/2);const M=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,L=u.isOrthographicCamera?`scale( ${M} )scale(`+c+")translate("+d(b)+"px,"+d(S)+"px)"+f(u.matrixWorldInverse):`scale( ${M} )translateZ(`+c+"px)"+f(u.matrixWorldInverse),A=(u.isPerspectiveCamera?"perspective("+c+"px) ":"")+L+"translate("+s+"px,"+r+"px)";o.camera.style!==A&&(h.style.transform=A,o.camera.style=A),v(_,_,u)},this.setSize=function(_,u){i=_,n=u,s=i/2,r=n/2,a.style.width=_+"px",a.style.height=u+"px",l.style.width=_+"px",l.style.height=u+"px",h.style.width=_+"px",h.style.height=u+"px"};function d(_){return Math.abs(_)<1e-10?0:_}function f(_){const u=_.elements;return"matrix3d("+d(u[0])+","+d(-u[1])+","+d(u[2])+","+d(u[3])+","+d(u[4])+","+d(-u[5])+","+d(u[6])+","+d(u[7])+","+d(u[8])+","+d(-u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(-u[13])+","+d(u[14])+","+d(u[15])+")"}function p(_){const u=_.elements;return"translate(-50%,-50%)"+("matrix3d("+d(u[0])+","+d(u[1])+","+d(u[2])+","+d(u[3])+","+d(-u[4])+","+d(-u[5])+","+d(-u[6])+","+d(-u[7])+","+d(u[8])+","+d(u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(u[13])+","+d(u[14])+","+d(u[15])+")")}function m(_){_.isCSS3DObject&&(_.element.style.display="none");for(let u=0,c=_.children.length;u<c;u++)m(_.children[u])}function v(_,u,c,b){if(_.visible===!1){m(_);return}if(_.isCSS3DObject){const S=_.layers.test(c.layers)===!0,M=_.element;if(M.style.display=S===!0?"":"none",S===!0){_.onBeforeRender(e,u,c);let L;_.isCSS3DSprite?(oi.copy(c.matrixWorldInverse),oi.transpose(),_.rotation2D!==0&&oi.multiply(mE.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(Sc,fE,bc),oi.setPosition(Sc),oi.scale(bc),oi.elements[3]=0,oi.elements[7]=0,oi.elements[11]=0,oi.elements[15]=1,L=p(oi)):L=p(_.matrixWorld);const C=o.objects.get(_);if(C===void 0||C.style!==L){M.style.transform=L;const A={style:L};o.objects.set(_,A)}M.parentNode!==h&&h.appendChild(M),_.onAfterRender(e,u,c)}}for(let S=0,M=_.children.length;S<M;S++)v(_.children[S],u,c)}}},gE=class{constructor(t){this.viewer=t,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new vE({element:this.element}),this.scene=new Sr,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(i=>{const n=i.target[rt];n.config.visible&&(n.viewportIntersection=i.isIntersecting)})},{root:this.element}),t.addEventListener(de.ReadyEvent.type,this,{once:!0}),t.addEventListener(de.SizeUpdatedEvent.type,this),t.addEventListener(de.RenderEvent.type,this)}handleEvent(t){switch(t.type){case de.ReadyEvent.type:case de.SizeUpdatedEvent.type:this.updateSize();break;case de.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(de.ReadyEvent.type,this),this.viewer.removeEventListener(de.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(de.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const t=this.viewer.getSize();this.renderer.setSize(t.width,t.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(t){this.scene.add(t.threeElement),this.intersectionObserver.observe(t.domElement)}removeObject(t){this.scene.remove(t.threeElement),this.intersectionObserver.unobserve(t.domElement)}},Er=(t=>(t.image="image",t.html="html",t.element="element",t.imageLayer="imageLayer",t.videoLayer="videoLayer",t.elementLayer="elementLayer",t.polygon="polygon",t.polygonPixels="polygonPixels",t.polyline="polyline",t.polylinePixels="polylinePixels",t.square="square",t.rect="rect",t.circle="circle",t.ellipse="ellipse",t.path="path",t))(Er||{});function Aa(t,e=!1){const i=[];if(Object.keys(Er).forEach(n=>{t[n]&&i.push(n)}),i.length===0&&!e)throw new se(`missing marker content, either ${Object.keys(Er).join(", ")}`);if(i.length>1)throw new se(`multiple marker content, either ${Object.keys(Er).join(", ")}`);return i[0]}var uf=class{constructor(t,e,i){if(this.viewer=t,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!i.id)throw new se("missing marker id");this.type=Aa(i),this.createElement(),this.update(i)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(t){const e=Aa(t,!0);if(e!==void 0&&e!==this.type)throw new se(`cannot change marker ${t.id} type`);if(this.config=te.deepmerge(this.config,t),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),te.isNil(this.config.visible)&&(this.config.visible=!0),te.isNil(this.config.zIndex)&&(this.config.zIndex=1),te.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const i=this.config.rotation;typeof i=="object"?this.config.rotation={yaw:i.yaw?te.parseAngle(i.yaw,!0,!1):0,pitch:i.pitch?te.parseAngle(i.pitch,!0,!1):0,roll:i.roll?te.parseAngle(i.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:te.parseAngle(i,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=te.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(t,e,i=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const n={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(t||e){const s=te.getPosition(this.viewer.container);n.top=e-s.y+10,n.left=t-s.x,n.box={width:20,height:20}}else n.top=this.state.position2D.y,n.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,o=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,o*=this.config.hoverScale.amount),n.top=s.y-o*this.state.anchor.y+o/2,n.left=s.x-r*this.state.anchor.x+r/2,n.box={width:r,height:o}}this.tooltip?i?this.tooltip.update(this.config.tooltip.content,n):this.tooltip.move(n):this.tooltip=this.viewer.createTooltip(n)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},el=class extends uf{get domElement(){return this.element}constructor(t,e,i){super(t,e,i)}afterCreateElement(){this.element[rt]=this}destroy(){delete this.element[rt],super.destroy()}update(t){super.update(t);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&te.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},Ir=class extends el{constructor(t,e,i){super(t,e,i)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:t,zoomLevel:e,hoveringMarker:i}){this.__updateSize();const n=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return n.x-=this.state.size.width*this.state.anchor.x,n.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&n.x+this.state.size.width>=0&&n.x-this.state.size.width<=this.viewer.state.size.width&&n.y+this.state.size.height>=0&&n.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${n.x}px ${n.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:t,mouseover:this===i}),n):null}update(t){if(super.update(t),!te.isExtendedPosition(this.config.position))throw new se(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new se(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||Ta:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?Ne.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const t=this.domElement,e=!this.state.visible||!this.state.size;if(e&&t.classList.add("psv-marker--transparent"),this.isSvg()){const i=t.firstElementChild.getBoundingClientRect();this.state.size={width:i.width,height:i.height}}else this.state.size={width:t.offsetWidth,height:t.offsetHeight};e&&t.classList.remove("psv-marker--transparent"),this.isSvg()&&(t.style.width=this.state.size.width+"px",t.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:t,viewerPosition:e,mouseover:i}){i!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let n=1;if(typeof this.config.scale=="function")n=this.config.scale(t,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;n*=s+(r-s)*Si.EASINGS.inQuad(t/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,o=Ne.degToRad(this.viewer.state.hFov)/2,a=Math.abs(te.getShortestArc(this.state.position.yaw,e.yaw));n*=r+(s-r)*Si.EASINGS.outQuad(Math.max(0,(o-a)/o))}}i&&this.config.hoverScale&&(n*=this.config.hoverScale.amount),this.domElement.style.scale=`${n}`}},_E=`// https://www.8thwall.com/playground/chromakey-threejs

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
`,xE=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,EE=class extends Ci{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}set alpha(t){this.uniforms.alpha.value=t}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(t){this.uniforms.keying.value=t?.enabled===!0,t?.enabled&&(typeof t.color=="object"&&"r"in t.color?this.uniforms.color.value.set(t.color.r/255,t.color.g/255,t.color.b/255):this.uniforms.color.value.set(t.color??65280),this.uniforms.similarity.value=t.similarity??.2,this.uniforms.smoothness.value=t.smoothness??.2)}constructor(t){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:t?.map},repeat:{value:new qe(1,1)},offset:{value:new qe(0,0)},alpha:{value:t?.alpha??1},keying:{value:!1},color:{value:new Je(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:xE,fragmentShader:_E}),this.chromaKey=t?.chromaKey}};function ME({src:t,withCredentials:e,muted:i,autoplay:n}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=n,s.muted=i,s.preload="metadata",t instanceof MediaStream?s.srcObject=t:s.src=t,s}function yE(t,e,i){const[n,s]=t,[r,o]=e,a=te.greatArcDistance(t,e),l=Math.sin((1-i)*a)/Math.sin(a),h=Math.sin(i*a)/Math.sin(a),d=l*Math.cos(s)*Math.cos(n)+h*Math.cos(o)*Math.cos(r),f=l*Math.cos(s)*Math.sin(n)+h*Math.cos(o)*Math.sin(r),p=l*Math.sin(s)+h*Math.sin(o);return[Math.atan2(f,d),Math.atan2(p,Math.sqrt(d*d+f*f))]}function ff(t){const e=[t[0]];let i=0;for(let n=1;n<t.length;n++){const s=t[n-1][0]-t[n][0];s>Math.PI?i+=1:s<-Math.PI&&(i-=1),e.push([t[n][0]+i*2*Math.PI,t[n][1]])}return e}function pf(t){const i=ff(t).reduce((n,s)=>[n[0]+s[0],n[1]+s[1]]);return[te.parseAngle(i[0]/t.length),i[1]/t.length]}function wE(t){const e=ff(t);let i=0;const n=[];for(let r=0;r<e.length-1;r++){const o=te.greatArcDistance(e[r],e[r+1])*Si.SPHERE_RADIUS;n.push(o),i+=o}let s=0;for(let r=0;r<e.length-1;r++){if(s+n[r]>i/2){const o=(i/2-s)/n[r];return yE(e[r],e[r+1],o)}s+=n[r]}return e[Math.round(e.length/2)]}var hr=new U,Tc=new U,To=new U,Ac=new U,Cc=new U,Rc=new U;function SE(t,e,i){hr.copy(i).normalize(),Tc.crossVectors(t,e).normalize(),To.crossVectors(Tc,t).normalize(),Ac.copy(t).multiplyScalar(-hr.dot(To)),Cc.copy(To).multiplyScalar(hr.dot(t));const n=new U().addVectors(Ac,Cc).normalize();return Rc.crossVectors(n,hr),n.applyAxisAngle(Rc,.01).multiplyScalar(Si.SPHERE_RADIUS)}var bE=class extends uf{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(t,e,i){super(t,e,i)}is3d(){return!0}createElement(){const t=new EE({alpha:0}),e=new Cs(1,1),i=new Ht(e,t);i.userData={[rt]:this},Object.defineProperty(i,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(n){this.userData[rt].config.visible=n}}),this.element=new cn().add(i),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[rt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(t){super.update(t);const e=this.threeMesh,i=e.parent,n=e.material;if(te.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new se(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new se(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,i.position),i.lookAt(0,i.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const o=new U;return o.fromBufferAttribute(s,r),e.localToWorld(o)})}else{if(this.config.position?.length!==4)throw new se(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(l=>this.viewer.dataHelper.cleanPosition(l))}catch(l){throw new se(`invalid marker ${this.id} position`,l)}const r=s.map(l=>this.viewer.dataHelper.sphericalCoordsToVector3(l)),o=pf(s.map(({yaw:l,pitch:h})=>[l,h]));this.state.position={yaw:o[0],pitch:o[1]},this.state.positions3D=r;const a=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((l,h)=>{a.setX(h,l.x),a.setY(h,l.y),a.setZ(h,l.z)}),a.needsUpdate=!0,this.__setTextureWrap(n)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){n.map?.dispose();const s=ME({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new em(s);n.map=r,n.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(n.alpha=this.config.opacity,te.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(n)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else n.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){n.map?.dispose();const s=new yt;n.map=s,n.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(te.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:r.width,height:r.height},this.__setTextureWrap(n)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,n.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else n.alpha=this.config.opacity;break}n.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(t){const e=t.userData[rt];if(!e||!e.height||!e.width){t.repeat.set(1,1),t.offset.set(0,0);return}const i=this.config.position.map(f=>this.viewer.dataHelper.cleanPosition(f)),n=te.greatArcDistance([i[0].yaw,i[0].pitch],[i[1].yaw,i[1].pitch]),s=te.greatArcDistance([i[3].yaw,i[3].pitch],[i[2].yaw,i[2].pitch]),r=te.greatArcDistance([i[1].yaw,i[1].pitch],[i[2].yaw,i[2].pitch]),o=te.greatArcDistance([i[0].yaw,i[0].pitch],[i[3].yaw,i[3].pitch]),a=(n+s)/(r+o),l=e.width/e.height;let h=0,d=0;a<l?h=l-a:d=1/l-1/a,t.repeat.set(1-h,1-d),t.offset.set(h/2,d/2)}},TE=class extends el{constructor(t,e,i){super(t,e,i),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new pE(this.element),this.object.userData={[rt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(t){this.userData[rt].config.visible=t}}),this.afterCreateElement()}destroy(){delete this.object.userData[rt],delete this.object,super.destroy()}render({viewerPosition:t,zoomLevel:e}){const i=this.domElement;if(this.state.size={width:i.offsetWidth,height:i.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:t,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(t){if(super.update(t),!te.isExtendedPosition(this.config.position))throw new se(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new se(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,i=this.domElement;i.classList.add("psv-marker--css3d"),i.childNodes.forEach(n=>n.remove()),i.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},AE=class extends Ir{constructor(t,e,i){super(t,e,i)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(t){const e=super.render(t);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:t.viewerPosition,zoomLevel:t.zoomLevel,viewerSize:this.viewer.state.size}),e}update(t){super.update(t);const e=this.domElement;if(this.config.image&&!this.config.size)throw new se(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(i=>i.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},CE=class extends el{constructor(t,e,i){super(t,e,i)}createElement(){this.element=document.createElementNS(Dr,"path"),this.element[rt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const t=this.__getAllPolyPositions();if(t[0].length>(this.isPolygon?2:1)){const i=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),n=t.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(o=>`${o.x-i.x},${o.y-i.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",n),this.domElement.setAttributeNS(null,"transform",`translate(${i.x} ${i.y})`),i}else return null}update(t){super.update(t);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([n,s])=>{e.setAttributeNS(null,te.dasherize(n),s)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let n=this.config[this.type];if(!Array.isArray(n[0])&&typeof n[0]!="object")for(let s=0;s<n.length;s++)n.splice(s,2,[n[s],n[s+1]]);if(!Array.isArray(n[0][0])&&typeof n[0][0]!="object"&&(n=[n]),this.isPolyline&&n.length>1)throw new se("polylines cannot have holes");this.isPixels?this.definition=n.map(s=>s.map(r=>{let o;return te.isExtendedPosition(r)?o=this.viewer.dataHelper.cleanPosition(r):o=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:r[0],textureY:r[1]}),[o.yaw,o.pitch]})):this.definition=n.map(s=>s.map(r=>{let o;return te.isExtendedPosition(r)?o=this.viewer.dataHelper.cleanPosition(r):o=this.viewer.dataHelper.cleanPosition({yaw:r[0],pitch:r[1]}),[o.yaw,o.pitch]}))}catch(n){throw new se(`invalid marker ${this.id} position`,n)}const i=this.isPolygon?pf(this.coords[0]):wE(this.coords[0]);this.state.position={yaw:i[0],pitch:i[1]},this.positions3D=this.coords.map(n=>n.map(s=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:s[0],pitch:s[1]}))),this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(t=>this.__getPolyPositions(t))}__getPolyPositions(t){const e=t.length,i=t.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),n=[];return i.forEach((s,r)=>{s.visible||[r===0?i[e-1]:i[r-1],r===e-1?i[0]:i[r+1]].forEach(a=>{a.visible&&n.push({visible:a.vector,invisible:s.vector,index:r})})}),n.reverse().forEach(s=>{i.splice(s.index,0,{vector:SE(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),i.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},RE=class extends Ir{get svgElement(){return this.domElement.firstElementChild}constructor(t,e,i){super(t,e,i)}isSvg(){return!0}createElement(){const t=this.type==="square"?"rect":this.type,e=document.createElementNS(Dr,t);this.element=document.createElementNS(Dr,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(t){super.update(t);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([i,n])=>{e.setAttributeNS(null,i,n)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([i,n])=>{e.setAttributeNS(null,te.dasherize(i),n)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},PE=te.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(t){return t?(t===!0&&(t=Ta),typeof t=="number"&&(t={amount:t}),{...Ta,...t}):null}});function LE(t){switch(Aa(t,!1)){case"image":case"html":case"element":return AE;case"imageLayer":case"videoLayer":return bE;case"elementLayer":return TE;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return CE;case"square":case"rect":case"circle":case"ellipse":case"path":return RE;default:throw new se("invalid marker type")}}var Fs=class extends Gr{constructor(t,e){super(t,e),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",i=>i.preventDefault()),this.svgContainer=document.createElementNS(Dr,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new gE(t),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}init(){super.init(),te.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(de.ClickEvent.type,this),this.viewer.addEventListener(de.DoubleClickEvent.type,this),this.viewer.addEventListener(de.RenderEvent.type,this),this.viewer.addEventListener(de.ConfigChangedEvent.type,this),this.viewer.addEventListener(de.ObjectEnterEvent.type,this),this.viewer.addEventListener(de.ObjectHoverEvent.type,this),this.viewer.addEventListener(de.ObjectLeaveEvent.type,this),this.viewer.addEventListener(de.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(rt),this.viewer.removeEventListener(de.ClickEvent.type,this),this.viewer.removeEventListener(de.DoubleClickEvent.type,this),this.viewer.removeEventListener(de.RenderEvent.type,this),this.viewer.removeEventListener(de.ObjectEnterEvent.type,this),this.viewer.removeEventListener(de.ObjectHoverEvent.type,this),this.viewer.removeEventListener(de.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(de.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(t){switch(t.type){case de.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case de.RenderEvent.type:this.renderMarkers();break;case de.ClickEvent.type:this.__onClick(t,!1);break;case de.DoubleClickEvent.type:this.__onClick(t,!0);break;case de.ObjectEnterEvent.type:case de.ObjectLeaveEvent.type:case de.ObjectHoverEvent.type:if(t.userDataKey===rt){const e=t.originalEvent,i=t.object.userData[rt];switch(t.type){case de.ObjectEnterEvent.type:i.config.style?.cursor?this.viewer.setCursor(i.config.style.cursor):(i.config.tooltip||i.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(e,i);break;case de.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(i);break;case de.ObjectHoverEvent.type:this.__onHoverMarker(e,i);break}}break;case"mouseenter":{const e=this.__getTargetMarker(te.getEventTarget(t));this.__onEnterMarker(t,e);break}case"mouseleave":{const e=this.__getTargetMarker(te.getEventTarget(t));this.__onLeaveMarker(e);break}case"mousemove":{const e=this.__getTargetMarker(te.getEventTarget(t),!0);this.__onHoverMarker(t,e);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(t=>{t.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new gs)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(t=>{t.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new vs)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!0,t.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!1,t.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(t,e=!0){if(this.markers[t.id])throw new se(`marker "${t.id}" already exists`);const i=new(LE(t))(this.viewer,this,t);i.isPoly()?this.svgContainer.appendChild(i.domElement):i.isCss3d()?this.css3DContainer.addObject(i):i.is3d()?this.viewer.renderer.addObject(i.threeElement):this.container.appendChild(i.domElement),this.markers[i.id]=i,this.state.showAllTooltips&&(i.state.staticTooltip=!0),e&&this.__afterChangeMarkers()}getMarker(t){const e=typeof t=="object"?t.id:t;if(!this.markers[e])throw new se(`cannot find marker "${e}"`);return this.markers[e]}getCurrentMarker(){return this.state.currentMarker}updateMarker(t,e=!0){const i=this.getMarker(t.id);i.update(t),e&&(this.__afterChangeMarkers(),(i===this.state.hoveringMarker&&i.config.tooltip?.trigger==="hover"||i.state.staticTooltip)&&i.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(t,e=!0){const i=this.getMarker(t);i.isPoly()?this.svgContainer.removeChild(i.domElement):i.isCss3d()?this.css3DContainer.removeObject(i):i.is3d()?this.viewer.renderer.removeObject(i.threeElement):this.container.removeChild(i.domElement),this.state.hoveringMarker===i&&(this.state.hoveringMarker=null),this.state.currentMarker===i&&(this.state.currentMarker=null),i.destroy(),delete this.markers[i.id],e&&this.__afterChangeMarkers()}removeMarkers(t,e=!0){t.forEach(i=>this.removeMarker(i,!1)),e&&this.__afterChangeMarkers()}setMarkers(t,e=!0){this.clearMarkers(!1),t?.forEach(i=>{this.addMarker(i,!1)}),e&&this.__afterChangeMarkers()}clearMarkers(t=!0){Object.keys(this.markers).forEach(e=>{this.removeMarker(e,!1)}),t&&this.__afterChangeMarkers()}gotoMarker(t,e=this.config.gotoMarkerSpeed){const i=this.getMarker(t);return e?this.viewer.animate({...i.state.position,zoom:i.config.zoomLvl,speed:e}).then(()=>{this.dispatchEvent(new ba(i))}):(this.viewer.rotate(i.state.position),te.isNil(i.config.zoomLvl)||this.viewer.zoom(i.config.zoomLvl),this.dispatchEvent(new ba(i)),Promise.resolve())}hideMarker(t){this.toggleMarker(t,!1)}showMarker(t){this.toggleMarker(t,!0)}showMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!0,e.showTooltip()}hideMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!1,e.hideTooltip()}toggleMarker(t,e){const i=this.getMarker(t);i.config.visible=te.isNil(e)?!i.config.visible:e,this.renderMarkers()}showMarkerPanel(t){const e=this.getMarker(t);e.config.content?this.viewer.panel.show({id:Qn,content:e.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(Qn)}toggleMarkersList(){this.viewer.panel.isVisible(In)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let t=[];Object.values(this.markers).forEach(i=>{i.config.visible&&!i.config.hideList&&t.push(i)});const e=new hf(t);this.dispatchEvent(e),t=e.markers,this.viewer.panel.show({id:In,content:uE(t,this.viewer.config.lang[Ss.id]),noMargin:!0,clickHandler:i=>{const n=te.getClosest(i,".psv-panel-menu-item"),s=n?n.dataset[rt]:void 0;if(s){const r=this.getMarker(s);this.dispatchEvent(new Zu(r)),this.gotoMarker(r.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(In)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const t=this.viewer.getZoomLevel(),e=this.viewer.getPosition(),i=this.state.hoveringMarker;Object.values(this.markers).forEach(n=>{let s=n.config.visible,r=!1,o=null;s&&(o=n.render({viewerPosition:e,zoomLevel:t,hoveringMarker:i}),s=!!o),r=n.state.visible!==s,n.state.visible=s,n.state.position2D=o,n.domElement&&te.toggleClass(n.domElement,"psv-marker--visible",s),s?n.state.staticTooltip?n.showTooltip():n!==this.state.hoveringMarker&&n.hideTooltip():n.hideTooltip(),r&&(this.dispatchEvent(new Ou(n,s)),(n.is3d()||n.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(t,e=!1){if(t instanceof Node){const i=e?te.getClosest(t,".psv-marker"):t;return i?i[rt]:void 0}else return Array.isArray(t)?t.map(i=>i.userData[rt]).filter(i=>!!i).sort((i,n)=>n.config.zIndex-i.config.zIndex)[0]:null}__onEnterMarker(t,e){e&&(this.state.hoveringMarker=e,this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,this.dispatchEvent(new Wu(e)),e instanceof Ir&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onLeaveMarker(t){t&&(this.dispatchEvent(new Hu(t)),t instanceof Ir&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"?t.hideTooltip():t.state.staticTooltip&&t.showTooltip())}__onHoverMarker(t,e){e&&(this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,(e.isPoly()||e.is3d()||e.isCss3d())&&e.config.tooltip?.trigger==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onClick(t,e){const i=this.__getTargetMarker(t.data.objects),s=this.__getTargetMarker(t.data.target,!0)||i;this.state.currentMarker&&this.state.currentMarker!==s&&(this.dispatchEvent(new Qu(this.state.currentMarker)),this.viewer.panel.hide(Qn),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),s&&(this.state.currentMarker=s,this.dispatchEvent(new qu(s,e,t.data.rightclick)),this.config.clickEventOnMarker?t.data.marker=s:t.stopImmediatePropagation(),this.markers[s.id]&&!t.data.rightclick&&(s.config.tooltip?.trigger==="click"?s.tooltip?this.hideMarkerTooltip(s.id):this.showMarkerTooltip(s.id):this.showMarkerPanel(s.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new rf(this.getMarkers()))}__refreshUi(){const t=Object.values(this.markers).filter(e=>!e.config.hideList).length;t===0?(this.viewer.panel.hide(Qn),this.viewer.panel.hide(In)):this.viewer.panel.isVisible(In)?this.showMarkersList():this.viewer.panel.isVisible(Qn)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(Ss.id,!1)?.toggle(t>0),this.viewer.navbar.getButton(Yr.id,!1)?.toggle(t>0)}__checkObjectsObserver(){Object.values(this.markers).some(e=>e.is3d())?this.viewer.observeObjects(rt):this.viewer.unobserveObjects(rt)}};Fs.id="markers";Fs.VERSION="5.13.3";Fs.configParser=PE;Fs.readonlyOptions=["markers"];fi.lang[Ss.id]="Markers";fi.lang[Yr.id]="Markers list";Wr(Ss,"caption:left");Wr(Yr,"caption:left");function DE(t,e=0){var i=[];const n={tree:"./icons/leaf.circle.fill@2x.png"};return t.forEach(s=>{const r={id:s.id,position:{yaw:s.position.yaw-e,pitch:s.position.pitch},size:{width:s.size.width,height:s.size.height},image:n[s.type],tooltip:`<strong>${s.name}</strong>`,anchor:"bottom center",data:{name:s.name,image:s.image,description:s.description,type:s.type},content:IE(s)};i.push(r)}),i}function IE(t){return t.image?`
        <h2>${t.name}</h2>
        <img src="${t.image}" alt="${t.name}" style="width: 100%; height: auto; max-height: calc(80% - 80px); object-fit: contain; object-position: left; border-radius: 5px;">
        <p>${t.description}</p>
    `:`
            <h2>${t.name}</h2>
            <p>${t.description}</p>
        `}async function UE(t){const e=await fetch(t);if(!e.ok)throw new Error(`Failed to load ${t}: ${e.statusText}`);const i=await e.json();return await NE(i)}async function NE(t){var e=[];for(const i of t){const n=await DE(i.markers,i.heading),s=i.links.map(o=>({nodeId:o.nodeId,position:{yaw:o.position.yaw-i.heading,pitch:o.position.pitch}})),r={id:i.id,panorama:i.panoramaFile,links:s,name:i.name,markers:n,panoData:{poseHeading:i.heading*180/Math.PI}};e.push(r)}return e}UE("./data.json").then(t=>{var e=[];t.forEach(n=>{e.push({id:n.id,name:n.name,panorama:n.panorama})});const i=new Nx({plugins:[[Fs,{defaultHoverScale:!0}],[Us,{positionMode:"manual",nodes:t,preload:!0,showLinkTooltip:!1,renderMode:"2d"}],[Os,{items:e}]],container:document.querySelector("#viewer"),navbar:["zoom","move","markersList","caption","gallery","fullscreen"],rendererParameters:{debug:!1}});i.addEventListener("ready",()=>{console.log("Viewer is ready!")},{once:!0}),i.addEventListener("click",({data:n})=>{const s=OE(n.yaw,n.pitch,i);console.log(`${n.rightclick?"right ":""}clicked at yaw: ${s.yaw}, pitch: ${s.pitch}`)})});function OE(t,e,i,n=0,s=-16){const r=i.defaultZoomLvl||50*(Math.PI/180),o=i.container,a=o.clientHeight/r,l=r*(o.clientWidth/o.clientHeight),h=o.clientWidth/l,d=n/h,f=s/a;return{yaw:t+d,pitch:e+f}}
