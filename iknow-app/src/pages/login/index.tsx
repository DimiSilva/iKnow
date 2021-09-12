import React, { useState } from 'react'
import { Card, PageHeader, Input, Button, LinkButton } from '../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'

const Login: React.FC<IComponentProps> = ({ pageTitle }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                                    value={email}
                                    onChange={setEmail}
                                    maxLength={100}
                                    type="email"
                                />
                            </div>
                            <div className="login-page-input-container">
                                <Input
                                    label="Senha"
                                    value={password}
                                    onChange={setPassword}
                                    maxLength={30}
                                    type="password"
                                />
                            </div>
                        </form>
                        <div className="login-page-action-buttons-container">
                            <div className="login-page-button-container">
                                <Button text="Entrar" onClick={() => {}} />
                            </div>
                            <div className="login-page-link-button-container">
                                <LinkButton text="Recuperar Senha" onClick={() => {}} />
                            </div>
                            <div className="login-page-link-button-container">
                                <LinkButton text="Cadastrar-se" onClick={() => {}} />
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
