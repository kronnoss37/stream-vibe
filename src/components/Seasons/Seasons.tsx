import AccordionGroup from '@/components/AccordionGroup'
import Accordion from '@/components/Accordion'
import EpisodeCard from '@/components/EpisodeCard'

import { seasonItems } from '@/data/seasonItems'
import './Seasons.scss'

const Seasons = () => {
  return (
    <AccordionGroup className="seasons" mode="dark" isOrderedList={false}>
      {seasonItems.map(({ id, title, subtitle, episodes }, index) => (
        <Accordion
          key={id}
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${index + 1}`}
          name="seasons"
          isOpen={index === 0}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map(({ id, ...episode }) => (
              <li key={id} className="seasons__item">
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
