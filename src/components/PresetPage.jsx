import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import wheelPresets from '../config/wheelPresets';

export default function PresetPage() {
  const { presetSlug } = useParams();
  const preset = wheelPresets[presetSlug];

  if (!preset) {
    return <div>Preset not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{preset.name} - PickerWheelKids Preset</title>
        <meta name="description" content={`Enjoy the ${preset.name} preset on PickerWheelKids. ${preset.description || ''}`} />
        <link rel="canonical" href={`https://PickerWheelKids.com/${presetSlug}`} />
      </Helmet>
      <div className="p-8 text-center">
        {/* Fun header with icons */}
        <div className="text-6xl mb-4">
          {preset.emoji}🎉
        </div>
        <h1 className="text-4xl font-extrabold mb-4">
          <span className="mr-2">{preset.emoji}</span>
          {preset.name}
          <span className="ml-2">🎊</span>
        </h1>
        <p className="text-xl mb-6">
          {preset.description} 🚀✨
        </p>
        {/* ...additional preset details and fun elements... */}
      </div>
    </>
  );
}
