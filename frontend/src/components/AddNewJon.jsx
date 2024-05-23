import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios"
import { useEffect } from 'react';


export default function AddNewJob(){ 

    const [state, setState] = useState({
        name: "",
        address: "",
        description: "",
        skills: [],
        theme: [], 
        chosenSkills: [],
        chosenTheme: []
    });


    function CheckboxLabels() {
        return (
          <FormGroup>
            {
                skills.map((skill)=>{
                    return(
                        <FormControlLabel control={<Checkbox />} label={skill.name} onSelect={()=>setState({...state,chosenSkills:[stat.chosenSkills+skill.name]})}/>
                    )
                })
            }
          </FormGroup>
        );
    }
    function RadioTheme() {
        return(
                <div>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">סוג עבודה</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                defaultChecked={theme[0]}
                            >
                            {
                                theme.map((theme1)=>{
                                    return(
                                        <FormControlLabel value={theme1.name} control={<Radio />} label={theme1.name} />
                                    )
                                })
                            }
                            </RadioGroup>
                     </FormControl>
                </div>
        );
    }

    function CreateNewJob(){
        console.log(name, address, description)
    }

    useEffect(()=>{
        setState({...state,skills:await GetSkillFromBack()});
        setTheme({...state, theme: await GetThemeFromBack()});
    });


    async function GetSkillFromBack(){
        return (await axios.get("http://localhost:5000/get-all-skills")).data;
    }
    }


    async function GetThemeFromBack(){
        return (await axios.get("http://localhost:5000/get-all-themes")).data;
        
    }



    return(
        <div>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="name" label="שם החברה" variant="standard" onChange={e => {setState({...state,name: e.target.value})}} />
                <TextField id="description" label="תיאור המשרה" variant="standard" onChange={e => {setState({...state,description: e.target.value})}} />
                <TextField id="address" label="כתובת" variant="standard" onChange={e => {setState({...state,address: e.target.value})}} />
                <CheckboxLabels/>
                <RadioTheme/>
            </Box>
            <Button onClick={()=>{CreateNewJob}}>
                Add
            </Button>
        </div>
    );
}