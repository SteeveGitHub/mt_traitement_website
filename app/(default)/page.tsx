import CookieBanner from "@/components/cookie-banner";

export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import EnterPage from "@/components/EnterPage";
import Map from "@/components/Map";

export default function Home() {
  return (
    <>
        {/*<CookieBanner/>*/}
        <EnterPage/>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
        <Map/>
    </>
  )
}
