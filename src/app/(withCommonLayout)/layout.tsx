import Footer from "@/components/shared/Footer/Footer"
import GoToTop from "@/components/shared/GoToTop/GoToTop"
import Header from "@/components/shared/Header/Header"





const CommonLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Header/>
        <div>
      {children}
      </div>
      <Footer/>
     <GoToTop/>
    </div>
  )
}

export default CommonLayout