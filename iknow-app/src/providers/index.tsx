import { AppProvider } from './app'
import { LoginProvider } from './login'
import { RegisterProvider } from './register'
import { MyProfileProvider } from './my-profile'
import { FieldEditingProvider } from './field-editing'

const Providers: React.FC = ({ children }) => (
    <AppProvider>
        <FieldEditingProvider>
            <LoginProvider>
                <RegisterProvider>
                    <MyProfileProvider>
                        {children}
                    </MyProfileProvider>
                </RegisterProvider>
            </LoginProvider>
        </FieldEditingProvider>
    </AppProvider>
)

export default Providers
