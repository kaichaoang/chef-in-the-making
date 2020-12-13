import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: '#F7F7F7',
    },
    detailsPaper: {
        width: '50vw',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    contentDiv: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300',
        maxWidth: '400',
    },
    fields: {
        minWidth: '40vw',
    },
    createAccountTitle: {
        fontFamily: 'Fira Sans',
    },
    webName: {
        fontFamily: 'Nunito',
        // pushes the login button to the end
        flex: '1'        
    },
    webNameGrid: {
        paddingBottom: '1em'
    },
    createAccountTitleGrid: {
        paddingBottom: '1em'
    },
    loginButton: {
        textTransform: 'capitalize',
    },
    buttonHeightSpacing: {
        height: '10px'
    },
}
));