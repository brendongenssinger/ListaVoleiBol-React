import React,{useState} from "react";
import { Button, Grid, TextField } from "@mui/material";



export function CadastroJogadores() 
{
    const nomeJogador = [''];
    const[jogador1, setJogador1] = useState<string>("");
    const[jogador2, setJogador2] = useState<string>("");
    const[jogador3, setJogador3] = useState<string>("");
    const[jogador4, setJogador4] = useState<string>("");
    const[jogador5, setJogador5] = useState<string>("");
    const[jogador6, setJogador6] = useState<string>("");
    const[jogador7, setJogador7] = useState<string>("");
    

    // function CreateTextField(jogador:any, element:any)
    // {
    //     const numeroJogador = "Numero do Jogador "+jogador.NumJogador
    //     return(
    //         <Grid xs={8}>
    //             <TextField id="standard-basic" 
    //             label={numeroJogador} 
    //             variant="standard"                                
    //             onSelect={((e) => onSetJogador(jogador.NumJogador,e))}                     
    //             />
    //         </Grid>
    //     );
    // }

    function onSetJogador(numJogador:any,events:any)
    {   
        var jogadorExiste = !!nomeJogador[numJogador]
        console.log(jogadorExiste);        

        if(!jogadorExiste)
            nomeJogador.splice(numJogador,0,events.target.value);
        else
        {
            nomeJogador.splice(numJogador,1);
            nomeJogador.splice(numJogador,0,events.target.value);
        }
    }

    function onSalvarDados()
    {
        var dataSalva = localStorage.getItem("DataSalva");
        var data = 1;

        if(dataSalva!=null)
            data = Date.parse(dataSalva.toString()).valueOf();

        if(data == Date.now() || data < Date.now())
            localStorage.clear();

        localStorage.setItem("1",jogador1);
        localStorage.setItem("2",jogador2);
        localStorage.setItem("3",jogador3);
        localStorage.setItem("4",jogador4);
        localStorage.setItem("5",jogador5);
        localStorage.setItem("6",jogador6);
        localStorage.setItem("7",jogador7);
        localStorage.setItem("DataSalva",Date.now().toString());        

    }
    function onLimpar()
    {
        setJogador1("");
        setJogador2("");
        setJogador3("");
        setJogador4("");
        setJogador5("");
        setJogador6("");
        setJogador7("");
    }
    return (
        <React.Fragment>
            <Grid xs={8}>
                <h1>Cadastro de Jogadores</h1>
            </Grid>  
            <Grid xs={8}>
                <Button variant="outlined" onClick={()=> onSalvarDados()}>Salvar Dados</Button>
                <Button variant="outlined" onClick={()=> onLimpar()}>Clear</Button>
            </Grid>  
            <Grid xs={8}>                
                    <Grid>
                        <TextField id="standard-basic" 
                        label={'Jogador 1'} 
                        variant="standard"                                
                        onChange={((e) => setJogador1(e.target.value.toString()))}     
                        value={jogador1}
                        
                        />
                    </Grid>
                    <Grid>
                        <TextField id="standard-basic" 
                        label={'Jogador 2'} 
                        variant="standard"                                
                        onChange={((e) => setJogador2(e.target.value))}     
                        value={jogador2}
                        />
                    </Grid>
                    <Grid >
                        <TextField id="standard-basic" 
                        label={'Jogador 3'} 
                        variant="standard"                                
                        onChange={((e) => setJogador3(e.target.value))}     
                        value={jogador3}
                        />
                    </Grid>
                    <Grid >
                        <TextField id="standard-basic" 
                        label={'Jogador 4'} 
                        variant="standard"                                
                        onChange={((e) => setJogador4(e.target.value))}     
                        value={jogador4}
                        />
                    </Grid>
                    <Grid >
                        <TextField id="standard-basic" 
                        label={'Jogador 5'} 
                        variant="standard"                                
                        onChange={((e) => setJogador5(e.target.value))}     
                        value={jogador5}
                        />
                    </Grid>
                    <Grid >
                        <TextField id="standard-basic" 
                        label={'Jogador 6'} 
                        variant="standard"                                
                        onChange={((e) => setJogador6(e.target.value))}     
                        value={jogador6}
                        />
                    </Grid>
                    <Grid >
                        <TextField id="standard-basic" 
                        label={'Jogador 7'} 
                        variant="standard"                                
                        onChange={((e) => setJogador7(e.target.value))}     
                        value={jogador7}
                        />
                    </Grid>
            </Grid>
        </React.Fragment>
    );
}

 export default CadastroJogadores;