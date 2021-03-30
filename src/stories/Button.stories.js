import React from 'react';
import {Button} from './Button'
/** @jsx jsx */
import{jsx} from 'theme-ui'
export default {
    title: 'Example/Button',
    component: Button,
  };


export const DefaultButton = ()=>(
  <>
    <Button> Test Story</Button>
  <button sx={{
    backgroundColor:'background',
    color: 'tomato'
  }}>
    asd
  </button>
  </>
  
) 