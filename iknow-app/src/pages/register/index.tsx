import React, { useState } from 'react'
import { phoneMask, removeMaskOfNumbers } from 'iknow-common/utils'
import { Card, PageHeader, Input, Button, LinkButton } from '../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'
import { useRegister } from '../../providers/register'
import { useApp } from '../../providers/app'

const Register: React.FC<IComponentProps> = () => {
    const registerProvider = useRegister()
    const appProvider = useApp()

    return (
        <div className="register-page-container">
            <Card style={{ maxWidth: '600px' }}>
                <div className="register-page-card-internal-container">
                    <PageHeader title={appProvider.currentPageTitle} />
                    <div className="register-page-content-container">
                        <form className="register-page-form">
                            <div className="register-page-input-container">
                                <Input
                                    label="Nome"
                                    value={registerProvider.formData.name}
                                    onChange={(value) => registerProvider.setFormData({ ...registerProvider.formData, name: value })}
                                    maxLength={100}
                                    invalidDataMessage={registerProvider.submitted ? registerProvider.invalidFormData.name : undefined}
                                />
                            </div>
                            <div className="register-page-input-container">
                                <Input
                                    label="E-mail"
                                    value={registerProvider.formData.email}
                                    onChange={(value) => registerProvider.setFormData({ ...registerProvider.formData, email: value })}
                                    maxLength={100}
                                    invalidDataMessage={registerProvider.submitted ? registerProvider.invalidFormData.email : undefined}
                                />
                            </div>
                            <div className="register-page-input-container">
                                <Input
                                    label="Telefone"
                                    value={phoneMask(registerProvider.formData.phone)}
                                    onChange={(value) => registerProvider.setFormData({ ...registerProvider.formData, phone: removeMaskOfNumbers(value) })}
                                    maxLength={15}
                                    invalidDataMessage={registerProvider.submitted ? registerProvider.invalidFormData.phone : undefined}
                                />
                            </div>
                            <div className="register-page-input-container">
                                <Input
                                    label="Senha"
                                    value={registerProvider.formData.password}
                                    onChange={(value) => registerProvider.setFormData({ ...registerProvider.formData, password: value })}
                                    maxLength={30}
                                    type="password"
                                    invalidDataMessage={registerProvider.submitted ? registerProvider.invalidFormData.password : undefined}
                                />
                            </div>
                        </form>
                        <div className="register-page-action-buttons-container">
                            <div className="register-page-button-container">
                                <Button text="Cadastrar" onClick={registerProvider.register} loading={registerProvider.loadingsData.submitting} />
                            </div>
                            <div className="register-page-link-button-container">
                                <LinkButton text="Voltar" onClick={() => appProvider.navigateTo('/login')} />
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
