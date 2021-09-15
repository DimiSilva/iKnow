import { AppProvider } from './app'
import { LoginProvider } from './login'
import { RegisterProvider } from './register'

const Providers: React.FC = ({ children }) => (
    <AppProvider>
        <LoginProvider>
            <RegisterProvider>
                {children}
            </RegisterProvider>
        </LoginProvider>
    </AppProvider>
)

export default Providers
