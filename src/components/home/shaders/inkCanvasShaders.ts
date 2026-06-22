export const vertexShader = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

export const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;

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
`;
