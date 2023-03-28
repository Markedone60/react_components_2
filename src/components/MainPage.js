/* 
- MainPage - основной компонент, включает в себя другие компоненты:
- NewsBlock - компонент с новостями
- Services - компонент стороннего сервиса
- Search - компонент поиска
- Marketing - компонент маркетинга и рекламы
- Widgets - компонент с мини-виджетами
*/

import Marketing from "./Marketing";
import NewsBlock from "./news/NewsBlock";
import Services from "./Services";
import Search from "./search/Search";
import Widgets from "./Widgets";

export default function MainPage(){
  return (
    <main>
      <NewsBlock/>
      <Services/>
      <Search/>
      <Marketing/>
      <Widgets/>
    </main>
  )
}