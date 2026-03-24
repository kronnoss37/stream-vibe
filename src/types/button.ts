import { type IconName } from '@/components/Icon'

export interface ButtonContent {
  label: string
  isLabelHidden?: boolean
  iconName?: IconName
  iconPosition?: 'before' | 'after'
}

export interface ButtonBase extends ButtonContent {
  className?: string
  mode?: 'transparent' | 'black-10'
}
