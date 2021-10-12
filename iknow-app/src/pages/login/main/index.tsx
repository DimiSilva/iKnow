import React, { useEffect } from 'react'
import { Card, PageHeader, Input, Button, LinkButton } from '../../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'
import { useLogin } from '../../../providers/login'
import { useApp } from '../../../providers/app'

const Login: React.FC<IComponentProps> = () => {
    const loginContext = useLogin()
    const appContext = useApp()

    useEffect(loginContext.clearForm, [])

    return (
        <div className="login-page">
            <Card style={{ maxWidth: '600px' }}>
                <div className="login-page-card-content">
                    <PageHeader title={appContext.currentPageTitle} />
                    <div className="login-page-card-content-internal">
                        <form className="login-page-card-content-internal-form">
                            <div className="login-page-card-content-internal-form-input-container">
                                <Input
                                    label="E-mail"
                                    value={loginContext.formData.email}
                                    onChange={(value) => loginContext.setFormData({ ...loginContext.formData, email: value })}
                                    maxLength={100}
                                    type="email"
                                    invalidDataMessage={loginContext.submitted ? loginContext.invalidFormData.email : undefined}
                                />
                            </div>
                            <div className="login-page-card-content-internal-form-input-container">
                                <Input
                                    label="Senha"
                                    value={loginContext.formData.password}
                                    onChange={(value) => loginContext.setFormData({ ...loginContext.formData, password: value })}
                                    maxLength={30}
                                    type="password"
                                    invalidDataMessage={loginContext.submitted ? loginContext.invalidFormData.password : undefined}
                                />
                            </div>
                        </form>
                        <div className="login-page-card-content-internal-action-buttons-container">
                            <div className="login-page-card-content-internal-action-buttons-container-button-container">
                                <Button text="Entrar" onClick={loginContext.login} />
                            </div>
                            {/* <div className="login-page-link-button-container">
                                <LinkButton text="Recuperar Senha" onClick={() => {}} />
                            </div> */}
                            <div className="login-page-card-content-internal-action-buttons-container-link-button-container">
                                <LinkButton text="Cadastrar-se" onClick={() => appContext.navigateTo('/cadastro', true)} />
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
