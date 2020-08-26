import React from 'react';
import styled from 'styled-components';
import Roll from 'react-reveal/Roll'; 
import Bounce from 'react-reveal/Bounce'; 

export default function Title (Props) {

		return(
			<TitleWrapper className="title" style={{color:Props.color}}>
				<Roll>
					<h2 className="h2Title">{Props.title}</h2> 
					<Bounce righrt duration={3000} >
						<div className="underline"></div>
					</Bounce>
				</Roll>

			</TitleWrapper>

			)
}


const TitleWrapper =styled.div `
	
margin-bottom:15px;




.h2Title{

	font-size:40px;
	text-transform:uppercase;
	padding-top:50px;
	text-align:center;
}

.underline{

	width: 48px;
	border:1px solid;
	margin-left:48%;

}

`