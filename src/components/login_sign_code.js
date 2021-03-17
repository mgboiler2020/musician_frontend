{/* <header>
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
          </main> */}



<h6>Login</h6>
        <form onSubmit={this.login}>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.loginOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          />
          <input type='submit' value='Login' />
        </form><br></br>
//         <h6>Sign Up</h6>
//         <form onSubmit={this.signup}>
//           <input name='name' type='text' placeholder='name' onChange={this.loginOnChange}/><br></br>
//           <input name='username' type='text' placeholder='new username' onChange={this.loginOnChange}/><br></br>
//             <input name='password' type='text' placeholder='new password' onChange={this.loginOnChange}/><br></br>
//             <input name='location' type='text' placeholder='your location'  onChange={this.loginOnChange}/><br></br>
//             <input name='skills' type='text' placeholder='list your skills'  onChange={this.loginOnChange}/><br></br>
//             <input name='currentProjects' type='text' placeholder='current projects?'  onChange={this.loginOnChange}/><br></br>
//             <input name='pastProjects' type='text' placeholder='past projects?' onChange={this.loginOnChange}/><br></br>
//             <input name='genre' type='text' placeholder='what genre?' onChange={this.loginOnChange}/><br></br>
            
//             <input type='submit' value='Signup'/>
//             </form>
//         {/* {sessions} */}



