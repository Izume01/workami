import localFont from 'next/font/local'
import { Dosis , Crimson_Text , } from 'next/font/google'

export const blunext = localFont({
    src : '../font/BluuNext-Bold.otf',
    display: 'swap',
    variable: '--font-blunext',
})

export const dosis = Dosis({
    subsets: ['latin'],
    variable: '--font-dosis',
})

export const crimsonText = Crimson_Text({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-crimson-text',
})

export const sfProDisplay = localFont({
    src: '../font/SFPRODISPLAYREGULAR.OTF',
    display: 'swap',
    variable: '--font-sf-pro-display',
})

export const sfProBold = localFont({
    src : '../font/SFPRODISPLAYBOLD.OTF',
    display: 'swap',
    variable: '--font-sf-pro-bold',
})

export const sfProMedium = localFont({
    src : '../font/SFPRODISPLAYMEDIUM.OTF',
    display: 'swap',
    variable: '--font-sf-pro-medium',
})