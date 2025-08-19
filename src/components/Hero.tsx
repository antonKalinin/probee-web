import { useState } from 'react';

function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
              {!videoLoaded && (
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23e2e8f0' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
                    filter: 'blur(8px)',
                  }}
                >
                  <div className="text-gray-400 text-sm font-medium">Loading video...</div>
                </div>
              )}
              <video
                src="/probee_learn_finnish_demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  videoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
