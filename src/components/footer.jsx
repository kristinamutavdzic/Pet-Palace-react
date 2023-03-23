import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../components/footer.css';

function Footer() {
  return (
      <div className='footer'>
        <div className='socialMediaIcons'>
          <a href='https://www.instagram.com/'>
            <InstagramIcon />
          </a>
          <a href='https://www.facebook.com/'>
            <FacebookIcon />
          </a>
          </div>
          <p> &copy; 2023 Pet Palace </p>
    </div>
  )
}

export default Footer