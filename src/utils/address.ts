import twDistrict from '@/assets/tw-district.json'


type CityData = {
  zipcode: string
  city: string
  district: string
}

export const getCityData = (zipcode: number): CityData => {
  for (const city of twDistrict) {
    const district = city.districts.find(el => el.zip == zipcode.toString())
    if (district) {
      return {
        zipcode: district?.zip,
        district: district?.name,
        city: city?.name,
      }
    }
  }

  return { zipcode: '', city: '', district: '' }
}