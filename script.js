// ══════════════════════════════════════════
//  MONOSPACE ENGINE TYPING SYSTEM
// ══════════════════════════════════════════
const HERO_WORD = "Hi, I'm Ridhi Kumari.";

(function typeHeroName() {
  const el       = document.getElementById('typed-name');
  const cursorEl = document.getElementById('typed-cursor');
  const typeDelay  = 80;
  const startDelay = 700;
  const cursorHold = 1500;// ══════════════════════════════════════════
                          //  MONOSPACE ENGINE TYPING SYSTEM
                          // ══════════════════════════════════════════
                          const HERO_WORD = "Hi, I'm Ridhi Kumari.";

                          (function typeHeroName() {
                            const el       = document.getElementById('typed-name');
                            const cursorEl = document.getElementById('typed-cursor');
                            const typeDelay  = 80;
                            const startDelay = 700;
                            const cursorHold = 1500;
                            let i = 0;

                            el.setAttribute('data-text', HERO_WORD);

                            setTimeout(() => {
                              function typeNext() {
                                if (i <= HERO_WORD.length) {
                                  el.textContent = HERO_WORD.slice(0, i);
                                  el.setAttribute('data-text', HERO_WORD.slice(0, i));
                                  i++;
                                  if (i <= HERO_WORD.length) {
                                    setTimeout(typeNext, typeDelay);
                                  } else {
                                    setTimeout(() => {
                                      cursorEl.style.opacity = '0';
                                    }, cursorHold);
                                  }
                                }
                              }
                              typeNext();
                            }, startDelay);
                          })();

                          // ══════════════════════════════════════════
                          //  GLITCH CORE VECTOR COMPONENT
                          // ══════════════════════════════════════════
                          (function initGlitch() {
                            const nameEl   = document.querySelector('.hero-name');
                            const textEl   = document.getElementById('typed-name');
                            const CHARS    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!?';
                            let glitchTimer = null;
                            let scrambleInterval = null;
                            let isGlitching = false;

                            function randomChar() { return CHARS[Math.floor(Math.random() * CHARS.length)]; }

                            function scramble(step, total) {
                              const progress = step / total;
                              const resolved  = Math.floor(progress * HERO_WORD.length);
                              let display = '';
                              for (let i = 0; i < HERO_WORD.length; i++) {
                                display += i < resolved ? HERO_WORD[i] : randomChar();
                              }
                              textEl.textContent = display;
                              textEl.setAttribute('data-text', display);
                            }

                            function startGlitch() {
                              if (isGlitching) return;
                              isGlitching = true;
                              nameEl.classList.add('glitching');
                              nameEl.style.animation = 'glitchShake .3s steps(2) infinite';

                              const totalSteps = 15;
                              let step = 0;

                              scrambleInterval = setInterval(() => {
                                scramble(step, totalSteps);
                                step++;
                                if (step >= totalSteps) {
                                  clearInterval(scrambleInterval);
                                  textEl.textContent = HERO_WORD;
                                  textEl.setAttribute('data-text', HERO_WORD);
                                }
                              }, 35);
                            }

                            function endGlitch() {
                              clearInterval(scrambleInterval);
                              clearTimeout(glitchTimer);

                              let flickers = 0;
                              const flicker = setInterval(() => {
                                textEl.textContent = flickers % 2 === 0
                                  ? HERO_WORD.split('').map((c) => Math.random() > .75 ? randomChar() : c).join('')
                                  : HERO_WORD;
                                textEl.setAttribute('data-text', textEl.textContent);
                                flickers++;
                                if (flickers > 4) {
                                  clearInterval(flicker);
                                  textEl.textContent = HERO_WORD;
                                  textEl.setAttribute('data-text', HERO_WORD);
                                  nameEl.classList.remove('glitching');
                                  nameEl.style.animation = '';
                                  isGlitching = false;
                                }
                              }, 50);
                            }

                            nameEl.addEventListener('mouseenter', () => { glitchTimer = setTimeout(startGlitch, 50); });
                            nameEl.addEventListener('mouseleave', endGlitch);
                          })();

                          // ══════════════════════════════════════════
                          //  HAPTIC FLUID MOUSE TRAILER
                          // ══════════════════════════════════════════
                          const cursor = document.getElementById('cursor');
                          const ring   = document.getElementById('cursorRing');
                          let mx = -200, my = -200, rx = -200, ry = -200;

                          document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

                          function bindHoverEvents() {
                            document.querySelectorAll('button, a, .pill, .contact-link, .close-btn').forEach(el => {
                              el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
                              el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
                            });
                          }
                          bindHoverEvents();

                          (function animCursor() {
                            rx += (mx - rx) * .15;
                            ry += (my - ry) * .15;
                            cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
                            ring.style.left   = rx + 'px'; ring.style.top  = ry + 'px';
                            requestAnimationFrame(animCursor);
                          })();

                          // ══════════════════════════════════════════
                          //  THREE.JS SPACE ENGINE (3D UNIVERSE)
                          // ══════════════════════════════════════════
                          const W = window.innerWidth, H = window.innerHeight;
                          const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), antialias: true, alpha: true });
                          renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
                          renderer.setSize(W, H);

                          const scene  = new THREE.Scene();
                          const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200);
                          camera.position.set(0, 0, 22);

                          // Quantum Star field configuration
                          const starGeo = new THREE.BufferGeometry();
                          const COUNT = 1800;
                          const pos = new Float32Array(COUNT * 3);
                          for (let i = 0; i < COUNT * 3; i++) pos[i] = (Math.random() - .5) * 110;
                          starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
                          const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: .11, transparent: true, opacity: .6 });
                          scene.add(new THREE.Points(starGeo, starMat));

                          // Floating Geometric nodes
                          const shapes = [];
                          const geo3D = [
                            new THREE.OctahedronGeometry(1, 0),
                            new THREE.TetrahedronGeometry(.9, 0),
                            new THREE.IcosahedronGeometry(.9, 0),
                            new THREE.TorusGeometry(.6, .2, 10, 32),
                            new THREE.OctahedronGeometry(.7, 0)
                          ];

                          geo3D.forEach((g, i) => {
                            const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: Math.random() * .14 + .05 });
                            const mesh = new THREE.Mesh(g, mat);
                            const r = 8 + Math.random() * 6;
                            const ang = (i / geo3D.length) * Math.PI * 2;
                            mesh.position.set(Math.cos(ang) * r, (Math.random()-.5)*6, (Math.random()-.5)*4 - 2);
                            mesh.rotation.set(Math.random()*5, Math.random()*5, Math.random()*5);
                            mesh.scale.setScalar(.7 + Math.random() * .6);
                            mesh._speed  = { x: (Math.random()-.5)*.003, y: (Math.random()-.5)*.003, z: (Math.random()-.5)*.002 };
                            mesh._offset = Math.random() * 50;
                            scene.add(mesh);
                            shapes.push(mesh);
                          });

                          // Structural center sphere
                          const sphereGeo = new THREE.IcosahedronGeometry(3, 2);
                          const sphereMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: .05 });
                          const sphere = new THREE.Mesh(sphereGeo, sphereMat);
                          scene.add(sphere);

                          // Ground matrix grid alignment
                          const gridHelper = new THREE.GridHelper(50, 35, 0x181818, 0x0c0c0c);
                          gridHelper.position.y = -8;
                          scene.add(gridHelper);

                          // Dynamic viewport parallax
                          let targetX = 0, targetY = 0, curX = 0, curY = 0;
                          document.addEventListener('mousemove', e => {
                            targetX = (e.clientX / window.innerWidth  - .5) * 2;
                            targetY = (e.clientY / window.innerHeight - .5) * 2;
                          });

                          let t = 0;
                          (function animate() {
                            requestAnimationFrame(animate);
                            t += .006;
                            curX += (targetX - curX) * .03;
                            curY += (targetY - curY) * .03;

                            sphere.rotation.x = t * .1;
                            sphere.rotation.y = t * .14;

                            shapes.forEach(m => {
                              m.rotation.x += m._speed.x; m.rotation.y += m._speed.y;
                              m.position.y += Math.sin(t + m._offset) * .002;
                            });

                            camera.position.x = curX * 2;
                            camera.position.y = -curY * 1.5;
                            camera.lookAt(0, 0, 0);

                            renderer.render(scene, camera);
                          })();

                          window.addEventListener('resize', () => {
                            const W = window.innerWidth, H = window.innerHeight;
                            camera.aspect = W / H; camera.updateProjectionMatrix();
                            renderer.setSize(W, H);
                          });

                          // ══════════════════════════════════════════
                          //  PROFESSIONAL PROFILED DATA MATRIX
                          // ══════════════════════════════════════════
                          const panels = {
                            about: `
                              <h2>About Me <span>Data Sheet</span></h2>
                              <p class="panel-text">
                                I am a focused Computer Science Engineering student tracking towards enterprise software engineering vectors. My academic base at Uttaranchal University has primed my abilities to manage algorithm logic architecture and build reliable systems infrastructure.
                              </p>
                              <p class="panel-text">
                                Currently scaling engineering metrics by mastering logical structures, solving structural problems under runtime targets, and modernizing user layouts.
                              </p>
                              <div class="skill-group">
                                <div class="skill-group-title">Core Directives</div>
                                <div class="skill-pills">
                                  <span class="pill">Data Structures & Algorithms</span>
                                  <span class="pill">Competitive Programming</span>
                                  <span class="pill">Object-Oriented Architecture</span>
                                  <span class="pill">Full-Stack Web Design</span>
                                </div>
                              </div>`,

                            skills: `
                              <h2>Technical Capability <span>Stack Matrix</span></h2>
                              <div class="skill-group">
                                <div class="skill-group-title">Languages Ecosystem</div>
                                <div class="skill-pills">
                                  <span class="pill">C++</span>
                                  <span class="pill">HTML5</span>
                                  <span class="pill">CSS3</span>
                                  <span class="pill">JavaScript (ES6+)</span>
                                </div>
                              </div>
                              <div class="skill-group">
                                <div class="skill-group-title">Engineering Utilities</div>
                                <div class="skill-pills">
                                  <span class="pill">Git Control</span>
                                  <span class="pill">GitHub Engine</span>
                                  <span class="pill">VS Code Core</span>
                                </div>
                              </div>
                              <div class="skill-group">
                                <div class="skill-group-title">Algorithmic Benchmarks</div>
                                <div class="skill-pills">
                                  <span class="pill">91+ Optimised LeetCode Submissions</span>
                                </div>
                              </div>`,

                            education: `
                              <h2>Academic Framework <span>Credentials</span></h2>
                              <div class="exp-list">
                                <div class="exp-item">
                                  <div class="exp-dot"></div>
                                  <div>
                                    <div class="exp-role">Bachelor of Technology (B.Tech)</div>
                                    <div class="exp-company">Computer Science & Engineering</div>
                                    <div class="exp-company" style="color:rgba(255,255,255,0.35)">Uttaranchal University, Dehradun</div>
                                    <div class="exp-date">Batch: 2023 — 2027 · Final Year Core Track</div>
                                  </div>
                                </div>
                              </div>`,

                            contact: `
                              <h2>Identity Network <span>Communications Gateway</span></h2>
                              <p class="panel-text">
                                Open for professional engineering roles, software collaborations, and competitive programming initiatives. Click any portal to verify identity credentials.
                              </p>
                              <div class="contact-links">
                                <a class="contact-link" href="mailto:ridhikumari110107@gmail.com">
                                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                  <div class="contact-link-label">ridhikumari110107@gmail.com<span>Secure Corporate Email</span></div>
                                  <span class="contact-link-arrow">↗️</span>
                                </a>
                                <a class="contact-link" href="https://www.linkedin.com/in/ridhi-kumari-4893072ba" target="_blank">
                                  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                                  <div class="contact-link-label">linkedin.com/in/ridhi-kumari<span>Verified Enterprise Network</span></div>
                                  <span class="contact-link-arrow">↗️</span>
                                </a>
                                <a class="contact-link" href="https://github.com/ridhikumari-code" target="_blank">
                                  <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                                  <div class="contact-link-label">github.com/ridhikumari-code<span>Version Control Engine</span></div>
                                  <span class="contact-link-arrow">↗️</span>
                                </a>
                                <a class="contact-link" href="https://leetcode.com/u/Ridhi_jha/" target="_blank">
                                  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                  <div class="contact-link-label">leetcode.com/u/Ridhi_jha<span>LeetCode Verification Profile (91+ Solved)</span></div>
                                  <span class="contact-link-arrow">↗️</span>
                                </a>
                              </div>`
                          };

                          // ══════════════════════════════════════════
                          //  UI CONTROL PANEL LAYER ROUTING
                          // ══════════════════════════════════════════
                          function openPanel(key) {
                            document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
                            document.getElementById('btn-' + key)?.classList.add('active');
                            document.getElementById('panel-content').innerHTML = panels[key];
                            document.getElementById('overlay').classList.add('open');

                            setTimeout(() => { bindHoverEvents(); }, 50);
                          }

                          function closePanel() { document.getElementById('overlay').classList.remove('open'); }
                          function handleOverlayClick(e) { if (e.target === document.getElementById('overlay')) closePanel(); }
                          document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });
  let i = 0;

  el.setAttribute('data-text', HERO_WORD);

  setTimeout(() => {
    function typeNext() {
      if (i <= HERO_WORD.length) {
        el.textContent = HERO_WORD.slice(0, i);
        el.setAttribute('data-text', HERO_WORD.slice(0, i));
        i++;
        if (i <= HERO_WORD.length) {
          setTimeout(typeNext, typeDelay);
        } else {
          setTimeout(() => {
            cursorEl.style.opacity = '0';
          }, cursorHold);
        }
      }
    }
    typeNext();
  }, startDelay);
})();

