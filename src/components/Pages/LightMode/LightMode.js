import React, { useState } from "react";

const SettingsPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const anchors = document.querySelectorAll("a");
    anchors.forEach((a) => {
      if (a.innerHTML === option) {
        a.style.color = "red";
        a.style.textDecoration = "underline red";
        a.style.textDecorationThickness = "2px";
        a.style.textDecorationOffset = "8px 0 10px";
        a.style.lineHeight = "2em";

      } else {
        a.style.color = "grey";
        a.style.textDecoration = "none";
      }
    });
  };

  const settingsOptions = [
    { id: 1, name: "Account" },
    { id: 2, name: "Notifications" },
    { id: 3, name: "Security" },
  ];

  const renderSettingsOptions = () => {
    return settingsOptions.map((option) => (
      <li key={option.id}>
        <a href="#" onClick={() => handleOptionClick(option.name)}>
          {option.name}
        </a>
      </li>
    ));
  };

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case "Account":
        return <p>Account settings page content</p>;
      case "Notifications":
        return <p>Notifications settings page content</p>;
      case "Security":
        return <p>Security settings page content</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>Navigation bar</nav>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar">
              <ul>{renderSettingsOptions()}</ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="content">{renderSelectedOption()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
