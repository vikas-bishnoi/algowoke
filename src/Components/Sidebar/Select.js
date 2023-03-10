import React, { useState } from "react";
import "./Select.css";
const Select = ({ label, placeholder, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [focusedValue, setFocusedValue] = useState(-1);
    const [isFocused, setIsFocused] = useState(false);

    const onClickOption = (e) => {
        const { value } = e.currentTarget.dataset
        setSelectedValue(value);
        setIsOpen(false)
    }

    const onFocus = () => {
        setIsFocused(true);
    }

    const onBlur = () => {
        let focusedValue = -1 
            
        if (selectedValue !== '') {
            focusedValue = options.findIndex(option => option.value === selectedValue)
        }
        setIsOpen(false);
        setFocusedValue(focusedValue);
        setIsFocused(false);
    }

    const onHoverOption = (e) => {
        const index = options.findIndex(option => option.value === selectedValue)
        setFocusedValue(index);
    }

    const onClick = () => {
        setIsOpen(!isOpen);
    }

    const onKeyDown = (e) => {
        switch (e.key) {
        case ' ':
            e.preventDefault()
            if (!isOpen) {
                setIsOpen(true);
            }
            break
        case 'Escape':
        case 'Tab':
            if (isOpen) {
              e.preventDefault()
              setIsOpen(false);
            }
            break
        case 'Enter':
            setIsOpen(!isOpen);
            break
        case 'ArrowDown':
            e.preventDefault()
            if (focusedValue < options.length - 1) {
                setFocusedValue(focusedValue + 1)
                setSelectedValue(options[focusedValue].value)
            }
            break
        case 'ArrowUp':
            e.preventDefault()
            if (focusedValue > 0) {
                setFocusedValue(focusedValue - 1)
                setSelectedValue(options[focusedValue].value)
            }
            break
        default:
            break
        }
    }
    
    const ChevronDown = () => (
        <svg viewBox="0 0 10 7">
        <path d="M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z" transform="translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) " />
        </svg>
    )
    
    const ChevronUp = () => (
        <svg viewBox="0 0 10 8">
        <path d="M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z" transform="translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) " />
        </svg>
    )
    
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
            if (selectedValue === option) className += " selected"
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
