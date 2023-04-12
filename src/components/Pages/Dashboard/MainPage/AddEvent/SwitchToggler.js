import React from 'react'
import './SwitchToggler.css'
import cx from 'classnames'

const SwitchToggler = ({rounded = false, isToggled, onToggle}) => {

    const sliderCx = cx('slider', {
        rounded : rounded
    })

  return (
    <label className='switch'>
        <input type='checkbox' checked={isToggled} onChange={onToggle}/>
        <span className={sliderCx}></span>
    </label>
  )
}

export default SwitchToggler