import { useEffect } from 'react'

const asset = (file) => `/assets/${file}`

export default function EmConstrucao() {
  // Garante que a página comece no topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVoltar = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="construcao-page">
      {/* Elementos decorativos de fundo consistentes com o site */}
      <img
        className="construcao-decoration construcao-decoration--shine"
        src={asset('brilhino.svg')}
        alt=""
      />
      <img
        className="construcao-decoration construcao-decoration--star"
        src={asset('estrela.svg')}
        alt=""
      />

      <div className="container construcao-container">
        {/* Ícone de interditado / aviso estilizado */}
        <div className="construcao-icon-wrapper">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="construcao-icon"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
          </svg>
        </div>

        <h1 className="construcao-title">Página em Construção</h1>
        
        <p className="construcao-description">
          Oops! Este projeto ainda está sendo estruturado e refinado com todo o cuidado. 
          Volte em breve para conferir todos os detalhes por trás dele.
        </p>

        <a className="action-button" href="/" onClick={handleVoltar}>
          <span>VOLTAR AO INÍCIO</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
            <path d="M8.75814 1.43333C8.8354 1.35224 8.8958 1.25679 8.93589 1.15264C8.97598 1.04838 8.99497 0.93722 8.99179 0.825708C8.98861 0.714156 8.96332 0.604323 8.91735 0.502506C8.87138 0.400619 8.80564 0.308842 8.72389 0.232145C8.64213 0.155513 8.54596 0.0955611 8.44086 0.0557991C8.33576 0.0160011 8.2238 -0.00277321 8.11136 0.000305592C7.99892 0.00345095 7.8882 0.0285642 7.78554 0.0741753C7.68288 0.119786 7.59027 0.18504 7.51301 0.266162L0.234083 7.91162C0.0837583 8.06934 0 8.27817 0 8.49523C0 8.71228 0.0837583 8.92111 0.234083 9.07883L7.51301 16.7252C7.58976 16.8081 7.68235 16.875 7.78539 16.9221C7.88843 16.9692 7.99987 16.9955 8.11325 16.9995C8.22662 17.0035 8.33967 16.9851 8.44582 16.9454C8.55197 16.9056 8.64911 16.8454 8.73159 16.7681C8.81408 16.6909 8.88026 16.5981 8.9263 16.4953C8.97235 16.3924 8.99733 16.2815 8.9998 16.169C9.00227 16.0565 8.98218 15.9446 8.94069 15.8399C8.89921 15.7351 8.83715 15.6396 8.75814 15.5588L2.03411 8.49523L8.75814 1.43333Z" fill="white"/>
          </svg>
        </a>
      </div>
    </div>
  )
}