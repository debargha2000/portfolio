const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProjectImage-CBDdzsje.js","assets/rolldown-runtime-QTnfLwEv.js","assets/@react-three-CKMXv1xh.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{f as t,h as n,n as r,p as i,t as a}from"./@react-three-CKMXv1xh.js";import{n as o,s}from"./react-router-u9FYjs-V.js";import{n as c,t as l}from"./gsap-B2JeSRMT.js";import{a as u,c as d,d as f,f as p,h as m,i as h,l as g,m as _,o as v,p as y,r as b,s as x}from"./index-BQ3ujTk3.js";var S=e(n(),1),C=i();function w(){let e=(0,S.useRef)(null),t=y();(0,S.useEffect)(()=>{if(!e.current)return;let n=Math.max(-60,Math.min(60,t*3));e.current.style.setProperty(`--vel`,`${n}px`)},[t]);let n=[`Brand Identity`,`Art Direction`,`Interactive 3D`,`Editorial Design`,`Type Systems`,`Creative Code`,`Motion`,`WebGL`],r=[`Awwwards SOTD`,`FWA of the Day`,`D&AD Wood Pencil`,`TDC Certificate`,`CSSDA Best UI`,`It's Nice That`,`Site Inspire`,`Godly`],i=Math.max(-8,Math.min(8,t*.6));return(0,C.jsxs)(`section`,{className:`relative py-8 md:py-12 border-y border-[var(--bone)]/10 overflow-hidden`,children:[(0,C.jsx)(`div`,{className:`marquee-track`,style:{transform:`skewY(${i}deg)`},children:[...n,...n].map((e,t)=>(0,C.jsxs)(`span`,{className:`marquee-item font-display text-[8vw] md:text-[6vw] leading-none px-8 flex items-center gap-8`,children:[t%2==0?e:(0,C.jsx)(`em`,{className:`italic text-[var(--acid)]`,children:e}),(0,C.jsx)(`span`,{className:`inline-block w-3 h-3 rounded-full bg-[var(--bone)]/30`})]},`a-${t}`))}),(0,C.jsx)(`div`,{ref:e,className:`marquee-track mt-4`,style:{animationDirection:`reverse`,animationDuration:`55s`,transform:`skewY(${-i}deg)`},children:[...r,...r].map((e,t)=>(0,C.jsxs)(`span`,{className:`marquee-item font-display italic text-[5vw] md:text-[3.2vw] leading-none px-6 flex items-center gap-6 text-[var(--bone)]/50`,children:[e,(0,C.jsx)(`span`,{className:`inline-block text-[var(--acid)]`,children:`✦`})]},`b-${t}`))})]})}function T(e){(0,S.useEffect)(()=>{let t=e.current;if(!t)return;let n=t.getBoundingClientRect(),r=()=>{n=t.getBoundingClientRect()};window.addEventListener(`resize`,r);let i,a=!1,o=0,s=0,c=()=>{t.style.setProperty(`--mx`,`${o-n.left}px`),t.style.setProperty(`--my`,`${s-n.top}px`),a=!1},l=e=>{o=e.clientX,s=e.clientY,a||=(i=requestAnimationFrame(c),!0)};return t.addEventListener(`mousemove`,l),()=>{window.removeEventListener(`resize`,r),t.removeEventListener(`mousemove`,l),cancelAnimationFrame(i)}},[e])}var E=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,D=`
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Hash function
  float hash(vec2 p) {
      p  = fract(p * vec2(5.3983, 5.4427));
      p += dot(p.yx, p.xy + vec2(21.5351, 14.3137));
      return fract(p.x * p.y * 95.4337);
  }

  // 2D Noise
  float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix( mix( hash( i + vec2(0.0,0.0) ), 
                       hash( i + vec2(1.0,0.0) ), u.x),
                  mix( hash( i + vec2(0.0,1.0) ), 
                       hash( i + vec2(1.0,1.0) ), u.x), u.y);
  }

  // FBM
  #define OCTAVES 7
  float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      vec2 shift = vec2(100.0);
      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for (int i = 0; i < OCTAVES; i++) {
          value += amplitude * noise(st);
          st = rot * st * 2.0 + shift;
          amplitude *= 0.5;
      }
      return value;
  }

  void main() {
      // Center and normalize coordinates to use the entire valid screen
      vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
      
      // Scale out to see more coverage (was implicitly zoomed in too much)
      st *= 1.4;

      float t = uTime * 0.12;

      // Layer 1 - drifting in multiple directions
      vec2 q = vec2(0.0);
      q.x = fbm(st + vec2(t * 0.2, t * 0.3));
      q.y = fbm(st + vec2(-t * 0.2, t * 0.1));

      // Layer 2
      vec2 r = vec2(0.0);
      r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
      r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) - 0.12 * t);

      // Layer 3
      vec2 s = vec2(0.0);
      s.x = fbm(st + 2.0 * r + vec2(4.7, 1.2) - 0.08 * t);
      s.y = fbm(st + 2.0 * r + vec2(6.3, 4.8) + 0.05 * t);

      // Final noise value
      float f = fbm(st + 3.0 * s);

      // Faux normal for 3D lighting effect
      float eps = 0.005;
      float nx = fbm(st + 3.0 * s + vec2(eps, 0.0)) - f;
      float ny = fbm(st + 3.0 * s + vec2(0.0, eps)) - f;
      vec3 normal = normalize(vec3(nx, ny, 0.015)); // Deeper z for more pop
      
      // Static Light Direction to prevent pulsing
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.5));
      float diffuse = max(0.0, dot(normal, lightDirection));
      
      // Specular highlight
      vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
      vec3 halfVector = normalize(lightDirection + viewDir);
      float specHighlight = pow(max(0.0, dot(normal, halfVector)), 35.0);
      
      // Expand density bounds slightly to fill more volume
      float density = smoothstep(0.05, 0.75, f);
      density = pow(density, 1.2); 
      
      // Separate FBMs for distinct rich color patches
      float goldNoise = fbm(st * 2.0 + 1.5 * q + t * 0.5);
      float greenNoise = fbm(st * 2.2 + 1.2 * r - t * 0.4);
      float orangeNoise = fbm(st * 1.8 + 1.8 * s + t * 0.3);

      vec3 accentGreen = vec3(0.776, 1.0, 0.239); // #c6ff3d
      vec3 accentOrange = vec3(1.0, 0.373, 0.0);  // #ff5f00
      vec3 accentGold = vec3(1.0, 0.85, 0.1);     // Bright pure gold
      vec3 baseWhite = vec3(0.92, 0.94, 0.96);
      
      // Isolate color zones
      float goldMask = smoothstep(0.42, 0.8, goldNoise);
      float greenMask = smoothstep(0.27, 0.77, greenNoise);
      float orangeMask = smoothstep(0.27, 0.77, orangeNoise);

      // Mix colours organically
      vec3 inkColor = baseWhite;
      inkColor = mix(inkColor, accentOrange, orangeMask);
      inkColor = mix(inkColor, accentGreen, greenMask);
      // Gold applied last to pop out
      inkColor = mix(inkColor, accentGold, goldMask * 0.7);

      vec3 bgColor = vec3(0.01, 0.01, 0.01);
      
      // Restore organic additive lighting for rich depth
      vec3 col = mix(bgColor, inkColor, density);
      
      // Soft 3D shadow wrapping
      col += diffuse * 0.5 * inkColor * density; 
      
      // Specular shimmer, controlled to avoid extreme hard white spots
      float shimmerPower = specHighlight * (0.4 + 2.5 * goldMask);
      col += shimmerPower * mix(baseWhite, accentGold, goldMask) * density;
      
      // Soft compression (tone mapping) to preserve gradients in extreme bright spots
      col = col / (1.0 + col * 0.25);
      
      // Vignette using centered st -> wide ellipse
      float dist = length(st);
      float vignette = smoothstep(2.5, 0.2, dist); 
      
      col *= vignette;

      gl_FragColor = vec4(col, 1.0);
  }
`,O=()=>{let e=(0,S.useRef)(null),n=(0,S.useMemo)(()=>({uTime:{value:0},uResolution:{value:new t(window.innerWidth,window.innerHeight)}}),[]);return r(t=>{e.current&&(e.current.uniforms.uTime.value=t.clock.elapsedTime,e.current.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight))}),(0,C.jsxs)(`mesh`,{children:[(0,C.jsx)(`planeGeometry`,{args:[2,2]}),(0,C.jsx)(`shaderMaterial`,{ref:e,vertexShader:E,fragmentShader:D,uniforms:n,transparent:!0,depthWrite:!1})]})};function k(){return(0,C.jsx)(`div`,{className:`h-full w-full`,children:(0,C.jsx)(a,{camera:{position:[0,0,1]},dpr:window.devicePixelRatio,gl:{antialias:!1},children:(0,C.jsx)(O,{})})})}function A({to:e,href:t,children:n,className:r=``,onClick:i,style:a}){let s=`chip ${r}`;return e?(0,C.jsx)(o,{to:e,className:s,style:a,onClick:i,children:n}):t?(0,C.jsx)(`a`,{href:t,className:s,style:a,onClick:i,children:n}):(0,C.jsx)(`button`,{className:s,style:a,onClick:i,children:n})}function j(){let e=(0,S.useRef)(null),t=p(4);return T(e),(0,S.useEffect)(()=>{c.timeline({delay:.2}).fromTo(`.h-l1`,{yPercent:110},{yPercent:0,duration:1.2,ease:`expo.out`}).fromTo(`.h-l2`,{yPercent:110},{yPercent:0,duration:1.2,ease:`expo.out`},`-=0.95`).fromTo(`.h-l3`,{yPercent:110},{yPercent:0,duration:1.2,ease:`expo.out`},`-=0.95`).fromTo(`.h-meta`,{opacity:0,y:20},{opacity:1,y:0,duration:.8},`-=0.6`)},[]),(0,C.jsxs)(`section`,{ref:e,className:`hero-section relative min-h-[100svh] w-full flex flex-col justify-between px-6 md:px-10 pt-32 pb-10 md:pb-12 overflow-hidden`,children:[(0,C.jsx)(`div`,{className:`absolute inset-0 z-0 overflow-hidden bg-black`,children:(0,C.jsx)(k,{})}),(0,C.jsx)(`div`,{className:`hero-spotlight absolute inset-0 z-[1] pointer-events-none`}),(0,C.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-[var(--bg)]/30 via-transparent to-[var(--bg)]/30 z-[2]`}),(0,C.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-r from-[var(--bg)]/20 via-transparent to-[var(--bg)]/20 z-[2]`}),(0,C.jsxs)(`div`,{className:`relative z-10 w-full flex justify-between items-start mix-blend-difference mb-8`,children:[(0,C.jsxs)(`div`,{className:`tiny text-white/70 max-w-[260px] leading-[1.8]`,children:[(0,C.jsx)(`span`,{className:`inline-block spin-slow mr-2`,children:`↖`}),`Independent art director & digital designer.`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`span`,{className:`opacity-60`,children:`Identities · Interfaces · Moving image`})]}),(0,C.jsxs)(`div`,{className:`hidden md:block tiny text-white/70 text-right leading-[1.8]`,children:[`Portfolio `,(0,C.jsx)(`span`,{className:`opacity-50`,children:`/ Chapter 04`}),(0,C.jsx)(`br`,{}),`2021 — 2026`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`span`,{className:`opacity-50`,children:`Berlin · Remote`})]})]}),(0,C.jsxs)(`div`,{ref:t,className:`relative z-10 mt-auto`,children:[(0,C.jsxs)(`div`,{className:`text-white mix-blend-difference relative z-[1]`,children:[(0,C.jsx)(`div`,{className:`overflow-hidden`,children:(0,C.jsxs)(`div`,{className:`h-l1 font-display display-thin text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.9] tracking-[-0.04em] ml-[2%] sm:ml-[4%] lg:ml-[6%]`,children:[`Designing`,(0,C.jsx)(`span`,{className:`font-editorial text-[var(--acid)]`,children:` the`})]})}),(0,C.jsx)(`div`,{className:`overflow-hidden`,children:(0,C.jsxs)(`div`,{className:`h-l2 font-display display-light text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.9] tracking-[-0.04em] ml-[8%] sm:ml-[15%] lg:ml-[22%]`,children:[(0,C.jsx)(`span`,{className:`font-editorial text-[#ff5f00]`,children:`quiet `}),`spaces`]})}),(0,C.jsx)(`div`,{className:`overflow-hidden`,children:(0,C.jsxs)(`div`,{className:`h-l3 font-editorial italic text-[16.5vw] sm:text-[14.5vw] md:text-[11.5vw] lg:text-[9.5vw] leading-[0.95] tracking-[-0.02em] ml-[12%] sm:ml-[25%] lg:ml-[40%]`,children:[`between `,(0,C.jsx)(`span`,{className:`text-[#ff5f00]`,children:`noise`}),(0,C.jsx)(`span`,{className:`text-[var(--acid)]`,children:`.`})]})})]}),(0,C.jsxs)(`div`,{className:`absolute top-0 left-0 w-full pointer-events-none z-[2] hero-stroke-only hero-morph-text`,children:[(0,C.jsx)(`div`,{className:`overflow-hidden`,children:(0,C.jsxs)(`div`,{className:`h-l1 font-display display-thin text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.9] tracking-[-0.04em] ml-[2%] sm:ml-[4%] lg:ml-[6%]`,children:[`Designing`,(0,C.jsx)(`span`,{className:`font-editorial text-[var(--acid)] white-stroke`,children:` the`})]})}),(0,C.jsx)(`div`,{className:`overflow-hidden`,children:(0,C.jsxs)(`div`,{className:`h-l2 font-display display-light text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.9] tracking-[-0.04em] ml-[8%] sm:ml-[15%] lg:ml-[22%]`,children:[(0,C.jsx)(`span`,{className:`font-editorial text-[#ff5f00] white-stroke`,children:`quiet `}),`spaces`]})}),(0,C.jsx)(`div`,{className:`overflow-hidden`,children:(0,C.jsxs)(`div`,{className:`h-l3 font-editorial italic text-[16.5vw] sm:text-[14.5vw] md:text-[11.5vw] lg:text-[9.5vw] leading-[0.95] tracking-[-0.02em] ml-[12%] sm:ml-[25%] lg:ml-[40%]`,children:[`between `,(0,C.jsx)(`span`,{className:`text-[#ff5f00] white-stroke`,children:`noise`}),(0,C.jsx)(`span`,{className:`text-[var(--acid)] white-stroke`,children:`.`})]})})]}),(0,C.jsxs)(`div`,{className:`h-meta mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white mix-blend-difference relative z-10`,children:[(0,C.jsx)(u,{className:`max-w-md text-[15px] leading-[1.6] font-sans font-light tracking-[0.005em] opacity-90`,as:`p`,children:`A small, deliberately slow design studio. Brand systems, editorial websites, interactive 3D — for labels, ateliers, and cultural institutions that take their time.`}),(0,C.jsxs)(`div`,{className:`flex items-center gap-3 flex-wrap`,children:[(0,C.jsx)(b,{children:(0,C.jsxs)(A,{to:`/work`,className:`group ripple !border-white !text-white`,children:[(0,C.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[var(--bg)]`}),(0,C.jsx)(`span`,{className:`label`,children:`View the archive`})]})}),(0,C.jsx)(b,{children:(0,C.jsx)(A,{to:`/contact`,className:`ripple !bg-white !text-[var(--bg)] !border-white`,children:(0,C.jsx)(`span`,{className:`label`,children:`Start a project ↗`})})})]})]})]})]})}var M=(0,S.lazy)(()=>s(()=>import(`./ProjectImage-CBDdzsje.js`),__vite__mapDeps([0,1,2]))),N=S.memo(function({p:e,i:t}){let n=_(8),r=x(t===0?`circle`:t===1?`h`:`v`);return(0,C.jsxs)(o,{ref:e=>{n.current=e,r.current=e},to:`/work/${e.slug}`,className:`tilt-card group relative overflow-hidden block ${t===0?`md:col-span-12 lg:col-span-7 aspect-[4/3]`:t===1?`md:col-span-12 lg:col-span-5 aspect-[4/3]`:`md:col-span-12 aspect-[21/9]`}`,"data-cursor":`hover`,children:[(0,C.jsx)(`div`,{className:`absolute inset-0 project-img`,children:(0,C.jsx)(S.Suspense,{fallback:(0,C.jsx)(`div`,{className:`w-full h-full bg-[var(--mute)]`}),children:(0,C.jsx)(M,{src:e.thumbnail,active:!1})})}),(0,C.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent`}),(0,C.jsxs)(`div`,{className:`relative z-10 h-full flex flex-col justify-end p-6 md:p-10`,children:[(0,C.jsxs)(`div`,{className:`tiny text-[var(--acid)] mb-3`,children:[`(`,e.index,`) · `,e.year]}),(0,C.jsx)(`div`,{className:`font-display display-light text-6xl md:text-8xl leading-[0.88] tracking-[-0.035em] mb-3`,children:(0,C.jsx)(h,{children:e.title})}),(0,C.jsx)(`div`,{className:`font-sans text-sm font-light text-white/80 max-w-md leading-relaxed`,children:e.subtitle}),(0,C.jsx)(`div`,{className:`mt-4 flex gap-2 flex-wrap`,children:e.tags.map(e=>(0,C.jsx)(`span`,{className:`micro text-white/60 border border-white/30 px-2 py-1 rounded-full`,children:e},e))})]})]})});function P(){let e=m.slice(0,3);return(0,C.jsxs)(`section`,{className:`px-6 md:px-10 pt-28 md:pt-40`,children:[(0,C.jsxs)(`div`,{ref:f(),className:`flex items-end justify-between mb-16 md:mb-20 gap-8 flex-wrap`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`tiny text-[var(--acid)] mb-6`,children:`◉ Featured · Index`}),(0,C.jsxs)(`h2`,{className:`font-display display-thin text-[14vw] md:text-[8vw] leading-[0.88] tracking-[-0.04em]`,children:[`Selected `,(0,C.jsx)(`span`,{className:`font-editorial italic`,children:`recently`}),`.`]})]}),(0,C.jsx)(b,{children:(0,C.jsx)(o,{to:`/work`,className:`chip shine`,children:(0,C.jsxs)(`span`,{className:`label`,children:[`Full archive (`,m.length,`) ↗`]})})})]}),(0,C.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10`,children:e.map((e,t)=>(0,C.jsx)(N,{p:e,i:t},e.slug))})]})}function F({to:e,label:t}){let{ref:n,display:r}=g(e,1.6);return(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{ref:n,className:`font-display display-thin text-7xl md:text-8xl text-[var(--acid)] tracking-[-0.04em]`,children:(0,C.jsx)(`span`,{className:`number-flip`,children:r})}),(0,C.jsx)(`div`,{className:`micro text-[var(--bone)]/60 mt-3`,children:t})]})}function I(){let e=(0,S.useRef)(null);return(0,S.useEffect)(()=>{if(!e.current)return;let t=e.current.querySelectorAll(`.word`);c.fromTo(t,{yPercent:120},{yPercent:0,duration:.9,ease:`expo.out`,stagger:.03,scrollTrigger:{trigger:e.current,start:`top 75%`,toggleActions:`play none none reverse`}})},[]),(0,C.jsx)(`section`,{className:`px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15`,children:(0,C.jsxs)(`div`,{className:`grid grid-cols-12 gap-8`,children:[(0,C.jsxs)(`div`,{className:`col-span-12 md:col-span-3`,children:[(0,C.jsx)(`div`,{className:`tiny text-[var(--acid)] mb-6`,children:`◉ Studio · 02`}),(0,C.jsx)(b,{children:(0,C.jsx)(o,{to:`/studio`,className:`chip shine`,children:(0,C.jsx)(`span`,{className:`label`,children:`More about us ↗`})})})]}),(0,C.jsxs)(`div`,{className:`col-span-12 md:col-span-9`,children:[(0,C.jsx)(`h3`,{ref:e,className:`font-display display-light text-[7vw] md:text-[3.5vw] leading-[1.1] tracking-[-0.03em]`,children:`We are a small, senior studio — six people, one room in Berlin, one kiln in the basement. Every project is led by a partner, every line of code is written in-house.`.split(` `).map((e,t)=>(0,C.jsx)(`span`,{className:`inline-block overflow-hidden mr-[0.22em] align-bottom`,children:(0,C.jsx)(`span`,{className:`word inline-block ${[4,8,14,21,26].includes(t)?`font-editorial italic`:``}`,children:e})},t))}),(0,C.jsx)(`div`,{className:`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--bone)]/15 pt-10`,children:[{n:5,l:`Years in practice`},{n:38,l:`Projects shipped`},{n:14,l:`Countries served`},{n:22,l:`Awards & features`}].map(e=>(0,C.jsx)(F,{to:e.n,label:e.l},e.l))})]})]})})}var L=S.memo(function({c:e}){let t=_(6),n=f(),r=d(.6);return(0,C.jsxs)(`div`,{ref:e=>{t.current=e,n.current=e},className:`tilt-card shine border-t border-[var(--bone)]/15 pt-6 p-4 -m-4`,children:[(0,C.jsxs)(`div`,{className:`flex justify-between items-start mb-8`,children:[(0,C.jsx)(`div`,{className:`font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--bone)]/40`,children:e.n}),(0,C.jsx)(`div`,{ref:r,className:`text-3xl text-[var(--acid)]`,children:e.icon})]}),(0,C.jsx)(`h4`,{className:`font-display display-regular text-4xl mb-4 tracking-[-0.025em]`,children:(0,C.jsx)(h,{children:e.t})}),(0,C.jsx)(`p`,{className:`text-sm leading-relaxed text-[var(--bone)]/70 font-sans font-light`,children:e.d})]})});function R(){return(0,C.jsxs)(`section`,{className:`px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15 relative overflow-hidden`,children:[(0,C.jsxs)(`div`,{className:`flex items-end justify-between mb-16 gap-8 flex-wrap`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`tiny text-[var(--acid)] mb-6`,children:`◉ Capabilities · 03`}),(0,C.jsxs)(`h2`,{className:`font-display display-light text-[14vw] md:text-[8vw] leading-[0.88] tracking-[-0.04em]`,children:[`What we `,(0,C.jsx)(`span`,{className:`font-editorial italic`,children:`actually`}),` make.`]})]}),(0,C.jsx)(`p`,{className:`max-w-sm text-sm leading-relaxed text-[var(--bone)]/70 font-sans font-light`,children:`Six disciplines, practiced deeply. Most engagements pull from three or four. Nothing is outsourced.`})]}),(0,C.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16`,children:[{n:`01`,t:`Brand Systems`,d:`Identity, type, guidelines, and the rituals that make a brand feel inevitable.`,icon:`◐`},{n:`02`,t:`Editorial Web`,d:`Long-form sites that read like print and move like film.`,icon:`◈`},{n:`03`,t:`Interactive 3D`,d:`WebGL experiences, shader work, spatial interfaces.`,icon:`◉`},{n:`04`,t:`Art Direction`,d:`Campaigns, lookbooks, and the visual grammar that ties them together.`,icon:`◊`},{n:`05`,t:`Type Systems`,d:`Custom typefaces, variable fonts, typographic conventions.`,icon:`◌`},{n:`06`,t:`Creative Code`,d:`Installations, generative prints, tools for internal teams.`,icon:`◍`}].map((e,t)=>(0,C.jsx)(L,{c:e,i:t},e.n))})]})}var z=S.memo(function({s:e,i:t}){return(0,C.jsxs)(`div`,{ref:x(`circle`,t*.15),className:`process-tile border border-[var(--bone)]/15 p-6 md:p-10 aspect-square flex flex-col justify-between group cursor-default relative overflow-hidden`,children:[(0,C.jsx)(`div`,{className:`absolute inset-0 bg-[var(--acid)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-0`}),(0,C.jsx)(`div`,{className:`font-editorial italic text-6xl md:text-7xl text-[var(--acid)] group-hover:text-[var(--bg)] transition-colors duration-500 group-hover:rotate-[360deg] transition-[transform,color] duration-1000 ease-out relative z-10`,children:e.n}),(0,C.jsx)(`div`,{className:`font-display display-regular text-3xl tracking-[-0.02em] relative z-10 group-hover:text-[var(--bg)] transition-colors duration-500`,children:(0,C.jsx)(h,{children:e.t})})]})});function B(){return(0,C.jsx)(`section`,{className:`px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15`,children:(0,C.jsxs)(`div`,{className:`grid grid-cols-12 gap-8 items-start`,children:[(0,C.jsxs)(`div`,{className:`col-span-12 md:col-span-5`,children:[(0,C.jsx)(`div`,{className:`tiny text-[var(--acid)] mb-6`,children:`◉ Process · 04`}),(0,C.jsxs)(`h2`,{className:`font-display display-thin text-[14vw] md:text-[7vw] leading-[0.88] tracking-[-0.04em] mb-8`,children:[(0,C.jsx)(`span`,{className:`font-editorial italic`,children:`Four`}),` movements,`,(0,C.jsx)(`br`,{}),`one year.`]}),(0,C.jsx)(`p`,{className:`text-[15px] leading-[1.7] text-[var(--bone)]/70 mb-8 max-w-md font-sans font-light`,children:`Not a waterfall. Not an agile sprint theatre. A deliberate pace that respects the work and the people it's for.`}),(0,C.jsx)(b,{children:(0,C.jsx)(o,{to:`/process`,className:`chip shine`,children:(0,C.jsx)(`span`,{className:`label`,children:`Read the full process ↗`})})})]}),(0,C.jsx)(`div`,{className:`col-span-12 md:col-span-7 grid grid-cols-2 gap-6`,children:[{n:`I.`,t:`Listen`},{n:`II.`,t:`Sketch`},{n:`III.`,t:`Build`},{n:`IV.`,t:`Release`}].map((e,t)=>(0,C.jsx)(z,{s:e,i:t},e.n))})]})})}var V=S.memo(function({q:e,i:t}){let n=(0,S.useRef)(null),r=v(t*.1);return(0,S.useEffect)(()=>{if(!n.current)return;let e=n.current.querySelectorAll(`.pq-c`);c.set(e,{opacity:0,y:10}),l.create({trigger:n.current,start:`top 85%`,onEnter:()=>{c.to(e,{opacity:1,y:0,duration:.4,ease:`power2.out`,stagger:.008+t*.002})},onLeaveBack:()=>{c.set(e,{opacity:0,y:10})}})},[t]),(0,C.jsxs)(`figure`,{ref:e=>{n.current=e,r.current=e},className:`border-t border-[var(--bone)]/15 pt-6 group`,children:[(0,C.jsxs)(`blockquote`,{className:`font-editorial italic text-3xl md:text-4xl leading-[1.15] mb-6 group-hover:text-[var(--acid)] transition-colors duration-500`,children:[`"`,e.q.split(``).map((e,t)=>(0,C.jsx)(`span`,{className:`pq-c inline-block`,children:e===` `?`\xA0`:e},t)),`"`]}),(0,C.jsxs)(`figcaption`,{className:`tiny text-[var(--bone)]/60`,children:[`— `,e.a,` · `,e.y]})]})});function H(){return(0,C.jsxs)(`section`,{className:`px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15`,children:[(0,C.jsx)(`div`,{className:`tiny text-[var(--acid)] mb-6`,children:`◉ Press · 05`}),(0,C.jsxs)(`h2`,{className:`font-display display-thin text-[14vw] md:text-[8vw] leading-[0.88] tracking-[-0.04em] mb-16`,children:[(0,C.jsx)(`span`,{className:`font-editorial italic`,children:`Kind`}),` words.`]}),(0,C.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-10`,children:[{q:`One of the most considered studios working in Europe today.`,a:`It's Nice That`,y:`2025`},{q:`Their work behaves like it has been there all along.`,a:`Eye Magazine`,y:`2024`},{q:`Rare — a studio that writes as well as it designs.`,a:`Awwwards Jury`,y:`2024`}].map((e,t)=>(0,C.jsx)(V,{q:e,i:t},e.a))}),(0,C.jsx)(`div`,{className:`mt-20 flex flex-wrap gap-3`,children:[`Awwwards SOTD × 6`,`FWA of the Day × 3`,`D&AD Wood Pencil`,`TDC Certificate`,`CSSDA Best UI`,`It's Nice That`,`Site Inspire`,`Godly`,`Stack Award Nom.`,`European Design Longlist`].map(e=>(0,C.jsx)(b,{strength:.2,children:(0,C.jsx)(`span`,{className:`chip shine glow-hover`,children:(0,C.jsx)(`span`,{className:`label`,children:e})})},e))})]})}function U(){return(0,C.jsxs)(`section`,{className:`px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15 text-center relative overflow-hidden`,children:[(0,C.jsx)(`div`,{className:`absolute inset-0 distort-bg opacity-10 pointer-events-none gradient-mesh`}),(0,C.jsxs)(`div`,{className:`relative z-10`,children:[(0,C.jsx)(`div`,{className:`tiny text-[var(--acid)] mb-6`,children:`◉ Next · 06`}),(0,C.jsxs)(`h2`,{className:`font-display display-thin text-[16vw] md:text-[10vw] leading-[0.85] tracking-[-0.045em]`,children:[`Currently accepting`,(0,C.jsx)(`br`,{}),(0,C.jsx)(`span`,{className:`font-editorial italic text-[var(--acid)]`,children:`two`}),` projects`,(0,C.jsx)(`br`,{}),`for `,(0,C.jsx)(`span`,{className:`font-editorial italic`,children:`Q2 '26`}),`.`]}),(0,C.jsx)(`p`,{className:`text-[15px] leading-[1.7] text-[var(--bone)]/70 max-w-xl mx-auto mt-10 mb-12 font-sans font-light`,children:`We take on a handful of engagements each year — enough to do each one properly. If you have a project that deserves care, we'd love to hear about it.`}),(0,C.jsx)(b,{strength:.5,children:(0,C.jsx)(o,{to:`/contact`,className:`chip !text-sm !px-8 !py-4 !border-[var(--acid)] !text-[var(--bg)] !bg-[var(--acid)] glow-pulse ripple`,children:(0,C.jsx)(`span`,{className:`label`,children:`Start the conversation ↗`})})})]})]})}function W(){return(0,C.jsxs)(`main`,{children:[(0,C.jsx)(j,{}),(0,C.jsx)(w,{}),(0,C.jsx)(P,{}),(0,C.jsx)(I,{}),(0,C.jsx)(R,{}),(0,C.jsx)(B,{}),(0,C.jsx)(H,{}),(0,C.jsx)(U,{})]})}export{W as default};