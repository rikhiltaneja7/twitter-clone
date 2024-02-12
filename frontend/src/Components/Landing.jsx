import { Link } from 'react-router-dom'
import twitterLogo from '../assets/twitter-logo.svg'

export default function Landing() {
  return (
    <div className="landing-parent flex">
      <div className="landing-main flex">

      <div className="landing-left flex">
        <img src={twitterLogo} alt="" id="twitterLogo"/>
      </div>

      <div className="landing-right flex">
        <div className="r-top flex">
          <div className="top-heading">
            Happening now
          </div>
          <div className="top-heading2">
            Join today.
          </div>
        </div>
        <div className="r-mid flex">
          <Link to="/signup">
            <div className="create-acc btn flex">
              Create Account
            </div>
          </Link>
          <div className="terms">
          By signing up, you agree to the <span id='terms-text'>Terms of Service</span> and <span id='terms-text'>Privacy Policy</span>, including <span id='terms-text'>Cookie Use.</span>
          </div>
        </div>
        <div className="r-bottom flex">
          <div className="existing-acc">
            Already have an account?
          </div>
          <Link to="/login">
            <div className="sign-in btn flex">
              Sign in
            </div>
          </Link>
        </div>
      </div>
      </div>

      <footer>
        <ul className='about flex'>
          <li>About</li>
          <li>Download the App</li>
          <li>Help Centre</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Accessibility</li>
          <li>Ads info</li>
          <li>Blog</li>
          <li>About</li>
          <li>Status</li>
          <li>Careers</li>
          <li>Brand Resources</li>
          <li>Advertising</li>
          <li>Marketing</li>
          <li>Twitter for Business</li>
          <li>Developers</li>
          <li>Directory</li>
          <li id="by">by Rikhil & Aayush</li>
        </ul>
      </footer>
      
    </div>
  )
}
