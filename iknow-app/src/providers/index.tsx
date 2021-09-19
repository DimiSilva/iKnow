import { AppProvider } from './app'
import { LoginProvider } from './login'
import { RegisterProvider } from './register'
import { MyProfileProvider } from './my-profile'
import { FieldEditingProvider } from './field-editing'
import { MissionsProvider } from './missions'

const Providers: React.FC = ({ children }) => (
    <AppProvider>
        <FieldEditingProvider>
            <LoginProvider>
                <RegisterProvider>
                    <MyProfileProvider>
                        <MissionsProvider>
                            {children}
                        </MissionsProvider>
                    </MyProfileProvider>
                </RegisterProvider>
            </LoginProvider>
        </FieldEditingProvider>
    </AppProvider>
)

export default Providers
