import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { Image, Container, Stack } from "react-bootstrap";
import myPhoto from "../assets/me/mypage.jpg";

function MyPage() {
  return (
    <>
      <Header />
      <BackButton />

      <Container>
        <Stack direction="horizontal" gap={3} style={{ alignItems: "unset" }}>
          <Image src={myPhoto} width={"300px"} height={"300px"} />

          <div>
            <h1>Юрий Архипов</h1>
            <h6>arhipow.yuri@gmail.com</h6>
            <h6>tg: @yuarh</h6>

            <p>Здравствуйте! Я занимаюсь разработкой на React уже год. </p>
            <p>
              Мне 22 года, я уже получил высшее образование, но сферу
              деятельности решил выбрать отличную от образования -
              программирование, успел покодить на python, пописать игрушки и
              прийти к frontend - разработке(еще успел пописать бэк))
            </p>
            <p>
              Я искренне люблю это дело, люблю решать проблемы, люблю чувство
              нескромного гения, когда придумал какое-то хорошее решение, люблю
              видеть готовый рабочий продукт(такое приятно чувство
              ремесленника), короче работу эту я люблю и хочу посвятить себя
              этому делу.
            </p>
            <p>
              Успел поработать со многими технологиями, с Redux Saga, правда,
              работаю впервые) сохранял в стор и с помощью Redux, и с помощью
              Redux Toolkit. Писал стили и с использованием tailwind, material
              ui, теперь еще и с bootstrap, также пользовался разными css-in-js
              библиотеками, ну и конечно работал с препроцессорами. С недавних
              пор все пишу на ts(как говорят, попробовав раз пописать на ts - на
              ванильный js не перясядешь)
            </p>
            <p>
              Спасибо за внимание, надеюсь вам стал понятен кто я такой чуточку
              побольше)
            </p>
          </div>
        </Stack>
      </Container>
    </>
  );
}

export default MyPage;