import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages = [
    '',
    '/About',
    '/About_Mesquite',
    '/Services',
    '/Contact_us',
    '/Golf_Homes_Mesquite',
    '/Mesquite_Homes_For_Sale',
    '/Buying_Home_Mesquite',
    '/Mesquite_Realtor_Services',
    '/Mesquite_Golf_Trip',
    '/Mesquite_Transportation',
    '/Mesquite_Weather',
    '/Property',
    '/communities',
    '/communities/sun-city-mesquite',
    '/communities/falcon-ridge',
    '/communities/mesquite-vistas',
    '/communities/highland-villas',
    '/55-plus-communities-mesquite',
    '/sell-your-mesquite-home',
    '/Sun_City_Mesquite',
    '/Sun_City_Mesquite_Floor_Plans',
    '/Sun_City_Mesquite_Amenities',
    '/Conestoga_Golf_Mesquite',
  ]

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/Sun_City_Mesquite' ? 0.9 : 0.8,
  }))
}

