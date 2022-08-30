import styled from "styled-components"

export const BooksCards = ({obj}) =>{
  return(
    <Card>
      <img src={'https://book-service-layer.herokuapp.com/books/' + obj.image} alt="rasm" />
      <Name>{obj.title}</Name>
      
    </Card>

  )
}

const Card = styled.li `
width:23%;
padding:10px;
margin-top:20px;
border-radius:10px;
overflow:hidden;
`



const Name = styled.h2`
color:#fff;
font-size:26px;
` 
