import Footer from './components/Footer'
import Header from './components/Header'
import UserList from './components/UserList'
import './styles.css'

function App() {
  return (

    <div>
   <Header />

   <main className="main">
    <UserList />

    <button className="btn-add btn">Add new user</button>
   </main>

   <Footer />
   </div>
  )
}

export default App

