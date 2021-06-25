import React from "react";
import jumboData from '../fixtures/jumbo.json';
import Jumbotron from "../components/jumbotron";

export function JumbotronContainer() {
        return (
                <Jumbotron.Container>
                    {jumboData.map((item) => (
                        <Jumbotron key={item.id} direction={item.direction}>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                            <Jumbotron.Image>{item.image}</Jumbotron.Image>
                        </Jumbotron>
                     )
                    )}
                      
                       
                </Jumbotron.Container>  
    )
}

