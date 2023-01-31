import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
  {
    uniqueNo: 5,
    imageUrl:
      'https://media.istockphoto.com/id/1336212641/photo/portrait-of-indian-woman.jpg?s=2048x2048&w=is&k=20&c=UPWthb7xWDZHOEsWzLgnfvVyfg3EO5fwacxsGraRzxY=',
    name: 'Vrinda BalaKrishnan',
    role: 'Software Developer',
  },
  {
    uniqueNo: 6,
    imageUrl:
      'https://media.istockphoto.com/id/956415064/photo/portrait-of-smiling-female-executive-in-office.jpg?s=2048x2048&w=is&k=20&c=NVSyzIn3oWJFLLSzUhADXeVEj7hpftPgFn6WKkIhvOg=',
    name: 'Ishitha Iyer',
    role: 'Software Developer',
  },
  {
    uniqueNo: 7,
    imageUrl:
      'https://media.istockphoto.com/id/1411818808/photo/portrait-shot-of-smiling-young-businessman-at-office-looking-at-camera-concept-successful.jpg?s=2048x2048&w=is&k=20&c=7dq5AE31MxDCPTnfPdZ0oQHlyAq5LaOZLP4uACa8q3c=',
    name: 'Aditya Bhalla',
    role: 'Software Developer',
  },
  {
    uniqueNo: 8,
    imageUrl:
      'https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.jpg?s=2048x2048&w=is&k=20&c=34766SD8mXoFEZd6_Aj8-sQDujvvRvqxray0de8XSTo=',
    name: 'Bejoy D',
    role: 'Software Developer',
  },
  {
    uniqueNo: 9,
    imageUrl:
      'https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?s=2048x2048&w=is&k=20&c=U_kNjrcp4-Z6uGKluazuwDPLQIAMISBA1sz00UOetKE=',
    name: 'Lisa George',
    role: 'Software Developer',
  },
  {
    uniqueNo: 10,
    imageUrl:
      'https://media.istockphoto.com/id/1226359172/photo/somewhere-there-a-better-future-awaits-me.jpg?s=2048x2048&w=is&k=20&c=6zt2XiWl7f4a_1k_Z35LDdFozOiYPQNnTSfe6uzitWw=',
    name: 'David D',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
