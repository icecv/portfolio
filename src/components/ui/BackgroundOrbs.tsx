'use client'

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {/* Orb 1 — 左上，靛蓝 */}
      <div
        className="orb-1 absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: '-15%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.55) 0%, transparent 70%)',
          filter: 'blur(72px)',
        }}
      />

      {/* Orb 2 — 右上，紫罗兰 */}
      <div
        className="orb-2 absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: '0%',
          right: '-8%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.50) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Orb 3 — 中左，蓝 */}
      <div
        className="orb-3 absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: '40%',
          left: '5%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.40) 0%, transparent 70%)',
          filter: 'blur(64px)',
        }}
      />

      {/* Orb 4 — 右下，紫 */}
      <div
        className="orb-4 absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          bottom: '-5%',
          right: '0%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.45) 0%, transparent 70%)',
          filter: 'blur(88px)',
        }}
      />

      {/* Orb 5 — 正下，青蓝（补底部） */}
      <div
        className="orb-5 absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: '10%',
          left: '35%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.30) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}
