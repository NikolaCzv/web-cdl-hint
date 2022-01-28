import React from "react";
import { Container, Header, TextContent } from "./style";

export const Content = () => {
    return (
        <Container>
            <Header>ABOUT US</Header>
            <TextContent>
                We are Chicago, IL based company with a goal to help the trucking industry rise. 
                With years of experience in trucking, marketing, and tech, and passion in all 
                three fields, we came to a solution - to help drivers find the right path in their 
                professional careers. Our way is simple - find the right driver for the right company.{' '} 
                We listen to your needs and based on that, we find you the right fit. Prior to introducing 
                drivers to the company, we make sure that all drivers have a clean driving record.
            </TextContent>
        </Container>
    );
};
