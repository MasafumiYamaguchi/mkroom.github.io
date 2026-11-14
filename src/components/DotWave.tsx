import { useEffect, useRef } from "react";

/** ヒーロー背景: 波打つドットのシート(perspective 投影) */
const DotWave = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;

    const COLS = 64;
    const ROWS = 26;

    const draw = (time: number) => {
      const t = time * 0.0004;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < COLS; i++) {
        const u = i / (COLS - 1); // 0..1 (左→右)
        for (let j = 0; j < ROWS; j++) {
          const v = j / (ROWS - 1) - 0.5; // -0.5..0.5
          const wave =
            Math.sin(u * 7 + t * 2 + v * 3) * Math.cos(v * 5 - t * 1.4);
          const depth = 1 - u * 0.55 + wave * 0.12; // 左ほど手前
          const x = w * (0.18 + u * 0.82) + wave * 8;
          const y =
            h * 0.5 + (v * h * 1.15 + wave * h * 0.22) * (0.55 + depth * 0.6);
          const r = Math.max(0.3, depth * 2.1 * (0.6 + Math.abs(wave) * 0.7));
          // テキスト側(左)を薄く、右へ向かって疎に
          const fade = Math.min(1, u * 2.2) * (1 - u * 0.35);
          const sparse = u > 0.55 && j % 3 !== 0 ? 0.35 : 1;
          const a = Math.max(
            0,
            Math.min(0.9, fade * sparse * (0.25 + depth * 0.6)),
          );
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw(0);
    };

    resize();
    if (!reduce) raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
};

export default DotWave;
