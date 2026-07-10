import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BanListProvider } from './context/BanListContext';
import Header from './components/Header';
import DeckBuilderPage from './pages/DeckBuilderPage';
import CardBrowserPage from './pages/CardBrowserPage';

function App() {
    return (
        <BanListProvider>
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <div className="App-body">
                        <Routes>
                            <Route path="/" element={<DeckBuilderPage />} />
                            <Route path="/browse" element={<CardBrowserPage />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </BanListProvider>
    );
}

export default App;
