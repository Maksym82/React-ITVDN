import './App.css';
import Parent from '../components/Parent';

export const App = () => {

  let user = {
    name: 'John',
    surname: 'Smith'
  }

  let x = 1;
  let y = [1, 2, 3, 4, 5];

  return (
    <>
      <h1>Что такое React?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis
        rerum quaerat harum accusantium cupiditate nemo, quibusdam consequuntur
        dignissimos vero.
      </p>

      <Parent data={user} forX={x} forY={y} />
    </>
  );
};
