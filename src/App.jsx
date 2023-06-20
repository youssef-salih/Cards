import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Content from "./components/Content";

function App() {
  // const [card, setCard] = useState(false);
  // const cardHundle = () => {
  //   setCard(!card);
  // };
  // cardHundle();
  return (
    <>
      <div className="flex justify-center items-center">
        <Card
          contant={
            <Content
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quasi placeat culpa ullam"
              }
              button={<Button>Button</Button>}
            />
          }
          image={"https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"}
        />
        <Card
          contant={
            <Content
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quasi placeat culpa ullam"
              }
              button={<Button>Button</Button>}
            />
          }
          button={<Button>Button</Button>}
        />
      </div>
      <div className="flex justify-center items-center">
        <Card
          image={"https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"}
          content={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quasi placeat culpa ullam"
          }
          button={<Button>Button</Button>}
        />
        <Card
          contant={
            <Content
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quasi placeat culpa ullam"
              }
            />
          }
        />
      </div>
    </>
  );
}

export default App;
