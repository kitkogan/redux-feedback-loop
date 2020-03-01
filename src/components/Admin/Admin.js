
import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class Admin extends Component {
    componentDidMount() {
        // On page load, get all availale data
        //and display in the table
        this.getUserFeedback();
    }
    //sets initial state
    state = {
        feedback: []
    }
    //calls on axios to get data from db
    getUserFeedback = () => {
        axios.get('/api/feedback').then((response) => {
            console.log(response);
            this.setState({
                feedback: response.data
            })
        }).catch((err) => {
            console.log('Error in GET', err);
        })
    }
    //handles click for delete button
    //swal popup allows admin choice to confirm delete or cancel delete req on selected entry
    handleDeleteClick = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.deleteUserFeedback(id);
          Swal.fire(
            'Deleted!',
            'Your task has been deleted.',
            'success'
          )
        }
      })
    } 
    //calls on axios to delete selected data set
    deleteUserFeedback = (id) => {
        console.log('delete');
        axios.delete('api/feedback/' + id)

        .then(this.getUserFeedback)

        .catch(error => {
            alert('There was a problem communicating with the server. Try again in a few minutes!');
            console.log('error with DELETE route /feedback/:id', error);
        })
    }
    //data rendered in a table from db
  render () {
    return (
        <div>
            <h2>Admin</h2>
            <table>
                <thead>
                    <tr>
                        <td>Feelings</td>
                        <td>Understanding</td>
                        <td>Support</td>
                        <td>Comments</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.feedback.map( entry => (
                        <tr key={entry.id}>
                            <td>{entry.feeling}</td>
                            <td>{entry.understanding}</td>
                            <td>{entry.support}</td>
                            <td>{entry.comments}</td>
                            <td><button onClick={() => this.handleDeleteClick(entry.id)}>Delete Entry</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
  }
}    
export default Admin;