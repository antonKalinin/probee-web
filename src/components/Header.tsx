function Header() {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/probee_icon.png" alt="Probee" className="w-5 h-5" />
          <h1 className="text-base sm:text-lg font-semibold text-black">
            Probee
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-2 text-[14px]">
          <a
            href="mailto:support@probee.ai"
            className="text-[rgba(0,0,0,0.60)] hover:text-[rgba(0,0,0,1)] transition-all ease-in-out px-4 py-2"
          >
            Feedback
          </a>
          <a
            href="/Probee.dmg"
            className="hover:bg-[rgba(0,0,0,0.1)] bg-[rgba(0,0,0,0.05)] text-[rgba(0,0,0,0.60)] hover:text-[rgba(0,0,0,1)] px-4 py-2 rounded-full transition-all ease-in-out duration-500"
            download
          >
            Download
          </a>
        </div>
        <div className="md:hidden">
          <a
            href="/Probee.dmg"
            className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.60)] hover:text-[rgba(0,0,0,1)] px-3 py-1.5 rounded-full transition-all text-sm"
            download
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
