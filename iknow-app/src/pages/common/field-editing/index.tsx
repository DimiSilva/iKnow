import React, { useEffect, useState } from 'react'
import { phoneMask, removeMaskOfNumbers } from 'iknow-common/utils'
import { Card, PageHeader, Input, Button, LinkButton, Collapse, Icons, TextArea } from '../../../components'
import './style.scss'
import IComponentProps from './interfaces/i-component-props'
import { useApp } from '../../../providers/app'
import { useFieldEditing } from '../../../providers/field-editing'

const FieldEditing: React.FC<IComponentProps> = () => {
    const appContext = useApp()
    const fieldEditingContext = useFieldEditing()

    useEffect(() => {
        setTimeout(() => {
            appContext.setCurrentPageTitle(fieldEditingContext.fieldContext.pageTitle)
        }, 10)
        return fieldEditingContext.quit
    }, [])

    return (
        <div className="field-edit">
            <div className="field-edit-input-container">
                { fieldEditingContext.fieldContext.inputType === 'textArea'
                    ? (
                        <TextArea
                            onChange={(value) => fieldEditingContext.setFormData({ field: value })}
                            value={fieldEditingContext.formData.field}
                            label={fieldEditingContext.fieldContext.fieldLabel}
                            maxLength={fieldEditingContext.fieldContext.fieldMaxLength}
                            invalidDataMessage={
                                fieldEditingContext.submitted && fieldEditingContext.invalidFormData.field
                                    ? fieldEditingContext.fieldContext.invalidFieldMessage
                                    : undefined
                            }
                        />
                    )
                    : (
                        <Input
                            onChange={(value) => fieldEditingContext.setFormData({ field: value })}
                            value={fieldEditingContext.formData.field}
                            label={fieldEditingContext.fieldContext.fieldLabel}
                            maxLength={fieldEditingContext.fieldContext.fieldMaxLength}
                            invalidDataMessage={
                                fieldEditingContext.submitted && fieldEditingContext.invalidFormData.field
                                    ? fieldEditingContext.fieldContext.invalidFieldMessage
                                    : undefined
                            }
                            type={fieldEditingContext.fieldContext.inputType}
                        />
                    )}
            </div>
            <div className="field-edit-actions-buttons-container">
                <Button onClick={fieldEditingContext.save} text="Salvar" loading={fieldEditingContext.loadingsData.submitting} />
            </div>
        </div>
    )
}

FieldEditing.defaultProps = {
}

export default FieldEditing
