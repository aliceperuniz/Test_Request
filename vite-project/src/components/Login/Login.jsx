import React from 'react'

const Login = () => {
  return (
    <div className="container">
        <form>
            <h1>Acesse o sistema</h1>
            <div>
                <input type="email" placeholder="E-mail"></input>
                <div className="icone"></div>
            </div>
            <div>
            <input type="password" placeholder="Senha"></input>
            <div className="icone"></div>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox"></input>
                    Lembrar-me
                </label>
                <a href="#">Esqueci minha senha</a>
            </div>
            <button>Entrar</button>
            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href="#">Cadastre-se</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login