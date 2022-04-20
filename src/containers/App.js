import './App.css';
import { requestCats, setSearchField } from '../actions';
import MainPage from '../components/MainPage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  searchField: state.searchCats.searchField,
  cats: state.requestCats.cats,
  isPending: state.requestCats.isPending,
  error: state.requestCats.error
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestCats: () => dispatch(requestCats())
});

const App = (props) => {
  return <MainPage {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
