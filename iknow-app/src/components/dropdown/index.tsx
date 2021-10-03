import './style.scss'

import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import ReactSelect from 'react-select'
import IComponentProps from './interfaces/i-component-props'
import { Icons } from '../index'
import variables from '../../theme/variables'

const Dropdown: React.FC<IComponentProps> = ({ label, options, onChange, onInputChange, value, inputValue, invalidDataMessage }) => (
    <div className={invalidDataMessage ? 'dropdown-with-error' : 'dropdown'}>
        <div className={invalidDataMessage ? 'dropdown-with-error-header' : 'dropdown-header'}>
            <div className={invalidDataMessage ? 'dropdown-with-error-header-label' : 'dropdown-header-label'}>
                <p>
                    {label}
                </p>
                {invalidDataMessage
                    ? (
                        <>
                            <div
                                className={invalidDataMessage ? 'dropdown-with-error-header-label-icon-container' : 'dropdown-header-label-icon-container'}
                                data-tip
                                data-for={`input-error-message-${label}`}
                            >
                                <Icons.Info
                                    size="13px"
                                    color={variables.errorColor}
                                />
                            </div>
                            <ReactTooltip multiline className="tooltip error" id={`input-error-message-${label}`}>
                                <p className="text">{invalidDataMessage}</p>
                            </ReactTooltip>
                        </>
                    ) : ''}

            </div>
        </div>
        <ReactSelect
            options={options}
            inputValue={inputValue}
            value={options.find((option) => option.value === value)}
            onChange={(e) => onChange(e?.value || '')}
            styles={{
                valueContainer: (provided) => ({
                    ...provided,
                    background: 'transparent',
                }),
                input: () => ({ }),
                singleValue: () => ({ color: variables.textColor }),
                indicatorsContainer: () => ({ }),
                control: () => ({ display: 'flex' }),
                indicatorSeparator: () => ({ }),
                menu: (provided) => ({
                    ...provided,
                    background: variables.primaryColor,
                }),
                option: (provided, { isSelected }) => ({
                    ...provided,
                    background: isSelected ? variables.quintenaryColor : 'transparent',
                    ':active': {
                        ...provided[':active'],
                        background: variables.quintenaryColor,
                    },

                }),
                dropdownIndicator: () => ({}),
            }}
            isSearchable
            onInputChange={(e) => onInputChange(e)}
            placeholder=""
        />
    </div>
)

Dropdown.defaultProps = { label: 'Label', invalidDataMessage: undefined }

export default Dropdown
