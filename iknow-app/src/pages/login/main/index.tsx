import React, { useEffect } from 'react'
import { Card, PageHeader, Input, Button, LinkButton } from '../../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'
import { useLogin } from '../../../providers/login'
import { useApp } from '../../../providers/app'

const Login: React.FC<IComponentProps> = () => {
    const loginProvider = useLogin()
    const appProvider = useApp()

    useEffect(loginProvider.clearForm, [])

    return (
        <div className="login-page">
            <Card style={{ maxWidth: '600px' }}>
                <div className="login-page-card-content">
                    <PageHeader title={appProvider.currentPageTitle} />
                    <div className="login-page-card-content-internal">
                        <form className="login-page-card-content-internal-form">
                            <div className="login-page-card-content-internal-form-input-container">
                                <Input
                                    label="E-mail"
                                    value={loginProvider.formData.email}
                                    onChange={(value) => loginProvider.setFormData({ ...loginProvider.formData, email: value })}
                                    maxLength={100}
                                    type="email"
                                    invalidDataMessage={loginProvider.submitted ? loginProvider.invalidFormData.email : undefined}
                                />
                            </div>
                            <div className="login-page-card-content-internal-form-input-container">
                                <Input
                                    label="Senha"
                                    value={loginProvider.formData.password}
                                    onChange={(value) => loginProvider.setFormData({ ...loginProvider.formData, password: value })}
                                    maxLength={30}
                                    type="password"
                                    invalidDataMessage={loginProvider.submitted ? loginProvider.invalidFormData.password : undefined}
                                />
                            </div>
                        </form>
                        <div className="login-page-card-content-internal-action-buttons-container">
                            <div className="login-page-card-content-internal-action-buttons-container-button-container">
                                <Button text="Entrar" onClick={loginProvider.login} />
                            </div>
                            {/* <div className="login-page-link-button-container">
                                <LinkButton text="Recuperar Senha" onClick={() => {}} />
                            </div> */}
                            <div className="login-page-card-content-internal-action-buttons-container-link-button-container">
                                <LinkButton text="Cadastrar-se" onClick={() => appProvider.navigateTo('/cadastro')} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

Login.defaultProps = {
}

export default Login

// login
// criar conta
