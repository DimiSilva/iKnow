import React, { createContext, useContext, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import dataModels from './data-models'
import { useApp } from '../app'

const FieldEditingContext = createContext(dataModels.context)

export const FieldEditingProvider: React.FC = ({ children }) => {
    const appProvider = useApp()
    const toastsProvider = useToasts()

    const [alreadyRanOnce, setAlreadyRanOnce] = useState(false)
    const [formData, setFormData] = useState(dataModels.formData)
    const [loadingsData, setLoadingsData] = useState(dataModels.loadings)
    const [submitted, setSubmitted] = useState(false)
    const [invalidFormData, setInvalidFormData] = useState(dataModels.invalidFormData)
    const [fieldContext, setFieldContext] = useState(dataModels.fieldContext)

    useEffect(() => { setAlreadyRanOnce(true) }, [])
    useEffect(() => {
        if (fieldContext.isValidCheck) {
            if (!fieldContext.isValidCheck(formData.field)) setInvalidFormData({ field: fieldContext.invalidFieldMessage || '' })
            else setInvalidFormData({ field: undefined })
        }
    }, [formData.field])

    const save = async () => {
        setSubmitted(true)
        if (Object.values(invalidFormData).some((message) => message !== undefined)) return
        setLoadingsData({ ...loadingsData, submitting: true })
        await fieldContext.onSave({ [fieldContext.fieldKey]: formData.field })
        if (fieldContext.successMessage) toastsProvider.addToast(fieldContext.successMessage, { autoDismiss: true, appearance: 'success' })
        setLoadingsData({ ...loadingsData, submitting: false })
        appProvider.navigateTo(fieldContext.backPath)
    }

    const clearForm = () => {
        setFormData(dataModels.formData)
        setSubmitted(false)
    }

    const call: typeof dataModels.context.call = (newFieldContext) => {
        setFieldContext(newFieldContext)
        if (newFieldContext.initialValue) setFormData({ field: newFieldContext.initialValue })
        appProvider.navigateTo('/editando')
    }

    const quit = () => {
        clearForm()
        setFieldContext(dataModels.fieldContext)
    }

    return (
        <FieldEditingContext.Provider value={{ formData, setFormData, invalidFormData, loadingsData, submitted, save, clearForm, call, quit, fieldContext }}>
            {children}
        </FieldEditingContext.Provider>
    )
}

export const useFieldEditing = () => useContext(FieldEditingContext)