// ══════════════════════════════════════════
//  GLITCH CORE VECTOR COMPONENT
// ══════════════════════════════════════════
(function initGlitch() {
  const nameEl   = document.querySelector('.hero-name');
  const textEl   = document.getElementById('typed-name');
  const CHARS    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!?';
  let glitchTimer = null;
  let scrambleInterval = null;
  let isGlitching = false;

  function randomChar() { return CHARS[Math.floor(Math.random() * CHARS.length)]; }

  function scramble(step, total) {
    const progress = step / total;
    const resolved  = Math.floor(progress * HERO_WORD.length);
    let display = '';
    for (let i = 0; i < HERO_WORD.length; i++) {
      display += i < resolved ? HERO_WORD[i] : randomChar();
    }
    textEl.textContent = display;
    textEl.setAttribute('data-text', display);
  }

  function startGlitch() {
    if (isGlitching) return;
    isGlitching = true;
    nameEl.classList.add('glitching');
    nameEl.style.animation = 'glitchShake .3s steps(2) infinite';

    const totalSteps = 15;
    let step = 0;

    scrambleInterval = setInterval(() => {
      scramble(step, totalSteps);
      step++;
      if (step >= totalSteps) {
        clearInterval(scrambleInterval);
        textEl.textContent = HERO_WORD;
        textEl.setAttribute('data-text', HERO_WORD);
      }
    }, 35);
  }

  function endGlitch() {
    clearInterval(scrambleInterval);
    clearTimeout(glitchTimer);

    let flickers = 0;
    const flicker = setInterval(() => {
      textEl.textContent = flickers % 2 === 0
        ? HERO_WORD.split('').map((c) => Math.random() > .75 ? randomChar() : c).join('')
        : HERO_WORD;
      textEl.setAttribute('data-text', textEl.textContent);
      flickers++;
      if (flickers > 4) {
        clearInterval(flicker);
        textEl.textContent = HERO_WORD;
        textEl.setAttribute('data-text', HERO_WORD);
        nameEl.classList.remove('glitching');
        nameEl.style.animation = '';
        isGlitching = false;
      }
    }, 50);
  }

  nameEl.addEventListener('mouseenter', () => { glitchTimer = setTimeout(startGlitch, 50); });
  nameEl.addEventListener('mouseleave', endGlitch);
})();

