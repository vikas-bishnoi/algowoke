import React, { useState } from "react";

const Select = ({ label, placeholder, options }) => {
const [isOpen, setIsOpen] = useState(false);
const [selectedValue, setSelectedValue] = useState('');
const [focusedValue, setFocusedValue] = useState('');

  return (
    <div
      className="select"
      tabIndex="0"
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <label className="label">{label}</label>
      <div className="selection" onClick={onClick}>
        {selectedValue === '' ? <div className="placeholder">
          { placeholder }
        </div> : 
        <>
            <div className="value">
                { selectedValue }
            </div>
        </>}
        <span className="arrow">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      {isOpen && options.length !== 0 && options.map((option, index) => {
        let className = "option"
        if (selectedValue == option) className += " selected"
        if (index === focusedValue) className += " focused"
        return (
            <div
              key={ selectedValue }
              data-value={ selectedValue }
              className={ className }
              onMouseOver={ onHoverOption }
              onClick={ onClickOption }
              >
              { selectedValue }
            </div>
          )
      })}
    </div>
  );
};

export default Select;
