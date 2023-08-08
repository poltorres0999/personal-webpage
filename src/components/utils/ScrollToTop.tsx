import React from 'react';
import { useScrollTrigger, Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ScrollTopProps {
  window?: () => Window;
}

const ScrollTop: React.FC<ScrollTopProps> = (props) => {
  const { window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 100,
  });

  const handleClick = () => {
    const anchor = document.querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Use 'start' to scroll to the top
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <Fab color="primary" size="small" aria-label="scroll back to top" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollTop;