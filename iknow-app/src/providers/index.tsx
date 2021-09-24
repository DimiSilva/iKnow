import { AppProvider } from './app'
import { LoginProvider } from './login'
import { RegisterProvider } from './register'
import { MyProfileProvider } from './my-profile'
import { ProfileProvider } from './profile'
import { FieldEditingProvider } from './field-editing'
import { MissionsProvider } from './missions'
import { MyMissionsProvider } from './my-missions'

const Providers: React.FC = ({ children }) => (
    <AppProvider>
        <FieldEditingProvider>
            <LoginProvider>
                <RegisterProvider>
                    <MyProfileProvider>
                        <ProfileProvider>
                            <MyMissionsProvider>
                                <MissionsProvider>
                                    {children}
                                </MissionsProvider>
                            </MyMissionsProvider>
                        </ProfileProvider>
                    </MyProfileProvider>
                </RegisterProvider>
            </LoginProvider>
        </FieldEditingProvider>
    </AppProvider>
)

export default Providers
