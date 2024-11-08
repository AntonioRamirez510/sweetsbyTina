import '../styles/OurStory.css';
import tina from '/tina.PNG';
import { Container, Row, Col } from 'react-bootstrap';

const OurStory = () => {
  return (
    <Container className="story text-center py-">
      <Row className="story-switch align-items-center">
        <Col xs={12} md={6} className="order-md-1 mb-4">
          <img className="tina img-fluid" src={tina} alt="Tina" />
        </Col>

        <Col xs={16} sm={14} md={12} lg={6} className="order-md-2">
          <h2>Our Story</h2>
          <p>Cristina Pham, the talent behind Sweets by Tina, grew up in the Bay Area, where baking became her favorite way to connect with friends and family. Her recipes were such a hit that, with a little encouragement, she decided to share them with others, and Sweets by Tina was born.</p>
          <p>During the day, Cristina works with children, and in her free time, she’s in the kitchen perfecting her desserts. When she’s not baking, she loves exploring new foods, traveling, and spending time with her family, friends, and her dog, Pierre. A lifelong Hello Kitty fan, Cristina brings a personal, playful touch to each of her creations.</p>
          <p>At Sweets by Tina, Cristina’s goal is simple: to make desserts that bring joy to every bite.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default OurStory;
