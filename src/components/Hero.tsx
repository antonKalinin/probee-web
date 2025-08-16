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
  );
}

export default Hero;
