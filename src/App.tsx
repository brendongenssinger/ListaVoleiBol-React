import { Container, CssBaseline, Grid, MenuItem, MenuList, Paper } from '@mui/material';
import React from 'react';
import {
   BrowserRouter, 
    Link, 
    Route,
  Routes  } from 'react-router-dom';
import CadastroJogadores from './Pages/CadastroJogadores';
import ListarPartidas from './Pages/ListarPartidas';


function App() {
  return (
    <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={4}>
              <Paper>
                  <MenuList>
                    <MenuItem>
                      <Link to="CadastroJogadores">Cadastrar Jogadores</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="ListarPartidas">Listar Jogos</Link>
                    </MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Paper>
          </Grid>
          <Grid item xs={8}>
          
            <Routes>
              <Route  path="/CadastroJogadores" element={<CadastroJogadores/>}/>          
              <Route path="/ListarPartidas" element={<ListarPartidas/>}/>
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
  );
}

export default App;
