function Features() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1 - Custom Prompts */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-20 lg:mb-32">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4 tracking-tight">
              Create Custom AI Prompts
            </h3>
            <p className="text-base sm:text-lg text-[rgba(0,0,0,0.60)] leading-relaxed font-light">
              Design personalized AI assistants tailored to your needs. Whether
              you want to challenge ideas, simplify complex text, or translate
              languages, craft prompts that work exactly how you want.
            </p>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <img
              src="/probee_prompt.png"
              alt="Custom prompt creation interface"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Feature 2 - Hotkeys */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 mb-20 lg:mb-32">
          <div className="flex-1 text-center lg:text-right">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4 tracking-tight">
              Customize Hotkeys
            </h3>
            <p className="text-base sm:text-lg text-[rgba(0,0,0,0.60)] leading-relaxed font-light">
              Access your AI assistants instantly with customizable keyboard
              shortcuts. Highlight text and hit your hotkey to get immediate
              AI-powered responses.
            </p>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <img
              src="/probee_hotkeys.png"
              alt="Hotkey configuration interface"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Feature 3 - Own API Key */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4 tracking-tight">
              Bring Your Own API Key
            </h3>
            <p className="text-base sm:text-lg text-[rgba(0,0,0,0.60)] leading-relaxed font-light">
              Use Probee completely free by connecting your own Anthropic or
              OpenAI API key. Keep full control over your usage and costs while
              enjoying unlimited access to powerful AI models.
            </p>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <img
              src="/probee_settings.png"
              alt="API key settings interface"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
