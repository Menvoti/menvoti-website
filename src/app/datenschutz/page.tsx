import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DatenschutzClient from './DatenschutzClient';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | MENVOTI',
  description: 'Datenschutzerklärung der MENVOTI – Informationen zur Verarbeitung personenbezogener Daten.',
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <DatenschutzClient />
      <Footer />
    </>
  );
}
