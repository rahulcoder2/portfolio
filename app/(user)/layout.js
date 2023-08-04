import '../globals.css'
import { Poppins } from 'next/font/google'
import Header from '../../components/Header'


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  })

export const metadata = {
  title: 'Rahul | Portfolio',
  description: 'Created by Rahul Chaudhary to showcase the project, works, service, Blog and other.This website build to create impression to client or recruiter. who is trying to hire or recruit.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header/>
      <main>
        {children}
      </main>
      </body>
    </html>
  )
}