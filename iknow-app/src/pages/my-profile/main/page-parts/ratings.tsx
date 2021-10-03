import React from 'react'
import ReactTooltip from 'react-tooltip'
import { Icons } from '../../../../components'
import { useMyProfile } from '../../../../providers/my-profile'
import variables from '../../../../theme/variables'

const Ratings: React.FC = () => {
    const myProfileProvider = useMyProfile()

    const renderStars = () => {
        const evaluationsMedia = myProfileProvider.myProfileData.evaluationsMedia

        return Array(5).fill('').map((_, index) => {
            const position = (index + 1)
            const StarIcon = evaluationsMedia >= position ? Icons.StarFull : evaluationsMedia > position - 1 ? Icons.StarHalf : Icons.StarEmpty
            return <StarIcon key={position} color={variables.quaternaryColor} />
        })
    }

    return (
        <div className="my-profile-page-ratings-container">
            <div className="my-profile-page-ratings-container-stars-container">
                {renderStars()}
            </div>
            <div className="my-profile-page-ratings-container-evaluation-container">
                {(myProfileProvider.myProfileData.evaluationsMedia || 0).toFixed(1)}
            </div>
            <div className="my-profile-page-ratings-container-quantity-container">
                (
                {myProfileProvider.myProfileData.totalEvalutions}
                )
            </div>
            <div className="my-profile-page-ratings-container-info-container">
                <div className="my-profile-page-ratings-container-info-container-icon-container" data-tip data-for="my-profile-page-ratings-info">
                    <Icons.Info
                        size="20px"
                        color={variables.iconsColor}
                    />
                </div>
                <ReactTooltip multiline className="tooltip" id="my-profile-page-ratings-info">
                    <p className="text">
                        Aqui você pode ver sua avaliação e quantas vezes você foi avaliado, para aumentar a avaliação, é preciso completar missões
                    </p>
                </ReactTooltip>
            </div>
        </div>
    )
}

export default Ratings
