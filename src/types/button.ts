import { type IconName } from '@/components/Icon'

export type ButtonMode = 'transparent' | 'black-10' | 'black-08' | 'black-06'
export interface ButtonContent {
  label: string
  isLabelHidden?: boolean
  iconName?: IconName
  iconPosition?: 'before' | 'after'
}

export interface ButtonBase extends ButtonContent {
  className?: string
  mode?: ButtonMode
}
