'use client';
import { useEffect, useState } from 'react';
type Consent = { analytics: boolean };
const KEY = 'consent.v1';
export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => { try { const raw = localStorage.getItem(KEY); if (!raw) setOpen(true); } catch { setOpen(true); } }, []);
  function acceptAll(){ localStorage.setItem(KEY, JSON.stringify({analytics:true})); setOpen(false); }
  function decline(){ localStorage.setItem(KEY, JSON.stringify({analytics:false})); setOpen(false); }
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto mb-4 max-w-3xl rounded-md border border-gray-300 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <p className="text-sm">We use optional, privacy-friendly analytics only with your consent.</p>
        <div className="mt-3 flex gap-2">
          <button onClick={acceptAll} className="rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700">Allow analytics</button>
          <button onClick={decline} className="rounded border px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-800">Decline</button>
        </div>
      </div>
    </div>
  );
}
