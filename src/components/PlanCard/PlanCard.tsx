import { LinkButton } from '@/components/Button'
import './PlanCard.scss'

export interface PlanCardProps {
  title: string
  description: string
  price: string
  period: 'month' | 'year'
}

const PlanCard = ({ title, description, price, period }: PlanCardProps) => {
  return (
    <article className="plan-card">
      <div className="plan-card__info">
        <h3 className="plan-card__title h4">{title}</h3>
        <div className="plan-card__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="plan-card__conditions">
        <span className="plan-card__price">{price}</span>
        <span className="plan-card__period">/{period}</span>
      </div>
      <div className="plan-card__actions">
        <LinkButton
          to="/subscriptions"
          className="plan-card__button"
          label="Start Free Trial"
          mode="black-08"
        />
        <LinkButton
          to="/subscriptions"
          className="plan-card__button"
          label="Choose Plan"
        />
      </div>
    </article>
  )
}

export default PlanCard
