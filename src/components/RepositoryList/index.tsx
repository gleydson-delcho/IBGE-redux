import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { StateItem } from '../../store/ducks/ibgeApi/types';
import { ApplicationState } from '../../../../react_redux/src/store';

import * as RepositoriesActions from '../../store/ducks/ibgeApi/actions';

import RepositoryItem from '../RepositoryItem';
import IbgeCounties from '../IbgeCounties';

interface StateProps {
  states: StateItem[]
  uf: string
}
interface DispatchProps {
  loadRequest: () => void
}

type Props = StateProps & DispatchProps
class RepositoryList extends Component<Props> {

  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }
  render() {
    const { states } = this.props;
    const handleChange = (e: any) => {
      this.state = (e.target.value);
      localStorage.setItem('State', JSON.stringify(this.state))
    }
    return (
      <>
        <h2>Estados API IBGE</h2>
        <label htmlFor="select">Selecione um estado: </label>
        <select onChange={handleChange}>
          <option value="">Selecionar</option>
          {states.map(repository => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </select>
        <IbgeCounties />
        <button onClick={() => this.state}>Enviar</button>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  states: state.ibgeApi.data,
  uf: state.ibgeApi.uf
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)
