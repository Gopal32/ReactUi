import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: '#009973',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    marginLeft: '15px',
  },
  heading: {
    color: 'rgba(255, 255, 255)',
    marginLeft: '5px',
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '750px',
    marginLeft: '250px',
  },
  wrapIcon:{
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
}));
