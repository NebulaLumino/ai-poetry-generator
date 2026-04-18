'use client';
import { useState } from 'react';

export default function Home() {
const [PoeticForm, setPoeticForm] = useState('');
const [Theme, setTheme] = useState('');
const [EmotionalTone, setEmotionalTone] = useState('');
const [CulturalTradition, setCulturalTradition] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOutput('');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ poetic_form, theme, emotional_tone, cultural_tradition }),
      });
      const data = await res.json();
      setOutput(data.result || data.error || 'No response');
    } catch(e: any) { setOutput('Error: ' + e.message); }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Poetry Generator</h1>
          <p className="text-gray-400 mb-8">Generate poems with line-by-line analysis and craft notes.</p>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div><label className="block text-sm text-gray-400 mb-1">Poetic Form</label><input value={PoeticForm} onChange={e=>setPoeticForm(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400" placeholder="Enter poetic form..." /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Theme</label><input value={Theme} onChange={e=>setTheme(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400" placeholder="Enter theme..." /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Emotional Tone</label><input value={EmotionalTone} onChange={e=>setEmotionalTone(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400" placeholder="Enter emotional tone..." /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Cultural Tradition</label><input value={CulturalTradition} onChange={e=>setCulturalTradition(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400" placeholder="Enter cultural tradition..." /></div>
            <button type="submit" disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-white disabled:opacity-50 transition-opacity"
              style={backgroundColor: 'hsl(25,70%,55%)'}>
              {loading ? 'Generating...' : 'Generate'}
            </button>
          </form>
          {output && (
            <div className="mt-6 p-4 bg-gray-800 border border-gray-700 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm text-gray-200">{output}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}