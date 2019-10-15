import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import MainWrapper from '../Common/MainWrapper'
import MainScroll from '../Common/MainScroll'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Home from '../Home'
import Tasks from '../Tasks'
import theme from '../../theme'
import '../../assets/styles/index.css'
import Workers from '../Workers'
import Worker from '../Worker'
import Contract from '../Contract'

const EmptyContent = () => <React.Fragment />
const NonExistent = () => <div>404 Not Found</div>

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Header />
          <MainScroll>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/tasks/:taskId?" component={Tasks} />
              <Route exact path="/epochs/:epochNumber?" component={EmptyContent} />
              <Route exact path="/workers" component={Workers} />
              <Route exact path="/worker/:workerAddress?" component={Worker} />
              <Route exact path="/contract/:contractAddress?" component={Contract} />
              <Route exact path="/">
                <Redirect to={{ pathname: '/home' }} />
              </Route>
              <Route component={NonExistent} status={404} />
            </Switch>
            <Footer />
          </MainScroll>
        </MainWrapper>
      </ThemeProvider>
    </Router>
  )
}

export default App
