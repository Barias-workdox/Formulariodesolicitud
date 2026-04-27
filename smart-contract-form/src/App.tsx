import { Switch, Route, Redirect } from 'react-router-dom'
import { ProcessManager } from './components/process-manager/ProcessManager'
import { NewProcessWizard } from './components/new-process-wizard/NewProcessWizard'
import { ProcessDetailView } from './components/process-detail/ProcessDetailView'

function App() {
  return (
    <Switch>
      <Route exact path={['/', '/processes']} component={ProcessManager} />
      <Route exact path="/processes/new" component={NewProcessWizard} />
      <Route exact path="/processes/:id" component={ProcessDetailView} />
      <Redirect to="/processes" />
    </Switch>
  )
}

export default App
