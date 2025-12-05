import { useState } from "react";
import "./App.css";
import window2 from "./assets/window2.png"
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <InteractiveModel />
        <AICapabilities />
        <FeaturedExperiences />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------- NAVBAR -------------------- */

function Navbar() {
  return (
    <header className="navbar">
      <div className=" navbar-inner">
        <div className="logo">
          <img  className="logo-badge" src="https://d3d.ai/logo.png"/>
          <span className="logo-text">DeepInspect
          <span style={{color:"#0a91b1"}}>3D</span>
          </span>
        </div>
        <div className="nav-actions">
          <p>Features</p>
          <p>Pipeline</p>
          <p>Converters </p>
          <p>FAQ's </p>
          <p>Pricing </p>
          <button className="btn ghost">Login</button>
        </div>
      </div>
    </header>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="container hero-grid">
        <div className="hero-left">
          <p className="badge">AI-powered 3D inspection</p>
          <h1 style={{fontSize:"60px"}}>
            Analyse, Inspect &amp; Share{" "}
            <span className="accent">3D Models</span>
          </h1>
          <p className="hero-subtitle">
            Upload 3D models and instantly view, share and analyse them with
            our AI-powered platform. Supports VR and AR for immersive inspection
            workflows.
          </p>
          <div className="hero-actions">
            <button className="btn primary">Start Free Trial</button>
            <button className="btn outline">Watch Demo</button>
          </div>
          <p className="hero-note">No credit card required • 14-day trial</p>
        </div>

        <div className="hero-right">
          <div className="window" style={{aspectRatio:"9/7"}}>
            <div className="window-header">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <span className="window-title">
                3D Model Inspector – Sample Model
              </span>
            </div>
            <div className="window-body">
              <div className="window-sidebar">
                <p className="sidebar-title">Project Info</p>
                <ul className="sidebar-list">
                  <li>
                    <span>Model:</span>
                    <span>bridge-02.glb</span>
                  </li>
                  <li>
                    <span>Vertices:</span>
                    <span>1,245,920</span>
                  </li>
                  <li>
                    <span>Faces:</span>
                    <span>2,491,840</span>
                  </li>
                  <li>
                    <span>Defects:</span>
                    <span className="pill pill-danger">5</span>
                  </li>
                </ul>
                <p className="sidebar-title mt">AI Insights</p>
                <ul className="sidebar-bullets">
                  <li>Crack cluster on segment B2</li>
                  <li>Corrosion detected on joints</li>
                  <li>Surface deviation: 0.7mm</li>
                </ul>
              </div>
              <div className="window-viewport">
                <div className="grid-bg">
                  <div className="grid-3d-box" />
                  <div className="grid-marker marker-1" />
                  <div className="grid-marker marker-2" />
                  <div className="grid-marker marker-3" />
                </div>
                <p className="viewport-caption">
                  Hover over highlighted regions to view defect details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- STATS -------------------- */

function Stats() {
  const stats = [
    { label: "Models Scanned", value: "5K+" },
    { label: "Uptime", value: "99.5%" },
    { label: "Sessions", value: "50K+" },
    { label: "Total Data", value: "39.9 GB" },
  ];

  return (
    <section className="section stats">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- FEATURES -------------------- */

function Features() {
  const features = [
    {
      title: "Multi-Format Support",
      desc: "Import and inspect OBJ, FBX, GLB, STEP and many more formats in seconds.",
      icon:<ion-icon name="cube"></ion-icon>
    },
    {
      title: "VR Support",
      desc: "Step into your 3D models in immersive virtual reality with one click.",
    icon:  <ion-icon name="bag-remove"></ion-icon>
    },
    {
      title: "AI-Powered Analysis",
      desc: "Automatically detect surface defects, cracks, voids and anomalies.",
      icon:<ion-icon name="ear"></ion-icon>
    },
    {
      title: "Inspection Workflows",
      desc: "Create review runs for every model, tracking and assessments included.",
      icon:<ion-icon name="share-social"></ion-icon>
    },
    {
      title: "Team Collaboration",
      desc: "Enable teams with inline comments, approval flows and presentations.",
      icon:<ion-icon name="bar-chart"></ion-icon>
    },
    {
      title: "Secure Sharing",
      desc: "Share models securely with comments, annotations and version control.",
      icon:<ion-icon name="people"></ion-icon>
    },
  ];

  return (
    <section className="section" id="features">
      <div className="container">
        <h2 className="section-title center">Powerful Features</h2>
        <p className="section-subtitle center">
          Experience the next generation of 3D model analysis.
        </p>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
             {f.icon}
              <h3 style={{fontSize:"20px"}}>{f.title}</h3>
              <p style={{fontSize:"16px"}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- INTERACTIVE MODEL -------------------- */

function InteractiveModel() {
  return (
    <section className="section interactive">
      <div className="container">
        <h2 className="section-title center">Interactive 3D Model</h2>
        <p className="section-subtitle center">
          Click on the model viewport to explore inspection results.
        </p>

        <div className="window window-large">
          <div className="window-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="window-title">
              https://app.deepinspect3d.ai/projects/bridge-02
            </span>
          </div>
          <div className="window-body single">
            <img style={{width:"100%"}} src={window2}/>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- AI CAPABILITIES -------------------- */

function AICapabilities() {
  const items = [
    "Crack inference and detection",
    "Scalar mapping and quality assessment",
    "Small defect measurement",
    "Corrosion progression analysis",
    "Geometry consistency checking",
    "Surface roughness mapping",
  ];

  return (
    <section className="section ai-capabilities">
      <div className="container ai-grid" style={{alignItems:"center"}}>
        <div className="ai-panel">
          <h2 className="section-title">AI Analysis Capabilities</h2>
          <ul className="checklist">
            {items.map((item) => (
              <li key={item}>
                <span style={{background:"linear-gradient(135deg, rgba(59, 130, 246, .5) 0%, rgba(37, 99, 235, .5) 100%)", color:"white", border:"none", padding:"15px"}} className="check-icon">✓</span>
                <span style={{fontSize:"16px", color:"white"}}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="window" style={{aspectRatio:"9/7"}}>
          <div className="window-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="window-title">DeepInspect AI – Defect Overview</span>
          </div>
          <div className="window-body">
            <div className="window-sidebar">
              <p className="sidebar-title">Inspection Status</p>
              <ul className="sidebar-list">
                <li>
                  <span>Status:</span>
                  <span className="pill pill-ok">Complete</span>
                </li>
                <li>
                  <span>Confidence:</span>
                  <span>97.2%</span>
                </li>
                <li>
                  <span>Identified Defects:</span>
                  <span>12</span>
                </li>
              </ul>
            </div>
            <div className="window-viewport">
              <div className="grid-bg">
                <div className="grid-3d-box tilted" />
                <div className="grid-marker marker-1" />
                <div className="grid-marker marker-3" />
              </div>
              <p className="viewport-caption">
                AI overlay highlighting critical areas by severity score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FEATURED EXPERIENCES -------------------- */

function FeaturedExperiences() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title center">Featured Experiences</h2>
        <p className="section-subtitle center">
          Share projects with internal teams, vendors and clients in a click.
        </p>
  <Slider {...settings}>
<div className="window window-large">
          <div className="window-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="window-title">
              https://app.deepinspect3d.ai/share/model-245
            </span>
          </div>
          <div className="window-body single">
            <div className="share-placeholder">
              <div className="share-card">
                <h3>Share project model with</h3>
                <ul>
                  <li>engineering-team@company.com</li>
                  <li>qa-review@company.com</li>
                  <li>client@example.com</li>
                </ul>
                <button className="btn primary full">Generate secure link</button>
              </div>
            </div>
          </div>
        </div>
        <div className="window window-large">
          <div className="window-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="window-title">
              https://app.deepinspect3d.ai/share/model-245
            </span>
          </div>
          <div className="window-body single">
            <div className="share-placeholder">
              <div className="share-card">
                <h3>Share project model with</h3>
                <ul>
                  <li>engineering-team@company.com</li>
                  <li>qa-review@company.com</li>
                  <li>client@example.com</li>
                </ul>
                <button className="btn primary full">Generate secure link</button>
              </div>
            </div>
          </div>
        </div>
        <div className="window window-large">
          <div className="window-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="window-title">
              https://app.deepinspect3d.ai/share/model-245
            </span>
          </div>
          <div className="window-body single">
            <div className="share-placeholder">
              <div className="share-card">
                <h3>Share project model with</h3>
                <ul>
                  <li>engineering-team@company.com</li>
                  <li>qa-review@company.com</li>
                  <li>client@example.com</li>
                </ul>
                <button className="btn primary full">Generate secure link</button>
              </div>
            </div>
          </div>
        </div>
  </Slider>
        
      </div>
    </section>
  );
}

/* -------------------- PRICING -------------------- */

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$129 / 11,000 INR",
      tagline: "Up to 100 models",
      features: [
        "Single workspace",
        "Low resolution rendering",
        "No AI analysis",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "$229 / 19,000 INR",
      tagline: "Up to 1K models",
      features: [
        "High resolution models",
        "Unlimited projects",
        "Advanced AI analysis",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      tagline: "Unlimited models",
      features: [
        "Custom integrations",
        "Dedicated support",
        "SSO and advanced security",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <h2 className="section-title center">Simple Pricing</h2>
        <p className="section-subtitle center">
          Choose the perfect plan for your models.
        </p>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlight ? "pricing-highlight" : ""}`}
              style={{background:"rgba(255, 255, 255, 0.03)"}}
            >
              {plan.highlight && <span className="pricing-badge">Popular</span>}
              <h3 style={{fontSize:"24px"}}>{plan.name}</h3>
              <p className="pricing-price" style={{fontSize:"36px"}}>{plan.price}</p>
              <ul className="pricing-list" style={{display:"flex", flexDirection:"column", gap:"10px", marginTop:"10px"}}>
                {plan.features.map((f) => (
                  <li style={{color:"white", fontSize:"16px"}} key={f}><ion-icon style={{color:"#254783", fontSize:"20px"}} name="checkmark"></ion-icon>{f}</li>
                ))}
              </ul>
              <button className="btn full primary">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does VR visualization work?",
      a: "DeepInspect 3D connects to compatible VR headsets and streams an optimized version of your model for immersive review sessions.",
    },
    {
      q: "What devices are supported?",
      a: "Any modern desktop browser, plus selected VR headsets. Mobile and tablet support is available for lightweight viewing.",
    },
    {
      q: "Can I white-label the viewer?",
      a: "Yes, Professional and Enterprise plans can be configured with your logo, colors and custom domain.",
    },
    {
      q: "What is the max model size?",
      a: "The cloud pipeline can comfortably handle multi-million polygon models. Enterprise customers can request custom limits.",
    },
    {
      q: "How is my data protected?",
      a: "All models are encrypted at rest and in transit, with fine-grained sharing controls for teams and external collaborators.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes, we provide a 14-day trial with access to most Professional features.",
    },
  ];

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="section-title center">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                className={`faq-item ${isOpen ? "open" : ""}`}
              style={{background:"transparent"}}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="faq-question"
                  style={{background:"transparent"}}
                >
                  <span>{item.q}</span>
                  <span className="faq-toggle">{isOpen ? "-" : "+"}</span>
                </div>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            );
          })}
        </div>

        <div className="faq-cta">
          <button className="btn outline">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            <span className="logo-text" style={{border:"none", paddingLeft:"0"}}>DeepInspect 3D</span>
          </div>
          <p className="footer-text" style={{fontSize:"16px"}}>
            AI-powered 3D review and analysis for engineering professionals.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4 style={{fontSize:"18px"}}>Product</h4>
            <a style={{fontSize:"16px", }}href="#features">Features</a>
            <a style={{fontSize:"16px", }}href="#pricing">Pricing</a>
            <a style={{fontSize:"16px", }}href="#faq">FAQs</a>
          </div>
          <div>
            <h4 style={{fontSize:"18px"}}>Resources</h4>
            <a style={{fontSize:"16px", }}href="#top">Docs</a>
            <a style={{fontSize:"16px", }}href="#top">Security</a>
          </div>
          <div>
            <h4 style={{fontSize:"18px"}}>Company</h4>
            <a style={{fontSize:"16px", }}href="#top">About</a>
            <a style={{fontSize:"16px", }}href="#top">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" style={{paddingBottom:"50px",paddingTop:"20px", maxWidth:"90%", margin:"auto", marginTop:"20px"}}>
        <span>© {new Date().getFullYear()} DeepInspect 3D.</span>
        <div className="footer-bottom-links">
          <a style={{fontSize:"16px"}} href="#top">Privacy Policy</a>
          <a style={{fontSize:"16px"}} href="#top">Terms of Service</a>
          <a style={{fontSize:"16px"}} href="#top">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
