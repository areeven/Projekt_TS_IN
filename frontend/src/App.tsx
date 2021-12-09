import React, {useEffect, useState} from 'react'
import './App.css'
import styled from 'styled-components'
import './utils/global/global'
import {NavigationBar} from './components/NavigationBar'
import {UserContext} from './utils/global/provider/UserProvider'
import {Routing} from './routes/Routing'

const App: React.FC = (): JSX.Element => {
    const [authenticatedUser, setAuthenticatedUser] = useState<string>('')

    const checkIfUserIsAuthenticatedInBrowser = () => {
        const username = localStorage.getItem('username')
        if (typeof username === 'string') {
            setAuthenticatedUser(username)
        }
    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    }, [])

    return (
        <Container>
            <Navigation>
                <Routing>
                    <NavigationBar/>
                </Routing>
            </Navigation>
            <Article>
                <H2>Välkommen till Bookface</H2>
            </Article>
        </Container>
    )
}

export const Container = styled.div`
  padding-top: 0;
  margin-top: 0;
  background-color: #e0cdbf;
  height: 100vh;
  width: 100vw;
  position: fixed;
`

export const Navigation = styled.div`
  background-color: #684848;
  height: 3em;
  position: fixed;
  top: 0;
  width: 100vw;
`

export const Article = styled.article`
  background: #ffffff;
  width: 70%;
  height: 100%;
  margin: auto;
`

const H2 = styled.h2`
  padding-top: 2.5em;
  margin: auto;
`

export default App
