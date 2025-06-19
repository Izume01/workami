import localFont from 'next/font/local'
import { Dosis , Crimson_Text , } from 'next/font/google'

export const dosis = Dosis({
    subsets: ['latin'],
    variable: '--font-dosis',
})

export const crimsonText = Crimson_Text({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-crimson-text',
})

export const blunext = localFont({
  src: '/fonts/BluuNext-Bold.otf',
  display: 'swap',
  variable: '--font-blunext',
})

export const sfProDisplay = localFont({
  src: '/fonts/SFPRODISPLAYREG.otf',
  display: 'swap',
  variable: '--font-sf-pro-display',
})

export const sfProBold = localFont({
  src: '/fonts/SFPRODISPLAY.otf',
  display: 'swap',
  variable: '--font-sf-pro-bold',
})

export const sfProMedium = localFont({
  src: '/fonts/SFPRODISPLAYMED.otf',
  display: 'swap',
  variable: '--font-sf-pro-medium',
})
