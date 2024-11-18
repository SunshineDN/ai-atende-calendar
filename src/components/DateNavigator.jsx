import React, { useState } from 'react';
import { Box, IconButton, Button, Typography, List, ListItem } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DateNavigator = ({ dates, currentIndex, onDateChange, selectTime }) => {
  const [showDateList, setShowDateList] = useState(false);

  const handleToggleDateList = () => {
    setShowDateList((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={() => onDateChange(
          currentIndex - 1,
          selectTime(null))} disabled={currentIndex <= 0}>
          &lt; Anterior
        </Button>
        <Typography variant="h6" sx={{ mx: 2 }}>
          {dates[currentIndex]}
        </Typography>
        <Button onClick={() => onDateChange(
          currentIndex + 1,
          selectTime(null)
        )} disabled={currentIndex >= dates?.length - 1}>
          Próxima &gt;
        </Button>
        <IconButton onClick={handleToggleDateList} sx={{ ml: 2 }}>
          <CalendarTodayIcon />
        </IconButton>
      </Box>

      {showDateList && (
        <Box sx={{ mt: 2, maxHeight: 200, overflowY: 'auto' }}>
          <List>
            {dates.map((date, index) => (
              <ListItem
                key={date}
                button
                onClick={() => {
                  onDateChange(index);
                  setShowDateList(false);
                }}
              >
                {date}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default DateNavigator;
