import { AppProvider } from './app'
import { LoginProvider } from './login'
import { RegisterProvider } from './register'
import { MyProfileProvider } from './my-profile'
import { ProfileProvider } from './profile'
import { FieldEditingProvider } from './field-editing'
import { MissionsProvider } from './missions'
import { MyMissionsProvider } from './my-missions'
import { MyAcceptedMissionsProvider } from './my-accepted-missions'
import { GamificationProvider } from './gamification'
import { NetworkProvider } from './network'
import { SearchContactsProvider } from './search-contacts'

const Providers: React.FC = ({ children }) => (
    <AppProvider>
        <FieldEditingProvider>
            <LoginProvider>
                <RegisterProvider>
                    <GamificationProvider>
                        <MyProfileProvider>
                            <ProfileProvider>
                                <MyMissionsProvider>
                                    <MissionsProvider>
                                        <MyAcceptedMissionsProvider>
                                            <NetworkProvider>
                                                <SearchContactsProvider>
                                                    {children}
                                                </SearchContactsProvider>
                                            </NetworkProvider>
                                        </MyAcceptedMissionsProvider>
                                    </MissionsProvider>
                                </MyMissionsProvider>
                            </ProfileProvider>
                        </MyProfileProvider>
                    </GamificationProvider>
                </RegisterProvider>
            </LoginProvider>
        </FieldEditingProvider>
    </AppProvider>
)

export default Providers
