import React from 'react'
import {Container} from '@material-ui/core'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
overflow-y: scroll;
scrollbar-width: thin;
height: 55vh;
border: 10px solid rgb(105, 105, 105);
border-radius: 10px;
padding: 10px 20px;
overflow-x: hidden;

@media (max-width: 900px) {
   
      overflow: scroll;
      overflow-x: hidden;
      height: 60vh;
   
  }
`

const SingleMean = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
padding: 10px 20px;
margin: 10px 0;
`

const ListUserItem = ({meanings}) => {  
    return (
        <Wrapper >
            <Container maxWidth="sm">
                <div>
                   {/* <audio src={meanings[0].phonetics[0].audio} controls></audio> */}
                   {meanings[0]&&(
                       <audio src={meanings[0].phonetics[0].audio} controls   style={{ backgroundColor: "#fff", borderRadius: 10 }}></audio>
                   )}
                </div>
                <div>
                {meanings.map((meaning)=>(
                    meaning.meanings.map((item)=>(
                        item.definitions.map((def)=>(
                            <SingleMean
                            style={{
                              backgroundColor:  "white",
                              color:  "black",
                            }}
                          >
                                <b>{def.definition}</b>
                                <hr/>
                                <p>{def.example}</p>
                                {def.synonyms && (
                                <span>
                                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                </span>
                                )}
                            </SingleMean>
                          
                        ))
                    ))
                ))}
                </div>
            </Container>
        </Wrapper>
    )
}

export default ListUserItem
