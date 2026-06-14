import{W as I,S as M,O as S,T as U,V as y,L as j,P as L,a as P,M as A,b as z,j as b}from"./three-Ck2KrItU.js";import{b as r}from"./vendor-DH2T-_s4.js";const D=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,G=`
  uniform sampler2D uTexture;
  uniform float uHover;
  uniform float uTime;
  uniform vec2 uRes;
  uniform vec2 uImgRes;
  varying vec2 vUv;

  vec2 coverUv(vec2 uv, vec2 iRes, vec2 rRes){
    vec2 ratio = vec2(
      min((rRes.x / rRes.y) / (iRes.x / iRes.y), 1.0),
      min((rRes.y / rRes.x) / (iRes.y / iRes.x), 1.0)
    );
    return vec2(uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                uv.y * ratio.y + (1.0 - ratio.y) * 0.5);
  }

  void main() {
    vec2 uv = coverUv(vUv, uImgRes, uRes);

    // displacement wave on hover
    float wave = sin((uv.y + uTime * 0.3) * 12.0) * 0.5 + 0.5;
    float disp = uHover * 0.03 * wave;

    vec2 uvR = uv + vec2(disp, 0.0);
    vec2 uvG = uv;
    vec2 uvB = uv - vec2(disp, 0.0);

    float r = texture2D(uTexture, uvR).r;
    float g = texture2D(uTexture, uvG).g;
    float b = texture2D(uTexture, uvB).b;

    vec3 col = vec3(r, g, b);

    // desaturate slightly when idle
    float gray = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(gray), col, 0.55 + uHover * 0.45);

    // vignette
    float vig = smoothstep(1.1, 0.35, length(vUv - 0.5));
    col *= mix(0.85, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;function k({src:l,active:m}){const f=r.useRef(null),d=r.useRef(null),i=r.useRef(0),g=r.useRef(0);return r.useEffect(()=>{g.current=m?1:0},[m]),r.useEffect(()=>{const c=f.current,T=d.current,n=new I({canvas:T,antialias:!0,alpha:!0}),R=new M,E=new S(-1,1,1,-1,0,1),u=()=>{const t=c.clientWidth,e=c.clientHeight;n.setSize(t,e,!1),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.uRes.value.set(t,e)},o=new U().load(l,t=>{const e=t.image;s.uImgRes.value.set(e.naturalWidth,e.naturalHeight)});o.minFilter=j,o.generateMipmaps=!1;const s={uTexture:{value:o},uHover:{value:0},uTime:{value:0},uRes:{value:new y(1,1)},uImgRes:{value:new y(1,1)}},x=new L(2,2),h=new P({vertexShader:D,fragmentShader:G,uniforms:s}),F=new A(x,h);R.add(F),u(),window.addEventListener("resize",u);const H=new z;let a=0,v=!1;const w=()=>{v&&(s.uTime.value=H.getElapsedTime(),i.current+=(g.current-i.current)*.08,s.uHover.value=i.current,n.render(R,E),a=requestAnimationFrame(w))},p=new IntersectionObserver(t=>{t.forEach(e=>{v=e.isIntersecting,v?(cancelAnimationFrame(a),a=requestAnimationFrame(w)):cancelAnimationFrame(a)})},{threshold:0});return p.observe(c),()=>{p.disconnect(),cancelAnimationFrame(a),window.removeEventListener("resize",u),n.dispose(),x.dispose(),h.dispose(),o.dispose()}},[l]),b.jsx("div",{ref:f,className:"absolute inset-0 w-full h-full",children:b.jsx("canvas",{ref:d,className:"w-full h-full block"})})}export{k as default};
