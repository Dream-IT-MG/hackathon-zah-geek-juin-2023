import React, { useState } from 'react';
// import html2canvas from 'html2canvas';
import certificatImage from './assets/certificat.jpg';
import './Certificat.css';

function Certificat() {
  const scoreRequis = 2; // Score requis pour obtenir le certificat
  const [quizScore, setQuizScore] = useState(0);
  const [showCertificat, setShowCertificat] = useState(false);

  const handleRetryQuiz = () => {
    setQuizScore(0);
    setShowCertificat(false);
  };

  const generateCertificate = () => {
    // const certificatContainer = document.getElementById('certificat-container');
    // html2canvas(certificatContainer).then((canvas) => {
    //   const imgData = canvas.toDataURL('image/png');
    //   const pdf = new jsPDF('p', 'mm', 'a4');
    //   const imgProps = pdf.getImageProperties(imgData);
    //   const pdfWidth = pdf.internal.pageSize.getWidth();
    //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //   pdf.save('certificat.pdf'); // Télécharge automatiquement le certificat PDF
    // });
  };

  return (
    <div>
      {!showCertificat && (
        <div className="quiz-container">
          <h2>Quiz</h2>
          {/* Afficher les questions et les options ici */}
          {/* Utiliser setState pour mettre à jour le score en fonction des réponses */}
          {/* Ajouter un bouton de soumission du quiz */}
        </div>
      )}

      {showCertificat && (
        <div className="certificat-container">
          <h1>Certificat de fin de formation</h1>
          <div id="certificat-container">
            <img src={certificatImage} alt="Certificat de fin de formation" className="certificat-image" />
            {/* Afficher les informations dynamiques du certificat ici */}
          </div>
          <button className="download-button" onClick={generateCertificate}>
            Télécharger le certificat
          </button>
          <button className="retry-button" onClick={handleRetryQuiz}>
            Refaire le quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default Certificat;
