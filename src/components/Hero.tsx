function Hero() {
  return (
    <section className="w-full flex items-start justify-center pt-8 sm:pt-12 lg:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-4 sm:mb-6 leading-tight tracking-tight">
            AI assistant for text selection
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[rgba(0,0,0,0.60)] mb-8 sm:mb-12 leading-relaxed font-extralight max-w-2xl mx-auto">
            Select text → Press hotkey → AI processes with your prompt
          </p>
          <div className="w-full max-w-6xl mx-auto mt-8 sm:mt-12">
            <video 
              src="/probee_learn_finnish_demo.mp4" 
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl shadow-black/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero