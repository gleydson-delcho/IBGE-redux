import React from 'react';
import { StateItem } from '../../store/ducks/ibgeApi/types';

import * as RepositoriesActions from '../../store/ducks/ibgeApi/actions';
interface IProps {
  repository: StateItem
}

function RepositoryItem({ repository }: IProps) {
  return (
    <option value={repository.sigla}>{repository.sigla}</option>
  );
}

export default RepositoryItem
