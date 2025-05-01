import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaHome, FaStar, FaUserShield } from 'react-icons/fa'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero">
        <motion.div 
          className="navbar"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="logo">NextStay</h2>
          <nav>
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <div className="auth-buttons">
            <button className="btn btn-secondary">Sign In</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Find Your Perfect PG Accommodation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Discover, review, and manage Paying Guest accommodations effortlessly
            with NextStay's intelligent platform.
          </motion.p>

          <motion.div 
            className="search-box"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="search-input">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search for PG locations..." />
            </div>
            <button className="btn btn-search">Find PGs</button>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">PG Listings</span>
            </div>
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Happy Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Cities</span>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="features">
        <motion.h2 
          className="section-title"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose NextStay?
        </motion.h2>

        <div className="features-grid">
          <motion.div 
            className="feature-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="feature-icon">
              <FaSearch />
            </div>
            <h3>Smart Discovery</h3>
            <p>Find PG accommodations that match your preferences with our intelligent search filters.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="feature-icon">
              <FaStar />
            </div>
            <h3>Verified Reviews</h3>
            <p>Make confident decisions with authentic reviews from real residents.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="feature-icon">
              <FaHome />
            </div>
            <h3>Real-time Availability</h3>
            <p>See up-to-date availability status and book your stay instantly.</p>
          </motion.div>

         
        </div>
      </section>

      {/* Call To Action */}
      <motion.section 
        className="cta-section"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-content">
          <h2>Ready to find your next home?</h2>
          <p>Join thousands of students and professionals who found their perfect PG accommodation with NextStay.</p>
          <button className="btn btn-primary btn-large">Get Started</button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <h2 className="logo">NextStay</h2>
            <p>The intelligent platform for PG accommodations.</p>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Our Team</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <a href="#">Find PG</a>
            <a href="#">List Your PG</a>
            <a href="#">For Property Owners</a>
            <a href="#">Premium Services</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">FAQs</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NextStay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
