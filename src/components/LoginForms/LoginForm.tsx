import { authLoginMock } from "@/services/authMock";
import { useState } from "react";

export const LoginForm = ()=>{
      const [email, setEmail] = useState("");
      const [senha, setSenha] = useState("");
      const [remember, setRemember] = useState(false);
      const [loading, setLoading] = useState(false);
      const [erros, setErros] = useState<{ email?: string; senha?: string }>({});
    
      function validarCampos() {
        const e: typeof erros = {};
        if (!email.trim()) e.email = "Email obrigatório";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
          e.email = "Email inválido";
    
        if (!senha.trim()) e.senha = "Senha obrigatória";
        else if (senha.length < 6) e.senha = "Mínimo de 6 caracteres";
    
        setErros(e);
        return Object.keys(e).length === 0;
      }
    
      async function handleEntrar(ev: React.FormEvent) {
        ev.preventDefault();
        if (loading) return;
    
        setErros({});
        if (!validarCampos()) return;
    
        try {
          setLoading(true);
          const res = await authLoginMock(email, senha);
    
          if (remember) localStorage.setItem("sp_token", res.token);
          alert("Bem-vindo!");
          // ex.: navigate("/dashboard")
        } catch (err: unknown) {
          if (err && typeof err === "object" && "status" in err) {
            const status = (err as { status?: number }).status;
            if (status === 401) {
              alert("Credenciais inválidas");
              setSenha("");
            } else {
              alert("Erro de servidor");
            }
          } else {
            alert("Erro de conexão. Tente novamente.");
          }
        } finally {
          setLoading(false);
        }
      }
    return (
        <form
          onSubmit={handleEntrar}
          className="!w-full !max-w-md !bg-white !rounded-2xl !shadow !p-6 !space-y-5"
        >
          <header className="!text-center">
            <h2 className="!text-2xl !font-semibold">Study Planner</h2>
            <p className="!text-sm !text-gray-500">Use seu email e senha</p>
          </header>

          <div className="!space-y-1">
            <label htmlFor="email" className="!text-sm !font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="!w-full !rounded-xl !border !px-3 !py-2 !outline-none !focus:ring-2 !focus:ring-black/10"
              placeholder="voce@exemplo.com"
            />
            {erros.email && (
              <p className="!text-sm !text-red-600">{erros.email}</p>
            )}
          </div>

          <div className="!space-y-1">
            <label htmlFor="password" className="!text-sm !font-medium">
              Senha
            </label>
            <input
              id="password"
              name="password"
              autoComplete="current-password"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              disabled={loading}
              className="!w-full !rounded-xl !border !px-3 !py-2 !outline-none !focus:ring-2 !focus:ring-black/10"
              placeholder="••••••••"
            />
            {erros.senha && (
              <p className="!text-sm !text-red-600">{erros.senha}</p>
            )}
          </div>

          <div className="!flex !items-center !justify-between">
            <label className="!inline-flex !items-center !gap-2 !text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                disabled={loading}
              />
              Lembrar de mim
            </label>
            <a href="#" className="!text-sm !text-blue-600 !hover:underline">
              Esqueci a senha
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="!w-full !rounded-xl !bg-blue-600 !text-white !py-2 !font-medium !border !disabled:opacity-60 !cursor-pointer"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
    )
}
    
