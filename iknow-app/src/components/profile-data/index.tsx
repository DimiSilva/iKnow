import React from 'react'
import { Collapse, Icons } from '../index'
import IComponentProps from './interfaces/i-component-props'
import './style.scss'

const ProfileData: React.FC<IComponentProps> = ({ title, info, onClickEdit, emptyContentMessage, content }) => (
    <div className="profile-data">
        <Collapse
            title={title}
            info={info}
            emptyContentMessage={emptyContentMessage}
            action={onClickEdit ? {
                icon: Icons.Edit,
                onClick: onClickEdit,
            } : undefined}
        >
            {content
                ? <div className="profile-data-content">{content}</div>
                : ''}
        </Collapse>
    </div>
)

ProfileData.defaultProps = { onClickEdit: undefined }

export default ProfileData
