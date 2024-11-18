import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

const TimeOptions = ({ options, selectedTime, selectTime }) => {

  const handleTimeSelect = (time) => {
    selectTime(time);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
      {options?.map((time) => (
        <Button
          key={time}
          variant={selectedTime === time ? 'contained' : 'outlined'}
          onClick={() => handleTimeSelect(time)}
          sx={{
            minWidth: '100px',
          }}
        >
          {time}
        </Button>
      ))}
    </Box>
  );
};

export default TimeOptions;
