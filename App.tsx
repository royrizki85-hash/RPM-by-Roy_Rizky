
import React, { useState } from 'react';
import RPMForm from './components/RPMForm';
import ResultView from './components/ResultView';
import { generateRPM } from './services/geminiService';
import { RPMData } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (data: RPMData) => {
    setLoading(true);
    setResult(null);
    try {
      const generatedContent = await generateRPM(data);
      setResult(generatedContent);
      // Auto scroll to result
      setTimeout(() => {
        document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error("Error generating RPM:", error);
      alert("Terjadi kesalahan saat membuat RPM. Pastikan API Key valid dan koneksi internet stabil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 no-print">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-blue-200 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Generator RPM</h1>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Deep Learning Planning AI</p>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Kurikulum Merdeka Ready</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-10">
        <div className="mb-10 text-center md:text-left no-print">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Buat Rencana Pembelajaran Mendalam</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Asisten AI cerdas untuk guru Indonesia. Masukkan detail pembelajaran Anda, 
            dan biarkan kami merumuskan desain pembelajaran terstruktur yang memenuhi elemen 
            Identifikasi, Desain, Pengalaman Belajar, dan Asesmen.
          </p>
        </div>

        <div className="no-print">
          <RPMForm onSubmit={handleSubmit} isLoading={loading} />
        </div>

        <div id="result-section">
          {result && <ResultView content={result} />}
        </div>
      </main>

      {/* Background Decor */}
      <div className="fixed top-0 right-0 -z-10 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-indigo-50 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default App;
