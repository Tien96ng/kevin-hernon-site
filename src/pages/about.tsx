import type { NextPage } from 'next';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'

const About: NextPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col>1</Col>
                <Col>
                    <h1 className={`${styles.center}`}> About Me</h1>
                    <h5 className={`${styles.center} ${styles.subHead}`}>
                        As a passionate and motivated individual, I am constantly striving to improve my knowledge, expand my skillset, and find new opportunities to grow.
                        I am very passionate about video games and want to pursue a career in video games as a producer.
                        Each of my projects - both solo and collaborative - have provided this growth and allowed me to establish myself within video game industry.
                    </h5>
                </Col>
            </Row>
        </Container>
    )
}

export default About;