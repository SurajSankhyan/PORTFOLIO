import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg1,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg2,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg3,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg4,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg5,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
                <h2>Projects</h2>
                <p>Explore all showcased projects in this section. For an extensive collection, visit my GitHub Page for more projects and detailed insights.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I am currently in the process of enhancing this section, and I have additional content that will be included soon. Please stay tuned for upcoming updates COMING SOON.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I am currently in the process of enhancing this section, and I have additional content that will be included soon. Please stay tuned for upcoming updates COMING SOON.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}