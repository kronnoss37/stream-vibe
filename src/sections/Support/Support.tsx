import LazyImage from '@/components/LazyImage'
import Field from '@/components/Field'
import Checkbox from '@/components/Checkbox'
import { Button } from '@/components/Button'
import Select from '@/components/Select'

import SupportImage from '@/assets/images/support/1.png'
import './Support.scss'

const Support = () => {
  const titleId = 'support-title'

  return (
    <section className="support container" aria-labelledby={titleId}>
      <div className="support__body">
        <div className="support__info">
          <h1 className="support__title h2" id={titleId}>
            Welcome to our support page!
          </h1>
          <div className="support__description">
            <p>
              We&apos;re here to help you with any problems you may be having
              with our product.
            </p>
          </div>
        </div>
        <LazyImage
          className="support__image"
          src={SupportImage}
          width={533}
          height={477}
        />
      </div>
      <form action="" className="support__form">
        <Field
          className="support__form-cell"
          label="First Name"
          placeholder="Ivan"
          isRequired
        />
        <Field
          className="support__form-cell"
          label="Last Name"
          placeholder="Ivanov"
        />
        <Field
          className="support__form-cell"
          label="Email"
          type="email"
          placeholder="example@example.com"
          isRequired
        />
        <Field
          className="support__form-cell"
          label="Phone Number"
          placeholder="(999) 999-99-99"
          inputMode="tel"
          mask="(000) 000-00-00"
          renderBefore={(fieldControlClassName) => (
            <Select
              label="Phone number prefix"
              buttonClassName={fieldControlClassName}
              options={[
                {
                  id: 1,
                  value: '+7',
                  isSelected: true,
                },
                {
                  id: 2,
                  value: '+375',
                },
                {
                  id: 3,
                  value: '+99',
                },
                {
                  id: 4,
                  value: '+12',
                },
                {
                  id: 5,
                  value: '+8',
                },
              ]}
            />
          )}
        />
        <Field
          className="support__form-cell support__form-cell--wide"
          label="Message"
          type="textarea"
          placeholder="Hi! I have a question..."
          isRequired
        />
        <div className="support__form-cell support__form-cell--wide support__form-cell--actions">
          <Checkbox
            className="support__form-agreement"
            label="I agree with Terms of Use and Privacy Policy"
            isRequired
          />
          <Button
            className="support__form-submit-button"
            type="submit"
            label="Send Message"
          />
        </div>
      </form>
    </section>
  )
}

export default Support
