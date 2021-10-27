import React, { useEffect } from 'react'
import { phoneMask, removeMaskOfNumbers } from 'iknow-common/utils'
import { Card, PageHeader, Input, Button, LinkButton } from '../../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'
import { useRegister } from '../../../providers/register'
import { useApp } from '../../../providers/app'

const Register: React.FC<IComponentProps> = () => {
    const registerContext = useRegister()
    const appContext = useApp()

    useEffect(registerContext.clearForm, [])

    return (
        <div className="register-page">
            <Card style={{ maxWidth: '600px' }}>
                <div className="register-page-card-content">
                    <PageHeader title={appContext.currentPageTitle} />
                    <div className="register-page-card-content-internal">
                        <form className="register-page-card-content-internal-form">
                            <div className="register-page-card-content-internal-form-input-container">
                                <Input
                                    label="Nome*"
                                    value={registerContext.formData.name}
                                    onChange={(value) => registerContext.setFormData({ ...registerContext.formData, name: value })}
                                    maxLength={100}
                                    invalidDataMessage={registerContext.submitted ? registerContext.invalidFormData.name : undefined}
                                />
                            </div>
                            <div className="register-page-card-content-internal-form-input-container">
                                <Input
                                    label="E-mail*"
                                    value={registerContext.formData.email}
                                    onChange={(value) => registerContext.setFormData({ ...registerContext.formData, email: value })}
                                    maxLength={100}
                                    invalidDataMessage={registerContext.submitted ? registerContext.invalidFormData.email : undefined}
                                />
                            </div>
                            <div className="register-page-card-content-internal-form-input-container">
                                <Input
                                    label="Telefone"
                                    value={phoneMask(registerContext.formData.phone)}
                                    onChange={(value) => registerContext.setFormData({ ...registerContext.formData, phone: removeMaskOfNumbers(value) })}
                                    maxLength={15}
                                    invalidDataMessage={registerContext.submitted ? registerContext.invalidFormData.phone : undefined}
                                />
                            </div>
                            <div className="register-page-card-content-internal-form-input-container">
                                <Input
                                    label="Senha*"
                                    value={registerContext.formData.password}
                                    onChange={(value) => registerContext.setFormData({ ...registerContext.formData, password: value })}
                                    maxLength={30}
                                    type="password"
                                    invalidDataMessage={registerContext.submitted ? registerContext.invalidFormData.password : undefined}
                                />
                            </div>
                            <div className="register-page-card-content-internal-form-input-container">
                                <Input
                                    label="Confirmar Senha*"
                                    value={registerContext.formData.passwordConfirm}
                                    onChange={(value) => registerContext.setFormData({ ...registerContext.formData, passwordConfirm: value })}
                                    maxLength={30}
                                    type="password"
                                    invalidDataMessage={registerContext.submitted ? registerContext.invalidFormData.passwordConfirm : undefined}
                                />
                            </div>
                        </form>
                        <div className="register-page-card-content-internal-action-buttons-container">
                            <div className="register-page-card-content-internal-action-buttons-container-button-container">
                                <Button text="Cadastrar" onClick={registerContext.register} loading={registerContext.loadingsData.submitting} />
                            </div>
                            <div className="register-page-card-content-internal-action-buttons-container-link-button-container">
                                <LinkButton text="Voltar" onClick={() => appContext.navigateTo('/login')} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

Register.defaultProps = {
}

export default Register