// ══════════════════════════════════════════
//  HAPTIC FLUID MOUSE TRAILER
// ══════════════════════════════════════════
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = -200, my = -200, rx = -200, ry = -200;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function bindHoverEvents() {
  document.querySelectorAll('button, a, .pill, .contact-link, .close-btn').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
}
bindHoverEvents();

(function animCursor() {
  rx += (mx - rx) * .15;
  ry += (my - ry) * .15;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  ring.style.left   = rx + 'px'; ring.style.top  = ry + 'px';
  requestAnimationFrame(animCursor);
})();

// ══════════════════════════════════════════
//  THREE.JS SPACE ENGINE (3D UNIVERSE)
// ══════════════════════════════════════════
const W = window.innerWidth, H = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(W, H);

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200);
camera.position.set(0, 0, 22);

// Quantum Star field configuration
const starGeo = new THREE.BufferGeometry();
const COUNT = 1800;
const pos = new Float32Array(COUNT * 3);
for (let i = 0; i < COUNT * 3; i++) pos[i] = (Math.random() - .5) * 110;
starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: .11, transparent: true, opacity: .6 });
scene.add(new THREE.Points(starGeo, starMat));

// Floating Geometric nodes
const shapes = [];
const geo3D = [
  new THREE.OctahedronGeometry(1, 0),
  new THREE.TetrahedronGeometry(.9, 0),
  new THREE.IcosahedronGeometry(.9, 0),
  new THREE.TorusGeometry(.6, .2, 10, 32),
  new THREE.OctahedronGeometry(.7, 0)
];

