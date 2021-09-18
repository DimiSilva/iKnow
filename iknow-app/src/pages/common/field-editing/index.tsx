import React, { useEffect, useState } from 'react'
import { phoneMask, removeMaskOfNumbers } from 'iknow-common/utils'
import { Card, PageHeader, Input, Button, LinkButton, Collapse, Icons, TextArea } from '../../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'
import { useApp } from '../../../providers/app'
import { useFieldEditing } from '../../../providers/field-editing'

const FieldEditing: React.FC<IComponentProps> = () => {
    const appProvider = useApp()
    const fieldEditingProvider = useFieldEditing()

    useEffect(() => {
        setTimeout(() => {
            appProvider.setCurrentPageTitle(fieldEditingProvider.fieldContext.pageTitle)
            appProvider.setBackPath(fieldEditingProvider.fieldContext.backPath)
        }, 10)
        return fieldEditingProvider.quit
    }, [])

    return (
        <div className="field-edit">
            <div className="field-edit-input-container">
                { fieldEditingProvider.fieldContext.inputType === 'textArea'
                    ? (
                        <TextArea
                            onChange={(value) => fieldEditingProvider.setFormData({ field: value })}
                            value={fieldEditingProvider.formData.field}
                            label={fieldEditingProvider.fieldContext.fieldLabel}
                            maxLength={fieldEditingProvider.fieldContext.fieldMaxLength}
                            invalidDataMessage={
                                fieldEditingProvider.submitted && fieldEditingProvider.invalidFormData.field
                                    ? fieldEditingProvider.fieldContext.invalidFieldMessage
                                    : undefined
                            }
                        />
                    )
                    : (
                        <Input
                            onChange={(value) => fieldEditingProvider.setFormData({ field: value })}
                            value={fieldEditingProvider.formData.field}
                            label={fieldEditingProvider.fieldContext.fieldLabel}
                            maxLength={fieldEditingProvider.fieldContext.fieldMaxLength}
                            invalidDataMessage={
                                fieldEditingProvider.submitted && fieldEditingProvider.invalidFormData.field
                                    ? fieldEditingProvider.fieldContext.invalidFieldMessage
                                    : undefined
                            }
                            type={fieldEditingProvider.fieldContext.inputType}
                        />
                    )}
            </div>
            <div className="field-edit-actions-buttons-container">
                <Button onClick={fieldEditingProvider.save} text="Salvar" loading={fieldEditingProvider.loadingsData.submitting} />
            </div>
        </div>
    )
}

FieldEditing.defaultProps = {
}

export default FieldEditing
