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
    basePaper: {
        width: '50vw',   
        padding: '10px 0px 10px 0px', 
    },
    paperGrid: {
        padding: '10px 0px 10px 0px', 
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    recipeFormHeader: {
        fontFamily: 'Nunito',
        padding: '10px 0px 0px 0px',
    },
    fileInput: {
        padding: '10px 0px 10px 0px',
    },
    buttonSubmitDiv: {
        padding: '10px 0px 10px 0px',
    }

}
));