import React, { useState } from 'react'
import { phoneMask, removeMaskOfNumbers } from 'iknow-common/utils'
import { Card, PageHeader, Input, Button, LinkButton } from '../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'
import { useRegister } from '../../providers/register'

const Register: React.FC<IComponentProps> = ({ pageTitle, history }) => {
    const { registerData, setRegisterData, invalidRegisterData, loadingsData, submitted, register } = useRegister()

    return (
        <div className="register-page-container">
            <Card style={{ maxWidth: '600px' }}>
                <div className="register-page-card-internal-container">
                    <PageHeader title={pageTitle} />
                    <div className="register-page-content-container">
                        <form className="register-page-form">
                            <div className="register-page-input-container">
                                <Input
                                    label="Nome"
                                    value={registerData.name}
                                    onChange={(value) => setRegisterData({ ...registerData, name: value })}
                                    maxLength={100}
                                    invalidDataMessage={submitted ? invalidRegisterData.name : undefined}
                                />
                            </div>
                            <div className="register-page-input-container">
                                <Input
                                    label="E-mail"
                                    value={registerData.email}
                                    onChange={(value) => setRegisterData({ ...registerData, email: value })}
                                    maxLength={100}
                                    invalidDataMessage={submitted ? invalidRegisterData.email : undefined}
                                />
                            </div>
                            <div className="register-page-input-container">
                                <Input
                                    label="Telefone"
                                    value={phoneMask(registerData.phone)}
                                    onChange={(value) => setRegisterData({ ...registerData, phone: removeMaskOfNumbers(value) })}
                                    maxLength={15}
                                    invalidDataMessage={submitted ? invalidRegisterData.phone : undefined}
                                />
                            </div>
                            <div className="register-page-input-container">
                                <Input
                                    label="Senha"
                                    value={registerData.password}
                                    onChange={(value) => setRegisterData({ ...registerData, password: value })}
                                    maxLength={30}
                                    type="password"
                                    invalidDataMessage={submitted ? invalidRegisterData.password : undefined}
                                />
                            </div>
                        </form>
                        <div className="register-page-action-buttons-container">
                            <div className="register-page-button-container">
                                <Button text="Cadastrar" onClick={register} loading={loadingsData.submitting} />
                            </div>
                            <div className="register-page-link-button-container">
                                <LinkButton text="Voltar" onClick={() => history.push('/login')} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

Register.defaultProps = {
    pageTitle: 'Página',
}

export default Register
