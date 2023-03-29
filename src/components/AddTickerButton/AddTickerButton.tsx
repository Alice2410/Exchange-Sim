import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import styles from './AddTickerButton.module.css';
import classNames from 'classnames';
import { useTicker } from '../../hooks/useTicker';


const AddTickerButton = () => {
  const { toggle, isTickerOpened } = useTicker();

  return(
    <IconButton color="primary" size="large" onClick={toggle} className={classNames({[styles.cross]: isTickerOpened})}>
      <AddIcon/>
    </IconButton>    
  )
};

export default AddTickerButton;