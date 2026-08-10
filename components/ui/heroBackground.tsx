// components/ui/hero-background.tsx

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#050507]">
      {/* =========================================================
          BASE BACKGROUND
      ========================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(
            ellipse_at_50%_100%,
            rgba(10, 10, 10, 0.55),
            transparent_55%
          )]
        "
      />

      {/* =========================================================
          LEFT LARGE CIRCLE
      ========================================================== */}
      <div
        className="
          absolute
          -left-[650px]
          -top-[325px]
          xl:-left-[400px]
          xl:-top-[425px]
          h-[800px]
          w-[800px]
          rounded-full
          bg-linear-50 from-black via-[#0097FF] to-black
          shadow-lg
          shadow-[#0097ff]/70
        "
      />

      <div
        className="
            absolute
            -left-[650px]
            -top-[325px]
            xl:-left-[400px]
            xl:-top-[425px]
            h-[796px]
            w-[796px]
            rounded-full
            bg-black
        "
      />

      {/* =========================================================
          RIGHT LARGE CIRCLE
      ========================================================== */}

      <div
        className="
          absolute
          -right-[650px]
          -top-[325px]
          xl:-right-[400px]
          xl:-top-[425px]
          h-[800px]
          w-[800px]
          rounded-full
          bg-linear-65 from-black via-[#0097FF] to-black
          shadow-lg
          shadow-[#0097ff]/70
        "
      />

      <div
        className="
            absolute
            -right-[650px]
          -top-[325px]
            xl:-right-[400px]
            xl:-top-[425px]
            h-[796px]
            w-[796px]
            rounded-full
            bg-black
        "
      />

      {/* =========================================================
          LEFT PURPLE AMBIENT LIGHT
      ========================================================== */}

      <div
        className="
          absolute
          -left-[250px]
          top-[100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0097FF]/[0.1]
          blur-[120px]
        "
      />

      {/* =========================================================
          RIGHT PURPLE AMBIENT LIGHT
      ========================================================== */}

      <div
        className="
          absolute
          -right-[250px]
          top-[100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0097FF]/[0.2]
          blur-[120px]
        "
      />

      {/* =========================================================
          CENTER / LOWER AMBIENT LIGHT
      ========================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[55%]
          h-[150px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#0097FF]/[0.2]
          blur-[120px]
        "
      />

      {/* =========================================================
          ORBIT RINGS
      ========================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[410px]
          h-[260px]
          w-[680px]
          -translate-x-1/2
          rounded-[50%]
          border
          border-[#0097FF]/[0.1]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-[435px]
          h-[210px]
          w-[610px]
          -translate-x-1/2
          rounded-[50%]
          border
          border-[#0097FF]/[0.1]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-[460px]
          h-[165px]
          w-[540px]
          -translate-x-1/2
          rounded-[50%]
          border
          border-[#0097FF]/[0.1]
        "
      />

      {/* =========================================================
          SMALL ORBIT GLOW
      ========================================================== */}

      <div
        className="
          absolute
          left-[34%]
          top-[510px]
          h-1
          w-1
          rounded-full
          bg-[#0097FF]
          shadow-[0_0_8px_3px_rgba(0,151,255,0.7)]
        "
      />

      <div
        className="
          absolute
          left-[45%]
          top-[463px]
          h-1
          w-1
          rounded-full
          bg-[#0097FF]
          shadow-[0_0_8px_3px_rgba(0,151,255,0.7)]
        "
      />

      <div
        className="
          absolute
          left-[56%]
          top-[600px]
          h-1
          w-1
          rounded-full
          bg-[#0097FF]
          shadow-[0_0_8px_3px_rgba(0,151,255,0.7)]
        "
      />

      <div
        className="
          absolute
          left-[63%]
          top-[420px]
          h-1
          w-1
          rounded-full
          bg-[#0097FF]
          shadow-[0_0_8px_3px_rgba(0,151,255,0.7)]
        "
      />

      {/* =========================================================
          LOWER SECTION GRADIENT
      ========================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[180px]
          bg-[linear-gradient(
            to_bottom,
            transparent,
            rgba(35,5,60,0.16)
          )]
        "
      />

      {/* =========================================================
          VERY SUBTLE VIGNETTE
      ========================================================== */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_35%,
            rgba(0,0,0,0.18)_100%
          )]
        "
      />
    </div>
  );
}
