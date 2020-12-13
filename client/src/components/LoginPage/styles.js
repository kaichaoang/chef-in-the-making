import { makeStyles } from '@material-ui/core/styles';
import loginImage from '../../resources/images/login.jpg';

export default makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        flexGrow: '1',
    },
    gridContainer: {
        minHeight: '100vh',
    },
    imageGrid: {
        minHeight: '100vh',
        backgroundImage: `url(${loginImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'calc(100%) calc(20%)',
    },
    loginGrid: {
        padding: '10px',
    },
    contentDiv: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300',
        maxWidth: '400',
    },
    webName: {
        fontFamily: 'Nunito',
    },
    buttonHeightSpacing: {
        height: '10px'
    },
    loginButtonDiv: {
        fontFamily: 'Nunito',
    },
    signUpButtonDiv: {
        fontFamily: 'Nunito',
    },
    backToWelcomeButton: {
        textTransform: 'capitalize',
        fontFamily: 'Nunito',
    },
    signUpButton: {
        textTransform: 'capitalize',
        fontFamily: 'Nunito',
    },
    forgetPasswordButton: {
        fontFamily: 'Nunito',
    }
}
));