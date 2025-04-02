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
