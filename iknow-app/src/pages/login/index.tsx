import React, { useState } from 'react'
import { Card, PageHeader, Input, Button, LinkButton } from '../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'
import { useLogin } from '../../providers/login'
import { useApp } from '../../providers/app'

const Login: React.FC<IComponentProps> = ({ pageTitle }) => {
    const { loginData, setLoginData, invalidLoginData, loadingsData, submitted, login } = useLogin()
    const { navigateTo } = useApp()

    return (
        <div className="login-page-container">
            <Card style={{ maxWidth: '600px' }}>
                <div className="login-page-card-internal-container">
                    <PageHeader title={pageTitle} />
                    <div className="login-page-content-container">
                        <form className="login-page-form">
                            <div className="login-page-input-container">
                                <Input
                                    label="E-mail"
                                    value={loginData.email}
                                    onChange={(value) => setLoginData({ ...loginData, email: value })}
                                    maxLength={100}
                                    type="email"
                                    invalidDataMessage={submitted ? invalidLoginData.email : undefined}
                                />
                            </div>
                            <div className="login-page-input-container">
                                <Input
                                    label="Senha"
                                    value={loginData.password}
                                    onChange={(value) => setLoginData({ ...loginData, password: value })}
                                    maxLength={30}
                                    type="password"
                                    invalidDataMessage={submitted ? invalidLoginData.password : undefined}
                                />
                            </div>
                        </form>
                        <div className="login-page-action-buttons-container">
                            <div className="login-page-button-container">
                                <Button text="Entrar" onClick={login} />
                            </div>
                            <div className="login-page-link-button-container">
                                <LinkButton text="Recuperar Senha" onClick={() => {}} />
                            </div>
                            <div className="login-page-link-button-container">
                                <LinkButton text="Cadastrar-se" onClick={() => navigateTo('/cadastro')} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

Login.defaultProps = {
    pageTitle: 'Página',
}

export default Login

// login
// criar conta
