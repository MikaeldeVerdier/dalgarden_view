(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="175",Zf=0,Ml=1,Kf=2,eh=1,Jf=2,Mi=3,qi=0,Ut=1,Si=2,Vi=0,Fn=1,Sl=2,bl=3,Tl=4,Qf=5,cn=100,ep=101,tp=102,ip=103,np=104,sp=200,rp=201,ap=202,op=203,za=204,Ha=205,lp=206,cp=207,hp=208,dp=209,up=210,fp=211,pp=212,mp=213,gp=214,Va=0,Ga=1,Wa=2,Hn=3,Xa=4,Ya=5,qa=6,ja=7,th=0,vp=1,_p=2,Gi=0,ih=1,yp=2,xp=3,wp=4,Ep=5,Mp=6,Sp=7,nh=300,Vn=301,Gn=302,$a=303,Za=304,Gr=306,Ka=1e3,un=1001,Ja=1002,ri=1003,bp=1004,Gs=1005,Vt=1006,oa=1007,zi=1008,Ri=1009,sh=1010,rh=1011,Ms=1012,Go=1013,fn=1014,bi=1015,Ps=1016,Wo=1017,Xo=1018,Ss=1020,ah=35902,oh=1021,lh=1022,si=1023,ch=1024,hh=1025,bs=1026,Ts=1027,dh=1028,Yo=1029,uh=1030,qo=1031,jo=1033,_r=33776,yr=33777,xr=33778,wr=33779,Qa=35840,eo=35841,to=35842,io=35843,no=36196,so=37492,ro=37496,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,vo=37818,_o=37819,yo=37820,xo=37821,Er=36492,wo=36494,Eo=36495,fh=36283,Mo=36284,So=36285,bo=36286,Tp=3200,Ap=3201,Cp=0,Rp=1,Bi="",$t="srgb",pn="srgb-linear",Cr="linear",et="srgb",_n=7680,Al=519,Pp=512,Lp=513,Dp=514,ph=515,Ip=516,kp=517,Up=518,Np=519,Cl=35044,Rl="300 es",Ti=2e3,Rr=2001;class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pl=1234567;const os=Math.PI/180,As=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function $o(i,e){return(i%e+e)%e}function Op(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Fp(i,e,t){return i!==e?(t-i)/(e-i):0}function ls(i,e,t){return(1-t)*i+t*e}function Bp(i,e,t,n){return ls(i,e,1-Math.exp(-t*n))}function zp(i,e=1){return e-Math.abs($o(i,e*2)-e)}function Hp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wp(i,e){return i+Math.random()*(e-i)}function Xp(i){return i*(.5-Math.random())}function Yp(i){i!==void 0&&(Pl=i);let e=Pl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qp(i){return i*os}function jp(i){return i*As}function $p(i){return(i&i-1)===0&&i!==0}function Zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jp(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+n)/2),d=a((e+n)/2),f=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*f,l*p,o*h);break;case"YZY":i.set(l*p,o*d,l*f,o*h);break;case"ZXZ":i.set(l*f,l*p,o*d,o*h);break;case"XZX":i.set(o*d,l*g,l*m,o*h);break;case"YXY":i.set(l*m,o*d,l*g,o*h);break;case"ZYZ":i.set(l*g,l*m,o*d,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ue={DEG2RAD:os,RAD2DEG:As,generateUUID:Yn,clamp:Oe,euclideanModulo:$o,mapLinear:Op,inverseLerp:Fp,lerp:ls,damp:Bp,pingpong:zp,smoothstep:Hp,smootherstep:Vp,randInt:Gp,randFloat:Wp,randFloatSpread:Xp,seededRandom:Yp,degToRad:qp,radToDeg:jp,isPowerOfTwo:$p,ceilPowerOfTwo:Zp,floorPowerOfTwo:Kp,setQuaternionFromProperEuler:Jp,normalize:Rt,denormalize:kn};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,s,r,a,o,l,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h)}set(e,t,n,s,r,a,o,l,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],d=n[4],f=n[7],p=n[2],m=n[5],g=n[8],v=s[0],u=s[3],c=s[6],b=s[1],S=s[4],w=s[7],L=s[2],C=s[5],A=s[8];return r[0]=a*v+o*b+l*L,r[3]=a*u+o*S+l*C,r[6]=a*c+o*w+l*A,r[1]=h*v+d*b+f*L,r[4]=h*u+d*S+f*C,r[7]=h*c+d*w+f*A,r[2]=p*v+m*b+g*L,r[5]=p*u+m*S+g*C,r[8]=p*c+m*w+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8];return t*a*d-t*o*h-n*r*d+n*o*l+s*r*h-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],f=d*a-o*h,p=o*l-d*r,m=h*r-a*l,g=t*f+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(s*h-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=p*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*l-h*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new De;function mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qp(){const i=Pr("canvas");return i.style.display="block",i}const Ll={};function Mr(i){i in Ll||(Ll[i]=!0,console.warn(i))}function em(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function tm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function im(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dl=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nm(){const i={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?Cr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pn]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:Dl,fromXYZ:Il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Dl,fromXYZ:Il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const We=nm();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yn;class sm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yn===void 0&&(yn=Pr("canvas")),yn.width=e.width,yn.height=e.height;const s=yn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=yn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rm=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ca(s[a].image)):r.push(ca(s[a]))}else r=ca(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;class Et extends Xn{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=un,s=un,r=Vt,a=zi,o=si,l=Ri,h=Et.DEFAULT_ANISOTROPY,d=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Yn(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ka:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ka:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=nh;Et.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,h=l[0],d=l[4],f=l[8],p=l[1],m=l[5],g=l[9],v=l[2],u=l[6],c=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-v)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+v)<.1&&Math.abs(g+u)<.1&&Math.abs(h+m+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(h+1)/2,w=(m+1)/2,L=(c+1)/2,C=(d+p)/4,A=(f+v)/4,U=(g+u)/4;return S>w&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=A/n):w>L?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=U/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=U/r),this.set(n,s,r,t),this}let b=Math.sqrt((u-g)*(u-g)+(f-v)*(f-v)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(u-g)/b,this.y=(f-v)/b,this.z=(p-d)/b,this.w=Math.acos((h+m+c-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class om extends Xn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Et(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends om{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gh extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lm extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],h=n[s+1],d=n[s+2],f=n[s+3];const p=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==p||h!==m||d!==g){let u=1-o;const c=l*p+h*m+d*g+f*v,b=c>=0?1:-1,S=1-c*c;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,c*b);u=Math.sin(u*C)/L,o=Math.sin(o*C)/L}const w=o*b;if(l=l*u+p*w,h=h*u+m*w,d=d*u+g*w,f=f*u+v*w,u===1-o){const L=1/Math.sqrt(l*l+h*h+d*d+f*f);l*=L,h*=L,d*=L,f*=L}}e[t]=l,e[t+1]=h,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],d=n[s+3],f=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*f+l*m-h*p,e[t+1]=l*g+d*p+h*f-o*m,e[t+2]=h*g+d*m+o*p-l*f,e[t+3]=d*g-o*f-l*p-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),d=o(s/2),f=o(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*d*f+h*m*g,this._y=h*m*f-p*d*g,this._z=h*d*g+p*m*f,this._w=h*d*f-p*m*g;break;case"YXZ":this._x=p*d*f+h*m*g,this._y=h*m*f-p*d*g,this._z=h*d*g-p*m*f,this._w=h*d*f+p*m*g;break;case"ZXY":this._x=p*d*f-h*m*g,this._y=h*m*f+p*d*g,this._z=h*d*g+p*m*f,this._w=h*d*f-p*m*g;break;case"ZYX":this._x=p*d*f-h*m*g,this._y=h*m*f+p*d*g,this._z=h*d*g-p*m*f,this._w=h*d*f+p*m*g;break;case"YZX":this._x=p*d*f+h*m*g,this._y=h*m*f+p*d*g,this._z=h*d*g-p*m*f,this._w=h*d*f-p*m*g;break;case"XZY":this._x=p*d*f-h*m*g,this._y=h*m*f-p*d*g,this._z=h*d*g+p*m*f,this._w=h*d*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],d=t[6],f=t[10],p=n+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,d=t._w;return this._x=n*d+a*o+s*h-r*l,this._y=s*d+a*l+r*o-n*h,this._z=r*d+a*h+n*l-s*o,this._w=a*d-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,o),f=Math.sin((1-t)*d)/h,p=Math.sin(t*d)/h;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*h+a*f-o*d,this.y=n+l*d+o*h-r*f,this.z=s+l*f+r*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new I,kl=new Ki;class qn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kn),Xs.subVectors(this.max,Kn),xn.subVectors(e.a,Kn),wn.subVectors(e.b,Kn),En.subVectors(e.c,Kn),Di.subVectors(wn,xn),Ii.subVectors(En,wn),en.subVectors(xn,En);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-en.z,en.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,en.z,0,-en.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-en.y,en.x,0];return!da(t,xn,wn,En,Xs)||(t=[1,0,0,0,1,0,0,0,1],!da(t,xn,wn,En,Xs))?!1:(Ys.crossVectors(Di,Ii),t=[Ys.x,Ys.y,Ys.z],da(t,xn,wn,En,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new I,new I,new I,new I,new I,new I,new I,new I],Qt=new I,Ws=new qn,xn=new I,wn=new I,En=new I,Di=new I,Ii=new I,en=new I,Kn=new I,Xs=new I,Ys=new I,tn=new I;function da(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){tn.fromArray(i,r);const o=s.x*Math.abs(tn.x)+s.y*Math.abs(tn.y)+s.z*Math.abs(tn.z),l=e.dot(tn),h=t.dot(tn),d=n.dot(tn);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>o)return!1}return!0}const cm=new qn,Jn=new I,ua=new I;class Wr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jn.subVectors(e,this.center);const t=Jn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Jn,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jn.copy(e.center).add(ua)),this.expandByPoint(Jn.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new I,fa=new I,qs=new I,ki=new I,pa=new I,js=new I,ma=new I;class Ko{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fa.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(fa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(qs),o=ki.dot(this.direction),l=-ki.dot(qs),h=ki.lengthSq(),d=Math.abs(1-a*a);let f,p,m,g;if(d>0)if(f=a*l-o,p=a*o-l,g=r*d,f>=0)if(p>=-g)if(p<=g){const v=1/d;f*=v,p*=v,m=f*(f+a*p+2*o)+p*(a*f+p+2*l)+h}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+h;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+h;else p<=-g?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+h):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fa).addScaledVector(qs,p),m}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),d>=0?(r=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){pa.subVectors(t,e),js.subVectors(n,e),ma.crossVectors(pa,js);let a=this.direction.dot(ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(js.crossVectors(ki,js));if(l<0)return null;const h=o*this.direction.dot(pa.cross(ki));if(h<0||l+h>a)return null;const d=-o*ki.dot(ma);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,s,r,a,o,l,h,d,f,p,m,g,v,u){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h,d,f,p,m,g,v,u)}set(e,t,n,s,r,a,o,l,h,d,f,p,m,g,v,u){const c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=s,c[1]=r,c[5]=a,c[9]=o,c[13]=l,c[2]=h,c[6]=d,c[10]=f,c[14]=p,c[3]=m,c[7]=g,c[11]=v,c[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Mn.setFromMatrixColumn(e,0).length(),r=1/Mn.setFromMatrixColumn(e,1).length(),a=1/Mn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=a*d,m=a*f,g=o*d,v=o*f;t[0]=l*d,t[4]=-l*f,t[8]=h,t[1]=m+g*h,t[5]=p-v*h,t[9]=-o*l,t[2]=v-p*h,t[6]=g+m*h,t[10]=a*l}else if(e.order==="YXZ"){const p=l*d,m=l*f,g=h*d,v=h*f;t[0]=p+v*o,t[4]=g*o-m,t[8]=a*h,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=v+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*d,m=l*f,g=h*d,v=h*f;t[0]=p-v*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=v-p*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*d,m=a*f,g=o*d,v=o*f;t[0]=l*d,t[4]=g*h-m,t[8]=p*h+v,t[1]=l*f,t[5]=v*h+p,t[9]=m*h-g,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*h,g=o*l,v=o*h;t[0]=l*d,t[4]=v-p*f,t[8]=g*f+m,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-h*d,t[6]=m*f+g,t[10]=p-v*f}else if(e.order==="XZY"){const p=a*l,m=a*h,g=o*l,v=o*h;t[0]=l*d,t[4]=-f,t[8]=h*d,t[1]=p*f+v,t[5]=a*d,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*d,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hm,e,dm)}lookAt(e,t,n){const s=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Ui.crossVectors(n,Ft),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Ui.crossVectors(n,Ft)),Ui.normalize(),$s.crossVectors(Ft,Ui),s[0]=Ui.x,s[4]=$s.x,s[8]=Ft.x,s[1]=Ui.y,s[5]=$s.y,s[9]=Ft.y,s[2]=Ui.z,s[6]=$s.z,s[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],d=n[1],f=n[5],p=n[9],m=n[13],g=n[2],v=n[6],u=n[10],c=n[14],b=n[3],S=n[7],w=n[11],L=n[15],C=s[0],A=s[4],U=s[8],E=s[12],x=s[1],R=s[5],G=s[9],B=s[13],j=s[2],$=s[6],X=s[10],K=s[14],H=s[3],ae=s[7],fe=s[11],we=s[15];return r[0]=a*C+o*x+l*j+h*H,r[4]=a*A+o*R+l*$+h*ae,r[8]=a*U+o*G+l*X+h*fe,r[12]=a*E+o*B+l*K+h*we,r[1]=d*C+f*x+p*j+m*H,r[5]=d*A+f*R+p*$+m*ae,r[9]=d*U+f*G+p*X+m*fe,r[13]=d*E+f*B+p*K+m*we,r[2]=g*C+v*x+u*j+c*H,r[6]=g*A+v*R+u*$+c*ae,r[10]=g*U+v*G+u*X+c*fe,r[14]=g*E+v*B+u*K+c*we,r[3]=b*C+S*x+w*j+L*H,r[7]=b*A+S*R+w*$+L*ae,r[11]=b*U+S*G+w*X+L*fe,r[15]=b*E+S*B+w*K+L*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],d=e[2],f=e[6],p=e[10],m=e[14],g=e[3],v=e[7],u=e[11],c=e[15];return g*(+r*l*f-s*h*f-r*o*p+n*h*p+s*o*m-n*l*m)+v*(+t*l*m-t*h*p+r*a*p-s*a*m+s*h*d-r*l*d)+u*(+t*h*f-t*o*m-r*a*f+n*a*m+r*o*d-n*h*d)+c*(-s*o*d-t*l*f+t*o*p+s*a*f-n*a*p+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],d=e[8],f=e[9],p=e[10],m=e[11],g=e[12],v=e[13],u=e[14],c=e[15],b=f*u*h-v*p*h+v*l*m-o*u*m-f*l*c+o*p*c,S=g*p*h-d*u*h-g*l*m+a*u*m+d*l*c-a*p*c,w=d*v*h-g*f*h+g*o*m-a*v*m-d*o*c+a*f*c,L=g*f*l-d*v*l-g*o*p+a*v*p+d*o*u-a*f*u,C=t*b+n*S+s*w+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(v*p*r-f*u*r-v*s*m+n*u*m+f*s*c-n*p*c)*A,e[2]=(o*u*r-v*l*r+v*s*h-n*u*h-o*s*c+n*l*c)*A,e[3]=(f*l*r-o*p*r-f*s*h+n*p*h+o*s*m-n*l*m)*A,e[4]=S*A,e[5]=(d*u*r-g*p*r+g*s*m-t*u*m-d*s*c+t*p*c)*A,e[6]=(g*l*r-a*u*r-g*s*h+t*u*h+a*s*c-t*l*c)*A,e[7]=(a*p*r-d*l*r+d*s*h-t*p*h-a*s*m+t*l*m)*A,e[8]=w*A,e[9]=(g*f*r-d*v*r-g*n*m+t*v*m+d*n*c-t*f*c)*A,e[10]=(a*v*r-g*o*r+g*n*h-t*v*h-a*n*c+t*o*c)*A,e[11]=(d*o*r-a*f*r-d*n*h+t*f*h+a*n*m-t*o*m)*A,e[12]=L*A,e[13]=(d*v*s-g*f*s+g*n*p-t*v*p-d*n*u+t*f*u)*A,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*u-t*o*u)*A,e[15]=(a*f*s-d*o*s+d*n*l-t*f*l-a*n*p+t*o*p)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,h=r*a,d=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,d*o+n,d*l-s*a,0,h*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,d=a+a,f=o+o,p=r*h,m=r*d,g=r*f,v=a*d,u=a*f,c=o*f,b=l*h,S=l*d,w=l*f,L=n.x,C=n.y,A=n.z;return s[0]=(1-(v+c))*L,s[1]=(m+w)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(m-w)*C,s[5]=(1-(p+c))*C,s[6]=(u+b)*C,s[7]=0,s[8]=(g+S)*A,s[9]=(u-b)*A,s[10]=(1-(p+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Mn.set(s[0],s[1],s[2]).length();const a=Mn.set(s[4],s[5],s[6]).length(),o=Mn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);const h=1/r,d=1/a,f=1/o;return ei.elements[0]*=h,ei.elements[1]*=h,ei.elements[2]*=h,ei.elements[4]*=d,ei.elements[5]*=d,ei.elements[6]*=d,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,t.setFromRotationMatrix(ei),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ti){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let m,g;if(o===Ti)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Rr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ti){const l=this.elements,h=1/(t-e),d=1/(n-s),f=1/(a-r),p=(t+e)*h,m=(n+s)*d;let g,v;if(o===Ti)g=(a+r)*f,v=-2*f;else if(o===Rr)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mn=new I,ei=new Qe,hm=new I(0,0,0),dm=new I(1,1,1),Ui=new I,$s=new I,Ft=new I,Ul=new Qe,Nl=new Ki;class pi{constructor(e=0,t=0,n=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let um=0;const Ol=new I,Sn=new Ki,xi=new Qe,Zs=new I,Qn=new I,fm=new I,pm=new Ki,Fl=new I(1,0,0),Bl=new I(0,1,0),zl=new I(0,0,1),Hl={type:"added"},mm={type:"removed"},bn={type:"childadded",child:null},ga={type:"childremoved",child:null};class Mt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new I,t=new pi,n=new Ki,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new De}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.multiply(Sn),this}rotateOnWorldAxis(e,t){return Sn.setFromAxisAngle(e,t),this.quaternion.premultiply(Sn),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Ol.copy(e).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zs.copy(e):Zs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Qn,Zs,this.up):xi.lookAt(Zs,Qn,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Sn.setFromRotationMatrix(xi),this.quaternion.premultiply(Sn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),bn.child=e,this.dispatchEvent(bn),bn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mm),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),bn.child=e,this.dispatchEvent(bn),bn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const f=l[h];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const h in o){const d=o[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new I(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new I,wi=new I,va=new I,Ei=new I,Tn=new I,An=new I,Vl=new I,_a=new I,ya=new I,xa=new I,wa=new ht,Ea=new ht,Ma=new ht;class ni{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),wi.subVectors(n,t),va.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(wi),l=ti.dot(va),h=wi.dot(wi),d=wi.dot(va),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(h*l-o*d)*p,g=(a*d-o*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return wa.setScalar(0),Ea.setScalar(0),Ma.setScalar(0),wa.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),Ma.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wa,r.x),a.addScaledVector(Ea,r.y),a.addScaledVector(Ma,r.z),a}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),wi.subVectors(e,t),ti.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ti.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Tn.subVectors(s,n),An.subVectors(r,n),_a.subVectors(e,n);const l=Tn.dot(_a),h=An.dot(_a);if(l<=0&&h<=0)return t.copy(n);ya.subVectors(e,s);const d=Tn.dot(ya),f=An.dot(ya);if(d>=0&&f<=d)return t.copy(s);const p=l*f-d*h;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Tn,a);xa.subVectors(e,r);const m=Tn.dot(xa),g=An.dot(xa);if(g>=0&&m<=g)return t.copy(r);const v=m*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),t.copy(n).addScaledVector(An,o);const u=d*g-m*f;if(u<=0&&f-d>=0&&m-g>=0)return Vl.subVectors(r,s),o=(f-d)/(f-d+(m-g)),t.copy(s).addScaledVector(Vl,o);const c=1/(u+v+p);return a=v*c,o=p*c,t.copy(n).addScaledVector(Tn,a).addScaledVector(An,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function Sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=$o(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sa(a,r,e+1/3),this.g=Sa(a,r,e),this.b=Sa(a,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return We.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Oe(Tt.r*255,0,255))*65536+Math.round(Oe(Tt.g*255,0,255))*256+Math.round(Oe(Tt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const d=(o+a)/2;if(o===a)l=0,h=0;else{const f=a-o;switch(h=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=$t){We.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Ks);const n=ls(Ni.h,Ks.h,t),s=ls(Ni.s,Ks.s,t),r=ls(Ni.l,Ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ze;Ze.NAMES=vh;let gm=0;class Ls extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Fn,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Hn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_n,this.stencilZFail=_n,this.stencilZPass=_n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fn&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $i extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new I,Js=new qe;let vm=0;class fi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cl,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}}class _h extends fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yh extends fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends fi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _m=0;const qt=new Qe,ba=new Mt,Cn=new I,Bt=new qn,es=new qn,gt=new I;class gi extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mh(e)?yh:_h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cn).negate(),this.translate(Cn.x,Cn.y,Cn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Bt.min,es.min),Bt.expandByPoint(gt),gt.addVectors(Bt.max,es.max),Bt.expandByPoint(gt)):(Bt.expandByPoint(es.min),Bt.expandByPoint(es.max))}Bt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)gt.fromBufferAttribute(o,h),l&&(Cn.fromBufferAttribute(e,h),gt.add(Cn)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new I,l[U]=new I;const h=new I,d=new I,f=new I,p=new qe,m=new qe,g=new qe,v=new I,u=new I;function c(U,E,x){h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,x),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,x),d.sub(h),f.sub(h),m.sub(p),g.sub(p);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(R),u.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(R),o[U].add(v),o[E].add(v),o[x].add(v),l[U].add(u),l[E].add(u),l[x].add(u))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,E=b.length;U<E;++U){const x=b[U],R=x.start,G=x.count;for(let B=R,j=R+G;B<j;B+=3)c(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new I,w=new I,L=new I,C=new I;function A(U){L.fromBufferAttribute(s,U),C.copy(L);const E=o[U];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),w.crossVectors(C,E);const R=w.dot(l[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,R)}for(let U=0,E=b.length;U<E;++U){const x=b[U],R=x.start,G=x.count;for(let B=R,j=R+G;B<j;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,h=new I,d=new I,f=new I;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),v=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,u),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,u),o.add(d),l.add(d),h.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(u,h.x,h.y,h.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const h=o.array,d=o.itemSize,f=o.normalized,p=new h.constructor(l.length*d);let m=0,g=0;for(let v=0,u=l.length;v<u;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*d;for(let c=0;c<d;c++)p[g++]=h[m++]}return new fi(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=e(l,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let d=0,f=h.length;d<f;d++){const p=h[d],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const h=n[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let f=0,p=h.length;f<p;f++){const m=h[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(t))}const r=e.morphAttributes;for(const h in r){const d=[],f=r[h];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new Qe,nn=new Ko,Qs=new Wr,Wl=new I,er=new I,tr=new I,ir=new I,Ta=new I,nr=new I,Xl=new I,sr=new I;class kt extends Mt{constructor(e=new gi,t=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=o[l],f=r[l];d!==0&&(Ta.fromBufferAttribute(f,e),a?nr.addScaledVector(Ta,d):nr.addScaledVector(Ta.sub(t),d))}t.add(nr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),nn.copy(e.ray).recast(e.near),!(Qs.containsPoint(nn.origin)===!1&&(nn.intersectSphere(Qs,Wl)===null||nn.origin.distanceToSquared(Wl)>(e.far-e.near)**2))&&(Gl.copy(r).invert(),nn.copy(e.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,nn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const u=p[g],c=a[u.materialIndex],b=Math.max(u.start,m.start),S=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let w=b,L=S;w<L;w+=3){const C=o.getX(w),A=o.getX(w+1),U=o.getX(w+2);s=rr(this,c,e,n,h,d,f,C,A,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let u=g,c=v;u<c;u+=3){const b=o.getX(u),S=o.getX(u+1),w=o.getX(u+2);s=rr(this,a,e,n,h,d,f,b,S,w),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const u=p[g],c=a[u.materialIndex],b=Math.max(u.start,m.start),S=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let w=b,L=S;w<L;w+=3){const C=w,A=w+1,U=w+2;s=rr(this,c,e,n,h,d,f,C,A,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let u=g,c=v;u<c;u+=3){const b=u,S=u+1,w=u+2;s=rr(this,a,e,n,h,d,f,b,S,w),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}}function ym(i,e,t,n,s,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qi,o),l===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(sr);return h<t.near||h>t.far?null:{distance:h,point:sr.clone(),object:i}}function rr(i,e,t,n,s,r,a,o,l,h){i.getVertexPosition(o,er),i.getVertexPosition(l,tr),i.getVertexPosition(h,ir);const d=ym(i,e,t,n,er,tr,ir,Xl);if(d){const f=new I;ni.getBarycoord(Xl,er,tr,ir,f),s&&(d.uv=ni.getInterpolatedAttribute(s,o,l,h,f,new qe)),r&&(d.uv1=ni.getInterpolatedAttribute(r,o,l,h,f,new qe)),a&&(d.normal=ni.getInterpolatedAttribute(a,o,l,h,f,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c:h,normal:new I,materialIndex:0};ni.getNormal(er,tr,ir,p.normal),d.face=p,d.barycoord=f}return d}class Ds extends gi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],d=[],f=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function g(v,u,c,b,S,w,L,C,A,U,E){const x=w/A,R=L/U,G=w/2,B=L/2,j=C/2,$=A+1,X=U+1;let K=0,H=0;const ae=new I;for(let fe=0;fe<X;fe++){const we=fe*R-B;for(let Ne=0;Ne<$;Ne++){const tt=Ne*x-G;ae[v]=tt*b,ae[u]=we*S,ae[c]=j,h.push(ae.x,ae.y,ae.z),ae[v]=0,ae[u]=0,ae[c]=C>0?1:-1,d.push(ae.x,ae.y,ae.z),f.push(Ne/A),f.push(1-fe/U),K+=1}}for(let fe=0;fe<U;fe++)for(let we=0;we<A;we++){const Ne=p+we+$*fe,tt=p+we+$*(fe+1),W=p+(we+1)+$*(fe+1),te=p+(we+1)+$*fe;l.push(Ne,tt,te),l.push(tt,W,te),H+=6}o.addGroup(m,H,E),m+=H,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=Wn(i[t]);for(const s in n)e[s]=n[s]}return e}function xm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const wm={clone:Wn,merge:Pt};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wn(e.uniforms),this.uniformsGroups=xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wh extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new I,Yl=new qe,ql=new qe;class Ht extends wh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,ql),t.subVectors(ql,Yl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rn=-90,Pn=1;class Sm extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(Rn,Pn,e,t);s.layers=this.layers,this.add(s);const r=new Ht(Rn,Pn,e,t);r.layers=this.layers,this.add(r);const a=new Ht(Rn,Pn,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Rn,Pn,e,t);o.layers=this.layers,this.add(o);const l=new Ht(Rn,Pn,e,t);l.layers=this.layers,this.add(l);const h=new Ht(Rn,Pn,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const h of t)this.remove(h);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(f,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eh extends Et{constructor(e=[],t=Vn,n,s,r,a,o,l,h,d){super(e,t,n,s,r,a,o,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bm extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Eh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ds(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:Wn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Vi});r.uniforms.tEquirect.value=t;const a=new kt(s,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Vt),new Sm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Hi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const v of e.hand.values()){const u=t.getJointPose(v,n),c=this._getHandJoint(h,v);u!==null&&(c.matrix.fromArray(u.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=u.radius),c.visible=u!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,g=.005;h.inputState.pinching&&p>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Lr extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ca=new I,Am=new I,Cm=new De;class on{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ca.subVectors(n,t).cross(Am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cm.getNormalMatrix(e),s=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sn=new Wr,ar=new I;class Qo{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],d=s[5],f=s[6],p=s[7],m=s[8],g=s[9],v=s[10],u=s[11],c=s[12],b=s[13],S=s[14],w=s[15];if(n[0].setComponents(l-r,p-h,u-m,w-c).normalize(),n[1].setComponents(l+r,p+h,u+m,w+c).normalize(),n[2].setComponents(l+a,p+d,u+g,w+b).normalize(),n[3].setComponents(l-a,p-d,u-g,w-b).normalize(),n[4].setComponents(l-o,p-f,u-v,w-S).normalize(),t===Ti)n[5].setComponents(l+o,p+f,u+v,w+S).normalize();else if(t===Rr)n[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sn)}intersectsSprite(e){return sn.center.set(0,0,0),sn.radius=.7071067811865476,sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(sn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ar.x=s.normal.x>0?e.max.x:e.min.x,ar.y=s.normal.y>0?e.max.y:e.min.y,ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rm extends Ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dr=new I,Ir=new I,jl=new Qe,ts=new Ko,or=new Wr,Ra=new I,$l=new I;class Pm extends Mt{constructor(e=new gi,t=new Rm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Dr.fromBufferAttribute(t,s-1),Ir.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Ir);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),or.radius+=r,e.ray.intersectsSphere(or)===!1)return;jl.copy(s).invert(),ts.copy(e.ray).applyMatrix4(jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=m,u=g-1;v<u;v+=h){const c=d.getX(v),b=d.getX(v+1),S=lr(this,e,ts,l,c,b,v);S&&t.push(S)}if(this.isLineLoop){const v=d.getX(g-1),u=d.getX(m),c=lr(this,e,ts,l,v,u,g-1);c&&t.push(c)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let v=m,u=g-1;v<u;v+=h){const c=lr(this,e,ts,l,v,v+1,v);c&&t.push(c)}if(this.isLineLoop){const v=lr(this,e,ts,l,g-1,m,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Dr.fromBufferAttribute(o,s),Ir.fromBufferAttribute(o,r),t.distanceSqToSegment(Dr,Ir,Ra,$l)>n)return;Ra.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ra);if(!(h<e.near||h>e.far))return{distance:h,point:$l.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Zl=new I,Kl=new I;class Lm extends Pm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zl.fromBufferAttribute(t,s),Kl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zl.distanceTo(Kl);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dm extends Et{constructor(e,t,n,s,r=Vt,a=Vt,o,l,h){super(e,t,n,s,r,a,o,l,h),this.isVideoTexture=!0,this.generateMipmaps=!1;const d=this;function f(){d.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Mh extends Et{constructor(e,t,n=fn,s,r,a,o=ri,l=ri,h,d=bs){if(d!==bs&&d!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,a,o,l,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Is extends gi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),h=o+1,d=l+1,f=e/o,p=t/l,m=[],g=[],v=[],u=[];for(let c=0;c<d;c++){const b=c*p-a;for(let S=0;S<h;S++){const w=S*f-r;g.push(w,-b,0),v.push(0,0,1),u.push(S/o),u.push(1-c/l)}}for(let c=0;c<l;c++)for(let b=0;b<o;b++){const S=b+h*c,w=b+h*(c+1),L=b+1+h*(c+1),C=b+1+h*c;m.push(S,w,C),m.push(w,L,C)}this.setIndex(m),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}class jn extends gi{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const d=[],f=new I,p=new I,m=[],g=[],v=[],u=[];for(let c=0;c<=n;c++){const b=[],S=c/n;let w=0;c===0&&a===0?w=.5/t:c===n&&l===Math.PI&&(w=-.5/t);for(let L=0;L<=t;L++){const C=L/t;f.x=-e*Math.cos(s+C*r)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(s+C*r)*Math.sin(a+S*o),g.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),u.push(C+w,1-S),b.push(h++)}d.push(b)}for(let c=0;c<n;c++)for(let b=0;b<t;b++){const S=d[c][b+1],w=d[c][b],L=d[c+1][b],C=d[c+1][b+1];(c!==0||a>0)&&m.push(S,w,C),(c!==n-1||l<Math.PI)&&m.push(w,L,C)}this.setIndex(m),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Im extends gi{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new I,r=new I;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,d=l.length;h<d;++h){const f=l[h],p=f.start,m=f.count;for(let g=p,v=p+m;g<v;g+=3)for(let u=0;u<3;u++){const c=o.getX(g+u),b=o.getX(g+(u+1)%3);s.fromBufferAttribute(a,c),r.fromBufferAttribute(a,b),Jl(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){const d=3*o+h,f=3*o+(h+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,f),Jl(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Gt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Jl(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class km extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Um extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const To={enabled:!1};class Nm{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){const f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=h.length;f<p;f+=2){const m=h[f],g=h[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const Om=new Nm;let el=class{constructor(e){this.manager=e!==void 0?e:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";class Fm extends wh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Ql=new Qe;class zm{constructor(e,t,n=0,s=1/0){this.ray=new Ko(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ql.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ql),this}intersectObject(e,t=!0,n=[]){return Ao(e,this,n,t),n.sort(ec),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ao(e[s],this,n,t);return n.sort(ec),n}}function ec(i,e){return i.distance-e.distance}function Ao(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ao(r[a],e,t,!0)}}function tc(i,e,t,n){const s=Hm(n);switch(t){case oh:return i*e;case ch:return i*e;case hh:return i*e*2;case dh:return i*e/s.components*s.byteLength;case Yo:return i*e/s.components*s.byteLength;case uh:return i*e*2/s.components*s.byteLength;case qo:return i*e*2/s.components*s.byteLength;case lh:return i*e*3/s.components*s.byteLength;case si:return i*e*4/s.components*s.byteLength;case jo:return i*e*4/s.components*s.byteLength;case _r:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:case io:return Math.max(i,16)*Math.max(e,8)/4;case Qa:case to:return Math.max(i,8)*Math.max(e,8)/2;case no:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Er:case wo:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fh:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case So:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(i){switch(i){case Ri:case sh:return{byteLength:1,components:1};case Ms:case rh:case Ps:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case fn:case Go:case bi:return{byteLength:4,components:1};case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vm(i){const e=new WeakMap;function t(o,l){const h=o.array,d=o.usage,f=h.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,h,d),o.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,h){const d=l.array,f=l.updateRanges;if(i.bindBuffer(h,o),f.length===0)i.bufferSubData(h,0,d);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){const g=f[p],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,f[p]=v)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];i.bufferSubData(h,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,Zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ig=`#ifdef USE_IRIDESCENCE
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
#endif`,ng=`#ifdef USE_BUMPMAP
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ug=`#define PI 3.141592653589793
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
} // validated`,fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pg=`vec3 transformedNormal = objectNormal;
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
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
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
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
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
#endif`,Hg=`struct PhysicalMaterial {
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
}`,Vg=`
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
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jg=`#if defined( USE_POINTS_UV )
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
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A0=`float getShadowMask() {
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,Z0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`uniform float scale;
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
}`,tv=`uniform vec3 diffuse;
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
}`,iv=`#include <common>
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
}`,nv=`uniform vec3 diffuse;
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
}`,sv=`#define LAMBERT
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
}`,rv=`#define LAMBERT
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
}`,av=`#define MATCAP
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
}`,ov=`#define MATCAP
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
}`,lv=`#define NORMAL
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
}`,cv=`#define NORMAL
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
}`,hv=`#define PHONG
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
}`,dv=`#define PHONG
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
}`,uv=`#define STANDARD
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
}`,fv=`#define STANDARD
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
}`,pv=`#define TOON
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
}`,mv=`#define TOON
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
}`,gv=`uniform float size;
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
}`,vv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,yv=`uniform vec3 color;
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
}`,xv=`uniform float rotation;
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
}`,wv=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Gm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:Ym,alphatest_fragment:qm,alphatest_pars_fragment:jm,aomap_fragment:$m,aomap_pars_fragment:Zm,batching_pars_vertex:Km,batching_vertex:Jm,begin_vertex:Qm,beginnormal_vertex:eg,bsdfs:tg,iridescence_fragment:ig,bumpmap_pars_fragment:ng,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:ag,clipping_planes_vertex:og,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:hg,color_vertex:dg,common:ug,cube_uv_reflection_fragment:fg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:vg,emissivemap_pars_fragment:_g,colorspace_fragment:yg,colorspace_pars_fragment:xg,envmap_fragment:wg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Mg,envmap_pars_vertex:Sg,envmap_physical_pars_fragment:Ug,envmap_vertex:bg,fog_vertex:Tg,fog_pars_vertex:Ag,fog_fragment:Cg,fog_pars_fragment:Rg,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Lg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ig,lights_pars_begin:kg,lights_toon_fragment:Ng,lights_toon_pars_fragment:Og,lights_phong_fragment:Fg,lights_phong_pars_fragment:Bg,lights_physical_fragment:zg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Vg,lights_fragment_maps:Gg,lights_fragment_end:Wg,logdepthbuf_fragment:Xg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:jg,map_fragment:$g,map_pars_fragment:Zg,map_particle_fragment:Kg,map_particle_pars_fragment:Jg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:e0,morphinstance_vertex:t0,morphcolor_vertex:i0,morphnormal_vertex:n0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:v0,premultiplied_alpha_fragment:_0,project_vertex:y0,dithering_fragment:x0,dithering_pars_fragment:w0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:b0,shadowmap_vertex:T0,shadowmask_pars_fragment:A0,skinbase_vertex:C0,skinning_pars_vertex:R0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:I0,tonemapping_fragment:k0,tonemapping_pars_fragment:U0,transmission_fragment:N0,transmission_pars_fragment:O0,uv_pars_fragment:F0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:H0,background_vert:V0,background_frag:G0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:Y0,cube_frag:q0,depth_vert:j0,depth_frag:$0,distanceRGBA_vert:Z0,distanceRGBA_frag:K0,equirect_vert:J0,equirect_frag:Q0,linedashed_vert:ev,linedashed_frag:tv,meshbasic_vert:iv,meshbasic_frag:nv,meshlambert_vert:sv,meshlambert_frag:rv,meshmatcap_vert:av,meshmatcap_frag:ov,meshnormal_vert:lv,meshnormal_frag:cv,meshphong_vert:hv,meshphong_frag:dv,meshphysical_vert:uv,meshphysical_frag:fv,meshtoon_vert:pv,meshtoon_frag:mv,points_vert:gv,points_frag:vv,shadow_vert:_v,shadow_frag:yv,sprite_vert:xv,sprite_frag:wv},se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},hi={basic:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Pt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Pt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Pt([se.points,se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Pt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Pt([se.common,se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Pt([se.sprite,se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Pt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Pt([se.lights,se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};hi.physical={uniforms:Pt([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const cr={r:0,b:0,g:0},rn=new pi,Ev=new Qe;function Mv(i,e,t,n,s,r,a){const o=new Ze(0);let l=r===!0?0:1,h,d,f=null,p=0,m=null;function g(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?t:e).get(w)),w}function v(S){let w=!1;const L=g(S);L===null?c(o,l):L&&L.isColor&&(c(L,1),w=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(S,w){const L=g(w);L&&(L.isCubeTexture||L.mapping===Gr)?(d===void 0&&(d=new kt(new Ds(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Wn(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),rn.copy(w.backgroundRotation),rn.x*=-1,rn.y*=-1,rn.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(rn.y*=-1,rn.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(rn)),d.material.toneMapped=We.getTransfer(L.colorSpace)!==et,(f!==L||p!==L.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=L,p=L.version,m=i.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new kt(new Is(2,2),new Pi({name:"BackgroundMaterial",uniforms:Wn(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=We.getTransfer(L.colorSpace)!==et,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||p!==L.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=L,p=L.version,m=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function c(S,w){S.getRGB(cr,xh(i)),n.buffers.color.setClear(cr.r,cr.g,cr.b,w,a)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,w=1){o.set(S),l=w,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,c(o,l)},render:v,addToRenderList:u,dispose:b}}function Sv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(x,R,G,B,j){let $=!1;const X=f(B,G,R);r!==X&&(r=X,h(r.object)),$=m(x,B,G,j),$&&g(x,B,G,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,w(x,R,G,B),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function f(x,R,G){const B=G.wireframe===!0;let j=n[x.id];j===void 0&&(j={},n[x.id]=j);let $=j[R.id];$===void 0&&($={},j[R.id]=$);let X=$[B];return X===void 0&&(X=p(l()),$[B]=X),X}function p(x){const R=[],G=[],B=[];for(let j=0;j<t;j++)R[j]=0,G[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function m(x,R,G,B){const j=r.attributes,$=R.attributes;let X=0;const K=G.getAttributes();for(const H in K)if(K[H].location>=0){const fe=j[H];let we=$[H];if(we===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(we=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(we=x.instanceColor)),fe===void 0||fe.attribute!==we||we&&fe.data!==we.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(x,R,G,B){const j={},$=R.attributes;let X=0;const K=G.getAttributes();for(const H in K)if(K[H].location>=0){let fe=$[H];fe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor));const we={};we.attribute=fe,fe&&fe.data&&(we.data=fe.data),j[H]=we,X++}r.attributes=j,r.attributesNum=X,r.index=B}function v(){const x=r.newAttributes;for(let R=0,G=x.length;R<G;R++)x[R]=0}function u(x){c(x,0)}function c(x,R){const G=r.newAttributes,B=r.enabledAttributes,j=r.attributeDivisors;G[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),j[x]!==R&&(i.vertexAttribDivisor(x,R),j[x]=R)}function b(){const x=r.newAttributes,R=r.enabledAttributes;for(let G=0,B=R.length;G<B;G++)R[G]!==x[G]&&(i.disableVertexAttribArray(G),R[G]=0)}function S(x,R,G,B,j,$,X){X===!0?i.vertexAttribIPointer(x,R,G,j,$):i.vertexAttribPointer(x,R,G,B,j,$)}function w(x,R,G,B){v();const j=B.attributes,$=G.getAttributes(),X=R.defaultAttributeValues;for(const K in $){const H=$[K];if(H.location>=0){let ae=j[K];if(ae===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){const fe=ae.normalized,we=ae.itemSize,Ne=e.get(ae);if(Ne===void 0)continue;const tt=Ne.buffer,W=Ne.type,te=Ne.bytesPerElement,_e=W===i.INT||W===i.UNSIGNED_INT||ae.gpuType===Go;if(ae.isInterleavedBufferAttribute){const oe=ae.data,be=oe.stride,Ye=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)c(H.location+Ae,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)u(H.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Ae=0;Ae<H.locationSize;Ae++)S(H.location+Ae,we/H.locationSize,W,fe,be*te,(Ye+we/H.locationSize*Ae)*te,_e)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)c(H.location+oe,ae.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<H.locationSize;oe++)u(H.location+oe);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let oe=0;oe<H.locationSize;oe++)S(H.location+oe,we/H.locationSize,W,fe,we*te,we/H.locationSize*oe*te,_e)}}else if(X!==void 0){const fe=X[K];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(H.location,fe);break;case 3:i.vertexAttrib3fv(H.location,fe);break;case 4:i.vertexAttrib4fv(H.location,fe);break;default:i.vertexAttrib1fv(H.location,fe)}}}}b()}function L(){U();for(const x in n){const R=n[x];for(const G in R){const B=R[G];for(const j in B)d(B[j].object),delete B[j];delete R[G]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const G in R){const B=R[G];for(const j in B)d(B[j].object),delete B[j];delete R[G]}delete n[x.id]}function A(x){for(const R in n){const G=n[R];if(G[x.id]===void 0)continue;const B=G[x.id];for(const j in B)d(B[j].object),delete B[j];delete G[x.id]}}function U(){E(),a=!0,r!==s&&(r=s,h(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:u,disableUnusedAttributes:b}}function bv(i,e,t){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),t.update(d,n,1)}function a(h,d,f){f!==0&&(i.drawArraysInstanced(n,h,d,f),t.update(d,n,f))}function o(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=d[g];t.update(m,n,1)}function l(h,d,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)a(h[g],d[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,d,0,p,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v]*p[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==si&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const U=A===Ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ri&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bi&&!U)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const f=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:u,maxAttributes:c,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:w,vertexTextures:L,maxSamples:C}}function Av(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new on,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,m){const g=f.clippingPlanes,v=f.clipIntersection,u=f.clipShadows,c=i.get(f);if(!s||g===null||g.length===0||r&&!u)r?d(null):h();else{const b=r?0:n,S=b*4;let w=c.clippingState||null;l.value=w,w=d(g,p,S,m);for(let L=0;L!==S;++L)w[L]=t[L];c.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,p,m,g){const v=f!==null?f.length:0;let u=null;if(v!==0){if(u=l.value,g!==!0||u===null){const c=m+v*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(u===null||u.length<c)&&(u=new Float32Array(c));for(let S=0,w=m;S!==v;++S,w+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(u,w),u[w+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,u}}function Cv(i){let e=new WeakMap;function t(a,o){return o===$a?a.mapping=Vn:o===Za&&(a.mapping=Gn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$a||o===Za)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new bm(l.height);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Nn=4,ic=[.125,.215,.35,.446,.526,.582],hn=20,Pa=new Fm,nc=new Ze;let La=null,Da=0,Ia=0,ka=!1;const ln=(1+Math.sqrt(5))/2,Ln=1/ln,sc=[new I(-ln,Ln,0),new I(ln,Ln,0),new I(-Ln,0,ln),new I(Ln,0,ln),new I(0,ln,-Ln),new I(0,ln,Ln),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Rv=new I;class rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Rv}=r;La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Da,Ia),this._renderer.xr.enabled=ka,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vn||e.mapping===Gn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Ps,format:si,colorSpace:pn,depthBuffer:!1},s=ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pv(r)),this._blurMaterial=Lv(r,e,t)}return s}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,s,r){const l=new Ht(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(nc),f.toneMapping=Gi,f.autoClear=!1;const g=new $i({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),v=new kt(new Ds,g);let u=!1;const c=e.background;c?c.isColor&&(g.color.copy(c),e.background=null,u=!0):(g.color.copy(nc),u=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):S===1?(l.up.set(0,0,h[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));const w=this._cubeSize;hr(s,S*w,b>2?w:0,w,w),f.setRenderTarget(s),u&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=c}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Vn||e.mapping===Gn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sc[(s-r-1)%sc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new kt(this._lodPlanes[s],h),p=h.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hn-1),v=r/g,u=isFinite(r)?1+Math.floor(d*v):hn;u>hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${hn}`);const c=[];let b=0;for(let A=0;A<hn;++A){const U=A/v,E=Math.exp(-U*U/2);c.push(E),A===0?b+=E:A<u&&(b+=2*E)}for(let A=0;A<c.length;A++)c[A]=c[A]/b;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=c,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-n;const w=this._sizeLods[s],L=3*w*(s>S-Nn?s-S+Nn:0),C=4*(this._cubeSize-w);hr(t,L,C,3*w,2*w),l.setRenderTarget(t),l.render(f,Pa)}}function Pv(i){const e=[],t=[],n=[];let s=i;const r=i-Nn+1+ic.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Nn?l=ic[a-i+Nn-1]:a===0&&(l=0),n.push(l);const h=1/(o-2),d=-h,f=1+h,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,g=6,v=3,u=2,c=1,b=new Float32Array(v*g*m),S=new Float32Array(u*g*m),w=new Float32Array(c*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,U=C>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];b.set(E,v*g*C),S.set(p,u*g*C);const x=[C,C,C,C,C,C];w.set(x,c*g*C)}const L=new gi;L.setAttribute("position",new fi(b,v)),L.setAttribute("uv",new fi(S,u)),L.setAttribute("faceIndex",new fi(w,c)),e.push(L),s>Nn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ac(i,e,t){const n=new ji(i,e,t);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lv(i,e,t){const n=new Float32Array(hn),s=new I(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function oc(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function lc(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function Dv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,h=l===$a||l===Za,d=l===Vn||l===Gn;if(h||d){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new rc(i)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return h&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new rc(i)),f=h?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Iv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kv(i,e,t,n){const s={},r=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function h(f){const p=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let S=0,w=b.length;S<w;S+=3){const L=b[S+0],C=b[S+1],A=b[S+2];p.push(L,C,C,A,A,L)}}else if(g!==void 0){const b=g.array;v=g.version;for(let S=0,w=b.length/3-1;S<w;S+=3){const L=S+0,C=S+1,A=S+2;p.push(L,C,C,A,A,L)}}else return;const u=new(mh(p)?yh:_h)(p,1);u.version=v;const c=r.get(f);c&&e.remove(c),r.set(f,u)}function d(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Uv(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*a),t.update(m,n,1)}function h(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,p*a,g),t.update(m,n,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,g);let u=0;for(let c=0;c<g;c++)u+=m[c];t.update(u,n,1)}function f(p,m,g,v){if(g===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let c=0;c<p.length;c++)h(p[c]/a,m[c],v[c]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,v,0,g);let c=0;for(let b=0;b<g;b++)c+=m[b]*v[b];t.update(c,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Nv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ov(i,e,t){const n=new WeakMap,s=new ht;function r(a,o,l){const h=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let x=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),u===!0&&(w=3);let L=o.attributes.position.count*w,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*f),U=new gh(A,L,C,f);U.type=bi,U.needsUpdate=!0;const E=w*4;for(let R=0;R<f;R++){const G=c[R],B=b[R],j=S[R],$=L*C*4*R;for(let X=0;X<G.count;X++){const K=X*E;g===!0&&(s.fromBufferAttribute(G,X),A[$+K+0]=s.x,A[$+K+1]=s.y,A[$+K+2]=s.z,A[$+K+3]=0),v===!0&&(s.fromBufferAttribute(B,X),A[$+K+4]=s.x,A[$+K+5]=s.y,A[$+K+6]=s.z,A[$+K+7]=0),u===!0&&(s.fromBufferAttribute(j,X),A[$+K+8]=s.x,A[$+K+9]=s.y,A[$+K+10]=s.z,A[$+K+11]=j.itemSize===4?s.w:1)}}p={count:f,texture:U,size:new qe(L,C)},n.set(o,p),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let u=0;u<h.length;u++)g+=h[u];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Fv(i,e,t,n){let s=new WeakMap;function r(l){const h=n.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function a(){s=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}const bh=new Et,cc=new Mh(1,1),Th=new gh,Ah=new lm,Ch=new Eh,hc=[],dc=[],uc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function $n(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=hc[s];if(r===void 0&&(r=new Float32Array(s),hc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xr(i,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Gv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;pc.set(n),i.uniformMatrix2fv(this.addr,!1,pc),mt(t,n)}}function Wv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;fc.set(n),i.uniformMatrix3fv(this.addr,!1,fc),mt(t,n)}}function Xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),mt(t,n)}}function Yv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function $v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function Zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function e_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cc.compareFunction=ph,r=cc):r=bh,t.setTexture2D(e||r,s)}function t_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ah,s)}function i_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ch,s)}function n_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Th,s)}function s_(i){switch(i){case 5126:return Bv;case 35664:return zv;case 35665:return Hv;case 35666:return Vv;case 35674:return Gv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return Yv;case 35667:case 35671:return qv;case 35668:case 35672:return jv;case 35669:case 35673:return $v;case 5125:return Zv;case 36294:return Kv;case 36295:return Jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return n_}}function r_(i,e){i.uniform1fv(this.addr,e)}function a_(i,e){const t=$n(e,this.size,2);i.uniform2fv(this.addr,t)}function o_(i,e){const t=$n(e,this.size,3);i.uniform3fv(this.addr,t)}function l_(i,e){const t=$n(e,this.size,4);i.uniform4fv(this.addr,t)}function c_(i,e){const t=$n(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h_(i,e){const t=$n(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d_(i,e){const t=$n(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u_(i,e){i.uniform1iv(this.addr,e)}function f_(i,e){i.uniform2iv(this.addr,e)}function p_(i,e){i.uniform3iv(this.addr,e)}function m_(i,e){i.uniform4iv(this.addr,e)}function g_(i,e){i.uniform1uiv(this.addr,e)}function v_(i,e){i.uniform2uiv(this.addr,e)}function __(i,e){i.uniform3uiv(this.addr,e)}function y_(i,e){i.uniform4uiv(this.addr,e)}function x_(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||bh,r[a])}function w_(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ah,r[a])}function E_(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ch,r[a])}function M_(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Th,r[a])}function S_(i){switch(i){case 5126:return r_;case 35664:return a_;case 35665:return o_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return d_;case 5124:case 35670:return u_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return v_;case 36295:return __;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return M_}}class b_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s_(t.type)}}class T_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}}class A_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function mc(i,e){i.seq.push(e),i.map[e.id]=e}function C_(i,e,t){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const r=Ua.exec(n),a=Ua.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){mc(t,h===void 0?new b_(o,i,e):new T_(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new A_(o),mc(t,f)),t=f}}}class Sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);C_(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function gc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const R_=37297;let P_=0;function L_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const vc=new De;function D_(i){We._getMatrix(vc,We.workingColorSpace,i);const e=`mat3( ${vc.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _c(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+L_(i.getShaderSource(e),a)}else return s}function I_(i,e){const t=D_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function k_(i,e){let t;switch(e){case ih:t="Linear";break;case yp:t="Reinhard";break;case xp:t="Cineon";break;case wp:t="ACESFilmic";break;case Mp:t="AgX";break;case Sp:t="Neutral";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dr=new I;function U_(){We.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),e=dr.y.toFixed(4),t=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function O_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rs(i){return i!==""}function yc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(B_,H_)}const z_=new Map;function H_(i,e){let t=ke[e];if(t===void 0){const n=z_.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Co(t)}const V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(V_,G_)}function G_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ec(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function X_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vn:case Gn:e="ENVMAP_TYPE_CUBE";break;case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gn:e="ENVMAP_MODE_REFRACTION";break}return e}function q_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case th:e="ENVMAP_BLENDING_MULTIPLY";break;case vp:e="ENVMAP_BLENDING_MIX";break;case _p:e="ENVMAP_BLENDING_ADD";break}return e}function j_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=W_(t),h=X_(t),d=Y_(t),f=q_(t),p=j_(t),m=N_(t),g=O_(r),v=s.createProgram();let u,c,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),u.length>0&&(u+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),c.length>0&&(c+=`
`)):(u=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),c=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ke.tonemapping_pars_fragment:"",t.toneMapping!==Gi?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,I_("linearToOutputTexel",t.outputColorSpace),U_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),a=Co(a),a=yc(a,t),a=xc(a,t),o=Co(o),o=yc(o,t),o=xc(o,t),a=wc(a),o=wc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,c=["#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const S=b+u+a,w=b+c+o,L=gc(s,s.VERTEX_SHADER,S),C=gc(s,s.FRAGMENT_SHADER,w);s.attachShader(v,L),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(L).trim(),j=s.getShaderInfoLog(C).trim();let $=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,C);else{const K=_c(s,L,"vertex"),H=_c(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+K+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||j==="")&&(X=!1);X&&(R.diagnostics={runnable:$,programLog:G,vertexShader:{log:B,prefix:u},fragmentShader:{log:j,prefix:c}})}s.deleteShader(L),s.deleteShader(C),U=new Sr(s,v),E=F_(s,v)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,R_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=C,this}let Z_=0;class K_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new J_(e),t.set(e,n)),n}}class J_{constructor(e){this.id=Z_++,this.code=e,this.usedTimes=0}}function Q_(i,e,t,n,s,r,a){const o=new Jo,l=new K_,h=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return h.add(E),E===0?"uv":`uv${E}`}function u(E,x,R,G,B){const j=G.fog,$=B.geometry,X=E.isMeshStandardMaterial?G.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),H=K&&K.mapping===Gr?K.image.height:null,ae=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,we=fe!==void 0?fe.length:0;let Ne=0;$.morphAttributes.position!==void 0&&(Ne=1),$.morphAttributes.normal!==void 0&&(Ne=2),$.morphAttributes.color!==void 0&&(Ne=3);let tt,W,te,_e;if(ae){const Je=hi[ae];tt=Je.vertexShader,W=Je.fragmentShader}else tt=E.vertexShader,W=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const oe=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ye=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,ct=!!E.map,at=!!E.matcap,Fe=!!K,T=!!E.aoMap,Wt=!!E.lightMap,He=!!E.bumpMap,Be=!!E.normalMap,Ee=!!E.displacementMap,nt=!!E.emissiveMap,xe=!!E.metalnessMap,M=!!E.roughnessMap,_=E.anisotropy>0,N=E.clearcoat>0,Y=E.dispersion>0,Z=E.iridescence>0,V=E.sheen>0,ye=E.transmission>0,le=_&&!!E.anisotropyMap,pe=N&&!!E.clearcoatMap,Ve=N&&!!E.clearcoatNormalMap,Q=N&&!!E.clearcoatRoughnessMap,me=Z&&!!E.iridescenceMap,Te=Z&&!!E.iridescenceThicknessMap,Re=V&&!!E.sheenColorMap,ge=V&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Ie=!!E.specularColorMap,it=!!E.specularIntensityMap,P=ye&&!!E.transmissionMap,ce=ye&&!!E.thicknessMap,z=!!E.gradientMap,q=!!E.alphaMap,de=E.alphaTest>0,he=!!E.alphaHash,Le=!!E.extensions;let ot=Gi;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ot=i.toneMapping);const St={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:tt,fragmentShader:W,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&B.instanceColor!==null,instancingMorph:Ye&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:pn,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:at,envMap:Fe,envMapMode:Fe&&K.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:Wt,bumpMap:He,normalMap:Be,displacementMap:p&&Ee,emissiveMap:nt,normalMapObjectSpace:Be&&E.normalMapType===Rp,normalMapTangentSpace:Be&&E.normalMapType===Cp,metalnessMap:xe,roughnessMap:M,anisotropy:_,anisotropyMap:le,clearcoat:N,clearcoatMap:pe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:Z,iridescenceMap:me,iridescenceThicknessMap:Te,sheen:V,sheenColorMap:Re,sheenRoughnessMap:ge,specularMap:ze,specularColorMap:Ie,specularIntensityMap:it,transmission:ye,transmissionMap:P,thicknessMap:ce,gradientMap:z,opaque:E.transparent===!1&&E.blending===Fn&&E.alphaToCoverage===!1,alphaMap:q,alphaTest:de,alphaHash:he,combine:E.combine,mapUv:ct&&v(E.map.channel),aoMapUv:T&&v(E.aoMap.channel),lightMapUv:Wt&&v(E.lightMap.channel),bumpMapUv:He&&v(E.bumpMap.channel),normalMapUv:Be&&v(E.normalMap.channel),displacementMapUv:Ee&&v(E.displacementMap.channel),emissiveMapUv:nt&&v(E.emissiveMap.channel),metalnessMapUv:xe&&v(E.metalnessMap.channel),roughnessMapUv:M&&v(E.roughnessMap.channel),anisotropyMapUv:le&&v(E.anisotropyMap.channel),clearcoatMapUv:pe&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(E.sheenRoughnessMap.channel),specularMapUv:ze&&v(E.specularMap.channel),specularColorMapUv:Ie&&v(E.specularColorMap.channel),specularIntensityMapUv:it&&v(E.specularIntensityMap.channel),transmissionMapUv:P&&v(E.transmissionMap.channel),thicknessMapUv:ce&&v(E.thicknessMap.channel),alphaMapUv:q&&v(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Be||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(ct||q),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:be,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&We.getTransfer(E.map.colorSpace)===et,decodeVideoTextureEmissive:nt&&E.emissiveMap.isVideoTexture===!0&&We.getTransfer(E.emissiveMap.colorSpace)===et,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Si,flipSided:E.side===Ut,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=h.has(1),St.vertexUv2s=h.has(2),St.vertexUv3s=h.has(3),h.clear(),St}function c(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)x.push(R),x.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(b(x,E),S(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function b(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function S(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function w(E){const x=g[E.type];let R;if(x){const G=hi[x];R=wm.clone(G.uniforms)}else R=E.uniforms;return R}function L(E,x){let R;for(let G=0,B=d.length;G<B;G++){const j=d[G];if(j.cacheKey===x){R=j,++R.usedTimes;break}}return R===void 0&&(R=new $_(i,x,E,r),d.push(R)),R}function C(E){if(--E.usedTimes===0){const x=d.indexOf(E);d[x]=d[d.length-1],d.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:u,getProgramCacheKey:c,getUniforms:w,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:U}}function e1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function t1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,m,g,v,u){let c=i[e];return c===void 0?(c={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:u},i[e]=c):(c.id=f.id,c.object=f,c.geometry=p,c.material=m,c.groupOrder=g,c.renderOrder=f.renderOrder,c.z=v,c.group=u),e++,c}function o(f,p,m,g,v,u){const c=a(f,p,m,g,v,u);m.transmission>0?n.push(c):m.transparent===!0?s.push(c):t.push(c)}function l(f,p,m,g,v,u){const c=a(f,p,m,g,v,u);m.transmission>0?n.unshift(c):m.transparent===!0?s.unshift(c):t.unshift(c)}function h(f,p){t.length>1&&t.sort(f||t1),n.length>1&&n.sort(p||Mc),s.length>1&&s.sort(p||Mc)}function d(){for(let f=e,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:h}}function i1(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Sc,i.set(n,[a])):s>=r.length?(a=new Sc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function n1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ze};break;case"SpotLight":t={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function s1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let r1=0;function a1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function o1(i){const e=new n1,t=s1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const s=new I,r=new Qe,a=new Qe;function o(h){let d=0,f=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,v=0,u=0,c=0,b=0,S=0,w=0,L=0,C=0,A=0;h.sort(a1);for(let E=0,x=h.length;E<x;E++){const R=h[E],G=R.color,B=R.intensity,j=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=G.r*B,f+=G.g*B,p+=G.b*B;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],B);A++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,H=t.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=R.shadow.matrix,b++}n.directional[m]=X,m++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(G).multiplyScalar(B),X.distance=j,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[v]=X;const K=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,K.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[v]=K.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=$,w++}v++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(G).multiplyScalar(B),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[u]=X,u++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const K=R.shadow,H=t.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(B),X.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[c]=X,c++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;const U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==u||U.hemiLength!==c||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==w||U.numSpotMaps!==L||U.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=u,n.point.length=g,n.hemi.length=c,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=w+L-C,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,U.directionalLength=m,U.pointLength=g,U.spotLength=v,U.rectAreaLength=u,U.hemiLength=c,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=w,U.numSpotMaps=L,U.numLightProbes=A,n.version=r1++)}function l(h,d){let f=0,p=0,m=0,g=0,v=0;const u=d.matrixWorldInverse;for(let c=0,b=h.length;c<b;c++){const S=h[c];if(S.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(S.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),m++}else if(S.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),a.identity(),r.copy(S.matrixWorld),r.premultiply(u),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),p++}else if(S.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(u),v++}}}return{setup:o,setupView:l,state:n}}function bc(i){const e=new o1(i),t=[],n=[];function s(d){h.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function l1(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new bc(i),e.set(s,[o])):r>=a.length?(o=new bc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`;function d1(i,e,t){let n=new Qo;const s=new qe,r=new qe,a=new ht,o=new km({depthPacking:Ap}),l=new Um,h={},d=t.maxTextureSize,f={[qi]:Ut,[Ut]:qi,[Si]:Si},p=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:c1,fragmentShader:h1}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new gi;g.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let c=this.type;this.render=function(C,A,U){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||C.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Vi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=c!==Mi&&this.type===Mi,j=c===Mi&&this.type!==Mi;for(let $=0,X=C.length;$<X;$++){const K=C[$],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ae=H.getFrameExtents();if(s.multiply(ae),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ae.x),s.x=r.x*ae.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ae.y),s.y=r.y*ae.y,H.mapSize.y=r.y)),H.map===null||B===!0||j===!0){const we=this.type!==Mi?{minFilter:ri,magFilter:ri}:{};H.map!==null&&H.map.dispose(),H.map=new ji(s.x,s.y,we),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const fe=H.getViewportCount();for(let we=0;we<fe;we++){const Ne=H.getViewport(we);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),G.viewport(a),H.updateMatrices(K,we),n=H.getFrustum(),w(A,U,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Mi&&b(H,U),H.needsUpdate=!1}c=this.type,u.needsUpdate=!1,i.setRenderTarget(E,x,R)};function b(C,A){const U=e.update(v);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ji(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,U,p,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,U,m,v,null)}function S(C,A,U,E){let x=null;const R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=x.uuid,B=A.uuid;let j=h[G];j===void 0&&(j={},h[G]=j);let $=j[B];$===void 0&&($=x.clone(),j[B]=$,A.addEventListener("dispose",L)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,E===Mi?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=U}return x}function w(C,A,U,E,x){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Mi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const B=e.update(C),j=C.material;if(Array.isArray(j)){const $=B.groups;for(let X=0,K=$.length;X<K;X++){const H=$[X],ae=j[H.materialIndex];if(ae&&ae.visible){const fe=S(C,ae,E,x);C.onBeforeShadow(i,C,A,U,B,fe,H),i.renderBufferDirect(U,null,B,fe,C,H),C.onAfterShadow(i,C,A,U,B,fe,H)}}}else if(j.visible){const $=S(C,j,E,x);C.onBeforeShadow(i,C,A,U,B,$,null),i.renderBufferDirect(U,null,B,$,C,null),C.onAfterShadow(i,C,A,U,B,$,null)}}const G=C.children;for(let B=0,j=G.length;B<j;B++)w(G[B],A,U,E,x)}function L(C){C.target.removeEventListener("dispose",L);for(const U in h){const E=h[U],x=C.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const u1={[Va]:Ga,[Wa]:qa,[Xa]:ja,[Hn]:Ya,[Ga]:Va,[qa]:Wa,[ja]:Xa,[Ya]:Hn};function f1(i,e){function t(){let P=!1;const ce=new ht;let z=null;const q=new ht(0,0,0,0);return{setMask:function(de){z!==de&&!P&&(i.colorMask(de,de,de,de),z=de)},setLocked:function(de){P=de},setClear:function(de,he,Le,ot,St){St===!0&&(de*=ot,he*=ot,Le*=ot),ce.set(de,he,Le,ot),q.equals(ce)===!1&&(i.clearColor(de,he,Le,ot),q.copy(ce))},reset:function(){P=!1,z=null,q.set(-1,0,0,0)}}}function n(){let P=!1,ce=!1,z=null,q=null,de=null;return{setReversed:function(he){if(ce!==he){const Le=e.get("EXT_clip_control");he?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ce=he;const ot=de;de=null,this.setClear(ot)}},getReversed:function(){return ce},setTest:function(he){he?oe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(he){z!==he&&!P&&(i.depthMask(he),z=he)},setFunc:function(he){if(ce&&(he=u1[he]),q!==he){switch(he){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case Hn:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=he}},setLocked:function(he){P=he},setClear:function(he){de!==he&&(ce&&(he=1-he),i.clearDepth(he),de=he)},reset:function(){P=!1,z=null,q=null,de=null,ce=!1}}}function s(){let P=!1,ce=null,z=null,q=null,de=null,he=null,Le=null,ot=null,St=null;return{setTest:function(Je){P||(Je?oe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!P&&(i.stencilMask(Je),ce=Je)},setFunc:function(Je,Kt,vi){(z!==Je||q!==Kt||de!==vi)&&(i.stencilFunc(Je,Kt,vi),z=Je,q=Kt,de=vi)},setOp:function(Je,Kt,vi){(he!==Je||Le!==Kt||ot!==vi)&&(i.stencilOp(Je,Kt,vi),he=Je,Le=Kt,ot=vi)},setLocked:function(Je){P=Je},setClear:function(Je){St!==Je&&(i.clearStencil(Je),St=Je)},reset:function(){P=!1,ce=null,z=null,q=null,de=null,he=null,Le=null,ot=null,St=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,h=new WeakMap;let d={},f={},p=new WeakMap,m=[],g=null,v=!1,u=null,c=null,b=null,S=null,w=null,L=null,C=null,A=new Ze(0,0,0),U=0,E=!1,x=null,R=null,G=null,B=null,j=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let ae=null,fe={};const we=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),tt=new ht().fromArray(we),W=new ht().fromArray(Ne);function te(P,ce,z,q){const de=new Uint8Array(4),he=i.createTexture();i.bindTexture(P,he),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<z;Le++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ce+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return he}const _e={};_e[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(Hn),He(!1),Be(Ml),oe(i.CULL_FACE),T(Vi);function oe(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function be(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function Ye(P,ce){return f[P]!==ce?(i.bindFramebuffer(P,ce),f[P]=ce,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ce),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ae(P,ce){let z=m,q=!1;if(P){z=p.get(ce),z===void 0&&(z=[],p.set(ce,z));const de=P.textures;if(z.length!==de.length||z[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Le=de.length;he<Le;he++)z[he]=i.COLOR_ATTACHMENT0+he;z.length=de.length,q=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,q=!0);q&&i.drawBuffers(z)}function ct(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const at={[cn]:i.FUNC_ADD,[ep]:i.FUNC_SUBTRACT,[tp]:i.FUNC_REVERSE_SUBTRACT};at[ip]=i.MIN,at[np]=i.MAX;const Fe={[sp]:i.ZERO,[rp]:i.ONE,[ap]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[up]:i.SRC_ALPHA_SATURATE,[hp]:i.DST_COLOR,[lp]:i.DST_ALPHA,[op]:i.ONE_MINUS_SRC_COLOR,[Ha]:i.ONE_MINUS_SRC_ALPHA,[dp]:i.ONE_MINUS_DST_COLOR,[cp]:i.ONE_MINUS_DST_ALPHA,[fp]:i.CONSTANT_COLOR,[pp]:i.ONE_MINUS_CONSTANT_COLOR,[mp]:i.CONSTANT_ALPHA,[gp]:i.ONE_MINUS_CONSTANT_ALPHA};function T(P,ce,z,q,de,he,Le,ot,St,Je){if(P===Vi){v===!0&&(be(i.BLEND),v=!1);return}if(v===!1&&(oe(i.BLEND),v=!0),P!==Qf){if(P!==u||Je!==E){if((c!==cn||w!==cn)&&(i.blendEquation(i.FUNC_ADD),c=cn,w=cn),Je)switch(P){case Fn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFunc(i.ONE,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,S=null,L=null,C=null,A.set(0,0,0),U=0,u=P,E=Je}return}de=de||ce,he=he||z,Le=Le||q,(ce!==c||de!==w)&&(i.blendEquationSeparate(at[ce],at[de]),c=ce,w=de),(z!==b||q!==S||he!==L||Le!==C)&&(i.blendFuncSeparate(Fe[z],Fe[q],Fe[he],Fe[Le]),b=z,S=q,L=he,C=Le),(ot.equals(A)===!1||St!==U)&&(i.blendColor(ot.r,ot.g,ot.b,St),A.copy(ot),U=St),u=P,E=!1}function Wt(P,ce){P.side===Si?be(i.CULL_FACE):oe(i.CULL_FACE);let z=P.side===Ut;ce&&(z=!z),He(z),P.blending===Fn&&P.transparent===!1?T(Vi):T(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const q=P.stencilWrite;o.setTest(q),q&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function Be(P){P!==Zf?(oe(i.CULL_FACE),P!==R&&(P===Ml?i.cullFace(i.BACK):P===Kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),R=P}function Ee(P){P!==G&&(X&&i.lineWidth(P),G=P)}function nt(P,ce,z){P?(oe(i.POLYGON_OFFSET_FILL),(B!==ce||j!==z)&&(i.polygonOffset(ce,z),B=ce,j=z)):be(i.POLYGON_OFFSET_FILL)}function xe(P){P?oe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function M(P){P===void 0&&(P=i.TEXTURE0+$-1),ae!==P&&(i.activeTexture(P),ae=P)}function _(P,ce,z){z===void 0&&(ae===null?z=i.TEXTURE0+$-1:z=ae);let q=fe[z];q===void 0&&(q={type:void 0,texture:void 0},fe[z]=q),(q.type!==P||q.texture!==ce)&&(ae!==z&&(i.activeTexture(z),ae=z),i.bindTexture(P,ce||_e[P]),q.type=P,q.texture=ce)}function N(){const P=fe[ae];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){tt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function ge(P){W.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function ze(P,ce){let z=h.get(ce);z===void 0&&(z=new WeakMap,h.set(ce,z));let q=z.get(P);q===void 0&&(q=i.getUniformBlockIndex(ce,P.name),z.set(P,q))}function Ie(P,ce){const q=h.get(ce).get(P);l.get(ce)!==q&&(i.uniformBlockBinding(ce,q,P.__bindingPointIndex),l.set(ce,q))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,fe={},f={},p=new WeakMap,m=[],g=null,v=!1,u=null,c=null,b=null,S=null,w=null,L=null,C=null,A=new Ze(0,0,0),U=0,E=!1,x=null,R=null,G=null,B=null,j=null,tt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:be,bindFramebuffer:Ye,drawBuffers:Ae,useProgram:ct,setBlending:T,setMaterial:Wt,setFlipSided:He,setCullFace:Be,setLineWidth:Ee,setPolygonOffset:nt,setScissorTest:xe,activeTexture:M,bindTexture:_,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:me,texImage3D:Te,updateUBOMapping:ze,uniformBlockBinding:Ie,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:V,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Re,viewport:ge,reset:it}}function p1(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return m?new OffscreenCanvas(M,_):Pr("canvas")}function v(M,_,N){let Y=1;const Z=xe(M);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const V=Math.floor(Y*Z.width),ye=Math.floor(Y*Z.height);f===void 0&&(f=g(V,ye));const le=_?g(V,ye):f;return le.width=V,le.height=ye,le.getContext("2d").drawImage(M,0,0,V,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+ye+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function u(M){return M.generateMipmaps}function c(M){i.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(M,_,N,Y,Z=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=_;if(_===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),_===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),_===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),_===i.RGBA){const ye=Z?Cr:We.getTransfer(Y);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=ye===et?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function w(M,_){let N;return M?_===null||_===fn||_===Ss?N=i.DEPTH24_STENCIL8:_===bi?N=i.DEPTH32F_STENCIL8:_===Ms&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fn||_===Ss?N=i.DEPTH_COMPONENT24:_===bi?N=i.DEPTH_COMPONENT32F:_===Ms&&(N=i.DEPTH_COMPONENT16),N}function L(M,_){return u(M)===!0||M.isFramebufferTexture&&M.minFilter!==ri&&M.minFilter!==Vt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function C(M){const _=M.target;_.removeEventListener("dispose",C),U(_),_.isVideoTexture&&d.delete(_)}function A(M){const _=M.target;_.removeEventListener("dispose",A),x(_)}function U(M){const _=n.get(M);if(_.__webglInit===void 0)return;const N=M.source,Y=p.get(N);if(Y){const Z=Y[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(M),Object.keys(Y).length===0&&p.delete(N)}n.remove(M)}function E(M){const _=n.get(M);i.deleteTexture(_.__webglTexture);const N=M.source,Y=p.get(N);delete Y[_.__cacheKey],a.memory.textures--}function x(M){const _=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Z=0;Z<_.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=M.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const V=n.get(N[Y]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(M)}let R=0;function G(){R=0}function B(){const M=R;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),R+=1,M}function j(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function $(M,_){const N=n.get(M);if(M.isVideoTexture&&Ee(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(N,M,_);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function X(M,_){const N=n.get(M);if(M.version>0&&N.__version!==M.version){W(N,M,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function K(M,_){const N=n.get(M);if(M.version>0&&N.__version!==M.version){W(N,M,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function H(M,_){const N=n.get(M);if(M.version>0&&N.__version!==M.version){te(N,M,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const ae={[Ka]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},fe={[ri]:i.NEAREST,[bp]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},we={[Pp]:i.NEVER,[Np]:i.ALWAYS,[Lp]:i.LESS,[ph]:i.LEQUAL,[Dp]:i.EQUAL,[Up]:i.GEQUAL,[Ip]:i.GREATER,[kp]:i.NOTEQUAL};function Ne(M,_){if(_.type===bi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Vt||_.magFilter===oa||_.magFilter===Gs||_.magFilter===zi||_.minFilter===Vt||_.minFilter===oa||_.minFilter===Gs||_.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,ae[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ae[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ae[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,fe[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ri||_.minFilter!==Gs&&_.minFilter!==zi||_.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function tt(M,_){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",C));const Y=_.source;let Z=p.get(Y);Z===void 0&&(Z={},p.set(Y,Z));const V=j(_);if(V!==M.__cacheKey){Z[V]===void 0&&(Z[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[V].usedTimes++;const ye=Z[M.__cacheKey];ye!==void 0&&(Z[M.__cacheKey].usedTimes--,ye.usedTimes===0&&E(_)),M.__cacheKey=V,M.__webglTexture=Z[V].texture}return N}function W(M,_,N){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=tt(M,_),V=_.source;t.bindTexture(Y,M.__webglTexture,i.TEXTURE0+N);const ye=n.get(V);if(V.version!==ye.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);const le=We.getPrimaries(We.workingColorSpace),pe=_.colorSpace===Bi?null:We.getPrimaries(_.colorSpace),Ve=_.colorSpace===Bi||le===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=v(_.image,!1,s.maxTextureSize);Q=nt(_,Q);const me=r.convert(_.format,_.colorSpace),Te=r.convert(_.type);let Re=S(_.internalFormat,me,Te,_.colorSpace,_.isVideoTexture);Ne(Y,_);let ge;const ze=_.mipmaps,Ie=_.isVideoTexture!==!0,it=ye.__version===void 0||Z===!0,P=V.dataReady,ce=L(_,Q);if(_.isDepthTexture)Re=w(_.format===Ts,_.type),it&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,Re,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Re,Q.width,Q.height,0,me,Te,null));else if(_.isDataTexture)if(ze.length>0){Ie&&it&&t.texStorage2D(i.TEXTURE_2D,ce,Re,ze[0].width,ze[0].height);for(let z=0,q=ze.length;z<q;z++)ge=ze[z],Ie?P&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,ge.width,ge.height,me,Te,ge.data):t.texImage2D(i.TEXTURE_2D,z,Re,ge.width,ge.height,0,me,Te,ge.data);_.generateMipmaps=!1}else Ie?(it&&t.texStorage2D(i.TEXTURE_2D,ce,Re,Q.width,Q.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,me,Te,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Re,Q.width,Q.height,0,me,Te,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Re,ze[0].width,ze[0].height,Q.depth);for(let z=0,q=ze.length;z<q;z++)if(ge=ze[z],_.format!==si)if(me!==null)if(Ie){if(P)if(_.layerUpdates.size>0){const de=tc(ge.width,ge.height,_.format,_.type);for(const he of _.layerUpdates){const Le=ge.data.subarray(he*de/ge.data.BYTES_PER_ELEMENT,(he+1)*de/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,he,ge.width,ge.height,1,me,Le)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ge.width,ge.height,Q.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Re,ge.width,ge.height,Q.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ge.width,ge.height,Q.depth,me,Te,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,z,Re,ge.width,ge.height,Q.depth,0,me,Te,ge.data)}else{Ie&&it&&t.texStorage2D(i.TEXTURE_2D,ce,Re,ze[0].width,ze[0].height);for(let z=0,q=ze.length;z<q;z++)ge=ze[z],_.format!==si?me!==null?Ie?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,z,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?P&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,ge.width,ge.height,me,Te,ge.data):t.texImage2D(i.TEXTURE_2D,z,Re,ge.width,ge.height,0,me,Te,ge.data)}else if(_.isDataArrayTexture)if(Ie){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Re,Q.width,Q.height,Q.depth),P)if(_.layerUpdates.size>0){const z=tc(Q.width,Q.height,_.format,_.type);for(const q of _.layerUpdates){const de=Q.data.subarray(q*z/Q.data.BYTES_PER_ELEMENT,(q+1)*z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,me,Te,de)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,me,Te,Q.data);else if(_.isData3DTexture)Ie?(it&&t.texStorage3D(i.TEXTURE_3D,ce,Re,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,me,Te,Q.data);else if(_.isFramebufferTexture){if(it)if(Ie)t.texStorage2D(i.TEXTURE_2D,ce,Re,Q.width,Q.height);else{let z=Q.width,q=Q.height;for(let de=0;de<ce;de++)t.texImage2D(i.TEXTURE_2D,de,Re,z,q,0,me,Te,null),z>>=1,q>>=1}}else if(ze.length>0){if(Ie&&it){const z=xe(ze[0]);t.texStorage2D(i.TEXTURE_2D,ce,Re,z.width,z.height)}for(let z=0,q=ze.length;z<q;z++)ge=ze[z],Ie?P&&t.texSubImage2D(i.TEXTURE_2D,z,0,0,me,Te,ge):t.texImage2D(i.TEXTURE_2D,z,Re,me,Te,ge);_.generateMipmaps=!1}else if(Ie){if(it){const z=xe(Q);t.texStorage2D(i.TEXTURE_2D,ce,Re,z.width,z.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,Re,me,Te,Q);u(_)&&c(Y),ye.__version=V.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function te(M,_,N){if(_.image.length!==6)return;const Y=tt(M,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);const V=n.get(Z);if(Z.version!==V.__version||Y===!0){t.activeTexture(i.TEXTURE0+N);const ye=We.getPrimaries(We.workingColorSpace),le=_.colorSpace===Bi?null:We.getPrimaries(_.colorSpace),pe=_.colorSpace===Bi||ye===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ve=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,me=[];for(let q=0;q<6;q++)!Ve&&!Q?me[q]=v(_.image[q],!0,s.maxCubemapSize):me[q]=Q?_.image[q].image:_.image[q],me[q]=nt(_,me[q]);const Te=me[0],Re=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),ze=S(_.internalFormat,Re,ge,_.colorSpace),Ie=_.isVideoTexture!==!0,it=V.__version===void 0||Y===!0,P=Z.dataReady;let ce=L(_,Te);Ne(i.TEXTURE_CUBE_MAP,_);let z;if(Ve){Ie&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,ze,Te.width,Te.height);for(let q=0;q<6;q++){z=me[q].mipmaps;for(let de=0;de<z.length;de++){const he=z[de];_.format!==si?Re!==null?Ie?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,he.width,he.height,Re,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,ze,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,0,0,he.width,he.height,Re,ge,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de,ze,he.width,he.height,0,Re,ge,he.data)}}}else{if(z=_.mipmaps,Ie&&it){z.length>0&&ce++;const q=xe(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,ze,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,me[q].width,me[q].height,Re,ge,me[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ze,me[q].width,me[q].height,0,Re,ge,me[q].data);for(let de=0;de<z.length;de++){const Le=z[de].image[q].image;Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,Le.width,Le.height,Re,ge,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,ze,Le.width,Le.height,0,Re,ge,Le.data)}}else{Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Re,ge,me[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ze,Re,ge,me[q]);for(let de=0;de<z.length;de++){const he=z[de];Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,0,0,Re,ge,he.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,de+1,ze,Re,ge,he.image[q])}}}u(_)&&c(i.TEXTURE_CUBE_MAP),V.__version=Z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function _e(M,_,N,Y,Z,V){const ye=r.convert(N.format,N.colorSpace),le=r.convert(N.type),pe=S(N.internalFormat,ye,le,N.colorSpace),Ve=n.get(_),Q=n.get(N);if(Q.__renderTarget=_,!Ve.__hasExternalTextures){const me=Math.max(1,_.width>>V),Te=Math.max(1,_.height>>V);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,V,pe,me,Te,_.depth,0,ye,le,null):t.texImage2D(Z,V,pe,me,Te,0,ye,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,He(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,Q.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(M,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){const Y=_.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,V=w(_.stencilBuffer,Z),ye=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=He(_);Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,V,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,M)}else{const Y=_.textures;for(let Z=0;Z<Y.length;Z++){const V=Y[Z],ye=r.convert(V.format,V.colorSpace),le=r.convert(V.type),pe=S(V.internalFormat,ye,le,V.colorSpace),Ve=He(_);N&&Be(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,pe,_.width,_.height):Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const Z=Y.__webglTexture,V=He(_);if(_.depthTexture.format===bs)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Ts)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ye(M){const _=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const Y=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=Y}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");be(_.__webglFramebuffer,M)}else if(N){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),oe(_.__webglDepthbuffer[Y],M,!1);else{const Z=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,V)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),oe(_.__webglDepthbuffer,M,!1);else{const Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(M,_,N){const Y=n.get(M);_!==void 0&&_e(Y.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ye(M)}function ct(M){const _=M.texture,N=n.get(M),Y=n.get(_);M.addEventListener("dispose",A);const Z=M.textures,V=M.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),V){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let pe=0;pe<_.mipmaps.length;pe++)N.__webglFramebuffer[le][pe]=i.createFramebuffer()}else N.__webglFramebuffer[le]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)N.__webglFramebuffer[le]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ye)for(let le=0,pe=Z.length;le<pe;le++){const Ve=n.get(Z[le]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&Be(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const pe=Z[le];N.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const Ve=r.convert(pe.format,pe.colorSpace),Q=r.convert(pe.type),me=S(pe.internalFormat,Ve,Q,pe.colorSpace,M.isXRRenderTarget===!0),Te=He(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,me,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,N.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)_e(N.__webglFramebuffer[le][pe],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else _e(N.__webglFramebuffer[le],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);u(_)&&c(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,pe=Z.length;le<pe;le++){const Ve=Z[le],Q=n.get(Ve);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ne(i.TEXTURE_2D,Ve),_e(N.__webglFramebuffer,M,Ve,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),u(Ve)&&c(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),Ne(le,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)_e(N.__webglFramebuffer[pe],M,_,i.COLOR_ATTACHMENT0,le,pe);else _e(N.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,le,0);u(_)&&c(le),t.unbindTexture()}M.depthBuffer&&Ye(M)}function at(M){const _=M.textures;for(let N=0,Y=_.length;N<Y;N++){const Z=_[N];if(u(Z)){const V=b(M),ye=n.get(Z).__webglTexture;t.bindTexture(V,ye),c(V),t.unbindTexture()}}}const Fe=[],T=[];function Wt(M){if(M.samples>0){if(Be(M)===!1){const _=M.textures,N=M.width,Y=M.height;let Z=i.COLOR_BUFFER_BIT;const V=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(M),le=_.length>1;if(le)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Ve=n.get(_[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,i.NEAREST),l===!0&&(Fe.length=0,T.length=0,Fe.push(i.COLOR_ATTACHMENT0+pe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Fe.push(V),T.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[pe]);const Ve=n.get(_[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function He(M){return Math.min(s.maxSamples,M.samples)}function Be(M){const _=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ee(M){const _=a.render.frame;d.get(M)!==_&&(d.set(M,_),M.update())}function nt(M,_){const N=M.colorSpace,Y=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==pn&&N!==Bi&&(We.getTransfer(N)===et?(Y!==si||Z!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function xe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Be}function m1(i,e){function t(n,s=Bi){let r;const a=We.getTransfer(s);if(n===Ri)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.BYTE;if(n===rh)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===fn)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===lh)return i.RGB;if(n===si)return i.RGBA;if(n===ch)return i.LUMINANCE;if(n===hh)return i.LUMINANCE_ALPHA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===dh)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===uh)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===_r||n===yr||n===xr||n===wr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===eo||n===to||n===io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===no||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===no||n===so)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ro)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===_o||n===yo||n===xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===wo||n===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===Mo||n===So||n===bo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const g1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
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

}`;class _1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Et,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pi({vertexShader:g1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y1 extends Xn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,d=null,f=null,p=null,m=null,g=null;const v=new _1,u=t.getContextAttributes();let c=null,b=null;const S=[],w=[],L=new qe;let C=null;const A=new Ht;A.viewport=new ht;const U=new Ht;U.viewport=new ht;const E=[A,U],x=new Bm;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=S[W];return te===void 0&&(te=new Aa,S[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=S[W];return te===void 0&&(te=new Aa,S[W]=te),te.getGripSpace()},this.getHand=function(W){let te=S[W];return te===void 0&&(te=new Aa,S[W]=te),te.getHandSpace()};function B(W){const te=w.indexOf(W.inputSource);if(te===-1)return;const _e=S[te];_e!==void 0&&(_e.update(W.inputSource,W.frame,h||a),_e.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",$);for(let W=0;W<S.length;W++){const te=w[W];te!==null&&(w[W]=null,S[W].disconnect(te))}R=null,G=null,v.reset(),e.setRenderTarget(c),m=null,p=null,f=null,s=null,b=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(c=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",j),s.addEventListener("inputsourceschange",$),u.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,oe=null,be=null;u.depth&&(be=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=u.stencil?Ts:bs,oe=u.stencil?Ss:fn);const Ye={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Ye),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new ji(p.textureWidth,p.textureHeight,{format:si,type:Ri,depthTexture:new Mh(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const _e={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ji(m.framebufferWidth,m.framebufferHeight,{format:si,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(W){for(let te=0;te<W.removed.length;te++){const _e=W.removed[te],oe=w.indexOf(_e);oe>=0&&(w[oe]=null,S[oe].disconnect(_e))}for(let te=0;te<W.added.length;te++){const _e=W.added[te];let oe=w.indexOf(_e);if(oe===-1){for(let Ye=0;Ye<S.length;Ye++)if(Ye>=w.length){w.push(_e),oe=Ye;break}else if(w[Ye]===null){w[Ye]=_e,oe=Ye;break}if(oe===-1)break}const be=S[oe];be&&be.connect(_e)}}const X=new I,K=new I;function H(W,te,_e){X.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const oe=X.distanceTo(K),be=te.projectionMatrix.elements,Ye=_e.projectionMatrix.elements,Ae=be[14]/(be[10]-1),ct=be[14]/(be[10]+1),at=(be[9]+1)/be[5],Fe=(be[9]-1)/be[5],T=(be[8]-1)/be[0],Wt=(Ye[8]+1)/Ye[0],He=Ae*T,Be=Ae*Wt,Ee=oe/(-T+Wt),nt=Ee*-T;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(nt),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const xe=Ae+Ee,M=ct+Ee,_=He-nt,N=Be+(oe-nt),Y=at*ct/M*xe,Z=Fe*ct/M*xe;W.projectionMatrix.makePerspective(_,N,Y,Z,xe,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ae(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let te=W.near,_e=W.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),x.near=U.near=A.near=te,x.far=U.far=A.far=_e,(R!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,G=x.far),A.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,x.layers.mask=A.layers.mask|U.layers.mask;const oe=W.parent,be=x.cameras;ae(x,oe);for(let Ye=0;Ye<be.length;Ye++)ae(be[Ye],oe);be.length===2?H(x,A,U):x.projectionMatrix.copy(A.projectionMatrix),fe(W,x,oe)};function fe(W,te,_e){_e===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=As*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let we=null;function Ne(W,te){if(d=te.getViewerPose(h||a),g=te,d!==null){const _e=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let oe=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Ae=0;Ae<_e.length;Ae++){const ct=_e[Ae];let at=null;if(m!==null)at=m.getViewport(ct);else{const T=f.getViewSubImage(p,ct);at=T.viewport,Ae===0&&(e.setRenderTargetTextures(b,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(b))}let Fe=E[Ae];Fe===void 0&&(Fe=new Ht,Fe.layers.enable(Ae),Fe.viewport=new ht,E[Ae]=Fe),Fe.matrix.fromArray(ct.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ct.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(at.x,at.y,at.width,at.height),Ae===0&&(x.matrix.copy(Fe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Fe)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const Ae=f.getDepthInformation(_e[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,s.renderState)}}for(let _e=0;_e<S.length;_e++){const oe=w[_e],be=S[_e];oe!==null&&be!==void 0&&be.update(oe,te,h||a)}we&&we(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const tt=new Sh;tt.setAnimationLoop(Ne),this.setAnimationLoop=function(W){we=W},this.dispose=function(){}}}const an=new pi,x1=new Qe;function w1(i,e){function t(u,c){u.matrixAutoUpdate===!0&&u.updateMatrix(),c.value.copy(u.matrix)}function n(u,c){c.color.getRGB(u.fogColor.value,xh(i)),c.isFog?(u.fogNear.value=c.near,u.fogFar.value=c.far):c.isFogExp2&&(u.fogDensity.value=c.density)}function s(u,c,b,S,w){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(u,c):c.isMeshToonMaterial?(r(u,c),f(u,c)):c.isMeshPhongMaterial?(r(u,c),d(u,c)):c.isMeshStandardMaterial?(r(u,c),p(u,c),c.isMeshPhysicalMaterial&&m(u,c,w)):c.isMeshMatcapMaterial?(r(u,c),g(u,c)):c.isMeshDepthMaterial?r(u,c):c.isMeshDistanceMaterial?(r(u,c),v(u,c)):c.isMeshNormalMaterial?r(u,c):c.isLineBasicMaterial?(a(u,c),c.isLineDashedMaterial&&o(u,c)):c.isPointsMaterial?l(u,c,b,S):c.isSpriteMaterial?h(u,c):c.isShadowMaterial?(u.color.value.copy(c.color),u.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(u,c){u.opacity.value=c.opacity,c.color&&u.diffuse.value.copy(c.color),c.emissive&&u.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(u.map.value=c.map,t(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,t(c.alphaMap,u.alphaMapTransform)),c.bumpMap&&(u.bumpMap.value=c.bumpMap,t(c.bumpMap,u.bumpMapTransform),u.bumpScale.value=c.bumpScale,c.side===Ut&&(u.bumpScale.value*=-1)),c.normalMap&&(u.normalMap.value=c.normalMap,t(c.normalMap,u.normalMapTransform),u.normalScale.value.copy(c.normalScale),c.side===Ut&&u.normalScale.value.negate()),c.displacementMap&&(u.displacementMap.value=c.displacementMap,t(c.displacementMap,u.displacementMapTransform),u.displacementScale.value=c.displacementScale,u.displacementBias.value=c.displacementBias),c.emissiveMap&&(u.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,u.emissiveMapTransform)),c.specularMap&&(u.specularMap.value=c.specularMap,t(c.specularMap,u.specularMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest);const b=e.get(c),S=b.envMap,w=b.envMapRotation;S&&(u.envMap.value=S,an.copy(w),an.x*=-1,an.y*=-1,an.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),u.envMapRotation.value.setFromMatrix4(x1.makeRotationFromEuler(an)),u.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=c.reflectivity,u.ior.value=c.ior,u.refractionRatio.value=c.refractionRatio),c.lightMap&&(u.lightMap.value=c.lightMap,u.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,u.lightMapTransform)),c.aoMap&&(u.aoMap.value=c.aoMap,u.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,u.aoMapTransform))}function a(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,c.map&&(u.map.value=c.map,t(c.map,u.mapTransform))}function o(u,c){u.dashSize.value=c.dashSize,u.totalSize.value=c.dashSize+c.gapSize,u.scale.value=c.scale}function l(u,c,b,S){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.size.value=c.size*b,u.scale.value=S*.5,c.map&&(u.map.value=c.map,t(c.map,u.uvTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,t(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function h(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.rotation.value=c.rotation,c.map&&(u.map.value=c.map,t(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,t(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function d(u,c){u.specular.value.copy(c.specular),u.shininess.value=Math.max(c.shininess,1e-4)}function f(u,c){c.gradientMap&&(u.gradientMap.value=c.gradientMap)}function p(u,c){u.metalness.value=c.metalness,c.metalnessMap&&(u.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,u.metalnessMapTransform)),u.roughness.value=c.roughness,c.roughnessMap&&(u.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,u.roughnessMapTransform)),c.envMap&&(u.envMapIntensity.value=c.envMapIntensity)}function m(u,c,b){u.ior.value=c.ior,c.sheen>0&&(u.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),u.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(u.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,u.sheenColorMapTransform)),c.sheenRoughnessMap&&(u.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,u.sheenRoughnessMapTransform))),c.clearcoat>0&&(u.clearcoat.value=c.clearcoat,u.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(u.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,u.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(u.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Ut&&u.clearcoatNormalScale.value.negate())),c.dispersion>0&&(u.dispersion.value=c.dispersion),c.iridescence>0&&(u.iridescence.value=c.iridescence,u.iridescenceIOR.value=c.iridescenceIOR,u.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(u.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,u.iridescenceMapTransform)),c.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),c.transmission>0&&(u.transmission.value=c.transmission,u.transmissionSamplerMap.value=b.texture,u.transmissionSamplerSize.value.set(b.width,b.height),c.transmissionMap&&(u.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,u.transmissionMapTransform)),u.thickness.value=c.thickness,c.thicknessMap&&(u.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=c.attenuationDistance,u.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(u.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(u.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=c.specularIntensity,u.specularColor.value.copy(c.specularColor),c.specularColorMap&&(u.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,u.specularColorMapTransform)),c.specularIntensityMap&&(u.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,c){c.matcap&&(u.matcap.value=c.matcap)}function v(u,c){const b=e.get(c).light;u.referencePosition.value.setFromMatrixPosition(b.matrixWorld),u.nearDistance.value=b.shadow.camera.near,u.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E1(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const w=S.program;n.uniformBlockBinding(b,w)}function h(b,S){let w=s[b.id];w===void 0&&(g(b),w=d(b),s[b.id]=w,b.addEventListener("dispose",u));const L=S.program;n.updateUBOMapping(b,L);const C=e.render.frame;r[b.id]!==C&&(p(b),r[b.id]=C)}function d(b){const S=f();b.__bindingPointIndex=S;const w=i.createBuffer(),L=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const S=s[b.id],w=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,A=w.length;C<A;C++){const U=Array.isArray(w[C])?w[C]:[w[C]];for(let E=0,x=U.length;E<x;E++){const R=U[E];if(m(R,C,E,L)===!0){const G=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let $=0;$<B.length;$++){const X=B[$],K=v(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,G+j,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,j),j+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,w,L){const C=b.value,A=S+"_"+w;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const U=L[A];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return L[A]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(b){const S=b.uniforms;let w=0;const L=16;for(let A=0,U=S.length;A<U;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,R=E.length;x<R;x++){const G=E[x],B=Array.isArray(G.value)?G.value:[G.value];for(let j=0,$=B.length;j<$;j++){const X=B[j],K=v(X),H=w%L,ae=H%K.boundary,fe=H+ae;w+=ae,fe!==0&&L-fe<K.storage&&(w+=L-fe),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=K.storage}}}const C=w%L;return C>0&&(w+=L-C),b.__size=w,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function u(b){const S=b.target;S.removeEventListener("dispose",u);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function c(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:h,dispose:c}}class M1{constructor(e={}){const{canvas:t=Qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let u=null,c=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let L=!1;this._outputColorSpace=$t;let C=0,A=0,U=null,E=-1,x=null;const R=new ht,G=new ht;let B=null;const j=new Ze(0);let $=0,X=t.width,K=t.height,H=1,ae=null,fe=null;const we=new ht(0,0,X,K),Ne=new ht(0,0,X,K);let tt=!1;const W=new Qo;let te=!1,_e=!1;const oe=new Qe,be=new Qe,Ye=new I,Ae=new ht,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Fe(){return U===null?H:1}let T=n;function Wt(y,D){return t.getContext(y,D)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",he,!1),T===null){const D="webgl2";if(T=Wt(D,y),T===null)throw Wt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let He,Be,Ee,nt,xe,M,_,N,Y,Z,V,ye,le,pe,Ve,Q,me,Te,Re,ge,ze,Ie,it,P;function ce(){He=new Iv(T),He.init(),Ie=new m1(T,He),Be=new Tv(T,He,e,Ie),Ee=new f1(T,He),Be.reverseDepthBuffer&&p&&Ee.buffers.depth.setReversed(!0),nt=new Nv(T),xe=new e1,M=new p1(T,He,Ee,xe,Be,Ie,nt),_=new Cv(w),N=new Dv(w),Y=new Vm(T),it=new Sv(T,Y),Z=new kv(T,Y,nt,it),V=new Fv(T,Z,Y,nt),Re=new Ov(T,Be,M),Q=new Av(xe),ye=new Q_(w,_,N,He,Be,it,Q),le=new w1(w,xe),pe=new i1,Ve=new l1(He),Te=new Mv(w,_,N,Ee,V,m,l),me=new d1(w,V,Be),P=new E1(T,nt,Be,Ee),ge=new bv(T,He,nt),ze=new Uv(T,He,nt),nt.programs=ye.programs,w.capabilities=Be,w.extensions=He,w.properties=xe,w.renderLists=pe,w.shadowMap=me,w.state=Ee,w.info=nt}ce();const z=new y1(w,T);this.xr=z,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const y=He.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=He.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(X,K,!1))},this.getSize=function(y){return y.set(X,K)},this.setSize=function(y,D,O=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,K=D,t.width=Math.floor(y*H),t.height=Math.floor(D*H),O===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(y,D,O){X=y,K=D,H=O,t.width=Math.floor(y*O),t.height=Math.floor(D*O),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,D,O,F){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,D,O,F),Ee.viewport(R.copy(we).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Ne)},this.setScissor=function(y,D,O,F){y.isVector4?Ne.set(y.x,y.y,y.z,y.w):Ne.set(y,D,O,F),Ee.scissor(G.copy(Ne).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(y){Ee.setScissorTest(tt=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){fe=y},this.getClearColor=function(y){return y.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,O=!0){let F=0;if(y){let k=!1;if(U!==null){const J=U.texture.format;k=J===jo||J===qo||J===Yo}if(k){const J=U.texture.type,re=J===Ri||J===fn||J===Ms||J===Ss||J===Wo||J===Xo,ue=Te.getClearColor(),ve=Te.getClearAlpha(),Pe=ue.r,Ce=ue.g,Me=ue.b;re?(g[0]=Pe,g[1]=Ce,g[2]=Me,g[3]=ve,T.clearBufferuiv(T.COLOR,0,g)):(v[0]=Pe,v[1]=Ce,v[2]=Me,v[3]=ve,T.clearBufferiv(T.COLOR,0,v))}else F|=T.COLOR_BUFFER_BIT}D&&(F|=T.DEPTH_BUFFER_BIT),O&&(F|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Te.dispose(),pe.dispose(),Ve.dispose(),xe.dispose(),_.dispose(),N.dispose(),V.dispose(),it.dispose(),P.dispose(),ye.dispose(),z.dispose(),z.removeEventListener("sessionstart",gl),z.removeEventListener("sessionend",vl),Ji.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=nt.autoReset,D=me.enabled,O=me.autoUpdate,F=me.needsUpdate,k=me.type;ce(),nt.autoReset=y,me.enabled=D,me.autoUpdate=O,me.needsUpdate=F,me.type=k}function he(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Le(y){const D=y.target;D.removeEventListener("dispose",Le),ot(D)}function ot(y){St(y),xe.remove(y)}function St(y){const D=xe.get(y).programs;D!==void 0&&(D.forEach(function(O){ye.releaseProgram(O)}),y.isShaderMaterial&&ye.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,O,F,k,J){D===null&&(D=ct);const re=k.isMesh&&k.matrixWorld.determinant()<0,ue=Wf(y,D,O,F,k);Ee.setMaterial(F,re);let ve=O.index,Pe=1;if(F.wireframe===!0){if(ve=Z.getWireframeAttribute(O),ve===void 0)return;Pe=2}const Ce=O.drawRange,Me=O.attributes.position;let Ge=Ce.start*Pe,je=(Ce.start+Ce.count)*Pe;J!==null&&(Ge=Math.max(Ge,J.start*Pe),je=Math.min(je,(J.start+J.count)*Pe)),ve!==null?(Ge=Math.max(Ge,0),je=Math.min(je,ve.count)):Me!=null&&(Ge=Math.max(Ge,0),je=Math.min(je,Me.count));const dt=je-Ge;if(dt<0||dt===1/0)return;it.setup(k,F,ue,O,ve);let lt,Xe=ge;if(ve!==null&&(lt=Y.get(ve),Xe=ze,Xe.setIndex(lt)),k.isMesh)F.wireframe===!0?(Ee.setLineWidth(F.wireframeLinewidth*Fe()),Xe.setMode(T.LINES)):Xe.setMode(T.TRIANGLES);else if(k.isLine){let Se=F.linewidth;Se===void 0&&(Se=1),Ee.setLineWidth(Se*Fe()),k.isLineSegments?Xe.setMode(T.LINES):k.isLineLoop?Xe.setMode(T.LINE_LOOP):Xe.setMode(T.LINE_STRIP)}else k.isPoints?Xe.setMode(T.POINTS):k.isSprite&&Xe.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Se=k._multiDrawStarts,yt=k._multiDrawCounts,$e=k._multiDrawCount,Jt=ve?Y.get(ve).bytesPerElement:1,vn=xe.get(F).currentProgram.getUniforms();for(let Ot=0;Ot<$e;Ot++)vn.setValue(T,"_gl_DrawID",Ot),Xe.render(Se[Ot]/Jt,yt[Ot])}else if(k.isInstancedMesh)Xe.renderInstances(Ge,dt,k.count);else if(O.isInstancedBufferGeometry){const Se=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,yt=Math.min(O.instanceCount,Se);Xe.renderInstances(Ge,dt,yt)}else Xe.render(Ge,dt)};function Je(y,D,O){y.transparent===!0&&y.side===Si&&y.forceSinglePass===!1?(y.side=Ut,y.needsUpdate=!0,Vs(y,D,O),y.side=qi,y.needsUpdate=!0,Vs(y,D,O),y.side=Si):Vs(y,D,O)}this.compile=function(y,D,O=null){O===null&&(O=y),c=Ve.get(O),c.init(D),S.push(c),O.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(c.pushLight(k),k.castShadow&&c.pushShadow(k))}),y!==O&&y.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(c.pushLight(k),k.castShadow&&c.pushShadow(k))}),c.setupLights();const F=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const J=k.material;if(J)if(Array.isArray(J))for(let re=0;re<J.length;re++){const ue=J[re];Je(ue,O,k),F.add(ue)}else Je(J,O,k),F.add(J)}),c=S.pop(),F},this.compileAsync=function(y,D,O=null){const F=this.compile(y,D,O);return new Promise(k=>{function J(){if(F.forEach(function(re){xe.get(re).currentProgram.isReady()&&F.delete(re)}),F.size===0){k(y);return}setTimeout(J,10)}He.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Kt=null;function vi(y){Kt&&Kt(y)}function gl(){Ji.stop()}function vl(){Ji.start()}const Ji=new Sh;Ji.setAnimationLoop(vi),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(y){Kt=y,z.setAnimationLoop(y),y===null?Ji.stop():Ji.start()},z.addEventListener("sessionstart",gl),z.addEventListener("sessionend",vl),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(D),D=z.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,D,U),c=Ve.get(y,S.length),c.init(D),S.push(c),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(be),_e=this.localClippingEnabled,te=Q.init(this.clippingPlanes,_e),u=pe.get(y,b.length),u.init(),b.push(u),z.enabled===!0&&z.isPresenting===!0){const J=w.xr.getDepthSensingMesh();J!==null&&ra(J,D,-1/0,w.sortObjects)}ra(y,D,0,w.sortObjects),u.finish(),w.sortObjects===!0&&u.sort(ae,fe),at=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,at&&Te.addToRenderList(u,y),this.info.render.frame++,te===!0&&Q.beginShadows();const O=c.state.shadowsArray;me.render(O,y,D),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=u.opaque,k=u.transmissive;if(c.setupLights(),D.isArrayCamera){const J=D.cameras;if(k.length>0)for(let re=0,ue=J.length;re<ue;re++){const ve=J[re];yl(F,k,y,ve)}at&&Te.render(y);for(let re=0,ue=J.length;re<ue;re++){const ve=J[re];_l(u,y,ve,ve.viewport)}}else k.length>0&&yl(F,k,y,D),at&&Te.render(y),_l(u,y,D);U!==null&&A===0&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(w,y,D),it.resetDefaultState(),E=-1,x=null,S.pop(),S.length>0?(c=S[S.length-1],te===!0&&Q.setGlobalState(w.clippingPlanes,c.state.camera)):c=null,b.pop(),b.length>0?u=b[b.length-1]:u=null};function ra(y,D,O,F){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)c.pushLight(y),y.castShadow&&c.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){F&&Ae.setFromMatrixPosition(y.matrixWorld).applyMatrix4(be);const re=V.update(y),ue=y.material;ue.visible&&u.push(y,re,ue,O,Ae.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||W.intersectsObject(y))){const re=V.update(y),ue=y.material;if(F&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ae.copy(y.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ae.copy(re.boundingSphere.center)),Ae.applyMatrix4(y.matrixWorld).applyMatrix4(be)),Array.isArray(ue)){const ve=re.groups;for(let Pe=0,Ce=ve.length;Pe<Ce;Pe++){const Me=ve[Pe],Ge=ue[Me.materialIndex];Ge&&Ge.visible&&u.push(y,re,Ge,O,Ae.z,Me)}}else ue.visible&&u.push(y,re,ue,O,Ae.z,null)}}const J=y.children;for(let re=0,ue=J.length;re<ue;re++)ra(J[re],D,O,F)}function _l(y,D,O,F){const k=y.opaque,J=y.transmissive,re=y.transparent;c.setupLightsView(O),te===!0&&Q.setGlobalState(w.clippingPlanes,O),F&&Ee.viewport(R.copy(F)),k.length>0&&Hs(k,D,O),J.length>0&&Hs(J,D,O),re.length>0&&Hs(re,D,O),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function yl(y,D,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[F.id]===void 0&&(c.state.transmissionRenderTarget[F.id]=new ji(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Ps:Ri,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const J=c.state.transmissionRenderTarget[F.id],re=F.viewport||R;J.setSize(re.z*w.transmissionResolutionScale,re.w*w.transmissionResolutionScale);const ue=w.getRenderTarget();w.setRenderTarget(J),w.getClearColor(j),$=w.getClearAlpha(),$<1&&w.setClearColor(16777215,.5),w.clear(),at&&Te.render(O);const ve=w.toneMapping;w.toneMapping=Gi;const Pe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),c.setupLightsView(F),te===!0&&Q.setGlobalState(w.clippingPlanes,F),Hs(y,O,F),M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Me=0,Ge=D.length;Me<Ge;Me++){const je=D[Me],dt=je.object,lt=je.geometry,Xe=je.material,Se=je.group;if(Xe.side===Si&&dt.layers.test(F.layers)){const yt=Xe.side;Xe.side=Ut,Xe.needsUpdate=!0,xl(dt,O,F,lt,Xe,Se),Xe.side=yt,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J))}w.setRenderTarget(ue),w.setClearColor(j,$),Pe!==void 0&&(F.viewport=Pe),w.toneMapping=ve}function Hs(y,D,O){const F=D.isScene===!0?D.overrideMaterial:null;for(let k=0,J=y.length;k<J;k++){const re=y[k],ue=re.object,ve=re.geometry,Pe=re.group;let Ce=re.material;Ce.allowOverride===!0&&F!==null&&(Ce=F),ue.layers.test(O.layers)&&xl(ue,D,O,ve,Ce,Pe)}}function xl(y,D,O,F,k,J){y.onBeforeRender(w,D,O,F,k,J),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(w,D,O,F,y,J),k.transparent===!0&&k.side===Si&&k.forceSinglePass===!1?(k.side=Ut,k.needsUpdate=!0,w.renderBufferDirect(O,D,F,k,y,J),k.side=qi,k.needsUpdate=!0,w.renderBufferDirect(O,D,F,k,y,J),k.side=Si):w.renderBufferDirect(O,D,F,k,y,J),y.onAfterRender(w,D,O,F,k,J)}function Vs(y,D,O){D.isScene!==!0&&(D=ct);const F=xe.get(y),k=c.state.lights,J=c.state.shadowsArray,re=k.state.version,ue=ye.getParameters(y,k.state,J,D,O),ve=ye.getProgramCacheKey(ue);let Pe=F.programs;F.environment=y.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(y.isMeshStandardMaterial?N:_).get(y.envMap||F.environment),F.envMapRotation=F.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",Le),Pe=new Map,F.programs=Pe);let Ce=Pe.get(ve);if(Ce!==void 0){if(F.currentProgram===Ce&&F.lightsStateVersion===re)return El(y,ue),Ce}else ue.uniforms=ye.getUniforms(y),y.onBeforeCompile(ue,w),Ce=ye.acquireProgram(ue,ve),Pe.set(ve,Ce),F.uniforms=ue.uniforms;const Me=F.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Me.clippingPlanes=Q.uniform),El(y,ue),F.needsLights=Yf(y),F.lightsStateVersion=re,F.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.directionalShadowMap.value=k.state.directionalShadowMap,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotShadowMap.value=k.state.spotShadowMap,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMap.value=k.state.pointShadowMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),F.currentProgram=Ce,F.uniformsList=null,Ce}function wl(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Sr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function El(y,D){const O=xe.get(y);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Wf(y,D,O,F,k){D.isScene!==!0&&(D=ct),M.resetTextureUnits();const J=D.fog,re=F.isMeshStandardMaterial?D.environment:null,ue=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:pn,ve=(F.isMeshStandardMaterial?N:_).get(F.envMap||re),Pe=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Me=!!O.morphAttributes.position,Ge=!!O.morphAttributes.normal,je=!!O.morphAttributes.color;let dt=Gi;F.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(dt=w.toneMapping);const lt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Xe=lt!==void 0?lt.length:0,Se=xe.get(F),yt=c.state.lights;if(te===!0&&(_e===!0||y!==x)){const Ct=y===x&&F.id===E;Q.setState(F,y,Ct)}let $e=!1;F.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==yt.state.version||Se.outputColorSpace!==ue||k.isBatchedMesh&&Se.batching===!1||!k.isBatchedMesh&&Se.batching===!0||k.isBatchedMesh&&Se.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Se.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Se.instancing===!1||!k.isInstancedMesh&&Se.instancing===!0||k.isSkinnedMesh&&Se.skinning===!1||!k.isSkinnedMesh&&Se.skinning===!0||k.isInstancedMesh&&Se.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Se.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Se.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Se.instancingMorph===!1&&k.morphTexture!==null||Se.envMap!==ve||F.fog===!0&&Se.fog!==J||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Q.numPlanes||Se.numIntersection!==Q.numIntersection)||Se.vertexAlphas!==Pe||Se.vertexTangents!==Ce||Se.morphTargets!==Me||Se.morphNormals!==Ge||Se.morphColors!==je||Se.toneMapping!==dt||Se.morphTargetsCount!==Xe)&&($e=!0):($e=!0,Se.__version=F.version);let Jt=Se.currentProgram;$e===!0&&(Jt=Vs(F,D,k));let vn=!1,Ot=!1,Zn=!1;const st=Jt.getUniforms(),Xt=Se.uniforms;if(Ee.useProgram(Jt.program)&&(vn=!0,Ot=!0,Zn=!0),F.id!==E&&(E=F.id,Ot=!0),vn||x!==y){Ee.buffers.depth.getReversed()?(oe.copy(y.projectionMatrix),tm(oe),im(oe),st.setValue(T,"projectionMatrix",oe)):st.setValue(T,"projectionMatrix",y.projectionMatrix),st.setValue(T,"viewMatrix",y.matrixWorldInverse);const Dt=st.map.cameraPosition;Dt!==void 0&&Dt.setValue(T,Ye.setFromMatrixPosition(y.matrixWorld)),Be.logarithmicDepthBuffer&&st.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&st.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Ot=!0,Zn=!0)}if(k.isSkinnedMesh){st.setOptional(T,k,"bindMatrix"),st.setOptional(T,k,"bindMatrixInverse");const Ct=k.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),st.setValue(T,"boneTexture",Ct.boneTexture,M))}k.isBatchedMesh&&(st.setOptional(T,k,"batchingTexture"),st.setValue(T,"batchingTexture",k._matricesTexture,M),st.setOptional(T,k,"batchingIdTexture"),st.setValue(T,"batchingIdTexture",k._indirectTexture,M),st.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&st.setValue(T,"batchingColorTexture",k._colorsTexture,M));const Yt=O.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&Re.update(k,O,Jt),(Ot||Se.receiveShadow!==k.receiveShadow)&&(Se.receiveShadow=k.receiveShadow,st.setValue(T,"receiveShadow",k.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Xt.envMap.value=ve,Xt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(Xt.envMapIntensity.value=D.environmentIntensity),Ot&&(st.setValue(T,"toneMappingExposure",w.toneMappingExposure),Se.needsLights&&Xf(Xt,Zn),J&&F.fog===!0&&le.refreshFogUniforms(Xt,J),le.refreshMaterialUniforms(Xt,F,H,K,c.state.transmissionRenderTarget[y.id]),Sr.upload(T,wl(Se),Xt,M)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Sr.upload(T,wl(Se),Xt,M),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&st.setValue(T,"center",k.center),st.setValue(T,"modelViewMatrix",k.modelViewMatrix),st.setValue(T,"normalMatrix",k.normalMatrix),st.setValue(T,"modelMatrix",k.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Ct=F.uniformsGroups;for(let Dt=0,aa=Ct.length;Dt<aa;Dt++){const Qi=Ct[Dt];P.update(Qi,Jt),P.bind(Qi,Jt)}}return Jt}function Xf(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Yf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,D,O){const F=xe.get(y);F.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),xe.get(y.texture).__webglTexture=D,xe.get(y.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:O,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){const O=xe.get(y);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const qf=T.createFramebuffer();this.setRenderTarget=function(y,D=0,O=0){U=y,C=D,A=O;let F=!0,k=null,J=!1,re=!1;if(y){const ve=xe.get(y);if(ve.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(T.FRAMEBUFFER,null),F=!1;else if(ve.__webglFramebuffer===void 0)M.setupRenderTarget(y);else if(ve.__hasExternalTextures)M.rebindTextures(y,xe.get(y.texture).__webglTexture,xe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Me=y.depthTexture;if(ve.__boundDepthTexture!==Me){if(Me!==null&&xe.has(Me)&&(y.width!==Me.image.width||y.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(y)}}const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(re=!0);const Ce=xe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?k=Ce[D][O]:k=Ce[D],J=!0):y.samples>0&&M.useMultisampledRTT(y)===!1?k=xe.get(y).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[O]:k=Ce,R.copy(y.viewport),G.copy(y.scissor),B=y.scissorTest}else R.copy(we).multiplyScalar(H).floor(),G.copy(Ne).multiplyScalar(H).floor(),B=tt;if(O!==0&&(k=qf),Ee.bindFramebuffer(T.FRAMEBUFFER,k)&&F&&Ee.drawBuffers(y,k),Ee.viewport(R),Ee.scissor(G),Ee.setScissorTest(B),J){const ve=xe.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,ve.__webglTexture,O)}else if(re){const ve=xe.get(y.texture),Pe=D;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ve.__webglTexture,O,Pe)}else if(y!==null&&O!==0){const ve=xe.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ve.__webglTexture,O)}E=-1},this.readRenderTargetPixels=function(y,D,O,F,k,J,re){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){Ee.bindFramebuffer(T.FRAMEBUFFER,ue);try{const ve=y.texture,Pe=ve.format,Ce=ve.type;if(!Be.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-F&&O>=0&&O<=y.height-k&&T.readPixels(D,O,F,k,Ie.convert(Pe),Ie.convert(Ce),J)}finally{const ve=U!==null?xe.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(T.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(y,D,O,F,k,J,re){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=xe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue)if(D>=0&&D<=y.width-F&&O>=0&&O<=y.height-k){Ee.bindFramebuffer(T.FRAMEBUFFER,ue);const ve=y.texture,Pe=ve.format,Ce=ve.type;if(!Be.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Me),T.bufferData(T.PIXEL_PACK_BUFFER,J.byteLength,T.STREAM_READ),T.readPixels(D,O,F,k,Ie.convert(Pe),Ie.convert(Ce),0);const Ge=U!==null?xe.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(T.FRAMEBUFFER,Ge);const je=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await em(T,je,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Me),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,J),T.deleteBuffer(Me),T.deleteSync(je),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,O=0){const F=Math.pow(2,-O),k=Math.floor(y.image.width*F),J=Math.floor(y.image.height*F),re=D!==null?D.x:0,ue=D!==null?D.y:0;M.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,O,0,0,re,ue,k,J),Ee.unbindTexture()};const jf=T.createFramebuffer(),$f=T.createFramebuffer();this.copyTextureToTexture=function(y,D,O=null,F=null,k=0,J=null){J===null&&(k!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=k,k=0):J=0);let re,ue,ve,Pe,Ce,Me,Ge,je,dt;const lt=y.isCompressedTexture?y.mipmaps[J]:y.image;if(O!==null)re=O.max.x-O.min.x,ue=O.max.y-O.min.y,ve=O.isBox3?O.max.z-O.min.z:1,Pe=O.min.x,Ce=O.min.y,Me=O.isBox3?O.min.z:0;else{const Yt=Math.pow(2,-k);re=Math.floor(lt.width*Yt),ue=Math.floor(lt.height*Yt),y.isDataArrayTexture?ve=lt.depth:y.isData3DTexture?ve=Math.floor(lt.depth*Yt):ve=1,Pe=0,Ce=0,Me=0}F!==null?(Ge=F.x,je=F.y,dt=F.z):(Ge=0,je=0,dt=0);const Xe=Ie.convert(D.format),Se=Ie.convert(D.type);let yt;D.isData3DTexture?(M.setTexture3D(D,0),yt=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(M.setTexture2DArray(D,0),yt=T.TEXTURE_2D_ARRAY):(M.setTexture2D(D,0),yt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const $e=T.getParameter(T.UNPACK_ROW_LENGTH),Jt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),vn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ot=T.getParameter(T.UNPACK_SKIP_ROWS),Zn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,lt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,lt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ce),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Me);const st=y.isDataArrayTexture||y.isData3DTexture,Xt=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const Yt=xe.get(y),Ct=xe.get(D),Dt=xe.get(Yt.__renderTarget),aa=xe.get(Ct.__renderTarget);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,aa.__webglFramebuffer);for(let Qi=0;Qi<ve;Qi++)st&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xe.get(y).__webglTexture,k,Me+Qi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xe.get(D).__webglTexture,J,dt+Qi)),T.blitFramebuffer(Pe,Ce,re,ue,Ge,je,re,ue,T.DEPTH_BUFFER_BIT,T.NEAREST);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||xe.has(y)){const Yt=xe.get(y),Ct=xe.get(D);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,jf),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,$f);for(let Dt=0;Dt<ve;Dt++)st?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Yt.__webglTexture,k,Me+Dt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Yt.__webglTexture,k),Xt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ct.__webglTexture,J,dt+Dt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ct.__webglTexture,J),k!==0?T.blitFramebuffer(Pe,Ce,re,ue,Ge,je,re,ue,T.COLOR_BUFFER_BIT,T.NEAREST):Xt?T.copyTexSubImage3D(yt,J,Ge,je,dt+Dt,Pe,Ce,re,ue):T.copyTexSubImage2D(yt,J,Ge,je,Pe,Ce,re,ue);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Xt?y.isDataTexture||y.isData3DTexture?T.texSubImage3D(yt,J,Ge,je,dt,re,ue,ve,Xe,Se,lt.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(yt,J,Ge,je,dt,re,ue,ve,Xe,lt.data):T.texSubImage3D(yt,J,Ge,je,dt,re,ue,ve,Xe,Se,lt):y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,J,Ge,je,re,ue,Xe,Se,lt.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,J,Ge,je,lt.width,lt.height,Xe,lt.data):T.texSubImage2D(T.TEXTURE_2D,J,Ge,je,re,ue,Xe,Se,lt);T.pixelStorei(T.UNPACK_ROW_LENGTH,$e),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Jt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,vn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ot),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Zn),J===0&&D.generateMipmaps&&T.generateMipmap(yt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(y,D,O=null,F=null,k=0){return Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,D,O,F,k)},this.initRenderTarget=function(y){xe.get(y).__webglFramebuffer===void 0&&M.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),Ee.unbindTexture()},this.resetState=function(){C=0,A=0,U=null,Ee.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.13.4
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var S1=Object.defineProperty,il=(i,e)=>{for(var t in e)S1(i,t,{get:e[t],enumerable:!0})},di={};il(di,{ACTIONS:()=>kh,ANIMATION_MIN_DURATION:()=>Ro,CAPTURE_EVENTS_CLASS:()=>ks,CTRLZOOM_TIMEOUT:()=>Ih,DBLCLICK_DELAY:()=>Ph,EASINGS:()=>br,ICONS:()=>ai,IDS:()=>xt,KEY_CODES:()=>vt,LONGTOUCH_DELAY:()=>Lh,MOVE_THRESHOLD:()=>Rh,SPHERE_RADIUS:()=>mn,TWOFINGERSOVERLAY_DELAY:()=>Dh,VIEWER_DATA:()=>Zi});var b1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,T1='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',A1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,C1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,R1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,P1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,L1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,D1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,I1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Ro=500,Rh=4,Ph=300,Lh=500,Dh=100,Ih=2e3,mn=10,Zi="photoSphereViewer",ks="psv--capture-event",kh=(i=>(i.ROTATE_UP="ROTATE_UP",i.ROTATE_DOWN="ROTATE_DOWN",i.ROTATE_RIGHT="ROTATE_RIGHT",i.ROTATE_LEFT="ROTATE_LEFT",i.ZOOM_IN="ZOOM_IN",i.ZOOM_OUT="ZOOM_OUT",i))(kh||{}),xt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},vt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},ai={arrow:b1,close:T1,download:A1,fullscreenIn:C1,fullscreenOut:R1,info:P1,menu:L1,zoomIn:D1,zoomOut:I1},br={linear:i=>i,inQuad:i=>i*i,outQuad:i=>i*(2-i),inOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,inCubic:i=>i*i*i,outCubic:i=>--i*i*i+1,inOutCubic:i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,inQuart:i=>i*i*i*i,outQuart:i=>1- --i*i*i*i,inOutQuart:i=>i<.5?8*i*i*i*i:1-8*--i*i*i*i,inQuint:i=>i*i*i*i*i,outQuint:i=>1+--i*i*i*i*i,inOutQuint:i=>i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i,inSine:i=>1-Math.cos(i*(Math.PI/2)),outSine:i=>Math.sin(i*(Math.PI/2)),inOutSine:i=>.5-.5*Math.cos(Math.PI*i),inExpo:i=>Math.pow(2,10*(i-1)),outExpo:i=>1-Math.pow(2,-10*i),inOutExpo:i=>(i=i*2-1)<0?.5*Math.pow(2,10*i):1-.5*Math.pow(2,-10*i),inCirc:i=>1-Math.sqrt(1-i*i),outCirc:i=>Math.sqrt(1-(i-1)*(i-1)),inOutCirc:i=>(i*=2)<1?.5-.5*Math.sqrt(1-i*i):.5+.5*Math.sqrt(1-(i-=2)*i)},ee={};il(ee,{Animation:()=>Fr,Dynamic:()=>as,MultiDynamic:()=>nd,PressHandler:()=>Zr,Slider:()=>rd,SliderDirection:()=>sd,addClasses:()=>nl,angle:()=>Nh,applyEulerInverse:()=>ko,checkClosedShadowDom:()=>td,checkStylesheet:()=>ed,checkVersion:()=>ll,cleanCssPosition:()=>Jh,clone:()=>qr,createTexture:()=>Io,cssPositionIsOrdered:()=>ol,dasherize:()=>F1,deepEqual:()=>$h,deepmerge:()=>qh,distance:()=>Uh,exitFullscreen:()=>Xh,firstNonNull:()=>Fi,getAbortError:()=>Lo,getAngle:()=>Fh,getClosest:()=>zh,getConfigParser:()=>$r,getElement:()=>Bh,getEventTarget:()=>kr,getMatchingTarget:()=>Hh,getPosition:()=>Vh,getShortestArc:()=>Oh,getStyleProperty:()=>ui,getTouchData:()=>Po,getXMPValue:()=>zt,greatArcDistance:()=>U1,hasParent:()=>O1,invertResolvableBoolean:()=>jr,isAbortError:()=>Kh,isEmpty:()=>jh,isExtendedPosition:()=>al,isFullscreenEnabled:()=>Gh,isNil:()=>_t,isPlainObject:()=>sl,logWarn:()=>wt,mergePanoData:()=>id,parseAngle:()=>ci,parsePoint:()=>B1,parseSpeed:()=>Qh,removeClasses:()=>N1,requestFullscreen:()=>Wh,resolveBoolean:()=>rl,speedToDuration:()=>Do,sum:()=>k1,throttle:()=>Yh,toggleClass:()=>Yr,wrap:()=>cs});function cs(i,e){let t=i%e;return t<0&&(t+=e),t}function k1(i){return i.reduce((e,t)=>e+t,0)}function Uh(i,e){return Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2))}function Nh(i,e){return Math.atan2(e.y-i.y,e.x-i.x)}function Oh(i,e){return[0,Math.PI*2,-Math.PI*2].reduce((n,s)=>{const r=e-i+s;return Math.abs(r)<Math.abs(n)?r:n},1/0)}function Fh(i,e){return Math.acos(Math.cos(i.pitch)*Math.cos(e.pitch)*Math.cos(i.yaw-e.yaw)+Math.sin(i.pitch)*Math.sin(e.pitch))}function U1([i,e],[t,n]){i-t>Math.PI?i-=2*Math.PI:i-t<-Math.PI&&(i+=2*Math.PI);const s=(t-i)*Math.cos((e+n)/2),r=n-e;return Math.sqrt(s*s+r*r)}function Bh(i){return typeof i=="string"?i.match(/^[a-z]/i)?document.getElementById(i):document.querySelector(i):i}function Yr(i,e,t){t===void 0?i.classList.toggle(e):t?i.classList.add(e):t||i.classList.remove(e)}function nl(i,e){i.classList.add(...e.split(" ").filter(t=>!!t))}function N1(i,e){i.classList.remove(...e.split(" ").filter(t=>!!t))}function O1(i,e){let t=i;do{if(t===e)return!0;t=t.parentElement}while(t);return!1}function zh(i,e){if(!i?.matches)return null;let t=i;do{if(t.matches(e))return t;t=t.parentElement}while(t);return null}function kr(i){return i?.composedPath()[0]||null}function Hh(i,e){return i?i.composedPath().find(t=>!(t instanceof HTMLElement)&&!(t instanceof SVGElement)?!1:t.matches(e)):null}function Vh(i){let e=0,t=0,n=i;for(;n;)e+=n.offsetLeft-n.scrollLeft+n.clientLeft,t+=n.offsetTop-n.scrollTop+n.clientTop,n=n.offsetParent;return e-=window.scrollX,t-=window.scrollY,{x:e,y:t}}function ui(i,e){return window.getComputedStyle(i).getPropertyValue(e)}function Po(i){if(i.touches.length<2)return null;const e={x:i.touches[0].clientX,y:i.touches[0].clientY},t={x:i.touches[1].clientX,y:i.touches[1].clientY};return{distance:Uh(e,t),angle:Nh(e,t),center:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}var Ur;function Gh(i,e=!1){return e?i===Ur:document.fullscreenElement===i}function Wh(i,e=!1){e?(Ur=i,i.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):i.requestFullscreen()}function Xh(i=!1){i?(Ur.classList.remove("psv-fullscreen-emulation"),Ur=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function F1(i){return i.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,t)=>(t>0?"-":"")+e.toLowerCase())}function Yh(i,e){let t=!1;return function(...n){t||(t=!0,setTimeout(()=>{i.apply(this,n),t=!1},e))}}function sl(i){if(typeof i!="object"||i===null||Object.prototype.toString.call(i)!=="[object Object]")return!1;if(Object.getPrototypeOf(i)===null)return!0;let e=i;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(i)===e}function qh(i,e){const t=e;return function n(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=n(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{a!=="__proto__"&&(typeof r[a]!="object"||!r[a]||!sl(r[a])?s[a]=r[a]:r[a]!==t&&(s[a]?n(s[a],r[a]):s[a]=n(null,r[a])))})):s=r,s}(i,e)}function qr(i){return qh(null,i)}function jh(i){return!i||Object.keys(i).length===0&&i.constructor===Object}function _t(i){return i==null}function Fi(...i){for(const e of i)if(!_t(e))return e;return null}function $h(i,e){if(i===e)return!0;if(Tc(i)&&Tc(e)){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t of Object.keys(i))if(!$h(i[t],e[t]))return!1;return!0}else return!1}function Tc(i){return typeof i=="object"&&i!==null}var ie=class Zh extends Error{constructor(e,t){super(t&&t instanceof Error?`${e}: ${t.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,Zh)}};function rl(i,e){sl(i)?(e(i.initial,!0),i.promise.then(t=>e(t,!1))):e(i,!0)}function jr(i){return{initial:!i.initial,promise:i.promise.then(e=>!e)}}function Lo(){const i=new Error("Loading was aborted.");return i.name="AbortError",i}function Kh(i){return i?.name==="AbortError"}function wt(i){console.warn(`PhotoSphereViewer: ${i}`)}function al(i){return!i||Array.isArray(i)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,t])=>i[e]!==void 0&&i[t]!==void 0)}function zt(i,e,t=!0){let n=i.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(n!==null){const s=t?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}if(n=i.match("GPano:"+e+'="(.*?)"'),n!==null){const s=t?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}return null}var Ac={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Nr=["left","center","right"],Or=["top","center","bottom"],Cc=[...Nr,...Or],jt="center";function B1(i){if(!i)return{x:.5,y:.5};if(typeof i=="object")return i;let e=i.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Ac[e[0]]?e=[e[0],jt]:e=[e[0],e[0]]);const t=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Ac[s]||s),t||e.reverse();const n=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return n?{x:parseFloat(n[1])/100,y:parseFloat(n[2])/100}:{x:.5,y:.5}}function Jh(i,{allowCenter:e,cssOrder:t}={allowCenter:!0,cssOrder:!0}){return i?(typeof i=="string"&&(i=i.split(" ")),i.length===1&&(i[0]===jt?i=[jt,jt]:Nr.indexOf(i[0])!==-1?i=[jt,i[0]]:Or.indexOf(i[0])!==-1&&(i=[i[0],jt])),i.length!==2||Cc.indexOf(i[0])===-1||Cc.indexOf(i[1])===-1?(wt(`Unparsable position ${i}`),null):!e&&i[0]===jt&&i[1]===jt?(wt("Invalid position center center"),null):(t&&!ol(i)&&(i=[i[1],i[0]]),i[1]===jt&&Nr.indexOf(i[0])!==-1&&(i=[jt,i[0]]),i[0]===jt&&Or.indexOf(i[1])!==-1&&(i=[i[1],jt]),i)):null}function ol(i){return Or.indexOf(i[0])!==-1&&Nr.indexOf(i[1])!==-1}function Qh(i){let e;if(typeof i=="string"){const t=i.toString().trim();let n=parseFloat(t.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=t.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(n/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Ue.degToRad(n);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=n;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=n*Math.PI*2;break;default:throw new ie(`Unknown speed unit "${s}"`)}}else e=i;return e}function Do(i,e){if(typeof i!="number"){const t=Qh(i);return e/Math.abs(t)*1e3}else return Math.abs(i)}function ci(i,e=!1,t=e){let n;if(typeof i=="string"){const s=i.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new ie(`Unknown angle "${i}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":n=Ue.degToRad(r);break;case"rad":case"rads":n=r;break;default:throw new ie(`Unknown angle unit "${a}"`)}else n=r}else if(typeof i=="number"&&!isNaN(i))n=i;else throw new ie(`Unknown angle "${i}"`);return n=cs(e?n+Math.PI:n,Math.PI*2),e?Ue.clamp(n-Math.PI,-Math.PI/(t?2:1),Math.PI/(t?2:1)):n}function Io(i,e=!1){const t=new Et(i);return t.needsUpdate=!0,t.minFilter=e?zi:Vt,t.generateMipmaps=e,t.anisotropy=e?2:1,t}var Rc=new Ki;function ko(i,e){Rc.setFromEuler(e).invert(),i.applyQuaternion(Rc)}function $r(i,e){const t=function(n){const s=qr({...i,...n}),r={};for(let[a,o]of Object.entries(s)){if(e&&a in e)o=e[a](o,{rawConfig:s,defValue:i[a]});else if(!(a in i)){wt(`Unknown option ${a}`);continue}r[a]=o}return r};return t.defaults=i,t.parsers=e||{},t}function ed(i,e){ui(i,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function ll(i,e,t){e&&e!==t&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${i} is in version ${e} but @photo-sphere-viewer/core is in version ${t}`)}function td(i){do{if(i instanceof ShadowRoot&&i.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}i=i.parentNode}while(i)}function id(i,e,t,n){const s={isEquirectangular:!0,fullWidth:Fi(t?.fullWidth,n?.fullWidth),fullHeight:Fi(t?.fullHeight,n?.fullHeight),croppedWidth:i,croppedHeight:e,croppedX:Fi(t?.croppedX,n?.croppedX),croppedY:Fi(t?.croppedY,n?.croppedY),poseHeading:Fi(t?.poseHeading,n?.poseHeading,0),posePitch:Fi(t?.posePitch,n?.posePitch,0),poseRoll:Fi(t?.poseRoll,n?.poseRoll,0),initialHeading:n?.initialHeading,initialPitch:n?.initialPitch,initialFov:n?.initialFov};return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(i,e*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-i)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(wt("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(wt("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(wt("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(wt("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(wt("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var Fr=class{constructor(i){this.easing=br.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=i,i?(i.easing&&(this.easing=typeof i.easing=="function"?i.easing:br[i.easing]||br.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},i.delay||0)):this.resolved=!0}__run(i){if(this.cancelled)return;this.start||(this.start=i);const e=(i-this.start)/this.options.duration,t={};if(e<1){for(const[n,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);t[n]=r}this.options.onTick(t,e),this.animationFrame=window.requestAnimationFrame(n=>this.__run(n))}else{for(const[n,s]of Object.entries(this.options.properties))s&&(t[n]=s.end);this.options.onTick(t,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(i){i?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(i)),this.callbacks.length=0}then(i){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(i):new Promise(e=>{this.callbacks.push(e)}).then(i)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},as=class{constructor(i,e){if(this.fn=i,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new ie("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(i){this.__current=i}setSpeed(i){this.speed=i}goto(i,e=1){this.mode=2,this.target=this.wrap?cs(i,this.max):Ue.clamp(i,this.min,this.max),this.speedMult=e}step(i,e=1){e===0?this.setValue(this.current+i):(this.mode!==2&&(this.target=this.current),this.goto(this.target+i,e))}roll(i=!1,e=1){this.mode=1,this.target=i?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(i){return this.target=this.wrap?cs(i,this.max):Ue.clamp(i,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(i){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const n=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=n&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+i/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-i/1e3*this.speed*this.speedMult*2));let t=null;return this.current>this.target&&this.currentSpeed?t=Math.max(this.target,this.current+this.currentSpeed*i/1e3):this.current<this.target&&this.currentSpeed&&(t=Math.min(this.target,this.current+this.currentSpeed*i/1e3)),t!==null&&(t=this.wrap?cs(t,this.max):Ue.clamp(t,this.min,this.max),t!==this.current)?(this.current=t,this.fn&&this.fn(this.current),!0):!1}},nd=class{constructor(i,e){this.fn=i,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((i,[e,t])=>(i[e]=t.current,i),{})}setSpeed(i){for(const e of Object.values(this.dynamics))e.setSpeed(i)}goto(i,e=1){for(const[t,n]of Object.entries(i))this.dynamics[t].goto(n,e)}step(i,e=1){if(e===0)this.setValue(Object.keys(i).reduce((t,n)=>(t[n]=i[n]+this.dynamics[n].current,t),{}));else for(const[t,n]of Object.entries(i))this.dynamics[t].step(n,e)}roll(i,e=1){for(const[t,n]of Object.entries(i))this.dynamics[t].roll(n,e)}stop(){for(const i of Object.values(this.dynamics))i.stop()}setValue(i){let e=!1;for(const[t,n]of Object.entries(i))e=this.dynamics[t].setValue(n)||e;return e&&this.fn&&this.fn(this.current),e}update(i){let e=!1;for(const t of Object.values(this.dynamics))e=t.update(i)||e;return e&&this.fn&&this.fn(this.current),e}},Zr=class{constructor(i=200){this.delay=i,this.time=0,this.delay=i}get pending(){return this.time!==0}down(i){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=i}up(i){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{i(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(i(this.data),this.time=0,this.data=void 0)}},sd=(i=>(i.VERTICAL="VERTICAL",i.HORIZONTAL="HORIZONTAL",i))(sd||{}),rd=class{constructor(i,e,t){this.container=i,this.direction=e,this.listener=t,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(i){switch(i.type){case"click":i.stopPropagation();break;case"mousedown":this.__onMouseDown(i);break;case"mouseenter":this.__onMouseEnter(i);break;case"mouseleave":this.__onMouseLeave(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break}}__onMouseDown(i){this.mousedown=!0,this.__update(i.clientX,i.clientY,!0)}__onMouseEnter(i){this.mouseover=!0,this.__update(i.clientX,i.clientY,!0)}__onTouchStart(i){this.mouseover=!0,this.mousedown=!0;const e=i.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(i){(this.mousedown||this.mouseover)&&(i.stopPropagation(),this.__update(i.clientX,i.clientY,!0))}__onTouchMove(i){if(this.mousedown||this.mouseover){i.stopPropagation();const e=i.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(i){this.mousedown&&(this.mousedown=!1,this.__update(i.clientX,i.clientY,!1))}__onMouseLeave(i){this.mouseover&&(this.mouseover=!1,this.__update(i.clientX,i.clientY,!0))}__onTouchEnd(i){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=i.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(i,e,t){const n=this.container.getBoundingClientRect();let s;this.isVertical?s=Ue.clamp((n.bottom-e)/n.height,0,1):s=Ue.clamp((i-n.left)/n.width,0,1),this.listener({value:s,click:!t,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:i,clientY:e}})}},ne={};il(ne,{BeforeAnimateEvent:()=>cl,BeforeRenderEvent:()=>hs,BeforeRotateEvent:()=>fd,ClickEvent:()=>gd,ConfigChangedEvent:()=>Nt,DoubleClickEvent:()=>wd,FullscreenEvent:()=>ds,HideNotificationEvent:()=>us,HideOverlayEvent:()=>Cd,HidePanelEvent:()=>Wi,HideTooltipEvent:()=>Id,KeypressEvent:()=>Xi,LoadProgressEvent:()=>Fd,ObjectEnterEvent:()=>Mu,ObjectEvent:()=>Kr,ObjectHoverEvent:()=>Cu,ObjectLeaveEvent:()=>Uo,PanoramaErrorEvent:()=>Yd,PanoramaLoadEvent:()=>Hd,PanoramaLoadedEvent:()=>zn,PositionUpdatedEvent:()=>fs,ReadyEvent:()=>ms,RenderEvent:()=>su,RollUpdatedEvent:()=>ps,ShowNotificationEvent:()=>gs,ShowOverlayEvent:()=>cu,ShowPanelEvent:()=>Yi,ShowTooltipEvent:()=>pu,SizeUpdatedEvent:()=>vs,StopAllEvent:()=>_s,TransitionDoneEvent:()=>$d,ViewerEvent:()=>Ke,ZoomUpdatedEvent:()=>Ci});var gn=class extends Event{constructor(i,e=!1){super(i,{cancelable:e})}},ad=class extends EventTarget{dispatchEvent(i){return super.dispatchEvent(i)}addEventListener(i,e,t){super.addEventListener(i,e,t)}removeEventListener(i,e,t){super.removeEventListener(i,e,t)}},Ke=class extends gn{},od=class ld extends Ke{constructor(e,t){super(ld.type,!0),this.position=e,this.zoomLevel=t}};od.type="before-animate";var cl=od,cd=class hd extends Ke{constructor(e,t){super(hd.type),this.timestamp=e,this.elapsed=t}};cd.type="before-render";var hs=cd,dd=class ud extends Ke{constructor(e){super(ud.type,!0),this.position=e}};dd.type="before-rotate";var fd=dd,pd=class md extends Ke{constructor(e){super(md.type),this.data=e}};pd.type="click";var gd=pd,vd=class _d extends Ke{constructor(e){super(_d.type),this.options=e}containsOptions(...e){return e.some(t=>this.options.includes(t))}};vd.type="config-changed";var Nt=vd,yd=class xd extends Ke{constructor(e){super(xd.type),this.data=e}};yd.type="dblclick";var wd=yd,Ed=class Md extends Ke{constructor(e){super(Md.type),this.fullscreenEnabled=e}};Ed.type="fullscreen";var ds=Ed,Sd=class bd extends Ke{constructor(e){super(bd.type),this.notificationId=e}};Sd.type="hide-notification";var us=Sd,Td=class Ad extends Ke{constructor(e){super(Ad.type),this.overlayId=e}};Td.type="hide-overlay";var Cd=Td,Rd=class Pd extends Ke{constructor(e){super(Pd.type),this.panelId=e}};Rd.type="hide-panel";var Wi=Rd,Ld=class Dd extends Ke{constructor(e){super(Dd.type),this.tooltipData=e}};Ld.type="hide-tooltip";var Id=Ld,kd=class Ud extends Ke{constructor(e,t){super(Ud.type,!0),this.key=e,this.originalEvent=t}};kd.type="key-press";var Xi=kd,Nd=class Od extends Ke{constructor(e){super(Od.type),this.progress=e}};Nd.type="load-progress";var Fd=Nd,Bd=class zd extends Ke{constructor(e){super(zd.type),this.panorama=e}};Bd.type="panorama-load";var Hd=Bd,Vd=class Gd extends Ke{constructor(e){super(Gd.type),this.data=e}};Vd.type="panorama-loaded";var zn=Vd,Wd=class Xd extends Ke{constructor(e,t){super(Xd.type),this.panorama=e,this.error=t}};Wd.type="panorama-error";var Yd=Wd,qd=class jd extends Ke{constructor(e){super(jd.type),this.completed=e}};qd.type="transition-done";var $d=qd,Zd=class Kd extends Ke{constructor(e){super(Kd.type),this.position=e}};Zd.type="position-updated";var fs=Zd,Jd=class Qd extends Ke{constructor(e){super(Qd.type),this.roll=e}};Jd.type="roll-updated";var ps=Jd,eu=class tu extends Ke{constructor(){super(tu.type)}};eu.type="ready";var ms=eu,iu=class nu extends Ke{constructor(){super(nu.type)}};iu.type="render";var su=iu,ru=class au extends Ke{constructor(e){super(au.type),this.notificationId=e}};ru.type="show-notification";var gs=ru,ou=class lu extends Ke{constructor(e){super(lu.type),this.overlayId=e}};ou.type="show-overlay";var cu=ou,hu=class du extends Ke{constructor(e){super(du.type),this.panelId=e}};hu.type="show-panel";var Yi=hu,uu=class fu extends Ke{constructor(e,t){super(fu.type),this.tooltip=e,this.tooltipData=t}};uu.type="show-tooltip";var pu=uu,mu=class gu extends Ke{constructor(e){super(gu.type),this.size=e}};mu.type="size-updated";var vs=mu,vu=class _u extends Ke{constructor(){super(_u.type)}};vu.type="stop-all";var _s=vu,yu=class xu extends Ke{constructor(e){super(xu.type),this.zoomLevel=e}};yu.type="zoom-updated";var Ci=yu,Kr=class extends Ke{constructor(i,e,t,n,s){super(i),this.originalEvent=e,this.object=t,this.viewerPoint=n,this.userDataKey=s}},wu=class Eu extends Kr{constructor(e,t,n,s){super(Eu.type,e,t,n,s)}};wu.type="enter-object";var Mu=wu,Su=class bu extends Kr{constructor(e,t,n,s){super(bu.type,e,t,n,s)}};Su.type="leave-object";var Uo=Su,Tu=class Au extends Kr{constructor(e,t,n,s){super(Au.type,e,t,n,s)}};Tu.type="hover-object";var Cu=Tu,Jr=class{constructor(i){this.viewer=i}init(){}destroy(){}supportsTransition(i){return!1}supportsPreload(i){return!1}textureCoordsToSphericalCoords(i,e){throw new ie("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(i,e){throw new ie("Current adapter does not support texture coordinates.")}};Jr.supportsDownload=!1;function Pc(i){if(i){for(const[,e]of[["_",i],...Object.entries(i)])if(e.prototype instanceof Jr)return ll(e.id,e.VERSION,"5.13.4"),e}return null}var is=`${Zi}_touchSupport`,Lt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=V1(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const i=z1();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!i,this.maxTextureWidth=i?i.getParameter(i.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=H1(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Lt.isWebGLSupported)throw new ie("WebGL 2 is not supported.");if(Lt.maxTextureWidth===0)throw new ie("Unable to detect system capabilities")}};function z1(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function H1(){let i="ontouchstart"in window||navigator.maxTouchPoints>0;is in localStorage&&(i=localStorage[is]==="true");const e=new Promise(t=>{const n=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{n(),localStorage[is]=!1,t(!1)},r=()=>{n(),localStorage[is]=!0,t(!0)},a=()=>{n(),localStorage[is]=i,t(i)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:i,promise:e}}function V1(i){let e=i,t=!1;const n=document.createElement("canvas"),s=n.getContext("2d");for(n.width=1,n.height=1;e>1024&&!t;){const r=document.createElement("canvas"),a=r.getContext("2d");r.width=e,r.height=e/2;try{a.fillStyle="white",a.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(t=!0)}catch{}r.width=0,r.height=0,t||(e/=2)}if(t)return e;throw new ie("Unable to detect system capabilities")}var G1=$r({resolution:64,useXmpData:!0,blur:!1},{resolution:i=>{if(!i||!Ue.isPowerOfTwo(i))throw new ie("EquirectangularAdapter resolution must be power of two.");return i}}),Qr=class Ru extends Jr{static withConfig(e){return[Ru,e]}constructor(e,t){super(e),this.config=G1(t),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,t){if(_t(e.textureX)||_t(e.textureY))throw new ie("Texture position is missing 'textureX' or 'textureY'");const n=(e.textureX+t.croppedX)/t.fullWidth*Math.PI*2,s=(e.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(e,t){const n=e.yaw/Math.PI/2*t.fullWidth,s=e.pitch/Math.PI*t.fullHeight;let r=Math.round(e.yaw<Math.PI?n+t.fullWidth/2:n-t.fullWidth/2)-t.croppedX,a=Math.round(t.fullHeight/2-s)-t.croppedY;return(r<0||r>t.croppedWidth||a<0||a>t.croppedHeight)&&(r=a=void 0),{textureX:r,textureY:a}}async loadTexture(e,t=!0,n,s=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new ie("Invalid panorama url, are you using the right adapter?"));let r;typeof e=="string"?r={path:e,data:n}:r={data:n,...e};const a=await this.viewer.textureLoader.loadFile(r.path,t?f=>this.viewer.textureLoader.dispatchProgress(f):null,r.path),o=s?await this.loadXMP(a):null,l=await this.viewer.textureLoader.blobToImage(a);typeof r.data=="function"&&(r.data=r.data(l,o));const h=id(l.width,l.height,r.data,o),d=this.createEquirectangularTexture(l);return{panorama:e,texture:d,panoData:h,cacheKey:r.path}}async loadXMP(e){const t=await this.loadBlobAsString(e),n=t.indexOf("<x:xmpmeta");if(n===-1)return null;const s=t.indexOf("</x:xmpmeta>",n);if(s===-1)return null;const r=t.substring(n,s);return r.includes("GPano:")?{fullWidth:zt(r,"FullPanoWidthPixels"),fullHeight:zt(r,"FullPanoHeightPixels"),croppedWidth:zt(r,"CroppedAreaImageWidthPixels"),croppedHeight:zt(r,"CroppedAreaImageHeightPixels"),croppedX:zt(r,"CroppedAreaLeftPixels"),croppedY:zt(r,"CroppedAreaTopPixels"),poseHeading:zt(r,"PoseHeadingDegrees",!1),posePitch:zt(r,"PosePitchDegrees",!1),poseRoll:zt(r,"PoseRollDegrees",!1),initialHeading:zt(r,"InitialViewHeadingDegrees",!1),initialPitch:zt(r,"InitialViewPitchDegrees",!1),initialFov:zt(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((t,n)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=n,s.readAsText(e)})}createEquirectangularTexture(e){if(this.config.blur||e.width>Lt.maxTextureWidth){const t=Math.min(1,Lt.maxCanvasWidth/e.width),n=new OffscreenCanvas(Math.floor(e.width*t),Math.floor(e.height*t)),s=n.getContext("2d");return this.config.blur&&(s.filter=`blur(${n.width/2048}px)`),s.drawImage(e,0,0,n.width,n.height),Io(n)}return Io(e)}createMesh(e){const t=e.croppedX/e.fullWidth*2*Math.PI,n=e.croppedWidth/e.fullWidth*2*Math.PI,s=e.croppedY/e.fullHeight*Math.PI,r=e.croppedHeight/e.fullHeight*Math.PI,a=new jn(mn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*n),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+t,n,s,r).scale(-1,1,1),o=new $i({depthTest:!1,depthWrite:!1});return new kt(a,o)}setTexture(e,t){e.material.map=t.texture}setTextureOpacity(e,t){e.material.opacity=t,e.material.transparent=t<1}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};Qr.id="equirectangular";Qr.VERSION="5.13.4";Qr.supportsDownload=!0;var hl=Qr,Pu=class Lu extends hl{static withConfig(e){return[Lu,e]}constructor(e,t){super(e,{resolution:t?.resolution??64,useXmpData:!1})}async loadTexture(e,t){const n=await super.loadTexture(e,t,null,!1);return n.panoData=null,n}createMesh(){const e=new jn(mn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),t=e.getAttribute("uv"),n=e.getAttribute("normal");for(let r=0;r<t.count;r++)for(let a=0;a<3;a++){const o=r*3+a,l=n.getX(o),h=n.getY(o),d=n.getZ(o),f=.947;if(r<t.count/6){const p=l===0&&d===0?1:Math.acos(h)/Math.sqrt(l*l+d*d)*(2/Math.PI);t.setXY(o,l*(f/4)*p+1/4,d*(f/2)*p+1/2)}else{const p=l===0&&d===0?1:Math.acos(-h)/Math.sqrt(l*l+d*d)*(2/Math.PI);t.setXY(o,-l*(f/4)*p+3/4,d*(f/2)*p+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const s=new $i({depthTest:!1,depthWrite:!1});return new kt(e,s)}};Pu.id="dual-fisheye";Pu.VERSION="5.13.4";var Li=class Du{constructor(e,t){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof Du?e.viewer:e,this.container=document.createElement(t.tagName??"div"),this.container.className=t.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(t=>t.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},W1=$r({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),At=class extends Li{constructor(i,e){super(i,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=W1(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",t=>{this.state.enabled&&this.onClick(),t.stopPropagation()}),this.container.addEventListener("keydown",t=>{t.key===vt.Enter&&this.state.enabled&&(this.onClick(),t.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(i=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),i&&this.viewer.navbar.autoSize())}hide(i=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",i&&this.viewer.navbar.autoSize())}checkSupported(){rl(this.isSupported(),(i,e)=>{this.state&&(this.state.supported=i,e?i||this.hide():this.toggle(i))})}autoSize(){}isSupported(){return!0}toggleActive(i=!this.state.active){i!==this.state.active&&(this.state.active=i,Yr(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(i){this.container.innerHTML=i,nl(this.container.querySelector("svg"),"psv-button-svg")}},X1=class extends At{constructor(i,e){super(i,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},Cs=class extends At{constructor(i){super(i,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:ai.info}),this.mode=0,this.viewer.addEventListener(us.type,this),this.viewer.addEventListener(gs.type,this),this.viewer.addEventListener(Wi.type,this),this.viewer.addEventListener(Yi.type,this),this.viewer.addEventListener(Nt.type,this)}destroy(){this.viewer.removeEventListener(us.type,this),this.viewer.removeEventListener(gs.type,this),this.viewer.removeEventListener(Wi.type,this),this.viewer.removeEventListener(Yi.type,this),this.viewer.removeEventListener(Nt.type,this),super.destroy()}handleEvent(i){if(i instanceof Nt){i.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;i instanceof us?e=this.mode===1:i instanceof gs?e=this.mode===1&&i.notificationId!==xt.DESCRIPTION:i instanceof Wi?e=this.mode===2:i instanceof Yi&&(e=this.mode===2&&i.panelId!==xt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(i){super.hide(i),this.mode&&this.__close()}autoSize(i=!1){if(i){const e=this.viewer.navbar.getButton("caption",!1),t=e&&!e.isVisible(),n=!!this.viewer.config.description;t||n?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(xt.DESCRIPTION);break;case 2:this.viewer.panel.hide(xt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:xt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:xt.DESCRIPTION,content:this.viewer.config.caption}))}};Cs.id="description";var Iu=class extends At{constructor(i){super(i,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:ai.download}),this.viewer.addEventListener(Nt.type,this),this.viewer.addEventListener(zn.type,this)}destroy(){this.viewer.removeEventListener(Nt.type,this),this.viewer.removeEventListener(zn.type,this),super.destroy()}handleEvent(i){i instanceof Nt?(i.containsOptions("downloadUrl")&&this.checkSupported(),i.containsOptions("downloadUrl","downloadName")&&this.__update()):i instanceof zn&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const i=this.container;i.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,i.target="_blank",i.href.startsWith("data:")&&!this.viewer.config.downloadName?i.download="panorama."+i.href.substring(0,i.href.indexOf(";")).split("/").pop():i.download=this.viewer.config.downloadName||i.href.split("/").pop()}};Iu.id="download";var ku=class extends At{constructor(i){super(i,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:ai.fullscreenIn,iconActive:ai.fullscreenOut}),this.viewer.addEventListener(ds.type,this)}destroy(){this.viewer.removeEventListener(ds.type,this),super.destroy()}handleEvent(i){i instanceof ds&&this.toggleActive(i.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};ku.id="fullscreen";var Y1="psvButton",q1=(i,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${ai.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${i.map(t=>`
    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${t.content}</span>
      <span class="psv-panel-menu-item-label">${t.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Tr=class extends At{constructor(i){super(i,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:ai.menu}),this.viewer.addEventListener(Yi.type,this),this.viewer.addEventListener(Wi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Yi.type,this),this.viewer.removeEventListener(Wi.type,this),super.destroy()}handleEvent(i){i instanceof Yi?this.toggleActive(i.panelId===xt.MENU):i instanceof Wi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(i){super.hide(i),this.__hideMenu()}show(i){super.show(i),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:xt.MENU,content:q1(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:i=>{const e=i?zh(i,".psv-panel-menu-item"):void 0,t=e?e.dataset[Y1]:void 0;t&&(this.viewer.navbar.getButton(t).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(xt.MENU)}};Tr.id="menu";function j1(i){let e=0;switch(i){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return ai.arrow.replace("rotate(0",`rotate(${e}`)}var Us=class extends At{constructor(i,e){super(i,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:j1(e)}),this.direction=e,this.handler=new Zr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===vt.Enter&&this.__onMouseDown();break;case"keyup":i.key===vt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return jr(Lt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const i={};switch(this.direction){case 0:i.pitch=!1;break;case 1:i.pitch=!0;break;case 3:i.yaw=!1;break;default:i.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(i),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Us.groupId="move";var Uu=class extends Us{constructor(i){super(i,1)}};Uu.id="moveDown";var Nu=class extends Us{constructor(i){super(i,2)}};Nu.id="moveLeft";var Ou=class extends Us{constructor(i){super(i,3)}};Ou.id="moveRight";var Fu=class extends Us{constructor(i){super(i,0)}};Fu.id="moveUp";var dl=class extends At{constructor(i,e,t){super(i,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=t,this.handler=new Zr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===vt.Enter&&this.__onMouseDown();break;case"keyup":i.key===vt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return jr(Lt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};dl.groupId="zoom";var Bu=class extends dl{constructor(i){super(i,ai.zoomIn,0)}};Bu.id="zoomIn";var zu=class extends dl{constructor(i){super(i,ai.zoomOut,1)}};zu.id="zoomOut";var ul=class extends At{constructor(i){super(i,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new rd(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(ui(this.container,"max-width"),10),this.viewer.addEventListener(Ci.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(ms.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(Ci.type,this),this.viewer.removeEventListener(ms.type,this),super.destroy()}handleEvent(i){i instanceof Ci?this.__moveZoomValue(i.zoomLevel):i instanceof ms&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return jr(Lt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(i){this.zoomValue.style.left=i/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(i){i.mousedown&&this.viewer.zoom(i.value*100)}};ul.id="zoomRange";ul.groupId="zoom";var Hu=class extends ad{constructor(i){super(),this.viewer=i}init(){}destroy(){}},ea=class extends Hu{constructor(i,e){super(i),this.config=this.constructor.configParser(e)}setOption(i,e){this.setOptions({[i]:e})}setOptions(i){const e={...this.config,...i},t=this.constructor,n=t.configParser,s=t.readonlyOptions,r=t.id;for(let[a,o]of Object.entries(i)){if(!(a in n.defaults)){wt(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){wt(`${r}: Option "${a}" cannot be updated`);continue}a in n.parsers&&(o=n.parsers[a](o,{rawConfig:e,defValue:n.defaults[a]})),this.config[a]=o}}};ea.readonlyOptions=[];function No(i){if(i){for(const[,e]of[["_",i],...Object.entries(i)])if(e.prototype instanceof Hu)return ll(e.id,e.VERSION,"5.13.4"),e}return null}var mi={panorama:null,container:null,adapter:[hl,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[vt.ArrowUp]:"ROTATE_UP",[vt.ArrowDown]:"ROTATE_DOWN",[vt.ArrowRight]:"ROTATE_RIGHT",[vt.ArrowLeft]:"ROTATE_LEFT",[vt.PageUp]:"ZOOM_IN",[vt.PageDown]:"ZOOM_OUT",[vt.Plus]:"ZOOM_IN",[vt.Minus]:"ZOOM_OUT"}},Lc={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Oo={container:i=>{if(!i)throw new ie("No value given for container.");return i},adapter:(i,{defValue:e})=>{if(i?Array.isArray(i)?i=[Pc(i[0]),i[1]]:i=[Pc(i),null]:i=e,!i[0])throw new ie("An undefined value was given for adapter.");if(!i[0].id)throw new ie("Adapter has no id.");return i},defaultYaw:i=>ci(i),defaultPitch:i=>ci(i,!0),defaultZoomLvl:i=>Ue.clamp(i,0,100),minFov:(i,{rawConfig:e})=>(e.maxFov<i&&(wt("maxFov cannot be lower than minFov"),i=e.maxFov),Ue.clamp(i,1,179)),maxFov:(i,{rawConfig:e})=>(i<e.minFov&&(i=e.minFov),Ue.clamp(i,1,179)),moveInertia:(i,{defValue:e})=>i===!0?e:i===!1?0:i,lang:i=>({...mi.lang,...i}),keyboardActions:(i,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:i,fisheye:i=>i===!0?1:i===!1?0:i,requestHeaders:i=>i&&typeof i=="object"?()=>i:typeof i=="function"?i:null,withCredentials:i=>typeof i=="boolean"?()=>i:typeof i=="function"?i:()=>!1,defaultTransition:(i,{defValue:e})=>i===null||i.speed===0?null:{...e,...i},rendererParameters:(i,{defValue:e})=>({...i,...e}),plugins:i=>i.map((e,t)=>{if(Array.isArray(e)?e=[No(e[0]),e[1]]:e=[No(e),null],!e[0])throw new ie(`An undefined value was given for plugin ${t}.`);if(!e[0].id)throw new ie(`Plugin ${t} has no id.`);return e}),navbar:i=>i===!1?null:i===!0?qr(mi.navbar):typeof i=="string"?i.split(/[ ,]/):i},$1=$r(mi,Oo),On=class extends At{constructor(i){super(i,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(i){this.show(),this.contentElt.innerHTML=i??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(Cs.id,!1)?.autoSize(!0)}};On.id="caption";var Fo={},Br={};function ta(i,e){if(!i.id)throw new ie("Button id is required");if(Fo[i.id]=i,i.groupId&&(Br[i.groupId]=Br[i.groupId]||[]).push(i),e){const t=mi.navbar;switch(e){case"start":t.unshift(i.id);break;case"end":t.push(i.id);break;default:{const[n,s]=e.split(":"),r=t.indexOf(n);if(!n||!s||r===-1)throw new ie(`Invalid defaultPosition ${e}`);t.splice(r+(s==="right"?1:0),0,i.id)}}}}[zu,ul,Bu,Cs,On,Iu,ku,Nu,Ou,Fu,Uu].forEach(i=>ta(i));var Z1=class extends Li{constructor(i){super(i,{className:`psv-navbar ${ks}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(i){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,i.indexOf(On.id)!==-1&&i.indexOf(Cs.id)===-1&&i.splice(i.indexOf(On.id),0,Cs.id),i.forEach(e=>{typeof e=="object"?new X1(this,e):Fo[e]?new Fo[e](this):Br[e]?Br[e].forEach(t=>{new t(this)}):wt(`Unknown button ${e}`)}),new Tr(this),this.children.forEach(e=>{e instanceof At&&e.checkSupported()}),this.autoSize()}setCaption(i){this.children.some(e=>e instanceof On?(e.setCaption(i),!0):!1)}getButton(i,e=!0){const t=this.children.find(n=>n instanceof At&&n.id===i);return!t&&e&&wt(`button "${i}" not found in the navbar`),t}focusButton(i){this.isVisible()&&(this.getButton(i,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(n=>{n instanceof At&&n.autoSize()});const i=this.container.offsetWidth;let e=0;const t=[];this.children.forEach(n=>{n.isVisible()&&n instanceof At&&(e+=n.width,n.collapsable&&t.push(n))}),e!==0&&(i<e&&t.length>0?(t.forEach(n=>n.collapse()),this.collapsed=t,this.getButton(Tr.id).show(!1)):i>=e&&this.collapsed.length>0&&(this.collapsed.forEach(n=>n.uncollapse()),this.collapsed=[],this.getButton(Tr.id).hide(!1)),this.getButton(On.id,!1)?.autoSize())}};To.enabled=!1;var dn={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){To.enabled&&(wt("ThreeJS cache should be disabled"),To.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(i,e,t){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[i]=t,this.items[e].lastAccess=Date.now())},get(i,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[i]},remove(i,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[i],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,i],[,e])=>e.lastAccess-i.lastAccess).forEach(([i,{lastAccess:e}],t)=>{t>0&&(Date.now()-e>=this.ttl*1e3||t>=this.maxItems)&&delete this.items[i]})}},K1=class extends Li{constructor(i){super(i,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=ui(this.loader,"color"),this.color=ui(this.canvas,"color"),this.border=parseInt(ui(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(ui(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Nt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Nt.type,this),super.destroy()}handleEvent(i){i instanceof Nt&&i.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(i){this.container.classList.remove("psv-loader--undefined");const e=Ue.clamp(i,0,99.999)/100*Math.PI*2,t=this.size/2,n=t,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*r+t,o=-Math.cos(e)*r+t,l=i>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${n} ${s} A ${r} ${r} 0 ${l} 1 ${a} ${o}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const i=this.loader.querySelector(".psv-loader-image, .psv-loader-text");i&&this.loader.removeChild(i);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const t=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=t+"px",e.style.maxHeight=t+"px",this.loader.appendChild(e)}}},J1=class extends Li{constructor(i){super(i,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new ie("Notification cannot be toggled")}show(i){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof i=="string"&&(i={content:i}),this.state.contentId=i.id||null,this.content.innerHTML=i.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new gs(this.state.contentId)),i.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),i.timeout))}hide(i){if(this.isVisible(i)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new us(e))}}},Q1=class extends Li{constructor(i){super(i,{className:`psv-overlay ${ks}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Xi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Xi.type,this),super.destroy()}handleEvent(i){i.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),i.stopPropagation()):i instanceof Xi&&this.isVisible()&&this.state.dismissible&&i.key===vt.Escape&&(this.hide(),i.preventDefault())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new ie("Overlay cannot be toggled")}show(i){typeof i=="string"&&(i={title:i}),this.state.contentId=i.id||null,this.state.dismissible=i.dismissible!==!1,this.image.innerHTML=i.image||"",this.title.innerHTML=i.title||"",this.text.innerHTML=i.text||"",super.show(),this.viewer.dispatchEvent(new cu(this.state.contentId))}hide(i){if(this.isVisible(i)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Cd(e))}}},ey=200,Na="psv-panel-content--no-interaction",ty=class extends Li{constructor(i){super(i,{className:`psv-panel ${ks}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=ai.close,t.title=i.config.lang.close,this.container.appendChild(t),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),t.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Xi.type,this)}destroy(){this.viewer.removeEventListener(Xi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break;case Xi.type:this.__onKeyPress(i);break}}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new ie("Panel cannot be toggled")}show(i){typeof i=="string"&&(i={content:i});const e=this.isVisible(i.id);this.state.contentId=i.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),i.id&&this.state.width[i.id]?this.container.style.width=this.state.width[i.id]:i.width?this.container.style.width=i.width:this.container.style.width=null,this.content.innerHTML=i.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Yr(this.content,"psv-panel-content--no-margin",i.noMargin===!0),i.clickHandler&&(this.state.clickHandler=t=>{i.clickHandler(kr(t))},this.state.keyHandler=t=>{t.key===vt.Enter&&i.clickHandler(kr(t))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new Yi(this.state.contentId))}hide(i){if(this.isVisible(i)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Wi(e))}}__onMouseDown(i){i.stopPropagation(),this.__startResize(i.clientX,i.clientY)}__onTouchStart(i){if(i.stopPropagation(),i.touches.length===1){const e=i.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(i){this.state.mousedown&&(i.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Na))}__onTouchEnd(i){this.state.mousedown&&(i.stopPropagation(),i.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Na)))}__onMouseMove(i){this.state.mousedown&&(i.stopPropagation(),this.__resize(i.clientX,i.clientY))}__onTouchMove(i){if(this.state.mousedown){const e=i.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(i){this.isVisible()&&i.key===vt.Escape&&(this.hide(),i.preventDefault())}__startResize(i,e){this.state.mouseX=i,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Na)}__resize(i,e){const t=i,n=e,s=Math.max(ey,this.container.offsetWidth-(t-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=t,this.state.mouseY=n}},iy=class extends Li{constructor(i,e){super(i,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",t=>t.stopPropagation()),this.container.addEventListener("mousedown",t=>t.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(i){i.type==="transitionend"&&this.__onTransitionEnd(i)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new ie("Tooltip cannot be toggled")}show(i){if(this.state.state!==0)throw new ie("Initialized tooltip cannot be re-initialized");i.className&&nl(this.container,i.className),i.style&&Object.assign(this.container.style,i.style),this.state.state=3,this.update(i.content,i),this.state.data=i.data,this.state.state=1,this.viewer.dispatchEvent(new pu(this,this.state.data)),this.__waitImages()}update(i,e){this.content.innerHTML=i;const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.state.arrow=parseInt(ui(this.arrow,"border-top-width"),10),this.state.border=parseInt(ui(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(i){if(this.state.state!==1&&this.state.state!==3)throw new ie("Uninitialized tooltip cannot be moved");i.box=i.box??this.state.config?.box??{width:0,height:0},this.state.config=i;const e=this.container,t=this.arrow,n={posClass:Jh(i.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(n,i);let s=null,r=null;if(n.top<0?s="bottom":n.top+n.height>this.viewer.state.size.height&&(s="top"),n.left<0?r="right":n.left+n.width>this.viewer.state.size.width&&(r="left"),r||s){const o=ol(n.posClass);s&&(n.posClass[o?0:1]=s),r&&(n.posClass[o?1:0]=r),this.__computeTooltipPosition(n,i)}e.style.top=n.top+"px",e.style.left=n.left+"px",t.style.top=n.arrowTop+"px",t.style.left=n.arrowLeft+"px";const a=n.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Id(this.state.data));const i=parseFloat(ui(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},i*2)}__onTransitionEnd(i){if(i.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(i,e){const t=this.state.arrow,n=e.top,s=i.height,r=e.left,a=i.width,o=t+this.state.border,l=e.box.width/2+t*2,h=e.box.height/2+t*2;switch(i.posClass.join("-")){case"top-left":i.top=n-h-s,i.left=r+o-a,i.arrowTop=s,i.arrowLeft=a-o-t;break;case"top-center":i.top=n-h-s,i.left=r-a/2,i.arrowTop=s,i.arrowLeft=a/2-t;break;case"top-right":i.top=n-h-s,i.left=r-o,i.arrowTop=s,i.arrowLeft=t;break;case"bottom-left":i.top=n+h,i.left=r+o-a,i.arrowTop=-t*2,i.arrowLeft=a-o-t;break;case"bottom-center":i.top=n+h,i.left=r-a/2,i.arrowTop=-t*2,i.arrowLeft=a/2-t;break;case"bottom-right":i.top=n+h,i.left=r-o,i.arrowTop=-t*2,i.arrowLeft=t;break;case"left-top":i.top=n+o-s,i.left=r-l-a,i.arrowTop=s-o-t,i.arrowLeft=a;break;case"center-left":i.top=n-s/2,i.left=r-l-a,i.arrowTop=s/2-t,i.arrowLeft=a;break;case"left-bottom":i.top=n-o,i.left=r-l-a,i.arrowTop=t,i.arrowLeft=a;break;case"right-top":i.top=n+o-s,i.left=r+l,i.arrowTop=s-o-t,i.arrowLeft=-t*2;break;case"center-right":i.top=n-s/2,i.left=r+l,i.arrowTop=s/2-t,i.arrowLeft=-t*2;break;case"right-bottom":i.top=n-o,i.left=r+l,i.arrowTop=t,i.arrowLeft=-t*2;break}}__waitImages(){const i=this.content.querySelectorAll("img");if(i.length>0){const e=[];i.forEach(t=>{t.complete||e.push(new Promise(n=>{t.onload=n,t.onerror=n}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.move(this.state.config)}})}}},ny=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Ns=class{constructor(i){this.viewer=i,this.config=i.config,this.state=i.state}destroy(){}},ii=new I,ur=new pi(0,0,0,"ZXY"),sy=class extends Ns{constructor(i){super(i)}fovToZoomLevel(i){const e=Math.round((i-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Ue.clamp(e-2*(e-50),0,100)}zoomLevelToFov(i){return this.config.maxFov+i/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(i){return Ue.radToDeg(2*Math.atan(Math.tan(Ue.degToRad(i)/2)*this.state.aspect))}hFovToVFov(i){return Ue.radToDeg(2*Math.atan(Math.tan(Ue.degToRad(i)/2)/this.state.aspect))}getAnimationProperties(i,e,t){const n=!_t(e),s=!_t(t),r={};let a=null;if(n){const o=this.viewer.getPosition(),l=Oh(o.yaw,e.yaw);r.yaw={start:o.yaw,end:o.yaw+l},r.pitch={start:o.pitch,end:e.pitch},a=Do(i,Fh(o,e))}if(s){const o=this.viewer.getZoomLevel(),l=Math.abs(t-o);r.zoom={start:o,end:t},a===null&&(a=Do(i,Math.PI/4*l/100))}return a===null?typeof i=="number"?a=i:a=Ro:a=Math.max(Ro,a),{duration:a,properties:r}}getTransitionOptions(i){let e;const t=this.config.defaultTransition??mi.defaultTransition;return i.transition===!1||i.transition===null?e=null:i.transition===!0?e={...t}:typeof i.transition=="object"?e={...t,...i.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(i){if(!this.state.textureData?.panoData)throw new ie("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(i,this.state.textureData.panoData);return!ur.equals(this.viewer.renderer.panoramaPose)||!ur.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,ii),ii.applyEuler(this.viewer.renderer.panoramaPose),ii.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(ii)):e}sphericalCoordsToTextureCoords(i){if(!this.state.textureData?.panoData)throw new ie("Current adapter does not support texture coordinates or no texture has been loaded");return(!ur.equals(this.viewer.renderer.panoramaPose)||!ur.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(i,ii),ko(ii,this.viewer.renderer.sphereCorrection),ko(ii,this.viewer.renderer.panoramaPose),i=this.vector3ToSphericalCoords(ii)),this.viewer.adapter.sphericalCoordsToTextureCoords(i,this.state.textureData.panoData)}sphericalCoordsToVector3(i,e,t=mn){return e||(e=new I),e.x=t*-Math.cos(i.pitch)*Math.sin(i.yaw),e.y=t*Math.sin(i.pitch),e.z=t*Math.cos(i.pitch)*Math.cos(i.yaw),e}vector3ToSphericalCoords(i){const e=Math.acos(i.y/Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)),t=Math.atan2(i.x,i.z);return{yaw:t<0?-t:Math.PI*2-t,pitch:Math.PI/2-e}}viewerCoordsToVector3(i){const e=this.viewer.renderer.getIntersections(i).filter(t=>t.object.userData[Zi]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(i){const e=this.viewerCoordsToVector3(i);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(i){const e=i.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(i){return this.sphericalCoordsToVector3(i,ii),this.vector3ToViewerCoords(ii)}isPointVisible(i){let e,t;if(i instanceof I)e=i,t=this.vector3ToViewerCoords(i);else if(al(i))e=this.sphericalCoordsToVector3(i,ii),t=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&t.x>=0&&t.x<=this.viewer.state.size.width&&t.y>=0&&t.y<=this.viewer.state.size.height}cleanPosition(i){if("yaw"in i||"pitch"in i){if(!("yaw"in i)||!("pitch"in i))throw new ie("Position is missing 'yaw' or 'pitch'");return{yaw:ci(i.yaw),pitch:ci(i.pitch,!0)}}else return this.textureCoordsToSphericalCoords(i)}cleanSphereCorrection(i){return{pan:ci(i?.pan||0),tilt:ci(i?.tilt||0,!0),roll:ci(i?.roll||0,!0,!1)}}cleanPanoramaPose(i){return{pan:Ue.degToRad(i?.poseHeading||0),tilt:Ue.degToRad(i?.posePitch||0),roll:Ue.degToRad(i?.poseRoll||0)}}cleanPanoramaOptions(i,e){return e?.isEquirectangular&&(_t(i.zoom)&&!_t(e.initialFov)&&(i={...i,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),_t(i.position)&&!_t(e.initialHeading)&&!_t(e.initialPitch)&&(i={...i,position:{yaw:ci(e.initialHeading),pitch:ci(e.initialPitch,!0)}})),i}},ry=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,ay=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,ia=class Vu{constructor(){this.$=Vu.IDLE}is(...e){return e.some(t=>this.$&t)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};ia.IDLE=0;ia.CLICK=1;ia.MOVING=2;var ft=ia,oy=class extends Ns{constructor(i){super(i),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new ft,this.keyHandler=new Zr,this.resizeObserver=new ResizeObserver(Yh(()=>this.viewer.autoSize(),50)),this.moveThreshold=Rh*Lt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(hs.type,this),this.viewer.addEventListener(_s.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(hs.type,this),this.viewer.removeEventListener(_s.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(i){switch(i.type){case"keydown":this.__onKeyDown(i);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchmove":this.__onTouchMove(i);break;case"touchend":this.__onTouchEnd(i);break;case"fullscreenchange":this.__onFullscreenChange();break;case hs.type:this.__applyMoveDelta();break;case _s.type:this.__clearMoveDelta();break}if(!Hh(i,"."+ks))switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"wheel":this.__onMouseWheel(i);break}}__onKeyDown(i){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=i.key===vt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(xt.CTRL_ZOOM))),!this.viewer.dispatchEvent(new Xi(i.key,i))||!this.state.keyboardEnabled)return;const e=this.config.keyboardActions?.[i.key];if(typeof e=="function"){e(this.viewer,i),i.preventDefault();return}if(!(i.ctrlKey||i.altKey||i.shiftKey||i.metaKey)&&e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e),i.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(i=>{i==="ZOOM_IN"||i==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(i){this.step.add(ft.CLICK),this.data.startMouseX=i.clientX,this.data.startMouseY=i.clientY,this.config.mousemove&&i.preventDefault()}__onMouseUp(i){this.step.is(ft.CLICK,ft.MOVING)&&this.__stopMove(i.clientX,i.clientY,i,i.button===2)}__onMouseMove(i){this.config.mousemove&&this.step.is(ft.CLICK,ft.MOVING)&&(i.preventDefault(),this.__doMove(i.clientX,i.clientY)),this.__handleObjectsEvents(i)}__onTouchStart(i){i.touches.length===1?(this.step.add(ft.CLICK),this.data.startMouseX=i.touches[0].clientX,this.data.startMouseY=i.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=i.touches[0];this.__stopMove(e.clientX,e.clientY,i,!0),this.data.longtouchTimeout=null},Lh))):i.touches.length===2&&(this.step.set(ft.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(i),i.preventDefault()))}__onTouchEnd(i){if(this.__cancelLongTouch(),this.step.is(ft.CLICK,ft.MOVING)){if(i.preventDefault(),this.__cancelTwoFingersOverlay(),i.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(i.touches.length===0){const e=i.changedTouches[0];this.__stopMove(e.clientX,e.clientY,i)}}}__onTouchMove(i){if(this.__cancelLongTouch(),!!this.config.mousemove)if(i.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(ft.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:xt.TWO_FINGERS,image:ry,title:this.config.lang.twoFingers})},Dh));else if(this.step.is(ft.CLICK,ft.MOVING)){i.preventDefault();const e=i.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(i),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(xt.TWO_FINGERS))}__onMouseWheel(i){if(!this.config.mousewheel||!i.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:xt.CTRL_ZOOM,image:ay,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(xt.CTRL_ZOOM),Ih);return}i.preventDefault(),i.stopPropagation();const e=i.deltaY/Math.abs(i.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const i=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(i?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new ds(i))}__resetMove(){this.step.set(ft.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(i){this.viewer.stopAll(),this.__resetMove();const e=Po(i);this.step.set(ft.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(i,e,t,n=!1){this.step.is(ft.CLICK)&&!this.__moveThresholdReached(i,e)&&this.__doClick(i,e,t,n),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(i,e,t,n=!1){const s=this.viewer.container.getBoundingClientRect(),r=i-s.left,a=e-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),l=o.find(h=>h.object.userData[Zi]);if(l){const h=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),d={rightclick:n,originalEvent:t,target:kr(t),clientX:i,clientY:e,viewerX:r,viewerY:a,yaw:h.yaw,pitch:h.pitch,objects:o.map(f=>f.object).filter(f=>!f.userData[Zi])};try{const f=this.viewer.dataHelper.sphericalCoordsToTextureCoords(d);Object.assign(d,f)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-d.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-d.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new wd(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new gd(d)),this.data.dblclickData=qr(d),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},Ph))}}__handleObjectsEvents(i){if(!jh(this.state.objectsObservers)&&i.composedPath().includes(this.viewer.container)){const e=Vh(this.viewer.container),t={x:i.clientX-e.x,y:i.clientY-e.y},n=this.viewer.renderer.getIntersections(t),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(i,r,t,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=n.find(l=>l.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,Uo),this.state.objectsObservers[r]=null),a?s(o.object,r,Cu):(this.state.objectsObservers[r]=o.object,s(o.object,r,Mu))):a&&(s(a,r,Uo),this.state.objectsObservers[r]=null)}}}__doMove(i,e){if(this.step.is(ft.CLICK)&&this.__moveThresholdReached(i,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(ft.MOVING),this.data.mouseX=i,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(ft.MOVING)){const t=(i-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),n=(e-this.data.mouseY)*Math.cos(this.state.roll)+(i-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(t/this.state.size.width)*Ue.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(n/this.state.size.height)*Ue.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=i,this.data.mouseY=e}}__moveThresholdReached(i,e){return Math.abs(i-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(i){if(this.step.is(ft.MOVING)){i.preventDefault();const e=Po(i);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Lt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};We.enabled=!1;var fr=new qe,Dc=new Qe,Ic=new qn,ly=class extends Ns{constructor(i){super(i),this.frustumNeedsUpdate=!0,this.renderer=new M1(this.config.rendererParameters),this.renderer.setPixelRatio(Lt.pixelRatio),this.renderer.outputColorSpace=pn,this.renderer.toneMapping=ih,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Lr,this.camera=new Ht(50,16/9,.1,2*mn),this.camera.matrixAutoUpdate=!1;const e=new kt(new jn(mn).scale(-1,1,1),new $i({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Zi]:!0},this.scene.add(e),this.raycaster=new zm,this.frustum=new Qo,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",t=>t.preventDefault()),this.viewer.addEventListener(vs.type,this),this.viewer.addEventListener(Ci.type,this),this.viewer.addEventListener(fs.type,this),this.viewer.addEventListener(ps.type,this),this.viewer.addEventListener(Nt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(i=>this.__renderLoop(i))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(vs.type,this),this.viewer.removeEventListener(Ci.type,this),this.viewer.removeEventListener(fs.type,this),this.viewer.removeEventListener(ps.type,this),this.viewer.removeEventListener(Nt.type,this),super.destroy()}handleEvent(i){switch(i.type){case vs.type:this.__onSizeUpdated();break;case Ci.type:this.__onZoomUpdated();break;case fs.type:this.__onPositionUpdated();break;case ps.type:this.__onPositionUpdated();break;case Nt.type:i.containsOptions("fisheye")&&this.__onPositionUpdated(),i.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(i){i?this.customRenderer=i(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(i){const e=this.timestamp?i-this.timestamp:0;this.timestamp=i,this.viewer.dispatchEvent(new hs(i,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new su))}setTexture(i){this.meshContainer||(this.meshContainer=new Hi,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(i.panoData),this.viewer.adapter.setTexture(this.mesh,i,!1),this.meshContainer.add(this.mesh),this.state.textureData=i,this.viewer.needsUpdate()}setPanoramaPose(i,e=this.mesh){const t=this.viewer.dataHelper.cleanPanoramaPose(i);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}setSphereCorrection(i,e=this.meshContainer){const t=this.viewer.dataHelper.cleanSphereCorrection(i);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}transition(i,e,t){const n=t.effect==="fade"||t.rotation,s=!_t(e.position),r=!_t(e.zoom),a=new cl(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(a);const o=new Hi,l=this.viewer.adapter.createMesh(i.panoData);if(this.viewer.adapter.setTexture(l,i,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(i.panoData,l),this.setSphereCorrection(e.sphereCorrection,o),s&&!t.rotation){const p=this.viewer.getPosition(),m=new I(0,1,0);o.rotateOnWorldAxis(m,a.position.yaw-p.yaw);const g=new I(0,1,0).cross(this.camera.getWorldDirection(new I)).normalize();o.rotateOnWorldAxis(g,a.position.pitch-p.pitch)}o.add(l),this.scene.add(o),this.renderer.setRenderTarget(new ji),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:h,properties:d}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.rotation?a.position:null,n?a.zoomLevel:null),f=new Fr({properties:{...d,opacity:{start:0,end:1}},duration:h,easing:"inOutCubic",onTick:p=>{switch(t.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,p.opacity);break;case"black":case"white":p.opacity<.5?this.renderer.toneMappingExposure=t.effect==="black"?Ue.mapLinear(p.opacity,0,.5,1,0):Ue.mapLinear(p.opacity,0,.5,1,4):(this.renderer.toneMappingExposure=t.effect==="black"?Ue.mapLinear(p.opacity,.5,1,0,1):Ue.mapLinear(p.opacity,.5,1,4,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!n&&this.viewer.dynamics.zoom.setValue(a.zoomLevel));break}s&&t.rotation&&this.viewer.dynamics.position.setValue({yaw:p.yaw,pitch:p.pitch}),r&&n&&this.viewer.dynamics.zoom.setValue(p.zoom),this.viewer.needsUpdate()}});return f.then(p=>{o.remove(l),this.scene.remove(o),p?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=i,this.setPanoramaPose(i.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!t.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(i),this.viewer.adapter.disposeMesh(l))}),f}getIntersections(i){fr.x=2*i.x/this.state.size.width-1,fr.y=-2*i.y/this.state.size.height+1,this.raycaster.setFromCamera(fr,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(t=>t.object.visible).filter(t=>t.object.isMesh&&!!t.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,fr)),e}isObjectVisible(i){if(!i)return!1;if(this.frustumNeedsUpdate&&(Dc.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Dc),this.frustumNeedsUpdate=!1),i.isVector3)return this.frustum.containsPoint(i);if(i.isMesh&&i.geometry){const e=i;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Ic.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Ic)}else return i.isObject3D?this.frustum.intersectsObject(i):!1}addObject(i){this.scene.add(i)}removeObject(i){this.scene.remove(i)}cleanScene(i){const e=t=>{t.map?.dispose(),t.uniforms&&Object.values(t.uniforms).forEach(n=>{n.value?.dispose?.()}),t.dispose()};i.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>{e(n)}):e(t.material)),t instanceof Lr||t.dispose?.(),t!==i&&this.cleanScene(t)})}},cy=class extends el{load(i,e,t,n,s){const r=new Request(i,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r,{signal:s}).then(a=>{if(a.status===200||a.status===0){const o=a.body.getReader(),l=a.headers.get("Content-Length")||a.headers.get("X-File-Size"),h=l?parseInt(l):0,d=h!==0;let f=0;const p=new ReadableStream({start(m){g();function g(){o.read().then(({done:v,value:u})=>{if(v)m.close();else{f+=u.byteLength;const c=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:h});t(c),m.enqueue(u),g()}}).catch(v=>{n(v)})}}});return new Response(p)}else throw new Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>a.blob()).then(a=>{e(a)}).catch(a=>{n(a)})}},hy=class extends el{load(i,e,t,n){const s=document.createElement("img");function r(){l(),e(this)}function a(h){if(l(),n?.aborted){const d=new Error;d.name="AbortError",d.message="The operation was aborted.",t(d)}else t(h)}function o(){s.src=""}function l(){s.removeEventListener("load",r,!1),s.removeEventListener("error",a,!1),n?.removeEventListener("abort",o,!1)}return s.addEventListener("load",r,!1),s.addEventListener("error",a,!1),n?.addEventListener("abort",o,!1),i.startsWith("data:")||(s.crossOrigin=this.withCredentials?"use-credentials":"anonymous"),s.src=i,s}},dy=class extends Ns{constructor(i){super(i),this.abortCtrl={},this.fileLoader=new cy,this.imageLoader=new hy}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(i=>i.abort()),this.abortCtrl={}}loadFile(i,e,t){const n=dn.get(i,t);if(n){if(n instanceof Blob)return e?.(100),Promise.resolve(n);dn.remove(i,t)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(i)),this.fileLoader.setWithCredentials(this.config.withCredentials(i)),new Promise((s,r)=>{let a=0;e?.(a),this.fileLoader.load(i,o=>{a=100,e?.(a),dn.add(i,t,o),s(o)},o=>{if(o.lengthComputable){const l=o.loaded/o.total*100;l>a&&(a=l,e?.(a))}},o=>{r(o)},this.__getAbortSignal(t))})}loadImage(i,e,t){const n=dn.get(i,t);return n?(e?.(100),n instanceof Blob?this.blobToImage(n):Promise.resolve(n)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(i)),new Promise((s,r)=>{this.imageLoader.load(i,a=>{dn.add(i,t,a),s(a)},a=>{r(a)},this.__getAbortSignal(t))})):this.loadFile(i,e,t).then(s=>this.blobToImage(s))}blobToImage(i){return new Promise((e,t)=>{const n=document.createElement("img");n.onload=()=>{URL.revokeObjectURL(n.src),e(n)},n.onerror=t,n.src=URL.createObjectURL(i)})}preloadPanorama(i){return this.viewer.adapter.supportsPreload(i)?this.viewer.adapter.loadTexture(i,!1):Promise.reject(new ie("Current adapter does not support preload"))}dispatchProgress(i){this.viewer.loader.setProgress(i),this.viewer.dispatchEvent(new Fd(Math.round(i)))}__getAbortSignal(i){return i?(this.abortCtrl[i]?.signal.aborted&&delete this.abortCtrl[i],this.abortCtrl[i]||(this.abortCtrl[i]=new AbortController),this.abortCtrl[i].signal):null}},uy=class extends Ns{constructor(i){super(i),this.zoom=new as(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new Ci(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new nd(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new fs(e))},{yaw:new as(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new as(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new as(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new ps(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Ue.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Ue.degToRad(this.config.moveSpeed*50))}update(i){this.zoom.update(i),this.position.update(i),this.roll.update(i)}},fy=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new I(0,0,mn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},py=class extends ad{constructor(i){if(super(),this.plugins={},this.children=[],this.parent=Bh(i.container),!this.parent)throw new ie('"container" element not found.');this.parent[Zi]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),td(this.parent),ed(this.container,"core"),this.state=new fy,this.config=$1(i),this.__setSize(this.config.size),this.overlay=new Q1(this);try{Lt.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}dn.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new ly(this),this.textureLoader=new dy(this),this.eventsHandler=new oy(this),this.dataHelper=new sy(this),this.dynamics=new uy(this),this.adapter.init?.(),this.loader=new K1(this),this.navbar=new Z1(this),this.panel=new ty(this),this.notification=new J1(this),this.autoSize(),this.setCursor(null),rl(Lt.isTouchEnabled,e=>{Yr(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,t])=>{this.plugins[e.id]=new e(this,t)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[i,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[i];this.children.slice().forEach(i=>i.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[Zi]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new ms)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(i){if(typeof i=="string")return this.plugins[i];{const e=No(i);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Gh(this.parent,Lt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(i){i?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new vs(this.getSize())),this.navbar.autoSize())}setPanorama(i,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const t=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=i,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection;const n=r=>{if(Kh(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new Yd(i,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new Hd(i));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),Lo();const a=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!_t(a.zoom)||!_t(a.position))&&this.stopAll(),{textureData:r,cleanOptions:a}});return!t||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new zn(r)),_t(a.zoom)||this.zoom(a.zoom),_t(a.position)||this.rotate(a.position)}).then(()=>n(),r=>n(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new zn(r)),this.state.transitionAnimation=this.renderer.transition(r,a,t),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new $d(r)),!r)throw Lo()}).then(()=>n(),r=>n(r)),this.state.loadingPromise}setOptions(i){const e={...this.config,...i};for(let[t,n]of Object.entries(i)){if(!(t in mi)){wt(`Unknown option ${t}`);continue}if(t in Lc){wt(Lc[t]);continue}switch(t in Oo&&(n=Oo[t](n,{rawConfig:e,defValue:mi[t]})),this.config[t]=n,t){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new Ci(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Nt(Object.keys(i)))}setOption(i,e){this.setOptions({[i]:e})}showError(i){this.overlay.show({id:xt.ERROR,image:ny,title:i,dismissible:!1})}hideError(){this.overlay.hide(xt.ERROR)}rotate(i){const e=new fd(this.dataHelper.cleanPosition(i));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(i){this.dynamics.zoom.setValue(i)}zoomIn(i=1){this.dynamics.zoom.step(i)}zoomOut(i=1){this.dynamics.zoom.step(-i)}animate(i){const e=al(i),t=!_t(i.zoom),n=new cl(e?this.dataHelper.cleanPosition(i):void 0,i.zoom);if(this.dispatchEvent(n),n.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(i.speed,n.position,n.zoomLevel);return s?(this.state.animation=new Fr({properties:r,duration:s,easing:i.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),t&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(n.position),t&&this.zoom(n.zoomLevel),new Fr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(i){this.__setSize(i),this.autoSize()}__setSize(i){["width","height"].forEach(e=>{i?.[e]&&(/^[0-9.]+$/.test(i[e])&&(i[e]+="px"),this.parent.style[e]=i[e])})}enterFullscreen(){this.isFullscreenEnabled()||Wh(this.parent,Lt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&Xh(Lt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(i){return new iy(this,i)}setCursor(i){this.state.cursorOverride=i,i?this.container.style.cursor=i:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(i){this.state.objectsObservers[i]||(this.state.objectsObservers[i]=null)}unobserveObjects(i){delete this.state.objectsObservers[i]}stopAll(){return this.dispatchEvent(new _s),this.disableIdleTimer(),this.stopAnimation()}};/*!
 * Photo Sphere Viewer / Equirectangular Tiles Adapter 5.13.4
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var my=class{constructor(i,e,t){this.id=i,this.priority=e,this.fn=t,this.status=1}start(){return this.status=2,this.fn(this).then(()=>{this.status=4},()=>{this.status=5})}cancel(){this.status=3}isCancelled(){return this.status===3}},gy=class{constructor(i=8){this.concurency=i,this.runningTasks={},this.tasks={}}enqueue(i){this.tasks[i.id]=i}clear(){Object.values(this.tasks).forEach(i=>i.cancel()),this.tasks={},this.runningTasks={}}setPriority(i,e){const t=this.tasks[i];t&&(t.priority=e,t.status===0&&(t.status=1))}disableAllTasks(){Object.values(this.tasks).forEach(i=>{i.status=0})}start(){if(Object.keys(this.runningTasks).length>=this.concurency)return;const i=Object.values(this.tasks).filter(e=>e.status===1).sort((e,t)=>t.priority-e.priority).pop();i&&(this.runningTasks[i.id]=!0,i.start().then(()=>{i.isCancelled()||(delete this.tasks[i.id],delete this.runningTasks[i.id],this.start())}),this.start())}};function vy(i){let e=0;i.forEach((t,n)=>{if(!t.zoomRange||t.zoomRange.length!==2)throw new ie(`Tiles level ${n} is missing "zoomRange" property`);if(t.zoomRange[0]>=t.zoomRange[1]||t.zoomRange[0]!==e||n===0&&t.zoomRange[0]!==0||n===i.length-1&&t.zoomRange[1]!==100)throw new ie(`Tiles levels' "zoomRange" are not orderer or are not covering the whole 0-100 range`);e=t.zoomRange[1]})}function _y(i,e){return i.findIndex(t=>e>=t.zoomRange[0]&&e<=t.zoomRange[1])}function yy(){const i=new OffscreenCanvas(512,512),e=i.getContext("2d");return e.fillStyle="#333",e.fillRect(0,0,i.width,i.height),e.font=`${i.width/5}px serif`,e.fillStyle="#a22",e.textAlign="center",e.textBaseline="middle",e.fillText("⚠",i.width/2,i.height/2),new $i({map:ee.createTexture(i)})}function xy(i){const e=new Im(i),t=new Lm(e);return t.material.depthTest=!1,t.material.depthWrite=!1,t.material.opacity=.25,t.material.transparent=!0,t}var kc=["dodgerblue","limegreen","indianred"];function wy(i,e,t){const n=document.createElement("canvas");n.width=i.width,n.height=i.height;const s=n.getContext("2d");s.fillStyle=kc[e%kc.length],s.fillRect(0,0,n.width,n.height),s.globalCompositeOperation="multiply",s.drawImage(i,0,0);const r=i.width/7;return s.globalCompositeOperation="source-over",s.fillStyle="white",s.font=`${r}px monospace`,s.textAlign="center",t.split(`
`).forEach((a,o)=>{s.fillText(a,i.width/2,i.height/2+r*(.3+o))}),n}function fl(i){return!!i.levels}function Gu(i,e,t){return{...i,level:e,colSize:i.width/i.cols,rowSize:i.width/2/i.rows,facesByCol:t.SPHERE_SEGMENTS/i.cols,facesByRow:t.SPHERE_HORIZONTAL_SEGMENTS/i.rows}}function Uc(i,e,t){let n,s;return fl(i)?(s=_y(i.levels,e),n=i.levels[s]):(s=0,n={...i,zoomRange:[0,100]}),Gu(n,s,t)}function Ey(i,e,t){return!fl(i)||!i.levels[e]?null:Gu(i.levels[e],e,t)}function My(i,e){if(typeof i!="object"||!i.tileUrl)throw new ie("Invalid panorama configuration, are you using the right adapter?");fl(i)?(i.levels.forEach(t=>Nc(t,e)),vy(i.levels)):Nc(i,e)}function Nc(i,e){if(!i.width||!i.cols||!i.rows)throw new ie("Invalid panorama configuration, are you using the right adapter?");if(i.cols>e.SPHERE_SEGMENTS)throw new ie(`Panorama cols must not be greater than ${e.SPHERE_SEGMENTS}.`);if(i.rows>e.SPHERE_HORIZONTAL_SEGMENTS)throw new ie(`Panorama rows must not be greater than ${e.SPHERE_HORIZONTAL_SEGMENTS}.`);if(!Ue.isPowerOfTwo(i.cols)||!Ue.isPowerOfTwo(i.rows))throw new ie("Panorama cols and rows must be powers of 2.")}function Sy(i,e){for(let t=0;t<e.cols;t++){const n=i.tileUrl(t,e.rows/2,e.level);if(n)return n}return i.tileUrl.toString()}var ns=6,It=3,by="uv",Ty="position",Oc=-1;function Oa(i){return`${i.col}x${i.row}/${i.config.level}`}function pr(i){return i.children}var Ay=ee.getConfigParser({resolution:64,showErrorTile:!0,baseBlur:!0,antialias:!0,debug:!1,useXmpData:!1}),mr=new I,na=class Wu extends Jr{constructor(e,t){super(e),this.state={tileConfig:null,tiles:{},faces:{},geom:null,materials:[],errorMaterial:null,inTransition:!1},this.queue=new gy,this.config=Ay(t),this.adapter=new hl(this.viewer,{resolution:this.config.resolution,blur:this.config.baseBlur}),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2,this.NB_VERTICES=2*this.SPHERE_SEGMENTS*It+(this.SPHERE_HORIZONTAL_SEGMENTS-2)*this.SPHERE_SEGMENTS*ns,this.NB_GROUPS=this.SPHERE_SEGMENTS*this.SPHERE_HORIZONTAL_SEGMENTS,this.viewer.config.requestHeaders&&ee.logWarn('EquirectangularTilesAdapter fallbacks to file loader because "requestHeaders" where provided. Consider removing "requestHeaders" if you experience performances issues.')}static withConfig(e){return[Wu,e]}init(){super.init(),this.viewer.addEventListener(ne.TransitionDoneEvent.type,this),this.viewer.addEventListener(ne.PositionUpdatedEvent.type,this),this.viewer.addEventListener(ne.ZoomUpdatedEvent.type,this)}destroy(){this.viewer.removeEventListener(ne.TransitionDoneEvent.type,this),this.viewer.removeEventListener(ne.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(ne.ZoomUpdatedEvent.type,this),this.__cleanup(),this.state.errorMaterial?.map?.dispose(),this.state.errorMaterial?.dispose(),this.adapter.destroy(),delete this.adapter,delete this.state.geom,delete this.state.errorMaterial,super.destroy()}handleEvent(e){switch(e.type){case ne.PositionUpdatedEvent.type:case ne.ZoomUpdatedEvent.type:this.__refresh();break;case ne.TransitionDoneEvent.type:this.state.inTransition=!1,e.completed&&this.__switchMesh(this.viewer.renderer.mesh);break}}supportsTransition(e){return!!e.baseUrl}supportsPreload(e){return!!e.baseUrl}textureCoordsToSphericalCoords(e,t){return this.adapter.textureCoordsToSphericalCoords(e,t)}sphericalCoordsToTextureCoords(e,t){return this.adapter.sphericalCoordsToTextureCoords(e,t)}async loadTexture(e,t=!0){My(e,this);const n=Uc(e,0,this),s={isEquirectangular:!0,fullWidth:n.width,fullHeight:n.width/2,croppedWidth:n.width,croppedHeight:n.width/2,croppedX:0,croppedY:0,poseHeading:0,posePitch:0,poseRoll:0};if(e.baseUrl){const r=await this.adapter.loadTexture(e.baseUrl,t,e.basePanoData,!0);return{panorama:e,panoData:{...s,baseData:r.panoData},cacheKey:r.cacheKey,texture:r.texture}}else return{panorama:e,panoData:{...s,baseData:null},cacheKey:Sy(e,n),texture:null}}createMesh(e){const t=this.adapter.createMesh(e.baseData??e),n=new jn(di.SPHERE_RADIUS,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS,-Math.PI/2).scale(-1,1,1).toNonIndexed();n.clearGroups();let s=0,r=0;for(;s<this.SPHERE_SEGMENTS*It;s+=It)n.addGroup(s,It,r++);for(;s<this.NB_VERTICES-this.SPHERE_SEGMENTS*It;s+=ns)n.addGroup(s,ns,r++);for(;s<this.NB_VERTICES;s+=It)n.addGroup(s,It,r++);const a=[],o=new $i({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1});for(let d=0;d<this.NB_GROUPS;d++)a.push(o);const l=new kt(n,a);l.renderOrder=1;const h=new Hi;return h.add(t),h.add(l),h}setTexture(e,t,n){const[s]=pr(e);t.texture?this.adapter.setTexture(s,{panorama:t.panorama.baseUrl,texture:t.texture,panoData:t.panoData.baseData}):s.visible=!1,n?this.state.inTransition=!0:this.__switchMesh(e)}setTextureOpacity(e,t){const[n]=pr(e);this.adapter.setTextureOpacity(n,t)}disposeTexture({texture:e}){e?.dispose()}disposeMesh(e){const[t,n]=pr(e);t.geometry.dispose(),t.material.dispose(),n.geometry.dispose(),n.material.forEach(s=>{s.map?.dispose(),s.dispose()})}__refresh(){if(!this.state.geom||this.state.inTransition)return;const e=this.viewer.config.panorama,t=this.viewer.getZoomLevel(),n=Uc(e,t,this),s=this.state.geom.getAttribute(Ty),r={};for(let a=0;a<this.NB_VERTICES;a+=1)if(mr.fromBufferAttribute(s,a),mr.applyEuler(this.viewer.renderer.sphereCorrection),this.viewer.renderer.isObjectVisible(mr)){let o;a<this.SPHERE_SEGMENTS*It?o=Math.floor(a/3):a<this.NB_VERTICES-this.SPHERE_SEGMENTS*It?o=Math.floor((a/3-this.SPHERE_SEGMENTS)/2)+this.SPHERE_SEGMENTS:o=Math.floor((a-this.NB_VERTICES-this.SPHERE_SEGMENTS*It)/3)+this.SPHERE_HORIZONTAL_SEGMENTS*(this.SPHERE_SEGMENTS-1);const l=Math.floor(o/this.SPHERE_SEGMENTS),h=o-l*this.SPHERE_SEGMENTS;let d=n;for(;d;){const f=Math.floor(l/d.facesByRow),p=Math.floor(h/d.facesByCol);let m=mr.angleTo(this.viewer.state.direction);(f===0||f===d.rows-1)&&(m*=2);const g={row:f,col:p,angle:m,config:d,url:null},v=Oa(g);if(r[v]){r[v].angle=Math.min(r[v].angle,m);break}else if(g.url=e.tileUrl(p,f,d.level),g.url){r[v]=g;break}else d=Ey(e,d.level-1,this)}}this.state.tileConfig=n,this.__loadTiles(Object.values(r))}__loadTiles(e){this.queue.disableAllTasks(),e.forEach(t=>{const n=Oa(t);this.state.tiles[n]?this.queue.setPriority(n,t.angle):(this.state.tiles[n]=!0,this.queue.enqueue(new my(n,t.angle,s=>this.__loadTile(t,s))))}),this.queue.start()}__loadTile(e,t){return this.viewer.textureLoader.loadImage(e.url,null,this.viewer.state.textureData.cacheKey).then(n=>{if(!t.isCancelled()){this.config.debug&&(n=wy(n,e.config.level,Oa(e)));const s=this.config.antialias&&e.config.level>0,r=new $i({map:ee.createTexture(n,s)});this.__swapMaterial(e,r,!1),this.viewer.needsUpdate()}}).catch(n=>{!ee.isAbortError(n)&&!t.isCancelled()&&this.config.showErrorTile&&(this.state.errorMaterial||(this.state.errorMaterial=yy()),this.__swapMaterial(e,this.state.errorMaterial,!0),this.viewer.needsUpdate())})}__swapMaterial(e,t,n){const s=this.state.geom.getAttribute(by);for(let r=0;r<e.config.facesByCol;r++)for(let a=0;a<e.config.facesByRow;a++){const o=e.col*e.config.facesByCol+r,l=e.row*e.config.facesByRow+a,h=l===0,d=l===this.SPHERE_HORIZONTAL_SEGMENTS-1;let f;if(h?f=o*It:d?f=this.NB_VERTICES-this.SPHERE_SEGMENTS*It+o*It:f=this.SPHERE_SEGMENTS*It+(l-1)*this.SPHERE_SEGMENTS*ns+o*ns,n&&this.state.faces[f]>Oc||this.state.faces[f]>e.config.level)continue;this.state.faces[f]=n?Oc:e.config.level;const p=this.state.geom.groups.find(c=>c.start===f).materialIndex;this.state.materials[p]=t;const m=1-a/e.config.facesByRow,g=1-(a+1)/e.config.facesByRow,v=r/e.config.facesByCol,u=(r+1)/e.config.facesByCol;h?(s.setXY(f,(v+u)/2,m),s.setXY(f+1,v,g),s.setXY(f+2,u,g)):d?(s.setXY(f,u,m),s.setXY(f+1,v,m),s.setXY(f+2,(v+u)/2,g)):(s.setXY(f,u,m),s.setXY(f+1,v,m),s.setXY(f+2,u,g),s.setXY(f+3,v,m),s.setXY(f+4,v,g),s.setXY(f+5,u,g))}s.needsUpdate=!0}__switchMesh(e){const[,t]=pr(e);if(this.__cleanup(),this.state.materials=t.material,this.state.geom=t.geometry,this.config.debug){const n=xy(this.state.geom);this.viewer.renderer.addObject(n),this.viewer.renderer.setSphereCorrection(this.viewer.config.sphereCorrection,n)}setTimeout(()=>this.__refresh())}__cleanup(){this.queue.clear(),this.state.tiles={},this.state.faces={},this.state.materials=[],this.state.inTransition=!1}};na.id="equirectangular-tiles";na.VERSION="5.13.4";na.supportsDownload=!1;var Cy=na;/*!
 * Photo Sphere Viewer / Virtual Tour Plugin 5.13.4
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Ry=Object.defineProperty,Py=(i,e)=>{for(var t in e)Ry(i,t,{get:e[t],enumerable:!0})},Ly={};Py(Ly,{EnterArrowEvent:()=>Zu,LeaveArrowEvent:()=>Qu,NodeChangedEvent:()=>qu});var Xu=class Yu extends gn{constructor(e,t){super(Yu.type),this.node=e,this.data=t}};Xu.type="node-changed";var qu=Xu,ju=class $u extends gn{constructor(e,t){super($u.type),this.link=e,this.node=t}};ju.type="enter-arrow";var Zu=ju,Ku=class Ju extends gn{constructor(e,t){super(Ju.type),this.link=e,this.node=t}};Ku.type="leave-arrow";var Qu=Ku,Dy=class extends Mt{constructor(i=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=i,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new qe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(i,e){return super.copy(i,e),this.element=i.element.cloneNode(!0),this.center=i.center,this}},Dn=new I,Fc=new Qe,Bc=new Qe,zc=new I,Hc=new I,Iy=class{constructor(i={}){const e=this;let t,n,s,r;const a={objects:new WeakMap},o=i.element!==void 0?i.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o,this.getSize=function(){return{width:t,height:n}},this.render=function(m,g){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Fc.copy(g.matrixWorldInverse),Bc.multiplyMatrices(g.projectionMatrix,Fc),h(m,m,g),p(m)},this.setSize=function(m,g){t=m,n=g,s=t/2,r=n/2,o.style.width=m+"px",o.style.height=g+"px"};function l(m){m.isCSS2DObject&&(m.element.style.display="none");for(let g=0,v=m.children.length;g<v;g++)l(m.children[g])}function h(m,g,v){if(m.visible===!1){l(m);return}if(m.isCSS2DObject){Dn.setFromMatrixPosition(m.matrixWorld),Dn.applyMatrix4(Bc);const u=Dn.z>=-1&&Dn.z<=1&&m.layers.test(v.layers)===!0,c=m.element;c.style.display=u===!0?"":"none",u===!0&&(m.onBeforeRender(e,g,v),c.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Dn.x*s+s)+"px,"+(-Dn.y*r+r)+"px)",c.parentNode!==o&&o.appendChild(c),m.onAfterRender(e,g,v));const b={distanceToCameraSquared:d(v,m)};a.objects.set(m,b)}for(let u=0,c=m.children.length;u<c;u++)h(m.children[u],g,v)}function d(m,g){return zc.setFromMatrixPosition(m.matrixWorld),Hc.setFromMatrixPosition(g.matrixWorld),zc.distanceToSquared(Hc)}function f(m){const g=[];return m.traverseVisible(function(v){v.isCSS2DObject&&g.push(v)}),g}function p(m){const g=f(m).sort(function(u,c){if(u.renderOrder!==c.renderOrder)return c.renderOrder-u.renderOrder;const b=a.objects.get(u).distanceToCameraSquared,S=a.objects.get(c).distanceToCameraSquared;return b-S}),v=g.length;for(let u=0,c=g.length;u<c;u++)g[u].element.style.zIndex=v-u}}},Vc=new I,ky=new Ki,Gc=new I,Uy=class extends Mt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}},oi=new Qe,Ny=new Qe,Oy=class{constructor(e={}){const t=this;let n,s,r,a;const o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const h=document.createElement("div");h.style.transformOrigin="0 0",h.style.pointerEvents="none",l.appendChild(h);const d=document.createElement("div");d.style.transformStyle="preserve-3d",h.appendChild(d),this.getSize=function(){return{width:n,height:s}},this.render=function(u,c){const b=c.projectionMatrix.elements[5]*a;c.view&&c.view.enabled?(h.style.transform=`translate( ${-c.view.offsetX*(n/c.view.width)}px, ${-c.view.offsetY*(s/c.view.height)}px )`,h.style.transform+=`scale( ${c.view.fullWidth/c.view.width}, ${c.view.fullHeight/c.view.height} )`):h.style.transform="",u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),c.parent===null&&c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld();let S,w;c.isOrthographicCamera&&(S=-(c.right+c.left)/2,w=(c.top+c.bottom)/2);const L=c.view&&c.view.enabled?c.view.height/c.view.fullHeight:1,C=c.isOrthographicCamera?`scale( ${L} )scale(`+b+")translate("+f(S)+"px,"+f(w)+"px)"+p(c.matrixWorldInverse):`scale( ${L} )translateZ(`+b+"px)"+p(c.matrixWorldInverse),U=(c.isPerspectiveCamera?"perspective("+b+"px) ":"")+C+"translate("+r+"px,"+a+"px)";o.camera.style!==U&&(d.style.transform=U,o.camera.style=U),v(u,u,c)},this.setSize=function(u,c){n=u,s=c,r=n/2,a=s/2,l.style.width=u+"px",l.style.height=c+"px",h.style.width=u+"px",h.style.height=c+"px",d.style.width=u+"px",d.style.height=c+"px"};function f(u){return Math.abs(u)<1e-10?0:u}function p(u){const c=u.elements;return"matrix3d("+f(c[0])+","+f(-c[1])+","+f(c[2])+","+f(c[3])+","+f(c[4])+","+f(-c[5])+","+f(c[6])+","+f(c[7])+","+f(c[8])+","+f(-c[9])+","+f(c[10])+","+f(c[11])+","+f(c[12])+","+f(-c[13])+","+f(c[14])+","+f(c[15])+")"}function m(u){const c=u.elements;return"translate(-50%,-50%)"+("matrix3d("+f(c[0])+","+f(c[1])+","+f(c[2])+","+f(c[3])+","+f(-c[4])+","+f(-c[5])+","+f(-c[6])+","+f(-c[7])+","+f(c[8])+","+f(c[9])+","+f(c[10])+","+f(c[11])+","+f(c[12])+","+f(c[13])+","+f(c[14])+","+f(c[15])+")")}function g(u){u.isCSS3DObject&&(u.element.style.display="none");for(let c=0,b=u.children.length;c<b;c++)g(u.children[c])}function v(u,c,b,S){if(u.visible===!1){g(u);return}if(u.isCSS3DObject){const w=u.layers.test(b.layers)===!0,L=u.element;if(L.style.display=w===!0?"":"none",w===!0){u.onBeforeRender(t,c,b);let C;u.isCSS3DSprite?(oi.copy(b.matrixWorldInverse),oi.transpose(),u.rotation2D!==0&&oi.multiply(Ny.makeRotationZ(u.rotation2D)),u.matrixWorld.decompose(Vc,ky,Gc),oi.setPosition(Vc),oi.scale(Gc),oi.elements[3]=0,oi.elements[7]=0,oi.elements[11]=0,oi.elements[15]=1,C=m(oi)):C=m(u.matrixWorld);const A=o.objects.get(u);if(A===void 0||A.style!==C){L.style.transform=C;const U={style:C};o.objects.set(u,U)}L.parentNode!==d&&d.appendChild(L),u.onAfterRender(t,c,b)}}for(let w=0,L=u.children.length;w<L;w++)v(u.children[w],c,b)}}},Fy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
</svg>`,zr="tourLink",In="__tour-link__",By={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},zy={element:()=>{const i=document.createElement("button");return i.className="psv-virtual-tour-arrow",i.innerHTML=Fy,i},size:{width:80,height:80}},Fa="arrow",Hy=class extends Li{constructor(i,e){super(i,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new Oy({element:this.container}):new Iy({element:this.container}),this.camera=this.is3D?new Ht(30,1):null,this.scene=new Lr,this.viewer.addEventListener(ne.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(ne.PositionUpdatedEvent.type,this),this.viewer.addEventListener(ne.SizeUpdatedEvent.type,this),this.viewer.addEventListener(ne.RenderEvent.type,this),this.viewer.addEventListener(ne.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",t=>t.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),this.gallery?.addEventListener("show-gallery",this),this.gallery?.addEventListener("hide-gallery",this))}destroy(){this.viewer.removeEventListener(ne.ReadyEvent.type,this),this.viewer.removeEventListener(ne.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(ne.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(ne.RenderEvent.type,this),this.viewer.removeEventListener(ne.ClickEvent.type,this),this.gallery?.removeEventListener("show-gallery",this),this.gallery?.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(i){switch(i.type){case ne.ReadyEvent.type:case ne.SizeUpdatedEvent.type:case ne.PositionUpdatedEvent.type:this.__updateCamera();break;case ne.RenderEvent.type:this.render();break;case ne.ClickEvent.type:{if(i.data.rightclick)break;const e=this.__getTargetLink(i.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(ee.getEventTarget(i));e&&this.plugin.__onEnterArrow(e,i);break}case"mouseleave":{const e=this.__getTargetLink(ee.getEventTarget(i));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(ee.getEventTarget(i),!0)&&this.plugin.__onHoverArrow(i);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":i.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const i=this.viewer.getSize();if(this.renderer.setSize(i.width,i.height),this.is3D){const e=this.viewer.getPosition();e.pitch=Ue.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,i.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(i.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const i=this.viewer.getPosition(),e=[];let t=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(n=>{const s=n.userData[Fa];if(s.conflict){const r=Math.abs(ee.getShortestArc(i.yaw,s.yaw));t=Math.min(t,r),e.push([n,r])}}),e.forEach(([n,s])=>{const r=s!==t;n.element.style.opacity=r?"0.5":null,n.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(i,e){if(e?.image){const t=document.createElement("img");return t.src=e.image,t}else if(e?.element)return typeof e.element=="function"?e.element(i):e.element}addLinkArrow(i,e,t=1){let n=this.__buildArrowElement(i,i.arrowStyle);n||(n=this.__buildArrowElement(i,this.arrowStyle)),n[zr]=i;const s={...this.arrowStyle,...i.arrowStyle};if(n.classList.add("psv-virtual-tour-link"),s.className&&ee.addClasses(n,s.className),s.style&&Object.assign(n.style,s.style),this.is3D){n.style.width=s.size.width*1.5+"px",n.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(o=>{const l=o.userData[Fa];Math.abs(ee.getShortestArc(l.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(l.conflict=!0,r=!0)});const a=new Uy(n);a.userData[Fa]={yaw:e.yaw,conflict:r},a.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},a.position,t*100),this.scene.add(a)}else{n.style.width=s.size.width+"px",n.style.height=s.size.height+"px",n.style.pointerEvents="auto";const r=new Dy(n);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(i,e=!1){const t=e?ee.getClosest(i,".psv-virtual-tour-link"):i;return t?t[zr]:void 0}__onToggleGallery(i){i?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},ef=class{constructor(i,e){this.plugin=i,this.viewer=e,this.nodes={}}destroy(){}checkNode(i){if(!i.id)throw new ie("No id given for node");if(!i.panorama)throw new ie(`No panorama provided for node ${i.id}`);if(this.plugin.isGps&&!(i.gps?.length>=2))throw new ie(`No GPS position provided for node ${i.id}`);if(!this.plugin.isGps&&i.markers?.some(e=>e.gps&&!e.position))throw new ie("Cannot use GPS positioning for markers in manual mode");i.links||(ee.logWarn(`Node ${i.id} has no links`),i.links=[])}checkLink(i,e){if(!e.nodeId)throw new ie(`Link of node ${i.id} has no target id`);if(e.nodeId===i.id)throw new ie(`Node ${i.id} links to itself`);if(!this.plugin.isGps&&!ee.isExtendedPosition(e.position))throw new ie(`No position provided for link ${e.nodeId} of node ${i.id}`);if(this.plugin.isGps&&!e.gps)throw new ie(`No GPS position provided for link ${e.nodeId} of node ${i.id}`)}},Vy=class extends ef{async loadNode(i){if(this.nodes[i])return this.nodes[i];throw new ie(`Node ${i} not found`)}setNodes(i){if(!i?.length)throw new ie("No nodes provided");const e={},t={};i.forEach(n=>{if(this.checkNode(n),e[n.id])throw new ie(`Duplicate node ${n.id}`);e[n.id]=n}),i.forEach(n=>{this.__checkLinks(n,e),n.links.forEach(s=>{t[s.nodeId]=!0})}),i.forEach(n=>{t[n.id]||ee.logWarn(`Node ${n.id} is never linked to`)}),this.nodes=e}updateNode(i){if(!i.id)throw new ie("No id given for node");const e=this.nodes[i.id];if(!e)throw new ie(`Node ${i.id} does not exist`);return Object.assign(e,i),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(i,e){i.links.forEach(t=>{if(!e[t.nodeId])throw new ie(`Target node ${t.nodeId} of node ${i.id} does not exists`);t.gps=t.gps||e[t.nodeId].gps,this.checkLink(i,t)})}},Gy=class extends ef{constructor(i,e){if(super(i,e),!i.config.getNode)throw new ie("Missing getNode() option.");this.nodeResolver=i.config.getNode}async loadNode(i){if(this.nodes[i])return this.nodes[i];{const e=await this.nodeResolver(i);return this.checkNode(e),e.links.forEach(t=>{this.checkLink(e,t)}),this.nodes[i]=e,e}}clearCache(){this.nodes={}}};function Wc(i,e){const t=Xc(i),n=Xc(e),s=i[2]??0,r=e[2]??0;let a=0;return s!==r&&(a=Math.atan((r-s)/Wy(t,n))),{yaw:Xy(t,n),pitch:a}}function Xc(i){return[Ue.degToRad(i[0]),Ue.degToRad(i[1])]}function Wy(i,e){return ee.greatArcDistance(i,e)*6371e3}function Xy(i,e){const[t,n]=i,[s,r]=e,a=Math.sin(s-t)*Math.cos(r),o=Math.cos(n)*Math.sin(r)-Math.sin(n)*Math.cos(r)*Math.cos(s-t);return Math.atan2(a,o)}var pl=ee.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,arrowStyle:zy,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(i){if(i!=="client"&&i!=="server")throw new ie("VirtualTourPlugin: invalid dataMode");return i},positionMode(i){if(i!=="gps"&&i!=="manual")throw new ie("VirtualTourPlugin: invalid positionMode");return i},renderMode(i){if(i!=="3d"&&i!=="2d")throw new ie("VirtualTourPlugin: invalid renderMode");return i},arrowsPosition(i,{defValue:e}){return{...e,...i}},arrowStyle(i,{defValue:e}){return{...e,...i}},map(i,{rawConfig:e}){if(i){if(e.dataMode==="server")return ee.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!i.imageUrl)return ee.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null}return i}}),Os=class tf extends ea{constructor(e,t){super(e,t),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new Hy(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}static withConfig(e){return[tf,e]}init(){super.init(),this.arrowsRenderer.init(),ee.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),this.markers?.config.markers&&(ee.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&ee.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new Gy(this,this.viewer):new Vy(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),this.plan?.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){this.map?.removeEventListener("select-hotspot",this),this.plan?.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(e){if(e instanceof ne.ClickEvent){const t=e.data.objects.find(n=>n.userData[zr])?.userData[zr];t&&this.setCurrentNode(t.nodeId,null,t)}else if(e.type==="select-hotspot"){const t=e.hotspotId;t.startsWith(In)&&this.setCurrentNode(t.substring(In.length))}}getCurrentNode(){return this.state.currentNode}setNodes(e,t){if(this.isServerSide)throw new ie("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(e),t?this.datasource.nodes[t]||(t=e[0].id,ee.logWarn(`startNodeId not found is provided nodes, resetted to ${t}`)):t=e[0].id,this.setCurrentNode(t),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(e,t,n){if(e===this.state.currentNode?.id&&!t?.forceUpdate)return Promise.resolve(!0);t?.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=e;const s=this.state.currentNode,r=s&&n?this.__getLinkPosition(s,n):null;return Promise.resolve(this.state.preload[e]).then(()=>{if(this.state.loadingNode!==e)throw ee.getAbortError();return this.datasource.loadNode(e)}).then(a=>{if(this.state.loadingNode!==e)throw ee.getAbortError();const o={...pl.defaults.transitionOptions,rotateTo:r,zoomTo:r?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(a,s,n):this.config.transitionOptions,...t};return o.effect||(o.effect="none"),this.viewer.panel.hide("description"),this.__hideTooltip(),this.arrowsRenderer.clear(),this.gallery?.config.hideOnClick&&this.gallery.hide(),this.map?.config.minimizeOnHotspotClick&&this.map.minimize(),this.plan?.config.minimizeOnHotspotClick&&this.plan.minimize(),o.rotation&&o.effect==="none"?this.viewer.animate({...o.rotateTo,zoom:o.zoomTo,speed:o.speed}).then(()=>[a,o]):Promise.resolve([a,o])}).then(([a,o])=>{if(this.state.loadingNode!==e)throw ee.getAbortError();return this.markers?.clearMarkers(),this.config.linksOnCompass&&this.compass?.clearHotspots(),this.viewer.setPanorama(a.panorama,{caption:a.caption,description:a.description,panoData:a.panoData,sphereCorrection:a.sphereCorrection,showLoader:o.showLoader,position:o.rotateTo,zoom:o.zoomTo,transition:o.effect==="none"?!1:{effect:o.effect,rotation:o.rotation,speed:o.speed}}).then(l=>{if(!l)throw ee.getAbortError();return a})}).then(a=>{if(this.state.loadingNode!==e)throw ee.getAbortError();return this.state.currentNode=a,this.map&&this.map.setCenter(this.__getNodeMapPosition(a)??this.map.config.center),this.plan?.setCoordinates(a.gps),this.__addNodeMarkers(a),this.__renderLinks(a),this.__preload(a),this.state.loadingNode=null,this.dispatchEvent(new qu(a,{fromNode:s,fromLink:n,fromLinkPosition:r})),this.viewer.resetIdleTimer(),!0}).catch(a=>{if(ee.isAbortError(a))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,a})}async gotoLink(e,t="8rpm"){const n=this.getLinkPosition(e);t?await this.viewer.animate({...n,speed:t}):this.viewer.rotate(n)}getLinkPosition(e){const t=this.state.currentNode?.links.find(n=>n.nodeId===e);if(!t)throw new ie(`Cannot find link "${e}"`);return this.__getLinkPosition(this.state.currentNode,t)}updateNode(e){if(this.isServerSide)throw new ie("Cannot update node in server side mode");const t=this.datasource.updateNode(e);if((e.name||e.thumbnail||e.panorama)&&this.__setGalleryItems(),(e.name||e.gps||e.map)&&this.__setMapHotspots(),(e.name||e.gps||e.plan)&&this.__setPlanHotspots(),this.state.currentNode?.id===t.id){if(this.__hideTooltip(),e.panorama||e.panoData||e.sphereCorrection){this.setCurrentNode(t.id,{forceUpdate:!0});return}e.caption&&this.viewer.setOption("caption",t.caption),e.description&&this.viewer.setOption("description",t.description),(e.links||e.gps)&&this.__renderLinks(t),e.gps&&this.plan?.setCoordinates(t.gps),(e.map||e.gps)&&this.map?.setCenter(this.__getNodeMapPosition(t)),(e.markers||e.gps)&&this.__addNodeMarkers(t)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).filter(e=>e.showInGallery!==!1).map(e=>({id:e.id,panorama:e.panorama,name:e.name,thumbnail:e.thumbnail})),e=>{this.setCurrentNode(e)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.map!==!1).map(e=>({tooltip:e.name,...e.map||{},...this.__getNodeMapPosition(e),id:In+e.id})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.plan!==!1).map(e=>({tooltip:e.name,...e.plan||{},coordinates:e.gps,id:In+e.id})))}__renderLinks(e){this.arrowsRenderer.clear();const t=[];e.links.forEach(n=>{const s=this.__getLinkPosition(e,n);s.yaw+=n.linkOffset?.yaw??0,s.pitch+=n.linkOffset?.pitch??0,this.isGps&&!this.is3D&&(s.pitch+=this.config.arrowsPosition.linkPitchOffset),t.push(s),this.arrowsRenderer.addLinkArrow(n,s,n.linkOffset?.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&this.compass?.setHotspots(t)}__getLinkPosition(e,t){return this.isGps?Wc(e.gps,t.gps):this.viewer.dataHelper.cleanPosition(t.position)}async __getTooltipContent(e){const t=await this.datasource.loadNode(e.nodeId),n=[];(t.name||t.thumbnail||t.caption)&&(t.name&&n.push(`<h3>${t.name}</h3>`),t.thumbnail&&n.push(`<img src="${t.thumbnail}">`),t.caption&&n.push(`<p>${t.caption}</p>`));let s=n.join("");return this.config.getLinkTooltip&&(s=this.config.getLinkTooltip(s,e,t)),s}__onEnterArrow(e,t){const n=ee.getPosition(this.viewer.container),s={x:t.clientX-n.x,y:t.clientY-n.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...By,left:s.x,top:s.y,box:{width:20,height:20}}),this.__getTooltipContent(e).then(r=>{r?this.state.currentTooltip.update(r):this.__hideTooltip()})),this.map?.setActiveHotspot(In+e.nodeId),this.plan?.setActiveHotspot(In+e.nodeId),this.dispatchEvent(new Zu(e,this.state.currentNode))}__onHoverArrow(e){const t=ee.getPosition(this.viewer.container),n={x:e.clientX-t.x,y:e.clientY-t.y};this.state.currentTooltip?.move({left:n.x,top:n.y})}__onLeaveArrow(e){this.__hideTooltip(),this.map?.setActiveHotspot(null),this.plan?.setActiveHotspot(null),this.dispatchEvent(new Qu(e,this.state.currentNode))}__hideTooltip(){this.state.currentTooltip?.hide(),this.state.currentTooltip=null}__preload(e){this.config.preload&&(this.state.preload[e.id]=!0,this.state.currentNode.links.filter(t=>!this.state.preload[t.nodeId]).filter(t=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,t):!0).forEach(t=>{this.state.preload[t.nodeId]=this.datasource.loadNode(t.nodeId).then(n=>this.viewer.textureLoader.preloadPanorama(n.panorama)).then(()=>{this.state.preload[t.nodeId]=!0}).catch(()=>{delete this.state.preload[t.nodeId]})}))}__addNodeMarkers(e){e.markers&&(this.markers?this.markers.setMarkers(e.markers.map(t=>(t.gps&&this.isGps&&(t.position=Wc(e.gps,t.gps),t.data?.map&&Object.assign(t.data.map,this.__getGpsMapPosition(t.gps)),t.data?.plan&&(t.data.plan.coordinates=t.gps)),t))):ee.logWarn(`Node ${e.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(e){const t=this.__getGpsMapPosition(e.gps);return t||(e.map?{x:e.map.x,y:e.map.y}:null)}__getGpsMapPosition(e){const t=this.config.map;return this.isGps&&t&&t.extent&&t.size?{x:Ue.mapLinear(e[0],t.extent[0],t.extent[2],0,t.size.width),y:Ue.mapLinear(e[1],t.extent[1],t.extent[3],0,t.size.height)}:null}};Os.id="virtual-tour";Os.VERSION="5.13.4";Os.configParser=pl;Os.readonlyOptions=Object.keys(pl.defaults);var Yy=Os;/*!
 * Photo Sphere Viewer / Gallery Plugin 5.13.4
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var qy=Object.defineProperty,jy=(i,e)=>{for(var t in e)qy(i,t,{get:e[t],enumerable:!0})},$y={};jy($y,{HideGalleryEvent:()=>xs,ShowGalleryEvent:()=>ys});var nf=class sf extends gn{constructor(e){super(sf.type),this.fullscreen=e}};nf.type="show-gallery";var ys=nf,rf=class af extends gn{constructor(){super(af.type)}};rf.type="hide-gallery";var xs=rf,Zy='<svg viewBox="185 115 330 330" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M186.7 326.7V163.3c0-15 8.3-23.3 23.3-23.3h210c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H210c-15 0-23.3-8.3-23.3-23.3zm70 70v-23.4H420c30.2 0 46.7-16.4 46.7-46.6V210H490c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H280c-15 0-23.3-8.3-23.3-23.3zm-23.8-105H397l-40-50.4-26.7 29.7-44.3-54.5zm106.7-76c9.6 0 17.8-7.8 17.8-17.2a18 18 0 0 0-17.8-17.8c-9.4 0-17.2 8.2-17.2 17.8 0 9.4 7.8 17.2 17.2 17.2z"/><!--Created by Wolf Böse from the Noun Project--></svg>',Fs=class extends At{constructor(i){super(i,{className:"psv-gallery-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Zy}),this.plugin=this.viewer.getPlugin("gallery"),this.plugin&&(this.plugin.addEventListener(ys.type,this),this.plugin.addEventListener(xs.type,this))}destroy(){this.plugin&&(this.plugin.removeEventListener(ys.type,this),this.plugin.removeEventListener(xs.type,this)),super.destroy()}handleEvent(i){i instanceof ys?this.toggleActive(!0):i instanceof xs&&this.toggleActive(!1)}isSupported(){return!!this.plugin}onClick(){this.plugin.toggle()}};Fs.id="gallery";var of="psvGalleryItem",lf=ee.dasherize(of),gr="psv-gallery-item--active",Ky=(i,e)=>`
${i.map(t=>`
<div class="psv-gallery-item" 
     data-${lf}="${t.id}"
     style="width:${e.width}px; aspect-ratio:${e.width/e.height};"
     tabindex="0">
    ${t.name?`<div class="psv-gallery-item-title"><span>${t.name}</span></div>`:""}
    <svg class="psv-gallery-item-thumb" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice"><use href="#psvGalleryBlankIcon"></use></svg>
    ${t.thumbnail?`<div class="psv-gallery-item-thumb" data-src="${t.thumbnail}"></div>`:""}
</div>
`).join("")}
`,Yc=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 0 50 100"><polygon fill="currentColor" points="24.66 99.31 25.34 100 75.34 50 25.34 0 24.66 0.69 24.66 22.64 52.01 50 24.66 77.36 24.66 99.31"/><!-- Created by Rainbow Designs from the Noun Project --></svg>
`,Jy=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
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
</svg>`;function qc(i,e){let t;i.addEventListener("mousedown",()=>{e(),clearInterval(t),t=setInterval(()=>{i.style.pointerEvents==="none"?clearInterval(t):e()},500)}),i.addEventListener("mouseup",()=>{clearInterval(t)})}var Qy=class extends Li{constructor(i,e){super(e,{className:`psv-gallery ${di.CAPTURE_EVENTS_CLASS}`}),this.plugin=i,this.state={visible:!0,mousedown:!1,initMouse:null,mouse:null,itemMargin:null,breakpoint:null,scrollLeft:0,scrollTop:0,isAboveBreakpoint:null},this.container.innerHTML=Jy,this.container.querySelector("svg").style.display="none";const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=di.ICONS.close,this.container.appendChild(t),t.addEventListener("click",()=>this.plugin.hide()),this.items=document.createElement("div"),this.items.className="psv-gallery-container",this.container.appendChild(this.items),this.config.navigationArrows&&(this.arrowLeft=document.createElement("div"),this.arrowLeft.className="psv-gallery-arrow",this.arrowLeft.innerHTML=Yc,this.container.appendChild(this.arrowLeft),this.arrowRight=document.createElement("div"),this.arrowRight.className="psv-gallery-arrow",this.arrowRight.innerHTML=Yc,this.container.appendChild(this.arrowRight),qc(this.arrowLeft,()=>this.__scroll(-1)),qc(this.arrowRight,()=>this.__scroll(1))),this.state.itemMargin=parseInt(ee.getStyleProperty(this.items,"padding-left"),10),this.state.breakpoint=parseInt(ee.getStyleProperty(this.container,"--psv-gallery-breakpoint"),10),this.observer=new IntersectionObserver(n=>{n.forEach(s=>{if(s.intersectionRatio>0){const r=s.target;r.style.backgroundImage=`url("${r.dataset.src}")`,delete r.dataset.src,this.observer.unobserve(s.target)}})},{root:this.viewer.container}),this.viewer.addEventListener(ne.SizeUpdatedEvent.type,this),this.container.addEventListener("transitionend",this),this.container.addEventListener("keydown",this),this.items.addEventListener("wheel",this),this.items.addEventListener("scroll",this),this.items.addEventListener("mousedown",this),this.items.addEventListener("mousemove",this),this.items.addEventListener("click",this),window.addEventListener("mouseup",this),this.hide()}get isAboveBreakpoint(){return this.items.offsetWidth>this.state.breakpoint}get config(){return this.plugin.config}destroy(){window.removeEventListener("mouseup",this),this.viewer.removeEventListener(ne.SizeUpdatedEvent.type,this),this.observer.disconnect(),super.destroy()}handleEvent(i){switch(i.type){case"transitionend":this.isVisible()&&i.target===this.container&&this.__focusActiveOrFirst();break;case"keydown":if(this.isVisible())switch(i.key){case di.KEY_CODES.Escape:this.plugin.hide();break;case di.KEY_CODES.Enter:this.__click(i);break}break;case"wheel":{const e=i;this.__scroll(e.deltaY>0?1:-1),i.preventDefault();break}case"scroll":case ne.SizeUpdatedEvent.type:this.__updateArrows();break;case"mousedown":this.state.mousedown=!0,this.isAboveBreakpoint?this.state.initMouse=i.clientX:this.state.initMouse=i.clientY,this.state.mouse=this.state.initMouse;break;case"mousemove":if(this.state.mousedown)if(this.isAboveBreakpoint){const e=this.state.mouse-i.clientX;this.items.scrollLeft+=e,this.state.scrollLeft=this.items.scrollLeft,this.state.mouse=i.clientX}else{const e=this.state.mouse-i.clientY;this.items.scrollTop+=e,this.state.scrollTop=this.items.scrollTop,this.state.mouse=i.clientY}break;case"mouseup":this.state.mousedown=!1,this.state.mouse=null,i.preventDefault();break;case"click":{const e=this.isAboveBreakpoint?i.clientX:i.clientY;Math.abs(this.state.initMouse-e)<10&&this.__click(i);break}}}show(){this.container.classList.add("psv-gallery--open"),this.state.visible=!0}hide(){this.container.classList.remove("psv-gallery--open"),this.state.visible=!1,ee.hasParent(document.activeElement,this.container)&&this.viewer.navbar.focusButton(Fs.id)}setItems(i){this.items.innerHTML=Ky(i,this.plugin.config.thumbnailSize),this.observer&&(this.observer.disconnect(),this.items.querySelectorAll("[data-src]").forEach(e=>{this.observer.observe(e)})),this.__updateArrows()}setActive(i){if(this.items.querySelector("."+gr)?.classList.remove(gr),i){const t=this.items.querySelector(`[data-${lf}="${i}"]`);t&&(t.classList.add(gr),this.items.scrollLeft=t.offsetLeft+t.clientWidth/2-this.items.clientWidth/2)}}__click(i){const e=ee.getMatchingTarget(i,".psv-gallery-item");if(!e)return;const t=e.dataset[of];this.plugin.applyItem(t),this.setActive(t),(this.config.hideOnClick||!this.isAboveBreakpoint)&&this.hide()}__focusActiveOrFirst(){(this.items.querySelector("."+gr)??this.items.firstElementChild)?.focus()}__scroll(i){if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth,t=this.plugin.config.thumbnailSize.width+(this.state.itemMargin??0);this.state.scrollLeft=Ue.clamp(this.state.scrollLeft+i*t,0,e),i===-1&&this.state.scrollLeft<t*.8&&(this.state.scrollLeft=0),i===1&&this.state.scrollLeft>e-t*.8&&(this.state.scrollLeft=e),this.items.scroll({left:this.state.scrollLeft,behavior:"smooth"})}else{const e=this.items.scrollHeight-this.items.offsetHeight,t=this.items.querySelector(":first-child").offsetHeight*2+(this.state.itemMargin??0);this.state.scrollTop=Ue.clamp(this.state.scrollTop+i*t,0,e),i===-1&&this.state.scrollTop<t*.8&&(this.state.scrollTop=0),i===1&&this.state.scrollTop>e-t*.8&&(this.state.scrollTop=e),this.items.scroll({top:this.state.scrollTop,behavior:"smooth"})}}__updateArrows(){if(!this.config.navigationArrows)return;this.state.isAboveBreakpoint!==this.isAboveBreakpoint&&(ee.toggleClass(this.arrowLeft,"psv-gallery-arrow--left",this.isAboveBreakpoint),ee.toggleClass(this.arrowLeft,"psv-gallery-arrow--top",!this.isAboveBreakpoint),ee.toggleClass(this.arrowRight,"psv-gallery-arrow--right",this.isAboveBreakpoint),ee.toggleClass(this.arrowRight,"psv-gallery-arrow--bottom",!this.isAboveBreakpoint),this.state.isAboveBreakpoint=this.isAboveBreakpoint);const i=(e,t)=>{t?(e.style.opacity="1",e.style.pointerEvents="auto"):(e.style.opacity="0",e.style.pointerEvents="none")};if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth;i(this.arrowLeft,this.items.scrollLeft>50),i(this.arrowRight,this.items.scrollLeft<e-50)}else{const e=this.items.scrollHeight-this.items.offsetHeight;i(this.arrowLeft,this.items.scrollTop>50),i(this.arrowRight,this.items.scrollTop<e-50)}}},ex=ee.getConfigParser({items:[],navigationArrows:!0,visibleOnLoad:!1,hideOnClick:!0,thumbnailSize:{width:200,height:100}}),Bs=class cf extends ea{constructor(e,t){super(e,t),this.items=[],this.gallery=new Qy(this,this.viewer)}static withConfig(e){return[cf,e]}init(){super.init(),ee.checkStylesheet(this.viewer.container,"gallery-plugin"),this.map=this.viewer.getPlugin("map"),this.plan=this.viewer.getPlugin("plan"),this.viewer.addEventListener(ne.PanoramaLoadedEvent.type,this),this.viewer.addEventListener(ne.ShowPanelEvent.type,this),this.config.visibleOnLoad&&this.viewer.addEventListener(ne.ReadyEvent.type,()=>{this.items.length&&this.show()},{once:!0}),this.setItems(this.config.items),delete this.config.items,setTimeout(()=>this.__updateButton())}destroy(){this.viewer.removeEventListener(ne.PanoramaLoadedEvent.type,this),this.viewer.removeEventListener(ne.ShowPanelEvent.type,this),this.gallery.destroy(),super.destroy()}setOptions(e){super.setOptions(e),e.thumbnailSize&&this.gallery.setItems(this.items)}handleEvent(e){if(e instanceof ne.PanoramaLoadedEvent){const t=this.items.find(n=>ee.deepEqual(n.panorama,e.data.panorama));this.currentId=t?.id,this.gallery.setActive(this.currentId)}else e instanceof ne.ShowPanelEvent&&this.gallery.isVisible()&&this.hide()}show(){return this.map?.minimize(),this.plan?.minimize(),this.dispatchEvent(new ys(!this.gallery.isAboveBreakpoint)),this.gallery.show()}hide(){return this.dispatchEvent(new xs),this.gallery.hide()}toggle(){this.gallery.isVisible()?this.hide():this.show()}isVisible(){return this.gallery.isVisible()}setItems(e,t){if(e?e.forEach((n,s)=>{if(!n.id)throw new ie(`Item ${s} has no "id".`);if(!n.panorama)throw new ie(`Item "${n.id}" has no "panorama".`)}):e=[],this.handler=t,this.items=e.map(n=>({...n,id:`${n.id}`})),this.gallery.setItems(this.items),this.currentId){const n=this.items.find(s=>s.id===this.currentId);this.currentId=n?.id,this.gallery.setActive(this.currentId)}this.items.length||this.gallery.hide(),this.__updateButton()}applyItem(e){if(e!==this.currentId){if(this.handler)this.handler(e);else{const t=this.items.find(n=>n.id===e);this.viewer.setPanorama(t.panorama,{caption:t.name,...t.options})}this.currentId=e}}__updateButton(){this.viewer.navbar.getButton(Fs.id,!1)?.toggle(this.items.length>0)}};Bs.id="gallery";Bs.VERSION="5.13.4";Bs.configParser=ex;Bs.readonlyOptions=["items","navigationArrows","visibleOnLoad"];var tx=Bs;mi.lang[Fs.id]="Gallery";ta(Fs,"caption:left");/*!
 * Photo Sphere Viewer / Markers Plugin 5.13.4
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var ix=Object.defineProperty,nx=(i,e)=>{for(var t in e)ix(i,t,{get:e[t],enumerable:!0})},sx={};nx(sx,{EnterMarkerEvent:()=>xf,GotoMarkerDoneEvent:()=>Bo,HideMarkersEvent:()=>ws,LeaveMarkerEvent:()=>vf,MarkerVisibilityEvent:()=>uf,MarkersPluginEvent:()=>Zt,RenderMarkersListEvent:()=>Bf,SelectMarkerEvent:()=>Mf,SelectMarkerListEvent:()=>Tf,SetMarkersEvent:()=>kf,ShowMarkersEvent:()=>Es,UnselectMarkerEvent:()=>Rf});var Zt=class extends gn{},hf=class df extends Zt{constructor(e,t){super(df.type),this.marker=e,this.visible=t}};hf.type="marker-visibility";var uf=hf,ff=class pf extends Zt{constructor(e){super(pf.type),this.marker=e}};ff.type="goto-marker-done";var Bo=ff,mf=class gf extends Zt{constructor(e){super(gf.type),this.marker=e}};mf.type="leave-marker";var vf=mf,_f=class yf extends Zt{constructor(e){super(yf.type),this.marker=e}};_f.type="enter-marker";var xf=_f,wf=class Ef extends Zt{constructor(e,t,n){super(Ef.type),this.marker=e,this.doubleClick=t,this.rightClick=n}};wf.type="select-marker";var Mf=wf,Sf=class bf extends Zt{constructor(e){super(bf.type),this.marker=e}};Sf.type="select-marker-list";var Tf=Sf,Af=class Cf extends Zt{constructor(e){super(Cf.type),this.marker=e}};Af.type="unselect-marker";var Rf=Af,Pf=class Lf extends Zt{constructor(){super(Lf.type)}};Pf.type="hide-markers";var ws=Pf,Df=class If extends Zt{constructor(e){super(If.type),this.markers=e}};Df.type="set-markers";var kf=Df,Uf=class Nf extends Zt{constructor(){super(Nf.type)}};Uf.type="show-markers";var Es=Uf,Of=class Ff extends Zt{constructor(e){super(Ff.type),this.markers=e}};Of.type="render-markers-list";var Bf=Of,rx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Rs=class extends At{constructor(i){super(i,{className:"psv-markers-button",icon:rx,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(Es.type,this),this.plugin.addEventListener(ws.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(Es.type,this),this.plugin.removeEventListener(ws.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof Es?this.toggleActive(!0):i instanceof ws&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Rs.id="markers";var zf=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Hr="http://www.w3.org/2000/svg",rt="psvMarker",ax=ee.dasherize(rt),ss="marker",Un="markersList",zo={amount:2,duration:100,easing:"linear"},ox=(i,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${zf} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${i.map(t=>`
        <li data-${ax}="${t.id}" class="psv-panel-menu-item" tabindex="0">
          ${t.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${t.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${t.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,sa=class extends At{constructor(i){super(i,{className:" psv-markers-list-button",icon:zf,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(ne.ShowPanelEvent.type,this),this.viewer.addEventListener(ne.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(ne.ShowPanelEvent.type,this),this.viewer.removeEventListener(ne.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof ne.ShowPanelEvent?this.toggleActive(i.panelId===Un):i instanceof ne.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};sa.id="markersList";var jc=new I,lx=new Ki,$c=new I,cx=class extends Mt{constructor(i=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=i,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(i,e){return super.copy(i,e),this.element=i.element.cloneNode(!0),this}},li=new Qe,hx=new Qe,dx=class{constructor(i={}){const e=this;let t,n,s,r;const a={camera:{style:""},objects:new WeakMap},o=i.element!==void 0?i.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",o.appendChild(l);const h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:t,height:n}},this.render=function(v,u){const c=u.projectionMatrix.elements[5]*r;u.view&&u.view.enabled?(l.style.transform=`translate( ${-u.view.offsetX*(t/u.view.width)}px, ${-u.view.offsetY*(n/u.view.height)}px )`,l.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):l.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let b,S;u.isOrthographicCamera&&(b=-(u.right+u.left)/2,S=(u.top+u.bottom)/2);const w=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,L=u.isOrthographicCamera?`scale( ${w} )scale(`+c+")translate("+d(b)+"px,"+d(S)+"px)"+f(u.matrixWorldInverse):`scale( ${w} )translateZ(`+c+"px)"+f(u.matrixWorldInverse),A=(u.isPerspectiveCamera?"perspective("+c+"px) ":"")+L+"translate("+s+"px,"+r+"px)";a.camera.style!==A&&(h.style.transform=A,a.camera.style=A),g(v,v,u)},this.setSize=function(v,u){t=v,n=u,s=t/2,r=n/2,o.style.width=v+"px",o.style.height=u+"px",l.style.width=v+"px",l.style.height=u+"px",h.style.width=v+"px",h.style.height=u+"px"};function d(v){return Math.abs(v)<1e-10?0:v}function f(v){const u=v.elements;return"matrix3d("+d(u[0])+","+d(-u[1])+","+d(u[2])+","+d(u[3])+","+d(u[4])+","+d(-u[5])+","+d(u[6])+","+d(u[7])+","+d(u[8])+","+d(-u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(-u[13])+","+d(u[14])+","+d(u[15])+")"}function p(v){const u=v.elements;return"translate(-50%,-50%)"+("matrix3d("+d(u[0])+","+d(u[1])+","+d(u[2])+","+d(u[3])+","+d(-u[4])+","+d(-u[5])+","+d(-u[6])+","+d(-u[7])+","+d(u[8])+","+d(u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(u[13])+","+d(u[14])+","+d(u[15])+")")}function m(v){v.isCSS3DObject&&(v.element.style.display="none");for(let u=0,c=v.children.length;u<c;u++)m(v.children[u])}function g(v,u,c,b){if(v.visible===!1){m(v);return}if(v.isCSS3DObject){const S=v.layers.test(c.layers)===!0,w=v.element;if(w.style.display=S===!0?"":"none",S===!0){v.onBeforeRender(e,u,c);let L;v.isCSS3DSprite?(li.copy(c.matrixWorldInverse),li.transpose(),v.rotation2D!==0&&li.multiply(hx.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(jc,lx,$c),li.setPosition(jc),li.scale($c),li.elements[3]=0,li.elements[7]=0,li.elements[11]=0,li.elements[15]=1,L=p(li)):L=p(v.matrixWorld);const C=a.objects.get(v);if(C===void 0||C.style!==L){w.style.transform=L;const A={style:L};a.objects.set(v,A)}w.parentNode!==h&&h.appendChild(w),v.onAfterRender(e,u,c)}}for(let S=0,w=v.children.length;S<w;S++)g(v.children[S],u,c)}}},ux=class{constructor(i){this.viewer=i,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new dx({element:this.element}),this.scene=new Lr,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(t=>{const n=t.target[rt];n.config.visible&&(n.viewportIntersection=t.isIntersecting)})},{root:this.element}),i.addEventListener(ne.ReadyEvent.type,this,{once:!0}),i.addEventListener(ne.SizeUpdatedEvent.type,this),i.addEventListener(ne.RenderEvent.type,this)}handleEvent(i){switch(i.type){case ne.ReadyEvent.type:case ne.SizeUpdatedEvent.type:this.updateSize();break;case ne.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(ne.ReadyEvent.type,this),this.viewer.removeEventListener(ne.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(ne.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const i=this.viewer.getSize();this.renderer.setSize(i.width,i.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(i){this.scene.add(i.threeElement),this.intersectionObserver.observe(i.domElement)}removeObject(i){this.scene.remove(i.threeElement),this.intersectionObserver.unobserve(i.domElement)}},Ar=(i=>(i.image="image",i.html="html",i.element="element",i.imageLayer="imageLayer",i.videoLayer="videoLayer",i.elementLayer="elementLayer",i.polygon="polygon",i.polygonPixels="polygonPixels",i.polyline="polyline",i.polylinePixels="polylinePixels",i.square="square",i.rect="rect",i.circle="circle",i.ellipse="ellipse",i.path="path",i))(Ar||{});function Ho(i,e=!1){const t=[];if(Object.keys(Ar).forEach(n=>{i[n]&&t.push(n)}),t.length===0&&!e)throw new ie(`missing marker content, either ${Object.keys(Ar).join(", ")}`);if(t.length>1)throw new ie(`multiple marker content, either ${Object.keys(Ar).join(", ")}`);return t[0]}var Hf=class{constructor(i,e,t){if(this.viewer=i,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!t.id)throw new ie("missing marker id");this.type=Ho(t),this.createElement(),this.update(t)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(i){const e=Ho(i,!0);if(e!==void 0&&e!==this.type)throw new ie(`cannot change marker ${i.id} type`);if(this.config=ee.deepmerge(this.config,i),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),ee.isNil(this.config.visible)&&(this.config.visible=!0),ee.isNil(this.config.zIndex)&&(this.config.zIndex=1),ee.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const t=this.config.rotation;typeof t=="object"?this.config.rotation={yaw:t.yaw?ee.parseAngle(t.yaw,!0,!1):0,pitch:t.pitch?ee.parseAngle(t.pitch,!0,!1):0,roll:t.roll?ee.parseAngle(t.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:ee.parseAngle(t,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=ee.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(i,e,t=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const n={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(i||e){const s=ee.getPosition(this.viewer.container);n.top=e-s.y+10,n.left=i-s.x,n.box={width:20,height:20}}else n.top=this.state.position2D.y,n.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,a=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,a*=this.config.hoverScale.amount),n.top=s.y-a*this.state.anchor.y+a/2,n.left=s.x-r*this.state.anchor.x+r/2,n.box={width:r,height:a}}this.tooltip?t?this.tooltip.update(this.config.tooltip.content,n):this.tooltip.move(n):this.tooltip=this.viewer.createTooltip(n)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},ml=class extends Hf{get domElement(){return this.element}constructor(i,e,t){super(i,e,t)}afterCreateElement(){this.element[rt]=this}destroy(){delete this.element[rt],super.destroy()}update(i){super.update(i);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&ee.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},Vr=class extends ml{constructor(i,e,t){super(i,e,t)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:i,zoomLevel:e,hoveringMarker:t}){this.__updateSize();const n=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return n.x-=this.state.size.width*this.state.anchor.x,n.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&n.x+this.state.size.width>=0&&n.x-this.state.size.width<=this.viewer.state.size.width&&n.y+this.state.size.height>=0&&n.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${n.x}px ${n.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:i,mouseover:this===t}),n):null}update(i){if(super.update(i),!ee.isExtendedPosition(this.config.position))throw new ie(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(t){throw new ie(`invalid marker ${this.id} position`,t)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||zo:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?Ue.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const i=this.domElement,e=!this.state.visible||!this.state.size;if(e&&i.classList.add("psv-marker--transparent"),this.isSvg()){const t=i.firstElementChild.getBoundingClientRect();this.state.size={width:t.width,height:t.height}}else this.state.size={width:i.offsetWidth,height:i.offsetHeight};e&&i.classList.remove("psv-marker--transparent"),this.isSvg()&&(i.style.width=this.state.size.width+"px",i.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:i,viewerPosition:e,mouseover:t}){t!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let n=1;if(typeof this.config.scale=="function")n=this.config.scale(i,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;n*=s+(r-s)*di.EASINGS.inQuad(i/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,a=Ue.degToRad(this.viewer.state.hFov)/2,o=Math.abs(ee.getShortestArc(this.state.position.yaw,e.yaw));n*=r+(s-r)*di.EASINGS.outQuad(Math.max(0,(a-o)/a))}}t&&this.config.hoverScale&&(n*=this.config.hoverScale.amount),this.domElement.style.scale=`${n}`}},fx=`// https://www.8thwall.com/playground/chromakey-threejs

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
`,px=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,mx=class extends Pi{get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}set alpha(i){this.uniforms.alpha.value=i}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(i){this.uniforms.keying.value=i?.enabled===!0,i?.enabled&&(typeof i.color=="object"&&"r"in i.color?this.uniforms.color.value.set(i.color.r/255,i.color.g/255,i.color.b/255):this.uniforms.color.value.set(i.color??65280),this.uniforms.similarity.value=i.similarity??.2,this.uniforms.smoothness.value=i.smoothness??.2)}constructor(i){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:i?.map},repeat:{value:new qe(1,1)},offset:{value:new qe(0,0)},alpha:{value:i?.alpha??1},keying:{value:!1},color:{value:new Ze(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:px,fragmentShader:fx}),this.chromaKey=i?.chromaKey}};function gx({src:i,withCredentials:e,muted:t,autoplay:n}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=n,s.muted=t,s.preload="metadata",i instanceof MediaStream?s.srcObject=i:s.src=i,s}function vx(i,e,t){const[n,s]=i,[r,a]=e,o=ee.greatArcDistance(i,e),l=Math.sin((1-t)*o)/Math.sin(o),h=Math.sin(t*o)/Math.sin(o),d=l*Math.cos(s)*Math.cos(n)+h*Math.cos(a)*Math.cos(r),f=l*Math.cos(s)*Math.sin(n)+h*Math.cos(a)*Math.sin(r),p=l*Math.sin(s)+h*Math.sin(a);return[Math.atan2(f,d),Math.atan2(p,Math.sqrt(d*d+f*f))]}function _x(i){const e=[i[0]];let t=0;for(let n=1;n<i.length;n++){const s=i[n-1][0]-i[n][0];s>Math.PI?t+=1:s<-Math.PI&&(t-=1),e.push([i[n][0]+t*2*Math.PI,i[n][1]])}return e}function Vf(i){return i.reduce((e,t)=>e.add(t),new I).normalize()}function yx(i){const e=_x(i);let t=0;const n=[];for(let r=0;r<e.length-1;r++){const a=ee.greatArcDistance(e[r],e[r+1])*di.SPHERE_RADIUS;n.push(a),t+=a}let s=0;for(let r=0;r<e.length-1;r++){if(s+n[r]>t/2){const a=(t/2-s)/n[r];return vx(e[r],e[r+1],a)}s+=n[r]}return e[Math.round(e.length/2)]}var vr=new I,Zc=new I,Ba=new I,Kc=new I,Jc=new I,Qc=new I;function xx(i,e,t){vr.copy(t).normalize(),Zc.crossVectors(i,e).normalize(),Ba.crossVectors(Zc,i).normalize(),Kc.copy(i).multiplyScalar(-vr.dot(Ba)),Jc.copy(Ba).multiplyScalar(vr.dot(i));const n=new I().addVectors(Kc,Jc).normalize();return Qc.crossVectors(n,vr),n.applyAxisAngle(Qc,.01).multiplyScalar(di.SPHERE_RADIUS)}var wx=class extends Hf{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(i,e,t){super(i,e,t)}is3d(){return!0}createElement(){const i=new mx({alpha:0}),e=new Is(1,1),t=new kt(e,i);t.userData={[rt]:this},Object.defineProperty(t,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(n){this.userData[rt].config.visible=n}}),this.element=new Hi().add(t),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[rt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(i){super.update(i);const e=this.threeMesh,t=e.parent,n=e.material;if(ee.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new ie(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new ie(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,t.position),t.lookAt(0,t.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const a=new I;return a.fromBufferAttribute(s,r),e.localToWorld(a)})}else{if(this.config.position?.length!==4)throw new ie(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(l=>this.viewer.dataHelper.cleanPosition(l))}catch(l){throw new ie(`invalid marker ${this.id} position`,l)}const r=s.map(l=>this.viewer.dataHelper.sphericalCoordsToVector3(l)),a=Vf(r);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(a),this.state.positions3D=r;const o=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((l,h)=>{o.setX(h,l.x),o.setY(h,l.y),o.setZ(h,l.z)}),o.needsUpdate=!0,this.__setTextureWrap(n)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){n.map?.dispose();const s=gx({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new Dm(s);n.map=r,n.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(n.alpha=this.config.opacity,ee.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(n)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else n.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){n.map?.dispose();const s=new Et;n.map=s,n.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(ee.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:r.width,height:r.height},this.__setTextureWrap(n)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,n.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else n.alpha=this.config.opacity;break}n.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(i){const e=i.userData[rt];if(!e||!e.height||!e.width){i.repeat.set(1,1),i.offset.set(0,0);return}const t=this.config.position.map(f=>this.viewer.dataHelper.cleanPosition(f)),n=ee.greatArcDistance([t[0].yaw,t[0].pitch],[t[1].yaw,t[1].pitch]),s=ee.greatArcDistance([t[3].yaw,t[3].pitch],[t[2].yaw,t[2].pitch]),r=ee.greatArcDistance([t[1].yaw,t[1].pitch],[t[2].yaw,t[2].pitch]),a=ee.greatArcDistance([t[0].yaw,t[0].pitch],[t[3].yaw,t[3].pitch]),o=(n+s)/(r+a),l=e.width/e.height;let h=0,d=0;o<l?h=l-o:d=1/l-1/o,i.repeat.set(1-h,1-d),i.offset.set(h/2,d/2)}},Ex=class extends ml{constructor(i,e,t){super(i,e,t),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new cx(this.element),this.object.userData={[rt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(i){this.userData[rt].config.visible=i}}),this.afterCreateElement()}destroy(){delete this.object.userData[rt],delete this.object,super.destroy()}render({viewerPosition:i,zoomLevel:e}){const t=this.domElement;if(this.state.size={width:t.offsetWidth,height:t.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:i,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(i){if(super.update(i),!ee.isExtendedPosition(this.config.position))throw new ie(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new ie(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,t=this.domElement;t.classList.add("psv-marker--css3d"),t.childNodes.forEach(n=>n.remove()),t.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},Mx=class extends Vr{constructor(i,e,t){super(i,e,t)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(i){const e=super.render(i);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:i.viewerPosition,zoomLevel:i.zoomLevel,viewerSize:this.viewer.state.size}),e}update(i){super.update(i);const e=this.domElement;if(this.config.image&&!this.config.size)throw new ie(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(t=>t.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},Sx=class extends ml{constructor(i,e,t){super(i,e,t)}createElement(){this.element=document.createElementNS(Hr,"path"),this.element[rt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const i=this.__getAllPolyPositions();if(i[0].length>(this.isPolygon?2:1)){const t=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),n=i.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(a=>`${a.x-t.x},${a.y-t.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",n),this.domElement.setAttributeNS(null,"transform",`translate(${t.x} ${t.y})`),t}else return null}update(i){super.update(i);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([t,n])=>{e.setAttributeNS(null,ee.dasherize(t),n)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let t=this.config[this.type];if(!Array.isArray(t[0])&&typeof t[0]!="object")for(let n=0;n<t.length;n++)t.splice(n,2,[t[n],t[n+1]]);if(!Array.isArray(t[0][0])&&typeof t[0][0]!="object"&&(t=[t]),this.isPolyline&&t.length>1)throw new ie("polylines cannot have holes");this.isPixels?this.definition=t.map(n=>n.map(s=>{let r;return ee.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:s[0],textureY:s[1]}),[r.yaw,r.pitch]})):this.definition=t.map(n=>n.map(s=>{let r;return ee.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.cleanPosition({yaw:s[0],pitch:s[1]}),[r.yaw,r.pitch]}))}catch(t){throw new ie(`invalid marker ${this.id} position`,t)}if(this.positions3D=this.coords.map(t=>t.map(n=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:n[0],pitch:n[1]}))),this.isPolygon){const t=Vf(this.positions3D[0]);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(t)}else{const t=yx(this.coords[0]);this.state.position={yaw:t[0],pitch:t[1]}}this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(i=>this.__getPolyPositions(i))}__getPolyPositions(i){const e=i.length,t=i.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),n=[];return t.forEach((s,r)=>{s.visible||[r===0?t[e-1]:t[r-1],r===e-1?t[0]:t[r+1]].forEach(o=>{o.visible&&n.push({visible:o.vector,invisible:s.vector,index:r})})}),n.reverse().forEach(s=>{t.splice(s.index,0,{vector:xx(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),t.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},bx=class extends Vr{get svgElement(){return this.domElement.firstElementChild}constructor(i,e,t){super(i,e,t)}isSvg(){return!0}createElement(){const i=this.type==="square"?"rect":this.type,e=document.createElementNS(Hr,i);this.element=document.createElementNS(Hr,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(i){super.update(i);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([t,n])=>{e.setAttributeNS(null,t,n)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([t,n])=>{e.setAttributeNS(null,ee.dasherize(t),n)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},Tx=ee.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(i){return i?(i===!0&&(i=zo),typeof i=="number"&&(i={amount:i}),{...zo,...i}):null}});function Ax(i){switch(Ho(i,!1)){case"image":case"html":case"element":return Mx;case"imageLayer":case"videoLayer":return wx;case"elementLayer":return Ex;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return Sx;case"square":case"rect":case"circle":case"ellipse":case"path":return bx;default:throw new ie("invalid marker type")}}var zs=class Gf extends ea{constructor(e,t){super(e,t),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.svgContainer=document.createElementNS(Hr,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new ux(e),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}static withConfig(e){return[Gf,e]}init(){super.init(),ee.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(ne.ClickEvent.type,this),this.viewer.addEventListener(ne.DoubleClickEvent.type,this),this.viewer.addEventListener(ne.RenderEvent.type,this),this.viewer.addEventListener(ne.ConfigChangedEvent.type,this),this.viewer.addEventListener(ne.ObjectEnterEvent.type,this),this.viewer.addEventListener(ne.ObjectHoverEvent.type,this),this.viewer.addEventListener(ne.ObjectLeaveEvent.type,this),this.viewer.addEventListener(ne.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(rt),this.viewer.removeEventListener(ne.ClickEvent.type,this),this.viewer.removeEventListener(ne.DoubleClickEvent.type,this),this.viewer.removeEventListener(ne.RenderEvent.type,this),this.viewer.removeEventListener(ne.ObjectEnterEvent.type,this),this.viewer.removeEventListener(ne.ObjectHoverEvent.type,this),this.viewer.removeEventListener(ne.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(ne.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(e){switch(e.type){case ne.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case ne.RenderEvent.type:this.renderMarkers();break;case ne.ClickEvent.type:this.__onClick(e,!1);break;case ne.DoubleClickEvent.type:this.__onClick(e,!0);break;case ne.ObjectEnterEvent.type:case ne.ObjectLeaveEvent.type:case ne.ObjectHoverEvent.type:if(e.userDataKey===rt){const t=e.originalEvent,n=e.object.userData[rt];switch(e.type){case ne.ObjectEnterEvent.type:n.config.style?.cursor?this.viewer.setCursor(n.config.style.cursor):(n.config.tooltip||n.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(t,n);break;case ne.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(n);break;case ne.ObjectHoverEvent.type:this.__onHoverMarker(t,n);break}}break;case"mouseenter":{const t=this.__getTargetMarker(ee.getEventTarget(e));this.__onEnterMarker(e,t);break}case"mouseleave":{const t=this.__getTargetMarker(ee.getEventTarget(e));this.__onLeaveMarker(t);break}case"mousemove":{const t=this.__getTargetMarker(ee.getEventTarget(e),!0);this.__onHoverMarker(e,t);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(e=>{e.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new Es)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(e=>{e.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new ws)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!0,e.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!1,e.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(e,t=!0){if(this.markers[e.id])throw new ie(`marker "${e.id}" already exists`);const n=new(Ax(e))(this.viewer,this,e);n.isPoly()?this.svgContainer.appendChild(n.domElement):n.isCss3d()?this.css3DContainer.addObject(n):n.is3d()?this.viewer.renderer.addObject(n.threeElement):this.container.appendChild(n.domElement),this.markers[n.id]=n,this.state.showAllTooltips&&(n.state.staticTooltip=!0),t&&this.__afterChangeMarkers()}getMarker(e){const t=typeof e=="object"?e.id:e;if(!this.markers[t])throw new ie(`cannot find marker "${t}"`);return this.markers[t]}getCurrentMarker(){return this.state.currentMarker}updateMarker(e,t=!0){const n=this.getMarker(e.id);n.update(e),t&&(this.__afterChangeMarkers(),(n===this.state.hoveringMarker&&n.config.tooltip?.trigger==="hover"||n.state.staticTooltip)&&n.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(e,t=!0){const n=this.getMarker(e);n.isPoly()?this.svgContainer.removeChild(n.domElement):n.isCss3d()?this.css3DContainer.removeObject(n):n.is3d()?this.viewer.renderer.removeObject(n.threeElement):this.container.removeChild(n.domElement),this.state.hoveringMarker===n&&(this.state.hoveringMarker=null),this.state.currentMarker===n&&(this.state.currentMarker=null),n.destroy(),delete this.markers[n.id],t&&this.__afterChangeMarkers()}removeMarkers(e,t=!0){e.forEach(n=>this.removeMarker(n,!1)),t&&this.__afterChangeMarkers()}setMarkers(e,t=!0){this.clearMarkers(!1),e?.forEach(n=>{this.addMarker(n,!1)}),t&&this.__afterChangeMarkers()}clearMarkers(e=!0){Object.keys(this.markers).forEach(t=>{this.removeMarker(t,!1)}),e&&this.__afterChangeMarkers()}gotoMarker(e,t=this.config.gotoMarkerSpeed){const n=this.getMarker(e);return t?this.viewer.animate({...n.state.position,zoom:n.config.zoomLvl,speed:t}).then(()=>{this.dispatchEvent(new Bo(n))}):(this.viewer.rotate(n.state.position),ee.isNil(n.config.zoomLvl)||this.viewer.zoom(n.config.zoomLvl),this.dispatchEvent(new Bo(n)),Promise.resolve())}hideMarker(e){this.toggleMarker(e,!1)}showMarker(e){this.toggleMarker(e,!0)}showMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!0,t.showTooltip()}hideMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!1,t.hideTooltip()}toggleMarker(e,t){const n=this.getMarker(e);n.config.visible=ee.isNil(t)?!n.config.visible:t,this.renderMarkers()}showMarkerPanel(e){const t=this.getMarker(e);t.config.content?this.viewer.panel.show({id:ss,content:t.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(ss)}toggleMarkersList(){this.viewer.panel.isVisible(Un)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let e=[];Object.values(this.markers).forEach(n=>{n.config.visible&&!n.config.hideList&&e.push(n)});const t=new Bf(e);this.dispatchEvent(t),e=t.markers,this.viewer.panel.show({id:Un,content:ox(e,this.viewer.config.lang[Rs.id]),noMargin:!0,clickHandler:n=>{const s=ee.getClosest(n,".psv-panel-menu-item"),r=s?s.dataset[rt]:void 0;if(r){const a=this.getMarker(r);this.dispatchEvent(new Tf(a)),this.gotoMarker(a.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(Un)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const e=this.viewer.getZoomLevel(),t=this.viewer.getPosition(),n=this.state.hoveringMarker;Object.values(this.markers).forEach(s=>{let r=s.config.visible,a=!1,o=null;r&&(o=s.render({viewerPosition:t,zoomLevel:e,hoveringMarker:n}),r=!!o),a=s.state.visible!==r,s.state.visible=r,s.state.position2D=o,s.domElement&&ee.toggleClass(s.domElement,"psv-marker--visible",r),r?s.state.staticTooltip?s.showTooltip():s!==this.state.hoveringMarker&&s.hideTooltip():s.hideTooltip(),a&&(this.dispatchEvent(new uf(s,r)),(s.is3d()||s.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(e,t=!1){if(e instanceof Node){const n=t?ee.getClosest(e,".psv-marker"):e;return n?n[rt]:void 0}else return Array.isArray(e)?e.map(n=>n.userData[rt]).filter(n=>!!n).sort((n,s)=>s.config.zIndex-n.config.zIndex)[0]:null}__onEnterMarker(e,t){t&&(this.state.hoveringMarker=t,this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,this.dispatchEvent(new xf(t)),t instanceof Vr&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onLeaveMarker(e){e&&(this.dispatchEvent(new vf(e)),e instanceof Vr&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"?e.hideTooltip():e.state.staticTooltip&&e.showTooltip())}__onHoverMarker(e,t){t&&(this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,(t.isPoly()||t.is3d()||t.isCss3d())&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onClick(e,t){const n=this.__getTargetMarker(e.data.objects),r=this.__getTargetMarker(e.data.target,!0)||n;this.state.currentMarker&&this.state.currentMarker!==r&&(this.dispatchEvent(new Rf(this.state.currentMarker)),this.viewer.panel.hide(ss),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),r&&(this.state.currentMarker=r,this.dispatchEvent(new Mf(r,t,e.data.rightclick)),this.config.clickEventOnMarker?e.data.marker=r:e.stopImmediatePropagation(),this.markers[r.id]&&!e.data.rightclick&&(r.config.tooltip?.trigger==="click"?r.tooltip?this.hideMarkerTooltip(r.id):this.showMarkerTooltip(r.id):this.showMarkerPanel(r.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new kf(this.getMarkers()))}__refreshUi(){const e=Object.values(this.markers).filter(t=>!t.config.hideList).length;e===0?(this.viewer.panel.hide(ss),this.viewer.panel.hide(Un)):this.viewer.panel.isVisible(Un)?this.showMarkersList():this.viewer.panel.isVisible(ss)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(Rs.id,!1)?.toggle(e>0),this.viewer.navbar.getButton(sa.id,!1)?.toggle(e>0)}__checkObjectsObserver(){Object.values(this.markers).some(t=>t.is3d())?this.viewer.observeObjects(rt):this.viewer.unobserveObjects(rt)}};zs.id="markers";zs.VERSION="5.13.4";zs.configParser=Tx;zs.readonlyOptions=["markers"];var Cx=zs;mi.lang[Rs.id]="Markers";mi.lang[sa.id]="Markers list";ta(Rs,"caption:left");ta(sa,"caption:left");const Rx=[{id:"dalgard1",name:"Dalgården (bild 1)",panoramaFile:"./nodes/dalgard1/IMG_1310.JPG",markers:[{id:"blodplommon_1",position:{yaw:2.2606367262225144,pitch:.02796695614841971}},{id:"koreansk-lonn_1",position:{yaw:3.0845216494431256,pitch:-.06884369714594207}},{id:"katsura_1",position:{yaw:3.5079790200693397,pitch:-.008543026423233343}},{id:"ginnalalonn_1",position:{yaw:1.8991460569930443,pitch:.018134753800143292}},{id:"hastkastanj_1",position:{yaw:2.15566433662048,pitch:.05322331686262727}},{id:"skogslonn_1",position:{yaw:2.447472362052443,pitch:.1064670383038433}},{id:"finnslide_1",position:{yaw:5.880007113410169,pitch:.21204335399969176}},{id:"rhododendron_1",position:{yaw:5.235695957783912,pitch:.014347237254800586}},{id:"hangpil_1",position:{yaw:4.642980490756283,pitch:.22094118352887326}},{id:"rhododendron_2",position:{yaw:4.300109989955789,pitch:.013956135688609098}},{id:"nanting_4",position:{yaw:3.823858756143529,pitch:-.11995270810747226}},{id:"smallspirea_1",position:{yaw:1.1976125523126342,pitch:-.15558758122436167}},{id:"ligularia-dentata_1",position:{yaw:1.3939529163388906,pitch:-.06672331783159136}},{id:"himalayabjork_1",position:{yaw:1.6380824875708022,pitch:.07006447975195096}},{id:"navehagg_1",position:{yaw:1.4452206665981244,pitch:.018906770231122753}},{id:"skoldbracka_1",position:{yaw:1.9566016424367625,pitch:-.3239004580094098}}],links:[{nodeId:"dalgard2",position:{yaw:3.377563376359585,pitch:-.14441858600296031}},{nodeId:"dalgard19",position:{yaw:4.911215906485333,pitch:-.06858083649022362}},{nodeId:"dalgard22",position:{yaw:3.733099874006463,pitch:-.27108324624332814}}],heading:3.3775891123402326},{id:"dalgard2",name:"Dalgården (bild 2)",panoramaFile:"./nodes/dalgard2/IMG_1311.JPG",markers:[{id:"skogslonn_1",position:{yaw:3.7683564286140885,pitch:.45870009773867704}},{id:"koreansk-lonn_1",position:{yaw:3.66681597305324,pitch:-.2118147201320617}},{id:"katsura_1",position:{yaw:5.588986408750598,pitch:.012343728824071091}},{id:"japansk-appelblomma_1",position:{yaw:6.258121376893599,pitch:-.0284931100602066}},{id:"gulbladig-jasmin_1",position:{yaw:.22274342599051597,pitch:.016402739859821883}},{id:"hosta_7",position:{yaw:.593688884313262,pitch:-.07771320742388886}},{id:"rhododendron_3",position:{yaw:.7759052091704722,pitch:-.14770538763314134}},{id:"nanting_4",position:{yaw:.9148638797785358,pitch:-.21965281065502795}},{id:"hangpil_1",position:{yaw:.7278465117918673,pitch:.30999164586361916}},{id:"finnslide_1",position:{yaw:1.7251000666448952,pitch:.12346006891216432}},{id:"rhododendron_2",position:{yaw:1.1871006530894974,pitch:.016178853796467555}},{id:"smallspirea_1",position:{yaw:2.327867257796728,pitch:-.00969591742346609}},{id:"ligularia-dentata_1",position:{yaw:2.625199845547467,pitch:-.0006027623119289026}},{id:"himalayabjork_1",position:{yaw:2.995858132430671,pitch:.09453911914349722}},{id:"navehagg_1",position:{yaw:2.851837535476185,pitch:.07124669726785693}},{id:"navehagg_2",position:{yaw:2.9328192696365045,pitch:.07507132473667188}},{id:"skoldbracka_1",position:{yaw:2.4143433662854754,pitch:-.053773149216421956}}],links:[{nodeId:"dalgard1",position:{yaw:1.9809906063918654,pitch:-.12030962172424053}},{nodeId:"dalgard3",position:{yaw:5.999391442544193,pitch:-.26915147280088436}},{nodeId:"dalgard22",position:{yaw:1.209437247290838,pitch:-.28713701023161176}}],heading:5.1553739803636205},{id:"dalgard3",name:"Dalgården (bild 3)",panoramaFile:"./nodes/dalgard3/IMG_1308.JPG",markers:[{id:"ginnalalonn_1",position:{yaw:.961959230849157,pitch:.06390089798990539}},{id:"katsura_1",position:{yaw:1.398434383240532,pitch:.010142729467102377}},{id:"koreansk-lonn_1",position:{yaw:.6779910296366903,pitch:.04554673627393724}},{id:"japansk-appelblomma_1",position:{yaw:3.9410871831417253,pitch:-.0034771254351497714}},{id:"hosta_6",position:{yaw:4.171919987651109,pitch:-.007282775095253543}},{id:"gulbladig-jasmin_1",position:{yaw:4.261451479456106,pitch:.04113267464392134}},{id:"hangpil_1",position:{yaw:4.750814052534109,pitch:.29899452584591235}},{id:"kloverlonn_1",position:{yaw:4.87870674704915,pitch:.03181315698563214}},{id:"hosta_7",position:{yaw:4.944848166604029,pitch:-.05088255765901395}},{id:"hosta_10",position:{yaw:5.080415747259029,pitch:-.07652332061237566}},{id:"kopparbjork_1",position:{yaw:5.159692315350497,pitch:.04929749038369802}},{id:"rhododendron_3",position:{yaw:5.3777898626901095,pitch:-.07707425876537943}},{id:"rhododendron_2",position:{yaw:5.596426487467607,pitch:.08094420977478323}},{id:"finnslide_1",position:{yaw:5.7923037506559725,pitch:.1715836159796693}},{id:"smallspirea_1",position:{yaw:.010705444758841602,pitch:.0484715966073781}},{id:"ligularia-dentata_1",position:{yaw:.21755056772412473,pitch:.04090039960158842}},{id:"himalayabjork_1",position:{yaw:.5072906663835006,pitch:.09553341082546463}},{id:"navehagg_1",position:{yaw:.3928243086191007,pitch:.1129369215559275}},{id:"navehagg_2",position:{yaw:.46038416058408965,pitch:.10519329516523679}},{id:"skoldbracka_1",position:{yaw:.08175689213631632,pitch:.024623901985137756}}],links:[{nodeId:"dalgard1",position:{yaw:6.102642456873019,pitch:.016635844419101268}},{nodeId:"dalgard2",position:{yaw:.33390236210506474,pitch:-.20266077207521915}},{nodeId:"dalgard4",position:{yaw:4.1161479549896,pitch:-.11008610628244464}},{nodeId:"dalgard20",position:{yaw:4.776739924190238,pitch:.0031594746212282396}}],heading:2.969568331141952},{id:"dalgard4",name:"Dalgården (bild 4)",panoramaFile:"./nodes/dalgard4/IMG_1307.JPG",markers:[{id:"hangpil_1",position:{yaw:1.7805560886481784,pitch:.4048227846100485}},{id:"skoldbracka_1",position:{yaw:3.34620522967386,pitch:.013885979251284878}},{id:"himalayabjork_1",position:{yaw:3.536998423731333,pitch:.09515843768653931}},{id:"koreansk-lonn_1",position:{yaw:3.7604961034603863,pitch:.06320123968166658}},{id:"ginnalalonn_1",position:{yaw:3.8821854666947067,pitch:.10753953818190798}},{id:"katsura_1",position:{yaw:3.985675269518168,pitch:.08109523299218013}},{id:"hosta_1",position:{yaw:4.380983930754884,pitch:-.35520449552495026}},{id:"hosta_2",position:{yaw:4.8500601285791864,pitch:-.2859691225206389}},{id:"hosta_3",position:{yaw:2.8641019700057977,pitch:-.4859528969099969}},{id:"hosta_4",position:{yaw:2.2054240809107473,pitch:-.5837978738041791}},{id:"hosta_5",position:{yaw:1.6197461315859998,pitch:-.5452278673680138}},{id:"hosta_6",position:{yaw:.8704137309650279,pitch:-.28017250810742955}},{id:"hosta_9",position:{yaw:2.305380430811179,pitch:-.14595500334286293}},{id:"hosta_7",position:{yaw:2.76624047515526,pitch:-.16217617660920625}},{id:"japansk-appelblomma_1",position:{yaw:5.381357201697039,pitch:-.30991789188754826}},{id:"gulbladig-jasmin_1",position:{yaw:1.2453782921073109,pitch:-.07442082377510695}},{id:"azalea-northern-lights_1",position:{yaw:3.067558008158943,pitch:-.1566726137243546}},{id:"magnolia_1",position:{yaw:1.2020588064203923,pitch:.07658059009183882}},{id:"praktvide_1",position:{yaw:1.6004146751651809,pitch:.007275179374592881}},{id:"rodbladig-skogslonn_1",position:{yaw:1.489850641659059,pitch:.25312101309113233}},{id:"gyllenlonn_1",position:{yaw:2.219124068741136,pitch:.11473766360561055}},{id:"kranskornell_1",position:{yaw:2.123128532758937,pitch:-.018555206807589816}},{id:"koreansk-stevartia_1",position:{yaw:2.375921839763219,pitch:.14482619734610336}},{id:"kopparbjork_1",position:{yaw:2.6184055758120097,pitch:-.034802998783841854}},{id:"vingad-benved_1",position:{yaw:2.7587469293130606,pitch:.07390648515536458}}],links:[{nodeId:"dalgard3",position:{yaw:3.8921050576317495,pitch:-.11599675834795264}},{nodeId:"dalgard5",position:{yaw:.46631536569575116,pitch:-.15650474252735735}},{nodeId:"dalgard20",position:{yaw:1.9453906030385824,pitch:-.0754496136924101}}],heading:5.586846303733822},{id:"dalgard5",name:"Dalgården (bild 5)",panoramaFile:"./nodes/dalgard5/IMG_1313.JPG",markers:[{id:"solfjaderslonn_1",position:{yaw:4.911511857818416,pitch:-.4457597309752017}},{id:"hangpil_1",position:{yaw:2.5246499209260533,pitch:.28600729219760046}},{id:"magnolia_1",position:{yaw:2.5745006157202965,pitch:.027234682648244805}},{id:"ask_1",position:{yaw:.7239754443841756,pitch:.14298970282853007}},{id:"praktvide_1",position:{yaw:2.7167448678440733,pitch:-.04202988090706161}},{id:"gyllenlonn_1",position:{yaw:2.7273243805507295,pitch:.058560403868659794}},{id:"gulbladig-jasmin_1",position:{yaw:3.233015446176479,pitch:-.042245247241091466}}],links:[{nodeId:"dalgard4",position:{yaw:3.4595658643528346,pitch:-.14731508855281716}},{nodeId:"dalgard6",position:{yaw:.6876928118355173,pitch:-.17074271445871503}},{nodeId:"dalgard7",position:{yaw:1.2743581457503645,pitch:-.14055031362258408}},{nodeId:"dalgard18",position:{yaw:2.654492463146046,pitch:-.013699985705297086}}],heading:5.725160153120154},{id:"dalgard6",name:"Dalgården (bild 6)",panoramaFile:"./nodes/dalgard6/IMG_1328.JPG",markers:[{id:"solfjaderslonn_1",position:{yaw:3.0256014529084543,pitch:-.134780223475512}},{id:"ask_1",position:{yaw:5.956957845675483,pitch:.4790622153107109}},{id:"rodbladig-skogslonn_1",position:{yaw:1.1468570962162792,pitch:.21314519860267045}},{id:"magnolia_1",position:{yaw:2.0324336759194637,pitch:-.04237757962418476}},{id:"gyllenlonn_1",position:{yaw:1.9044595007355518,pitch:.03586907819054619}}],links:[{nodeId:"dalgard5",position:{yaw:2.8484454432053417,pitch:-.3025999894070799}},{nodeId:"dalgard7",position:{yaw:1.2251918408825437,pitch:-.39815815339597904}},{nodeId:"dalgard8",position:{yaw:1.1906464269349784,pitch:-.0918768117573654}}],heading:4.68275101194163},{id:"dalgard7",name:"Dalgården (bild 7)",panoramaFile:"./nodes/dalgard7/IMG_1312.JPG",markers:[{id:"solfjaderslonn_1",position:{yaw:.7492412492620988,pitch:-.1273340531376983}},{id:"ask_1",position:{yaw:2.2659765735044655,pitch:.09387878386632531}},{id:"rodbladig-skogslonn_1",position:{yaw:4.74819936849612,pitch:.27209741494464024}},{id:"kranskornell_1",position:{yaw:5.784860642852104,pitch:-.04520723526817205}},{id:"magnolia_1",position:{yaw:5.950740082351949,pitch:-.012725497159008278}}],links:[{nodeId:"dalgard5",position:{yaw:.7028370607925101,pitch:-.21015673071105367}},{nodeId:"dalgard6",position:{yaw:1.7289721036104897,pitch:-.4668308106250547}},{nodeId:"dalgard8",position:{yaw:4.786337865181352,pitch:-.19483039032038119}},{nodeId:"dalgard8",position:{yaw:4.854573930810898,pitch:-.05856187760065268}}],heading:1.8923994212038162},{id:"dalgard8",name:"Dalgården (bild 8)",panoramaFile:"./nodes/dalgard8/IMG_1329.JPG",markers:[{id:"ask_1",position:{yaw:1.1857163783362206,pitch:.01622145833280642}},{id:"rodbladig-skogslonn_1",position:{yaw:4.03826240652837,pitch:.2901938350499922}},{id:"azalea-northern-lights_2",position:{yaw:4.518956120774658,pitch:.03459821032595345}},{id:"kinesisk-sequoia_1",position:{yaw:4.433260605151536,pitch:.15821638457617215},description:"Lätt det coolaste trädet här!"},{id:"katsura_2",position:{yaw:4.578054843341423,pitch:.1639660066520623}},{id:"nagon_hagg_1",position:{yaw:4.6043325217877005,pitch:-.023816276625323592}},{id:"nanting_1",position:{yaw:4.678658700752407,pitch:.03227892621766193}},{id:"rhododendron_4",position:{yaw:4.745095663038911,pitch:-.017823779432627692}},{id:"schuberthagg_1",position:{yaw:4.760167570214787,pitch:.11726149035479994}},{id:"gulbladig-jasmin_2",position:{yaw:5.069385250900074,pitch:-.07807373403069762}},{id:"hangpil_1",position:{yaw:5.41393775953141,pitch:.6025894737323192}}],links:[{nodeId:"dalgard7",position:{yaw:.9367373420498771,pitch:-.22405091843328728}},{nodeId:"dalgard9",position:{yaw:4.4033121282399375,pitch:-.22967867246853468}},{nodeId:"dalgard10",position:{yaw:4.324368756569757,pitch:.06915943542158765}},{nodeId:"dalgard17",position:{yaw:4.946236932513398,pitch:-.08520867354479145}}],heading:1.0409990620045637},{id:"dalgard9",name:"Dalgården (bild 9)",panoramaFile:"./nodes/dalgard9/IMG_1314.JPG",markers:[{id:"ask_1",position:{yaw:2.6011277449528087,pitch:-.005089139613434265}},{id:"rodbladig-skogslonn_1",position:{yaw:5.015459569207428,pitch:.49792190023615257}},{id:"azalea-northern-lights_2",position:{yaw:6.1843933058713585,pitch:-.1041318532942741}},{id:"nanting_1",position:{yaw:.2877498196184549,pitch:-.17846400712550636}},{id:"hangpil_1",position:{yaw:.9974733416551935,pitch:.5580176985575325}},{id:"gulbladig-jasmin_2",position:{yaw:1.1105056962640139,pitch:-.30763417785322944}},{id:"nagon-hagg_1",position:{yaw:.3039828357984298,pitch:-.40259781652502014}},{id:"schuberthagg_1",position:{yaw:.1693899789855012,pitch:.03786489070118959}},{id:"kinesisk-sequoia_1",position:{yaw:6.1284316442530535,pitch:.16044314914351832}},{id:"katsura_2",position:{yaw:5.876919823095532,pitch:.1356732926559594}}],links:[{nodeId:"dalgard7",position:{yaw:2.4612368517186507,pitch:-.15810235263040462}},{nodeId:"dalgard8",position:{yaw:2.614349453743426,pitch:-.3686532812627539}},{nodeId:"dalgard10",position:{yaw:5.659794125507752,pitch:-.03208712239204381}},{nodeId:"dalgard17",position:{yaw:.6113678298995248,pitch:-.27624297790466934}}],heading:2.5019654985286452},{id:"dalgard10",name:"Dalgården (bild 10)",panoramaFile:"./nodes/dalgard10/IMG_1315.JPG",markers:[{id:"hangpil_1",position:{yaw:.286029415236583,pitch:.4229959721670977}},{id:"rodbladig-skogslonn_1",position:{yaw:1.2935417986068931,pitch:.40311179911411577}},{id:"azalea-northern-lights_2",position:{yaw:.641792412761041,pitch:-.12633031064123657}},{id:"katsura_2",position:{yaw:5.1120944881926,pitch:-.01150174704185968}},{id:"ask_2",position:{yaw:4.119727151761182,pitch:.0032841385308852757}},{id:"lind_1",position:{yaw:4.359202397449047,pitch:.16982702696783436}},{id:"schuberthagg_1",position:{yaw:6.1928551111414025,pitch:-.03347786463073543}},{id:"kinesisk-sequoia_1",position:{yaw:.08780336896942836,pitch:-.04092420174788436}}],links:[{nodeId:"dalgard8",position:{yaw:.9521081282885019,pitch:-.19478364238861934}},{nodeId:"dalgard9",position:{yaw:.9033433190580583,pitch:-.2849607682841715}},{nodeId:"dalgard11",position:{yaw:4.47960589961757,pitch:-.036391493311797696}},{nodeId:"dalgard16",position:{yaw:6.10105964446265,pitch:-.5095319285423436}}],heading:.8935714529222901},{id:"dalgard11",name:"Dalgården (bild 11)",panoramaFile:"./nodes/dalgard11/IMG_1316.JPG",markers:[{id:"ask_3",position:{yaw:3.6786724284477104,pitch:-.06158244549984193}},{id:"sibiriskt-korktrad_1",position:{yaw:2.949000850528627,pitch:.124784373766754}},{id:"ask_2",position:{yaw:5.807006999055819,pitch:-.07964879414202207}},{id:"lind_1",position:{yaw:.9416097888003607,pitch:.30391756936021164}},{id:"rodbladig-skogslonn_1",position:{yaw:5.326723662877858,pitch:.15784548261793852}},{id:"rodbladig-skogslonn_2",position:{yaw:4.589575590536954,pitch:-.08564752872808444}},{id:"kinesisk-sequoia_1",position:{yaw:5.033368888947075,pitch:-.08872135603122187}},{id:"katsura_2",position:{yaw:5.230505239597871,pitch:-.03364113349659981}},{id:"hangpil_1",position:{yaw:4.670199118749399,pitch:.2426670447732293}},{id:"vitoxel_1",position:{yaw:3.2829040218773105,pitch:.033553116482697876}},{id:"rhododendron_1",position:{yaw:3.8936208508357604,pitch:-.0746157638357323}}],links:[{nodeId:"dalgard10",position:{yaw:5.378246539655657,pitch:-.23208824150219676}},{nodeId:"dalgard12",position:{yaw:3.9332950087152243,pitch:-.5775068676911823}}],heading:4.917524762913157},{id:"dalgard12",name:"Dalgården (bild 12)",panoramaFile:"./nodes/dalgard12/IMG_1317.JPG",markers:[{id:"nanting_3",position:{yaw:.6556226584632421,pitch:-.5379936270289594}},{id:"lind_1",position:{yaw:1.7058759332602196,pitch:.11437341780406453}},{id:"sibiriskt-korktrad_1",position:{yaw:2.7425259123167036,pitch:.22083952878825963}},{id:"vitoxel_1",position:{yaw:3.941686396251026,pitch:.05029393911975522}},{id:"finnslide_1",position:{yaw:4.451093926557771,pitch:-.07525010676365307}},{id:"vipphortensia_1",position:{yaw:5.115581987336893,pitch:-.12170205974226021}},{id:"hangpil_1",position:{yaw:5.755471034109159,pitch:.2515402458540923}},{id:"rodbladig-skogslonn_1",position:{yaw:.2219673190551488,pitch:.11790339375909033}},{id:"rodbladig-skogslonn_2",position:{yaw:6.277201964963784,pitch:-.0353187300341422}},{id:"katsura_2",position:{yaw:.4124119876592998,pitch:-.017835003656210928}},{id:"ask_3",position:{yaw:4.358226481415589,pitch:.006446164948796799}},{id:"rhododendron_1",position:{yaw:4.791471790218692,pitch:-.09418604587593914}}],links:[{nodeId:"dalgard11",position:{yaw:1.6412062263546312,pitch:-.3131322228381572}},{nodeId:"dalgard13",position:{yaw:4.611749469432073,pitch:-.398804193611924}}],heading:5.777985466454688},{id:"dalgard13",name:"Dalgården (bild 13)",panoramaFile:"./nodes/dalgard13/IMG_1318.JPG",markers:[{id:"lind_1",position:{yaw:2.4333071720138464,pitch:.15457002691142074}},{id:"sibiriskt-korktrad_1",position:{yaw:2.8913597632116215,pitch:.18406157928573275}},{id:"vitoxel_1",position:{yaw:4.4830705406831255,pitch:.11707542528630778}},{id:"finnslide_1",position:{yaw:5.124757189591137,pitch:-.07288744687600857}},{id:"vipphortensia_1",position:{yaw:6.186137450934143,pitch:-.16650477096029426}},{id:"hangpil_1",position:{yaw:.589334001109134,pitch:.12402235726588852}},{id:"rodbladig-skogslonn_2",position:{yaw:1.5778767512620504,pitch:.04565278799983075}},{id:"morkbladig-flader_1",position:{yaw:6.0407989000203735,pitch:-.20470713889948566}},{id:"kameleontbuske_1",position:{yaw:.09444011381511548,pitch:-.14230469627374775}},{id:"gyllenlonn_1",position:{yaw:.24298789741539578,pitch:-.13939825284745355}},{id:"ask_3",position:{yaw:3.7844290102091795,pitch:.27102998653579546}},{id:"rhododendron_1",position:{yaw:5.6377142445553785,pitch:-.10649339937069045}}],links:[{nodeId:"dalgard12",position:{yaw:2.3261857010692943,pitch:-.2293565507112043}},{nodeId:"dalgard14",position:{yaw:5.79890966834114,pitch:-.47667101144900514}}],heading:.3790896004387685},{id:"dalgard14",name:"Dalgården (bild 14)",panoramaFile:"./nodes/dalgard14/IMG_1319.JPG",markers:[{id:"sibiriskt-korktrad_1",position:{yaw:4.024295654116453,pitch:.16500346200056315}},{id:"vitoxel_1",position:{yaw:5.17732413230267,pitch:.1904336099181556}},{id:"finnslide_1",position:{yaw:5.862933391669909,pitch:.01482983706081598}},{id:"vipphortensia_1",position:{yaw:1.6641537880106747,pitch:-.11414918631754832}},{id:"morkbladig-flader_1",position:{yaw:1.2236884181783803,pitch:-.24719434171560883}},{id:"haxal_1",position:{yaw:2.079195352802329,pitch:-.2712179673273083}},{id:"hangpil_1",position:{yaw:2.1059686672613025,pitch:.24926683640384284}},{id:"rodbladig-skogslonn_1",position:{yaw:2.7151931136897187,pitch:.14675943916462608}},{id:"rhododendron_1",position:{yaw:.49221017968089115,pitch:-.1627136614061946}},{id:"lind_1",position:{yaw:3.718376498118612,pitch:.1484084661757905}},{id:"rodbladig-skogslonn_2",position:{yaw:3.268826015867884,pitch:.12006780231173743}},{id:"ask_3",position:{yaw:4.1275826260001285,pitch:.14223460720046188}}],links:[{nodeId:"dalgard13",position:{yaw:4.020755883232665,pitch:-.19293492236703735}},{nodeId:"dalgard15",position:{yaw:2.2567492578613457,pitch:-.39154160571935925}},{nodeId:"dalgard19",position:{yaw:1.0463414084488398,pitch:-.42137897416217185}}],heading:1.5955122207909482},{id:"dalgard15",name:"Dalgården (bild 15)",panoramaFile:"./nodes/dalgard15/IMG_1320.JPG",markers:[{id:"rodbladig-skogslonn_1",position:{yaw:1.6890691127510458,pitch:.24614463772129214}},{id:"ask_3",position:{yaw:3.527114184342609,pitch:.2249643425992427}},{id:"vitoxel_1",position:{yaw:4.096376739392659,pitch:.15937038044147722}},{id:"finnslide_1",position:{yaw:4.494860100108327,pitch:.06122682031511162}},{id:"vipphortensia_1",position:{yaw:5.063574730618149,pitch:-.16432551208962165}},{id:"kameleontbuske_1",position:{yaw:5.889633986881317,pitch:-.056802982556638515}},{id:"haxal_1",position:{yaw:.16293436473913445,pitch:-.6743563649259834}},{id:"gyllenlonn_1",position:{yaw:.13791193889414285,pitch:-.12628505217486885}},{id:"magnolia_1",position:{yaw:.6300831025251777,pitch:-.06916516102617408}},{id:"praktvide_1",position:{yaw:.688053505803648,pitch:-.1364047966680333}},{id:"hangpil_1",position:{yaw:.8222578274209912,pitch:.3882986455445665}},{id:"rodbladig-skogslonn_2",position:{yaw:2.5734323644400323,pitch:.20745787333057142}},{id:"schuberthagg_1",position:{yaw:1.7940295251069296,pitch:.08723242541815736}}],links:[{nodeId:"dalgard14",position:{yaw:4.3505134458774295,pitch:-.28845597976368564}},{nodeId:"dalgard18",position:{yaw:.5685826089176976,pitch:-.3625248258939566}},{nodeId:"dalgard20",position:{yaw:.4613342410140493,pitch:-.2684284130174561}}],heading:.34397741141688487},{id:"dalgard16",name:"Dalgården (bild 16)",panoramaFile:"./nodes/dalgard16/IMG_1321.JPG",markers:[{id:"sibiriskt-korktrad_1",position:{yaw:3.615493366366205,pitch:.16867848936084795}},{id:"katsura_2",position:{yaw:2.6839796932730184,pitch:.12603415965746056}},{id:"kinesisk-sequoia_1",position:{yaw:.49024430755532883,pitch:-.0952001565549838}},{id:"rodbladig-skogslonn_1",position:{yaw:.9883783567056814,pitch:.4020168614466513}},{id:"rodbladig-skogslonn_2",position:{yaw:3.8237154459046243,pitch:.1410492020009455}},{id:"schuberthagg_1",position:{yaw:5.505978916919883,pitch:-.18940502607311993}},{id:"gulbladig-jasmin_2",position:{yaw:6.250390478843083,pitch:-.24602782715529314}},{id:"rhododendron_4",position:{yaw:.06123122634318212,pitch:-.33495186870533233}},{id:"finnslide_1",position:{yaw:4.495140810137837,pitch:.014949093207250689}},{id:"rhododendron_1",position:{yaw:4.7341242006577104,pitch:-.021336540012087953}},{id:"vipphortensia_1",position:{yaw:4.811082271774266,pitch:-.0471971512201994}},{id:"kameleontbuske_1",position:{yaw:4.952820922252693,pitch:-.05359610877400444}},{id:"gyllenlonn_1",position:{yaw:5.080892121930008,pitch:-.1111293038269796}},{id:"hangpil_1",position:{yaw:5.6870979161084625,pitch:.500028424609319}}],links:[{nodeId:"dalgard10",position:{yaw:2.1450369122527846,pitch:-.3302402445326571}},{nodeId:"dalgard17",position:{yaw:6.077661799107866,pitch:-.4058585802749375}}],heading:6.143937128521642},{id:"dalgard17",name:"Dalgården (bild 17)",panoramaFile:"./nodes/dalgard17/IMG_1322.JPG",markers:[{id:"ask_3",position:{yaw:4.8889715895685875,pitch:.17763804896012858}},{id:"hangpil_1",position:{yaw:.25813813888512144,pitch:.29872520490193266}},{id:"gulbladig-jasmin_2",position:{yaw:1.5236708254738045,pitch:-.4471416161193711}},{id:"nagon-hagg_1",position:{yaw:2.4948926596938295,pitch:-.2779019624203074}},{id:"azalea-northern-lights_2",position:{yaw:3.008344932325813,pitch:-.13416039329528595}},{id:"rodbladig-skogslonn_1",position:{yaw:2.856890424551518,pitch:.33489387883527955}},{id:"kinesisk-sequoia_1",position:{yaw:3.85007156489087,pitch:.13937374494316357}},{id:"rhododendron_4",position:{yaw:2.9605792670028355,pitch:-.5298053104543039}},{id:"nanting_1",position:{yaw:2.70913950479921,pitch:-.37447381669361435}},{id:"schuberthagg_1",position:{yaw:4.346714399135669,pitch:.1399295427268108}},{id:"rodgersia_1",position:{yaw:5.88297109696626,pitch:-.14464078225231547}},{id:"finnslide_1",position:{yaw:5.313743489519893,pitch:.06988188068319134}}],links:[{nodeId:"dalgard9",position:{yaw:2.276307084195678,pitch:-.301053586926576}},{nodeId:"dalgard16",position:{yaw:3.9636216793034427,pitch:-.10090856712713525}},{nodeId:"dalgard18",position:{yaw:5.9204524423406815,pitch:-.29901419345337144}},{nodeId:"dalgard20",position:{yaw:.1361622042415113,pitch:-.27790027018296315}}],heading:.9737829977308656},{id:"dalgard18",name:"Dalgården (bild 18)",panoramaFile:"./nodes/dalgard18/IMG_1323.JPG",markers:[{id:"ask_3",position:{yaw:4.386297299531754,pitch:.1841171081752222}},{id:"hangpil_1",position:{yaw:2.317468226988782,pitch:.4061015359402058}},{id:"gulbladig-jasmin_2",position:{yaw:2.710931275777582,pitch:-.09250965829771295}},{id:"rhododendron_4",position:{yaw:3.068356177234528,pitch:-.06240311137038267}},{id:"rodbladig-skogslonn_1",position:{yaw:3.045026177367187,pitch:.14769863375236159}},{id:"schuberthagg_1",position:{yaw:3.5371000835724447,pitch:.11765274646218017}},{id:"rodbladig-skogslonn_2",position:{yaw:4.0698121140955195,pitch:.16643415342110024}},{id:"koreansk-stevartia_1",position:{yaw:.020551727468698964,pitch:.14910982508254178}},{id:"rodgersia_1",position:{yaw:6.0275521122219144,pitch:-.28688989945107624}},{id:"skoldbracka_2",position:{yaw:.29263651404748625,pitch:-.33598189106062804}},{id:"kranskornell_1",position:{yaw:.8224686509919594,pitch:-.49317034557891826}},{id:"praktvide_1",position:{yaw:1.865724910563227,pitch:-.17728547073292167}},{id:"magnolia_1",position:{yaw:1.7209882979862434,pitch:-.08387628815099579}},{id:"gulbladig-jasmin_1",position:{yaw:1.1870754089647586,pitch:-.105723924730593}},{id:"haxal_1",position:{yaw:4.886173515680393,pitch:-.12022141544925556}},{id:"gyllenlonn_1",position:{yaw:5.247141867411419,pitch:.099201229313181}},{id:"rhododendron_1",position:{yaw:5.58416460198934,pitch:.002949885423621632}},{id:"vingad-benved_1",position:{yaw:5.822154865759569,pitch:.002669508347676439}},{id:"hosta_7",position:{yaw:.4676812040385155,pitch:-.23633650474877932}},{id:"hosta_8",position:{yaw:.5890666119951521,pitch:-.2796050835695709}},{id:"hosta_9",position:{yaw:.713091368421249,pitch:-.30293194006855084}},{id:"hosta_1",position:{yaw:.855771977439972,pitch:-.11610463707757089}},{id:"hosta_2",position:{yaw:.9250939197379029,pitch:-.09822974167566655}}],links:[{nodeId:"dalgard4",position:{yaw:.9921086825581384,pitch:-.16814090129412684}},{nodeId:"dalgard15",position:{yaw:4.659133295993029,pitch:-.27312447761373826}},{nodeId:"dalgard17",position:{yaw:3.036100130932943,pitch:-.18795165940190484}},{nodeId:"dalgard19",position:{yaw:5.7001402209795415,pitch:-.20004757740663215}},{nodeId:"dalgard20",position:{yaw:1.3023527062087845,pitch:-.5503475545504444}},{nodeId:"dalgard21",position:{yaw:.3341303150152568,pitch:-.26087618324110173}}],heading:1.4120979712343216},{id:"dalgard19",name:"Dalgården (bild 19)",panoramaFile:"./nodes/dalgard19/IMG_1324.JPG",markers:[{id:"ask_3",position:{yaw:3.4666834312337107,pitch:.22230846055278897}},{id:"vingad-benved_1",position:{yaw:.4448712107978633,pitch:-.06462678692547952}},{id:"rhododendron_1",position:{yaw:4.7467456988628935,pitch:-.027226817978770242}},{id:"gulbladig-jasmin_2",position:{yaw:2.065009590307153,pitch:.005728240252473208}},{id:"kameleontbuske_1",position:{yaw:2.321641986058262,pitch:.23200955766404707}},{id:"gyllenlonn_1",position:{yaw:2.1628034166567596,pitch:.07931235188237173}},{id:"vipphortensia_1",position:{yaw:2.715106301080543,pitch:.17955006371020987}},{id:"morkbladig-flader_1",position:{yaw:3.0135796965178465,pitch:-.05874364420494693}},{id:"hangpil_1",position:{yaw:1.8903363201772976,pitch:.350333564009935}},{id:"rodgersia_1",position:{yaw:1.5644737499618881,pitch:-.28898766619862926}},{id:"koreansk-stevartia_1",position:{yaw:1.4850438747166772,pitch:.1934451254446652}},{id:"himalayabjork_1",position:{yaw:5.39712744872486,pitch:.07045366449493362}},{id:"skoldbracka_1",position:{yaw:5.544348912808854,pitch:-.08634261232982965}},{id:"ginnalalonn_1",position:{yaw:5.608956395480317,pitch:.07324865297078631}},{id:"hastkastanj_1",position:{yaw:5.816337036130137,pitch:.09667435530764923}}],links:[{nodeId:"dalgard1",position:{yaw:5.531514216106869,pitch:-.15751238207593965}},{nodeId:"dalgard14",position:{yaw:3.5363312565649863,pitch:-.08707718233582629}},{nodeId:"dalgard18",position:{yaw:1.9359494763152978,pitch:-.1712410030852427}}],heading:.913741887142094},{id:"dalgard20",name:"Dalgården (bild 20)",panoramaFile:"./nodes/dalgard20/IMG_1325.JPG",markers:[{id:"ginnalalonn_1",position:{yaw:5.160492130244968,pitch:.05953533781768039}},{id:"hangpil_1",position:{yaw:2.416234415739438,pitch:.8350657668023627}},{id:"schuberthagg_1",position:{yaw:2.8242076934232734,pitch:.16535736754985386}},{id:"kinesisk-sequoia_1",position:{yaw:2.7477414373572504,pitch:.16344932208042917}},{id:"gulbladig-jasmin_2",position:{yaw:2.2248782999350745,pitch:.02788355488632855}},{id:"nagon_hagg_1",position:{yaw:2.341694149272396,pitch:.05268697075710783}},{id:"skoldbracka_2",position:{yaw:4.859937330284482,pitch:-.2727330547869955}},{id:"rhododendron_3",position:{yaw:5.265942977882444,pitch:-.16449687572112204}},{id:"rhododendron_4",position:{yaw:2.4974701653934557,pitch:.042540642208055875}},{id:"magnolia_1",position:{yaw:1.1870392828724468,pitch:-.006345644321218199}},{id:"japansk-lonn_1",position:{yaw:1.578729977868495,pitch:-.190902056779769}},{id:"praktvide_1",position:{yaw:1.6771755523542895,pitch:-.08833609997235348}},{id:"hosta_1",position:{yaw:6.148562431671903,pitch:-.08428048077361815}},{id:"hosta_2",position:{yaw:6.2292457094785805,pitch:-.0649132723823158}},{id:"japansk-appelblomma_1",position:{yaw:.05115158015257526,pitch:-.04182503526518277}},{id:"gulbladig-jasmin_1",position:{yaw:.33297752503584616,pitch:-.06161725894489555}},{id:"ask_3",position:{yaw:3.419172931177481,pitch:.1959532594991038}},{id:"gyllenlonn_1",position:{yaw:3.7168609928688197,pitch:.14489062722701718}},{id:"vingad-benved_1",position:{yaw:4.808664150995658,pitch:.02160151356537577}},{id:"kranskornell_1",position:{yaw:3.9585715370824492,pitch:-.6303760695700926}},{id:"rodgersia_1",position:{yaw:4.228600609960907,pitch:-.16327596640496878}},{id:"koreansk-stevartia_1",position:{yaw:4.393808912550478,pitch:.11451886987988648}},{id:"hosta_9",position:{yaw:5.607308144545707,pitch:-.47056965713055}},{id:"hosta_8",position:{yaw:5.562700539178307,pitch:-.326136389321237}},{id:"hosta_7",position:{yaw:5.425129951735958,pitch:-.24916313252661615}},{id:"kloverlonn_1",position:{yaw:5.5415184431747875,pitch:-.05635664627969894}},{id:"kopparbjork_1",position:{yaw:5.342846885192868,pitch:-.011318446981187549}}],links:[{nodeId:"dalgard4",position:{yaw:.06069435950967284,pitch:-.1613476170436241}},{nodeId:"dalgard15",position:{yaw:3.499392080498202,pitch:-.048354266154714276}},{nodeId:"dalgard17",position:{yaw:2.5570803303542853,pitch:-.021975199079844906}},{nodeId:"dalgard18",position:{yaw:3.2939575977210716,pitch:-.25476207541113816}},{nodeId:"dalgard21",position:{yaw:5.2264961074372875,pitch:-.28063894210433804}}],heading:.494007666948537},{id:"dalgard21",name:"Dalgården (bild 21)",panoramaFile:"./nodes/dalgard21/IMG_1326.JPG",markers:[{id:"ginnalalonn_1",position:{yaw:4.789855977242777,pitch:.0664446648560697}},{id:"hangpil_1",position:{yaw:1.8197074496993328,pitch:.45418590410120974}},{id:"praktvide_1",position:{yaw:1.5504485961054577,pitch:-.004816492310711009}},{id:"japansk-lonn_1",position:{yaw:1.5005650704270699,pitch:-.01971109057775377}},{id:"magnolia_1",position:{yaw:1.2735545440293718,pitch:.026761354835571634}},{id:"kranskornell_1",position:{yaw:1.9202069942326638,pitch:-.010112135912363476}},{id:"nanting_4",position:{yaw:5.042833994504521,pitch:-.1361727596967801}},{id:"rhododendron_3",position:{yaw:5.063237667568617,pitch:-.3409497308327285}},{id:"kopparbjork_1",position:{yaw:5.433595609479726,pitch:.2079112848382909}},{id:"hosta_10",position:{yaw:5.7791342906836976,pitch:-.9014774418648808}},{id:"hosta_7",position:{yaw:.5440573276045081,pitch:-.7377117685673655}},{id:"hosta_8",position:{yaw:1.1161296658277609,pitch:-.5153197325529006}},{id:"hosta_9",position:{yaw:1.4167170851328075,pitch:-.2852260610469932}},{id:"japansk-appelblomma_1",position:{yaw:.32706328034091026,pitch:-.04763182415890687}},{id:"skoldbracka_2",position:{yaw:2.1617795698728792,pitch:-.17022957823150908}},{id:"vingad-benved_1",position:{yaw:3.1706025770427577,pitch:.06170175525394672}},{id:"kloverlonn_1",position:{yaw:.7828930248430049,pitch:.03637392981079168}},{id:"gulbladig-jasmin_2",position:{yaw:1.796295372092212,pitch:.07038975425183391}},{id:"rhododendron_2",position:{yaw:4.305448924980514,pitch:.022186404708438138}}],links:[{nodeId:"dalgard18",position:{yaw:2.1275280164636587,pitch:-.010309503557377472}},{nodeId:"dalgard20",position:{yaw:1.6676018606504506,pitch:-.1910967814836977}},{nodeId:"dalgard22",position:{yaw:4.748044010400324,pitch:-.22542530116910164}}],heading:.3175431939303857},{id:"dalgard22",name:"Dalgården (bild 22)",panoramaFile:"./nodes/dalgard22/IMG_1327.JPG",markers:[{id:"hangpil_1",position:{yaw:.6725162253283881,pitch:.31138733524769213}},{id:"nanting_4",position:{yaw:5.559683240500773,pitch:-.4865591548540278}},{id:"finnslide_1",position:{yaw:2.098105108121322,pitch:.20037735055829375}},{id:"rhododendron_2",position:{yaw:1.2558206703269563,pitch:-.004092208773296626}},{id:"gulbladig-jasmin_1",position:{yaw:.06005250430109421,pitch:.015939861133693396}},{id:"rhododendron_3",position:{yaw:.13137948354928572,pitch:-.3069463866300224}},{id:"kopparbjork_1",position:{yaw:.2565983108610073,pitch:.08940459588669937}},{id:"hosta_10",position:{yaw:.3145193669361147,pitch:-.16317119400901947}},{id:"hosta_7",position:{yaw:.35665999620709316,pitch:-.10683603301345788}},{id:"hosta_9",position:{yaw:.4471706829235172,pitch:-.0659181329700733}},{id:"kloverlonn_1",position:{yaw:.31871131281694703,pitch:.05525917379027878}},{id:"japansk-lonn_1",position:{yaw:.4647620059402269,pitch:.004660519248009374}},{id:"magnolia_1",position:{yaw:.5001419448817461,pitch:.028349565179907728}},{id:"katsura_1",position:{yaw:5.163019617053256,pitch:.011204446349240902}},{id:"smallspirea_1",position:{yaw:2.934474985845655,pitch:-.004940060911584823}},{id:"navehagg_1",position:{yaw:3.263021617042092,pitch:.07761113987848135}},{id:"navehagg_2",position:{yaw:3.313514578934146,pitch:.06182260107067151}},{id:"ginnalalonn_1",position:{yaw:3.7580096282773257,pitch:.04592895417908905}},{id:"hastkastanj_1",position:{yaw:4.123458069606916,pitch:.174774177498509}},{id:"blodplommon_1",position:{yaw:4.019286913202815,pitch:.05353602589588836}},{id:"skogslonn_1",position:{yaw:3.972218574490527,pitch:.12303511759340925}},{id:"koreansk-lonn_1",position:{yaw:4.339451564801431,pitch:-.01615892933652851}},{id:"skoldbracka_1",position:{yaw:3.126620635956865,pitch:-.056382840811384005}}],links:[{nodeId:"dalgard1",position:{yaw:2.7742271744147144,pitch:-.13680421739120918}},{nodeId:"dalgard2",position:{yaw:4.652486376652885,pitch:-.25040625801652516}},{nodeId:"dalgard21",position:{yaw:.4634952955452002,pitch:-.24407093246122646}}],heading:5.5229222982468436}],Px={Blodplommon:["blodplommon_1"],"Koreansk lönn":["koreansk-lonn_1"],"Japansk lönn":["japansk-lonn_1"],Skogslönn:["skogslonn_1"],"Rödbladig skogslönn":["rodbladig-skogslonn_1","rodbladig-skogslonn_2"],Gyllenlönn:["gyllenlonn_1"],Klöverlönn:["kloverlonn_1"],Solfjäderslönn:["solfjaderslonn_1"],Sköldbräcka:["skoldbracka_1","skoldbracka_2"],Magnolia:["magnolia_1"],Katsura:["katsura_1","katsura_2"],"Kinesisk sequoia":["kinesisk-sequoia_1"],Kranskornell:["kranskornell_1"],Rodgersia:["rodgersia_1"],"Koreansk stevartia (skenkamelia)":["koreansk-stevartia_1"],Hosta:["hosta_1","hosta_2","hosta_3","hosta_4","hosta_5","hosta_6","hosta_7","hosta_8","hosta_9","hosta_10"],Kopparbjörk:["kopparbjork_1"],Himalayabjörk:["himalayabjork_1"],Praktvide:["praktvide_1"],Rhododendron:["rhododendron_1","rhododendron_2","rhododendron_3","rhododendron_4"],"Japansk äppelblomma":["japansk-appelblomma_1"],Nävehägg:["navehagg_1","navehagg_2"],Ginnalalönn:["ginnalalonn_1"],Hästkastanj:["hastkastanj_1"],Smällspirea:["smallspirea_1"],'Ligularia dentata "Desdemona"':["ligularia-dentata_1"],Hängpil:["hangpil_1"],Schuberthägg:["schuberthagg_1"],Häxal:["haxal_1"],Vitoxel:["vitoxel_1"],Ask:["ask_1","ask_2","ask_3"],"Lind (winter orange)":["lind_1"],"Sibiriskt korkträd":["sibiriskt-korktrad_1"],"Gulbladig jasmin":["gulbladig-jasmin_1","gulbladig-jasmin_2"],Kameleontbuske:["kameleontbuske_1"],Vipphortensia:["vipphortensia_1"],'Mörkbladig fläder "Black lace"':["morkbladig-flader_1"],Finnslide:["finnslide_1"],"Azalea northern lights":["azalea-northern-lights_1","azalea-northern-lights_2"],"Vingad benved":["vingad-benved_1"]},Lx={Blodplommon:{description:'Blodplommon (<em>Prunus cerasifera "Pissardii"</em>) är ett träd som är känt för sina vackra, mörkröda blad och rosa blommor på våren. Det är en populär prydnadsväxt i trädgårdar.',images:["./trees/blodplommon-leaves.png"]},"Koreansk lönn":{description:"Koreansk lönn (<em>Acer pseudosieboldianum</em>) är en trädart som är känd för sina vackra, flikiga blad och sin motståndskraft mot kalla klimat. Den har en attraktiv bark och producerar små, röda frukter som är populära bland fåglar. Koreansk lönn är en utmärkt prydnadsväxt för trädgårdar och landskap."},Skogslönn:{description:"Skogslönn (<em>Acer platanoides</em>) är en trädart som är känd för sina stora, handflikiga blad och sina gula blommor som blommar på våren. Den har en rundad form och producerar små, gröna frukter som är populära bland fåglar. Skogslönn är en utmärkt prydnadsväxt för trädgårdar och parker för sin skönhet och attraktiva frukter."},"Rödbladig skogslönn":{description:'Rödbladig skogslönn (<em>Acer platanoides "Crimson King"</em>) är en trädart som är känd för sina mörkröda blad som behåller sin färg under hela växtsäsongen. Den har en rundad form och producerar små, gröna frukter som är populära bland fåglar. Rödbladig skogslönn är en utmärkt prydnadsväxt för trädgårdar och parker för sin unika färg och attraktiva form.'},Gyllenlönn:{description:'Gyllenlönn (<em>Acer shirasawanum "Aureum"</em>) är en trädart som är känd för sina gyllene, ljust gröna blad som blir mer intensiva under hösten. Den har en rundad form och är populär för sin ljusa färg och eleganta utseende. Gyllenlönn är en utmärkt prydnadsväxt för trädgårdar och parker.'},Klöverlönn:{description:"Klöverlönn (<em>Acer campestre</em>) är en liten till medelstor trädart som är känd för sina små, klöverliknande blad och sin motståndskraft mot urbana miljöer. Den har en rundad form och producerar små, gröna frukter som är populära bland fåglar. Klöverlönn är en utmärkt prydnadsväxt för trädgårdar och parker för sin tålighet och attraktiva form."},Solfjäderslönn:{description:'Solfjäderslönn (<em>Acer palmatum "Dissectum"</em>) är en trädart som är känd för sina fint flikiga, solfjäderformade blad. Den har en elegant, hängande växtsätt och är populär i japanska trädgårdar. Solfjäderslönn är uppskattad för sin skönhet och unika bladform.'},Sköldbräcka:{description:'Sköldbräcka (<em>Astilbe chinensis "Pumila"</em>) är en perenn växt som är känd för sina dekorativa, fjäderlika blomställningar och frodiga bladverk. Den trivs bäst i fuktiga miljöer och är populär i trädgårdar för sin långa blomningstid och attraktiva utseende.'},Magnolia:{description:"Magnolia är en släkt av träd och buskar som är kända för sina stora, doftande blommor. De finns i många olika färger, inklusive vitt, rosa och lila. Magnolior är ofta tidiga blommare på våren och är uppskattade för sin skönhet och doft."},Katsura:{description:"Katsura (<em>Cercidiphyllum japonicum</em>) är ett träd som är känt för sina hjärtformade blad och vackra höstfärger. Det är också känt för sin söta doft av förmultnande löv på hösten. Katsura-trädet är populärt i trädgårdar och parker för sin unika form och doft.",images:["./trees/katsura-leaves.png","./trees/katsura-bark.png"]},"Kinesisk sequoia":{description:"idk"},Kranskornell:{description:"Kranskornell (<em>Cornus controversa</em>) är ett träd som är känt för sina horisontella grenar som ger en karakteristisk kransform. Det har vita blommor på våren och bär som är populära bland fåglar. Kranskornell är en utmärkt prydnadsväxt för trädgårdar och parker för sin unika form och attraktiva blommor."},Rodgersia:{description:"Rodgersia är en släkt av perenner som är kända för sina stora, dekorativa blad och imponerande blomställningar. De trivs bäst i fuktiga miljöer och är populära i trädgårdar för sin tropiska känsla och stora, pråliga blommor."},"Koreansk stevartia (skenkamelia)":{description:"Koreansk stevartia (<em>Stewartia pseudocamellia</em>) är ett träd som är känt för sina vackra, vita blommor som liknar kamelior. Det har en attraktiv bark och producerar små, ätliga frukter. Koreansk stevartia är populär i trädgårdar och parker för sin eleganta form och vackra blommor."},Hosta:{description:"Hosta är en populär perenn växt som är känd för sina stora, dekorativa blad och vackra blommor. De trivs bäst i skuggiga eller halvskuggiga områden och finns i många olika färger och storlekar. Hosta är en utmärkt växt för trädgårdar och landskap för sin tålighet och skönhet."},Kopparbjörk:{description:'Kopparbjörk (<em>Betula nana "Purpurea"</em>) är en trädart som är känd för sin karakteristiska kopparfärgade bark och sina små, triangulära blad. Den har en upprätt växtsätt och producerar små, hängande kottar. Kopparbjörk är populär i trädgårdar och parker för sin unika bark och eleganta form.'},Himalayabjörk:{description:"Himalayabjörk (<em>Betula utilis</em>) är en trädart som är känd för sin vita, papperstunna bark och sina små, triangulära blad. Den har en upprätt växtsätt och producerar små, hängande kottar. Himalayabjörk är populär i trädgårdar och parker för sin unika bark och eleganta form."},Praktvide:{description:'Praktvide (<em>Salix matsudana "Tortusa"</em>) är en trädart som är känd för sina vridna, spiralformade grenar och smala, lansettformade blad. Den har en karakteristisk form och producerar små, hängande kottar. Praktvide är populär i trädgårar och parker för sin unika form och eleganta utseende.'},Rhododendron:{description:"Rhododendron är en släkt av buskar och träd som är kända för sina stora, färgglada blommor. De finns i många olika färger och storlekar och trivs bäst i sur jord. Rhododendron är en populär prydnadsväxt i trädgårdar och parker för sina vackra blommor and lush foliage."},"Japansk äppelblomma":{description:"Japansk äppelblomma (<em>Malus floribunda</em>) är en trädart som är känd för sina vackra, rosa blommor och små, ätliga frukter. Den har en rundad form och producerar små, röda frukter som är populära bland fåglar. Japansk äppelblomma är en utmärkt prydnadsväxt för trädgårdar och parker för sin skönhet och attraktiva frukter."},Nävehägg:{description:"Nävehägg (<em>Prunus padus</em>) är ett träd som är känt för sina vita blommor som blommar på våren och producerar små, svarta bär som är populära bland fåglar. Den har en rundad form och producerar små, hängande kottar. Nävehägg är en utmärkt prydnadsväxt för trädgårdar och parker för sin skönhet och attraktiva bär."},Ginnalalönn:{description:"Ginnalalönn (<em>Acer ginnala</em>) är en liten till medelstor trädart som är känd för sina små, klöverliknande blad och sin motståndskraft mot urbana miljöer. Den har en rundad form och producerar små, gröna frukter som är populära bland fåglar. Ginnalalönn är en utmärkt prydnadsväxt for trädgårdar och parker för sin tålighet och attraktiva form."},Hästkastanj:{description:"Hästkastanj (<em>Aesculus hippocastanum</em>) är ett stort träd som är känt för sina stora, vita blommor och stora, handflikiga blad. Den har en rundad form och producerar stora, bruna frukter som är inte ätliga."},Smällspirea:{description:"Smällspirea (<em>Spiraea japonica</em>) är en buske som är känd för sina små, rosa eller vita blommor som blommar på sommaren. Den har små, gröna blad och en buskig form. Smällspirea är populär i trädgårdar och parker för sin skönhet och låga underhåll."},'Ligularia dentata "Desdemona"':{description:'Ligularia dentata "Desdemona" är en perenn växt som är känd för sina stora, hjärtformade blad och sina gula blommor som blommar på sommaren. Den trivs bäst i fuktiga miljöer och är populär i trädgårdar för sin långa blomningstid och attraktiva utseende.'},Hängpil:{description:"Hängpil (<em>Salix babylonica</em>) är en trädart som är känd för sina långa, hängande grenar och smala, lansettformade blad. Den trivs bäst i fuktiga miljöer och är populär i trädgårdar och parker för sin karakteristiska form och eleganta utseende."},Schuberthägg:{description:"Schuberthägg (<em>Prunus subhirtella</em>) är ett träd som är känt för sina rosa blommor som blommar tidigt på våren. Den har en rundad form och producerar små, ätliga frukter som är populära bland fåglar. Schuberthägg är en utmärkt prydnadsväxt för trädgårdar och parker för sin skönhet och attraktiva blommor."},Häxal:{description:"Häxal (<em>Hamamelis</em>) är en buske eller litet träd som är känt för sina gula, spindelliknande blommor som blommar på vintern. Den har en buskig form och producerar små, ätliga frukter som är populära bland fåglar. Häxal är en utmärkt prydnadsväxt för trädgårdar och parker för sin tidiga blomning och attraktiva färg."},Vitoxel:{description:"Vitoxel (<em>Oxydendrum arboreum</em>) är ett träd som är känt för sina vita blommor som blommar på sommaren och sina vackra höstfärger. Den har en upprätt växtsätt och producerar små, ätliga frukter som är populära bland fåglar. Vitoxel är en utmärkt prydnadsväxt för trädgårdar och parker för sin skönhet och attraktiva frukter."},Ask:{description:"Ask (<em>Fraxinus</em>) är en släkt av träd som är kända för sina fjäderlika blad och sina små, gröna frukter. De trivs bäst i fuktiga miljöer och är populära i trädgårdar och parker för sin eleganta form och attraktiva blad."},"Lind (winter orange)":{description:"Lind (<em>Tilia</em>) är en släkt av träd som är kända för sina stora, hjärtformade blad och sina doftande blommor. De trivs bäst i fuktiga miljöer och är populära i trädgårdar och parker för sin skönhet och doft."},"Sibiriskt korkträd":{description:"Sibiriskt korkträd (<em>Phellodendron amurense</em>) är ett träd som är känt för sin karakteristiska, korkliknande bark och sina små, gröna frukter. Den har en upprätt växtsätt och producerar små, ätliga frukter som är populära bland fåglar. Sibiriskt korkträd är en utmärkt prydnadsväxt för trädgårdar och parker för sin unika bark och attraktiva frukter."},"Gulbladig jasmin":{description:"Gulbladig jasmin (<em>Jasminum nudiflorum</em>) är en buske som är känd för sina små, gula blommor som blommar på vintern och tidigt på våren. Den har små, gröna blad och en buskig form. Gulbladig jasmin är populär i trädgårdar och parker för sin tidiga blomning och attraktiva färg."},Kameleontbuske:{description:"Kameleontbuske (<em>Deutzia</em>) är en släkt av buskar som är kända för sina små, vita eller rosa blommor som blommar på sommaren. De har små, gröna blad och en buskig form. Kameleontbuske är populär i trädgårdar och parker för sin skönhet och låga underhåll."},Vipphortensia:{description:"Vipphortensia (<em>Hydrangea paniculata</em>) är en buske som är känd för sina stora, konformade blomställningar som kan vara vita, rosa eller lila. Den blommar på sommaren och har gröna blad. Vipphortensia är populär i trädgårdar och parker för sin skönhet och låga underhåll."},'Mörkbladig fläder "Black lace"':{description:'Fläder "Black lace" (<em>Sambucus</em>) är en buske som är känd för sina mörka, nästan svarta blad och sina små, vita blommor som blommar på sommaren. Den har en buskig form och producerar små, svarta bär som är populära bland fåglar. Fläder "Black lace" är populär i trädgårdar och parker för sin unika färg och attraktiva blommor.'},Finnslide:{description:"Finnslide (<em>Aconogonon × fennicum</em>) är en buske som är känd för sina små, rosa blommor och sina gyllene, ljust gröna blad. Den blommar på sommaren och har en buskig form. Finnslide är populär i trädgårdar och parker för sin skönhet och låga underhåll."},"Azalea northern lights":{description:"Azalea northern lights (<em>Rhododendron</em>) är en buske som är känd för sina stora, färgglada blommor som blommar på våren. Den har mörkgröna blad och en kompakt, buskig form. Azalea northern lights är populär i trädgårdar och parker för sin skönhet och tidiga blomning."},"Vingad benved":{description:"Vingad benved (<em>Euonymus alatus</em>) är en buske eller litet träd som är känt för sina karakteristiska, vingformade grenar och vackra höstfärger. Den har små, gröna blad som blir röda eller lila på hösten. Vingad benved är populär i trädgårdar och landskap för sin unika form och färg."}},Dx={katsura_1:{description:"Detta träd planterades något år!",images:["/nodes/dalgard19/IMG_1324.JPG"]},ginnalalonn_1:{description:"Fungerar som ett paraply mot solen när man sitter utanför lusthuset!"},"kinesisk-sequoia_1":{description:"Lätt det coolaste trädet i parken!"}};function Ix(i,e=0,t=32){var n=[];return i.forEach(s=>{const r=Object.entries(Px).filter(([o,l])=>l.includes(s.id))[0]?.[0]||s.id;console.log(r);const a={id:s.id,position:{yaw:s.position.yaw-e,pitch:s.position.pitch},size:{width:t,height:t},image:"./icons/leaf.circle.fill@2x.png",tooltip:`<strong>${r}</strong>`,anchor:"bottom center",content:kx(s.id,r)};n.push(a)}),n}function kx(i,e){const[t,n]=Ux(i,e);var s="";t.length&&(s+='<div class="description-wrapper">',t.forEach(a=>{s+='<div class="description-div">',s+=`<p>${a}</p>`,s+="</div>"}),s+="</div>");var r="";return n.length&&(r+='<div class="img-wrapper">',n.forEach(a=>{r+='<div class="img-div">',r+=`<img src="${a}" alt="${e}" class="img-content">`,r+="</div>"}),r+="</div>"),!s&&!r?`<h2>${e}</h2>`:s?r?`
        <h2>${e}</h2>
        ${r}
        ${s}
    `:`
            <h2>${e}</h2>
            ${s}
        `:`
            <h2>${e}</h2>
            ${r}
        `}function Ux(i,e){const t=Lx[e]||{},n=Dx[i]||{};var s=[];t.description&&s.push(t.description),n.description&&s.push(n.description);const r=t.images||[],a=n.images||[],o=r.concat(a);return[s,o]}async function Nx(){return await Ox(Rx)}async function Ox(i){var e=[];for(const t of i){const n=await Ix(t.markers,t.heading),s=t.links.map(a=>({nodeId:a.nodeId,position:{yaw:a.position.yaw-t.heading,pitch:a.position.pitch}})),r={id:t.id,panorama:{width:8192,cols:16,rows:8,tileUrl:(a,o)=>`/tiles/${t.id}/panorama_row${o}_col${a}.jpg`,baseUrl:`/tiles/${t.id}/rotated_${t.id}_10%_0.7.jpg`},links:s,name:t.name,markers:n,data:{heading:t.heading}};e.push(r)}return e}dn.maxItems=25;Nx().then(i=>{var e=[];i.forEach(n=>{e.push({id:n.id,name:n.name,panorama:n.panorama})}),console.log(i);const t=new py({plugins:[[Cx,{defaultHoverScale:!0}],[Yy,{positionMode:"manual",nodes:i,preload:!0,showLinkTooltip:!1,renderMode:"2d"}],[tx,{items:e}]],container:document.querySelector(".viewer"),adapter:Cy,navbar:["zoom","move","markersList","caption","gallery","fullscreen"],rendererParameters:{debug:!1}});t.addEventListener("ready",()=>{console.log("Viewer is ready!"),["./trees/blodplommon-leaves.png","./trees/katsura-leaves.png","./trees/lönn-leaves.png"].forEach(s=>{const r=new Image;r.src=s})},{once:!0}),t.addEventListener("click",({data:n})=>{const s=Fx(n.yaw,n.pitch,t),a=t.getPlugin("virtual-tour").getCurrentNode().data.heading||0,o=(s.yaw+a)%(2*Math.PI);console.log(`${n.rightclick?"right ":""}clicked at yaw: ${o}, pitch: ${s.pitch}`)})});function Fx(i,e,t,n=0,s=-16){const r=t.defaultZoomLvl||50*(Math.PI/180),a=t.container,o=a.clientHeight/r,l=r*(a.clientWidth/a.clientHeight),h=a.clientWidth/l,d=n/h,f=s/o;return{yaw:i+d,pitch:e+f}}
