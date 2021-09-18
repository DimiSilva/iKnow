import React from 'react'
import { useMyProfile } from '../../../../providers/my-profile'
import { useFieldEditing } from '../../../../providers/field-editing'

const Ratings: React.FC = () => {
    const fieldEditingProvider = useFieldEditing()
    const myProfileProvider = useMyProfile()

    return (
        <div className="profile-page-ratings-container">
            <div className="profile-page-ratings-container-master-rating-container">a</div>
            <div className="profile-page-ratings-container-apprentice-rating-container">a</div>
        </div>
    )
}

export default Ratings
