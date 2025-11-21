import { createContext, useContext, useEffect, useState } from 'react'

const BannerContext = createContext()

export const BannerContextProvider = ({ children }) => {

  const [isVisible, setIsVisible] = useState(null);

  useEffect(()=>{
    // Banner again show after 24hr
    const checkBannerVisibility = () => {
      const closedTimestamp = localStorage.getItem('importantUpdatesClosed')
      
      if (!closedTimestamp) return true;
    
      const closedTime = parseInt(closedTimestamp, 10)
      const currentTime = Date.now()
      const twentyFourHours = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
  
      if (currentTime - closedTime >= twentyFourHours) {
        localStorage.removeItem('importantUpdatesClosed') // Clear the closed timestamp
        return true
      }
      
      return false
    }

   setIsVisible(checkBannerVisibility());
  },[]);

  const closeBanner = () => {
    setIsVisible(false)
    // Save the current timestamp when banner is closed
    localStorage.setItem('importantUpdatesClosed', Date.now().toString())
    window.dispatchEvent(new CustomEvent('bannerClosed'))
  }

  return (
    <BannerContext.Provider value={{ isVisible, closeBanner }}>
      {children}
    </BannerContext.Provider>
  )
}

export const useBannerContextApi = () => {
 const context = useContext(BannerContext)
   if (context) {
     return context;
   }
   return new Error('BannerContext must be used within a BannerProvider');
}

