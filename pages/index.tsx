import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import MainSection from '../components/MainSection'
import Sponsors from '../components/Sponsors'
import ClassesSection from '../components/ClassesSection'
import WhyBestSection from '@/components/WhyBestSection'
import BrowseCourses from '@/components/Courses/BrowseCourses'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Navbar />
     <MainSection />
     <Sponsors />
     <ClassesSection />
     <WhyBestSection />
     <BrowseCourses />
    </>
  )
}
