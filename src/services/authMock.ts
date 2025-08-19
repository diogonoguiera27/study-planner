// src/services/authMock.ts
export type AuthSuccess = {
  token: string;
  user: { id: string; email: string };
};

export type AuthError = {
  status?: number;   
  network?: boolean; 
  message?: string;
};

export async function authLoginMock(email: string, senha: string): Promise<AuthSuccess> {
  await new Promise(r => setTimeout(r, 800));

  if (email === "aluno@study.com" && senha === "123456") {
    return { token: "token_mock_123", user: { id: "1", email } };
  }

  if (Math.random() < 0.1) {
    const e: AuthError = { network: true, message: "Network error" };
    throw e;
  }

  const e: AuthError = { status: 401, message: "Credenciais inválidas" };
  throw e;
}
