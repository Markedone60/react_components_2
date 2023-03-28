/* 
NewsBlock - компонент блока новостей, который состоит из: 
- заголовков, 
- подкомпонента блока новостей, 
- подкомпонента валюты 
*/

import Titles from "./TitlesItem";
import CurrencyItem from "./CurrencyItem";
import NewsItem from "./NewsItem";


export default function NewsBlock() {
  return (
    <section className="news-component">
      <Titles text="Сейчас в СМИ" link="#" />
      <Titles text="В Германии" link="#" selected={false} />
      <Titles text="Рекомендуем" link="#" selected={false} />
      <div className="widgets-news" />
        <NewsItem />
        <CurrencyItem />
    </section>
  )
}