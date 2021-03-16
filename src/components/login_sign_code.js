<header>
          <h1>MusicianBook</h1>
          <div className='header'>
            <Link className='return-to-HomePage' to="/">Return to Home Page</Link>
          </div>
          </header>
          <main>
            <Route exact path='/' render={() => (
              <HomePage signup={this.signup}/> 
            )} />
            <Route exact path='/' render={() => (
              <UserProfile username={this.getUserList}/> 
            )} />
            <Route exact path='/all' render={() => (
              <SessionPage sessions={this.getSessionList}/> 
            )} />
            <Route exact path='/' render={() => (
              <LoginPage login={this.login}/>
            )} />
            <Route exact path='/' render={() => (
              <BandPage bands={this.getBandList}/> 
            )} />
          </main>



