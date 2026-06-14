const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProjectImage-D94cRAAA.js","assets/three-Ck2KrItU.js","assets/vendor-DH2T-_s4.js"])))=>i.map(i=>d[i]);
import{j as e,C as N,V as k,u as C,_ as S}from"./three-Ck2KrItU.js";import{b as n,L as c,R as x}from"./vendor-DH2T-_s4.js";import{u as D,a as P,W as R,M as d,b,P as g,c as j,d as y,S as p,e as T,f as I,g as M,h as z}from"./index-C4vjZeAU.js";import{g as m}from"./animations-CW5XuxEQ.js";function A(){const a=n.useRef(null),s=D();n.useEffect(()=>{if(!a.current)return;const i=Math.max(-60,Math.min(60,s*3));a.current.style.setProperty("--vel",`${i}px`)},[s]);const t=["Brand Identity","Art Direction","Interactive 3D","Editorial Design","Type Systems","Creative Code","Motion","WebGL"],r=["Awwwards SOTD","FWA of the Day","D&AD Wood Pencil","TDC Certificate","CSSDA Best UI","It's Nice That","Site Inspire","Godly"],l=Math.max(-8,Math.min(8,s*.6));return e.jsxs("section",{className:"relative py-8 md:py-12 border-y border-[var(--bone)]/10 overflow-hidden",children:[e.jsx("div",{className:"marquee-track",style:{transform:`skewY(${l}deg)`},children:[...t,...t].map((i,o)=>e.jsxs("span",{className:"marquee-item font-display text-[8vw] md:text-[6vw] leading-none px-8 flex items-center gap-8",children:[o%2===0?i:e.jsx("em",{className:"italic text-[var(--acid)]",children:i}),e.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-[var(--bone)]/30"})]},`a-${o}`))}),e.jsx("div",{ref:a,className:"marquee-track mt-4",style:{animationDirection:"reverse",animationDuration:"55s",transform:`skewY(${-l}deg)`},children:[...r,...r].map((i,o)=>e.jsxs("span",{className:"marquee-item font-display italic text-[5vw] md:text-[3.2vw] leading-none px-6 flex items-center gap-6 text-[var(--bone)]/50",children:[i,e.jsx("span",{className:"inline-block text-[var(--acid)]",children:"✦"})]},`b-${o}`))})]})}const E=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,q=`
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
`,F=()=>{const a=n.useRef(null),s=n.useMemo(()=>({uTime:{value:0},uResolution:{value:new k(window.innerWidth,window.innerHeight)}}),[]);return C(t=>{a.current&&(a.current.uniforms.uTime.value=t.clock.elapsedTime,a.current.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight))}),e.jsxs("mesh",{children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{ref:a,vertexShader:E,fragmentShader:q,uniforms:s,transparent:!0,depthWrite:!1})]})};function W(){return e.jsx("div",{className:"h-full w-full",children:e.jsx(N,{camera:{position:[0,0,1]},dpr:window.devicePixelRatio,gl:{antialias:!1},children:e.jsx(F,{})})})}function L(){const a=n.useRef(null),s=P(4);return n.useEffect(()=>{const t=a.current;if(!t)return;let r=t.getBoundingClientRect();const l=()=>{r=t.getBoundingClientRect()};window.addEventListener("resize",l);let i,o=!1,h=0,v=0;const w=()=>{t.style.setProperty("--mx",`${h-r.left}px`),t.style.setProperty("--my",`${v-r.top}px`),o=!1},f=u=>{h=u.clientX,v=u.clientY,o||(i=requestAnimationFrame(w),o=!0)};return t.addEventListener("mousemove",f),()=>{window.removeEventListener("resize",l),t.removeEventListener("mousemove",f),cancelAnimationFrame(i)}},[]),n.useEffect(()=>{m.timeline({delay:.2}).fromTo(".h-l1",{yPercent:110},{yPercent:0,duration:1.2,ease:"expo.out"}).fromTo(".h-l2",{yPercent:110},{yPercent:0,duration:1.2,ease:"expo.out"},"-=0.95").fromTo(".h-l3",{yPercent:110},{yPercent:0,duration:1.2,ease:"expo.out"},"-=0.95").fromTo(".h-meta",{opacity:0,y:20},{opacity:1,y:0,duration:.8},"-=0.6")},[]),e.jsxs("section",{ref:a,className:"hero-section relative min-h-[100svh] w-full flex flex-col justify-between px-6 md:px-10 pt-32 pb-10 md:pb-12 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 z-0 overflow-hidden bg-black",children:e.jsx(W,{})}),e.jsx("div",{className:"hero-spotlight absolute inset-0 z-[1] pointer-events-none"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[var(--bg)]/30 via-transparent to-[var(--bg)]/30 z-[2]"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[var(--bg)]/20 via-transparent to-[var(--bg)]/20 z-[2]"}),e.jsxs("div",{className:"relative z-10 w-full flex justify-between items-start mix-blend-difference mb-8",children:[e.jsxs("div",{className:"tiny text-white/70 max-w-[260px] leading-[1.8]",children:[e.jsx("span",{className:"inline-block spin-slow mr-2",children:"↖"}),"Independent art director & digital designer.",e.jsx("br",{}),e.jsx("span",{className:"opacity-60",children:"Identities · Interfaces · Moving image"})]}),e.jsxs("div",{className:"hidden md:block tiny text-white/70 text-right leading-[1.8]",children:["Portfolio ",e.jsx("span",{className:"opacity-50",children:"/ Chapter 04"}),e.jsx("br",{}),"2021 — 2026",e.jsx("br",{}),e.jsx("span",{className:"opacity-50",children:"Berlin · Remote"})]})]}),e.jsxs("div",{ref:s,className:"relative z-10 mix-blend-difference mt-auto",children:[e.jsxs("div",{className:"text-white hero-morph-text",children:[e.jsx("div",{className:"overflow-hidden",children:e.jsxs("div",{className:"h-l1 font-display display-thin text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.9] tracking-[-0.04em] ml-[2%] sm:ml-[4%] lg:ml-[6%]",children:["Designing",e.jsx("span",{className:"font-editorial text-[var(--acid)] no-stroke",children:" the"})]})}),e.jsx("div",{className:"overflow-hidden",children:e.jsxs("div",{className:"h-l2 font-display display-light text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.9] tracking-[-0.04em] ml-[8%] sm:ml-[15%] lg:ml-[22%]",children:[e.jsx("span",{className:"font-editorial text-[#ff5f00] no-stroke",children:"quiet "}),"spaces"]})}),e.jsx("div",{className:"overflow-hidden",children:e.jsxs("div",{className:"h-l3 font-editorial italic text-[16.5vw] sm:text-[14.5vw] md:text-[11.5vw] lg:text-[9.5vw] leading-[0.95] tracking-[-0.02em] ml-[12%] sm:ml-[25%] lg:ml-[40%]",children:["between ",e.jsx("span",{className:"text-[#ff5f00] no-stroke",children:"noise"}),e.jsx("span",{className:"text-[var(--acid)] no-stroke",children:"."})]})})]}),e.jsxs("div",{className:"h-meta mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white",children:[e.jsx(R,{className:"max-w-md text-[15px] leading-[1.6] font-sans font-light tracking-[0.005em] opacity-90",as:"p",children:"A small, deliberately slow design studio. Brand systems, editorial websites, interactive 3D — for labels, ateliers, and cultural institutions that take their time."}),e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e.jsx(d,{children:e.jsxs(c,{to:"/work",className:"chip group ripple !border-white !text-white",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[var(--bg)]"}),e.jsx("span",{className:"label",children:"View the archive"})]})}),e.jsx(d,{children:e.jsx(c,{to:"/contact",className:"chip ripple !bg-white !text-[var(--bg)] !border-white",children:e.jsx("span",{className:"label",children:"Start a project ↗"})})})]})]})]})]})}const B=n.lazy(()=>S(()=>import("./ProjectImage-D94cRAAA.js"),__vite__mapDeps([0,1,2]))),G=x.memo(function({p:s,i:t}){const r=j(8),l=y(t===0?"circle":t===1?"h":"v");return e.jsxs(c,{ref:i=>{r.current=i,l.current=i},to:`/work/${s.slug}`,className:`tilt-card group relative overflow-hidden block ${t===0?"md:col-span-12 lg:col-span-7 aspect-[4/3]":t===1?"md:col-span-12 lg:col-span-5 aspect-[4/3]":"md:col-span-12 aspect-[21/9]"}`,"data-cursor":"hover",children:[e.jsx("div",{className:"absolute inset-0 project-img",children:e.jsx(n.Suspense,{fallback:e.jsx("div",{className:"w-full h-full bg-[var(--mute)]"}),children:e.jsx(B,{src:s.thumbnail,active:!1})})}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"}),e.jsxs("div",{className:"relative z-10 h-full flex flex-col justify-end p-6 md:p-10",children:[e.jsxs("div",{className:"tiny text-[var(--acid)] mb-3",children:["(",s.index,") · ",s.year]}),e.jsx("div",{className:"font-display display-light text-6xl md:text-8xl leading-[0.88] tracking-[-0.035em] mb-3",children:e.jsx(p,{children:s.title})}),e.jsx("div",{className:"font-sans text-sm font-light text-white/80 max-w-md leading-relaxed",children:s.subtitle}),e.jsx("div",{className:"mt-4 flex gap-2 flex-wrap",children:s.tags.map(i=>e.jsx("span",{className:"micro text-white/60 border border-white/30 px-2 py-1 rounded-full",children:i},i))})]})]})});function V(){const a=g.slice(0,3),s=b();return e.jsxs("section",{className:"px-6 md:px-10 pt-28 md:pt-40",children:[e.jsxs("div",{ref:s,className:"flex items-end justify-between mb-16 md:mb-20 gap-8 flex-wrap",children:[e.jsxs("div",{children:[e.jsx("div",{className:"tiny text-[var(--acid)] mb-6",children:"◉ Featured · Index"}),e.jsxs("h2",{className:"font-display display-thin text-[14vw] md:text-[8vw] leading-[0.88] tracking-[-0.04em]",children:["Selected ",e.jsx("span",{className:"font-editorial italic",children:"recently"}),"."]})]}),e.jsx(d,{children:e.jsx(c,{to:"/work",className:"chip shine",children:e.jsxs("span",{className:"label",children:["Full archive (",g.length,") ↗"]})})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10",children:a.map((t,r)=>e.jsx(G,{p:t,i:r},t.slug))})]})}function _({to:a,label:s}){const{ref:t,display:r}=T(a,1.6);return e.jsxs("div",{children:[e.jsx("div",{ref:t,className:"font-display display-thin text-7xl md:text-8xl text-[var(--acid)] tracking-[-0.04em]",children:e.jsx("span",{className:"number-flip",children:r})}),e.jsx("div",{className:"micro text-[var(--bone)]/60 mt-3",children:s})]})}function $(){const a=n.useRef(null);return n.useEffect(()=>{if(!a.current)return;const t=a.current.querySelectorAll(".word");m.fromTo(t,{yPercent:120},{yPercent:0,duration:.9,ease:"expo.out",stagger:.03,scrollTrigger:{trigger:a.current,start:"top 75%",toggleActions:"play none none reverse"}})},[]),e.jsx("section",{className:"px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15",children:e.jsxs("div",{className:"grid grid-cols-12 gap-8",children:[e.jsxs("div",{className:"col-span-12 md:col-span-3",children:[e.jsx("div",{className:"tiny text-[var(--acid)] mb-6",children:"◉ Studio · 02"}),e.jsx(d,{children:e.jsx(c,{to:"/studio",className:"chip shine",children:e.jsx("span",{className:"label",children:"More about us ↗"})})})]}),e.jsxs("div",{className:"col-span-12 md:col-span-9",children:[e.jsx("h3",{ref:a,className:"font-display display-light text-[7vw] md:text-[3.5vw] leading-[1.1] tracking-[-0.03em]",children:"We are a small, senior studio — six people, one room in Berlin, one kiln in the basement. Every project is led by a partner, every line of code is written in-house.".split(" ").map((t,r)=>e.jsx("span",{className:"inline-block overflow-hidden mr-[0.22em] align-bottom",children:e.jsx("span",{className:`word inline-block ${[4,8,14,21,26].includes(r)?"font-editorial italic":""}`,children:t})},r))}),e.jsx("div",{className:"mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--bone)]/15 pt-10",children:[{n:5,l:"Years in practice"},{n:38,l:"Projects shipped"},{n:14,l:"Countries served"},{n:22,l:"Awards & features"}].map(t=>e.jsx(_,{to:t.n,label:t.l},t.l))})]})]})})}const O=x.memo(function({c:s}){const t=j(6),r=b(),l=I(.6);return e.jsxs("div",{ref:i=>{t.current=i,r.current=i},className:"tilt-card shine border-t border-[var(--bone)]/15 pt-6 p-4 -m-4",children:[e.jsxs("div",{className:"flex justify-between items-start mb-8",children:[e.jsx("div",{className:"font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--bone)]/40",children:s.n}),e.jsx("div",{ref:l,className:"text-3xl text-[var(--acid)]",children:s.icon})]}),e.jsx("h4",{className:"font-display display-regular text-4xl mb-4 tracking-[-0.025em]",children:e.jsx(p,{children:s.t})}),e.jsx("p",{className:"text-sm leading-relaxed text-[var(--bone)]/70 font-sans font-light",children:s.d})]})});function H(){const a=[{n:"01",t:"Brand Systems",d:"Identity, type, guidelines, and the rituals that make a brand feel inevitable.",icon:"◐"},{n:"02",t:"Editorial Web",d:"Long-form sites that read like print and move like film.",icon:"◈"},{n:"03",t:"Interactive 3D",d:"WebGL experiences, shader work, spatial interfaces.",icon:"◉"},{n:"04",t:"Art Direction",d:"Campaigns, lookbooks, and the visual grammar that ties them together.",icon:"◊"},{n:"05",t:"Type Systems",d:"Custom typefaces, variable fonts, typographic conventions.",icon:"◌"},{n:"06",t:"Creative Code",d:"Installations, generative prints, tools for internal teams.",icon:"◍"}];return e.jsxs("section",{className:"px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15 relative overflow-hidden",children:[e.jsxs("div",{className:"flex items-end justify-between mb-16 gap-8 flex-wrap",children:[e.jsxs("div",{children:[e.jsx("div",{className:"tiny text-[var(--acid)] mb-6",children:"◉ Capabilities · 03"}),e.jsxs("h2",{className:"font-display display-light text-[14vw] md:text-[8vw] leading-[0.88] tracking-[-0.04em]",children:["What we ",e.jsx("span",{className:"font-editorial italic",children:"actually"})," make."]})]}),e.jsx("p",{className:"max-w-sm text-sm leading-relaxed text-[var(--bone)]/70 font-sans font-light",children:"Six disciplines, practiced deeply. Most engagements pull from three or four. Nothing is outsourced."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16",children:a.map((s,t)=>e.jsx(O,{c:s,i:t},s.n))})]})}const U=x.memo(function({s,i:t}){const r=y("circle",t*.15);return e.jsxs("div",{ref:r,className:"process-tile border border-[var(--bone)]/15 p-6 md:p-10 aspect-square flex flex-col justify-between group cursor-default relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-[var(--acid)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-0"}),e.jsx("div",{className:"font-editorial italic text-6xl md:text-7xl text-[var(--acid)] group-hover:text-[var(--bg)] transition-colors duration-500 group-hover:rotate-[360deg] transition-[transform,color] duration-1000 ease-out relative z-10",children:s.n}),e.jsx("div",{className:"font-display display-regular text-3xl tracking-[-0.02em] relative z-10 group-hover:text-[var(--bg)] transition-colors duration-500",children:e.jsx(p,{children:s.t})})]})});function Y(){const a=[{n:"I.",t:"Listen"},{n:"II.",t:"Sketch"},{n:"III.",t:"Build"},{n:"IV.",t:"Release"}];return e.jsx("section",{className:"px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15",children:e.jsxs("div",{className:"grid grid-cols-12 gap-8 items-start",children:[e.jsxs("div",{className:"col-span-12 md:col-span-5",children:[e.jsx("div",{className:"tiny text-[var(--acid)] mb-6",children:"◉ Process · 04"}),e.jsxs("h2",{className:"font-display display-thin text-[14vw] md:text-[7vw] leading-[0.88] tracking-[-0.04em] mb-8",children:[e.jsx("span",{className:"font-editorial italic",children:"Four"})," movements,",e.jsx("br",{}),"one year."]}),e.jsx("p",{className:"text-[15px] leading-[1.7] text-[var(--bone)]/70 mb-8 max-w-md font-sans font-light",children:"Not a waterfall. Not an agile sprint theatre. A deliberate pace that respects the work and the people it's for."}),e.jsx(d,{children:e.jsx(c,{to:"/process",className:"chip shine",children:e.jsx("span",{className:"label",children:"Read the full process ↗"})})})]}),e.jsx("div",{className:"col-span-12 md:col-span-7 grid grid-cols-2 gap-6",children:a.map((s,t)=>e.jsx(U,{s,i:t},s.n))})]})})}const Q=x.memo(function({q:s,i:t}){const r=n.useRef(null),l=M(t*.1);return n.useEffect(()=>{if(!r.current)return;const i=r.current.querySelectorAll(".pq-c");m.set(i,{opacity:0,y:10}),z.create({trigger:r.current,start:"top 85%",onEnter:()=>{m.to(i,{opacity:1,y:0,duration:.4,ease:"power2.out",stagger:.008+t*.002})},onLeaveBack:()=>{m.set(i,{opacity:0,y:10})}})},[t]),e.jsxs("figure",{ref:i=>{r.current=i,l.current=i},className:"border-t border-[var(--bone)]/15 pt-6 group",children:[e.jsxs("blockquote",{className:"font-editorial italic text-3xl md:text-4xl leading-[1.15] mb-6 group-hover:text-[var(--acid)] transition-colors duration-500",children:['"',s.q.split("").map((i,o)=>e.jsx("span",{className:"pq-c inline-block",children:i===" "?" ":i},o)),'"']}),e.jsxs("figcaption",{className:"tiny text-[var(--bone)]/60",children:["— ",s.a," · ",s.y]})]})});function J(){const a=[{q:"One of the most considered studios working in Europe today.",a:"It's Nice That",y:"2025"},{q:"Their work behaves like it has been there all along.",a:"Eye Magazine",y:"2024"},{q:"Rare — a studio that writes as well as it designs.",a:"Awwwards Jury",y:"2024"}];return e.jsxs("section",{className:"px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15",children:[e.jsx("div",{className:"tiny text-[var(--acid)] mb-6",children:"◉ Press · 05"}),e.jsxs("h2",{className:"font-display display-thin text-[14vw] md:text-[8vw] leading-[0.88] tracking-[-0.04em] mb-16",children:[e.jsx("span",{className:"font-editorial italic",children:"Kind"})," words."]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10",children:a.map((s,t)=>e.jsx(Q,{q:s,i:t},s.a))}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-3",children:["Awwwards SOTD × 6","FWA of the Day × 3","D&AD Wood Pencil","TDC Certificate","CSSDA Best UI","It's Nice That","Site Inspire","Godly","Stack Award Nom.","European Design Longlist"].map(s=>e.jsx(d,{strength:.2,children:e.jsx("span",{className:"chip shine glow-hover",children:e.jsx("span",{className:"label",children:s})})},s))})]})}function K(){return e.jsxs("section",{className:"px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15 text-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 distort-bg opacity-10 pointer-events-none gradient-mesh"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"tiny text-[var(--acid)] mb-6",children:"◉ Next · 06"}),e.jsxs("h2",{className:"font-display display-thin text-[16vw] md:text-[10vw] leading-[0.85] tracking-[-0.045em]",children:["Currently accepting",e.jsx("br",{}),e.jsx("span",{className:"font-editorial italic text-[var(--acid)]",children:"two"})," projects",e.jsx("br",{}),"for ",e.jsx("span",{className:"font-editorial italic",children:"Q2 '26"}),"."]}),e.jsx("p",{className:"text-[15px] leading-[1.7] text-[var(--bone)]/70 max-w-xl mx-auto mt-10 mb-12 font-sans font-light",children:"We take on a handful of engagements each year — enough to do each one properly. If you have a project that deserves care, we'd love to hear about it."}),e.jsx(d,{strength:.5,children:e.jsx(c,{to:"/contact",className:"chip !text-sm !px-8 !py-4 !border-[var(--acid)] !text-[var(--bg)] !bg-[var(--acid)] glow-pulse ripple",children:e.jsx("span",{className:"label",children:"Start the conversation ↗"})})})]})]})}function se(){return e.jsxs("main",{children:[e.jsx(L,{}),e.jsx(A,{}),e.jsx(V,{}),e.jsx($,{}),e.jsx(H,{}),e.jsx(Y,{}),e.jsx(J,{}),e.jsx(K,{})]})}export{se as default};
