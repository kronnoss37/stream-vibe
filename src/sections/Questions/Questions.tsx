import Section from '@/layouts/Section'
import { LinkButton } from '@/components/Button'
import AccordionGroup from '@/components/AccordionGroup'
import Accordion from '@/components/Accordion'
import { questionItems } from '@/data/questionItems'

const Questions = () => {
  const data = {
    title: 'Frequently Asked Questions',
    titleId: 'questions-title',
    description:
      "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.",
    actions: (
      <LinkButton
        to="/support"
        className="questions__button"
        label="Ask a Question"
      />
    ),
  }

  return (
    <Section {...data}>
      <div className="questions__body">
        <AccordionGroup columns={2}>
          {questionItems.map(({ id, title, description }) => (
            <Accordion
              key={id}
              title={title}
              id={`question-${id}`}
              name="questions"
              isOpen={id === 1}
            >
              <p>{description}</p>
            </Accordion>
          ))}
        </AccordionGroup>
      </div>
    </Section>
  )
}

export default Questions
