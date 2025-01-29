const Footer = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center p-10 space-y-1">
        <h2 className="font-bold text-2xl">Gadget Heaven</h2>
        <p className="text-gray-600 font-semibold">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr className="text-gray-400 w-5/6 mx-auto" />
        <footer className="footer flex flex-col md:flex-row justify-center gap12 md:gap-48 sm:footer-horizontal text-gray-600 p-10">
      <nav>
        <h6 className="font-bold text-lg text-black">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="font-bold text-lg text-black">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="font-bold text-lg text-black">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
      
    </div>
    
  );
};

export default Footer;
