import { LoginProvider } from './login'
import { RegisterProvider } from './register'

const Providers: React.FC = ({ children }) => (
    <LoginProvider>
        <RegisterProvider>
            {children}
        </RegisterProvider>
    </LoginProvider>
)

export default Providers
