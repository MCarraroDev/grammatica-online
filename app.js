const { useState } = React;

function App() {
    const [selectedSection, setSelectedSection] = useState(null);

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
                <h1>Grammatica Italiana</h1>
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
                        {/* Contenuto specifico per ogni sezione */}
                        <p>Contenuto per {sectionData.title} in arrivo...</p>
                    </div>
                </div>
            </div>
        );
    };

    return selectedSection ? <SectionPage section={selectedSection} /> : <HomePage />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
