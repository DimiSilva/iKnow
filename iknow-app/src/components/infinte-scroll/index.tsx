import './style.scss'

import React, { useRef, useEffect } from 'react'
import { PropagateLoader } from 'react-spinners'
import IComponentProps from './interfaces/i-component-props'
import variables from '../../theme/variables'

const InfiniteScroll: React.FC<IComponentProps> = ({ children, onScrollEnd, inverse, loading, emptyMessage, scrollToBottomOnUpdate }) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (scrollToBottomOnUpdate)
            ref.current?.scrollTo({ top: ref.current?.scrollHeight })
    }, [children])

    return (
        <div
            ref={ref}
            className="infinite-scroll"
            onScroll={(e) => {
                const reached = inverse
                    ? e.currentTarget.scrollTop === 0
                    : e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight

                if (reached && !loading) onScrollEnd()
            }}
        >
            {inverse && loading ? (
                <div className="infinite-scroll-loading-container">
                    <PropagateLoader color={variables.quaternaryColor} size="12px" speedMultiplier={1} />
                </div>
            ) : ''}
            {children || (!loading ? <div className="infinite-scroll-empty-message-container"><p>{emptyMessage}</p></div> : '')}
            {!inverse && loading ? (
                <div className="infinite-scroll-loading-container">
                    <PropagateLoader color={variables.quaternaryColor} size="12px" speedMultiplier={1} />
                </div>
            ) : ''}
        </div>
    )
}

InfiniteScroll.defaultProps = { loading: false, inverse: false, scrollToBottomOnUpdate: false }

export default InfiniteScroll
