/* 
- Widgets - компонент вывода виджетов, состоит из подкомпонентов
*/

import WidgetFormatter from "./WidgetFormatter"
import WeatherWg from "./widgets/WeatherWg"
import FavouriteWg from "./widgets/FavouriteWg"
import MapsWg from "./widgets/MapsWg"
import TeleWg from "./widgets/TeleWg"
import OnairWg from "./widgets/OnairWg"


export default function Widgets() {
  return (
    <section className="widgets">
      <WidgetFormatter title="Погода">
        <WeatherWg/>
      </WidgetFormatter>
      <WidgetFormatter title="Посещаемое">
        <FavouriteWg/>
      </WidgetFormatter>
      <WidgetFormatter title="Карта Германии">
        <MapsWg/>
      </WidgetFormatter>
      <WidgetFormatter title="Телепрограмма">
        <TeleWg/>
      </WidgetFormatter>
      <WidgetFormatter title="Эфир">
        <OnairWg/>
      </WidgetFormatter>
    </section>
  )
}