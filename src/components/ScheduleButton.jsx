import React from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const ScheduleButton = ({ date, time }) => {
  const handleAgendar = async () => {
    if (!date || !time) {
      alert('Por favor, selecione uma data e um horário!');
      return;
    }

    try {
      // const response = await axios.post('/api/agendar', { date, time });
      // alert('Agendamento realizado com sucesso!');
      console.log(date, time);
    } catch (error) {
      console.error('Erro ao agendar:', error);
      alert('Erro ao realizar o agendamento. Tente novamente!');
    }
  };

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={handleAgendar}
      disabled={!date || !time} // Desabilita o botão se data ou hora não forem selecionadas
      sx={{ mt: 3 }}
    >
      Agendar
    </Button>
  );
};

export default ScheduleButton;
