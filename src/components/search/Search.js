/* 
Search - компонент блока поиска новостей
*/
import NavItem from "./NavItem"

export default function Search() {
  return (
    <section className="search">
      <div className="logo" />
      <NavItem />
      <div className="search-bar"/>
      <button className="search-btn"/>
      <div className="search-subtitle"/>
    </section>
  )
}