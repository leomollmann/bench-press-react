import { twMerge } from 'tailwind-merge'

function c(...classes: (string | undefined)[]) {
  if (classes.length <= 1) return classes[0]
  return twMerge(...classes)
}

export default c