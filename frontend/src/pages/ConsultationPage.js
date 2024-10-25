import React from 'react';
import Navbar from '../components/Navbar';
import DoctorInfoCard from '../components/DoctorInfoCard';
import ConsultationTypeSelector from '../components/ConsultationType';
import ChatWindow from '../components/ChatWindow';
import VoiceCallSection from '../components/VoiceCallSection';
import Footer from '../components/Footer';

const ConsultationPage = () => {
  return (
    <div>
      <Navbar />
      <DoctorInfoCard />
      <ConsultationTypeSelector />
      <ChatWindow />
      <VoiceCallSection />
      <Footer />

    </div>
  );
}

export default ConsultationPage;
