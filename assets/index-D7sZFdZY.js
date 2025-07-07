(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="175",lf=0,il=1,cf=2,Sc=1,hf=2,En=3,Gn=0,It=1,Mn=2,kn=0,Ui=1,sl=2,rl=3,ol=4,df=5,ri=100,uf=101,ff=102,pf=103,mf=104,gf=200,vf=201,_f=202,xf=203,Eo=204,Mo=205,Ef=206,Mf=207,yf=208,Sf=209,wf=210,bf=211,Tf=212,Af=213,Cf=214,yo=0,So=1,wo=2,Fi=3,bo=4,To=5,Ao=6,Co=7,wc=0,Rf=1,Pf=2,zn=0,bc=1,Lf=2,Df=3,If=4,Uf=5,Nf=6,Of=7,Tc=300,ki=301,zi=302,Ro=303,Po=304,Rr=306,Lo=1e3,ai=1001,Do=1002,sn=1003,Ff=1004,Os=1005,Bt=1006,Vr=1007,Fn=1008,Tn=1009,Ac=1010,Cc=1011,ps=1012,ya=1013,ci=1014,yn=1015,ys=1016,Sa=1017,wa=1018,ms=1020,Rc=35902,Pc=1021,Lc=1022,nn=1023,Dc=1024,Ic=1025,gs=1026,vs=1027,Uc=1028,ba=1029,Nc=1030,Ta=1031,Aa=1033,or=33776,ar=33777,lr=33778,cr=33779,Io=35840,Uo=35841,No=35842,Oo=35843,Fo=36196,ko=37492,zo=37496,Bo=37808,Ho=37809,Vo=37810,Go=37811,Wo=37812,Xo=37813,Yo=37814,qo=37815,$o=37816,jo=37817,Zo=37818,Ko=37819,Jo=37820,Qo=37821,hr=36492,ea=36494,ta=36495,Oc=36283,na=36284,ia=36285,sa=36286,kf=3200,zf=3201,Bf=0,Hf=1,On="",qt="srgb",hi="srgb-linear",gr="linear",Qe="srgb",fi=7680,al=519,Vf=512,Gf=513,Wf=514,Fc=515,Xf=516,Yf=517,qf=518,$f=519,ll=35044,cl="300 es",Sn=2e3,vr=2001;class Hi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const es=Math.PI/180,_s=180/Math.PI;function Vi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[t&255]+wt[t>>8&255]+wt[t>>16&255]+wt[t>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[n&63|128]+wt[n>>8&255]+"-"+wt[n>>16&255]+wt[n>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Oe(t,e,n){return Math.max(e,Math.min(n,t))}function Ca(t,e){return(t%e+e)%e}function jf(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Zf(t,e,n){return t!==e?(n-t)/(e-t):0}function ts(t,e,n){return(1-n)*t+n*e}function Kf(t,e,n,i){return ts(t,e,1-Math.exp(-n*i))}function Jf(t,e=1){return e-Math.abs(Ca(t,e*2)-e)}function Qf(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ep(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function tp(t,e){return t+Math.floor(Math.random()*(e-t+1))}function np(t,e){return t+Math.random()*(e-t)}function ip(t){return t*(.5-Math.random())}function sp(t){t!==void 0&&(hl=t);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rp(t){return t*es}function op(t){return t*_s}function ap(t){return(t&t-1)===0&&t!==0}function lp(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function cp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function hp(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),h=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),p=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*d,l*f,l*p,a*h);break;case"YZY":t.set(l*p,a*d,l*f,a*h);break;case"ZXZ":t.set(l*f,l*p,a*d,a*h);break;case"XZX":t.set(a*d,l*g,l*m,a*h);break;case"YXY":t.set(l*m,a*d,l*g,a*h);break;case"ZYZ":t.set(l*g,l*m,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ct(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Fe={DEG2RAD:es,RAD2DEG:_s,generateUUID:Vi,clamp:Oe,euclideanModulo:Ca,mapLinear:jf,inverseLerp:Zf,lerp:ts,damp:Kf,pingpong:Jf,smoothstep:Qf,smootherstep:ep,randInt:tp,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:op,isPowerOfTwo:ap,ceilPowerOfTwo:lp,floorPowerOfTwo:cp,setQuaternionFromProperEuler:hp,normalize:Ct,denormalize:Ri};class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Oe(this.x,e.x,n.x),this.y=Oe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Oe(this.x,e,n),this.y=Oe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,n,i,s,r,o,a,l,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,h)}set(e,n,i,s,r,o,a,l,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],d=i[4],f=i[7],p=i[2],m=i[5],g=i[8],_=s[0],u=s[3],c=s[6],b=s[1],w=s[4],M=s[7],L=s[2],C=s[5],A=s[8];return r[0]=o*_+a*b+l*L,r[3]=o*u+a*w+l*C,r[6]=o*c+a*M+l*A,r[1]=h*_+d*b+f*L,r[4]=h*u+d*w+f*C,r[7]=h*c+d*M+f*A,r[2]=p*_+m*b+g*L,r[5]=p*u+m*w+g*C,r[8]=p*c+m*M+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8];return n*o*d-n*a*h-i*r*d+i*a*l+s*r*h-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8],f=d*o-a*h,p=a*l-d*r,m=h*r-o*l,g=n*f+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*h-d*i)*_,e[2]=(a*i-s*o)*_,e[3]=p*_,e[4]=(d*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=m*_,e[7]=(i*l-h*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+e,-s*h,s*l,-s*(-h*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gr.makeScale(e,n)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gr.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new De;function kc(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _r(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dp(){const t=_r("canvas");return t.style.display="block",t}const dl={};function dr(t){t in dl||(dl[t]=!0,console.warn(t))}function up(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function fp(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pp(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ul=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mp(){const t={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qe&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?gr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[hi]:{primaries:e,whitePoint:i,transfer:gr,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:ul,fromXYZ:fl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),t}const We=mp();function wn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ni(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let pi;class gp{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pi===void 0&&(pi=_r("canvas")),pi.width=e.width,pi.height=e.height;const s=pi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=pi}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_r("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wn(n[i]/255)*255):n[i]=wn(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vp=0;class Ra{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wr(s[o].image)):r.push(Wr(s[o]))}else r=Wr(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Wr(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _p=0;class yt extends Hi{constructor(e=yt.DEFAULT_IMAGE,n=yt.DEFAULT_MAPPING,i=ai,s=ai,r=Bt,o=Fn,a=nn,l=Tn,h=yt.DEFAULT_ANISOTROPY,d=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Vi(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lo:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lo:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Tc;yt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,n=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,h=l[0],d=l[4],f=l[8],p=l[1],m=l[5],g=l[9],_=l[2],u=l[6],c=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+u)<.1&&Math.abs(h+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(h+1)/2,M=(m+1)/2,L=(c+1)/2,C=(d+p)/4,A=(f+_)/4,N=(g+u)/4;return w>M&&w>L?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=C/i,r=A/i):M>L?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=C/s,r=N/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=A/r,s=N/r),this.set(i,s,r,n),this}let b=Math.sqrt((u-g)*(u-g)+(f-_)*(f-_)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(u-g)/b,this.y=(f-_)/b,this.z=(p-d)/b,this.w=Math.acos((h+m+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Oe(this.x,e.x,n.x),this.y=Oe(this.y,e.y,n.y),this.z=Oe(this.z,e.z,n.z),this.w=Oe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Oe(this.x,e,n),this.y=Oe(this.y,e,n),this.z=Oe(this.z,e,n),this.w=Oe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xp extends Hi{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ht(0,0,e,n),this.scissorTest=!1,this.viewport=new ht(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new yt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Ra(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends xp{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zc extends yt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends yt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],h=i[s+1],d=i[s+2],f=i[s+3];const p=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[n+0]=l,e[n+1]=h,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==p||h!==m||d!==g){let u=1-a;const c=l*p+h*m+d*g+f*_,b=c>=0?1:-1,w=1-c*c;if(w>Number.EPSILON){const L=Math.sqrt(w),C=Math.atan2(L,c*b);u=Math.sin(u*C)/L,a=Math.sin(a*C)/L}const M=a*b;if(l=l*u+p*M,h=h*u+m*M,d=d*u+g*M,f=f*u+_*M,u===1-a){const L=1/Math.sqrt(l*l+h*h+d*d+f*f);l*=L,h*=L,d*=L,f*=L}}e[n]=l,e[n+1]=h,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],h=i[s+2],d=i[s+3],f=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[n]=a*g+d*f+l*m-h*p,e[n+1]=l*g+d*p+h*f-a*m,e[n+2]=h*g+d*m+a*p-l*f,e[n+3]=d*g-a*f-l*p-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(i/2),d=a(s/2),f=a(r/2),p=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*d*f+h*m*g,this._y=h*m*f-p*d*g,this._z=h*d*g+p*m*f,this._w=h*d*f-p*m*g;break;case"YXZ":this._x=p*d*f+h*m*g,this._y=h*m*f-p*d*g,this._z=h*d*g-p*m*f,this._w=h*d*f+p*m*g;break;case"ZXY":this._x=p*d*f-h*m*g,this._y=h*m*f+p*d*g,this._z=h*d*g+p*m*f,this._w=h*d*f-p*m*g;break;case"ZYX":this._x=p*d*f-h*m*g,this._y=h*m*f+p*d*g,this._z=h*d*g-p*m*f,this._w=h*d*f+p*m*g;break;case"YZX":this._x=p*d*f+h*m*g,this._y=h*m*f+p*d*g,this._z=h*d*g-p*m*f,this._w=h*d*f-p*m*g;break;case"XZY":this._x=p*d*f-h*m*g,this._y=h*m*f-p*d*g,this._z=h*d*g+p*m*f,this._w=h*d*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],h=n[2],d=n[6],f=n[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-h)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+h)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-h)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+h)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,h=n._z,d=n._w;return this._x=i*d+o*a+s*h-r*l,this._y=s*d+o*l+r*a-i*h,this._z=r*d+o*h+i*l-s*a,this._w=o*d-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*s+n*this._y,this._z=m*r+n*this._z,this.normalize(),this}const h=Math.sqrt(l),d=Math.atan2(h,a),f=Math.sin((1-n)*d)/h,p=Math.sin(n*d)/h;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pl.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pl.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*s-a*i),d=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*h+o*f-a*d,this.y=i+l*d+a*h-r*f,this.z=s+l*f+r*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Oe(this.x,e.x,n.x),this.y=Oe(this.y,e.y,n.y),this.z=Oe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Oe(this.x,e,n),this.y=Oe(this.y,e,n),this.z=Oe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new U,pl=new Yn;class Gi{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kt.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kt.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kt.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(r,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fs.copy(i.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),ks.subVectors(this.max,Yi),mi.subVectors(e.a,Yi),gi.subVectors(e.b,Yi),vi.subVectors(e.c,Yi),Rn.subVectors(gi,mi),Pn.subVectors(vi,gi),Kn.subVectors(mi,vi);let n=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-Kn.z,Kn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,Kn.z,0,-Kn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-Kn.y,Kn.x,0];return!Yr(n,mi,gi,vi,ks)||(n=[1,0,0,0,1,0,0,0,1],!Yr(n,mi,gi,vi,ks))?!1:(zs.crossVectors(Rn,Pn),n=[zs.x,zs.y,zs.z],Yr(n,mi,gi,vi,ks))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new U,new U,new U,new U,new U,new U,new U,new U],Kt=new U,Fs=new Gi,mi=new U,gi=new U,vi=new U,Rn=new U,Pn=new U,Kn=new U,Yi=new U,ks=new U,zs=new U,Jn=new U;function Yr(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Jn.fromArray(t,r);const a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),h=n.dot(Jn),d=i.dot(Jn);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>a)return!1}return!0}const Mp=new Gi,qi=new U,qr=new U;class Pa{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Mp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const n=qi.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(qi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(qr)),this.expandByPoint(qi.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new U,$r=new U,Bs=new U,Ln=new U,jr=new U,Hs=new U,Zr=new U;class Bc{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,n),gn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){$r.copy(e).add(n).multiplyScalar(.5),Bs.copy(n).sub(e).normalize(),Ln.copy(this.origin).sub($r);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Bs),a=Ln.dot(this.direction),l=-Ln.dot(Bs),h=Ln.lengthSq(),d=Math.abs(1-o*o);let f,p,m,g;if(d>0)if(f=o*l-a,p=o*a-l,g=r*d,f>=0)if(p>=-g)if(p<=g){const _=1/d;f*=_,p*=_,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+h}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;else p<=-g?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+h):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+h);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy($r).addScaledVector(Bs,p),m}intersectSphere(e,n){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),s=gn.dot(gn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(i=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(i=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),d>=0?(r=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,n,i,s,r){jr.subVectors(n,e),Hs.subVectors(i,e),Zr.crossVectors(jr,Hs);let o=this.direction.dot(Zr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);const l=a*this.direction.dot(Hs.crossVectors(Ln,Hs));if(l<0)return null;const h=a*this.direction.dot(jr.cross(Ln));if(h<0||l+h>o)return null;const d=-a*Ln.dot(Zr);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,n,i,s,r,o,a,l,h,d,f,p,m,g,_,u){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,h,d,f,p,m,g,_,u)}set(e,n,i,s,r,o,a,l,h,d,f,p,m,g,_,u){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=s,c[1]=r,c[5]=o,c[9]=a,c[13]=l,c[2]=h,c[6]=d,c[10]=f,c[14]=p,c[3]=m,c[7]=g,c[11]=_,c[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=o*d,m=o*f,g=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=h,n[1]=m+g*h,n[5]=p-_*h,n[9]=-a*l,n[2]=_-p*h,n[6]=g+m*h,n[10]=o*l}else if(e.order==="YXZ"){const p=l*d,m=l*f,g=h*d,_=h*f;n[0]=p+_*a,n[4]=g*a-m,n[8]=o*h,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-g,n[6]=_+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*d,m=l*f,g=h*d,_=h*f;n[0]=p-_*a,n[4]=-o*f,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*d,n[9]=_-p*a,n[2]=-o*h,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*d,m=o*f,g=a*d,_=a*f;n[0]=l*d,n[4]=g*h-m,n[8]=p*h+_,n[1]=l*f,n[5]=_*h+p,n[9]=m*h-g,n[2]=-h,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*h,g=a*l,_=a*h;n[0]=l*d,n[4]=_-p*f,n[8]=g*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-h*d,n[6]=m*f+g,n[10]=p-_*f}else if(e.order==="XZY"){const p=o*l,m=o*h,g=a*l,_=a*h;n[0]=l*d,n[4]=-f,n[8]=h*d,n[1]=p*f+_,n[5]=o*d,n[9]=m*f-g,n[2]=g*f-m,n[6]=a*d,n[10]=_*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yp,e,Sp)}lookAt(e,n,i){const s=this.elements;return Ot.subVectors(e,n),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Dn.crossVectors(i,Ot),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Dn.crossVectors(i,Ot)),Dn.normalize(),Vs.crossVectors(Ot,Dn),s[0]=Dn.x,s[4]=Vs.x,s[8]=Ot.x,s[1]=Dn.y,s[5]=Vs.y,s[9]=Ot.y,s[2]=Dn.z,s[6]=Vs.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],d=i[1],f=i[5],p=i[9],m=i[13],g=i[2],_=i[6],u=i[10],c=i[14],b=i[3],w=i[7],M=i[11],L=i[15],C=s[0],A=s[4],N=s[8],y=s[12],E=s[1],R=s[5],G=s[9],z=s[13],$=s[2],j=s[6],X=s[10],K=s[14],H=s[3],ie=s[7],ue=s[11],Me=s[15];return r[0]=o*C+a*E+l*$+h*H,r[4]=o*A+a*R+l*j+h*ie,r[8]=o*N+a*G+l*X+h*ue,r[12]=o*y+a*z+l*K+h*Me,r[1]=d*C+f*E+p*$+m*H,r[5]=d*A+f*R+p*j+m*ie,r[9]=d*N+f*G+p*X+m*ue,r[13]=d*y+f*z+p*K+m*Me,r[2]=g*C+_*E+u*$+c*H,r[6]=g*A+_*R+u*j+c*ie,r[10]=g*N+_*G+u*X+c*ue,r[14]=g*y+_*z+u*K+c*Me,r[3]=b*C+w*E+M*$+L*H,r[7]=b*A+w*R+M*j+L*ie,r[11]=b*N+w*G+M*X+L*ue,r[15]=b*y+w*z+M*K+L*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],d=e[2],f=e[6],p=e[10],m=e[14],g=e[3],_=e[7],u=e[11],c=e[15];return g*(+r*l*f-s*h*f-r*a*p+i*h*p+s*a*m-i*l*m)+_*(+n*l*m-n*h*p+r*o*p-s*o*m+s*h*d-r*l*d)+u*(+n*h*f-n*a*m-r*o*f+i*o*m+r*a*d-i*h*d)+c*(-s*a*d-n*l*f+n*a*p+s*o*f-i*o*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],d=e[8],f=e[9],p=e[10],m=e[11],g=e[12],_=e[13],u=e[14],c=e[15],b=f*u*h-_*p*h+_*l*m-a*u*m-f*l*c+a*p*c,w=g*p*h-d*u*h-g*l*m+o*u*m+d*l*c-o*p*c,M=d*_*h-g*f*h+g*a*m-o*_*m-d*a*c+o*f*c,L=g*f*l-d*_*l-g*a*p+o*_*p+d*a*u-o*f*u,C=n*b+i*w+s*M+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(_*p*r-f*u*r-_*s*m+i*u*m+f*s*c-i*p*c)*A,e[2]=(a*u*r-_*l*r+_*s*h-i*u*h-a*s*c+i*l*c)*A,e[3]=(f*l*r-a*p*r-f*s*h+i*p*h+a*s*m-i*l*m)*A,e[4]=w*A,e[5]=(d*u*r-g*p*r+g*s*m-n*u*m-d*s*c+n*p*c)*A,e[6]=(g*l*r-o*u*r-g*s*h+n*u*h+o*s*c-n*l*c)*A,e[7]=(o*p*r-d*l*r+d*s*h-n*p*h-o*s*m+n*l*m)*A,e[8]=M*A,e[9]=(g*f*r-d*_*r-g*i*m+n*_*m+d*i*c-n*f*c)*A,e[10]=(o*_*r-g*a*r+g*i*h-n*_*h-o*i*c+n*a*c)*A,e[11]=(d*a*r-o*f*r-d*i*h+n*f*h+o*i*m-n*a*m)*A,e[12]=L*A,e[13]=(d*_*s-g*f*s+g*i*p-n*_*p-d*i*u+n*f*u)*A,e[14]=(g*a*s-o*_*s-g*i*l+n*_*l+o*i*u-n*a*u)*A,e[15]=(o*f*s-d*a*s+d*i*l-n*f*l-o*i*p+n*a*p)*A,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,h=r*o,d=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,d*a+i,d*l-s*o,0,h*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,h=r+r,d=o+o,f=a+a,p=r*h,m=r*d,g=r*f,_=o*d,u=o*f,c=a*f,b=l*h,w=l*d,M=l*f,L=i.x,C=i.y,A=i.z;return s[0]=(1-(_+c))*L,s[1]=(m+M)*L,s[2]=(g-w)*L,s[3]=0,s[4]=(m-M)*C,s[5]=(1-(p+c))*C,s[6]=(u+b)*C,s[7]=0,s[8]=(g+w)*A,s[9]=(u-b)*A,s[10]=(1-(p+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const o=_i.set(s[4],s[5],s[6]).length(),a=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const h=1/r,d=1/o,f=1/a;return Jt.elements[0]*=h,Jt.elements[1]*=h,Jt.elements[2]*=h,Jt.elements[4]*=d,Jt.elements[5]*=d,Jt.elements[6]*=d,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,n.setFromRotationMatrix(Jt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Sn){const l=this.elements,h=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),p=(i+s)/(i-s);let m,g;if(a===Sn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Sn){const l=this.elements,h=1/(n-e),d=1/(i-s),f=1/(o-r),p=(n+e)*h,m=(i+s)*d;let g,_;if(a===Sn)g=(o+r)*f,_=-2*f;else if(a===vr)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _i=new U,Jt=new et,yp=new U(0,0,0),Sp=new U(1,1,1),Dn=new U,Vs=new U,Ot=new U,ml=new et,gl=new Yn;class fn{constructor(e=0,n=0,i=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(n){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class La{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wp=0;const vl=new U,xi=new Yn,vn=new et,Gs=new U,$i=new U,bp=new U,Tp=new Yn,_l=new U(1,0,0),xl=new U(0,1,0),El=new U(0,0,1),Ml={type:"added"},Ap={type:"removed"},Ei={type:"childadded",child:null},Kr={type:"childremoved",child:null};class Tt extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new U,n=new fn,i=new Yn,s=new U(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new De}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xi.setFromAxisAngle(e,n),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,n){return xi.setFromAxisAngle(e,n),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(_l,e)}rotateY(e){return this.rotateOnAxis(xl,e)}rotateZ(e){return this.rotateOnAxis(El,e)}translateOnAxis(e,n){return vl.copy(e).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_l,e)}translateY(e){return this.translateOnAxis(xl,e)}translateZ(e){return this.translateOnAxis(El,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Gs.copy(e):Gs.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt($i,Gs,this.up):vn.lookAt(Gs,$i,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(vn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ml),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ap),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ml),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){const f=l[h];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const h in a){const d=a[h];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new U(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new U,_n=new U,Jr=new U,xn=new U,Mi=new U,yi=new U,yl=new U,Qr=new U,eo=new U,to=new U,no=new ht,io=new ht,so=new ht;class tn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Qt.subVectors(e,n),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Qt.subVectors(s,n),_n.subVectors(i,n),Jr.subVectors(e,n);const o=Qt.dot(Qt),a=Qt.dot(_n),l=Qt.dot(Jr),h=_n.dot(_n),d=_n.dot(Jr),f=o*h-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(h*l-a*d)*p,g=(o*d-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(e,n),io.fromBufferAttribute(e,i),so.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(no,r.x),o.addScaledVector(io,r.y),o.addScaledVector(so,r.z),o}static isFrontFacing(e,n,i,s){return Qt.subVectors(i,n),_n.subVectors(e,n),Qt.cross(_n).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Qt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Mi.subVectors(s,i),yi.subVectors(r,i),Qr.subVectors(e,i);const l=Mi.dot(Qr),h=yi.dot(Qr);if(l<=0&&h<=0)return n.copy(i);eo.subVectors(e,s);const d=Mi.dot(eo),f=yi.dot(eo);if(d>=0&&f<=d)return n.copy(s);const p=l*f-d*h;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Mi,o);to.subVectors(e,r);const m=Mi.dot(to),g=yi.dot(to);if(g>=0&&m<=g)return n.copy(r);const _=m*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),n.copy(i).addScaledVector(yi,a);const u=d*g-m*f;if(u<=0&&f-d>=0&&m-g>=0)return yl.subVectors(r,s),a=(f-d)/(f-d+(m-g)),n.copy(s).addScaledVector(yl,a);const c=1/(u+_+p);return o=_*c,a=p*c,n.copy(i).addScaledVector(Mi,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function ro(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=We.workingColorSpace){return this.r=e,this.g=n,this.b=i,We.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=We.workingColorSpace){if(e=Ca(e,1),n=Oe(n,0,1),i=Oe(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=ro(o,r,e+1/3),this.g=ro(o,r,e),this.b=ro(o,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,n=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qt){const i=Hc[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return We.fromWorkingColorSpace(bt.copy(this),e),Math.round(Oe(bt.r*255,0,255))*65536+Math.round(Oe(bt.g*255,0,255))*256+Math.round(Oe(bt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=We.workingColorSpace){We.fromWorkingColorSpace(bt.copy(this),n);const i=bt.r,s=bt.g,r=bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,h;const d=(a+o)/2;if(a===o)l=0,h=0;else{const f=o-a;switch(h=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=d,e}getRGB(e,n=We.workingColorSpace){return We.fromWorkingColorSpace(bt.copy(this),n),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=qt){We.fromWorkingColorSpace(bt.copy(this),e);const n=bt.r,i=bt.g,s=bt.b;return e!==qt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(In),this.setHSL(In.h+e,In.s+n,In.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(In),e.getHSL(Ws);const i=ts(In.h,Ws.h,n),s=ts(In.s,Ws.s,n),r=ts(In.l,Ws.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Je;Je.NAMES=Hc;let Cp=0;class Pr extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Ui,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=Mo,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eo&&(i.blendSrc=this.blendSrc),this.blendDst!==Mo&&(i.blendDst=this.blendDst),this.blendEquation!==ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ss extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new U,Xs=new qe;let Rp=0;class dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rp++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ll,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xs.fromBufferAttribute(this,n),Xs.applyMatrix3(e),this.setXY(n,Xs.x,Xs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyMatrix3(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyMatrix4(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.applyNormalMatrix(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ut.fromBufferAttribute(this,n),ut.transformDirection(e),this.setXYZ(n,ut.x,ut.y,ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ri(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ri(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ri(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ri(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class Vc extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gc extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Pp=0;const Xt=new et,oo=new Tt,Si=new U,Ft=new Gi,ji=new Gi,gt=new U;class qn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kc(e)?Gc:Vc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new De().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,n,i){return Xt.makeTranslation(e,n,i),this.applyMatrix4(Xt),this}scale(e,n,i){return Xt.makeScale(e,n,i),this.applyMatrix4(Xt),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new un(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ft.min,ji.min),Ft.expandByPoint(gt),gt.addVectors(Ft.max,ji.max),Ft.expandByPoint(gt)):(Ft.expandByPoint(ji.min),Ft.expandByPoint(ji.max))}Ft.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)gt.fromBufferAttribute(a,h),l&&(Si.fromBufferAttribute(e,h),gt.add(Si)),s=Math.max(s,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new U,l[N]=new U;const h=new U,d=new U,f=new U,p=new qe,m=new qe,g=new qe,_=new U,u=new U;function c(N,y,E){h.fromBufferAttribute(i,N),d.fromBufferAttribute(i,y),f.fromBufferAttribute(i,E),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,E),d.sub(h),f.sub(h),m.sub(p),g.sub(p);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(R),u.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(R),a[N].add(_),a[y].add(_),a[E].add(_),l[N].add(u),l[y].add(u),l[E].add(u))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,y=b.length;N<y;++N){const E=b[N],R=E.start,G=E.count;for(let z=R,$=R+G;z<$;z+=3)c(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new U,M=new U,L=new U,C=new U;function A(N){L.fromBufferAttribute(s,N),C.copy(L);const y=a[N];w.copy(y),w.sub(L.multiplyScalar(L.dot(y))).normalize(),M.crossVectors(C,y);const R=M.dot(l[N])<0?-1:1;o.setXYZW(N,w.x,w.y,w.z,R)}for(let N=0,y=b.length;N<y;++N){const E=b[N],R=E.start,G=E.count;for(let z=R,$=R+G;z<$;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,h=new U,d=new U,f=new U;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,u),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,u),a.add(d),l.add(d),h.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(u,h.x,h.y,h.z)}else for(let p=0,m=n.count;p<m;p+=3)s.fromBufferAttribute(n,p+0),r.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)gt.fromBufferAttribute(e,n),gt.normalize(),e.setXYZ(n,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const h=a.array,d=a.itemSize,f=a.normalized,p=new h.constructor(l.length*d);let m=0,g=0;for(let _=0,u=l.length;_<u;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let c=0;c<d;c++)p[g++]=h[m++]}return new dn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=e(l,i);n.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let d=0,f=h.length;d<f;d++){const p=h[d],m=e(p,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],d=[];for(let f=0,p=h.length;f<p;f++){const m=h[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(n))}const r=e.morphAttributes;for(const h in r){const d=[],f=r[h];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(n));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new et,Qn=new Bc,Ys=new Pa,wl=new U,qs=new U,$s=new U,js=new U,ao=new U,Zs=new U,bl=new U,Ks=new U;class Ht extends Tt{constructor(e=new qn,n=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const d=a[l],f=r[l];d!==0&&(ao.fromBufferAttribute(f,e),o?Zs.addScaledVector(ao,d):Zs.addScaledVector(ao.sub(n),d))}n.add(Zs)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(Ys.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Ys,wl)===null||Qn.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(Sl.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(Sl),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qn)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const u=p[g],c=o[u.materialIndex],b=Math.max(u.start,m.start),w=Math.min(a.count,Math.min(u.start+u.count,m.start+m.count));for(let M=b,L=w;M<L;M+=3){const C=a.getX(M),A=a.getX(M+1),N=a.getX(M+2);s=Js(this,c,e,i,h,d,f,C,A,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,n.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let u=g,c=_;u<c;u+=3){const b=a.getX(u),w=a.getX(u+1),M=a.getX(u+2);s=Js(this,o,e,i,h,d,f,b,w,M),s&&(s.faceIndex=Math.floor(u/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const u=p[g],c=o[u.materialIndex],b=Math.max(u.start,m.start),w=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let M=b,L=w;M<L;M+=3){const C=M,A=M+1,N=M+2;s=Js(this,c,e,i,h,d,f,C,A,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,n.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let u=g,c=_;u<c;u+=3){const b=u,w=u+1,M=u+2;s=Js(this,o,e,i,h,d,f,b,w,M),s&&(s.faceIndex=Math.floor(u/3),n.push(s))}}}}function Lp(t,e,n,i,s,r,o,a){let l;if(e.side===It?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gn,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(t.matrixWorld);const h=n.ray.origin.distanceTo(Ks);return h<n.near||h>n.far?null:{distance:h,point:Ks.clone(),object:t}}function Js(t,e,n,i,s,r,o,a,l,h){t.getVertexPosition(a,qs),t.getVertexPosition(l,$s),t.getVertexPosition(h,js);const d=Lp(t,e,n,i,qs,$s,js,bl);if(d){const f=new U;tn.getBarycoord(bl,qs,$s,js,f),s&&(d.uv=tn.getInterpolatedAttribute(s,a,l,h,f,new qe)),r&&(d.uv1=tn.getInterpolatedAttribute(r,a,l,h,f,new qe)),o&&(d.normal=tn.getInterpolatedAttribute(o,a,l,h,f,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c:h,normal:new U,materialIndex:0};tn.getNormal(qs,$s,js,p.normal),d.face=p,d.barycoord=f}return d}class ws extends qn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],d=[],f=[];let p=0,m=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new un(h,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(f,2));function g(_,u,c,b,w,M,L,C,A,N,y){const E=M/A,R=L/N,G=M/2,z=L/2,$=C/2,j=A+1,X=N+1;let K=0,H=0;const ie=new U;for(let ue=0;ue<X;ue++){const Me=ue*R-z;for(let Ne=0;Ne<j;Ne++){const tt=Ne*E-G;ie[_]=tt*b,ie[u]=Me*w,ie[c]=$,h.push(ie.x,ie.y,ie.z),ie[_]=0,ie[u]=0,ie[c]=C>0?1:-1,d.push(ie.x,ie.y,ie.z),f.push(Ne/A),f.push(1-ue/N),K+=1}}for(let ue=0;ue<N;ue++)for(let Me=0;Me<A;Me++){const Ne=p+Me+j*ue,tt=p+Me+j*(ue+1),W=p+(Me+1)+j*(ue+1),ee=p+(Me+1)+j*ue;l.push(Ne,tt,ee),l.push(tt,W,ee),H+=6}a.addGroup(m,H,y),m+=H,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Rt(t){const e={};for(let n=0;n<t.length;n++){const i=Bi(t[n]);for(const s in i)e[s]=i[s]}return e}function Dp(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wc(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const Ip={clone:Bi,merge:Rt};var Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Xc extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Sn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new U,Tl=new qe,Al=new qe;class zt extends Xc{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,n){return this.getViewBounds(e,Tl,Al),n.subVectors(Al,Tl)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(es*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wi=-90,bi=1;class Op extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(wi,bi,e,n);s.layers=this.layers,this.add(s);const r=new zt(wi,bi,e,n);r.layers=this.layers,this.add(r);const o=new zt(wi,bi,e,n);o.layers=this.layers,this.add(o);const a=new zt(wi,bi,e,n);a.layers=this.layers,this.add(a);const l=new zt(wi,bi,e,n);l.layers=this.layers,this.add(l);const h=new zt(wi,bi,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const h of n)this.remove(h);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,h),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(n,d),e.setRenderTarget(f,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Yc extends yt{constructor(e=[],n=ki,i,s,r,o,a,l,h,d){super(e,n,i,s,r,o,a,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fp extends Wn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yc(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ws(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:kn});r.uniforms.tEquirect.value=n;const o=new Ht(s,r),a=n.minFilter;return n.minFilter===Fn&&(n.minFilter=Bt),new Op(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class li extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kp={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const u=n.getJointPose(_,i),c=this._getHandJoint(h,_);u!==null&&(c.matrix.fromArray(u.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=u.radius),c.visible=u!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,g=.005;h.inputState.pinching&&p>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class xr extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const co=new U,zp=new U,Bp=new De;class ii{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=co.subVectors(i,n).cross(zp.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(co),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Bp.getNormalMatrix(e),s=this.coplanarPoint(co).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Pa,Qs=new U;class Da{constructor(e=new ii,n=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Sn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],d=s[5],f=s[6],p=s[7],m=s[8],g=s[9],_=s[10],u=s[11],c=s[12],b=s[13],w=s[14],M=s[15];if(i[0].setComponents(l-r,p-h,u-m,M-c).normalize(),i[1].setComponents(l+r,p+h,u+m,M+c).normalize(),i[2].setComponents(l+o,p+d,u+g,M+b).normalize(),i[3].setComponents(l-o,p-d,u-g,M-b).normalize(),i[4].setComponents(l-a,p-f,u-_,M-w).normalize(),n===Sn)i[5].setComponents(l+a,p+f,u+_,M+w).normalize();else if(n===vr)i[5].setComponents(a,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ei.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Qs.x=s.normal.x>0?e.max.x:e.min.x,Qs.y=s.normal.y>0?e.max.y:e.min.y,Qs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hp extends yt{constructor(e,n,i,s,r=Bt,o=Bt,a,l,h){super(e,n,i,s,r,o,a,l,h),this.isVideoTexture=!0,this.generateMipmaps=!1;const d=this;function f(){d.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class qc extends yt{constructor(e,n,i=ci,s,r,o,a=sn,l=sn,h,d=gs){if(d!==gs&&d!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,d,i,h),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bs extends qn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),h=a+1,d=l+1,f=e/a,p=n/l,m=[],g=[],_=[],u=[];for(let c=0;c<d;c++){const b=c*p-o;for(let w=0;w<h;w++){const M=w*f-r;g.push(M,-b,0),_.push(0,0,1),u.push(w/a),u.push(1-c/l)}}for(let c=0;c<l;c++)for(let b=0;b<a;b++){const w=b+h*c,M=b+h*(c+1),L=b+1+h*(c+1),C=b+1+h*c;m.push(w,M,C),m.push(M,L,C)}this.setIndex(m),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ts extends qn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let h=0;const d=[],f=new U,p=new U,m=[],g=[],_=[],u=[];for(let c=0;c<=i;c++){const b=[],w=c/i;let M=0;c===0&&o===0?M=.5/n:c===i&&l===Math.PI&&(M=-.5/n);for(let L=0;L<=n;L++){const C=L/n;f.x=-e*Math.cos(s+C*r)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),u.push(C+M,1-w),b.push(h++)}d.push(b)}for(let c=0;c<i;c++)for(let b=0;b<n;b++){const w=d[c][b+1],M=d[c][b],L=d[c+1][b],C=d[c+1][b+1];(c!==0||o>0)&&m.push(w,M,C),(c!==i-1||l<Math.PI)&&m.push(M,L,C)}this.setIndex(m),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vp extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gp extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ra={enabled:!1};class Wp{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){const f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=h.length;f<p;f+=2){const m=h[f],g=h[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const Xp=new Wp;let Ia=class{constructor(e){this.manager=e!==void 0?e:Xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";class Yp extends Xc{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class qp extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Cl=new et;class $p{constructor(e,n,i=0,s=1/0){this.ray=new Bc(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new La,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(e,n=!0,i=[]){return oa(e,this,i,n),i.sort(Rl),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)oa(e[s],this,i,n);return i.sort(Rl),i}}function Rl(t,e){return t.distance-e.distance}function oa(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)oa(r[o],e,n,!0)}}function Pl(t,e,n,i){const s=jp(i);switch(n){case Pc:return t*e;case Dc:return t*e;case Ic:return t*e*2;case Uc:return t*e/s.components*s.byteLength;case ba:return t*e/s.components*s.byteLength;case Nc:return t*e*2/s.components*s.byteLength;case Ta:return t*e*2/s.components*s.byteLength;case Lc:return t*e*3/s.components*s.byteLength;case nn:return t*e*4/s.components*s.byteLength;case Aa:return t*e*4/s.components*s.byteLength;case or:case ar:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Oo:return Math.max(t,16)*Math.max(e,8)/4;case Io:case No:return Math.max(t,8)*Math.max(e,8)/2;case Fo:case ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Go:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qo:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $o:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case jo:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hr:case ea:case ta:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Oc:case na:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ia:case sa:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jp(t){switch(t){case Tn:case Ac:return{byteLength:1,components:1};case ps:case Cc:case ys:return{byteLength:2,components:1};case Sa:case wa:return{byteLength:2,components:4};case ci:case ya:case yn:return{byteLength:4,components:1};case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $c(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Zp(t){const e=new WeakMap;function n(a,l){const h=a.array,d=a.usage,f=h.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,h,d),a.onUploadCallback();let m;if(h instanceof Float32Array)m=t.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=t.SHORT;else if(h instanceof Uint32Array)m=t.UNSIGNED_INT;else if(h instanceof Int32Array)m=t.INT;else if(h instanceof Int8Array)m=t.BYTE;else if(h instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,h){const d=l.array,f=l.updateRanges;if(t.bindBuffer(h,a),f.length===0)t.bufferSubData(h,0,d);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){const g=f[p],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,f[p]=_)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];t.bufferSubData(h,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,n(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Qp=`#ifdef USE_ALPHAMAP
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
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
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
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
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
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Em=`#define PI 3.141592653589793
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
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,jm=`struct PhysicalMaterial {
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
}`,Zm=`
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
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
#endif`,ng=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ig=`#ifdef USE_MAP
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
#endif`,og=`#if defined( USE_POINTS_UV )
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
#endif`,ag=`float metalnessFactor = metalness;
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
#endif`,fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,xg=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,nv=`#include <common>
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
}`,iv=`#if DEPTH_PACKING == 3200
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,av=`uniform sampler2D tEquirect;
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
}`,fv=`#define LAMBERT
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
}`,pv=`#define MATCAP
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
}`,xv=`#define PHONG
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
}`,Ev=`#define STANDARD
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
}`,Mv=`#define STANDARD
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
}`,yv=`#define TOON
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
}`,Sv=`#define TOON
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
}`,wv=`uniform float size;
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
}`,Ue={alphahash_fragment:Kp,alphahash_pars_fragment:Jp,alphamap_fragment:Qp,alphamap_pars_fragment:em,alphatest_fragment:tm,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:om,begin_vertex:am,beginnormal_vertex:lm,bsdfs:cm,iridescence_fragment:hm,bumpmap_pars_fragment:dm,clipping_planes_fragment:um,clipping_planes_pars_fragment:fm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:vm,color_pars_vertex:_m,color_vertex:xm,common:Em,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Sm,displacementmap_vertex:wm,emissivemap_fragment:bm,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Cm,envmap_fragment:Rm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Lm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Gm,envmap_vertex:Im,fog_vertex:Um,fog_pars_vertex:Nm,fog_fragment:Om,fog_pars_fragment:Fm,gradientmap_pars_fragment:km,lightmap_pars_fragment:zm,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:Hm,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:Ym,lights_phong_pars_fragment:qm,lights_physical_fragment:$m,lights_physical_pars_fragment:jm,lights_fragment_begin:Zm,lights_fragment_maps:Km,lights_fragment_end:Jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:ng,map_fragment:ig,map_pars_fragment:sg,map_particle_fragment:rg,map_particle_pars_fragment:og,metalnessmap_fragment:ag,metalnessmap_pars_fragment:lg,morphinstance_vertex:cg,morphcolor_vertex:hg,morphnormal_vertex:dg,morphtarget_pars_vertex:ug,morphtarget_vertex:fg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:vg,normal_vertex:_g,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Sg,opaque_fragment:wg,packing:bg,premultiplied_alpha_fragment:Tg,project_vertex:Ag,dithering_fragment:Cg,dithering_pars_fragment:Rg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Dg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Ug,shadowmask_pars_fragment:Ng,skinbase_vertex:Og,skinning_pars_vertex:Fg,skinning_vertex:kg,skinnormal_vertex:zg,specularmap_fragment:Bg,specularmap_pars_fragment:Hg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Gg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:Yg,uv_pars_vertex:qg,uv_vertex:$g,worldpos_vertex:jg,background_vert:Zg,background_frag:Kg,backgroundCube_vert:Jg,backgroundCube_frag:Qg,cube_vert:ev,cube_frag:tv,depth_vert:nv,depth_frag:iv,distanceRGBA_vert:sv,distanceRGBA_frag:rv,equirect_vert:ov,equirect_frag:av,linedashed_vert:lv,linedashed_frag:cv,meshbasic_vert:hv,meshbasic_frag:dv,meshlambert_vert:uv,meshlambert_frag:fv,meshmatcap_vert:pv,meshmatcap_frag:mv,meshnormal_vert:gv,meshnormal_frag:vv,meshphong_vert:_v,meshphong_frag:xv,meshphysical_vert:Ev,meshphysical_frag:Mv,meshtoon_vert:yv,meshtoon_frag:Sv,points_vert:wv,points_frag:bv,shadow_vert:Tv,shadow_frag:Av,sprite_vert:Cv,sprite_frag:Rv},te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},cn={basic:{uniforms:Rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Rt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Rt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Rt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Rt([te.points,te.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Rt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Rt([te.common,te.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Rt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Rt([te.sprite,te.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Rt([te.common,te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Rt([te.lights,te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};cn.physical={uniforms:Rt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const er={r:0,b:0,g:0},ti=new fn,Pv=new et;function Lv(t,e,n,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,h,d,f=null,p=0,m=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?n:e).get(M)),M}function _(w){let M=!1;const L=g(w);L===null?c(a,l):L&&L.isColor&&(c(L,1),M=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function u(w,M){const L=g(M);L&&(L.isCubeTexture||L.mapping===Rr)?(d===void 0&&(d=new Ht(new ws(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Bi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ti.copy(M.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(ti)),d.material.toneMapped=We.getTransfer(L.colorSpace)!==Qe,(f!==L||p!==L.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=L,p=L.version,m=t.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Ht(new bs(2,2),new An({name:"BackgroundMaterial",uniforms:Bi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=We.getTransfer(L.colorSpace)!==Qe,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||p!==L.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,f=L,p=L.version,m=t.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function c(w,M){w.getRGB(er,Wc(t)),i.buffers.color.setClear(er.r,er.g,er.b,M,o)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,c(a,l)},render:_,addToRenderList:u,dispose:b}}function Dv(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function a(E,R,G,z,$){let j=!1;const X=f(z,G,R);r!==X&&(r=X,h(r.object)),j=m(E,z,G,$),j&&g(E,z,G,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(E,R,G,z),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function h(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function f(E,R,G){const z=G.wireframe===!0;let $=i[E.id];$===void 0&&($={},i[E.id]=$);let j=$[R.id];j===void 0&&(j={},$[R.id]=j);let X=j[z];return X===void 0&&(X=p(l()),j[z]=X),X}function p(E){const R=[],G=[],z=[];for(let $=0;$<n;$++)R[$]=0,G[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:z,object:E,attributes:{},index:null}}function m(E,R,G,z){const $=r.attributes,j=R.attributes;let X=0;const K=G.getAttributes();for(const H in K)if(K[H].location>=0){const ue=$[H];let Me=j[H];if(Me===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(E,R,G,z){const $={},j=R.attributes;let X=0;const K=G.getAttributes();for(const H in K)if(K[H].location>=0){let ue=j[H];ue===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor));const Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),$[H]=Me,X++}r.attributes=$,r.attributesNum=X,r.index=z}function _(){const E=r.newAttributes;for(let R=0,G=E.length;R<G;R++)E[R]=0}function u(E){c(E,0)}function c(E,R){const G=r.newAttributes,z=r.enabledAttributes,$=r.attributeDivisors;G[E]=1,z[E]===0&&(t.enableVertexAttribArray(E),z[E]=1),$[E]!==R&&(t.vertexAttribDivisor(E,R),$[E]=R)}function b(){const E=r.newAttributes,R=r.enabledAttributes;for(let G=0,z=R.length;G<z;G++)R[G]!==E[G]&&(t.disableVertexAttribArray(G),R[G]=0)}function w(E,R,G,z,$,j,X){X===!0?t.vertexAttribIPointer(E,R,G,$,j):t.vertexAttribPointer(E,R,G,z,$,j)}function M(E,R,G,z){_();const $=z.attributes,j=G.getAttributes(),X=R.defaultAttributeValues;for(const K in j){const H=j[K];if(H.location>=0){let ie=$[K];if(ie===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){const ue=ie.normalized,Me=ie.itemSize,Ne=e.get(ie);if(Ne===void 0)continue;const tt=Ne.buffer,W=Ne.type,ee=Ne.bytesPerElement,ve=W===t.INT||W===t.UNSIGNED_INT||ie.gpuType===ya;if(ie.isInterleavedBufferAttribute){const se=ie.data,be=se.stride,Ye=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)c(H.location+Ae,se.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)u(H.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let Ae=0;Ae<H.locationSize;Ae++)w(H.location+Ae,Me/H.locationSize,W,ue,be*ee,(Ye+Me/H.locationSize*Ae)*ee,ve)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)c(H.location+se,ie.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<H.locationSize;se++)u(H.location+se);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let se=0;se<H.locationSize;se++)w(H.location+se,Me/H.locationSize,W,ue,Me*ee,Me/H.locationSize*se*ee,ve)}}else if(X!==void 0){const ue=X[K];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(H.location,ue);break;case 3:t.vertexAttrib3fv(H.location,ue);break;case 4:t.vertexAttrib4fv(H.location,ue);break;default:t.vertexAttrib1fv(H.location,ue)}}}}b()}function L(){N();for(const E in i){const R=i[E];for(const G in R){const z=R[G];for(const $ in z)d(z[$].object),delete z[$];delete R[G]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const R=i[E.id];for(const G in R){const z=R[G];for(const $ in z)d(z[$].object),delete z[$];delete R[G]}delete i[E.id]}function A(E){for(const R in i){const G=i[R];if(G[E.id]===void 0)continue;const z=G[E.id];for(const $ in z)d(z[$].object),delete z[$];delete G[E.id]}}function N(){y(),o=!0,r!==s&&(r=s,h(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:u,disableUnusedAttributes:b}}function Iv(t,e,n){let i;function s(h){i=h}function r(h,d){t.drawArrays(i,h,d),n.update(d,i,1)}function o(h,d,f){f!==0&&(t.drawArraysInstanced(i,h,d,f),n.update(d,i,f))}function a(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=d[g];n.update(m,i,1)}function l(h,d,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)o(h[g],d[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,d,0,p,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_]*p[_];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Uv(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==nn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Tn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==yn&&!N)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),u=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:u,maxAttributes:c,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:L,maxSamples:C}}function Nv(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ii,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,m){const g=f.clippingPlanes,_=f.clipIntersection,u=f.clipShadows,c=t.get(f);if(!s||g===null||g.length===0||r&&!u)r?d(null):h();else{const b=r?0:i,w=b*4;let M=c.clippingState||null;l.value=M,M=d(g,p,w,m);for(let L=0;L!==w;++L)M[L]=n[L];c.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,m,g){const _=f!==null?f.length:0;let u=null;if(_!==0){if(u=l.value,g!==!0||u===null){const c=m+_*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(u===null||u.length<c)&&(u=new Float32Array(c));for(let w=0,M=m;w!==_;++w,M+=4)o.copy(f[w]).applyMatrix4(b,a),o.normal.toArray(u,M),u[M+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function Ov(t){let e=new WeakMap;function n(o,a){return a===Ro?o.mapping=ki:a===Po&&(o.mapping=zi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===Po)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Fp(l.height);return h.fromEquirectangularTexture(t,o),e.set(o,h),o.addEventListener("dispose",s),n(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Di=4,Ll=[.125,.215,.35,.446,.526,.582],oi=20,ho=new Yp,Dl=new Je;let uo=null,fo=0,po=0,mo=!1;const si=(1+Math.sqrt(5))/2,Ti=1/si,Il=[new U(-si,Ti,0),new U(si,Ti,0),new U(-Ti,0,si),new U(Ti,0,si),new U(0,si,-Ti),new U(0,si,Ti),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Fv=new U;class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=Fv}=r;uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ki||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ys,format:nn,colorSpace:hi,depthBuffer:!1},s=Nl(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kv(r)),this._blurMaterial=zv(r,e,n)}return s}_compileMaterial(e){const n=new Ht(this._lodPlanes[0],e);this._renderer.compile(n,ho)}_sceneToCubeUV(e,n,i,s,r){const l=new zt(90,1,n,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Dl),f.toneMapping=zn,f.autoClear=!1;const g=new Ss({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),_=new Ht(new ws,g);let u=!1;const c=e.background;c?c.isColor&&(g.color.copy(c),e.background=null,u=!0):(g.color.copy(Dl),u=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[b],r.y,r.z)):w===1?(l.up.set(0,0,h[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[b],r.z)):(l.up.set(0,h[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[b]));const M=this._cubeSize;tr(s,w*M,b>2?M:0,M,M),f.setRenderTarget(s),u&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=c}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===ki||e.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;tr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ho)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Il[(s-r-1)%Il.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ht(this._lodPlanes[s],h),p=h.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*oi-1),_=r/g,u=isFinite(r)?1+Math.floor(d*_):oi;u>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${oi}`);const c=[];let b=0;for(let A=0;A<oi;++A){const N=A/_,y=Math.exp(-N*N/2);c.push(y),A===0?b+=y:A<u&&(b+=2*y)}for(let A=0;A<c.length;A++)c[A]=c[A]/b;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=c,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:w}=this;p.dTheta.value=g,p.mipInt.value=w-i;const M=this._sizeLods[s],L=3*M*(s>w-Di?s-w+Di:0),C=4*(this._cubeSize-M);tr(n,L,C,3*M,2*M),l.setRenderTarget(n),l.render(f,ho)}}function kv(t){const e=[],n=[],i=[];let s=t;const r=t-Di+1+Ll.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Di?l=Ll[o-t+Di-1]:o===0&&(l=0),i.push(l);const h=1/(a-2),d=-h,f=1+h,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,g=6,_=3,u=2,c=1,b=new Float32Array(_*g*m),w=new Float32Array(u*g*m),M=new Float32Array(c*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,N=C>2?0:-1,y=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];b.set(y,_*g*C),w.set(p,u*g*C);const E=[C,C,C,C,C,C];M.set(E,c*g*C)}const L=new qn;L.setAttribute("position",new dn(b,_)),L.setAttribute("uv",new dn(w,u)),L.setAttribute("faceIndex",new dn(M,c)),e.push(L),s>Di&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Nl(t,e,n){const i=new Wn(t,e,n);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function zv(t,e,n){const i=new Float32Array(oi),s=new U(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ol(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Fl(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function Bv(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===Ro||l===Po,d=l===ki||l===zi;if(h||d){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new Ul(t)),f=h?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return h&&m&&m.height>0||d&&m&&s(m)?(n===null&&(n=new Ul(t)),f=h?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Hv(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vv(t,e,n,i){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const m in p)e.update(p[m],t.ARRAY_BUFFER)}function h(f){const p=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let w=0,M=b.length;w<M;w+=3){const L=b[w+0],C=b[w+1],A=b[w+2];p.push(L,C,C,A,A,L)}}else if(g!==void 0){const b=g.array;_=g.version;for(let w=0,M=b.length/3-1;w<M;w+=3){const L=w+0,C=w+1,A=w+2;p.push(L,C,C,A,A,L)}}else return;const u=new(kc(p)?Gc:Vc)(p,1);u.version=_;const c=r.get(f);c&&e.remove(c),r.set(f,u)}function d(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&h(f)}else h(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Gv(t,e,n){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){t.drawElements(i,m,r,p*o),n.update(m,i,1)}function h(p,m,g){g!==0&&(t.drawElementsInstanced(i,m,r,p*o,g),n.update(m,i,g))}function d(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,g);let u=0;for(let c=0;c<g;c++)u+=m[c];n.update(u,i,1)}function f(p,m,g,_){if(g===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let c=0;c<p.length;c++)h(p[c]/o,m[c],_[c]);else{u.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,_,0,g);let c=0;for(let b=0;b<g;b++)c+=m[b]*_[b];n.update(c,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Wv(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Xv(t,e,n){const i=new WeakMap,s=new ht;function r(o,a,l){const h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let E=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,u=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),u===!0&&(M=3);let L=a.attributes.position.count*M,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*f),N=new zc(A,L,C,f);N.type=yn,N.needsUpdate=!0;const y=M*4;for(let R=0;R<f;R++){const G=c[R],z=b[R],$=w[R],j=L*C*4*R;for(let X=0;X<G.count;X++){const K=X*y;g===!0&&(s.fromBufferAttribute(G,X),A[j+K+0]=s.x,A[j+K+1]=s.y,A[j+K+2]=s.z,A[j+K+3]=0),_===!0&&(s.fromBufferAttribute(z,X),A[j+K+4]=s.x,A[j+K+5]=s.y,A[j+K+6]=s.z,A[j+K+7]=0),u===!0&&(s.fromBufferAttribute($,X),A[j+K+8]=s.x,A[j+K+9]=s.y,A[j+K+10]=s.z,A[j+K+11]=$.itemSize===4?s.w:1)}}p={count:f,texture:N,size:new qe(L,C)},i.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let u=0;u<h.length;u++)g+=h[u];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",h)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:r}}function Yv(t,e,n,i){let s=new WeakMap;function r(l){const h=i.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const jc=new yt,kl=new qc(1,1),Zc=new zc,Kc=new Ep,Jc=new Yc,zl=[],Bl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Gl=new Float32Array(4);function Wi(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=zl[s];if(r===void 0&&(r=new Float32Array(s),zl[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lr(t,e){let n=Bl[e];n===void 0&&(n=new Int32Array(e),Bl[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $v(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pt(n,e))return;t.uniform2fv(this.addr,e),mt(n,e)}}function jv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(pt(n,e))return;t.uniform3fv(this.addr,e),mt(n,e)}}function Zv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pt(n,e))return;t.uniform4fv(this.addr,e),mt(n,e)}}function Kv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),mt(n,e)}else{if(pt(n,i))return;Gl.set(i),t.uniformMatrix2fv(this.addr,!1,Gl),mt(n,i)}}function Jv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),mt(n,e)}else{if(pt(n,i))return;Vl.set(i),t.uniformMatrix3fv(this.addr,!1,Vl),mt(n,i)}}function Qv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),mt(n,e)}else{if(pt(n,i))return;Hl.set(i),t.uniformMatrix4fv(this.addr,!1,Hl),mt(n,i)}}function e_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function t_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pt(n,e))return;t.uniform2iv(this.addr,e),mt(n,e)}}function n_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pt(n,e))return;t.uniform3iv(this.addr,e),mt(n,e)}}function i_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pt(n,e))return;t.uniform4iv(this.addr,e),mt(n,e)}}function s_(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function r_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(pt(n,e))return;t.uniform2uiv(this.addr,e),mt(n,e)}}function o_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(pt(n,e))return;t.uniform3uiv(this.addr,e),mt(n,e)}}function a_(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(pt(n,e))return;t.uniform4uiv(this.addr,e),mt(n,e)}}function l_(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(kl.compareFunction=Fc,r=kl):r=jc,n.setTexture2D(e||r,s)}function c_(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Kc,s)}function h_(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Jc,s)}function d_(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Zc,s)}function u_(t){switch(t){case 5126:return qv;case 35664:return $v;case 35665:return jv;case 35666:return Zv;case 35674:return Kv;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return d_}}function f_(t,e){t.uniform1fv(this.addr,e)}function p_(t,e){const n=Wi(e,this.size,2);t.uniform2fv(this.addr,n)}function m_(t,e){const n=Wi(e,this.size,3);t.uniform3fv(this.addr,n)}function g_(t,e){const n=Wi(e,this.size,4);t.uniform4fv(this.addr,n)}function v_(t,e){const n=Wi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function __(t,e){const n=Wi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function x_(t,e){const n=Wi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function E_(t,e){t.uniform1iv(this.addr,e)}function M_(t,e){t.uniform2iv(this.addr,e)}function y_(t,e){t.uniform3iv(this.addr,e)}function S_(t,e){t.uniform4iv(this.addr,e)}function w_(t,e){t.uniform1uiv(this.addr,e)}function b_(t,e){t.uniform2uiv(this.addr,e)}function T_(t,e){t.uniform3uiv(this.addr,e)}function A_(t,e){t.uniform4uiv(this.addr,e)}function C_(t,e,n){const i=this.cache,s=e.length,r=Lr(n,s);pt(i,r)||(t.uniform1iv(this.addr,r),mt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||jc,r[o])}function R_(t,e,n){const i=this.cache,s=e.length,r=Lr(n,s);pt(i,r)||(t.uniform1iv(this.addr,r),mt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Kc,r[o])}function P_(t,e,n){const i=this.cache,s=e.length,r=Lr(n,s);pt(i,r)||(t.uniform1iv(this.addr,r),mt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Jc,r[o])}function L_(t,e,n){const i=this.cache,s=e.length,r=Lr(n,s);pt(i,r)||(t.uniform1iv(this.addr,r),mt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Zc,r[o])}function D_(t){switch(t){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return v_;case 35675:return __;case 35676:return x_;case 5124:case 35670:return E_;case 35667:case 35671:return M_;case 35668:case 35672:return y_;case 35669:case 35673:return S_;case 5125:return w_;case 36294:return b_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}class I_{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=u_(n.type)}}class U_{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D_(n.type)}}class N_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const go=/(\w+)(\])?(\[|\.)?/g;function Wl(t,e){t.seq.push(e),t.map[e.id]=e}function O_(t,e,n){const i=t.name,s=i.length;for(go.lastIndex=0;;){const r=go.exec(i),o=go.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Wl(n,h===void 0?new I_(a,t,e):new U_(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new N_(a),Wl(n,f)),n=f}}}class ur{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);O_(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Xl(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const F_=37297;let k_=0;function z_(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Yl=new De;function B_(t){We._getMatrix(Yl,We.workingColorSpace,t);const e=`mat3( ${Yl.elements.map(n=>n.toFixed(4))} )`;switch(We.getTransfer(t)){case gr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ql(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+z_(t.getShaderSource(e),o)}else return s}function H_(t,e){const n=B_(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function V_(t,e){let n;switch(e){case bc:n="Linear";break;case Lf:n="Reinhard";break;case Df:n="Cineon";break;case If:n="ACESFilmic";break;case Nf:n="AgX";break;case Of:n="Neutral";break;case Uf:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nr=new U;function G_(){We.getLuminanceCoefficients(nr);const t=nr.x.toFixed(4),e=nr.y.toFixed(4),n=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function X_(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Y_(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ji(t){return t!==""}function $l(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(t){return t.replace(q_,j_)}const $_=new Map;function j_(t,e){let n=Ue[e];if(n===void 0){const i=$_.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return aa(n)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(t){return t.replace(Z_,K_)}function K_(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kl(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function J_(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Sc?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function Q_(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ki:case zi:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e0(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function t0(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wc:e="ENVMAP_BLENDING_MULTIPLY";break;case Rf:e="ENVMAP_BLENDING_MIX";break;case Pf:e="ENVMAP_BLENDING_ADD";break}return e}function n0(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function i0(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=J_(n),h=Q_(n),d=e0(n),f=t0(n),p=n0(n),m=W_(n),g=X_(r),_=s.createProgram();let u,c,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ji).join(`
`),u.length>0&&(u+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ji).join(`
`),c.length>0&&(c+=`
`)):(u=[Kl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),c=[Kl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zn?"#define TONE_MAPPING":"",n.toneMapping!==zn?Ue.tonemapping_pars_fragment:"",n.toneMapping!==zn?V_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,H_("linearToOutputTexel",n.outputColorSpace),G_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ji).join(`
`)),o=aa(o),o=$l(o,n),o=jl(o,n),a=aa(a),a=$l(a,n),a=jl(a,n),o=Zl(o),a=Zl(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,c=["#define varying in",n.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const w=b+u+o,M=b+c+a,L=Xl(s,s.VERTEX_SHADER,w),C=Xl(s,s.FRAGMENT_SHADER,M);s.attachShader(_,L),s.attachShader(_,C),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(t.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(L).trim(),$=s.getShaderInfoLog(C).trim();let j=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,L,C);else{const K=ql(s,L,"vertex"),H=ql(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+K+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||$==="")&&(X=!1);X&&(R.diagnostics={runnable:j,programLog:G,vertexShader:{log:z,prefix:u},fragmentShader:{log:$,prefix:c}})}s.deleteShader(L),s.deleteShader(C),N=new ur(s,_),y=Y_(s,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,F_)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let s0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new o0(e),n.set(e,i)),i}}class o0{constructor(e){this.id=s0++,this.code=e,this.usedTimes=0}}function a0(t,e,n,i,s,r,o){const a=new La,l=new r0,h=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return h.add(y),y===0?"uv":`uv${y}`}function u(y,E,R,G,z){const $=G.fog,j=z.geometry,X=y.isMeshStandardMaterial?G.environment:null,K=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),H=K&&K.mapping===Rr?K.image.height:null,ie=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Me=ue!==void 0?ue.length:0;let Ne=0;j.morphAttributes.position!==void 0&&(Ne=1),j.morphAttributes.normal!==void 0&&(Ne=2),j.morphAttributes.color!==void 0&&(Ne=3);let tt,W,ee,ve;if(ie){const Ke=cn[ie];tt=Ke.vertexShader,W=Ke.fragmentShader}else tt=y.vertexShader,W=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const se=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Ye=z.isInstancedMesh===!0,Ae=z.isBatchedMesh===!0,ct=!!y.map,ot=!!y.matcap,ke=!!K,T=!!y.aoMap,Vt=!!y.lightMap,He=!!y.bumpMap,ze=!!y.normalMap,ye=!!y.displacementMap,it=!!y.emissiveMap,Ee=!!y.metalnessMap,S=!!y.roughnessMap,v=y.anisotropy>0,O=y.clearcoat>0,Y=y.dispersion>0,Z=y.iridescence>0,V=y.sheen>0,xe=y.transmission>0,re=v&&!!y.anisotropyMap,fe=O&&!!y.clearcoatMap,Ve=O&&!!y.clearcoatNormalMap,Q=O&&!!y.clearcoatRoughnessMap,pe=Z&&!!y.iridescenceMap,Te=Z&&!!y.iridescenceThicknessMap,Re=V&&!!y.sheenColorMap,me=V&&!!y.sheenRoughnessMap,Be=!!y.specularMap,Ie=!!y.specularColorMap,nt=!!y.specularIntensityMap,P=xe&&!!y.transmissionMap,oe=xe&&!!y.thicknessMap,B=!!y.gradientMap,q=!!y.alphaMap,ce=y.alphaTest>0,ae=!!y.alphaHash,Le=!!y.extensions;let at=zn;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(at=t.toneMapping);const St={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:tt,fragmentShader:W,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,instancingMorph:Ye&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:hi,alphaToCoverage:!!y.alphaToCoverage,map:ct,matcap:ot,envMap:ke,envMapMode:ke&&K.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:Vt,bumpMap:He,normalMap:ze,displacementMap:p&&ye,emissiveMap:it,normalMapObjectSpace:ze&&y.normalMapType===Hf,normalMapTangentSpace:ze&&y.normalMapType===Bf,metalnessMap:Ee,roughnessMap:S,anisotropy:v,anisotropyMap:re,clearcoat:O,clearcoatMap:fe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:Z,iridescenceMap:pe,iridescenceThicknessMap:Te,sheen:V,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Be,specularColorMap:Ie,specularIntensityMap:nt,transmission:xe,transmissionMap:P,thicknessMap:oe,gradientMap:B,opaque:y.transparent===!1&&y.blending===Ui&&y.alphaToCoverage===!1,alphaMap:q,alphaTest:ce,alphaHash:ae,combine:y.combine,mapUv:ct&&_(y.map.channel),aoMapUv:T&&_(y.aoMap.channel),lightMapUv:Vt&&_(y.lightMap.channel),bumpMapUv:He&&_(y.bumpMap.channel),normalMapUv:ze&&_(y.normalMap.channel),displacementMapUv:ye&&_(y.displacementMap.channel),emissiveMapUv:it&&_(y.emissiveMap.channel),metalnessMapUv:Ee&&_(y.metalnessMap.channel),roughnessMapUv:S&&_(y.roughnessMap.channel),anisotropyMapUv:re&&_(y.anisotropyMap.channel),clearcoatMapUv:fe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(y.sheenRoughnessMap.channel),specularMapUv:Be&&_(y.specularMap.channel),specularColorMapUv:Ie&&_(y.specularColorMap.channel),specularIntensityMapUv:nt&&_(y.specularIntensityMap.channel),transmissionMapUv:P&&_(y.transmissionMap.channel),thicknessMapUv:oe&&_(y.thicknessMap.channel),alphaMapUv:q&&_(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ze||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(ct||q),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:at,decodeVideoTexture:ct&&y.map.isVideoTexture===!0&&We.getTransfer(y.map.colorSpace)===Qe,decodeVideoTextureEmissive:it&&y.emissiveMap.isVideoTexture===!0&&We.getTransfer(y.emissiveMap.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===It,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return St.vertexUv1s=h.has(1),St.vertexUv2s=h.has(2),St.vertexUv3s=h.has(3),h.clear(),St}function c(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(E,y),w(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function b(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function w(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const E=g[y.type];let R;if(E){const G=cn[E];R=Ip.clone(G.uniforms)}else R=y.uniforms;return R}function L(y,E){let R;for(let G=0,z=d.length;G<z;G++){const $=d[G];if($.cacheKey===E){R=$,++R.usedTimes;break}}return R===void 0&&(R=new i0(t,E,y,r),d.push(R)),R}function C(y){if(--y.usedTimes===0){const E=d.indexOf(y);d[E]=d[d.length-1],d.pop(),y.destroy()}}function A(y){l.remove(y)}function N(){l.dispose()}return{getParameters:u,getProgramCacheKey:c,getUniforms:M,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:N}}function l0(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function c0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jl(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ql(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,p,m,g,_,u){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:u},t[e]=c):(c.id=f.id,c.object=f,c.geometry=p,c.material=m,c.groupOrder=g,c.renderOrder=f.renderOrder,c.z=_,c.group=u),e++,c}function a(f,p,m,g,_,u){const c=o(f,p,m,g,_,u);m.transmission>0?i.push(c):m.transparent===!0?s.push(c):n.push(c)}function l(f,p,m,g,_,u){const c=o(f,p,m,g,_,u);m.transmission>0?i.unshift(c):m.transparent===!0?s.unshift(c):n.unshift(c)}function h(f,p){n.length>1&&n.sort(f||c0),i.length>1&&i.sort(p||Jl),s.length>1&&s.sort(p||Jl)}function d(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:h}}function h0(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Ql,t.set(i,[o])):s>=r.length?(o=new Ql,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function d0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Je};break;case"SpotLight":n={position:new U,direction:new U,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function u0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let f0=0;function p0(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function m0(t){const e=new d0,n=u0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const s=new U,r=new et,o=new et;function a(h){let d=0,f=0,p=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,_=0,u=0,c=0,b=0,w=0,M=0,L=0,C=0,A=0;h.sort(p0);for(let y=0,E=h.length;y<E;y++){const R=h[y],G=R.color,z=R.intensity,$=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=G.r*z,f+=G.g*z,p+=G.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],z);A++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,H=n.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=X,m++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=$,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[_]=X;const K=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,K.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[_]=K.matrix,R.castShadow){const H=n.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=j,M++}_++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[u]=X,u++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const K=R.shadow,H=n.get(R);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=R.shadow.matrix,w++}i.point[g]=X,g++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[c]=X,c++}}u>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==u||N.hemiLength!==c||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==M||N.numSpotMaps!==L||N.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=u,i.point.length=g,i.hemi.length=c,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=u,N.hemiLength=c,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=M,N.numSpotMaps=L,N.numLightProbes=A,i.version=f0++)}function l(h,d){let f=0,p=0,m=0,g=0,_=0;const u=d.matrixWorldInverse;for(let c=0,b=h.length;c<b;c++){const w=h[c];if(w.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),f++}else if(w.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),m++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(u),o.identity(),r.copy(w.matrixWorld),r.premultiply(u),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(u),p++}else if(w.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(u),_++}}}return{setup:a,setupView:l,state:i}}function ec(t){const e=new m0(t),n=[],i=[];function s(d){h.camera=d,n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function g0(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ec(t),e.set(s,[a])):r>=o.length?(a=new ec(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
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
}`;function x0(t,e,n){let i=new Da;const s=new qe,r=new qe,o=new ht,a=new Vp({depthPacking:zf}),l=new Gp,h={},d=n.maxTextureSize,f={[Gn]:It,[It]:Gn,[Mn]:Mn},p=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:v0,fragmentShader:_0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new qn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let c=this.type;this.render=function(C,A,N){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||C.length===0)return;const y=t.getRenderTarget(),E=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),G=t.state;G.setBlending(kn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=c!==En&&this.type===En,$=c===En&&this.type!==En;for(let j=0,X=C.length;j<X;j++){const K=C[j],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ie=H.getFrameExtents();if(s.multiply(ie),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ie.x),s.x=r.x*ie.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ie.y),s.y=r.y*ie.y,H.mapSize.y=r.y)),H.map===null||z===!0||$===!0){const Me=this.type!==En?{minFilter:sn,magFilter:sn}:{};H.map!==null&&H.map.dispose(),H.map=new Wn(s.x,s.y,Me),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const ue=H.getViewportCount();for(let Me=0;Me<ue;Me++){const Ne=H.getViewport(Me);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),G.viewport(o),H.updateMatrices(K,Me),i=H.getFrustum(),M(A,N,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===En&&b(H,N),H.needsUpdate=!1}c=this.type,u.needsUpdate=!1,t.setRenderTarget(y,E,R)};function b(C,A){const N=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wn(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,N,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,N,m,_,null)}function w(C,A,N,y){let E=null;const R=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)E=R;else if(E=N.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=E.uuid,z=A.uuid;let $=h[G];$===void 0&&($={},h[G]=$);let j=$[z];j===void 0&&(j=E.clone(),$[z]=j,A.addEventListener("dispose",L)),E=j}if(E.visible=A.visible,E.wireframe=A.wireframe,y===En?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=t.properties.get(E);G.light=N}return E}function M(C,A,N,y,E){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===En)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const z=e.update(C),$=C.material;if(Array.isArray($)){const j=z.groups;for(let X=0,K=j.length;X<K;X++){const H=j[X],ie=$[H.materialIndex];if(ie&&ie.visible){const ue=w(C,ie,y,E);C.onBeforeShadow(t,C,A,N,z,ue,H),t.renderBufferDirect(N,null,z,ue,C,H),C.onAfterShadow(t,C,A,N,z,ue,H)}}}else if($.visible){const j=w(C,$,y,E);C.onBeforeShadow(t,C,A,N,z,j,null),t.renderBufferDirect(N,null,z,j,C,null),C.onAfterShadow(t,C,A,N,z,j,null)}}const G=C.children;for(let z=0,$=G.length;z<$;z++)M(G[z],A,N,y,E)}function L(C){C.target.removeEventListener("dispose",L);for(const N in h){const y=h[N],E=C.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const E0={[yo]:So,[wo]:Ao,[bo]:Co,[Fi]:To,[So]:yo,[Ao]:wo,[Co]:bo,[To]:Fi};function M0(t,e){function n(){let P=!1;const oe=new ht;let B=null;const q=new ht(0,0,0,0);return{setMask:function(ce){B!==ce&&!P&&(t.colorMask(ce,ce,ce,ce),B=ce)},setLocked:function(ce){P=ce},setClear:function(ce,ae,Le,at,St){St===!0&&(ce*=at,ae*=at,Le*=at),oe.set(ce,ae,Le,at),q.equals(oe)===!1&&(t.clearColor(ce,ae,Le,at),q.copy(oe))},reset:function(){P=!1,B=null,q.set(-1,0,0,0)}}}function i(){let P=!1,oe=!1,B=null,q=null,ce=null;return{setReversed:function(ae){if(oe!==ae){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),oe=ae;const at=ce;ce=null,this.setClear(at)}},getReversed:function(){return oe},setTest:function(ae){ae?se(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(ae){B!==ae&&!P&&(t.depthMask(ae),B=ae)},setFunc:function(ae){if(oe&&(ae=E0[ae]),q!==ae){switch(ae){case yo:t.depthFunc(t.NEVER);break;case So:t.depthFunc(t.ALWAYS);break;case wo:t.depthFunc(t.LESS);break;case Fi:t.depthFunc(t.LEQUAL);break;case bo:t.depthFunc(t.EQUAL);break;case To:t.depthFunc(t.GEQUAL);break;case Ao:t.depthFunc(t.GREATER);break;case Co:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=ae}},setLocked:function(ae){P=ae},setClear:function(ae){ce!==ae&&(oe&&(ae=1-ae),t.clearDepth(ae),ce=ae)},reset:function(){P=!1,B=null,q=null,ce=null,oe=!1}}}function s(){let P=!1,oe=null,B=null,q=null,ce=null,ae=null,Le=null,at=null,St=null;return{setTest:function(Ke){P||(Ke?se(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!P&&(t.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,jt,pn){(B!==Ke||q!==jt||ce!==pn)&&(t.stencilFunc(Ke,jt,pn),B=Ke,q=jt,ce=pn)},setOp:function(Ke,jt,pn){(ae!==Ke||Le!==jt||at!==pn)&&(t.stencilOp(Ke,jt,pn),ae=Ke,Le=jt,at=pn)},setLocked:function(Ke){P=Ke},setClear:function(Ke){St!==Ke&&(t.clearStencil(Ke),St=Ke)},reset:function(){P=!1,oe=null,B=null,q=null,ce=null,ae=null,Le=null,at=null,St=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,h=new WeakMap;let d={},f={},p=new WeakMap,m=[],g=null,_=!1,u=null,c=null,b=null,w=null,M=null,L=null,C=null,A=new Je(0,0,0),N=0,y=!1,E=null,R=null,G=null,z=null,$=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let ie=null,ue={};const Me=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),tt=new ht().fromArray(Me),W=new ht().fromArray(Ne);function ee(P,oe,B,q){const ce=new Uint8Array(4),ae=t.createTexture();t.bindTexture(P,ae),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<B;Le++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(oe+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ae}const ve={};ve[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(Fi),He(!1),ze(il),se(t.CULL_FACE),T(kn);function se(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function be(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function Ye(P,oe){return f[P]!==oe?(t.bindFramebuffer(P,oe),f[P]=oe,P===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=oe),P===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ae(P,oe){let B=m,q=!1;if(P){B=p.get(oe),B===void 0&&(B=[],p.set(oe,B));const ce=P.textures;if(B.length!==ce.length||B[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Le=ce.length;ae<Le;ae++)B[ae]=t.COLOR_ATTACHMENT0+ae;B.length=ce.length,q=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,q=!0);q&&t.drawBuffers(B)}function ct(P){return g!==P?(t.useProgram(P),g=P,!0):!1}const ot={[ri]:t.FUNC_ADD,[uf]:t.FUNC_SUBTRACT,[ff]:t.FUNC_REVERSE_SUBTRACT};ot[pf]=t.MIN,ot[mf]=t.MAX;const ke={[gf]:t.ZERO,[vf]:t.ONE,[_f]:t.SRC_COLOR,[Eo]:t.SRC_ALPHA,[wf]:t.SRC_ALPHA_SATURATE,[yf]:t.DST_COLOR,[Ef]:t.DST_ALPHA,[xf]:t.ONE_MINUS_SRC_COLOR,[Mo]:t.ONE_MINUS_SRC_ALPHA,[Sf]:t.ONE_MINUS_DST_COLOR,[Mf]:t.ONE_MINUS_DST_ALPHA,[bf]:t.CONSTANT_COLOR,[Tf]:t.ONE_MINUS_CONSTANT_COLOR,[Af]:t.CONSTANT_ALPHA,[Cf]:t.ONE_MINUS_CONSTANT_ALPHA};function T(P,oe,B,q,ce,ae,Le,at,St,Ke){if(P===kn){_===!0&&(be(t.BLEND),_=!1);return}if(_===!1&&(se(t.BLEND),_=!0),P!==df){if(P!==u||Ke!==y){if((c!==ri||M!==ri)&&(t.blendEquation(t.FUNC_ADD),c=ri,M=ri),Ke)switch(P){case Ui:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sl:t.blendFunc(t.ONE,t.ONE);break;case rl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ol:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ui:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ol:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,w=null,L=null,C=null,A.set(0,0,0),N=0,u=P,y=Ke}return}ce=ce||oe,ae=ae||B,Le=Le||q,(oe!==c||ce!==M)&&(t.blendEquationSeparate(ot[oe],ot[ce]),c=oe,M=ce),(B!==b||q!==w||ae!==L||Le!==C)&&(t.blendFuncSeparate(ke[B],ke[q],ke[ae],ke[Le]),b=B,w=q,L=ae,C=Le),(at.equals(A)===!1||St!==N)&&(t.blendColor(at.r,at.g,at.b,St),A.copy(at),N=St),u=P,y=!1}function Vt(P,oe){P.side===Mn?be(t.CULL_FACE):se(t.CULL_FACE);let B=P.side===It;oe&&(B=!B),He(B),P.blending===Ui&&P.transparent===!1?T(kn):T(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const q=P.stencilWrite;a.setTest(q),q&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),it(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){E!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),E=P)}function ze(P){P!==lf?(se(t.CULL_FACE),P!==R&&(P===il?t.cullFace(t.BACK):P===cf?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),R=P}function ye(P){P!==G&&(X&&t.lineWidth(P),G=P)}function it(P,oe,B){P?(se(t.POLYGON_OFFSET_FILL),(z!==oe||$!==B)&&(t.polygonOffset(oe,B),z=oe,$=B)):be(t.POLYGON_OFFSET_FILL)}function Ee(P){P?se(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function S(P){P===void 0&&(P=t.TEXTURE0+j-1),ie!==P&&(t.activeTexture(P),ie=P)}function v(P,oe,B){B===void 0&&(ie===null?B=t.TEXTURE0+j-1:B=ie);let q=ue[B];q===void 0&&(q={type:void 0,texture:void 0},ue[B]=q),(q.type!==P||q.texture!==oe)&&(ie!==B&&(t.activeTexture(B),ie=B),t.bindTexture(P,oe||ve[P]),q.type=P,q.texture=oe)}function O(){const P=ue[ie];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{t.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{t.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{t.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{t.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{t.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{t.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{t.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){tt.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function me(P){W.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function Be(P,oe){let B=h.get(oe);B===void 0&&(B=new WeakMap,h.set(oe,B));let q=B.get(P);q===void 0&&(q=t.getUniformBlockIndex(oe,P.name),B.set(P,q))}function Ie(P,oe){const q=h.get(oe).get(P);l.get(oe)!==q&&(t.uniformBlockBinding(oe,q,P.__bindingPointIndex),l.set(oe,q))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ie=null,ue={},f={},p=new WeakMap,m=[],g=null,_=!1,u=null,c=null,b=null,w=null,M=null,L=null,C=null,A=new Je(0,0,0),N=0,y=!1,E=null,R=null,G=null,z=null,$=null,tt.set(0,0,t.canvas.width,t.canvas.height),W.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:be,bindFramebuffer:Ye,drawBuffers:Ae,useProgram:ct,setBlending:T,setMaterial:Vt,setFlipSided:He,setCullFace:ze,setLineWidth:ye,setPolygonOffset:it,setScissorTest:Ee,activeTexture:S,bindTexture:v,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:pe,texImage3D:Te,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:V,texSubImage3D:xe,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:Re,viewport:me,reset:nt}}function y0(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return m?new OffscreenCanvas(S,v):_r("canvas")}function _(S,v,O){let Y=1;const Z=Ee(S);if((Z.width>O||Z.height>O)&&(Y=O/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const V=Math.floor(Y*Z.width),xe=Math.floor(Y*Z.height);f===void 0&&(f=g(V,xe));const re=v?g(V,xe):f;return re.width=V,re.height=xe,re.getContext("2d").drawImage(S,0,0,V,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+xe+")."),re}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function u(S){return S.generateMipmaps}function c(S){t.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(S,v,O,Y,Z=!1){if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V=v;if(v===t.RED&&(O===t.FLOAT&&(V=t.R32F),O===t.HALF_FLOAT&&(V=t.R16F),O===t.UNSIGNED_BYTE&&(V=t.R8)),v===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(V=t.R8UI),O===t.UNSIGNED_SHORT&&(V=t.R16UI),O===t.UNSIGNED_INT&&(V=t.R32UI),O===t.BYTE&&(V=t.R8I),O===t.SHORT&&(V=t.R16I),O===t.INT&&(V=t.R32I)),v===t.RG&&(O===t.FLOAT&&(V=t.RG32F),O===t.HALF_FLOAT&&(V=t.RG16F),O===t.UNSIGNED_BYTE&&(V=t.RG8)),v===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(V=t.RG8UI),O===t.UNSIGNED_SHORT&&(V=t.RG16UI),O===t.UNSIGNED_INT&&(V=t.RG32UI),O===t.BYTE&&(V=t.RG8I),O===t.SHORT&&(V=t.RG16I),O===t.INT&&(V=t.RG32I)),v===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(V=t.RGB8UI),O===t.UNSIGNED_SHORT&&(V=t.RGB16UI),O===t.UNSIGNED_INT&&(V=t.RGB32UI),O===t.BYTE&&(V=t.RGB8I),O===t.SHORT&&(V=t.RGB16I),O===t.INT&&(V=t.RGB32I)),v===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),O===t.UNSIGNED_INT&&(V=t.RGBA32UI),O===t.BYTE&&(V=t.RGBA8I),O===t.SHORT&&(V=t.RGBA16I),O===t.INT&&(V=t.RGBA32I)),v===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),v===t.RGBA){const xe=Z?gr:We.getTransfer(Y);O===t.FLOAT&&(V=t.RGBA32F),O===t.HALF_FLOAT&&(V=t.RGBA16F),O===t.UNSIGNED_BYTE&&(V=xe===Qe?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function M(S,v){let O;return S?v===null||v===ci||v===ms?O=t.DEPTH24_STENCIL8:v===yn?O=t.DEPTH32F_STENCIL8:v===ps&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===ms?O=t.DEPTH_COMPONENT24:v===yn?O=t.DEPTH_COMPONENT32F:v===ps&&(O=t.DEPTH_COMPONENT16),O}function L(S,v){return u(S)===!0||S.isFramebufferTexture&&S.minFilter!==sn&&S.minFilter!==Bt?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function C(S){const v=S.target;v.removeEventListener("dispose",C),N(v),v.isVideoTexture&&d.delete(v)}function A(S){const v=S.target;v.removeEventListener("dispose",A),E(v)}function N(S){const v=i.get(S);if(v.__webglInit===void 0)return;const O=S.source,Y=p.get(O);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(S),Object.keys(Y).length===0&&p.delete(O)}i.remove(S)}function y(S){const v=i.get(S);t.deleteTexture(v.__webglTexture);const O=S.source,Y=p.get(O);delete Y[v.__cacheKey],o.memory.textures--}function E(S){const v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)t.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else t.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)t.deleteFramebuffer(v.__webglFramebuffer[Y]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=S.textures;for(let Y=0,Z=O.length;Y<Z;Y++){const V=i.get(O[Y]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(S)}let R=0;function G(){R=0}function z(){const S=R;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),R+=1,S}function $(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function j(S,v){const O=i.get(S);if(S.isVideoTexture&&ye(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,S,v);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+v)}function X(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){W(O,S,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+v)}function K(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){W(O,S,v);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+v)}function H(S,v){const O=i.get(S);if(S.version>0&&O.__version!==S.version){ee(O,S,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+v)}const ie={[Lo]:t.REPEAT,[ai]:t.CLAMP_TO_EDGE,[Do]:t.MIRRORED_REPEAT},ue={[sn]:t.NEAREST,[Ff]:t.NEAREST_MIPMAP_NEAREST,[Os]:t.NEAREST_MIPMAP_LINEAR,[Bt]:t.LINEAR,[Vr]:t.LINEAR_MIPMAP_NEAREST,[Fn]:t.LINEAR_MIPMAP_LINEAR},Me={[Vf]:t.NEVER,[$f]:t.ALWAYS,[Gf]:t.LESS,[Fc]:t.LEQUAL,[Wf]:t.EQUAL,[qf]:t.GEQUAL,[Xf]:t.GREATER,[Yf]:t.NOTEQUAL};function Ne(S,v){if(v.type===yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bt||v.magFilter===Vr||v.magFilter===Os||v.magFilter===Fn||v.minFilter===Bt||v.minFilter===Vr||v.minFilter===Os||v.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,ie[v.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,ie[v.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,ie[v.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,ue[v.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==Os&&v.minFilter!==Fn||v.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function tt(S,v){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",C));const Y=v.source;let Z=p.get(Y);Z===void 0&&(Z={},p.set(Y,Z));const V=$(v);if(V!==S.__cacheKey){Z[V]===void 0&&(Z[V]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[V].usedTimes++;const xe=Z[S.__cacheKey];xe!==void 0&&(Z[S.__cacheKey].usedTimes--,xe.usedTimes===0&&y(v)),S.__cacheKey=V,S.__webglTexture=Z[V].texture}return O}function W(S,v,O){let Y=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=t.TEXTURE_3D);const Z=tt(S,v),V=v.source;n.bindTexture(Y,S.__webglTexture,t.TEXTURE0+O);const xe=i.get(V);if(V.version!==xe.__version||Z===!0){n.activeTexture(t.TEXTURE0+O);const re=We.getPrimaries(We.workingColorSpace),fe=v.colorSpace===On?null:We.getPrimaries(v.colorSpace),Ve=v.colorSpace===On||re===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=_(v.image,!1,s.maxTextureSize);Q=it(v,Q);const pe=r.convert(v.format,v.colorSpace),Te=r.convert(v.type);let Re=w(v.internalFormat,pe,Te,v.colorSpace,v.isVideoTexture);Ne(Y,v);let me;const Be=v.mipmaps,Ie=v.isVideoTexture!==!0,nt=xe.__version===void 0||Z===!0,P=V.dataReady,oe=L(v,Q);if(v.isDepthTexture)Re=M(v.format===vs,v.type),nt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Re,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,Re,Q.width,Q.height,0,pe,Te,null));else if(v.isDataTexture)if(Be.length>0){Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,oe,Re,Be[0].width,Be[0].height);for(let B=0,q=Be.length;B<q;B++)me=Be[B],Ie?P&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,me.width,me.height,pe,Te,me.data):n.texImage2D(t.TEXTURE_2D,B,Re,me.width,me.height,0,pe,Te,me.data);v.generateMipmaps=!1}else Ie?(nt&&n.texStorage2D(t.TEXTURE_2D,oe,Re,Q.width,Q.height),P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,pe,Te,Q.data)):n.texImage2D(t.TEXTURE_2D,0,Re,Q.width,Q.height,0,pe,Te,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Re,Be[0].width,Be[0].height,Q.depth);for(let B=0,q=Be.length;B<q;B++)if(me=Be[B],v.format!==nn)if(pe!==null)if(Ie){if(P)if(v.layerUpdates.size>0){const ce=Pl(me.width,me.height,v.format,v.type);for(const ae of v.layerUpdates){const Le=me.data.subarray(ae*ce/me.data.BYTES_PER_ELEMENT,(ae+1)*ce/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,ae,me.width,me.height,1,pe,Le)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,me.width,me.height,Q.depth,pe,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,Re,me.width,me.height,Q.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?P&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,me.width,me.height,Q.depth,pe,Te,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,Re,me.width,me.height,Q.depth,0,pe,Te,me.data)}else{Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,oe,Re,Be[0].width,Be[0].height);for(let B=0,q=Be.length;B<q;B++)me=Be[B],v.format!==nn?pe!==null?Ie?P&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,me.width,me.height,pe,me.data):n.compressedTexImage2D(t.TEXTURE_2D,B,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?P&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,me.width,me.height,pe,Te,me.data):n.texImage2D(t.TEXTURE_2D,B,Re,me.width,me.height,0,pe,Te,me.data)}else if(v.isDataArrayTexture)if(Ie){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Re,Q.width,Q.height,Q.depth),P)if(v.layerUpdates.size>0){const B=Pl(Q.width,Q.height,v.format,v.type);for(const q of v.layerUpdates){const ce=Q.data.subarray(q*B/Q.data.BYTES_PER_ELEMENT,(q+1)*B/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,pe,Te,ce)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,Te,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,pe,Te,Q.data);else if(v.isData3DTexture)Ie?(nt&&n.texStorage3D(t.TEXTURE_3D,oe,Re,Q.width,Q.height,Q.depth),P&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,Te,Q.data)):n.texImage3D(t.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,pe,Te,Q.data);else if(v.isFramebufferTexture){if(nt)if(Ie)n.texStorage2D(t.TEXTURE_2D,oe,Re,Q.width,Q.height);else{let B=Q.width,q=Q.height;for(let ce=0;ce<oe;ce++)n.texImage2D(t.TEXTURE_2D,ce,Re,B,q,0,pe,Te,null),B>>=1,q>>=1}}else if(Be.length>0){if(Ie&&nt){const B=Ee(Be[0]);n.texStorage2D(t.TEXTURE_2D,oe,Re,B.width,B.height)}for(let B=0,q=Be.length;B<q;B++)me=Be[B],Ie?P&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,pe,Te,me):n.texImage2D(t.TEXTURE_2D,B,Re,pe,Te,me);v.generateMipmaps=!1}else if(Ie){if(nt){const B=Ee(Q);n.texStorage2D(t.TEXTURE_2D,oe,Re,B.width,B.height)}P&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Te,Q)}else n.texImage2D(t.TEXTURE_2D,0,Re,pe,Te,Q);u(v)&&c(Y),xe.__version=V.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ee(S,v,O){if(v.image.length!==6)return;const Y=tt(S,v),Z=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+O);const V=i.get(Z);if(Z.version!==V.__version||Y===!0){n.activeTexture(t.TEXTURE0+O);const xe=We.getPrimaries(We.workingColorSpace),re=v.colorSpace===On?null:We.getPrimaries(v.colorSpace),fe=v.colorSpace===On||xe===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ve=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let q=0;q<6;q++)!Ve&&!Q?pe[q]=_(v.image[q],!0,s.maxCubemapSize):pe[q]=Q?v.image[q].image:v.image[q],pe[q]=it(v,pe[q]);const Te=pe[0],Re=r.convert(v.format,v.colorSpace),me=r.convert(v.type),Be=w(v.internalFormat,Re,me,v.colorSpace),Ie=v.isVideoTexture!==!0,nt=V.__version===void 0||Y===!0,P=Z.dataReady;let oe=L(v,Te);Ne(t.TEXTURE_CUBE_MAP,v);let B;if(Ve){Ie&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Be,Te.width,Te.height);for(let q=0;q<6;q++){B=pe[q].mipmaps;for(let ce=0;ce<B.length;ce++){const ae=B[ce];v.format!==nn?Re!==null?Ie?P&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,0,0,ae.width,ae.height,Re,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,Be,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,0,0,ae.width,ae.height,Re,me,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,Be,ae.width,ae.height,0,Re,me,ae.data)}}}else{if(B=v.mipmaps,Ie&&nt){B.length>0&&oe++;const q=Ee(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Be,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Ie?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pe[q].width,pe[q].height,Re,me,pe[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Be,pe[q].width,pe[q].height,0,Re,me,pe[q].data);for(let ce=0;ce<B.length;ce++){const Le=B[ce].image[q].image;Ie?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,0,0,Le.width,Le.height,Re,me,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,Be,Le.width,Le.height,0,Re,me,Le.data)}}else{Ie?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Re,me,pe[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Be,Re,me,pe[q]);for(let ce=0;ce<B.length;ce++){const ae=B[ce];Ie?P&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,0,0,Re,me,ae.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,Be,Re,me,ae.image[q])}}}u(v)&&c(t.TEXTURE_CUBE_MAP),V.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ve(S,v,O,Y,Z,V){const xe=r.convert(O.format,O.colorSpace),re=r.convert(O.type),fe=w(O.internalFormat,xe,re,O.colorSpace),Ve=i.get(v),Q=i.get(O);if(Q.__renderTarget=v,!Ve.__hasExternalTextures){const pe=Math.max(1,v.width>>V),Te=Math.max(1,v.height>>V);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,V,fe,pe,Te,v.depth,0,xe,re,null):n.texImage2D(Z,V,fe,pe,Te,0,xe,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),ze(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,He(v)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Z,Q.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(S,v,O){if(t.bindRenderbuffer(t.RENDERBUFFER,S),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,V=M(v.stencilBuffer,Z),xe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=He(v);ze(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,V,v.width,v.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,V,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,V,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,S)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const V=Y[Z],xe=r.convert(V.format,V.colorSpace),re=r.convert(V.type),fe=w(V.internalFormat,xe,re,V.colorSpace),Ve=He(v);O&&ze(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,fe,v.width,v.height):ze(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,fe,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,fe,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const Z=Y.__webglTexture,V=He(v);if(v.depthTexture.format===gs)ze(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(v.depthTexture.format===vs)ze(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ye(S){const v=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,S)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=t.createRenderbuffer(),se(v.__webglDepthbuffer[Y],S,!1);else{const Z=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,V)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),se(v.__webglDepthbuffer,S,!1);else{const Y=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,Z)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(S,v,O){const Y=i.get(S);v!==void 0&&ve(Y.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ye(S)}function ct(S){const v=S.texture,O=i.get(S),Y=i.get(v);S.addEventListener("dispose",A);const Z=S.textures,V=S.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=v.version,o.memory.textures++),V){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let fe=0;fe<v.mipmaps.length;fe++)O.__webglFramebuffer[re][fe]=t.createFramebuffer()}else O.__webglFramebuffer[re]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)O.__webglFramebuffer[re]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(xe)for(let re=0,fe=Z.length;re<fe;re++){const Ve=i.get(Z[re]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&ze(S)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const fe=Z[re];O.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const Ve=r.convert(fe.format,fe.colorSpace),Q=r.convert(fe.type),pe=w(fe.internalFormat,Ve,Q,fe.colorSpace,S.isXRRenderTarget===!0),Te=He(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,pe,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,O.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),se(O.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(O.__webglFramebuffer[re][fe],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe);else ve(O.__webglFramebuffer[re],S,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);u(v)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let re=0,fe=Z.length;re<fe;re++){const Ve=Z[re],Q=i.get(Ve);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),Ne(t.TEXTURE_2D,Ve),ve(O.__webglFramebuffer,S,Ve,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),u(Ve)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(re=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,Y.__webglTexture),Ne(re,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ve(O.__webglFramebuffer[fe],S,v,t.COLOR_ATTACHMENT0,re,fe);else ve(O.__webglFramebuffer,S,v,t.COLOR_ATTACHMENT0,re,0);u(v)&&c(re),n.unbindTexture()}S.depthBuffer&&Ye(S)}function ot(S){const v=S.textures;for(let O=0,Y=v.length;O<Y;O++){const Z=v[O];if(u(Z)){const V=b(S),xe=i.get(Z).__webglTexture;n.bindTexture(V,xe),c(V),n.unbindTexture()}}}const ke=[],T=[];function Vt(S){if(S.samples>0){if(ze(S)===!1){const v=S.textures,O=S.width,Y=S.height;let Z=t.COLOR_BUFFER_BIT;const V=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(S),re=v.length>1;if(re)for(let fe=0;fe<v.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Ve=i.get(v[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,Z,t.NEAREST),l===!0&&(ke.length=0,T.length=0,ke.push(t.COLOR_ATTACHMENT0+fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ke.push(V),T.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,T)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let fe=0;fe<v.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Ve=i.get(v[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function He(S){return Math.min(s.maxSamples,S.samples)}function ze(S){const v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(S){const v=o.render.frame;d.get(S)!==v&&(d.set(S,v),S.update())}function it(S,v){const O=S.colorSpace,Y=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==hi&&O!==On&&(We.getTransfer(O)===Qe?(Y!==nn||Z!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Ee(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(h.width=S.naturalWidth||S.width,h.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(h.width=S.displayWidth,h.height=S.displayHeight):(h.width=S.width,h.height=S.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ze}function S0(t,e){function n(i,s=On){let r;const o=We.getTransfer(s);if(i===Tn)return t.UNSIGNED_BYTE;if(i===Sa)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wa)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Rc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ac)return t.BYTE;if(i===Cc)return t.SHORT;if(i===ps)return t.UNSIGNED_SHORT;if(i===ya)return t.INT;if(i===ci)return t.UNSIGNED_INT;if(i===yn)return t.FLOAT;if(i===ys)return t.HALF_FLOAT;if(i===Pc)return t.ALPHA;if(i===Lc)return t.RGB;if(i===nn)return t.RGBA;if(i===Dc)return t.LUMINANCE;if(i===Ic)return t.LUMINANCE_ALPHA;if(i===gs)return t.DEPTH_COMPONENT;if(i===vs)return t.DEPTH_STENCIL;if(i===Uc)return t.RED;if(i===ba)return t.RED_INTEGER;if(i===Nc)return t.RG;if(i===Ta)return t.RG_INTEGER;if(i===Aa)return t.RGBA_INTEGER;if(i===or||i===ar||i===lr||i===cr)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Uo||i===No||i===Oo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fo||i===ko||i===zo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fo||i===ko)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bo||i===Ho||i===Vo||i===Go||i===Wo||i===Xo||i===Yo||i===qo||i===$o||i===jo||i===Zo||i===Ko||i===Jo||i===Qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ho)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Go)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$o)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hr||i===ea||i===ta)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hr)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===na||i===ia||i===sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b0=`
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

}`;class T0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new yt,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new An({vertexShader:w0,fragmentShader:b0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ht(new bs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A0 extends Hi{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,d=null,f=null,p=null,m=null,g=null;const _=new T0,u=n.getContextAttributes();let c=null,b=null;const w=[],M=[],L=new qe;let C=null;const A=new zt;A.viewport=new ht;const N=new zt;N.viewport=new ht;const y=[A,N],E=new qp;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=w[W];return ee===void 0&&(ee=new lo,w[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=w[W];return ee===void 0&&(ee=new lo,w[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=w[W];return ee===void 0&&(ee=new lo,w[W]=ee),ee.getHandSpace()};function z(W){const ee=M.indexOf(W.inputSource);if(ee===-1)return;const ve=w[ee];ve!==void 0&&(ve.update(W.inputSource,W.frame,h||o),ve.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",j);for(let W=0;W<w.length;W++){const ee=M[W];ee!==null&&(M[W]=null,w[W].disconnect(ee))}R=null,G=null,_.reset(),e.setRenderTarget(c),m=null,p=null,f=null,s=null,b=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(c=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",$),s.addEventListener("inputsourceschange",j),u.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,se=null,be=null;u.depth&&(be=u.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=u.stencil?vs:gs,se=u.stencil?ms:ci);const Ye={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:r};f=new XRWebGLBinding(s,n),p=f.createProjectionLayer(Ye),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Wn(p.textureWidth,p.textureHeight,{format:nn,type:Tn,depthTexture:new qc(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ve={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,n,ve),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Wn(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(W){for(let ee=0;ee<W.removed.length;ee++){const ve=W.removed[ee],se=M.indexOf(ve);se>=0&&(M[se]=null,w[se].disconnect(ve))}for(let ee=0;ee<W.added.length;ee++){const ve=W.added[ee];let se=M.indexOf(ve);if(se===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=M.length){M.push(ve),se=Ye;break}else if(M[Ye]===null){M[Ye]=ve,se=Ye;break}if(se===-1)break}const be=w[se];be&&be.connect(ve)}}const X=new U,K=new U;function H(W,ee,ve){X.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const se=X.distanceTo(K),be=ee.projectionMatrix.elements,Ye=ve.projectionMatrix.elements,Ae=be[14]/(be[10]-1),ct=be[14]/(be[10]+1),ot=(be[9]+1)/be[5],ke=(be[9]-1)/be[5],T=(be[8]-1)/be[0],Vt=(Ye[8]+1)/Ye[0],He=Ae*T,ze=Ae*Vt,ye=se/(-T+Vt),it=ye*-T;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(it),W.translateZ(ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ee=Ae+ye,S=ct+ye,v=He-it,O=ze+(se-it),Y=ot*ct/S*Ee,Z=ke*ct/S*Ee;W.projectionMatrix.makePerspective(v,O,Y,Z,Ee,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ie(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ee=W.near,ve=W.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),E.near=N.near=A.near=ee,E.far=N.far=A.far=ve,(R!==E.near||G!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,G=E.far),A.layers.mask=W.layers.mask|2,N.layers.mask=W.layers.mask|4,E.layers.mask=A.layers.mask|N.layers.mask;const se=W.parent,be=E.cameras;ie(E,se);for(let Ye=0;Ye<be.length;Ye++)ie(be[Ye],se);be.length===2?H(E,A,N):E.projectionMatrix.copy(A.projectionMatrix),ue(W,E,se)};function ue(W,ee,ve){ve===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ve.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=_s*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Me=null;function Ne(W,ee){if(d=ee.getViewerPose(h||o),g=ee,d!==null){const ve=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let se=!1;ve.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let Ae=0;Ae<ve.length;Ae++){const ct=ve[Ae];let ot=null;if(m!==null)ot=m.getViewport(ct);else{const T=f.getViewSubImage(p,ct);ot=T.viewport,Ae===0&&(e.setRenderTargetTextures(b,T.colorTexture,T.depthStencilTexture),e.setRenderTarget(b))}let ke=y[Ae];ke===void 0&&(ke=new zt,ke.layers.enable(Ae),ke.viewport=new ht,y[Ae]=ke),ke.matrix.fromArray(ct.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ct.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(ot.x,ot.y,ot.width,ot.height),Ae===0&&(E.matrix.copy(ke.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),se===!0&&E.cameras.push(ke)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const Ae=f.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,s.renderState)}}for(let ve=0;ve<w.length;ve++){const se=M[ve],be=w[ve];se!==null&&be!==void 0&&be.update(se,ee,h||o)}Me&&Me(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const tt=new $c;tt.setAnimationLoop(Ne),this.setAnimationLoop=function(W){Me=W},this.dispose=function(){}}}const ni=new fn,C0=new et;function R0(t,e){function n(u,c){u.matrixAutoUpdate===!0&&u.updateMatrix(),c.value.copy(u.matrix)}function i(u,c){c.color.getRGB(u.fogColor.value,Wc(t)),c.isFog?(u.fogNear.value=c.near,u.fogFar.value=c.far):c.isFogExp2&&(u.fogDensity.value=c.density)}function s(u,c,b,w,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(u,c):c.isMeshToonMaterial?(r(u,c),f(u,c)):c.isMeshPhongMaterial?(r(u,c),d(u,c)):c.isMeshStandardMaterial?(r(u,c),p(u,c),c.isMeshPhysicalMaterial&&m(u,c,M)):c.isMeshMatcapMaterial?(r(u,c),g(u,c)):c.isMeshDepthMaterial?r(u,c):c.isMeshDistanceMaterial?(r(u,c),_(u,c)):c.isMeshNormalMaterial?r(u,c):c.isLineBasicMaterial?(o(u,c),c.isLineDashedMaterial&&a(u,c)):c.isPointsMaterial?l(u,c,b,w):c.isSpriteMaterial?h(u,c):c.isShadowMaterial?(u.color.value.copy(c.color),u.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(u,c){u.opacity.value=c.opacity,c.color&&u.diffuse.value.copy(c.color),c.emissive&&u.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(u.map.value=c.map,n(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,n(c.alphaMap,u.alphaMapTransform)),c.bumpMap&&(u.bumpMap.value=c.bumpMap,n(c.bumpMap,u.bumpMapTransform),u.bumpScale.value=c.bumpScale,c.side===It&&(u.bumpScale.value*=-1)),c.normalMap&&(u.normalMap.value=c.normalMap,n(c.normalMap,u.normalMapTransform),u.normalScale.value.copy(c.normalScale),c.side===It&&u.normalScale.value.negate()),c.displacementMap&&(u.displacementMap.value=c.displacementMap,n(c.displacementMap,u.displacementMapTransform),u.displacementScale.value=c.displacementScale,u.displacementBias.value=c.displacementBias),c.emissiveMap&&(u.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,u.emissiveMapTransform)),c.specularMap&&(u.specularMap.value=c.specularMap,n(c.specularMap,u.specularMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest);const b=e.get(c),w=b.envMap,M=b.envMapRotation;w&&(u.envMap.value=w,ni.copy(M),ni.x*=-1,ni.y*=-1,ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),u.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(ni)),u.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=c.reflectivity,u.ior.value=c.ior,u.refractionRatio.value=c.refractionRatio),c.lightMap&&(u.lightMap.value=c.lightMap,u.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,u.lightMapTransform)),c.aoMap&&(u.aoMap.value=c.aoMap,u.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,u.aoMapTransform))}function o(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,c.map&&(u.map.value=c.map,n(c.map,u.mapTransform))}function a(u,c){u.dashSize.value=c.dashSize,u.totalSize.value=c.dashSize+c.gapSize,u.scale.value=c.scale}function l(u,c,b,w){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.size.value=c.size*b,u.scale.value=w*.5,c.map&&(u.map.value=c.map,n(c.map,u.uvTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,n(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function h(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.rotation.value=c.rotation,c.map&&(u.map.value=c.map,n(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,n(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function d(u,c){u.specular.value.copy(c.specular),u.shininess.value=Math.max(c.shininess,1e-4)}function f(u,c){c.gradientMap&&(u.gradientMap.value=c.gradientMap)}function p(u,c){u.metalness.value=c.metalness,c.metalnessMap&&(u.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,u.metalnessMapTransform)),u.roughness.value=c.roughness,c.roughnessMap&&(u.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,u.roughnessMapTransform)),c.envMap&&(u.envMapIntensity.value=c.envMapIntensity)}function m(u,c,b){u.ior.value=c.ior,c.sheen>0&&(u.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),u.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(u.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,u.sheenColorMapTransform)),c.sheenRoughnessMap&&(u.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,u.sheenRoughnessMapTransform))),c.clearcoat>0&&(u.clearcoat.value=c.clearcoat,u.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(u.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,u.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(u.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===It&&u.clearcoatNormalScale.value.negate())),c.dispersion>0&&(u.dispersion.value=c.dispersion),c.iridescence>0&&(u.iridescence.value=c.iridescence,u.iridescenceIOR.value=c.iridescenceIOR,u.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(u.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,u.iridescenceMapTransform)),c.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),c.transmission>0&&(u.transmission.value=c.transmission,u.transmissionSamplerMap.value=b.texture,u.transmissionSamplerSize.value.set(b.width,b.height),c.transmissionMap&&(u.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,u.transmissionMapTransform)),u.thickness.value=c.thickness,c.thicknessMap&&(u.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=c.attenuationDistance,u.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(u.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(u.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=c.specularIntensity,u.specularColor.value.copy(c.specularColor),c.specularColorMap&&(u.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,u.specularColorMapTransform)),c.specularIntensityMap&&(u.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,c){c.matcap&&(u.matcap.value=c.matcap)}function _(u,c){const b=e.get(c).light;u.referencePosition.value.setFromMatrixPosition(b.matrixWorld),u.nearDistance.value=b.shadow.camera.near,u.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function P0(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const M=w.program;i.uniformBlockBinding(b,M)}function h(b,w){let M=s[b.id];M===void 0&&(g(b),M=d(b),s[b.id]=M,b.addEventListener("dispose",u));const L=w.program;i.updateUBOMapping(b,L);const C=e.render.frame;r[b.id]!==C&&(p(b),r[b.id]=C)}function d(b){const w=f();b.__bindingPointIndex=w;const M=t.createBuffer(),L=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const w=s[b.id],M=b.uniforms,L=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let C=0,A=M.length;C<A;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,E=N.length;y<E;y++){const R=N[y];if(m(R,C,y,L)===!0){const G=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let $=0;for(let j=0;j<z.length;j++){const X=z[j],K=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,G+$,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,w,M,L){const C=b.value,A=w+"_"+M;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const N=L[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return L[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(b){const w=b.uniforms;let M=0;const L=16;for(let A=0,N=w.length;A<N;A++){const y=Array.isArray(w[A])?w[A]:[w[A]];for(let E=0,R=y.length;E<R;E++){const G=y[E],z=Array.isArray(G.value)?G.value:[G.value];for(let $=0,j=z.length;$<j;$++){const X=z[$],K=_(X),H=M%L,ie=H%K.boundary,ue=H+ie;M+=ie,ue!==0&&L-ue<K.storage&&(M+=L-ue),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=K.storage}}}const C=M%L;return C>0&&(M+=L-C),b.__size=M,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function u(b){const w=b.target;w.removeEventListener("dispose",u);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function c(){for(const b in s)t.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:h,dispose:c}}class L0{constructor(e={}){const{canvas:n=dp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let u=null,c=null;const b=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let L=!1;this._outputColorSpace=qt;let C=0,A=0,N=null,y=-1,E=null;const R=new ht,G=new ht;let z=null;const $=new Je(0);let j=0,X=n.width,K=n.height,H=1,ie=null,ue=null;const Me=new ht(0,0,X,K),Ne=new ht(0,0,X,K);let tt=!1;const W=new Da;let ee=!1,ve=!1;const se=new et,be=new et,Ye=new U,Ae=new ht,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function ke(){return N===null?H:1}let T=i;function Vt(x,D){return n.getContext(x,D)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ma}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",ae,!1),T===null){const D="webgl2";if(T=Vt(D,x),T===null)throw Vt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let He,ze,ye,it,Ee,S,v,O,Y,Z,V,xe,re,fe,Ve,Q,pe,Te,Re,me,Be,Ie,nt,P;function oe(){He=new Hv(T),He.init(),Ie=new S0(T,He),ze=new Uv(T,He,e,Ie),ye=new M0(T,He),ze.reverseDepthBuffer&&p&&ye.buffers.depth.setReversed(!0),it=new Wv(T),Ee=new l0,S=new y0(T,He,ye,Ee,ze,Ie,it),v=new Ov(M),O=new Bv(M),Y=new Zp(T),nt=new Dv(T,Y),Z=new Vv(T,Y,it,nt),V=new Yv(T,Z,Y,it),Re=new Xv(T,ze,S),Q=new Nv(Ee),xe=new a0(M,v,O,He,ze,nt,Q),re=new R0(M,Ee),fe=new h0,Ve=new g0(He),Te=new Lv(M,v,O,ye,V,m,l),pe=new x0(M,V,ze),P=new P0(T,it,ze,ye),me=new Iv(T,He,it),Be=new Gv(T,He,it),it.programs=xe.programs,M.capabilities=ze,M.extensions=He,M.properties=Ee,M.renderLists=fe,M.shadowMap=pe,M.state=ye,M.info=it}oe();const B=new A0(M,T);this.xr=B,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(X,K,!1))},this.getSize=function(x){return x.set(X,K)},this.setSize=function(x,D,F=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,K=D,n.width=Math.floor(x*H),n.height=Math.floor(D*H),F===!0&&(n.style.width=x+"px",n.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(x,D,F){X=x,K=D,H=F,n.width=Math.floor(x*F),n.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,D,F,k){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,D,F,k),ye.viewport(R.copy(Me).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Ne)},this.setScissor=function(x,D,F,k){x.isVector4?Ne.set(x.x,x.y,x.z,x.w):Ne.set(x,D,F,k),ye.scissor(G.copy(Ne).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){ye.setScissorTest(tt=x)},this.setOpaqueSort=function(x){ie=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,F=!0){let k=0;if(x){let I=!1;if(N!==null){const J=N.texture.format;I=J===Aa||J===Ta||J===ba}if(I){const J=N.texture.type,ne=J===Tn||J===ci||J===ps||J===ms||J===Sa||J===wa,de=Te.getClearColor(),ge=Te.getClearAlpha(),Pe=de.r,Ce=de.g,Se=de.b;ne?(g[0]=Pe,g[1]=Ce,g[2]=Se,g[3]=ge,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Pe,_[1]=Ce,_[2]=Se,_[3]=ge,T.clearBufferiv(T.COLOR,0,_))}else k|=T.COLOR_BUFFER_BIT}D&&(k|=T.DEPTH_BUFFER_BIT),F&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),Te.dispose(),fe.dispose(),Ve.dispose(),Ee.dispose(),v.dispose(),O.dispose(),V.dispose(),nt.dispose(),P.dispose(),xe.dispose(),B.dispose(),B.removeEventListener("sessionstart",Za),B.removeEventListener("sessionend",Ka),jn.stop()};function q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const x=it.autoReset,D=pe.enabled,F=pe.autoUpdate,k=pe.needsUpdate,I=pe.type;oe(),it.autoReset=x,pe.enabled=D,pe.autoUpdate=F,pe.needsUpdate=k,pe.type=I}function ae(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Le(x){const D=x.target;D.removeEventListener("dispose",Le),at(D)}function at(x){St(x),Ee.remove(x)}function St(x){const D=Ee.get(x).programs;D!==void 0&&(D.forEach(function(F){xe.releaseProgram(F)}),x.isShaderMaterial&&xe.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,k,I,J){D===null&&(D=ct);const ne=I.isMesh&&I.matrixWorld.determinant()<0,de=tf(x,D,F,k,I);ye.setMaterial(k,ne);let ge=F.index,Pe=1;if(k.wireframe===!0){if(ge=Z.getWireframeAttribute(F),ge===void 0)return;Pe=2}const Ce=F.drawRange,Se=F.attributes.position;let Ge=Ce.start*Pe,$e=(Ce.start+Ce.count)*Pe;J!==null&&(Ge=Math.max(Ge,J.start*Pe),$e=Math.min($e,(J.start+J.count)*Pe)),ge!==null?(Ge=Math.max(Ge,0),$e=Math.min($e,ge.count)):Se!=null&&(Ge=Math.max(Ge,0),$e=Math.min($e,Se.count));const dt=$e-Ge;if(dt<0||dt===1/0)return;nt.setup(I,k,de,F,ge);let lt,Xe=me;if(ge!==null&&(lt=Y.get(ge),Xe=Be,Xe.setIndex(lt)),I.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*ke()),Xe.setMode(T.LINES)):Xe.setMode(T.TRIANGLES);else if(I.isLine){let we=k.linewidth;we===void 0&&(we=1),ye.setLineWidth(we*ke()),I.isLineSegments?Xe.setMode(T.LINES):I.isLineLoop?Xe.setMode(T.LINE_LOOP):Xe.setMode(T.LINE_STRIP)}else I.isPoints?Xe.setMode(T.POINTS):I.isSprite&&Xe.setMode(T.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Xe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const we=I._multiDrawStarts,xt=I._multiDrawCounts,je=I._multiDrawCount,Zt=ge?Y.get(ge).bytesPerElement:1,ui=Ee.get(k).currentProgram.getUniforms();for(let Nt=0;Nt<je;Nt++)ui.setValue(T,"_gl_DrawID",Nt),Xe.render(we[Nt]/Zt,xt[Nt])}else if(I.isInstancedMesh)Xe.renderInstances(Ge,dt,I.count);else if(F.isInstancedBufferGeometry){const we=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,xt=Math.min(F.instanceCount,we);Xe.renderInstances(Ge,dt,xt)}else Xe.render(Ge,dt)};function Ke(x,D,F){x.transparent===!0&&x.side===Mn&&x.forceSinglePass===!1?(x.side=It,x.needsUpdate=!0,Ns(x,D,F),x.side=Gn,x.needsUpdate=!0,Ns(x,D,F),x.side=Mn):Ns(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),c=Ve.get(F),c.init(D),w.push(c),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(c.pushLight(I),I.castShadow&&c.pushShadow(I))}),x!==F&&x.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(c.pushLight(I),I.castShadow&&c.pushShadow(I))}),c.setupLights();const k=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let ne=0;ne<J.length;ne++){const de=J[ne];Ke(de,F,I),k.add(de)}else Ke(J,F,I),k.add(J)}),c=w.pop(),k},this.compileAsync=function(x,D,F=null){const k=this.compile(x,D,F);return new Promise(I=>{function J(){if(k.forEach(function(ne){Ee.get(ne).currentProgram.isReady()&&k.delete(ne)}),k.size===0){I(x);return}setTimeout(J,10)}He.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let jt=null;function pn(x){jt&&jt(x)}function Za(){jn.stop()}function Ka(){jn.start()}const jn=new $c;jn.setAnimationLoop(pn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(x){jt=x,B.setAnimationLoop(x),x===null?jn.stop():jn.start()},B.addEventListener("sessionstart",Za),B.addEventListener("sessionend",Ka),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(D),D=B.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,D,N),c=Ve.get(x,w.length),c.init(D),w.push(c),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(be),ve=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,ve),u=fe.get(x,b.length),u.init(),b.push(u),B.enabled===!0&&B.isPresenting===!0){const J=M.xr.getDepthSensingMesh();J!==null&&Br(J,D,-1/0,M.sortObjects)}Br(x,D,0,M.sortObjects),u.finish(),M.sortObjects===!0&&u.sort(ie,ue),ot=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ot&&Te.addToRenderList(u,x),this.info.render.frame++,ee===!0&&Q.beginShadows();const F=c.state.shadowsArray;pe.render(F,x,D),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=u.opaque,I=u.transmissive;if(c.setupLights(),D.isArrayCamera){const J=D.cameras;if(I.length>0)for(let ne=0,de=J.length;ne<de;ne++){const ge=J[ne];Qa(k,I,x,ge)}ot&&Te.render(x);for(let ne=0,de=J.length;ne<de;ne++){const ge=J[ne];Ja(u,x,ge,ge.viewport)}}else I.length>0&&Qa(k,I,x,D),ot&&Te.render(x),Ja(u,x,D);N!==null&&A===0&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(M,x,D),nt.resetDefaultState(),y=-1,E=null,w.pop(),w.length>0?(c=w[w.length-1],ee===!0&&Q.setGlobalState(M.clippingPlanes,c.state.camera)):c=null,b.pop(),b.length>0?u=b[b.length-1]:u=null};function Br(x,D,F,k){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)c.pushLight(x),x.castShadow&&c.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||W.intersectsSprite(x)){k&&Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(be);const ne=V.update(x),de=x.material;de.visible&&u.push(x,ne,de,F,Ae.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||W.intersectsObject(x))){const ne=V.update(x),de=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ae.copy(x.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ae.copy(ne.boundingSphere.center)),Ae.applyMatrix4(x.matrixWorld).applyMatrix4(be)),Array.isArray(de)){const ge=ne.groups;for(let Pe=0,Ce=ge.length;Pe<Ce;Pe++){const Se=ge[Pe],Ge=de[Se.materialIndex];Ge&&Ge.visible&&u.push(x,ne,Ge,F,Ae.z,Se)}}else de.visible&&u.push(x,ne,de,F,Ae.z,null)}}const J=x.children;for(let ne=0,de=J.length;ne<de;ne++)Br(J[ne],D,F,k)}function Ja(x,D,F,k){const I=x.opaque,J=x.transmissive,ne=x.transparent;c.setupLightsView(F),ee===!0&&Q.setGlobalState(M.clippingPlanes,F),k&&ye.viewport(R.copy(k)),I.length>0&&Us(I,D,F),J.length>0&&Us(J,D,F),ne.length>0&&Us(ne,D,F),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Qa(x,D,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[k.id]===void 0&&(c.state.transmissionRenderTarget[k.id]=new Wn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ys:Tn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const J=c.state.transmissionRenderTarget[k.id],ne=k.viewport||R;J.setSize(ne.z*M.transmissionResolutionScale,ne.w*M.transmissionResolutionScale);const de=M.getRenderTarget();M.setRenderTarget(J),M.getClearColor($),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),ot&&Te.render(F);const ge=M.toneMapping;M.toneMapping=zn;const Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),c.setupLightsView(k),ee===!0&&Q.setGlobalState(M.clippingPlanes,k),Us(x,F,k),S.updateMultisampleRenderTarget(J),S.updateRenderTargetMipmap(J),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Se=0,Ge=D.length;Se<Ge;Se++){const $e=D[Se],dt=$e.object,lt=$e.geometry,Xe=$e.material,we=$e.group;if(Xe.side===Mn&&dt.layers.test(k.layers)){const xt=Xe.side;Xe.side=It,Xe.needsUpdate=!0,el(dt,F,k,lt,Xe,we),Xe.side=xt,Xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(S.updateMultisampleRenderTarget(J),S.updateRenderTargetMipmap(J))}M.setRenderTarget(de),M.setClearColor($,j),Pe!==void 0&&(k.viewport=Pe),M.toneMapping=ge}function Us(x,D,F){const k=D.isScene===!0?D.overrideMaterial:null;for(let I=0,J=x.length;I<J;I++){const ne=x[I],de=ne.object,ge=ne.geometry,Pe=ne.group;let Ce=ne.material;Ce.allowOverride===!0&&k!==null&&(Ce=k),de.layers.test(F.layers)&&el(de,D,F,ge,Ce,Pe)}}function el(x,D,F,k,I,J){x.onBeforeRender(M,D,F,k,I,J),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(M,D,F,k,x,J),I.transparent===!0&&I.side===Mn&&I.forceSinglePass===!1?(I.side=It,I.needsUpdate=!0,M.renderBufferDirect(F,D,k,I,x,J),I.side=Gn,I.needsUpdate=!0,M.renderBufferDirect(F,D,k,I,x,J),I.side=Mn):M.renderBufferDirect(F,D,k,I,x,J),x.onAfterRender(M,D,F,k,I,J)}function Ns(x,D,F){D.isScene!==!0&&(D=ct);const k=Ee.get(x),I=c.state.lights,J=c.state.shadowsArray,ne=I.state.version,de=xe.getParameters(x,I.state,J,D,F),ge=xe.getProgramCacheKey(de);let Pe=k.programs;k.environment=x.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(x.isMeshStandardMaterial?O:v).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",Le),Pe=new Map,k.programs=Pe);let Ce=Pe.get(ge);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===ne)return nl(x,de),Ce}else de.uniforms=xe.getUniforms(x),x.onBeforeCompile(de,M),Ce=xe.acquireProgram(de,ge),Pe.set(ge,Ce),k.uniforms=de.uniforms;const Se=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=Q.uniform),nl(x,de),k.needsLights=sf(x),k.lightsStateVersion=ne,k.needsLights&&(Se.ambientLightColor.value=I.state.ambient,Se.lightProbe.value=I.state.probe,Se.directionalLights.value=I.state.directional,Se.directionalLightShadows.value=I.state.directionalShadow,Se.spotLights.value=I.state.spot,Se.spotLightShadows.value=I.state.spotShadow,Se.rectAreaLights.value=I.state.rectArea,Se.ltc_1.value=I.state.rectAreaLTC1,Se.ltc_2.value=I.state.rectAreaLTC2,Se.pointLights.value=I.state.point,Se.pointLightShadows.value=I.state.pointShadow,Se.hemisphereLights.value=I.state.hemi,Se.directionalShadowMap.value=I.state.directionalShadowMap,Se.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Se.spotShadowMap.value=I.state.spotShadowMap,Se.spotLightMatrix.value=I.state.spotLightMatrix,Se.spotLightMap.value=I.state.spotLightMap,Se.pointShadowMap.value=I.state.pointShadowMap,Se.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function tl(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=ur.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function nl(x,D){const F=Ee.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function tf(x,D,F,k,I){D.isScene!==!0&&(D=ct),S.resetTextureUnits();const J=D.fog,ne=k.isMeshStandardMaterial?D.environment:null,de=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:hi,ge=(k.isMeshStandardMaterial?O:v).get(k.envMap||ne),Pe=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!F.morphAttributes.position,Ge=!!F.morphAttributes.normal,$e=!!F.morphAttributes.color;let dt=zn;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(dt=M.toneMapping);const lt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xe=lt!==void 0?lt.length:0,we=Ee.get(k),xt=c.state.lights;if(ee===!0&&(ve===!0||x!==E)){const At=x===E&&k.id===y;Q.setState(k,x,At)}let je=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==xt.state.version||we.outputColorSpace!==de||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==ge||k.fog===!0&&we.fog!==J||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Q.numPlanes||we.numIntersection!==Q.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Ce||we.morphTargets!==Se||we.morphNormals!==Ge||we.morphColors!==$e||we.toneMapping!==dt||we.morphTargetsCount!==Xe)&&(je=!0):(je=!0,we.__version=k.version);let Zt=we.currentProgram;je===!0&&(Zt=Ns(k,D,I));let ui=!1,Nt=!1,Xi=!1;const st=Zt.getUniforms(),Gt=we.uniforms;if(ye.useProgram(Zt.program)&&(ui=!0,Nt=!0,Xi=!0),k.id!==y&&(y=k.id,Nt=!0),ui||E!==x){ye.buffers.depth.getReversed()?(se.copy(x.projectionMatrix),fp(se),pp(se),st.setValue(T,"projectionMatrix",se)):st.setValue(T,"projectionMatrix",x.projectionMatrix),st.setValue(T,"viewMatrix",x.matrixWorldInverse);const Dt=st.map.cameraPosition;Dt!==void 0&&Dt.setValue(T,Ye.setFromMatrixPosition(x.matrixWorld)),ze.logarithmicDepthBuffer&&st.setValue(T,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&st.setValue(T,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,Nt=!0,Xi=!0)}if(I.isSkinnedMesh){st.setOptional(T,I,"bindMatrix"),st.setOptional(T,I,"bindMatrixInverse");const At=I.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),st.setValue(T,"boneTexture",At.boneTexture,S))}I.isBatchedMesh&&(st.setOptional(T,I,"batchingTexture"),st.setValue(T,"batchingTexture",I._matricesTexture,S),st.setOptional(T,I,"batchingIdTexture"),st.setValue(T,"batchingIdTexture",I._indirectTexture,S),st.setOptional(T,I,"batchingColorTexture"),I._colorsTexture!==null&&st.setValue(T,"batchingColorTexture",I._colorsTexture,S));const Wt=F.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Re.update(I,F,Zt),(Nt||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,st.setValue(T,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gt.envMap.value=ge,Gt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Gt.envMapIntensity.value=D.environmentIntensity),Nt&&(st.setValue(T,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&nf(Gt,Xi),J&&k.fog===!0&&re.refreshFogUniforms(Gt,J),re.refreshMaterialUniforms(Gt,k,H,K,c.state.transmissionRenderTarget[x.id]),ur.upload(T,tl(we),Gt,S)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ur.upload(T,tl(we),Gt,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&st.setValue(T,"center",I.center),st.setValue(T,"modelViewMatrix",I.modelViewMatrix),st.setValue(T,"normalMatrix",I.normalMatrix),st.setValue(T,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const At=k.uniformsGroups;for(let Dt=0,Hr=At.length;Dt<Hr;Dt++){const Zn=At[Dt];P.update(Zn,Zt),P.bind(Zn,Zt)}}return Zt}function nf(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function sf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,D,F){const k=Ee.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ee.get(x.texture).__webglTexture=D,Ee.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:F,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const F=Ee.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};const rf=T.createFramebuffer();this.setRenderTarget=function(x,D=0,F=0){N=x,C=D,A=F;let k=!0,I=null,J=!1,ne=!1;if(x){const ge=Ee.get(x);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)S.setupRenderTarget(x);else if(ge.__hasExternalTextures)S.rebindTextures(x,Ee.get(x.texture).__webglTexture,Ee.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Se=x.depthTexture;if(ge.__boundDepthTexture!==Se){if(Se!==null&&Ee.has(Se)&&(x.width!==Se.image.width||x.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ne=!0);const Ce=Ee.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?I=Ce[D][F]:I=Ce[D],J=!0):x.samples>0&&S.useMultisampledRTT(x)===!1?I=Ee.get(x).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[F]:I=Ce,R.copy(x.viewport),G.copy(x.scissor),z=x.scissorTest}else R.copy(Me).multiplyScalar(H).floor(),G.copy(Ne).multiplyScalar(H).floor(),z=tt;if(F!==0&&(I=rf),ye.bindFramebuffer(T.FRAMEBUFFER,I)&&k&&ye.drawBuffers(x,I),ye.viewport(R),ye.scissor(G),ye.setScissorTest(z),J){const ge=Ee.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,F)}else if(ne){const ge=Ee.get(x.texture),Pe=D;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ge.__webglTexture,F,Pe)}else if(x!==null&&F!==0){const ge=Ee.get(x.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ge.__webglTexture,F)}y=-1},this.readRenderTargetPixels=function(x,D,F,k,I,J,ne){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Ee.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ne!==void 0&&(de=de[ne]),de){ye.bindFramebuffer(T.FRAMEBUFFER,de);try{const ge=x.texture,Pe=ge.format,Ce=ge.type;if(!ze.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-k&&F>=0&&F<=x.height-I&&T.readPixels(D,F,k,I,Ie.convert(Pe),Ie.convert(Ce),J)}finally{const ge=N!==null?Ee.get(N).__webglFramebuffer:null;ye.bindFramebuffer(T.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(x,D,F,k,I,J,ne){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Ee.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ne!==void 0&&(de=de[ne]),de)if(D>=0&&D<=x.width-k&&F>=0&&F<=x.height-I){ye.bindFramebuffer(T.FRAMEBUFFER,de);const ge=x.texture,Pe=ge.format,Ce=ge.type;if(!ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Se),T.bufferData(T.PIXEL_PACK_BUFFER,J.byteLength,T.STREAM_READ),T.readPixels(D,F,k,I,Ie.convert(Pe),Ie.convert(Ce),0);const Ge=N!==null?Ee.get(N).__webglFramebuffer:null;ye.bindFramebuffer(T.FRAMEBUFFER,Ge);const $e=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await up(T,$e,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Se),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,J),T.deleteBuffer(Se),T.deleteSync($e),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,F=0){const k=Math.pow(2,-F),I=Math.floor(x.image.width*k),J=Math.floor(x.image.height*k),ne=D!==null?D.x:0,de=D!==null?D.y:0;S.setTexture2D(x,0),T.copyTexSubImage2D(T.TEXTURE_2D,F,0,0,ne,de,I,J),ye.unbindTexture()};const of=T.createFramebuffer(),af=T.createFramebuffer();this.copyTextureToTexture=function(x,D,F=null,k=null,I=0,J=null){J===null&&(I!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let ne,de,ge,Pe,Ce,Se,Ge,$e,dt;const lt=x.isCompressedTexture?x.mipmaps[J]:x.image;if(F!==null)ne=F.max.x-F.min.x,de=F.max.y-F.min.y,ge=F.isBox3?F.max.z-F.min.z:1,Pe=F.min.x,Ce=F.min.y,Se=F.isBox3?F.min.z:0;else{const Wt=Math.pow(2,-I);ne=Math.floor(lt.width*Wt),de=Math.floor(lt.height*Wt),x.isDataArrayTexture?ge=lt.depth:x.isData3DTexture?ge=Math.floor(lt.depth*Wt):ge=1,Pe=0,Ce=0,Se=0}k!==null?(Ge=k.x,$e=k.y,dt=k.z):(Ge=0,$e=0,dt=0);const Xe=Ie.convert(D.format),we=Ie.convert(D.type);let xt;D.isData3DTexture?(S.setTexture3D(D,0),xt=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(S.setTexture2DArray(D,0),xt=T.TEXTURE_2D_ARRAY):(S.setTexture2D(D,0),xt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const je=T.getParameter(T.UNPACK_ROW_LENGTH),Zt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ui=T.getParameter(T.UNPACK_SKIP_PIXELS),Nt=T.getParameter(T.UNPACK_SKIP_ROWS),Xi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,lt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,lt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ce),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Se);const st=x.isDataArrayTexture||x.isData3DTexture,Gt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const Wt=Ee.get(x),At=Ee.get(D),Dt=Ee.get(Wt.__renderTarget),Hr=Ee.get(At.__renderTarget);ye.bindFramebuffer(T.READ_FRAMEBUFFER,Dt.__webglFramebuffer),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Zn=0;Zn<ge;Zn++)st&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ee.get(x).__webglTexture,I,Se+Zn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ee.get(D).__webglTexture,J,dt+Zn)),T.blitFramebuffer(Pe,Ce,ne,de,Ge,$e,ne,de,T.DEPTH_BUFFER_BIT,T.NEAREST);ye.bindFramebuffer(T.READ_FRAMEBUFFER,null),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||Ee.has(x)){const Wt=Ee.get(x),At=Ee.get(D);ye.bindFramebuffer(T.READ_FRAMEBUFFER,of),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,af);for(let Dt=0;Dt<ge;Dt++)st?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Wt.__webglTexture,I,Se+Dt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Wt.__webglTexture,I),Gt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,At.__webglTexture,J,dt+Dt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,At.__webglTexture,J),I!==0?T.blitFramebuffer(Pe,Ce,ne,de,Ge,$e,ne,de,T.COLOR_BUFFER_BIT,T.NEAREST):Gt?T.copyTexSubImage3D(xt,J,Ge,$e,dt+Dt,Pe,Ce,ne,de):T.copyTexSubImage2D(xt,J,Ge,$e,Pe,Ce,ne,de);ye.bindFramebuffer(T.READ_FRAMEBUFFER,null),ye.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Gt?x.isDataTexture||x.isData3DTexture?T.texSubImage3D(xt,J,Ge,$e,dt,ne,de,ge,Xe,we,lt.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(xt,J,Ge,$e,dt,ne,de,ge,Xe,lt.data):T.texSubImage3D(xt,J,Ge,$e,dt,ne,de,ge,Xe,we,lt):x.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,J,Ge,$e,ne,de,Xe,we,lt.data):x.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,J,Ge,$e,lt.width,lt.height,Xe,lt.data):T.texSubImage2D(T.TEXTURE_2D,J,Ge,$e,ne,de,Xe,we,lt);T.pixelStorei(T.UNPACK_ROW_LENGTH,je),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Zt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ui),T.pixelStorei(T.UNPACK_SKIP_ROWS,Nt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xi),J===0&&D.generateMipmaps&&T.generateMipmap(xt),ye.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F=null,k=null,I=0){return dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,F,k,I)},this.initRenderTarget=function(x){Ee.get(x).__webglFramebuffer===void 0&&S.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){C=0,A=0,N=null,ye.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),n.unpackColorSpace=We._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.13.3
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var D0=Object.defineProperty,Na=(t,e)=>{for(var n in e)D0(t,n,{get:e[n],enumerable:!0})},xs={};Na(xs,{ACTIONS:()=>sh,ANIMATION_MIN_DURATION:()=>la,CAPTURE_EVENTS_CLASS:()=>As,CTRLZOOM_TIMEOUT:()=>ih,DBLCLICK_DELAY:()=>eh,EASINGS:()=>fr,ICONS:()=>rn,IDS:()=>Et,KEY_CODES:()=>vt,LONGTOUCH_DELAY:()=>th,MOVE_THRESHOLD:()=>Qc,SPHERE_RADIUS:()=>di,TWOFINGERSOVERLAY_DELAY:()=>nh,VIEWER_DATA:()=>Xn});var I0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,U0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',N0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,O0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,F0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,k0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,z0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,B0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,H0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,la=500,Qc=4,eh=300,th=500,nh=100,ih=2e3,di=10,Xn="photoSphereViewer",As="psv--capture-event",sh=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(sh||{}),Et={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},vt={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},rn={arrow:I0,close:U0,download:N0,fullscreenIn:O0,fullscreenOut:F0,info:k0,menu:z0,zoomIn:B0,zoomOut:H0},fr={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},he={};Na(he,{Animation:()=>wr,Dynamic:()=>Qi,MultiDynamic:()=>Ah,PressHandler:()=>Or,Slider:()=>Rh,SliderDirection:()=>Ch,addClasses:()=>Oa,angle:()=>oh,applyEulerInverse:()=>fa,checkClosedShadowDom:()=>bh,checkStylesheet:()=>wh,checkVersion:()=>Ha,cleanCssPosition:()=>yh,clone:()=>Ir,createTexture:()=>ua,cssPositionIsOrdered:()=>Ba,dasherize:()=>Y0,deepEqual:()=>xh,deepmerge:()=>vh,distance:()=>rh,exitFullscreen:()=>mh,firstNonNull:()=>Nn,getAbortError:()=>ha,getAngle:()=>lh,getClosest:()=>hh,getConfigParser:()=>Nr,getElement:()=>ch,getEventTarget:()=>Er,getMatchingTarget:()=>dh,getPosition:()=>uh,getShortestArc:()=>ah,getStyleProperty:()=>hn,getTouchData:()=>ca,getXMPValue:()=>kt,greatArcDistance:()=>G0,hasParent:()=>X0,invertResolvableBoolean:()=>Ur,isAbortError:()=>Mh,isEmpty:()=>_h,isExtendedPosition:()=>za,isFullscreenEnabled:()=>fh,isNil:()=>_t,isPlainObject:()=>Fa,logWarn:()=>Mt,mergePanoData:()=>Th,parseAngle:()=>ln,parsePoint:()=>q0,parseSpeed:()=>Sh,removeClasses:()=>W0,requestFullscreen:()=>ph,resolveBoolean:()=>ka,speedToDuration:()=>da,sum:()=>V0,throttle:()=>gh,toggleClass:()=>Dr,wrap:()=>ns});function ns(t,e){let n=t%e;return n<0&&(n+=e),n}function V0(t){return t.reduce((e,n)=>e+n,0)}function rh(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function oh(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function ah(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function lh(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function G0([t,e],[n,i]){t-n>Math.PI?t-=2*Math.PI:t-n<-Math.PI&&(t+=2*Math.PI);const s=(n-t)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function ch(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function Dr(t,e,n){n===void 0?t.classList.toggle(e):n?t.classList.add(e):n||t.classList.remove(e)}function Oa(t,e){t.classList.add(...e.split(" ").filter(n=>!!n))}function W0(t,e){t.classList.remove(...e.split(" ").filter(n=>!!n))}function X0(t,e){let n=t;do{if(n===e)return!0;n=n.parentElement}while(n);return!1}function hh(t,e){if(!t?.matches)return null;let n=t;do{if(n.matches(e))return n;n=n.parentElement}while(n);return null}function Er(t){return t?.composedPath()[0]||null}function dh(t,e){return t?t.composedPath().find(n=>!(n instanceof HTMLElement)&&!(n instanceof SVGElement)?!1:n.matches(e)):null}function uh(t){let e=0,n=0,i=t;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,n+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,n-=window.scrollY,{x:e,y:n}}function hn(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function ca(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:rh(e,n),angle:oh(e,n),center:{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}}var Mr;function fh(t,e=!1){return e?t===Mr:document.fullscreenElement===t}function ph(t,e=!1){e?(Mr=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function mh(t=!1){t?(Mr.classList.remove("psv-fullscreen-emulation"),Mr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Y0(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,n)=>(n>0?"-":"")+e.toLowerCase())}function gh(t,e){let n=!1;return function(...i){n||(n=!0,setTimeout(()=>{t.apply(this,i),n=!1},e))}}function Fa(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function vh(t,e){const n=e;return function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((o,a)=>{s[a]=i(null,o)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(o=>{o!=="__proto__"&&(typeof r[o]!="object"||!r[o]||!Fa(r[o])?s[o]=r[o]:r[o]!==n&&(s[o]?i(s[o],r[o]):s[o]=i(null,r[o])))})):s=r,s}(t,e)}function Ir(t){return vh(null,t)}function _h(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function _t(t){return t==null}function Nn(...t){for(const e of t)if(!_t(e))return e;return null}function xh(t,e){if(t===e)return!0;if(tc(t)&&tc(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n of Object.keys(t))if(!xh(t[n],e[n]))return!1;return!0}else return!1}function tc(t){return typeof t=="object"&&t!==null}var le=class Eh extends Error{constructor(e,n){super(n&&n instanceof Error?`${e}: ${n.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,Eh)}};function ka(t,e){Fa(t)?(e(t.initial,!0),t.promise.then(n=>e(n,!1))):e(t,!0)}function Ur(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function ha(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function Mh(t){return t?.name==="AbortError"}function Mt(t){console.warn(`PhotoSphereViewer: ${t}`)}function za(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,n])=>t[e]!==void 0&&t[n]!==void 0)}function kt(t,e,n=!0){let i=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=t.match("GPano:"+e+'="(.*?)"'),i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var nc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yr=["left","center","right"],Sr=["top","center","bottom"],ic=[...yr,...Sr],Yt="center";function q0(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(nc[e[0]]?e=[e[0],Yt]:e=[e[0],e[0]]);const n=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>nc[s]||s),n||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function yh(t,{allowCenter:e,cssOrder:n}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===Yt?t=[Yt,Yt]:yr.indexOf(t[0])!==-1?t=[Yt,t[0]]:Sr.indexOf(t[0])!==-1&&(t=[t[0],Yt])),t.length!==2||ic.indexOf(t[0])===-1||ic.indexOf(t[1])===-1?(Mt(`Unparsable position ${t}`),null):!e&&t[0]===Yt&&t[1]===Yt?(Mt("Invalid position center center"),null):(n&&!Ba(t)&&(t=[t[1],t[0]]),t[1]===Yt&&yr.indexOf(t[0])!==-1&&(t=[Yt,t[0]]),t[0]===Yt&&Sr.indexOf(t[1])!==-1&&(t=[t[1],Yt]),t)):null}function Ba(t){return Sr.indexOf(t[0])!==-1&&yr.indexOf(t[1])!==-1}function Sh(t){let e;if(typeof t=="string"){const n=t.toString().trim();let i=parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Fe.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new le(`Unknown speed unit "${s}"`)}}else e=t;return e}function da(t,e){if(typeof t!="number"){const n=Sh(t);return e/Math.abs(n)*1e3}else return Math.abs(t)}function ln(t,e=!1,n=e){let i;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new le(`Unknown angle "${t}"`);const r=parseFloat(s[1]),o=s[2];if(o)switch(o){case"deg":case"degs":i=Fe.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new le(`Unknown angle unit "${o}"`)}else i=r}else if(typeof t=="number"&&!isNaN(t))i=t;else throw new le(`Unknown angle "${t}"`);return i=ns(e?i+Math.PI:i,Math.PI*2),e?Fe.clamp(i-Math.PI,-Math.PI/(n?2:1),Math.PI/(n?2:1)):i}function ua(t,e=!1){const n=new yt(t);return n.needsUpdate=!0,n.minFilter=e?Fn:Bt,n.generateMipmaps=e,n.anisotropy=e?2:1,n}var sc=new Yn;function fa(t,e){sc.setFromEuler(e).invert(),t.applyQuaternion(sc)}function Nr(t,e){const n=function(i){const s=Ir({...t,...i}),r={};for(let[o,a]of Object.entries(s)){if(e&&o in e)a=e[o](a,{rawConfig:s,defValue:t[o]});else if(!(o in t)){Mt(`Unknown option ${o}`);continue}r[o]=a}return r};return n.defaults=t,n.parsers=e||{},n}function wh(t,e){hn(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Ha(t,e,n){e&&e!==n&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${n}`)}function bh(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function Th(t,e,n,i){const s={isEquirectangular:!0,fullWidth:Nn(n?.fullWidth,i?.fullWidth),fullHeight:Nn(n?.fullHeight,i?.fullHeight),croppedWidth:t,croppedHeight:e,croppedX:Nn(n?.croppedX,i?.croppedX),croppedY:Nn(n?.croppedY,i?.croppedY),poseHeading:Nn(n?.poseHeading,i?.poseHeading,0),posePitch:Nn(n?.posePitch,i?.posePitch,0),poseRoll:Nn(n?.poseRoll,i?.poseRoll,0),initialHeading:i?.initialHeading,initialPitch:i?.initialPitch,initialFov:i?.initialFov};return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(t,e*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-t)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(Mt("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(Mt("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(Mt("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(Mt("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(Mt("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var wr=class{constructor(t){this.easing=fr.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:fr[t.easing]||fr.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,n={};if(e<1){for(const[i,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);n[i]=r}this.options.onTick(n,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,s]of Object.entries(this.options.properties))s&&(n[i]=s.end);this.options.onTick(n,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},Qi=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new le("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?ns(t,this.max):Fe.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?ns(t,this.max):Fe.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let n=null;return this.current>this.target&&this.currentSpeed?n=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(n=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),n!==null&&(n=this.wrap?ns(n,this.max):Fe.clamp(n,this.min,this.max),n!==this.current)?(this.current=n,this.fn&&this.fn(this.current),!0):!1}},Ah=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,n])=>(t[e]=n.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].goto(i,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((n,i)=>(n[i]=t[i]+this.dynamics[i].current,n),{}));else for(const[n,i]of Object.entries(t))this.dynamics[n].step(i,e)}roll(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].roll(i,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[n,i]of Object.entries(t))e=this.dynamics[n].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const n of Object.values(this.dynamics))e=n.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},Or=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},Ch=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(Ch||{}),Rh=class{constructor(t,e,n){this.container=t,this.direction=e,this.listener=n,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,n){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=Fe.clamp((i.bottom-e)/i.height,0,1):s=Fe.clamp((t-i.left)/i.width,0,1),this.listener({value:s,click:!n,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},_e={};Na(_e,{BeforeAnimateEvent:()=>Va,BeforeRenderEvent:()=>is,BeforeRotateEvent:()=>Fh,ClickEvent:()=>Bh,ConfigChangedEvent:()=>Ut,DoubleClickEvent:()=>Xh,FullscreenEvent:()=>ss,HideNotificationEvent:()=>rs,HideOverlayEvent:()=>Jh,HidePanelEvent:()=>Bn,HideTooltipEvent:()=>id,KeypressEvent:()=>Hn,LoadProgressEvent:()=>ld,ObjectEnterEvent:()=>qd,ObjectEvent:()=>Fr,ObjectHoverEvent:()=>Jd,ObjectLeaveEvent:()=>pa,PanoramaErrorEvent:()=>gd,PanoramaLoadEvent:()=>dd,PanoramaLoadedEvent:()=>Oi,PositionUpdatedEvent:()=>os,ReadyEvent:()=>ls,RenderEvent:()=>Cd,RollUpdatedEvent:()=>as,ShowNotificationEvent:()=>cs,ShowOverlayEvent:()=>Id,ShowPanelEvent:()=>Vn,ShowTooltipEvent:()=>kd,SizeUpdatedEvent:()=>hs,StopAllEvent:()=>ds,TransitionDoneEvent:()=>xd,ViewerEvent:()=>Ze,ZoomUpdatedEvent:()=>bn});var Cs=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},Ph=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,n){super.addEventListener(t,e,n)}removeEventListener(t,e,n){super.removeEventListener(t,e,n)}},Ze=class extends Cs{},Lh=class Dh extends Ze{constructor(e,n){super(Dh.type,!0),this.position=e,this.zoomLevel=n}};Lh.type="before-animate";var Va=Lh,Ih=class Uh extends Ze{constructor(e,n){super(Uh.type),this.timestamp=e,this.elapsed=n}};Ih.type="before-render";var is=Ih,Nh=class Oh extends Ze{constructor(e){super(Oh.type,!0),this.position=e}};Nh.type="before-rotate";var Fh=Nh,kh=class zh extends Ze{constructor(e){super(zh.type),this.data=e}};kh.type="click";var Bh=kh,Hh=class Vh extends Ze{constructor(e){super(Vh.type),this.options=e}containsOptions(...e){return e.some(n=>this.options.includes(n))}};Hh.type="config-changed";var Ut=Hh,Gh=class Wh extends Ze{constructor(e){super(Wh.type),this.data=e}};Gh.type="dblclick";var Xh=Gh,Yh=class qh extends Ze{constructor(e){super(qh.type),this.fullscreenEnabled=e}};Yh.type="fullscreen";var ss=Yh,$h=class jh extends Ze{constructor(e){super(jh.type),this.notificationId=e}};$h.type="hide-notification";var rs=$h,Zh=class Kh extends Ze{constructor(e){super(Kh.type),this.overlayId=e}};Zh.type="hide-overlay";var Jh=Zh,Qh=class ed extends Ze{constructor(e){super(ed.type),this.panelId=e}};Qh.type="hide-panel";var Bn=Qh,td=class nd extends Ze{constructor(e){super(nd.type),this.tooltipData=e}};td.type="hide-tooltip";var id=td,sd=class rd extends Ze{constructor(e,n){super(rd.type,!0),this.key=e,this.originalEvent=n}};sd.type="key-press";var Hn=sd,od=class ad extends Ze{constructor(e){super(ad.type),this.progress=e}};od.type="load-progress";var ld=od,cd=class hd extends Ze{constructor(e){super(hd.type),this.panorama=e}};cd.type="panorama-load";var dd=cd,ud=class fd extends Ze{constructor(e){super(fd.type),this.data=e}};ud.type="panorama-loaded";var Oi=ud,pd=class md extends Ze{constructor(e,n){super(md.type),this.panorama=e,this.error=n}};pd.type="panorama-error";var gd=pd,vd=class _d extends Ze{constructor(e){super(_d.type),this.completed=e}};vd.type="transition-done";var xd=vd,Ed=class Md extends Ze{constructor(e){super(Md.type),this.position=e}};Ed.type="position-updated";var os=Ed,yd=class Sd extends Ze{constructor(e){super(Sd.type),this.roll=e}};yd.type="roll-updated";var as=yd,wd=class bd extends Ze{constructor(){super(bd.type)}};wd.type="ready";var ls=wd,Td=class Ad extends Ze{constructor(){super(Ad.type)}};Td.type="render";var Cd=Td,Rd=class Pd extends Ze{constructor(e){super(Pd.type),this.notificationId=e}};Rd.type="show-notification";var cs=Rd,Ld=class Dd extends Ze{constructor(e){super(Dd.type),this.overlayId=e}};Ld.type="show-overlay";var Id=Ld,Ud=class Nd extends Ze{constructor(e){super(Nd.type),this.panelId=e}};Ud.type="show-panel";var Vn=Ud,Od=class Fd extends Ze{constructor(e,n){super(Fd.type),this.tooltip=e,this.tooltipData=n}};Od.type="show-tooltip";var kd=Od,zd=class Bd extends Ze{constructor(e){super(Bd.type),this.size=e}};zd.type="size-updated";var hs=zd,Hd=class Vd extends Ze{constructor(){super(Vd.type)}};Hd.type="stop-all";var ds=Hd,Gd=class Wd extends Ze{constructor(e){super(Wd.type),this.zoomLevel=e}};Gd.type="zoom-updated";var bn=Gd,Fr=class extends Ze{constructor(t,e,n,i,s){super(t),this.originalEvent=e,this.object=n,this.viewerPoint=i,this.userDataKey=s}},Xd=class Yd extends Fr{constructor(e,n,i,s){super(Yd.type,e,n,i,s)}};Xd.type="enter-object";var qd=Xd,$d=class jd extends Fr{constructor(e,n,i,s){super(jd.type,e,n,i,s)}};$d.type="leave-object";var pa=$d,Zd=class Kd extends Fr{constructor(e,n,i,s){super(Kd.type,e,n,i,s)}};Zd.type="hover-object";var Jd=Zd,Ga=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new le("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new le("Current adapter does not support texture coordinates.")}};Ga.supportsDownload=!1;function rc(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Ga)return Ha(e.id,e.VERSION,"5.13.3"),e}return null}var Zi=`${Xn}_touchSupport`,Pt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=Z0(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=$0();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=j0(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Pt.isWebGLSupported)throw new le("WebGL 2 is not supported.");if(Pt.maxTextureWidth===0)throw new le("Unable to detect system capabilities")}};function $0(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function j0(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Zi in localStorage&&(t=localStorage[Zi]==="true");const e=new Promise(n=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(a)},s=()=>{i(),localStorage[Zi]=!1,n(!1)},r=()=>{i(),localStorage[Zi]=!0,n(!0)},o=()=>{i(),localStorage[Zi]=t,n(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const a=setTimeout(o,1e4)});return{initial:t,promise:e}}function Z0(t){let e=t,n=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!n;){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=e,r.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(n=!0)}catch{}r.width=0,r.height=0,n||(e/=2)}if(n)return e;throw new le("Unable to detect system capabilities")}var K0=Nr({resolution:64,useXmpData:!0,blur:!1},{resolution:t=>{if(!t||!Fe.isPowerOfTwo(t))throw new le("EquirectangularAdapter resolution must be power of two.");return t}}),Rs=class extends Ga{constructor(t,e){super(t),this.config=K0(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(t,e){if(_t(t.textureX)||_t(t.textureY))throw new le("Texture position is missing 'textureX' or 'textureY'");const n=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,i=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-i}}sphericalCoordsToTextureCoords(t,e){const n=t.yaw/Math.PI/2*e.fullWidth,i=t.pitch/Math.PI*e.fullHeight;let s=Math.round(t.yaw<Math.PI?n+e.fullWidth/2:n-e.fullWidth/2)-e.croppedX,r=Math.round(e.fullHeight/2-i)-e.croppedY;return(s<0||s>e.croppedWidth||r<0||r>e.croppedHeight)&&(s=r=void 0),{textureX:s,textureY:r}}async loadTexture(t,e=!0,n,i=this.config.useXmpData){if(typeof t!="string"&&(typeof t!="object"||!t.path))return Promise.reject(new le("Invalid panorama url, are you using the right adapter?"));let s;typeof t=="string"?s={path:t,data:n}:s={data:n,...t};const r=await this.viewer.textureLoader.loadFile(s.path,e?d=>this.viewer.textureLoader.dispatchProgress(d):null,s.path),o=i?await this.loadXMP(r):null,a=await this.viewer.textureLoader.blobToImage(r);typeof s.data=="function"&&(s.data=s.data(a,o));const l=Th(a.width,a.height,s.data,o),h=this.createEquirectangularTexture(a);return{panorama:t,texture:h,panoData:l,cacheKey:s.path}}async loadXMP(t){const e=await this.loadBlobAsString(t),n=e.indexOf("<x:xmpmeta");if(n===-1)return null;const i=e.indexOf("</x:xmpmeta>",n);if(i===-1)return null;const s=e.substring(n,i);return s.includes("GPano:")?{fullWidth:kt(s,"FullPanoWidthPixels"),fullHeight:kt(s,"FullPanoHeightPixels"),croppedWidth:kt(s,"CroppedAreaImageWidthPixels"),croppedHeight:kt(s,"CroppedAreaImageHeightPixels"),croppedX:kt(s,"CroppedAreaLeftPixels"),croppedY:kt(s,"CroppedAreaTopPixels"),poseHeading:kt(s,"PoseHeadingDegrees",!1),posePitch:kt(s,"PosePitchDegrees",!1),poseRoll:kt(s,"PoseRollDegrees",!1),initialHeading:kt(s,"InitialViewHeadingDegrees",!1),initialPitch:kt(s,"InitialViewPitchDegrees",!1),initialFov:kt(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(t){return new Promise((e,n)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=n,i.readAsText(t)})}createEquirectangularTexture(t){if(this.config.blur||t.width>Pt.maxTextureWidth){const e=Math.min(1,Pt.maxCanvasWidth/t.width),n=new OffscreenCanvas(Math.floor(t.width*e),Math.floor(t.height*e)),i=n.getContext("2d");return this.config.blur&&(i.filter=`blur(${n.width/2048}px)`),i.drawImage(t,0,0,n.width,n.height),ua(n)}return ua(t)}createMesh(t){const e=t.croppedX/t.fullWidth*2*Math.PI,n=t.croppedWidth/t.fullWidth*2*Math.PI,i=t.croppedY/t.fullHeight*Math.PI,s=t.croppedHeight/t.fullHeight*Math.PI,r=new Ts(di,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*n),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+e,n,i,s).scale(-1,1,1),o=new Ss({depthTest:!1,depthWrite:!1});return new Ht(r,o)}setTexture(t,e){t.material.map=e.texture}setTextureOpacity(t,e){t.material.opacity=e,t.material.transparent=e<1}disposeTexture({texture:t}){t.dispose()}disposeMesh(t){t.geometry.dispose(),t.material.dispose()}};Rs.id="equirectangular";Rs.VERSION="5.13.3";Rs.supportsDownload=!0;var Qd=class extends Rs{constructor(t,e){super(t,{resolution:e?.resolution??64,useXmpData:!1})}async loadTexture(t,e){const n=await super.loadTexture(t,e,null,!1);return n.panoData=null,n}createMesh(){const t=new Ts(di,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),e=t.getAttribute("uv"),n=t.getAttribute("normal");for(let s=0;s<e.count;s++)for(let r=0;r<3;r++){const o=s*3+r,a=n.getX(o),l=n.getY(o),h=n.getZ(o),d=.947;if(s<e.count/6){const f=a===0&&h===0?1:Math.acos(l)/Math.sqrt(a*a+h*h)*(2/Math.PI);e.setXY(o,a*(d/4)*f+1/4,h*(d/2)*f+1/2)}else{const f=a===0&&h===0?1:Math.acos(-l)/Math.sqrt(a*a+h*h)*(2/Math.PI);e.setXY(o,-a*(d/4)*f+3/4,h*(d/2)*f+1/2)}}t.rotateX(-Math.PI/2),t.rotateY(Math.PI);const i=new Ss({depthTest:!1,depthWrite:!1});return new Ht(t,i)}};Qd.id="dual-fisheye";Qd.VERSION="5.13.3";var $n=class eu{constructor(e,n){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof eu?e.viewer:e,this.container=document.createElement(n.tagName??"div"),this.container.className=n.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(n=>n.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},J0=Nr({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),Lt=class extends $n{constructor(t,e){super(t,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=J0(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",n=>{this.state.enabled&&this.onClick(),n.stopPropagation()}),this.container.addEventListener("keydown",n=>{n.key===vt.Enter&&this.state.enabled&&(this.onClick(),n.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){ka(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,Dr(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,Oa(this.container.querySelector("svg"),"psv-button-svg")}},Q0=class extends Lt{constructor(t,e){super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},Es=class extends Lt{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:rn.info}),this.mode=0,this.viewer.addEventListener(rs.type,this),this.viewer.addEventListener(cs.type,this),this.viewer.addEventListener(Bn.type,this),this.viewer.addEventListener(Vn.type,this),this.viewer.addEventListener(Ut.type,this)}destroy(){this.viewer.removeEventListener(rs.type,this),this.viewer.removeEventListener(cs.type,this),this.viewer.removeEventListener(Bn.type,this),this.viewer.removeEventListener(Vn.type,this),this.viewer.removeEventListener(Ut.type,this),super.destroy()}handleEvent(t){if(t instanceof Ut){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof rs?e=this.mode===1:t instanceof cs?e=this.mode===1&&t.notificationId!==Et.DESCRIPTION:t instanceof Bn?e=this.mode===2:t instanceof Vn&&(e=this.mode===2&&t.panelId!==Et.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),n=e&&!e.isVisible(),i=!!this.viewer.config.description;n||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Et.DESCRIPTION);break;case 2:this.viewer.panel.hide(Et.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Et.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Et.DESCRIPTION,content:this.viewer.config.caption}))}};Es.id="description";var tu=class extends Lt{constructor(t){super(t,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:rn.download}),this.viewer.addEventListener(Ut.type,this),this.viewer.addEventListener(Oi.type,this)}destroy(){this.viewer.removeEventListener(Ut.type,this),this.viewer.removeEventListener(Oi.type,this),super.destroy()}handleEvent(t){t instanceof Ut?(t.containsOptions("downloadUrl")&&this.checkSupported(),t.containsOptions("downloadUrl","downloadName")&&this.__update()):t instanceof Oi&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const t=this.container;t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.target="_blank",t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop()}};tu.id="download";var nu=class extends Lt{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:rn.fullscreenIn,iconActive:rn.fullscreenOut}),this.viewer.addEventListener(ss.type,this)}destroy(){this.viewer.removeEventListener(ss.type,this),super.destroy()}handleEvent(t){t instanceof ss&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};nu.id="fullscreen";var ex="psvButton",tx=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${rn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(n=>`
    <li data-psv-button="${n.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${n.content}</span>
      <span class="psv-panel-menu-item-label">${n.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,pr=class extends Lt{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:rn.menu}),this.viewer.addEventListener(Vn.type,this),this.viewer.addEventListener(Bn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Vn.type,this),this.viewer.removeEventListener(Bn.type,this),super.destroy()}handleEvent(t){t instanceof Vn?this.toggleActive(t.panelId===Et.MENU):t instanceof Bn&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Et.MENU,content:tx(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?hh(t,".psv-panel-menu-item"):void 0,n=e?e.dataset[ex]:void 0;n&&(this.viewer.navbar.getButton(n).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Et.MENU)}};pr.id="menu";function nx(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return rn.arrow.replace("rotate(0",`rotate(${e}`)}var Ps=class extends Lt{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:nx(e)}),this.direction=e,this.handler=new Or,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===vt.Enter&&this.__onMouseDown();break;case"keyup":t.key===vt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Ur(Pt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Ps.groupId="move";var iu=class extends Ps{constructor(t){super(t,1)}};iu.id="moveDown";var su=class extends Ps{constructor(t){super(t,2)}};su.id="moveLeft";var ru=class extends Ps{constructor(t){super(t,3)}};ru.id="moveRight";var ou=class extends Ps{constructor(t){super(t,0)}};ou.id="moveUp";var Wa=class extends Lt{constructor(t,e,n){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=n,this.handler=new Or,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===vt.Enter&&this.__onMouseDown();break;case"keyup":t.key===vt.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Ur(Pt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};Wa.groupId="zoom";var au=class extends Wa{constructor(t){super(t,rn.zoomIn,0)}};au.id="zoomIn";var lu=class extends Wa{constructor(t){super(t,rn.zoomOut,1)}};lu.id="zoomOut";var Xa=class extends Lt{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Rh(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(hn(this.container,"max-width"),10),this.viewer.addEventListener(bn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(ls.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(bn.type,this),this.viewer.removeEventListener(ls.type,this),super.destroy()}handleEvent(t){t instanceof bn?this.__moveZoomValue(t.zoomLevel):t instanceof ls&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Ur(Pt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};Xa.id="zoomRange";Xa.groupId="zoom";var cu=class extends Ph{constructor(t){super(),this.viewer=t}init(){}destroy(){}},Ya=class extends cu{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},n=this.constructor,i=n.configParser,s=n.readonlyOptions,r=n.id;for(let[o,a]of Object.entries(t)){if(!(o in i.defaults)){Mt(`${r}: Unknown option "${o}"`);continue}if(s.includes(o)){Mt(`${r}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};Ya.readonlyOptions=[];function ma(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof cu)return Ha(e.id,e.VERSION,"5.13.3"),e}return null}var Cn={panorama:null,container:null,adapter:[Rs,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[vt.ArrowUp]:"ROTATE_UP",[vt.ArrowDown]:"ROTATE_DOWN",[vt.ArrowRight]:"ROTATE_RIGHT",[vt.ArrowLeft]:"ROTATE_LEFT",[vt.PageUp]:"ZOOM_IN",[vt.PageDown]:"ZOOM_OUT",[vt.Plus]:"ZOOM_IN",[vt.Minus]:"ZOOM_OUT"}},oc={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},ga={container:t=>{if(!t)throw new le("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[rc(t[0]),t[1]]:t=[rc(t),null]:t=e,!t[0])throw new le("An undefined value was given for adapter.");if(!t[0].id)throw new le("Adapter has no id.");return t},defaultYaw:t=>ln(t),defaultPitch:t=>ln(t,!0),defaultZoomLvl:t=>Fe.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(Mt("maxFov cannot be lower than minFov"),t=e.maxFov),Fe.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),Fe.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...Cn.lang,...t}),keyboardActions:(t,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:t,fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,withCredentials:t=>typeof t=="boolean"?()=>t:typeof t=="function"?t:()=>!1,defaultTransition:(t,{defValue:e})=>t===null||t.speed===0?null:{...e,...t},rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,n)=>{if(Array.isArray(e)?e=[ma(e[0]),e[1]]:e=[ma(e),null],!e[0])throw new le(`An undefined value was given for plugin ${n}.`);if(!e[0].id)throw new le(`Plugin ${n} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?Ir(Cn.navbar):typeof t=="string"?t.split(/[ ,]/):t},ix=Nr(Cn,ga),Ii=class extends Lt{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(Es.id,!1)?.autoSize(!0)}};Ii.id="caption";var va={},br={};function qa(t,e){if(!t.id)throw new le("Button id is required");if(va[t.id]=t,t.groupId&&(br[t.groupId]=br[t.groupId]||[]).push(t),e){const n=Cn.navbar;switch(e){case"start":n.unshift(t.id);break;case"end":n.push(t.id);break;default:{const[i,s]=e.split(":"),r=n.indexOf(i);if(!i||!s||r===-1)throw new le(`Invalid defaultPosition ${e}`);n.splice(r+(s==="right"?1:0),0,t.id)}}}}[lu,Xa,au,Es,Ii,tu,nu,su,ru,ou,iu].forEach(t=>qa(t));var sx=class extends $n{constructor(t){super(t,{className:`psv-navbar ${As}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(Ii.id)!==-1&&t.indexOf(Es.id)===-1&&t.splice(t.indexOf(Ii.id),0,Es.id),t.forEach(e=>{typeof e=="object"?new Q0(this,e):va[e]?new va[e](this):br[e]?br[e].forEach(n=>{new n(this)}):Mt(`Unknown button ${e}`)}),new pr(this),this.children.forEach(e=>{e instanceof Lt&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof Ii?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const n=this.children.find(i=>i instanceof Lt&&i.id===t);return!n&&e&&Mt(`button "${t}" not found in the navbar`),n}focusButton(t){this.isVisible()&&(this.getButton(t,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(i=>{i instanceof Lt&&i.autoSize()});const t=this.container.offsetWidth;let e=0;const n=[];this.children.forEach(i=>{i.isVisible()&&i instanceof Lt&&(e+=i.width,i.collapsable&&n.push(i))}),e!==0&&(t<e&&n.length>0?(n.forEach(i=>i.collapse()),this.collapsed=n,this.getButton(pr.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(i=>i.uncollapse()),this.collapsed=[],this.getButton(pr.id).hide(!1)),this.getButton(Ii.id,!1)?.autoSize())}};ra.enabled=!1;var Pi={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){ra.enabled&&(Mt("ThreeJS cache should be disabled"),ra.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,n){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=n,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],n)=>{n>0&&(Date.now()-e>=this.ttl*1e3||n>=this.maxItems)&&delete this.items[t]})}},rx=class extends $n{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=hn(this.loader,"color"),this.color=hn(this.canvas,"color"),this.border=parseInt(hn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(hn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Ut.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Ut.type,this),super.destroy()}handleEvent(t){t instanceof Ut&&t.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(t){this.container.classList.remove("psv-loader--undefined");const e=Fe.clamp(t,0,99.999)/100*Math.PI*2,n=this.size/2,i=n,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*r+n,a=-Math.cos(e)*r+n,l=t>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${l} 1 ${o} ${a}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const n=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=n+"px",e.style.maxHeight=n+"px",this.loader.appendChild(e)}}},ox=class extends $n{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new le("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new cs(this.state.contentId)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new rs(e))}}},ax=class extends $n{constructor(t){super(t,{className:`psv-overlay ${As}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Hn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Hn.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),t.stopPropagation()):t instanceof Hn&&this.isVisible()&&this.state.dismissible&&t.key===vt.Escape&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new le("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),this.state.contentId=t.id||null,this.state.dismissible=t.dismissible!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new Id(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Jh(e))}}},lx=200,vo="psv-panel-content--no-interaction",cx=class extends $n{constructor(t){super(t,{className:`psv-panel ${As}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=rn.close,n.title=t.config.lang.close,this.container.appendChild(n),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),n.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Hn.type,this)}destroy(){this.viewer.removeEventListener(Hn.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case Hn.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new le("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Dr(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=n=>{t.clickHandler(Er(n))},this.state.keyHandler=n=>{n.key===vt.Enter&&t.clickHandler(Er(n))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new Vn(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Bn(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(vo))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(vo)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.key===vt.Escape&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(vo)}__resize(t,e){const n=t,i=e,s=Math.max(lx,this.container.offsetWidth-(n-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=n,this.state.mouseY=i}},hx=class extends $n{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",n=>n.stopPropagation()),this.container.addEventListener("mousedown",n=>n.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new le("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new le("Initialized tooltip cannot be re-initialized");t.className&&Oa(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new kd(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.state.arrow=parseInt(hn(this.arrow,"border-top-width"),10),this.state.border=parseInt(hn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){if(this.state.state!==1&&this.state.state!==3)throw new le("Uninitialized tooltip cannot be moved");t.box=t.box??this.state.config?.box??{width:0,height:0},this.state.config=t;const e=this.container,n=this.arrow,i={posClass:yh(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,t);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const a=Ba(i.posClass);s&&(i.posClass[a?0:1]=s),r&&(i.posClass[a?1:0]=r),this.__computeTooltipPosition(i,t)}e.style.top=i.top+"px",e.style.left=i.left+"px",n.style.top=i.arrowTop+"px",n.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new id(this.state.data));const t=parseFloat(hn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const n=this.state.arrow,i=e.top,s=t.height,r=e.left,o=t.width,a=n+this.state.border,l=e.box.width/2+n*2,h=e.box.height/2+n*2;switch(t.posClass.join("-")){case"top-left":t.top=i-h-s,t.left=r+a-o,t.arrowTop=s,t.arrowLeft=o-a-n;break;case"top-center":t.top=i-h-s,t.left=r-o/2,t.arrowTop=s,t.arrowLeft=o/2-n;break;case"top-right":t.top=i-h-s,t.left=r-a,t.arrowTop=s,t.arrowLeft=n;break;case"bottom-left":t.top=i+h,t.left=r+a-o,t.arrowTop=-n*2,t.arrowLeft=o-a-n;break;case"bottom-center":t.top=i+h,t.left=r-o/2,t.arrowTop=-n*2,t.arrowLeft=o/2-n;break;case"bottom-right":t.top=i+h,t.left=r-a,t.arrowTop=-n*2,t.arrowLeft=n;break;case"left-top":t.top=i+a-s,t.left=r-l-o,t.arrowTop=s-a-n,t.arrowLeft=o;break;case"center-left":t.top=i-s/2,t.left=r-l-o,t.arrowTop=s/2-n,t.arrowLeft=o;break;case"left-bottom":t.top=i-a,t.left=r-l-o,t.arrowTop=n,t.arrowLeft=o;break;case"right-top":t.top=i+a-s,t.left=r+l,t.arrowTop=s-a-n,t.arrowLeft=-n*2;break;case"center-right":t.top=i-s/2,t.left=r+l,t.arrowTop=s/2-n,t.arrowLeft=-n*2;break;case"right-bottom":t.top=i-a,t.left=r+l,t.arrowTop=n,t.arrowLeft=-n*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(n=>{n.complete||e.push(new Promise(i=>{n.onload=i,n.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.move(this.state.config)}})}}},dx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Ls=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},en=new U,ir=new fn(0,0,0,"ZXY"),ux=class extends Ls{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Fe.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return Fe.radToDeg(2*Math.atan(Math.tan(Fe.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return Fe.radToDeg(2*Math.atan(Math.tan(Fe.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,n){const i=!_t(e),s=!_t(n),r={};let o=null;if(i){const a=this.viewer.getPosition(),l=ah(a.yaw,e.yaw);r.yaw={start:a.yaw,end:a.yaw+l},r.pitch={start:a.pitch,end:e.pitch},o=da(t,lh(a,e))}if(s){const a=this.viewer.getZoomLevel(),l=Math.abs(n-a);r.zoom={start:a,end:n},o===null&&(o=da(t,Math.PI/4*l/100))}return o===null?typeof t=="number"?o=t:o=la:o=Math.max(la,o),{duration:o,properties:r}}getTransitionOptions(t){let e;const n=this.config.defaultTransition??Cn.defaultTransition;return t.transition===!1||t.transition===null?e=null:t.transition===!0?e={...n}:typeof t.transition=="object"?e={...n,...t.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(t){if(!this.state.textureData?.panoData)throw new le("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!ir.equals(this.viewer.renderer.panoramaPose)||!ir.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,en),en.applyEuler(this.viewer.renderer.panoramaPose),en.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(en)):e}sphericalCoordsToTextureCoords(t){if(!this.state.textureData?.panoData)throw new le("Current adapter does not support texture coordinates or no texture has been loaded");return(!ir.equals(this.viewer.renderer.panoramaPose)||!ir.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,en),fa(en,this.viewer.renderer.sphereCorrection),fa(en,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords(en)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,n=di){return e||(e=new U),e.x=n*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=n*Math.sin(t.pitch),e.z=n*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),n=Math.atan2(t.x,t.z);return{yaw:n<0?-n:Math.PI*2-n,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(n=>n.object.userData[Xn]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,en),this.vector3ToViewerCoords(en)}isPointVisible(t){let e,n;if(t instanceof U)e=t,n=this.vector3ToViewerCoords(t);else if(za(t))e=this.sphericalCoordsToVector3(t,en),n=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&n.x>=0&&n.x<=this.viewer.state.size.width&&n.y>=0&&n.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new le("Position is missing 'yaw' or 'pitch'");return{yaw:ln(t.yaw),pitch:ln(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:ln(t?.pan||0),tilt:ln(t?.tilt||0,!0),roll:ln(t?.roll||0,!0,!1)}}cleanPanoramaPose(t){return{pan:Fe.degToRad(t?.poseHeading||0),tilt:Fe.degToRad(t?.posePitch||0),roll:Fe.degToRad(t?.poseRoll||0)}}cleanPanoramaOptions(t,e){return e?.isEquirectangular&&(_t(t.zoom)&&!_t(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),_t(t.position)&&!_t(e.initialHeading)&&!_t(e.initialPitch)&&(t={...t,position:{yaw:ln(e.initialHeading),pitch:ln(e.initialPitch,!0)}})),t}},fx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,px=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,kr=class hu{constructor(){this.$=hu.IDLE}is(...e){return e.some(n=>this.$&n)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};kr.IDLE=0;kr.CLICK=1;kr.MOVING=2;var ft=kr,mx=class extends Ls{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new ft,this.keyHandler=new Or,this.resizeObserver=new ResizeObserver(gh(()=>this.viewer.autoSize(),50)),this.moveThreshold=Qc*Pt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(is.type,this),this.viewer.addEventListener(ds.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(is.type,this),this.viewer.removeEventListener(ds.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case is.type:this.__applyMoveDelta();break;case ds.type:this.__clearMoveDelta();break}if(!dh(t,"."+As))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===vt.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Et.CTRL_ZOOM))),!this.viewer.dispatchEvent(new Hn(t.key,t))||!this.state.keyboardEnabled)return;const e=this.config.keyboardActions?.[t.key];if(typeof e=="function"){e(this.viewer,t),t.preventDefault();return}if(!(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey)&&e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e),t.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(ft.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY,this.config.mousemove&&t.preventDefault()}__onMouseUp(t){this.step.is(ft.CLICK,ft.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(ft.CLICK,ft.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(ft.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},th))):t.touches.length===2&&(this.step.set(ft.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(ft.CLICK,ft.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(ft.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Et.TWO_FINGERS,image:fx,title:this.config.lang.twoFingers})},nh));else if(this.step.is(ft.CLICK,ft.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Et.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Et.CTRL_ZOOM,image:px,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Et.CTRL_ZOOM),ih);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new ss(t))}__resetMove(){this.step.set(ft.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=ca(t);this.step.set(ft.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,n,i=!1){this.step.is(ft.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,n,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,n,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,o=e-s.top,a=this.viewer.renderer.getIntersections({x:r,y:o}),l=a.find(h=>h.object.userData[Xn]);if(l){const h=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),d={rightclick:i,originalEvent:n,target:Er(n),clientX:t,clientY:e,viewerX:r,viewerY:o,yaw:h.yaw,pitch:h.pitch,objects:a.map(f=>f.object).filter(f=>!f.userData[Xn])};try{const f=this.viewer.dataHelper.sphericalCoordsToTextureCoords(d);Object.assign(d,f)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-d.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-d.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Xh(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Bh(d)),this.data.dblclickData=Ir(d),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},eh))}}__handleObjectsEvents(t){if(!_h(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=uh(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y},i=this.viewer.renderer.getIntersections(n),s=(r,o,a)=>{this.viewer.dispatchEvent(new a(t,r,n,o))};for(const[r,o]of Object.entries(this.state.objectsObservers)){const a=i.find(l=>l.object.userData[r]);a?(o&&a.object!==o&&(s(o,r,pa),this.state.objectsObservers[r]=null),o?s(a.object,r,Jd):(this.state.objectsObservers[r]=a.object,s(a.object,r,qd))):o&&(s(o,r,pa),this.state.objectsObservers[r]=null)}}}__doMove(t,e){if(this.step.is(ft.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(ft.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(ft.MOVING)){const n=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(n/this.state.size.width)*Fe.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*Fe.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(ft.MOVING)){t.preventDefault();const e=ca(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Pt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};We.enabled=!1;var sr=new qe,ac=new et,lc=new Gi,gx=class extends Ls{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new L0(this.config.rendererParameters),this.renderer.setPixelRatio(Pt.pixelRatio),this.renderer.outputColorSpace=hi,this.renderer.toneMapping=bc,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new xr,this.camera=new zt(50,16/9,.1,2*di),this.camera.matrixAutoUpdate=!1;const e=new Ht(new Ts(di).scale(-1,1,1),new Ss({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Xn]:!0},this.scene.add(e),this.raycaster=new $p,this.frustum=new Da,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.viewer.addEventListener(hs.type,this),this.viewer.addEventListener(bn.type,this),this.viewer.addEventListener(os.type,this),this.viewer.addEventListener(as.type,this),this.viewer.addEventListener(Ut.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(hs.type,this),this.viewer.removeEventListener(bn.type,this),this.viewer.removeEventListener(os.type,this),this.viewer.removeEventListener(as.type,this),this.viewer.removeEventListener(Ut.type,this),super.destroy()}handleEvent(t){switch(t.type){case hs.type:this.__onSizeUpdated();break;case bn.type:this.__onZoomUpdated();break;case os.type:this.__onPositionUpdated();break;case as.type:this.__onPositionUpdated();break;case Ut.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new is(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Cd))}setTexture(t){this.meshContainer||(this.meshContainer=new li,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const n=this.viewer.dataHelper.cleanPanoramaPose(t);e.rotation.set(n.tilt,n.pan,n.roll,"YXZ")}setSphereCorrection(t,e=this.meshContainer){const n=this.viewer.dataHelper.cleanSphereCorrection(t);e.rotation.set(n.tilt,n.pan,n.roll,"YXZ")}transition(t,e,n){const i=n.effect==="fade"||n.rotation,s=!_t(e.position),r=!_t(e.zoom),o=new Va(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new li,l=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(l,t,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(t.panoData,l),this.setSphereCorrection(e.sphereCorrection,a),s&&!n.rotation){const p=this.viewer.getPosition(),m=new U(0,1,0);a.rotateOnWorldAxis(m,o.position.yaw-p.yaw);const g=new U(0,1,0).cross(this.camera.getWorldDirection(new U)).normalize();a.rotateOnWorldAxis(g,o.position.pitch-p.pitch)}a.add(l),this.scene.add(a),this.renderer.setRenderTarget(new Wn),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:h,properties:d}=this.viewer.dataHelper.getAnimationProperties(n.speed,n.rotation?o.position:null,i?o.zoomLevel:null),f=new wr({properties:{...d,opacity:{start:0,end:1}},duration:h,easing:"inOutCubic",onTick:p=>{switch(n.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,p.opacity);break;case"black":case"white":p.opacity<.5?this.renderer.toneMappingExposure=n.effect==="black"?Fe.mapLinear(p.opacity,0,.5,1,0):Fe.mapLinear(p.opacity,0,.5,1,4):(this.renderer.toneMappingExposure=n.effect==="black"?Fe.mapLinear(p.opacity,.5,1,0,1):Fe.mapLinear(p.opacity,.5,1,4,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!i&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}s&&n.rotation&&this.viewer.dynamics.position.setValue({yaw:p.yaw,pitch:p.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(p.zoom),this.viewer.needsUpdate()}});return f.then(p=>{a.remove(l),this.scene.remove(a),p?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!n.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(l))}),f}getIntersections(t){sr.x=2*t.x/this.state.size.width-1,sr.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(sr,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(n=>n.object.visible).filter(n=>n.object.isMesh&&!!n.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,sr)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(ac.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(ac),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),lc.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(lc)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=n=>{n.map?.dispose(),n.uniforms&&Object.values(n.uniforms).forEach(i=>{i.value?.dispose?.()}),n.dispose()};t.traverse(n=>{n.geometry?.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>{e(i)}):e(n.material)),n instanceof xr||n.dispose?.(),n!==t&&this.cleanScene(n)})}},vx=class extends Ia{load(t,e,n,i,s){const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r,{signal:s}).then(o=>{if(o.status===200||o.status===0){const a=o.body.getReader(),l=o.headers.get("Content-Length")||o.headers.get("X-File-Size"),h=l?parseInt(l):0,d=h!==0;let f=0;const p=new ReadableStream({start(m){g();function g(){a.read().then(({done:_,value:u})=>{if(_)m.close();else{f+=u.byteLength;const c=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:h});n(c),m.enqueue(u),g()}}).catch(_=>{i(_)})}}});return new Response(p)}else throw new Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>o.blob()).then(o=>{e(o)}).catch(o=>{i(o)})}},_x=class extends Ia{load(t,e,n,i){const s=document.createElement("img");function r(){l(),e(this)}function o(h){if(l(),i?.aborted){const d=new Error;d.name="AbortError",d.message="The operation was aborted.",n(d)}else n(h)}function a(){s.src=""}function l(){s.removeEventListener("load",r,!1),s.removeEventListener("error",o,!1),i?.removeEventListener("abort",a,!1)}return s.addEventListener("load",r,!1),s.addEventListener("error",o,!1),i?.addEventListener("abort",a,!1),t.startsWith("data:")||(s.crossOrigin=this.withCredentials?"use-credentials":"anonymous"),s.src=t,s}},xx=class extends Ls{constructor(t){super(t),this.abortCtrl={},this.fileLoader=new vx,this.imageLoader=new _x}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(t=>t.abort()),this.abortCtrl={}}loadFile(t,e,n){const i=Pi.get(t,n);if(i){if(i instanceof Blob)return e?.(100),Promise.resolve(i);Pi.remove(t,n)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),this.fileLoader.setWithCredentials(this.config.withCredentials(t)),new Promise((s,r)=>{let o=0;e?.(o),this.fileLoader.load(t,a=>{o=100,e?.(o),Pi.add(t,n,a),s(a)},a=>{if(a.lengthComputable){const l=a.loaded/a.total*100;l>o&&(o=l,e?.(o))}},a=>{r(a)},this.__getAbortSignal(n))})}loadImage(t,e,n){const i=Pi.get(t,n);return i?(e?.(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(t)),new Promise((s,r)=>{this.imageLoader.load(t,o=>{Pi.add(t,n,o),s(o)},o=>{r(o)},this.__getAbortSignal(n))})):this.loadFile(t,e,n).then(s=>this.blobToImage(s))}blobToImage(t){return new Promise((e,n)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=n,i.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new le("Current adapter does not support preload"))}dispatchProgress(t){this.viewer.loader.setProgress(t),this.viewer.dispatchEvent(new ld(Math.round(t)))}__getAbortSignal(t){return t?(this.abortCtrl[t]?.signal.aborted&&delete this.abortCtrl[t],this.abortCtrl[t]||(this.abortCtrl[t]=new AbortController),this.abortCtrl[t].signal):null}},Ex=class extends Ls{constructor(t){super(t),this.zoom=new Qi(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new bn(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Ah(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new os(e))},{yaw:new Qi(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new Qi(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new Qi(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new as(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Fe.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Fe.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},Mx=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new U(0,0,di),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},yx=class extends Ph{constructor(t){if(super(),this.plugins={},this.children=[],this.parent=ch(t.container),!this.parent)throw new le('"container" element not found.');this.parent[Xn]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),bh(this.parent),wh(this.container,"core"),this.state=new Mx,this.config=ix(t),this.__setSize(this.config.size),this.overlay=new ax(this);try{Pt.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}Pi.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new gx(this),this.textureLoader=new xx(this),this.eventsHandler=new mx(this),this.dataHelper=new ux(this),this.dynamics=new Ex(this),this.adapter.init?.(),this.loader=new rx(this),this.navbar=new sx(this),this.panel=new cx(this),this.notification=new ox(this),this.autoSize(),this.setCursor(null),ka(Pt.isTouchEnabled,e=>{Dr(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,n])=>{this.plugins[e.id]=new e(this,n)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[t,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[t];this.children.slice().forEach(t=>t.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[Xn]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new ls)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=ma(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return fh(this.parent,Pt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new hs(this.getSize())),this.navbar.autoSize())}setPanorama(t,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const n=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection;const i=r=>{if(Mh(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new gd(t,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new dd(t));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),ha();const o=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!_t(o.zoom)||!_t(o.position))&&this.stopAll(),{textureData:r,cleanOptions:o}});return!n||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Oi(r)),_t(o.zoom)||this.zoom(o.zoom),_t(o.position)||this.rotate(o.position)}).then(()=>i(),r=>i(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:o})=>(this.loader.hide(),this.dispatchEvent(new Oi(r)),this.state.transitionAnimation=this.renderer.transition(r,o,n),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new xd(r)),!r)throw ha()}).then(()=>i(),r=>i(r)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[n,i]of Object.entries(t)){if(!(n in Cn)){Mt(`Unknown option ${n}`);continue}if(n in oc){Mt(oc[n]);continue}switch(n in ga&&(i=ga[n](i,{rawConfig:e,defValue:Cn[n]})),this.config[n]=i,n){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new bn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Ut(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:Et.ERROR,image:dx,title:t,dismissible:!1})}hideError(){this.overlay.hide(Et.ERROR)}rotate(t){const e=new Fh(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=za(t),n=!_t(t.zoom),i=new Va(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(t.speed,i.position,i.zoomLevel);return s?(this.state.animation=new wr({properties:r,duration:s,easing:t.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),n&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),n&&this.zoom(i.zoomLevel),new wr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){["width","height"].forEach(e=>{t?.[e]&&(/^[0-9.]+$/.test(t[e])&&(t[e]+="px"),this.parent.style[e]=t[e])})}enterFullscreen(){this.isFullscreenEnabled()||ph(this.parent,Pt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&mh(Pt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new hx(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new ds),this.disableIdleTimer(),this.stopAnimation()}};/*!
 * Photo Sphere Viewer / Virtual Tour Plugin 5.13.3
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Sx=Object.defineProperty,wx=(t,e)=>{for(var n in e)Sx(t,n,{get:e[n],enumerable:!0})},bx={};wx(bx,{EnterArrowEvent:()=>gu,LeaveArrowEvent:()=>xu,NodeChangedEvent:()=>fu});var du=class uu extends Cs{constructor(e,n){super(uu.type),this.node=e,this.data=n}};du.type="node-changed";var fu=du,pu=class mu extends Cs{constructor(e,n){super(mu.type),this.link=e,this.node=n}};pu.type="enter-arrow";var gu=pu,vu=class _u extends Cs{constructor(e,n){super(_u.type),this.link=e,this.node=n}};vu.type="leave-arrow";var xu=vu,Tx=class extends Tt{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new qe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},Ai=new U,cc=new et,hc=new et,dc=new U,uc=new U,Ax=class{constructor(t={}){const e=this;let n,i,s,r;const o={objects:new WeakMap},a=t.element!==void 0?t.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a,this.getSize=function(){return{width:n,height:i}},this.render=function(m,g){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),cc.copy(g.matrixWorldInverse),hc.multiplyMatrices(g.projectionMatrix,cc),h(m,m,g),p(m)},this.setSize=function(m,g){n=m,i=g,s=n/2,r=i/2,a.style.width=m+"px",a.style.height=g+"px"};function l(m){m.isCSS2DObject&&(m.element.style.display="none");for(let g=0,_=m.children.length;g<_;g++)l(m.children[g])}function h(m,g,_){if(m.visible===!1){l(m);return}if(m.isCSS2DObject){Ai.setFromMatrixPosition(m.matrixWorld),Ai.applyMatrix4(hc);const u=Ai.z>=-1&&Ai.z<=1&&m.layers.test(_.layers)===!0,c=m.element;c.style.display=u===!0?"":"none",u===!0&&(m.onBeforeRender(e,g,_),c.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Ai.x*s+s)+"px,"+(-Ai.y*r+r)+"px)",c.parentNode!==a&&a.appendChild(c),m.onAfterRender(e,g,_));const b={distanceToCameraSquared:d(_,m)};o.objects.set(m,b)}for(let u=0,c=m.children.length;u<c;u++)h(m.children[u],g,_)}function d(m,g){return dc.setFromMatrixPosition(m.matrixWorld),uc.setFromMatrixPosition(g.matrixWorld),dc.distanceToSquared(uc)}function f(m){const g=[];return m.traverseVisible(function(_){_.isCSS2DObject&&g.push(_)}),g}function p(m){const g=f(m).sort(function(u,c){if(u.renderOrder!==c.renderOrder)return c.renderOrder-u.renderOrder;const b=o.objects.get(u).distanceToCameraSquared,w=o.objects.get(c).distanceToCameraSquared;return b-w}),_=g.length;for(let u=0,c=g.length;u<c;u++)g[u].element.style.zIndex=_-u}}},fc=new U,Cx=new Yn,pc=new U,Rx=class extends Tt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof n.element.ownerDocument.defaultView.Element&&n.element.parentNode!==null&&n.element.remove()})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this}},on=new et,Px=new et,Lx=class{constructor(e={}){const n=this;let i,s,r,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const h=document.createElement("div");h.style.transformOrigin="0 0",h.style.pointerEvents="none",l.appendChild(h);const d=document.createElement("div");d.style.transformStyle="preserve-3d",h.appendChild(d),this.getSize=function(){return{width:i,height:s}},this.render=function(u,c){const b=c.projectionMatrix.elements[5]*o;c.view&&c.view.enabled?(h.style.transform=`translate( ${-c.view.offsetX*(i/c.view.width)}px, ${-c.view.offsetY*(s/c.view.height)}px )`,h.style.transform+=`scale( ${c.view.fullWidth/c.view.width}, ${c.view.fullHeight/c.view.height} )`):h.style.transform="",u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),c.parent===null&&c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld();let w,M;c.isOrthographicCamera&&(w=-(c.right+c.left)/2,M=(c.top+c.bottom)/2);const L=c.view&&c.view.enabled?c.view.height/c.view.fullHeight:1,C=c.isOrthographicCamera?`scale( ${L} )scale(`+b+")translate("+f(w)+"px,"+f(M)+"px)"+p(c.matrixWorldInverse):`scale( ${L} )translateZ(`+b+"px)"+p(c.matrixWorldInverse),N=(c.isPerspectiveCamera?"perspective("+b+"px) ":"")+C+"translate("+r+"px,"+o+"px)";a.camera.style!==N&&(d.style.transform=N,a.camera.style=N),_(u,u,c)},this.setSize=function(u,c){i=u,s=c,r=i/2,o=s/2,l.style.width=u+"px",l.style.height=c+"px",h.style.width=u+"px",h.style.height=c+"px",d.style.width=u+"px",d.style.height=c+"px"};function f(u){return Math.abs(u)<1e-10?0:u}function p(u){const c=u.elements;return"matrix3d("+f(c[0])+","+f(-c[1])+","+f(c[2])+","+f(c[3])+","+f(c[4])+","+f(-c[5])+","+f(c[6])+","+f(c[7])+","+f(c[8])+","+f(-c[9])+","+f(c[10])+","+f(c[11])+","+f(c[12])+","+f(-c[13])+","+f(c[14])+","+f(c[15])+")"}function m(u){const c=u.elements;return"translate(-50%,-50%)"+("matrix3d("+f(c[0])+","+f(c[1])+","+f(c[2])+","+f(c[3])+","+f(-c[4])+","+f(-c[5])+","+f(-c[6])+","+f(-c[7])+","+f(c[8])+","+f(c[9])+","+f(c[10])+","+f(c[11])+","+f(c[12])+","+f(c[13])+","+f(c[14])+","+f(c[15])+")")}function g(u){u.isCSS3DObject&&(u.element.style.display="none");for(let c=0,b=u.children.length;c<b;c++)g(u.children[c])}function _(u,c,b,w){if(u.visible===!1){g(u);return}if(u.isCSS3DObject){const M=u.layers.test(b.layers)===!0,L=u.element;if(L.style.display=M===!0?"":"none",M===!0){u.onBeforeRender(n,c,b);let C;u.isCSS3DSprite?(on.copy(b.matrixWorldInverse),on.transpose(),u.rotation2D!==0&&on.multiply(Px.makeRotationZ(u.rotation2D)),u.matrixWorld.decompose(fc,Cx,pc),on.setPosition(fc),on.scale(pc),on.elements[3]=0,on.elements[7]=0,on.elements[11]=0,on.elements[15]=1,C=m(on)):C=m(u.matrixWorld);const A=a.objects.get(u);if(A===void 0||A.style!==C){L.style.transform=C;const N={style:C};a.objects.set(u,N)}L.parentNode!==d&&d.appendChild(L),u.onAfterRender(n,c,b)}}for(let M=0,L=u.children.length;M<L;M++)_(u.children[M],c,b)}}},Dx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
</svg>`,Tr="tourLink",Ci="__tour-link__",Ix={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},Ux={element:()=>{const t=document.createElement("button");return t.className="psv-virtual-tour-arrow",t.innerHTML=Dx,t},size:{width:80,height:80}},_o="arrow",Nx=class extends $n{constructor(t,e){super(t,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new Lx({element:this.container}):new Ax({element:this.container}),this.camera=this.is3D?new zt(30,1):null,this.scene=new xr,this.viewer.addEventListener(_e.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(_e.PositionUpdatedEvent.type,this),this.viewer.addEventListener(_e.SizeUpdatedEvent.type,this),this.viewer.addEventListener(_e.RenderEvent.type,this),this.viewer.addEventListener(_e.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",n=>n.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),this.gallery?.addEventListener("show-gallery",this),this.gallery?.addEventListener("hide-gallery",this))}destroy(){this.viewer.removeEventListener(_e.ReadyEvent.type,this),this.viewer.removeEventListener(_e.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(_e.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(_e.RenderEvent.type,this),this.viewer.removeEventListener(_e.ClickEvent.type,this),this.gallery?.removeEventListener("show-gallery",this),this.gallery?.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(t){switch(t.type){case _e.ReadyEvent.type:case _e.SizeUpdatedEvent.type:case _e.PositionUpdatedEvent.type:this.__updateCamera();break;case _e.RenderEvent.type:this.render();break;case _e.ClickEvent.type:{if(t.data.rightclick)break;const e=this.__getTargetLink(t.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(he.getEventTarget(t));e&&this.plugin.__onEnterArrow(e,t);break}case"mouseleave":{const e=this.__getTargetLink(he.getEventTarget(t));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(he.getEventTarget(t),!0)&&this.plugin.__onHoverArrow(t);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":t.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const t=this.viewer.getSize();if(this.renderer.setSize(t.width,t.height),this.is3D){const e=this.viewer.getPosition();e.pitch=Fe.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,t.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(t.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const t=this.viewer.getPosition(),e=[];let n=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(i=>{const s=i.userData[_o];if(s.conflict){const r=Math.abs(he.getShortestArc(t.yaw,s.yaw));n=Math.min(n,r),e.push([i,r])}}),e.forEach(([i,s])=>{const r=s!==n;i.element.style.opacity=r?"0.5":null,i.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(t,e){if(e?.image){const n=document.createElement("img");return n.src=e.image,n}else if(e?.element)return typeof e.element=="function"?e.element(t):e.element}addLinkArrow(t,e,n=1){let i=this.__buildArrowElement(t,t.arrowStyle);i||(i=this.__buildArrowElement(t,this.arrowStyle)),i[Tr]=t;const s={...this.arrowStyle,...t.arrowStyle};if(i.classList.add("psv-virtual-tour-link"),s.className&&he.addClasses(i,s.className),s.style&&Object.assign(i.style,s.style),this.is3D){i.style.width=s.size.width*1.5+"px",i.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(a=>{const l=a.userData[_o];Math.abs(he.getShortestArc(l.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(l.conflict=!0,r=!0)});const o=new Rx(i);o.userData[_o]={yaw:e.yaw,conflict:r},o.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},o.position,n*100),this.scene.add(o)}else{i.style.width=s.size.width+"px",i.style.height=s.size.height+"px",i.style.pointerEvents="auto";const r=new Tx(i);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(t,e=!1){const n=e?he.getClosest(t,".psv-virtual-tour-link"):t;return n?n[Tr]:void 0}__onToggleGallery(t){t?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},Eu=class{constructor(t,e){this.plugin=t,this.viewer=e,this.nodes={}}destroy(){}checkNode(t){if(!t.id)throw new le("No id given for node");if(!t.panorama)throw new le(`No panorama provided for node ${t.id}`);if(this.plugin.isGps&&!(t.gps?.length>=2))throw new le(`No GPS position provided for node ${t.id}`);if(!this.plugin.isGps&&t.markers?.some(e=>e.gps&&!e.position))throw new le("Cannot use GPS positioning for markers in manual mode");t.links||(he.logWarn(`Node ${t.id} has no links`),t.links=[])}checkLink(t,e){if(!e.nodeId)throw new le(`Link of node ${t.id} has no target id`);if(e.nodeId===t.id)throw new le(`Node ${t.id} links to itself`);if(!this.plugin.isGps&&!he.isExtendedPosition(e.position))throw new le(`No position provided for link ${e.nodeId} of node ${t.id}`);if(this.plugin.isGps&&!e.gps)throw new le(`No GPS position provided for link ${e.nodeId} of node ${t.id}`)}},Ox=class extends Eu{async loadNode(t){if(this.nodes[t])return this.nodes[t];throw new le(`Node ${t} not found`)}setNodes(t){if(!t?.length)throw new le("No nodes provided");const e={},n={};t.forEach(i=>{if(this.checkNode(i),e[i.id])throw new le(`Duplicate node ${i.id}`);e[i.id]=i}),t.forEach(i=>{this.__checkLinks(i,e),i.links.forEach(s=>{n[s.nodeId]=!0})}),t.forEach(i=>{n[i.id]||he.logWarn(`Node ${i.id} is never linked to`)}),this.nodes=e}updateNode(t){if(!t.id)throw new le("No id given for node");const e=this.nodes[t.id];if(!e)throw new le(`Node ${t.id} does not exist`);return Object.assign(e,t),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(t,e){t.links.forEach(n=>{if(!e[n.nodeId])throw new le(`Target node ${n.nodeId} of node ${t.id} does not exists`);n.gps=n.gps||e[n.nodeId].gps,this.checkLink(t,n)})}},Fx=class extends Eu{constructor(t,e){if(super(t,e),!t.config.getNode)throw new le("Missing getNode() option.");this.nodeResolver=t.config.getNode}async loadNode(t){if(this.nodes[t])return this.nodes[t];{const e=await this.nodeResolver(t);return this.checkNode(e),e.links.forEach(n=>{this.checkLink(e,n)}),this.nodes[t]=e,e}}clearCache(){this.nodes={}}};function mc(t,e){const n=gc(t),i=gc(e),s=t[2]??0,r=e[2]??0;let o=0;return s!==r&&(o=Math.atan((r-s)/kx(n,i))),{yaw:zx(n,i),pitch:o}}function gc(t){return[Fe.degToRad(t[0]),Fe.degToRad(t[1])]}function kx(t,e){return he.greatArcDistance(t,e)*6371e3}function zx(t,e){const[n,i]=t,[s,r]=e,o=Math.sin(s-n)*Math.cos(r),a=Math.cos(i)*Math.sin(r)-Math.sin(i)*Math.cos(r)*Math.cos(s-n);return Math.atan2(o,a)}var $a=he.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,arrowStyle:Ux,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(t){if(t!=="client"&&t!=="server")throw new le("VirtualTourPlugin: invalid dataMode");return t},positionMode(t){if(t!=="gps"&&t!=="manual")throw new le("VirtualTourPlugin: invalid positionMode");return t},renderMode(t){if(t!=="3d"&&t!=="2d")throw new le("VirtualTourPlugin: invalid renderMode");return t},arrowsPosition(t,{defValue:e}){return{...e,...t}},arrowStyle(t,{defValue:e}){return{...e,...t}},map(t,{rawConfig:e}){if(t){if(e.dataMode==="server")return he.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!t.imageUrl)return he.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null}return t}}),Ds=class extends Ya{constructor(t,e){super(t,e),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new Nx(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}init(){super.init(),this.arrowsRenderer.init(),he.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),this.markers?.config.markers&&(he.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&he.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new Fx(this,this.viewer):new Ox(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),this.plan?.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){this.map?.removeEventListener("select-hotspot",this),this.plan?.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(t){if(t instanceof _e.ClickEvent){const e=t.data.objects.find(n=>n.userData[Tr])?.userData[Tr];e&&this.setCurrentNode(e.nodeId,null,e)}else if(t.type==="select-hotspot"){const e=t.hotspotId;e.startsWith(Ci)&&this.setCurrentNode(e.substring(Ci.length))}}getCurrentNode(){return this.state.currentNode}setNodes(t,e){if(this.isServerSide)throw new le("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(t),e?this.datasource.nodes[e]||(e=t[0].id,he.logWarn(`startNodeId not found is provided nodes, resetted to ${e}`)):e=t[0].id,this.setCurrentNode(e),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(t,e,n){if(t===this.state.currentNode?.id&&!e?.forceUpdate)return Promise.resolve(!0);e?.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=t;const i=this.state.currentNode,s=i&&n?this.__getLinkPosition(i,n):null;return Promise.resolve(this.state.preload[t]).then(()=>{if(this.state.loadingNode!==t)throw he.getAbortError();return this.datasource.loadNode(t)}).then(r=>{if(this.state.loadingNode!==t)throw he.getAbortError();const o={...$a.defaults.transitionOptions,rotateTo:s,zoomTo:s?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(r,i,n):this.config.transitionOptions,...e};return o.effect||(o.effect="none"),this.viewer.panel.hide("description"),this.__hideTooltip(),this.arrowsRenderer.clear(),this.gallery?.config.hideOnClick&&this.gallery.hide(),this.map?.config.minimizeOnHotspotClick&&this.map.minimize(),this.plan?.config.minimizeOnHotspotClick&&this.plan.minimize(),o.rotation&&o.effect==="none"?this.viewer.animate({...o.rotateTo,zoom:o.zoomTo,speed:o.speed}).then(()=>[r,o]):Promise.resolve([r,o])}).then(([r,o])=>{if(this.state.loadingNode!==t)throw he.getAbortError();return this.markers?.clearMarkers(),this.config.linksOnCompass&&this.compass?.clearHotspots(),this.viewer.setPanorama(r.panorama,{caption:r.caption,description:r.description,panoData:r.panoData,sphereCorrection:r.sphereCorrection,showLoader:o.showLoader,position:o.rotateTo,zoom:o.zoomTo,transition:o.effect==="none"?!1:{effect:o.effect,rotation:o.rotation,speed:o.speed}}).then(a=>{if(!a)throw he.getAbortError();return r})}).then(r=>{if(this.state.loadingNode!==t)throw he.getAbortError();return this.state.currentNode=r,this.map&&this.map.setCenter(this.__getNodeMapPosition(r)??this.map.config.center),this.plan?.setCoordinates(r.gps),this.__addNodeMarkers(r),this.__renderLinks(r),this.__preload(r),this.state.loadingNode=null,this.dispatchEvent(new fu(r,{fromNode:i,fromLink:n,fromLinkPosition:s})),this.viewer.resetIdleTimer(),!0}).catch(r=>{if(he.isAbortError(r))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,r})}async gotoLink(t,e="8rpm"){const n=this.getLinkPosition(t);e?await this.viewer.animate({...n,speed:e}):this.viewer.rotate(n)}getLinkPosition(t){const e=this.state.currentNode?.links.find(n=>n.nodeId===t);if(!e)throw new le(`Cannot find link "${t}"`);return this.__getLinkPosition(this.state.currentNode,e)}updateNode(t){if(this.isServerSide)throw new le("Cannot update node in server side mode");const e=this.datasource.updateNode(t);if((t.name||t.thumbnail||t.panorama)&&this.__setGalleryItems(),(t.name||t.gps||t.map)&&this.__setMapHotspots(),(t.name||t.gps||t.plan)&&this.__setPlanHotspots(),this.state.currentNode?.id===e.id){if(this.__hideTooltip(),t.panorama||t.panoData||t.sphereCorrection){this.setCurrentNode(e.id,{forceUpdate:!0});return}t.caption&&this.viewer.setOption("caption",e.caption),t.description&&this.viewer.setOption("description",e.description),(t.links||t.gps)&&this.__renderLinks(e),t.gps&&this.plan?.setCoordinates(e.gps),(t.map||t.gps)&&this.map?.setCenter(this.__getNodeMapPosition(e)),(t.markers||t.gps)&&this.__addNodeMarkers(e)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).filter(t=>t.showInGallery!==!1).map(t=>({id:t.id,panorama:t.panorama,name:t.name,thumbnail:t.thumbnail})),t=>{this.setCurrentNode(t)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).filter(t=>t.map!==!1).map(t=>({tooltip:t.name,...t.map||{},...this.__getNodeMapPosition(t),id:Ci+t.id})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).filter(t=>t.plan!==!1).map(t=>({tooltip:t.name,...t.plan||{},coordinates:t.gps,id:Ci+t.id})))}__renderLinks(t){this.arrowsRenderer.clear();const e=[];t.links.forEach(n=>{const i=this.__getLinkPosition(t,n);i.yaw+=n.linkOffset?.yaw??0,i.pitch+=n.linkOffset?.pitch??0,this.isGps&&!this.is3D&&(i.pitch+=this.config.arrowsPosition.linkPitchOffset),e.push(i),this.arrowsRenderer.addLinkArrow(n,i,n.linkOffset?.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&this.compass?.setHotspots(e)}__getLinkPosition(t,e){return this.isGps?mc(t.gps,e.gps):this.viewer.dataHelper.cleanPosition(e.position)}async __getTooltipContent(t){const e=await this.datasource.loadNode(t.nodeId),n=[];(e.name||e.thumbnail||e.caption)&&(e.name&&n.push(`<h3>${e.name}</h3>`),e.thumbnail&&n.push(`<img src="${e.thumbnail}">`),e.caption&&n.push(`<p>${e.caption}</p>`));let i=n.join("");return this.config.getLinkTooltip&&(i=this.config.getLinkTooltip(i,t,e)),i}__onEnterArrow(t,e){const n=he.getPosition(this.viewer.container),i={x:e.clientX-n.x,y:e.clientY-n.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...Ix,left:i.x,top:i.y,box:{width:20,height:20}}),this.__getTooltipContent(t).then(s=>{s?this.state.currentTooltip.update(s):this.__hideTooltip()})),this.map?.setActiveHotspot(Ci+t.nodeId),this.plan?.setActiveHotspot(Ci+t.nodeId),this.dispatchEvent(new gu(t,this.state.currentNode))}__onHoverArrow(t){const e=he.getPosition(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y};this.state.currentTooltip?.move({left:n.x,top:n.y})}__onLeaveArrow(t){this.__hideTooltip(),this.map?.setActiveHotspot(null),this.plan?.setActiveHotspot(null),this.dispatchEvent(new xu(t,this.state.currentNode))}__hideTooltip(){this.state.currentTooltip?.hide(),this.state.currentTooltip=null}__preload(t){this.config.preload&&(this.state.preload[t.id]=!0,this.state.currentNode.links.filter(e=>!this.state.preload[e.nodeId]).filter(e=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,e):!0).forEach(e=>{this.state.preload[e.nodeId]=this.datasource.loadNode(e.nodeId).then(n=>this.viewer.textureLoader.preloadPanorama(n.panorama)).then(()=>{this.state.preload[e.nodeId]=!0}).catch(()=>{delete this.state.preload[e.nodeId]})}))}__addNodeMarkers(t){t.markers&&(this.markers?this.markers.setMarkers(t.markers.map(e=>(e.gps&&this.isGps&&(e.position=mc(t.gps,e.gps),e.data?.map&&Object.assign(e.data.map,this.__getGpsMapPosition(e.gps)),e.data?.plan&&(e.data.plan.coordinates=e.gps)),e))):he.logWarn(`Node ${t.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(t){const e=this.__getGpsMapPosition(t.gps);return e||(t.map?{x:t.map.x,y:t.map.y}:null)}__getGpsMapPosition(t){const e=this.config.map;return this.isGps&&e&&e.extent&&e.size?{x:Fe.mapLinear(t[0],e.extent[0],e.extent[2],0,e.size.width),y:Fe.mapLinear(t[1],e.extent[1],e.extent[3],0,e.size.height)}:null}};Ds.id="virtual-tour";Ds.VERSION="5.13.3";Ds.configParser=$a;Ds.readonlyOptions=Object.keys($a.defaults);/*!
 * Photo Sphere Viewer / Markers Plugin 5.13.3
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var Bx=Object.defineProperty,Hx=(t,e)=>{for(var n in e)Bx(t,n,{get:e[n],enumerable:!0})},Vx={};Hx(Vx,{EnterMarkerEvent:()=>Lu,GotoMarkerDoneEvent:()=>_a,HideMarkersEvent:()=>us,LeaveMarkerEvent:()=>Cu,MarkerVisibilityEvent:()=>Su,MarkersPluginEvent:()=>$t,RenderMarkersListEvent:()=>Zu,SelectMarkerEvent:()=>Uu,SelectMarkerListEvent:()=>Fu,SetMarkersEvent:()=>Xu,ShowMarkersEvent:()=>fs,UnselectMarkerEvent:()=>Bu});var $t=class extends Cs{},Mu=class yu extends $t{constructor(e,n){super(yu.type),this.marker=e,this.visible=n}};Mu.type="marker-visibility";var Su=Mu,wu=class bu extends $t{constructor(e){super(bu.type),this.marker=e}};wu.type="goto-marker-done";var _a=wu,Tu=class Au extends $t{constructor(e){super(Au.type),this.marker=e}};Tu.type="leave-marker";var Cu=Tu,Ru=class Pu extends $t{constructor(e){super(Pu.type),this.marker=e}};Ru.type="enter-marker";var Lu=Ru,Du=class Iu extends $t{constructor(e,n,i){super(Iu.type),this.marker=e,this.doubleClick=n,this.rightClick=i}};Du.type="select-marker";var Uu=Du,Nu=class Ou extends $t{constructor(e){super(Ou.type),this.marker=e}};Nu.type="select-marker-list";var Fu=Nu,ku=class zu extends $t{constructor(e){super(zu.type),this.marker=e}};ku.type="unselect-marker";var Bu=ku,Hu=class Vu extends $t{constructor(){super(Vu.type)}};Hu.type="hide-markers";var us=Hu,Gu=class Wu extends $t{constructor(e){super(Wu.type),this.markers=e}};Gu.type="set-markers";var Xu=Gu,Yu=class qu extends $t{constructor(){super(qu.type)}};Yu.type="show-markers";var fs=Yu,$u=class ju extends $t{constructor(e){super(ju.type),this.markers=e}};$u.type="render-markers-list";var Zu=$u,Gx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Ms=class extends Lt{constructor(t){super(t,{className:"psv-markers-button",icon:Gx,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(fs.type,this),this.plugin.addEventListener(us.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(fs.type,this),this.plugin.removeEventListener(us.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof fs?this.toggleActive(!0):t instanceof us&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Ms.id="markers";var Ku=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Ar="http://www.w3.org/2000/svg",rt="psvMarker",Wx=he.dasherize(rt),Ki="marker",Li="markersList",xa={amount:2,duration:100,easing:"linear"},Xx=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Ku} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${t.map(n=>`
        <li data-${Wx}="${n.id}" class="psv-panel-menu-item" tabindex="0">
          ${n.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${n.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${n.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,zr=class extends Lt{constructor(t){super(t,{className:" psv-markers-list-button",icon:Ku,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(_e.ShowPanelEvent.type,this),this.viewer.addEventListener(_e.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(_e.ShowPanelEvent.type,this),this.viewer.removeEventListener(_e.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(t){t instanceof _e.ShowPanelEvent?this.toggleActive(t.panelId===Li):t instanceof _e.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};zr.id="markersList";var vc=new U,Yx=new Yn,_c=new U,qx=class extends Tt{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}},an=new et,$x=new et,jx=class{constructor(t={}){const e=this;let n,i,s,r;const o={camera:{style:""},objects:new WeakMap},a=t.element!==void 0?t.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",a.appendChild(l);const h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:n,height:i}},this.render=function(_,u){const c=u.projectionMatrix.elements[5]*r;u.view&&u.view.enabled?(l.style.transform=`translate( ${-u.view.offsetX*(n/u.view.width)}px, ${-u.view.offsetY*(i/u.view.height)}px )`,l.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):l.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let b,w;u.isOrthographicCamera&&(b=-(u.right+u.left)/2,w=(u.top+u.bottom)/2);const M=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,L=u.isOrthographicCamera?`scale( ${M} )scale(`+c+")translate("+d(b)+"px,"+d(w)+"px)"+f(u.matrixWorldInverse):`scale( ${M} )translateZ(`+c+"px)"+f(u.matrixWorldInverse),A=(u.isPerspectiveCamera?"perspective("+c+"px) ":"")+L+"translate("+s+"px,"+r+"px)";o.camera.style!==A&&(h.style.transform=A,o.camera.style=A),g(_,_,u)},this.setSize=function(_,u){n=_,i=u,s=n/2,r=i/2,a.style.width=_+"px",a.style.height=u+"px",l.style.width=_+"px",l.style.height=u+"px",h.style.width=_+"px",h.style.height=u+"px"};function d(_){return Math.abs(_)<1e-10?0:_}function f(_){const u=_.elements;return"matrix3d("+d(u[0])+","+d(-u[1])+","+d(u[2])+","+d(u[3])+","+d(u[4])+","+d(-u[5])+","+d(u[6])+","+d(u[7])+","+d(u[8])+","+d(-u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(-u[13])+","+d(u[14])+","+d(u[15])+")"}function p(_){const u=_.elements;return"translate(-50%,-50%)"+("matrix3d("+d(u[0])+","+d(u[1])+","+d(u[2])+","+d(u[3])+","+d(-u[4])+","+d(-u[5])+","+d(-u[6])+","+d(-u[7])+","+d(u[8])+","+d(u[9])+","+d(u[10])+","+d(u[11])+","+d(u[12])+","+d(u[13])+","+d(u[14])+","+d(u[15])+")")}function m(_){_.isCSS3DObject&&(_.element.style.display="none");for(let u=0,c=_.children.length;u<c;u++)m(_.children[u])}function g(_,u,c,b){if(_.visible===!1){m(_);return}if(_.isCSS3DObject){const w=_.layers.test(c.layers)===!0,M=_.element;if(M.style.display=w===!0?"":"none",w===!0){_.onBeforeRender(e,u,c);let L;_.isCSS3DSprite?(an.copy(c.matrixWorldInverse),an.transpose(),_.rotation2D!==0&&an.multiply($x.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(vc,Yx,_c),an.setPosition(vc),an.scale(_c),an.elements[3]=0,an.elements[7]=0,an.elements[11]=0,an.elements[15]=1,L=p(an)):L=p(_.matrixWorld);const C=o.objects.get(_);if(C===void 0||C.style!==L){M.style.transform=L;const A={style:L};o.objects.set(_,A)}M.parentNode!==h&&h.appendChild(M),_.onAfterRender(e,u,c)}}for(let w=0,M=_.children.length;w<M;w++)g(_.children[w],u,c)}}},Zx=class{constructor(t){this.viewer=t,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new jx({element:this.element}),this.scene=new xr,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(n=>{const i=n.target[rt];i.config.visible&&(i.viewportIntersection=n.isIntersecting)})},{root:this.element}),t.addEventListener(_e.ReadyEvent.type,this,{once:!0}),t.addEventListener(_e.SizeUpdatedEvent.type,this),t.addEventListener(_e.RenderEvent.type,this)}handleEvent(t){switch(t.type){case _e.ReadyEvent.type:case _e.SizeUpdatedEvent.type:this.updateSize();break;case _e.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(_e.ReadyEvent.type,this),this.viewer.removeEventListener(_e.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(_e.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const t=this.viewer.getSize();this.renderer.setSize(t.width,t.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(t){this.scene.add(t.threeElement),this.intersectionObserver.observe(t.domElement)}removeObject(t){this.scene.remove(t.threeElement),this.intersectionObserver.unobserve(t.domElement)}},mr=(t=>(t.image="image",t.html="html",t.element="element",t.imageLayer="imageLayer",t.videoLayer="videoLayer",t.elementLayer="elementLayer",t.polygon="polygon",t.polygonPixels="polygonPixels",t.polyline="polyline",t.polylinePixels="polylinePixels",t.square="square",t.rect="rect",t.circle="circle",t.ellipse="ellipse",t.path="path",t))(mr||{});function Ea(t,e=!1){const n=[];if(Object.keys(mr).forEach(i=>{t[i]&&n.push(i)}),n.length===0&&!e)throw new le(`missing marker content, either ${Object.keys(mr).join(", ")}`);if(n.length>1)throw new le(`multiple marker content, either ${Object.keys(mr).join(", ")}`);return n[0]}var Ju=class{constructor(t,e,n){if(this.viewer=t,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!n.id)throw new le("missing marker id");this.type=Ea(n),this.createElement(),this.update(n)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(t){const e=Ea(t,!0);if(e!==void 0&&e!==this.type)throw new le(`cannot change marker ${t.id} type`);if(this.config=he.deepmerge(this.config,t),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),he.isNil(this.config.visible)&&(this.config.visible=!0),he.isNil(this.config.zIndex)&&(this.config.zIndex=1),he.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const n=this.config.rotation;typeof n=="object"?this.config.rotation={yaw:n.yaw?he.parseAngle(n.yaw,!0,!1):0,pitch:n.pitch?he.parseAngle(n.pitch,!0,!1):0,roll:n.roll?he.parseAngle(n.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:he.parseAngle(n,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=he.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(t,e,n=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const i={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(t||e){const s=he.getPosition(this.viewer.container);i.top=e-s.y+10,i.left=t-s.x,i.box={width:20,height:20}}else i.top=this.state.position2D.y,i.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,o=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,o*=this.config.hoverScale.amount),i.top=s.y-o*this.state.anchor.y+o/2,i.left=s.x-r*this.state.anchor.x+r/2,i.box={width:r,height:o}}this.tooltip?n?this.tooltip.update(this.config.tooltip.content,i):this.tooltip.move(i):this.tooltip=this.viewer.createTooltip(i)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},ja=class extends Ju{get domElement(){return this.element}constructor(t,e,n){super(t,e,n)}afterCreateElement(){this.element[rt]=this}destroy(){delete this.element[rt],super.destroy()}update(t){super.update(t);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&he.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},Cr=class extends ja{constructor(t,e,n){super(t,e,n)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:t,zoomLevel:e,hoveringMarker:n}){this.__updateSize();const i=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return i.x-=this.state.size.width*this.state.anchor.x,i.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&i.x+this.state.size.width>=0&&i.x-this.state.size.width<=this.viewer.state.size.width&&i.y+this.state.size.height>=0&&i.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${i.x}px ${i.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:t,mouseover:this===n}),i):null}update(t){if(super.update(t),!he.isExtendedPosition(this.config.position))throw new le(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new le(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||xa:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?Fe.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const t=this.domElement,e=!this.state.visible||!this.state.size;if(e&&t.classList.add("psv-marker--transparent"),this.isSvg()){const n=t.firstElementChild.getBoundingClientRect();this.state.size={width:n.width,height:n.height}}else this.state.size={width:t.offsetWidth,height:t.offsetHeight};e&&t.classList.remove("psv-marker--transparent"),this.isSvg()&&(t.style.width=this.state.size.width+"px",t.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:t,viewerPosition:e,mouseover:n}){n!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let i=1;if(typeof this.config.scale=="function")i=this.config.scale(t,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;i*=s+(r-s)*xs.EASINGS.inQuad(t/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,o=Fe.degToRad(this.viewer.state.hFov)/2,a=Math.abs(he.getShortestArc(this.state.position.yaw,e.yaw));i*=r+(s-r)*xs.EASINGS.outQuad(Math.max(0,(o-a)/o))}}n&&this.config.hoverScale&&(i*=this.config.hoverScale.amount),this.domElement.style.scale=`${i}`}},Kx=`// https://www.8thwall.com/playground/chromakey-threejs

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
`,Jx=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,Qx=class extends An{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}set alpha(t){this.uniforms.alpha.value=t}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(t){this.uniforms.keying.value=t?.enabled===!0,t?.enabled&&(typeof t.color=="object"&&"r"in t.color?this.uniforms.color.value.set(t.color.r/255,t.color.g/255,t.color.b/255):this.uniforms.color.value.set(t.color??65280),this.uniforms.similarity.value=t.similarity??.2,this.uniforms.smoothness.value=t.smoothness??.2)}constructor(t){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:t?.map},repeat:{value:new qe(1,1)},offset:{value:new qe(0,0)},alpha:{value:t?.alpha??1},keying:{value:!1},color:{value:new Je(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:Jx,fragmentShader:Kx}),this.chromaKey=t?.chromaKey}};function eE({src:t,withCredentials:e,muted:n,autoplay:i}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=i,s.muted=n,s.preload="metadata",t instanceof MediaStream?s.srcObject=t:s.src=t,s}function tE(t,e,n){const[i,s]=t,[r,o]=e,a=he.greatArcDistance(t,e),l=Math.sin((1-n)*a)/Math.sin(a),h=Math.sin(n*a)/Math.sin(a),d=l*Math.cos(s)*Math.cos(i)+h*Math.cos(o)*Math.cos(r),f=l*Math.cos(s)*Math.sin(i)+h*Math.cos(o)*Math.sin(r),p=l*Math.sin(s)+h*Math.sin(o);return[Math.atan2(f,d),Math.atan2(p,Math.sqrt(d*d+f*f))]}function Qu(t){const e=[t[0]];let n=0;for(let i=1;i<t.length;i++){const s=t[i-1][0]-t[i][0];s>Math.PI?n+=1:s<-Math.PI&&(n-=1),e.push([t[i][0]+n*2*Math.PI,t[i][1]])}return e}function ef(t){const n=Qu(t).reduce((i,s)=>[i[0]+s[0],i[1]+s[1]]);return[he.parseAngle(n[0]/t.length),n[1]/t.length]}function nE(t){const e=Qu(t);let n=0;const i=[];for(let r=0;r<e.length-1;r++){const o=he.greatArcDistance(e[r],e[r+1])*xs.SPHERE_RADIUS;i.push(o),n+=o}let s=0;for(let r=0;r<e.length-1;r++){if(s+i[r]>n/2){const o=(n/2-s)/i[r];return tE(e[r],e[r+1],o)}s+=i[r]}return e[Math.round(e.length/2)]}var rr=new U,xc=new U,xo=new U,Ec=new U,Mc=new U,yc=new U;function iE(t,e,n){rr.copy(n).normalize(),xc.crossVectors(t,e).normalize(),xo.crossVectors(xc,t).normalize(),Ec.copy(t).multiplyScalar(-rr.dot(xo)),Mc.copy(xo).multiplyScalar(rr.dot(t));const i=new U().addVectors(Ec,Mc).normalize();return yc.crossVectors(i,rr),i.applyAxisAngle(yc,.01).multiplyScalar(xs.SPHERE_RADIUS)}var sE=class extends Ju{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(t,e,n){super(t,e,n)}is3d(){return!0}createElement(){const t=new Qx({alpha:0}),e=new bs(1,1),n=new Ht(e,t);n.userData={[rt]:this},Object.defineProperty(n,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(i){this.userData[rt].config.visible=i}}),this.element=new li().add(n),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[rt],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(t){super.update(t);const e=this.threeMesh,n=e.parent,i=e.material;if(he.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new le(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new le(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,n.position),n.lookAt(0,n.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const o=new U;return o.fromBufferAttribute(s,r),e.localToWorld(o)})}else{if(this.config.position?.length!==4)throw new le(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(l=>this.viewer.dataHelper.cleanPosition(l))}catch(l){throw new le(`invalid marker ${this.id} position`,l)}const r=s.map(l=>this.viewer.dataHelper.sphericalCoordsToVector3(l)),o=ef(s.map(({yaw:l,pitch:h})=>[l,h]));this.state.position={yaw:o[0],pitch:o[1]},this.state.positions3D=r;const a=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((l,h)=>{a.setX(h,l.x),a.setY(h,l.y),a.setZ(h,l.z)}),a.needsUpdate=!0,this.__setTextureWrap(i)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){i.map?.dispose();const s=eE({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new Hp(s);i.map=r,i.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(i.alpha=this.config.opacity,he.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(i)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else i.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){i.map?.dispose();const s=new yt;i.map=s,i.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(he.isExtendedPosition(this.config.position)||(e.material.userData[rt]={width:r.width,height:r.height},this.__setTextureWrap(i)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,i.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else i.alpha=this.config.opacity;break}i.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(t){const e=t.userData[rt];if(!e||!e.height||!e.width){t.repeat.set(1,1),t.offset.set(0,0);return}const n=this.config.position.map(f=>this.viewer.dataHelper.cleanPosition(f)),i=he.greatArcDistance([n[0].yaw,n[0].pitch],[n[1].yaw,n[1].pitch]),s=he.greatArcDistance([n[3].yaw,n[3].pitch],[n[2].yaw,n[2].pitch]),r=he.greatArcDistance([n[1].yaw,n[1].pitch],[n[2].yaw,n[2].pitch]),o=he.greatArcDistance([n[0].yaw,n[0].pitch],[n[3].yaw,n[3].pitch]),a=(i+s)/(r+o),l=e.width/e.height;let h=0,d=0;a<l?h=l-a:d=1/l-1/a,t.repeat.set(1-h,1-d),t.offset.set(h/2,d/2)}},rE=class extends ja{constructor(t,e,n){super(t,e,n),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new qx(this.element),this.object.userData={[rt]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[rt].config.visible},set:function(t){this.userData[rt].config.visible=t}}),this.afterCreateElement()}destroy(){delete this.object.userData[rt],delete this.object,super.destroy()}render({viewerPosition:t,zoomLevel:e}){const n=this.domElement;if(this.state.size={width:n.offsetWidth,height:n.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:t,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(t){if(super.update(t),!he.isExtendedPosition(this.config.position))throw new le(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new le(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,n=this.domElement;n.classList.add("psv-marker--css3d"),n.childNodes.forEach(i=>i.remove()),n.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},oE=class extends Cr{constructor(t,e,n){super(t,e,n)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(t){const e=super.render(t);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:t.viewerPosition,zoomLevel:t.zoomLevel,viewerSize:this.viewer.state.size}),e}update(t){super.update(t);const e=this.domElement;if(this.config.image&&!this.config.size)throw new le(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(n=>n.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},aE=class extends ja{constructor(t,e,n){super(t,e,n)}createElement(){this.element=document.createElementNS(Ar,"path"),this.element[rt]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const t=this.__getAllPolyPositions();if(t[0].length>(this.isPolygon?2:1)){const n=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),i=t.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(o=>`${o.x-n.x},${o.y-n.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",i),this.domElement.setAttributeNS(null,"transform",`translate(${n.x} ${n.y})`),n}else return null}update(t){super.update(t);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([i,s])=>{e.setAttributeNS(null,he.dasherize(i),s)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let i=this.config[this.type];if(!Array.isArray(i[0])&&typeof i[0]!="object")for(let s=0;s<i.length;s++)i.splice(s,2,[i[s],i[s+1]]);if(!Array.isArray(i[0][0])&&typeof i[0][0]!="object"&&(i=[i]),this.isPolyline&&i.length>1)throw new le("polylines cannot have holes");this.isPixels?this.definition=i.map(s=>s.map(r=>{let o;return he.isExtendedPosition(r)?o=this.viewer.dataHelper.cleanPosition(r):o=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:r[0],textureY:r[1]}),[o.yaw,o.pitch]})):this.definition=i.map(s=>s.map(r=>{let o;return he.isExtendedPosition(r)?o=this.viewer.dataHelper.cleanPosition(r):o=this.viewer.dataHelper.cleanPosition({yaw:r[0],pitch:r[1]}),[o.yaw,o.pitch]}))}catch(i){throw new le(`invalid marker ${this.id} position`,i)}const n=this.isPolygon?ef(this.coords[0]):nE(this.coords[0]);this.state.position={yaw:n[0],pitch:n[1]},this.positions3D=this.coords.map(i=>i.map(s=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:s[0],pitch:s[1]}))),this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(t=>this.__getPolyPositions(t))}__getPolyPositions(t){const e=t.length,n=t.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),i=[];return n.forEach((s,r)=>{s.visible||[r===0?n[e-1]:n[r-1],r===e-1?n[0]:n[r+1]].forEach(a=>{a.visible&&i.push({visible:a.vector,invisible:s.vector,index:r})})}),i.reverse().forEach(s=>{n.splice(s.index,0,{vector:iE(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),n.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},lE=class extends Cr{get svgElement(){return this.domElement.firstElementChild}constructor(t,e,n){super(t,e,n)}isSvg(){return!0}createElement(){const t=this.type==="square"?"rect":this.type,e=document.createElementNS(Ar,t);this.element=document.createElementNS(Ar,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(t){super.update(t);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([n,i])=>{e.setAttributeNS(null,n,i)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([n,i])=>{e.setAttributeNS(null,he.dasherize(n),i)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},cE=he.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(t){return t?(t===!0&&(t=xa),typeof t=="number"&&(t={amount:t}),{...xa,...t}):null}});function hE(t){switch(Ea(t,!1)){case"image":case"html":case"element":return oE;case"imageLayer":case"videoLayer":return sE;case"elementLayer":return rE;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return aE;case"square":case"rect":case"circle":case"ellipse":case"path":return lE;default:throw new le("invalid marker type")}}var Is=class extends Ya{constructor(t,e){super(t,e),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.svgContainer=document.createElementNS(Ar,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new Zx(t),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}init(){super.init(),he.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(_e.ClickEvent.type,this),this.viewer.addEventListener(_e.DoubleClickEvent.type,this),this.viewer.addEventListener(_e.RenderEvent.type,this),this.viewer.addEventListener(_e.ConfigChangedEvent.type,this),this.viewer.addEventListener(_e.ObjectEnterEvent.type,this),this.viewer.addEventListener(_e.ObjectHoverEvent.type,this),this.viewer.addEventListener(_e.ObjectLeaveEvent.type,this),this.viewer.addEventListener(_e.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(rt),this.viewer.removeEventListener(_e.ClickEvent.type,this),this.viewer.removeEventListener(_e.DoubleClickEvent.type,this),this.viewer.removeEventListener(_e.RenderEvent.type,this),this.viewer.removeEventListener(_e.ObjectEnterEvent.type,this),this.viewer.removeEventListener(_e.ObjectHoverEvent.type,this),this.viewer.removeEventListener(_e.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(_e.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(t){switch(t.type){case _e.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case _e.RenderEvent.type:this.renderMarkers();break;case _e.ClickEvent.type:this.__onClick(t,!1);break;case _e.DoubleClickEvent.type:this.__onClick(t,!0);break;case _e.ObjectEnterEvent.type:case _e.ObjectLeaveEvent.type:case _e.ObjectHoverEvent.type:if(t.userDataKey===rt){const e=t.originalEvent,n=t.object.userData[rt];switch(t.type){case _e.ObjectEnterEvent.type:n.config.style?.cursor?this.viewer.setCursor(n.config.style.cursor):(n.config.tooltip||n.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(e,n);break;case _e.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(n);break;case _e.ObjectHoverEvent.type:this.__onHoverMarker(e,n);break}}break;case"mouseenter":{const e=this.__getTargetMarker(he.getEventTarget(t));this.__onEnterMarker(t,e);break}case"mouseleave":{const e=this.__getTargetMarker(he.getEventTarget(t));this.__onLeaveMarker(e);break}case"mousemove":{const e=this.__getTargetMarker(he.getEventTarget(t),!0);this.__onHoverMarker(t,e);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(t=>{t.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new fs)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(t=>{t.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new us)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!0,t.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!1,t.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(t,e=!0){if(this.markers[t.id])throw new le(`marker "${t.id}" already exists`);const n=new(hE(t))(this.viewer,this,t);n.isPoly()?this.svgContainer.appendChild(n.domElement):n.isCss3d()?this.css3DContainer.addObject(n):n.is3d()?this.viewer.renderer.addObject(n.threeElement):this.container.appendChild(n.domElement),this.markers[n.id]=n,this.state.showAllTooltips&&(n.state.staticTooltip=!0),e&&this.__afterChangeMarkers()}getMarker(t){const e=typeof t=="object"?t.id:t;if(!this.markers[e])throw new le(`cannot find marker "${e}"`);return this.markers[e]}getCurrentMarker(){return this.state.currentMarker}updateMarker(t,e=!0){const n=this.getMarker(t.id);n.update(t),e&&(this.__afterChangeMarkers(),(n===this.state.hoveringMarker&&n.config.tooltip?.trigger==="hover"||n.state.staticTooltip)&&n.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(t,e=!0){const n=this.getMarker(t);n.isPoly()?this.svgContainer.removeChild(n.domElement):n.isCss3d()?this.css3DContainer.removeObject(n):n.is3d()?this.viewer.renderer.removeObject(n.threeElement):this.container.removeChild(n.domElement),this.state.hoveringMarker===n&&(this.state.hoveringMarker=null),this.state.currentMarker===n&&(this.state.currentMarker=null),n.destroy(),delete this.markers[n.id],e&&this.__afterChangeMarkers()}removeMarkers(t,e=!0){t.forEach(n=>this.removeMarker(n,!1)),e&&this.__afterChangeMarkers()}setMarkers(t,e=!0){this.clearMarkers(!1),t?.forEach(n=>{this.addMarker(n,!1)}),e&&this.__afterChangeMarkers()}clearMarkers(t=!0){Object.keys(this.markers).forEach(e=>{this.removeMarker(e,!1)}),t&&this.__afterChangeMarkers()}gotoMarker(t,e=this.config.gotoMarkerSpeed){const n=this.getMarker(t);return e?this.viewer.animate({...n.state.position,zoom:n.config.zoomLvl,speed:e}).then(()=>{this.dispatchEvent(new _a(n))}):(this.viewer.rotate(n.state.position),he.isNil(n.config.zoomLvl)||this.viewer.zoom(n.config.zoomLvl),this.dispatchEvent(new _a(n)),Promise.resolve())}hideMarker(t){this.toggleMarker(t,!1)}showMarker(t){this.toggleMarker(t,!0)}showMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!0,e.showTooltip()}hideMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!1,e.hideTooltip()}toggleMarker(t,e){const n=this.getMarker(t);n.config.visible=he.isNil(e)?!n.config.visible:e,this.renderMarkers()}showMarkerPanel(t){const e=this.getMarker(t);e.config.content?this.viewer.panel.show({id:Ki,content:e.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(Ki)}toggleMarkersList(){this.viewer.panel.isVisible(Li)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let t=[];Object.values(this.markers).forEach(n=>{n.config.visible&&!n.config.hideList&&t.push(n)});const e=new Zu(t);this.dispatchEvent(e),t=e.markers,this.viewer.panel.show({id:Li,content:Xx(t,this.viewer.config.lang[Ms.id]),noMargin:!0,clickHandler:n=>{const i=he.getClosest(n,".psv-panel-menu-item"),s=i?i.dataset[rt]:void 0;if(s){const r=this.getMarker(s);this.dispatchEvent(new Fu(r)),this.gotoMarker(r.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(Li)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const t=this.viewer.getZoomLevel(),e=this.viewer.getPosition(),n=this.state.hoveringMarker;Object.values(this.markers).forEach(i=>{let s=i.config.visible,r=!1,o=null;s&&(o=i.render({viewerPosition:e,zoomLevel:t,hoveringMarker:n}),s=!!o),r=i.state.visible!==s,i.state.visible=s,i.state.position2D=o,i.domElement&&he.toggleClass(i.domElement,"psv-marker--visible",s),s?i.state.staticTooltip?i.showTooltip():i!==this.state.hoveringMarker&&i.hideTooltip():i.hideTooltip(),r&&(this.dispatchEvent(new Su(i,s)),(i.is3d()||i.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(t,e=!1){if(t instanceof Node){const n=e?he.getClosest(t,".psv-marker"):t;return n?n[rt]:void 0}else return Array.isArray(t)?t.map(n=>n.userData[rt]).filter(n=>!!n).sort((n,i)=>i.config.zIndex-n.config.zIndex)[0]:null}__onEnterMarker(t,e){e&&(this.state.hoveringMarker=e,this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,this.dispatchEvent(new Lu(e)),e instanceof Cr&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onLeaveMarker(t){t&&(this.dispatchEvent(new Cu(t)),t instanceof Cr&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"?t.hideTooltip():t.state.staticTooltip&&t.showTooltip())}__onHoverMarker(t,e){e&&(this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,(e.isPoly()||e.is3d()||e.isCss3d())&&e.config.tooltip?.trigger==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onClick(t,e){const n=this.__getTargetMarker(t.data.objects),s=this.__getTargetMarker(t.data.target,!0)||n;this.state.currentMarker&&this.state.currentMarker!==s&&(this.dispatchEvent(new Bu(this.state.currentMarker)),this.viewer.panel.hide(Ki),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),s&&(this.state.currentMarker=s,this.dispatchEvent(new Uu(s,e,t.data.rightclick)),this.config.clickEventOnMarker?t.data.marker=s:t.stopImmediatePropagation(),this.markers[s.id]&&!t.data.rightclick&&(s.config.tooltip?.trigger==="click"?s.tooltip?this.hideMarkerTooltip(s.id):this.showMarkerTooltip(s.id):this.showMarkerPanel(s.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new Xu(this.getMarkers()))}__refreshUi(){const t=Object.values(this.markers).filter(e=>!e.config.hideList).length;t===0?(this.viewer.panel.hide(Ki),this.viewer.panel.hide(Li)):this.viewer.panel.isVisible(Li)?this.showMarkersList():this.viewer.panel.isVisible(Ki)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(Ms.id,!1)?.toggle(t>0),this.viewer.navbar.getButton(zr.id,!1)?.toggle(t>0)}__checkObjectsObserver(){Object.values(this.markers).some(e=>e.is3d())?this.viewer.observeObjects(rt):this.viewer.unobserveObjects(rt)}};Is.id="markers";Is.VERSION="5.13.3";Is.configParser=cE;Is.readonlyOptions=["markers"];Cn.lang[Ms.id]="Markers";Cn.lang[zr.id]="Markers list";qa(Ms,"caption:left");qa(zr,"caption:left");async function dE(t,e=0){const n=await fetch(t);if(!n.ok)throw new Error(`Failed to load ${t}: ${n.statusText}`);const i=await n.json();return uE(i,e)}function uE(t,e=0){var n=[];const i={tree:"./icons/leaf.circle.fill@2x.png"};return t.forEach(s=>{const r={id:s.id,position:{yaw:s.position.yaw-e,pitch:s.position.pitch},size:{width:s.size.width,height:s.size.height},image:i[s.type],tooltip:`<strong>${s.name}</strong>`,anchor:"bottom center",data:{name:s.name,image:s.image,description:s.description,type:s.type},content:fE(s)};n.push(r)}),n}function fE(t){return t.image?`
        <h2>${t.name}</h2>
        <img src="${t.image}" alt="${t.name}" style="width: 100%; height: auto; max-height: calc(80% - 80px); object-fit: contain; object-position: left; border-radius: 5px;">
        <p>${t.description}</p>
    `:`
            <h2>${t.name}</h2>
            <p>${t.description}</p>
        `}async function pE(t){const e=await fetch(t);if(!e.ok)throw new Error(`Failed to load ${t}: ${e.statusText}`);const n=await e.json();return await mE(n)}async function mE(t){var e=[];for(const n of t)e.push(await gE(n));return e}async function gE(t){const e=await dE(t.markersFile,t.heading),n=t.links.map(s=>({nodeId:s.nodeId,position:{yaw:s.position.yaw-t.heading,pitch:s.position.pitch}}));return{id:t.id,panorama:t.panoramaFile,links:n,name:t.name,markers:e,panoData:{poseHeading:t.heading*180/Math.PI}}}pE("./nodes_head.json").then(t=>{new yx({plugins:[[Is,{defaultHoverScale:!0}],[Ds,{positionMode:"manual",nodes:t,showLinkTooltip:!1,renderMode:"2d"}]],container:document.querySelector("#viewer"),navbar:["zoom","move","markersList","caption","fullscreen"],rendererParameters:{debug:!1}}).addEventListener("ready",()=>{console.log("Viewer is ready!")},{once:!0})});
