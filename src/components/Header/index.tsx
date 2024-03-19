import "./styles.css";
import dayjs from "dayjs";
import me from "../../assets/me.webp";

export default function Header() {
  const bDay = dayjs("1992-10-27");
  const now = dayjs();

  const yearsOld = now.diff(bDay, "year");

  return (
    <header data-aos="fade-in" className="header">
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
            Tenho {yearsOld} anos, moro no Rio de Janeiro, sou um Desenvolvedor
            de Software apaixonado por tecnologia, computadores e iniciativas
            que impactam positivamente a vida das pessoas. Estou sempre buscando
            aproveitar novas oportunidades de trabalhar com coisas novas, viver
            novas experiências e me aventurar em desafios que possam me tirar da
            zona de conforto.
          </p>
          <p className="paragraph">
            Tenho experiência em algumas linguagens de programação como
            Javascript, Typescript, Python e estou sempre disposto a aprender
            novas ferramentas e tecnologias para melhorar minhas habilidades e
            conhecimentos.
          </p>
          <p className="paragraph">
            Além disso, também estou familiarizado com metodologias ágeis de
            desenvolvimento de software, como Scrum e Kanban, e entendo a
            importância de trabalhar de forma eficiente e eficaz para alcançar
            os objetivos de um projeto.
          </p>
          <p className="paragraph">
            Em resumo, sou um desenvolvedor de software muito dedicado que
            encontrou na tecnologia a possibilidade de transformar a vida das
            pessoas e que está em constante evolução, sempre pronto para
            enfrentar novos desafios e criar soluções inovadoras.
          </p>
          <p className="paragraph">
            Ah! E uma curiosidade sobre mim: Também sou músico! Toco guitarra,
            contra-baixo, violão e faço um barulho - literalmente - na bateria!
            A música tem um papel muito importante na minha vida! Vou deixar
            aqui o meu{" "}
            <a
              className="youtube"
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
    </header>
  );
}
