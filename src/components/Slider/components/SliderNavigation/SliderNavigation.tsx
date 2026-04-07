import classNames from 'classnames'
import { Button } from '@/components/Button'
import type { NavigationRefs, PaginationRefs } from '@/types/slider'
import type { ButtonMode } from '@/types/button'

import './SliderNavigation.scss'

export type Mode = 'tile' | 'rounded'
interface SliderNavigationProps {
  className?: string
  mode?: Mode
  navigation?: NavigationRefs
  pagination?: PaginationRefs
  position?: 'abs-bottom'
  isHiddenMobile?: boolean
  buttonMode?: ButtonMode
}

const SliderNavigation = ({
  className,
  mode,
  navigation,
  pagination,
  position,
  isHiddenMobile,
  buttonMode = 'black-10',
}: SliderNavigationProps) => {
  if (!navigation) return null

  const { prevBtnRef, nextBtnRef } = navigation
  const paginationRef = pagination?.paginationRef

  return (
    <div
      className={classNames(className, 'slider-navigation', {
        [`slider-navigation--${mode}`]: mode,
        [`slider-navigation--${position}`]: position,
        'hidden-mobile': isHiddenMobile,
      })}
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--prev"
        mode={buttonMode}
        label="Previous Slide"
        isLabelHidden
        iconName="arrow-left"
        ref={prevBtnRef}
      />

      {pagination && (
        <div className="slider-navigation__pagination" ref={paginationRef} />
      )}

      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode={buttonMode}
        label="Next Slide"
        isLabelHidden
        iconName="arrow-right"
        ref={nextBtnRef}
      />
    </div>
  )
}

export default SliderNavigation
