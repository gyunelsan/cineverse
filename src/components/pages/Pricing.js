import React from "react";
import "../../../src/App.css";

export const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$7.99/month",
      features: [
        "Standard movie library",
        "1 device",
        "SD quality",
        "No offline downloads",
      ],
    },
    {
      name: "Standard",
      price: "$12.99/month",
      features: [
        "Full movie library",
        "2 devices",
        "HD quality",
        "Offline downloads",
      ],
    },
    {
      name: "Premium",
      price: "$17.99/month",
      features: [
        "All CineVerse content",
        "4 devices",
        "4K quality",
        "Unlimited offline downloads",
      ],
    },
  ];
  return (
    <div>
      <section className="tvshowSection ">
        <h2>Pricing</h2>
        <ul className="d-flex">
          <li style={{ color: "black" }}>Home</li>
          <li>|</li>
          <li style={{ color: "black", borderBottom: "2px solid black" }}>
            Pricing
          </li>
        </ul>
      </section>
      <section className="pricingSection">
        <div className="section-title title-style-three text-center mb-70">
          <span>our pricing plans</span>
          <h2>Our Pricing Strategy</h2>
        </div>

        <div className="pricing-section">
          <div className="pricing-cards">
            {plans.map((plan, index) => (
              <div className="cardd" key={index}>
                <h3>{plan.name} Plan</h3>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="subscribe-btn">Subscribe</button>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};
