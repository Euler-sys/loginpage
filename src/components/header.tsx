

export default function FDICBanner() {
  return (
<div className="w-full z-[199] bg-white mt-8 p-2">
      <div className="flex gap-2 items-start p-1 -mt-6">

        {/* FDIC Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 712 300"
          className="w-[50px] h-auto fill-[#0B3A82]"
        >
         

          <polygon points="71.02 67.24 71.02 112.79 148.74 112.79 148.74 172.8 71.02 172.8 71.02 279.8 0.17 279.8 0.17 7.23 156.7 7.23 156.7 67.24 71.02 67.24" />

          <path d="M179.88,13.85V286.41h70.51l.34-60V73.85h16.63c45.55,0,77.72,27.48,77.72,76.28,0,53.14-36.15,76.28-78.44,76.28H250.73l-.34,60h30c75.56,0,138.46-59.64,138.46-136.28S356.29,13.85,280.37,13.85Z" transform="translate(-9.88 -6.62)" />

          <rect x="419.03" y="7.23" width="70.85" height="272.57" />

          <path d="M718,105.31c-14.46-19.53-38-30-62.17-30-43.38,0-72.66,33.26-72.66,75.55,0,43,29.64,74.11,73.74,74.11C680,225,703.16,213.75,718,196v85c-23.49,7.23-40.48,12.65-62.54,12.65-38,0-74.1-14.46-102.3-40.12-30-27.11-43.74-62.54-43.74-103a142.64,142.64,0,0,1,40.13-99.77C576.28,23.25,615,6.62,653.28,6.62c22.77,0,43.74,5.06,64.7,13.73Z" transform="translate(-9.88 -6.62)" />
        </svg>

        {/* Text */}
        <p className="mt-2 text-[11px] leading-4 text-gray-800 italic font-medium w-[105%] md:w-[120%]">
  FDIC-Insured - Backed by the full faith and credit of the U.S.
  Government
</p>
      </div>
    </div>
  );
}