geo3D.forEach((g, i) => {
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: Math.random() * .14 + .05 });
  const mesh = new THREE.Mesh(g, mat);
  const r = 8 + Math.random() * 6;
  const ang = (i / geo3D.length) * Math.PI * 2;
  mesh.position.set(Math.cos(ang) * r, (Math.random()-.5)*6, (Math.random()-.5)*4 - 2);
  mesh.rotation.set(Math.random()*5, Math.random()*5, Math.random()*5);
  mesh.scale.setScalar(.7 + Math.random() * .6);
  mesh._speed  = { x: (Math.random()-.5)*.003, y: (Math.random()-.5)*.003, z: (Math.random()-.5)*.002 };
  mesh._offset = Math.random() * 50;
  scene.add(mesh);
  shapes.push(mesh);
});

// Structural center sphere
const sphereGeo = new THREE.IcosahedronGeometry(3, 2);
const sphereMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: .05 });
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
scene.add(sphere);

// Ground matrix grid alignment
const gridHelper = new THREE.GridHelper(50, 35, 0x181818, 0x0c0c0c);
gridHelper.position.y = -8;
scene.add(gridHelper);

// Dynamic viewport parallax
let targetX = 0, targetY = 0, curX = 0, curY = 0;
document.addEventListener('mousemove', e => {
  targetX = (e.clientX / window.innerWidth  - .5) * 2;
  targetY = (e.clientY / window.innerHeight - .5) * 2;
});

