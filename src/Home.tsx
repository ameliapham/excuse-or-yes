import {ButtonOui} from './components/ButtonOui';
import { BrowserRouter } from 'react-router-dom';


export function Home() {
  return (
    <BrowserRouter>
      <ButtonOui
        sticker='first'
        onPageChange={(sticker) => console.log(sticker)}
      />
    </BrowserRouter>
  );
}