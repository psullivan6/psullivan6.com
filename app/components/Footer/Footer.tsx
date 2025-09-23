import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="print:hidden sticky bottom-0 z-0 bg-gray-800 text-white pt-12 pb-2 bg-[url('/trees.jpg')] bg-cover bg-center">
      <div className="container mx-auto text-center text-black">
        <span className="text-xs text-white font-medium flex justify-center items-center">
          Built with <Heart className="px-1" /> in Oregon &middot; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