let t = 0;
(function animate() {
  requestAnimationFrame(animate);
  t += .006;
  curX += (targetX - curX) * .03;
  curY += (targetY - curY) * .03;

  sphere.rotation.x = t * .1;
  sphere.rotation.y = t * .14;

  shapes.forEach(m => {
    m.rotation.x += m._speed.x; m.rotation.y += m._speed.y;
    m.position.y += Math.sin(t + m._offset) * .002;
  });

  camera.position.x = curX * 2;
  camera.position.y = -curY * 1.5;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
})();

window.addEventListener('resize', () => {
  const W = window.innerWidth, H = window.innerHeight;
  camera.aspect = W / H; camera.updateProjectionMatrix();
  renderer.setSize(W, H);
});

// ══════════════════════════════════════════
//  PROFESSIONAL PROFILED DATA MATRIX
// ══════════════════════════════════════════
const panels = {
  about: `
    <h2>About Me <span>Data Sheet</span></h2>
    <p class="panel-text">
      Hi! I am a Computer Science & Engineering student at Uttaranchal University who loves building things for the web. My coding journey started with a curiosity about how software works, and now I enjoy writing clean code to solve real-world puzzles.
    </p>
    <p class="panel-text">
     Right now, my absolute main focus is on deep diving into Data Structures and Algorithms to strengthen my problem-solving skills, while regularly practicing coding challenges and refining my understanding of web layouts.
    </p>
    <div class="skill-group">
      <div class="skill-group-title">Core Directives</div>
      <div class="skill-pills">
        <span class="pill">Data Structures & Algorithms</span>
        <span class="pill">Competitive Programming</span>
        <span class="pill">Object-Oriented Architecture</span>
        <span class="pill">Full-Stack Web Design</span>
      </div>
    </div>`,

  skills: `
    <h2>Technical Capability <span>Stack Matrix</span></h2>
    <div class="skill-group">
      <div class="skill-group-title">Languages Ecosystem</div>
      <div class="skill-pills">
        <span class="pill">Java</span>
        <span class="pill">C++</span>
        <span class="pill">HTML5</span>
        <span class="pill">CSS3</span>
        <span class="pill">JavaScript (ES6+)</span>
      </div>
    </div>
    <div class="skill-group">
      <div class="skill-group-title">Engineering Utilities</div>
      <div class="skill-pills">
        <span class="pill">Git Control</span>
        <span class="pill">GitHub </span>
        <span class="pill">VS Code Core</span>
      </div>
    </div>
    <div class="skill-group">
      <div class="skill-group-title">Algorithmic Benchmarks</div>
      <div class="skill-pills">
        <span class="pill">91+ Optimised LeetCode Submissions</span>
      </div>
    </div>`,

  education: `
    <h2>Academic Framework <span>Credentials</span></h2>
    <div class="exp-list">
      <div class="exp-item">
        <div class="exp-dot"></div>
        <div>
          <div class="exp-role">Bachelor of Technology (B.Tech)</div>
          <div class="exp-company">Computer Science & Engineering</div>
          <div class="exp-company" style="color:rgba(255,255,255,0.35)">Uttaranchal University, Dehradun</div>
          <div class="exp-date">Batch: 2023 — 2027 · Final Year Core Track</div>
        </div>
      </div>
    </div>`,

    projects: `
        <h2>Featured Projects <span>Development Log</span></h2>
        <div class="exp-list">
          <div class="exp-item">
            <div class="exp-dot"></div>
            <div>
              <div class="exp-role">Interactive Personal Portfolio</div>
              <div class="exp-company">HTML5 · CSS3 · JavaScript</div>
              <p class="panel-text" style="margin-top: 0.4rem; font-size: 0.78rem;">
                A clean, minimalist personal portfolio designed to showcase my skills and academic updates. It features a fully responsive layout, dynamic dark mode theme, smooth tab navigation, and interactive UI elements built entirely using core frontend web technologies.
              </p>
            </div>
          </div>
        </div>`,

  contact: `
    <h2>Identity Network <span>Communications Gateway</span></h2>
    <p class="panel-text">
      Open for professional engineering roles, software collaborations, and competitive programming initiatives. Click any portal to verify identity credentials.
    </p>
    <div class="contact-links">
      <a class="contact-link" href="mailto:ridhikumari110107@gmail.com">
        <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <div class="contact-link-label">ridhikumari110107@gmail.com<span>Secure Corporate Email</span></div>
        <span class="contact-link-arrow">↗️</span>
      </a>
      <a class="contact-link" href="https://www.linkedin.com/in/ridhi-kumari-4893072ba" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        <div class="contact-link-label">linkedin.com/in/ridhi-kumari<span>Verified Enterprise Network</span></div>
        <span class="contact-link-arrow">↗️</span>
      </a>
      <a class="contact-link" href="https://github.com/ridhikumari-code" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        <div class="contact-link-label">github.com/ridhikumari-code<span>Version Control Engine</span></div>
        <span class="contact-link-arrow">↗️</span>
      </a>
      <a class="contact-link" href="https://leetcode.com/u/Ridhi_jha/" target="_blank">
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <div class="contact-link-label">leetcode.com/u/Ridhi_jha<span>LeetCode Verification Profile (91+ Solved)</span></div>
        <span class="contact-link-arrow">↗️</span>
      </a>
    </div>`
};

// ══════════════════════════════════════════
//  UI CONTROL PANEL LAYER ROUTING
// ══════════════════════════════════════════
function openPanel(key) {
  document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + key)?.classList.add('active');
  document.getElementById('panel-content').innerHTML = panels[key];
  document.getElementById('overlay').classList.add('open');

  setTimeout(() => { bindHoverEvents(); }, 50);
}

function closePanel() { document.getElementById('overlay').classList.remove('open'); }
function handleOverlayClick(e) { if (e.target === document.getElementById('overlay')) closePanel(); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });