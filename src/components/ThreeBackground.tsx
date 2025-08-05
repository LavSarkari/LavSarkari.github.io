'use client'

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 animate-pulse"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Additional aesthetic orbs */}
      <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-gradient-to-r from-teal-500/5 to-green-500/5 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-violet-500/8 to-purple-500/8 rounded-full blur-3xl animate-bounce-slow" style={{animationDelay: '3s'}}></div>
      
      {/* Static particle pattern */}
      <div className="absolute inset-0">
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-1/4 left-1/4"></div>
        <div className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse top-1/3 right-1/4" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse top-3/4 left-1/3" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-1/2 right-1/3" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-pulse top-2/3 left-2/3" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse top-1/6 right-1/6" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse bottom-1/4 left-1/6" style={{animationDelay: '3s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse bottom-1/3 right-2/3" style={{animationDelay: '0.8s'}}></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 animate-grid-move" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>
    </div>
  )
}