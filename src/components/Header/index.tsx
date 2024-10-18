import dayjs from "dayjs";
import me from "../../assets/me.webp";
import useAnimationOnScroll from "../../hooks/useAnimationOnScroll";
import "./styles.css";

export default function Header() {
  const { ref } = useAnimationOnScroll();
  const now = dayjs();

  const bDay = dayjs("1992-10-27");
  const currAge = now.diff(bDay, "year");

  const startCollege = dayjs("2024-01-01");
  const diffMonths = now.diff(startCollege, "month");
  const currSemester = Math.floor(diffMonths / 6) + 1;

  return (
    <div className="header" ref={ref}>
      <div className="header-content">
        <div className="header-image">
          <img
            className="self-picture"
            src={me}
            alt="Foto de um homem branco com cabelos escuros sorrindo"
            fetchPriority="high"
            width="100%"
            height="100%"
          />
        </div>
        <div className="header-texts">
          <h1 className="title">Olá! Meu nome é Israel.</h1>
          <p className="paragraph">
            Tenho {currAge} anos, natural do Rio de Janeiro, um{" "}
            <span className="emphasis">Desenvolvedor de Software</span>{" "}
            apaixonado por tecnologia, computadores e iniciativas que impactam
            positivamente a vida das pessoas. Estou sempre buscando aproveitar
            novas oportunidades de trabalhar com coisas novas, viver novas
            experiências e me aventurar em desafios que possam me tirar da zona
            de conforto.
          </p>
          <p className="paragraph">
            Atualmente trabalho como{" "}
            <span className="emphasis">Desenvolvedor Web</span> na{" "}
            <a
              href="https://compliancestation.com.br/"
              target="_blank"
              className="emphasis"
            >
              Compliance Station
            </a>{" "}
            utilizando tecnologias como React, Typescript, SASS, Node.js,
            Express, Mongodb, Python, entre outras. Curso{" "}
            <span className="emphasis">Engenharia de Software</span> na
            Universidade Uniamérica ({currSemester}/8) e também venho
            aprimorando meus conhecimentos em React na Trilha Ignite da{" "}
            <a
              href="https://rocketseat.com.br/"
              target="_blank"
              className="emphasis"
            >
              Rocketseat
            </a>
            .
          </p>
          <p className="paragraph">
            Além disso, também estou familiarizado com metodologias ágeis de
            desenvolvimento de software, como Scrum e Kanban, utilizando
            ferramentas como Trello, Github Projects e entendo a importância de
            trabalhar de forma eficiente e eficaz para alcançar os objetivos de
            um projeto.
          </p>
          <p className="paragraph">
            Ah! E uma curiosidade sobre mim: Também sou músico! Toco guitarra,
            contra-baixo, violão e faço um barulho - literalmente - na bateria!
            A música tem um papel muito importante na minha vida! Vou deixar
            aqui o meu{" "}
            <a
              className="emphasis"
              target="_blank"
              href="https://www.youtube.com/channel/UCm-QQd9NknX0tu32-atWYVQ"
              rel="noreferrer"
            >
              canal no Youtube
            </a>{" "}
            pra você matar um pouco a curiosidade! 😄😄
          </p>
        </div>
      </div>
    </div>
  );
}
