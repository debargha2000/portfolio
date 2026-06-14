import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{a as t,c as n,d as r,f as i,h as a,i as o,l as s,o as c,p as l,r as u,s as d,u as f}from"./@react-three-CKMXv1xh.js";var p=e(a(),1),m=l(),h=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,g=`
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
`;function _({src:e,active:a}){let l=(0,p.useRef)(null),_=(0,p.useRef)(null),v=(0,p.useRef)(0),y=(0,p.useRef)(0);return(0,p.useEffect)(()=>{y.current=+!!a},[a]),(0,p.useEffect)(()=>{let a=l.current,p=_.current,m=new u({canvas:p,antialias:!0,alpha:!0}),b=new s,x=new d(-1,1,1,-1,0,1),S=()=>{let e=a.clientWidth,t=a.clientHeight;m.setSize(e,t,!1),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.uRes.value.set(e,t)},C=new r().load(e,e=>{let t=e.image;w.uImgRes.value.set(t.naturalWidth,t.naturalHeight)});C.minFilter=t,C.generateMipmaps=!1;let w={uTexture:{value:C},uHover:{value:0},uTime:{value:0},uRes:{value:new i(1,1)},uImgRes:{value:new i(1,1)}},T=new n(2,2),E=new f({vertexShader:h,fragmentShader:g,uniforms:w}),D=new c(T,E);b.add(D),S(),window.addEventListener(`resize`,S);let O=new o,k=0,A=!1,j=()=>{A&&(w.uTime.value=O.getElapsedTime(),v.current+=(y.current-v.current)*.08,w.uHover.value=v.current,m.render(b,x),k=requestAnimationFrame(j))},M=new IntersectionObserver(e=>{e.forEach(e=>{A=e.isIntersecting,A?(cancelAnimationFrame(k),k=requestAnimationFrame(j)):cancelAnimationFrame(k)})},{threshold:0});return M.observe(a),()=>{M.disconnect(),cancelAnimationFrame(k),window.removeEventListener(`resize`,S),m.dispose(),T.dispose(),E.dispose(),C.dispose()}},[e]),(0,m.jsx)(`div`,{ref:l,className:`absolute inset-0 w-full h-full`,children:(0,m.jsx)(`canvas`,{ref:_,className:`w-full h-full block`})})}export{_ as default};