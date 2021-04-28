import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    join the adventure newsletter to recieve our best vacation details
                </p>
                <p className='footer-subsription-text'>
                    you can unsubscribe at any time
                </p>

                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='your email' className='footer-input'></input>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>

                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>how it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>

                    </div>

                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>how it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
