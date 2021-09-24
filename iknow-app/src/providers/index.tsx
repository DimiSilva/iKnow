import { AppProvider } from './app'
import { LoginProvider } from './login'
import { RegisterProvider } from './register'
import { MyProfileProvider } from './my-profile'
import { FieldEditingProvider } from './field-editing'
import { MissionsProvider } from './missions'
import { MyMissionsProvider } from './my-missions'

const Providers: React.FC = ({ children }) => (
    <AppProvider>
        <FieldEditingProvider>
            <LoginProvider>
                <RegisterProvider>
                    <MyProfileProvider>
                        <MyMissionsProvider>
                            <MissionsProvider>
                                {children}
                            </MissionsProvider>
                        </MyMissionsProvider>
                    </MyProfileProvider>
                </RegisterProvider>
            </LoginProvider>
        </FieldEditingProvider>
    </AppProvider>
)

export default Providers
