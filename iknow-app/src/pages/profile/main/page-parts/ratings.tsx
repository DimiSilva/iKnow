import React from 'react'
import ReactTooltip from 'react-tooltip'
import { Icons } from '../../../../components'
import { useProfile } from '../../../../providers/profile'
import variables from '../../../../theme/variables'

const Ratings: React.FC = () => {
    const profileProvider = useProfile()

    const renderStars = () => {
        const evaluationsMedia = profileProvider.profileData.evaluationsMedia

        return Array(5).fill('').map((_, index) => {
            const position = (index + 1)
            const StarIcon = evaluationsMedia >= position ? Icons.StarFull : evaluationsMedia > position - 1 ? Icons.StarHalf : Icons.StarEmpty
            return <StarIcon key={position} color={variables.quaternaryColor} />
        })
    }

    return (
        <div className="profile-page-ratings-container">
            <div className="profile-page-ratings-container-stars-container">
                {renderStars()}
            </div>
            <div className="profile-page-ratings-container-evaluation-container">
                {(profileProvider.profileData.evaluationsMedia || 0).toFixed(1)}
            </div>
            <div className="profile-page-ratings-container-quantity-container">
                (
                {profileProvider.profileData.totalEvalutions}
                )
            </div>
            <div className="profile-page-ratings-container-info-container">
                <div className="profile-page-ratings-container-info-container-icon-container" data-tip data-for="profile-page-ratings-info">
                    <Icons.Info
                        size="20px"
                        color={variables.iconsColor}
                    />
                </div>
                <ReactTooltip multiline className="tooltip" id="profile-page-ratings-info">
                    <p className="text">Aqui você pode ver a avaliação do usuário e quantas vezes ele foi avaliado</p>
                </ReactTooltip>
            </div>
        </div>
    )
}

export default Ratings
