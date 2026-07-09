import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImpressumClient from './ImpressumClient';

export const metadata: Metadata = {
  title: 'Impressum | MENVOTI',
  description: 'Impressum der MENVOTI – Einzelunternehmen von Eduard Belyakov, Köln.',
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <ImpressumClient />
      <Footer />
    </>
  );
}
