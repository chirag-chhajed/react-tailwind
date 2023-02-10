
const LandingPage = () => {
  return (
    <section className="max-h-[80vh] text-yellow-50 gap-8 my-4 flex flex-col md:gap-10">
        <h2 className="uppercase font-bold text-2xl sm:text-3xl">our vision</h2>
        <h1 className="uppercase font-bold text-5xl sm:text-6xl md:text-8xl font-raleway">api generation</h1>
        <p className="opacity-70 max-w-[400px] sm:text-xl">Our API generator product revolutionizes API creation. It features an intuitive GUI, streamlining the process and enabling faster development. With AI-powered features, generating RESTful APIs has never been easier. Get ready to enhance your backend with our innovative product.</p>
        <div className="flex flex-row gap-6">
          <button className="bg-yellow-50 p-2 w-40 text-xl text-slate-900 rounded-lg font-bold hover:bg-slate-900 hover:text-yellow-50 cursor-pointer transition">Get Started</button>
          <button className="bg-yellow-50 p-2 w-40 text-xl text-slate-900 rounded-lg font-bold hover:bg-slate-900 hover:text-yellow-50 cursor-pointer transition">Still not convinced?</button>
        </div>
    </section>
  )
}

export default LandingPage
