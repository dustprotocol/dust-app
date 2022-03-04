import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {TRANSFER_TOKEN,} from '../urls';
import {Transfer} from './transfer/Transfer';

const ContentRouter = (): JSX.Element => (
  <div className="content">
    <Switch>
      <Route exact path={TRANSFER_TOKEN} component={Transfer} />
      <Route path="/" render={() => (<Redirect to={TRANSFER_TOKEN} />)} />
    </Switch>
  </div>
);

export default ContentRouter;
