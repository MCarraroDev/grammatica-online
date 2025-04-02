const { useState, useEffect } = React;

function Footer() {
    return (
        <footer className="footer">
            Creato da <a href="https://github.com/MCarraroDev" target="_blank" rel="noopener noreferrer">Marco Carraro</a>
        </footer>
    );
}

function ThemeSwitcher({ theme, onToggle }) {
    return (
        <button 
            className="theme-switcher" 
            onClick={onToggle}
            title={`Passa al tema ${theme === 'light' ? 'scuro' : 'chiaro'}`}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}

function App() {
    const [selectedSection, setSelectedSection] = useState(null);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const sections = {
        grammaticale: {
            title: "Analisi Grammaticale",
            description: "Studia le caratteristiche delle parole",
            color: "var(--primary-color)"
        },
        logica: {
            title: "Analisi Logica",
            description: "Analizza la funzione delle parole nella frase",
            color: "var(--secondary-color)"
        },
        periodo: {
            title: "Analisi del Periodo",
            description: "Studia i rapporti tra le proposizioni",
            color: "var(--tertiary-color)"
        }
    };

    const HomePage = () => (
        <div className="container">
            <header className="header">
                <h1>Grammatica Online</h1>
                <p>Scegli l'argomento che vuoi studiare</p>
            </header>
            <div className="options-grid">
                {Object.entries(sections).map(([key, section]) => (
                    <div 
                        key={key}
                        className={`option-card ${key}`}
                        onClick={() => setSelectedSection(key)}
                    >
                        <h2 style={{ color: section.color }}>{section.title}</h2>
                        <p>{section.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const LogicalAnalysisContent = () => {
        const complementTypes = [
            {
                title: 'Predicati',
                items: [
                    {
                        name: 'Predicato Verbale (P.V.)',
                        description: 'Verbo principale della frase',
                        examples: ['Luca mangia una mela', 'Luca sembra grande', 'Devo fare i compiti prima di sera'],
                        notes: 'Include verbi copulativi, servili e fraseologici'
                    },
                    {
                        name: 'Predicato Nominale (P.N.)',
                        description: 'Verbo essere (copula) + parte nominale',
                        examples: ['Sarebbe bello andare al mare'],
                        notes: 'Esprime una qualità o uno stato del soggetto'
                    }
                ]
            },
            {
                title: 'Elementi Principali',
                items: [
                    {
                        name: 'Soggetto',
                        description: "Chi/che cosa compie l'azione",
                        examples: ['Luca mangia una mela', 'Ho comprato una macchina (io)', 'Nevica da giorni (-)'],
                        notes: "Può essere espresso, sottinteso o mancante"
                    },
                    {
                        name: 'Complemento Oggetto',
                        description: 'Risponde alla domanda: chi? che cosa?',
                        examples: ['Ho vinto la gara', 'Ha pianto un mare di lacrime'],
                        notes: "Può essere diretto o interno"
                    }
                ]
            },
            {
                title: 'Complementi che Indicano Qualità',
                items: [
                    {
                        name: 'Complemento Predicativo',
                        description: "Si riferisce al soggetto o all'oggetto tramite il predicato",
                        examples: ['Luca sembra tranquillo', 'Hanno dichiarato Luca rappresentante'],
                        notes: "Può essere del soggetto o dell'oggetto"
                    },
                    {
                        name: 'Attributo',
                        description: 'Aggettivo con funzione attributiva',
                        examples: ['Il libro di matematica è molto dettagliato'],
                        notes: 'Qualifica o determina un nome'
                    },
                    {
                        name: 'Apposizione',
                        description: 'Nome che precisa un altro nome',
                        examples: ['Il prof Muscillo insegna fisica'],
                        notes: 'Specifica ulteriormente un sostantivo'
                    }
                ]
            },
            {
                title: 'Altri Complementi',
                items: [
                    {
                        name: 'Complemento di Termine',
                        description: 'Risponde alle domande: a chi? a che cosa?',
                        examples: ['Ho dato il regalo al festeggiato'],
                        notes: "Indica il destinatario dell'azione"
                    },
                    {
                        name: "Complemento d'Agente/Causa Efficiente",
                        description: "Indica chi/cosa compie l'azione in una frase passiva",
                        examples: ['La pasta viene mangiata da Luca', 'Gli alberi sono stati abbattuti dal vento'],
                        notes: 'Agente per le persone, causa efficiente per le cose'
                    },
                    {
                        name: 'Complemento di Specificazione',
                        description: 'Precisa un termine generico',
                        examples: ['Il gatto di Giorgio è simpatico'],
                        notes: 'Introdotto dalla preposizione "di"'
                    },
                    {
                        name: 'Complemento di Denominazione',
                        description: "Specifica il nome di luoghi, persone, enti, giorni o mesi",
                        examples: ['Siamo andati a visitare la città di Bari'],
                        notes: 'Precisa il nome proprio di qualcosa'
                    }
                ]
            }
        ];

        return (
            <div className="analysis-content">
                {complementTypes.map((type, index) => (
                    <div key={index} className="complement-section">
                        <h2>{type.title}</h2>
                        <div className="complement-grid">
                            {type.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="complement-card">
                                    <h3>{item.name}</h3>
                                    <p className="description">{item.description}</p>
                                    <div className="examples">
                                        <h4>Esempi:</h4>
                                        <ul>
                                            {item.examples.map((example, exIndex) => (
                                                <li key={exIndex}>{example}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="notes">{item.notes}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const SectionPage = ({ section }) => {
        const sectionData = sections[section];
        
        return (
            <div className="container">
                <button 
                    className="back-button"
                    onClick={() => setSelectedSection(null)}
                >
                    ← Torna alla Home
                </button>
                <div className="content-page">
                    <h1 style={{ color: sectionData.color }}>{sectionData.title}</h1>
                    <div className="section-content">
                        {section === 'logica' ? <LogicalAnalysisContent /> : 
                         <p>Contenuto per {sectionData.title} in arrivo...</p>}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <ThemeSwitcher theme={theme} onToggle={toggleTheme} />
            {selectedSection ? <SectionPage section={selectedSection} /> : <HomePage />}
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
