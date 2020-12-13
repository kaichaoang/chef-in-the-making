import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        fontFamily: 'Nunito',
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    webName: {
        fontFamily: 'Nunito',
        // pushes the login button to the end
        flex: '1'        
    },
    webNameGrid: {
        paddingBottom: '1em'
    },
}
));