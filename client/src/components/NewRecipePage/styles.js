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
    recipeName: {
        minWidth: '40vw',
    },
    description: {
        minWidth: '40vw',
    },
    servings: {
        minWidth: '40vw',
    },
    timeNeeded: {
        minWidth: '40vw',
    },
    ingredients: {
        minWidth: '40vw',
    },
    steps: {
        minWidth: '40vw',
    },
    notes: {
        minWidth: '40vw',
    },
    fileInput: {
        padding: '10px 0px 10px 0px',
    },
    buttonSubmitDiv: {
        padding: '10px 0px 10px 0px',
    }

}
));