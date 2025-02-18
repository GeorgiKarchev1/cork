'use client'

export default function BackgroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Main Background */}
      <div className="fixed inset-0 bg-[#0A0A32] -z-10">
        {/* Оптимизирани градиентни орбове */}
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7D4CC3]/20 rounded-full blur-[120px] -translate-x-1/2 hardware-accelerated transition-optimized" 
          style={{ willChange: 'transform' }}
        />
        <div 
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F4A836]/10 rounded-full blur-[100px] translate-x-1/4 hardware-accelerated transition-optimized" 
          style={{ willChange: 'transform' }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#7D4CC3]/15 rounded-full blur-[100px] hardware-accelerated transition-optimized" 
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="relative z-0">
        {children}
      </div>
    </div>
  )
} 