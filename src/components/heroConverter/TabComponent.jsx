import React, { useState } from "react";
// import "./TabStyles.css"; // Make sure to import your CSS styles
import BuyHeroConverter from '../../components/heroConverter/HeroBuyConverter'
import SellHeroConverter from "../../components/heroConverter/HeroSellConverter"
import './TabStyles.css'

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className="tab-container">
      <div className="tab-buttons" style={{display:'flex', justifyContent: 'center'}}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={tab.label === activeTab ? "active" : ""}
            onClick={() => handleTabClick(tab.label)}
            style={{width:'40%', }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

const App = () => {
  const tabs = [
    { label: "Buy", content: <BuyHeroConverter/> },
    { label: "Sell", content: <SellHeroConverter/> },
  
  ];

  return (
    <div className="app" >
      <Tab tabs={tabs} />
    </div>
  );
};

export default App;
