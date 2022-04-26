import './App.css';
import { requestCats, setSearchField } from '../actions';
import MainPage from '../components/MainPage';
import { connect } from 'react-redux';
import { ICatsState, ISearchState } from '../reducers';
import { ChangeEvent, ChangeEventHandler, Component } from 'react';
import { Dispatch } from 'redux';

interface IRootState {
  searchCats: ISearchState;
  requestCats: ICatsState;
}

interface IDispatch {
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  onRequestCats: Function;
}

interface IRootProps extends ISearchState, ICatsState, IDispatch {}

const mapStateToProps = (state: IRootState) => ({
  searchField: state.searchCats.searchField,
  cats: state.requestCats.cats,
  isPending: state.requestCats.isPending,
  error: state.requestCats.error
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchField(event.target.value)),
  onRequestCats: () => dispatch<any>(requestCats())
});

type IProps = IRootProps & typeof mapDispatchToProps;

class App extends Component<IProps, {}> {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
