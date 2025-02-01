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
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{preset.name}</h1>
        <p className="mb-6">{preset.description}</p>
        {/* ...additional preset details... */}
      </div>
    </>
  );
}
