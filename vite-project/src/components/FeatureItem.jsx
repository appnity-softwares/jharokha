import React from 'react'

const FeatureItem = ({ icon, text, color })=>{

    return (
      <div>
         <p className="flex items-center space-x-3 text-lg mt-3">
    <span className={`text-2xl ${color}`}>{icon}</span>
    <span className="text-gray-600 font-medium">{text}</span>
  </p>
      </div>
    )
}


export default FeatureItem
