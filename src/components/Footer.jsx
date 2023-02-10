const Footer = () => {
  return (
    <footer class="h-[15vh] px-4 py-6 flex justify-between items-center text-xl text-yellow-50 font-bold md:px-8 md:text-2xl">
      <h3>
        API <br /> Generator
      </h3>
      <div className="flex flex-row gap-4">
        <button className="text-blue-400">
        <i className="ri-twitter-fill"></i>
        </button>
        <button className="text-blue-900">
        <i className="ri-linkedin-box-fill"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
