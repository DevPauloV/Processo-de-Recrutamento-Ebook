import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Topbooks.css';

export default function TopBooks() {
    const navigate = useNavigate();

    useEffect(() => {
        const estaLogado = sessionStorage.getItem('usuarioLogado');
        if (!estaLogado) {
            navigate('/');
        }
    }, []);

    const [livros, setLivros] = useState([]);
    const [tipo, setTipo] = useState(1);
    const [erro, setErro] = useState(null);
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setErro(null);
        setCarregando(true);

        const cacheKey = `top10_conteudo_${tipo}`;
        const cachedData = sessionStorage.getItem(cacheKey);

        if (cachedData) {
            setLivros(JSON.parse(cachedData));
            setCarregando(false);
            return () => controller.abort();
        }

        fetch(`https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos/${tipo}`, { signal })
            .then(res => {
                if (!res.ok) throw new Error('Erro ao buscar dados');
                return res.json();
            })
            .then(data => {
                const result = data.data || [];
                setLivros(result);
                sessionStorage.setItem(cacheKey, JSON.stringify(result));
                setCarregando(false); 
            })
            .catch(err => {
                if (err.name === 'AbortError') return;
                setErro(err.message);
                setCarregando(false); 
            });

        return () => controller.abort();
    }, [tipo]);

    return (
        <div className="topbooks-container">
            <nav className="topbooks-navbar">
                <h2 className="topbooks-title">Top 10 mais acessados</h2>
                <select
                    className="topbooks-select"
                    value={tipo}
                    onChange={(e) => setTipo(Number(e.target.value))}
                >
                    <option value={1}>Livros</option>
                    <option value={2}>Cursos</option>
                    <option value={3}>Videoaulas</option>
                    <option value={5}>Banca</option>
                    <option value={6}>Audiobooks</option>
                </select>
            </nav>

            <div className="topbooks-content">
                {erro && <p className="topbooks-error">Erro: {erro}</p>}
                {carregando && <p className="topbooks-loading"> ⏳ Carregando...</p>}

                {!carregando && !erro && (
                    <ul className="topbooks-list">
                        {livros.slice(0, 10).map((item, i) => (
                            <li key={item.CodLivro ?? i} className="topbooks-list-item">
                                <a
                                    href={`https://bookplay.com.br/conteudo/${item.CodLivro}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="topbooks-link"
                                >
                                    {i + 1}. {item.Nome}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
