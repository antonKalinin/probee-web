function Hero() {
  return (
    <section className="w-full flex items-start justify-center pt-8 sm:pt-6 lg:pt-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-4 sm:mb-6 leading-tight tracking-tight">
            Highlight. Hotkey. Answer.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[rgba(0,0,0,0.60)] mb-12 lg:mb-16 leading-relaxed font-extralight max-w-2xl mx-auto">
            Turn any on-screen text into an AI prompt with one keystroke
          </p>
          <div className="w-full max-w-7xl mx-auto mt-8 sm:mt-12">
            <div className="relative w-full aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-xl shadow-2xl shadow-black/10 overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/probee_intro_poster.png"
                className="w-full h-full object-cover transition-opacity duration-500"
              >
                <source src="/probee_intro.webm" type="video/webm" />
                <source src="/probee_intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
