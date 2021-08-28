import React from 'react';
import axios from 'axios';
import Form from './form/index';
import ListUserItem from './ListUser/index';
import styled from 'styled-components'

const Wrapper = styled.div`
        width: 100%;
        max-width: 800px;
        height: 100vh;
        padding: 0px;
        margin: 0 auto;
        background: darkturquoise;
        color: #fff;

`
const Home = () => {

    const [meanings,setMeanings] = React.useState([])
    const [words,setWords] = React.useState('')
    const [currency, setCurrency] = React.useState('en');



    const dictionaryApi = async () =>{
           try{
                const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${currency}/${words}`)
                setMeanings(data.data)
                console.log(data.data)
                // console.log(meanings)
           }catch (error){
                console.log(error)
           }
    }


 
    React.useEffect(()=>{
        dictionaryApi()
    },[words,currency])
    return (
        <Wrapper>
            <Form words={words} setWords={setWords} currency={currency} setCurrency={setCurrency}/>
            <ListUserItem meanings={meanings} />
        </Wrapper>
    )
}

export default Home
