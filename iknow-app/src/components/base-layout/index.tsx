import {
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react'
import './style.scss'

import { ellipse, square, triangle } from 'ionicons/icons'
import React from 'react'
import { PageHeader } from '../index'

import IComponentProps from './interfaces/i-component-props'

const BaseLayout: React.FC<IComponentProps> = ({ children }) => (
    <IonTabs>
        <PageHeader />
        {children}
        <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={triangle} />
                <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={ellipse} />
                <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={square} />
                <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
)

export default BaseLayout
