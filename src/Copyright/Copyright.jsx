import React from 'react'
import "../Copyright/Copyright.css";
const Copyright = () => {
  return (
    <>
        <footer className="footer">
        <img src="https://www.genesis.com/etc.clientlibs/genesis-p2/global/clientlibs/clientlib-basepage/resources/images/footer-logo.png" alt="" />
      <p>© {new Date().getFullYear()} Hyundai Motor Company.<p>All rights reserved.</p> </p>
    </footer>
    </>
  )
}

export default Copyright