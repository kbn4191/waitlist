import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";


const FooterSocialIcons = () => {
  return (
    <div className="flex gap-4 items-center mt-6 justify-center w-[108px] h-[28px]">
      {/* Twitter (X) */}
      <a
        href="/"
        rel="noopener noreferrer"
        aria-label="Back to Homepage"
        className="p-2 rounded-full cursor-pointer bg-white text-black hover:bg-gray-100 transition"
      >
        <FaXTwitter className="w-4 h-4" />
      </a>

      {/* Facebook */}
      <a
        href="/"
        rel="noopener noreferrer"
        aria-label="Back to Homepage"
        className="p-2 rounded-full cursor-pointer bg-[#FF9D98]"
      >
        <FaFacebookF className="w-4 h-4" />
      </a>

      {/* Instagram */}
      <a
        href="/"
        rel="noopener noreferrer"
        aria-label="Back to Homepage"
        className="p-2 rounded-full cursor-pointer  bg-white text-black hover:bg-gray-100 transition"
      >
        <FaInstagram className="w-4 h-4" />
      </a>
    </div>
  );
};

export default FooterSocialIcons;
