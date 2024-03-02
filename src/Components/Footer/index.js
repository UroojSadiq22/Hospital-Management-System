import React from 'react'
import { Link } from 'react-router-dom';
import Stylefooter from './footer.module.css'
import logo from '../../Ui/logo.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Footer = () => {
  return (
    <footer>
        <div className={Stylefooter.footer}>
        <div>
        <div className={Stylefooter.logocontainer}>
       <img src={logo} alt='logo' className={Stylefooter.logo}></img>
       </div>
        <label>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</label>
    </div>
    <div className={Stylefooter.footercolumn}>
        <h2>Company</h2>
        <ul>
            <li className={Stylefooter.footerMenuList}>
                <ArrowForwardIosOutlinedIcon style={{ fontSize: 'small' }} />
                <Link to='/about'>About Us</Link></li>
            <li className={Stylefooter.footerMenuList}>
            <ArrowForwardIosOutlinedIcon style={{ fontSize: 'small' }} />
                <Link to='/about'>Services</Link>
            </li>
            <li className={Stylefooter.footerMenuList}>
            <ArrowForwardIosOutlinedIcon style={{ fontSize: 'small' }} />
                <Link to='/about'>Team</Link>
            </li>
            <li className={Stylefooter.footerMenuList}>
            <ArrowForwardIosOutlinedIcon style={{ fontSize: 'small' }} />
                <Link to='/about'>Blogs</Link>
            </li>
            <li className={Stylefooter.footerMenuList}>
            <ArrowForwardIosOutlinedIcon style={{ fontSize: 'small' }} />
                <Link to='/about'>Terms & Conditions</Link>
            </li>
        </ul>
    </div>
    <div className={Stylefooter.footercolumn}>
        <h2>Departments</h2>
        <ul>
            <li>Department 1</li>
            <li>Department 2</li>
            <li>Department 3</li>
           
        </ul>
    </div>
    <div className={Stylefooter.footercolumn}>
        <h2>Contact</h2>
        <div style={{display: 'flex' , gap: '5px' , alignItems: 'center'}}>
        <MailOutlineIcon/>
        <p>hoperisemc@gmail.com</p>
        </div>

        <div style={{display: 'flex' , gap: '5px' , alignItems: 'center'}}>
        <LocalPhoneOutlinedIcon/>
        <p>+123 456 220 000</p>
        </div>

        <div style={{display: 'flex' , gap: '5px' , alignItems: 'center'}}>
        <LocationOnOutlinedIcon/>
        <p>Find Us On Google Map</p>
        </div>
        

    </div>

</div>
    
</footer>
  )
}

export default Footer
