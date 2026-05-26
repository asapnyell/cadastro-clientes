import { useState, useEffect } from "react";

function App() {
  // Estados da aplicação
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [servico, setServico] = useState("");
  const [loading, setLoading] = useState(false);

  // GET: Buscar clientes ao carregar a tela
  useEffect(() => {
    fetch("http://localhost:3000/clientes")
      .then((res) => res.json())
      .then((data) => setClientes(data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  // POST: Cadastrar novo cliente
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const novoCliente = { nome, email, servico };

    fetch("http://localhost:3000/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoCliente),
    })
      .then((res) => res.json())
      .then((clienteCadastrado) => {
        // Atualiza a lista na tela imediatamente
        setClientes([...clientes, clienteCadastrado]);
        // Limpa o formulário
        setNome("");
        setEmail("");
        setServico("");
      })
      .catch((err) => console.error("Erro ao salvar:", err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-emerald-400">Gerenciador de Clientes</h1>
          <p className="text-neutral-400 mt-2">Cadastre e acompanhe seus leads e projetos.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LADO ESQUERDO: Formulário */}
          <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 h-fit shadow-lg">
            <h2 className="text-xl font-semibold mb-4 border-b border-neutral-700 pb-2">Novo Cadastro</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">Nome do Cliente / Empresa</label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-600 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="Ex: Tech Solutions"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">E-mail de Contato</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-600 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="contato@empresa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">Serviço de Interesse</label>
                <select
                  required
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-600 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                >
                  <option value="" disabled>Selecione um serviço...</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Site 3D Institucional">Site 3D Institucional</option>
                  <option value="Automação com IA">Automação com IA</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold py-3 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Salvando..." : "Cadastrar Cliente"}
              </button>
            </form>
          </div>

          {/* LADO DIREITO: Listagem */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-800 rounded-xl border border-neutral-700 shadow-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-900/50 border-b border-neutral-700 text-neutral-300 text-sm">
                    <th className="p-4 font-semibold">Nome</th>
                    <th className="p-4 font-semibold">E-mail</th>
                    <th className="p-4 font-semibold">Serviço</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.length === 0 ? (
                    <tr>
                      <td colSpan="3" className="p-8 text-center text-neutral-500">
                        Nenhum cliente cadastrado ainda.
                      </td>
                    </tr>
                  ) : (
                    clientes.map((cliente) => (
                      <tr key={cliente.id} className="border-b border-neutral-700/50 hover:bg-neutral-700/30 transition-colors">
                        <td className="p-4 font-medium">{cliente.nome}</td>
                        <td className="p-4 text-neutral-400">{cliente.email}</td>
                        <td className="p-4">
                          <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/20">
                            {cliente.servico}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;