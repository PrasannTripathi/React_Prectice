import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-blue-800 h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   place-items-center justify-items-center gap-20 h-full ">
          <Link to="/"><img className="h-24 " src="/src/assets/Logo.png" /></Link>

          <div> 
            <p className="text-white px-10 md:px-20">
              Ai powered instant data entry <br />© 2024 Your SmartDocs365. All
              rights reserved.
            </p>
            <div className="flex gap-3">
              <Link
                className="hover:text-orange-500 hover:underline text-white px-5 md:px-10 lg:px-10 xl:px-16 "
                to="/privacypolicy"
              >
                Privacy Policy
              </Link>
              <Link
                className="hover:text-orange-500 hover:underline text-white px-10 md:px-20 lg:px-10 xl:px-16 "
                to="/termscondition"
              >
                Terms & Condition
              </Link>
              <Link
                className="hover:text-orange-500 hover:underline text-white px-10 md:px-20 lg:px-10 xl:px-16 "
                to="/refundpolicy"
              >
                Refund Policy
              </Link>
            </div>
          </div>
          <table className="">
            <tr>
              <th className="text-white underline">More Info</th>
              <th className="text-white underline">Social</th>
            </tr>
            <tr>
              <td className="hover:text-orange-500 hover:underline text-white">
                <Link to="/aboutus">About</Link>
              </td>
              <td className="hover:text-orange-500 hover:underline text-white">
                <a href="">Youtube</a>
              </td>
            </tr>
            <tr>
              <td className="hover:text-orange-500 hover:underline text-white">
                <Link to="/contact">Contact</Link>
              </td>
              <td className="hover:text-orange-500 hover:underline text-white">
                <a href="">Linkedin</a>
              </td>
            </tr>
            <tr>
              <td className="hover:text-orange-500 hover:underline text-white">
                <Link to="/plans">Plans</Link>
              </td>
              <td className="hover:text-orange-500 hover:underline text-white">
                <a href="">Blog</a>
              </td>
            </tr>
            <tr>
              <td className="hover:text-orange-500 hover:underline text-white">
                <Link to="/updates">Updates</Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
  )
}

export default Footer