import React from "react";

import logo from "../../images/logo.png";

/**
 * Footer component.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href='https://www.marketwatch.com/investing/cryptocurrency/ethusd' className="text-white text-base text-center mx-2 cursor-pointer">Market</a>
        <a href='https://app.uniswap.org/' className="text-white text-base text-center mx-2 cursor-pointer">Uniswap Exchange</a>
        <a href='https://ethereum.org/en/developers/tutorials/' className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</a>
        <a href='https://metamask.io/' className="text-white text-base text-center mx-2 cursor-pointer">Wallets-Metamask</a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us at FinTech 565</p>
      <p className="text-white text-sm text-center font-medium mt-2">FinTech565@duke.edu</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
    </div>
  </div>
);

export default Footer;
