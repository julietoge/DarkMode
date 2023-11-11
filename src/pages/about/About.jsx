import React from "react";
import AuthLayout from "../../components/authLayout/auth";
import avatar from "../../img/profile-pic-house-removebg.png";

const About = () => {
  return (
    <AuthLayout>
      About Me
      <img src={avatar} alt="ProfilePic" />
      <div>
        Hi, I'm <strong>UHEGBU, Ogechi Juliet</strong>, a{" "}
        <strong>frontEnd Developer/Engineer</strong> with a passion for creating
        immersive and user-friendly web experiences. I have a deep love for
        technology, which made to pursue{" "}
        <strong>BSc in computer science & informatics</strong> at{" "}
        <strong>Federal University otuoke, Bayelse State Nigeria</strong>, which
        has equipped me with a solid foundation in software development
        principles and problem-solving. With a solid foundation in{" "}
        <strong>HTML</strong>, <strong> CSS</strong>, and{" "}
        <strong>JavaScript</strong> gotten from <strong>Stutern</strong> and{" "}
        <strong>Self-taught</strong>, I have honed my skills in crafting
        responsive and intuitive user interfaces. I believe that the frontend is
        the face of any web application, and I strive to deliver seamless user
        experiences that leave a lasting impression.
      </div>
      <br />
      <div>
        I am dedicated to continuous learning and growth, always eager to expand
        my knowledge and stay updated with the latest frontend technologies,
        library, frameworks, and best practices. This mindset allows me to adapt
        quickly to changing project requirements and find innovative solutions
        to challenges that arise during the development process. Throughout my
        career, I have gained practical experience in developing responsive and
        intuitive web applications. I am well-versed in <strong>HTML</strong>,{" "}
        <strong> CSS</strong>, and <strong>JavaScript</strong>, and I have
        expertise in using <strong>ReactJS</strong>, a popular frontend library
        . I thrive in collaborative environments and enjoy working closely with
        designers and backend developers to bring projects to life.
      </div>
      <br />
      <div>
        My goal as a frontend developer is to combine my technical skills with a
        keen eye for design to create visually appealing and user-centric
        interfaces. I believe that a well-crafted user experience is essential
        for engaging and retaining users; In my projects, I pay meticulous
        attention to detail and strive for pixel-perfect precision. I am
        passionate about creating clean, well-structured code that is not only
        efficient but also maintainable and scalable. I embrace industry best
        practices such as modular design, code reusability, and performance
        optimization to deliver high-quality frontend solutions. In addition to
        technical skills, I possess strong problem-solving abilities and a
        user-centric mindset. I understand the importance of empathizing with
        end-users and designing interfaces that are intuitive and easy to
        navigate. By conducting thorough user research and incorporating user
        feedback, I ensure that my designs meet the needs and expectations of
        the target audience.
      </div>
      <br />
      <div>
        In this portfolio, you will find a showcase of my frontend development
        projects. Each project demonstrates my proficiency in creating engaging
        user interfaces, implementing modern design principles, and leveraging
        popular frontend library<strong>(ReactJS)</strong>. Thank you for taking
        the time to learn about me as a Frontend Developer. I am excited to
        share my work with you and discuss how I can contribute to your next web
        development endeavor. Please feel free to explore my portfolio and reach
        out to me through the provided contact information for any further
        information or collaboration opportunities. I look forward to connecting
        with you!"
        <br />
        <div>
          <button>
            <a href="http://">Get In Touch...</a>
          </button>
        </div>
        <div>
          <button>
            <a
              href="https://drive.google.com/drive/mobile/folders/1LvDwWtRQ1Txc1qZYmfjZquioGoqs0aNq"
              target="_blank"
              rel="noopener noreferrer"
            >
              DownLoad Resume
            </a>
          </button>
        </div>
      </div>
      <div className="technologies">
        html css JavaScript ReactJS Visual Studio code Responsive Web Design git
        github
        <h2>External libraries:</h2>
        Material UI Tailwind
        <h2>Soft Skills:</h2>
        <div className="Softskills">
          Effective communication & Time management | Project management |
          Critical Thinking | Research | Leadership | Accountability |
          Punctuality | Conflict Resolution | Creativity | Problem Solving |
          Team work management
        </div>
        <div className="current-work">
          <h2>Currently working on:</h2>
          <div className="current-work-content">
            Improving my skills in, and understanding of{" "}
            <strong>vannnllia JavaScript</strong>
            and <strong>React</strong>. Also, external libraries:{" "}
            <strong>React-BootSrap</strong>, <strong>Material UI</strong>,{" "}
            <strong>Tailwind</strong>,and and having fun with{" "}
            <strong>#100DaysOfCode</strong> building & animating via{" "}
            <strong>CSS</strong> . <br />
            <a
              href="https://www.linkedin.com/in/ogechi-juliet-uhegbu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow my Journery Here
            </a>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default About;
