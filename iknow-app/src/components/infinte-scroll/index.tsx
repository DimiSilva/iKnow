import './style.scss'

import React from 'react'
import { PropagateLoader } from 'react-spinners'
import IComponentProps from './interfaces/i-component-props'
import variables from '../../theme/variables'

const InfiniteScroll: React.FC<IComponentProps> = ({ children, onScrollEnd, loading, emptyMessage }) => (
    <div
        className="infinite-scroll"
        onScroll={(e) => {
            const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight
            if (bottom && !loading) onScrollEnd()
        }}
    >
        {children || (!loading ? <div className="infinite-scroll-empty-message-container">{emptyMessage}</div> : '')}
        {loading ? (
            <div className="infinite-scroll-loading-container">
                <PropagateLoader color={variables.quaternaryColor} size="12px" speedMultiplier={1} />
            </div>
        ) : ''}
    </div>
)

InfiniteScroll.defaultProps = { loading: false }

export default InfiniteScroll
