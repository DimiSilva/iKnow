/* eslint-disable max-len */
import IDefaultIconProps from './interfaces/i-default-icon-props'

const Info: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
)

Info.defaultProps = { size: '24px', color: '#FFFFFF' }

const BackArrow: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
)

BackArrow.defaultProps = { size: '24px', color: '#FFFFFF' }

const Book: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <g><rect fill="none" height="24" width="24" /></g>
        <g>
            <g />
            <g>
                <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z" />
                <g>
                    <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z" />
                    <path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z" />
                    <path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z" />
                </g>
            </g>
        </g>
    </svg>
)

Book.defaultProps = { size: '24px', color: '#FFFFFF' }

const Assignment: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
)

Assignment.defaultProps = { size: '24px', color: '#FFFFFF' }

const Chat: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
    </svg>
)

Chat.defaultProps = { size: '24px', color: '#FFFFFF' }

const Edit: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
)

Edit.defaultProps = { size: '24px', color: '#FFFFFF' }

const ExpandArrow: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
    </svg>
)

ExpandArrow.defaultProps = { size: '24px', color: '#FFFFFF' }

const Filter: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <g>
            <path d="M0,0h24 M24,24H0" fill="none" />
            <path d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" />
            <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
    </svg>
)

Filter.defaultProps = { size: '24px', color: '#FFFFFF' }

const Forward: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </svg>
)

Forward.defaultProps = { size: '24px', color: '#FFFFFF' }

const Person: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
)

Person.defaultProps = { size: '24px', color: '#FFFFFF' }

const PersonSearch: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <g><rect fill="none" height="24" width="24" /></g>
        <g>
            <g>
                <circle cx="10" cy="8" r="4" />
                <path d="M10.35,14.01C7.62,13.91,2,15.27,2,18v2h9.54C9.07,17.24,10.31,14.11,10.35,14.01z" />
                <path d="M19.43,18.02C19.79,17.43,20,16.74,20,16c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,2.21,1.79,4,4,4c0.74,0,1.43-0.22,2.02-0.57 L20.59,22L22,20.59L19.43,18.02z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C18,17.1,17.1,18,16,18z" />
            </g>
        </g>
    </svg>
)

PersonSearch.defaultProps = { size: '24px', color: '#FFFFFF' }

const School: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
)

School.defaultProps = { size: '24px', color: '#FFFFFF' }

const Search: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
)

Search.defaultProps = { size: '24px', color: '#FFFFFF' }

const StarEmpty: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
    </svg>
)

StarEmpty.defaultProps = { size: '24px', color: '#FFFFFF' }

const StarFull: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
)

StarFull.defaultProps = { size: '24px', color: '#FFFFFF' }

const StarHalf: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <g>
            <rect fill="none" height="24" width="24" x="0" />
        </g>
        <g>
            <g>
                <g>
                    <path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z" />
                </g>
            </g>
        </g>
    </svg>
)

StarHalf.defaultProps = { size: '24px', color: '#FFFFFF' }

const World: React.FC<IDefaultIconProps> = ({ size, color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
)

World.defaultProps = { size: '24px', color: '#FFFFFF' }

export default {
    Info,
    BackArrow,
    Book,
    Assignment,
    Chat,
    Edit,
    ExpandArrow,
    Filter,
    Forward,
    Person,
    PersonSearch,
    School,
    Search,
    StarEmpty,
    StarFull,
    StarHalf,
    World,
}
