import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StrategyModal from './components/StrategyModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('strategy');

  const openStrategyModal = (type = 'strategy') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 overflow-x-hidden">
      <Navbar onOpenStrategyModal={openStrategyModal} />
      <Home onOpenStrategyModal={openStrategyModal} />
      <Footer onOpenStrategyModal={openStrategyModal} />
      <StrategyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}