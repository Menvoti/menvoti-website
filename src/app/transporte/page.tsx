import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import TransporteLandingClient from './TransporteLandingClient';

export const metadata: Metadata = {
  title: 'Transporte in K\u00f6ln | MENVOTI',
  description: 'Schnelle und sichere Transporte in K\u00f6ln und Umgebung. M\u00f6bel, Eink\u00e4ufe, Baumaterialien und vieles mehr.',
};

export default function TransportePage() {
  return (
    <>
      <Navbar />
      <TransporteLandingClient />
      <Contact />
      <Footer />
    </>
  );
}