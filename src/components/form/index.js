import React from 'react'
import {TextField} from '@material-ui/core';
import {MenuItem,createMuiTheme,ThemeProvider} from '@material-ui/core';
//data
import categories from '../data/category'

const Form = ({words,setWords,currency,setCurrency}) => {

    // const [word,setLanguge] = React.useState('')
    // const [language,setLanguage] = React.useState('')
    // const [currency, setCurrency] = React.useState('ur');

    const darkTheme = createMuiTheme({
        palette:{
            primary:{
                main: "#fff",
            },
            type: "dark",
        },
    })

    const handleChangeWord =(e)=>{
        setWords(e.target.value)
    }

    const handleChangeLanguage = (language) =>{
        setCurrency(language)
        // setLanguages(e.target.value)
        setWords('')
    }
    return (
        <div>
            <h3>{words? words : "tranlates"}</h3>
            <ThemeProvider theme={darkTheme}>
           <TextField id="standard-basic" label="Standard" onChange={handleChangeWord} value={words}/>

           <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={(e) =>handleChangeLanguage(e.target.value)}
          helperText="Please select your currency"
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        </ThemeProvider>
        </div>
    )
}

export default Form
