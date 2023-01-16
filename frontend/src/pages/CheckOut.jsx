import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ui/CommonSection'

const CheckOut = () => {
  return (
    <Helmet title={'checkout'}>
      <CommonSection title={'Products'}/>
    </Helmet>
  )
}

export default CheckOut