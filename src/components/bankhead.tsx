import logo from '../assets/UMB-2x-Logo-Digital-BlueCyan-RGB.svg'

export default function BankHeader() {
  return (
    <header className="bg-white border-b border-gray-400">
      <div className=" mx-auto h-[70px] flex items-center justify-between px-8 md:px-12">

        {/* Logo */}
       
          <img
            src={logo} // Replace with your logo path
            alt="UMB"
            className="h-7 md:h-6 object-contain"
          />
        

        {/* Contact */}
        <p
          className="text-[#003A70] text-[14px] hover:underline"
        >
          Contact Us
        </p>

      </div>
    </header>
  );
}