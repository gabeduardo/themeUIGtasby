import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
/** @jsx jsx */
import{jsx} from 'theme-ui'
/**
 * Primary UI component for user interaction
 */



export const Button =({children})=>(


  <button sx={{
    backgroundColor:'background',
    color: 'primary'
  }}>
    {children}
  </button>
)


