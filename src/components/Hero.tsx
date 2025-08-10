function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">AI assistant for text selection</h2>
        <p className="hero-subtitle">
          Select text → Press hotkey → AI processes with your prompt
        </p>
        <div className="hero-media">
          <img 
            src="/hero-demo.png" 
            alt="Probee demonstration showing text selection and AI processing" 
            className="hero-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero