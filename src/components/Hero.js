import React from 'react';
import {Container, Jumbotron, Button} from 'reactstrap';

const Hero = (props) => {
    return (
        <Container>
            <Jumbotron className="app-hero text-white text-center">
                <h1 className="app-hero-title">Anonymous and Untraceable</h1>
                <p className="lead">Anonency is a cryptocurrency which uses ring signatures and one-time addresses for anonymous payments that can't be linked between the sender and the recipient.</p>
                <p className="lead">
                    <Button color="primary" outline size="lg">Learn More</Button>
                </p>
            </Jumbotron>
        </Container>
    );
};

export default Hero;