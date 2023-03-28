/* 
- WidgetFormatter - компонент, помогающий форматировать вид виджетов
*/

import Titles from "./news/TitlesItem"

export default function WidgetFormatter(props) {
  const {title, link} = props;

  return (
    <div>
      <Titles text={title} link={link}/>
      {props.children}
    </div>
  )
}