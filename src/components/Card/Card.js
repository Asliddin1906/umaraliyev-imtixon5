import styled from "styled-components"

export const Cards = ({obj}) =>{
  return(
    <Card>
      <img
      src={`https://book-service-layer.herokuapp.com/author/${obj.image}`} 
      alt="rasm" 
      width={164}
      height={246}/>
      
      <Name>{obj.first_name + ' ' + obj.last_name}</Name>
      <div>{obj.date_of_birth + ' - '  + obj.date_of_death}</div>
      
    </Card>

  )
}

const Card = styled.li `
width:23%;
padding:10px;
margin:20px;
border-radius:10px;
overflow:hidden;
`



const Name = styled.h2`
color:#fff;
font-size:26px;
` 
