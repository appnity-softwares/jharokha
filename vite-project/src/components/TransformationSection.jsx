import React from 'react'
import FeatureItem from './FeatureItem'
import ImageSlider from './ImageSlider'

const TransformationSection = () => {
  return (
    <section className="w-screen h-screen bg-white flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-7xl w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content Area */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-purple-600 tracking-wider uppercase flex items-center">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            Why Eirune?
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            The royal interior transformation
          </h1>

          <p className="text-xl text-gray-500 mt-4">
            Every project is a transformation. Every detail, unmistakably Eirune.
          </p>

          {/* Features List */}
          <div className="pt-4">
            <FeatureItem icon="👑" text="Royal Velvet Grandeur" color="text-yellow-600" />
            <FeatureItem icon="🌿" text="Botanical Harmony" color="text-green-600" />
            <FeatureItem icon="💡" text="Sculpted Lighting" color="text-yellow-500" />
            <FeatureItem icon="💜" text="Silhouettes of Power" color="text-purple-600" />
            <FeatureItem icon="✨" text="Gold trims and ornate details" color="text-yellow-500" />
          </div>
        </div>

        {/* Right Image Slider Area */}
        <div className="w-full h-full flex items-center justify-center">
          <ImageSlider />
        </div>
      </div>
    </section>
  )
}

export default TransformationSection
