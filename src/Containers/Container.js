import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
import SearchBar from '../Components/SearchBar/SearchBar';
import JobList from '../Components/JobList/JobList';
import JobDetails from '../Components/JobDetails/JobDetails';
import BackDrop from '../Components/BackDrop/BackDrop';

//styles
import './container.css';

//actions
import {
  setSearchLocation,
  setSearchDescription,
  setSearchFullTime,
  fetchJobs,
  addFavoriteJob,
  removeFavoriteJob,
  selectJob,
  unselectJob,
  setStateFromLocalStorage,
  setInterestedTerm
} from '../Actions/jobsActions';

class Container extends Component {
  /*
  componentDidMount(){
    if(localStorage.getItem("JobsState")){
      const jobs = JSON.parse(localStorage.getItem("JobsState"));
      this.props.setStateFromLocalStorage(jobs);
    } 
  }

  componentDidUpdate(){
    localStorage.setItem("JobsState", JSON.stringify(this.props));
    console.log("LOCAL STORING")
  }
  */
  render() {
    console.log("RENDER")
    let jobDetailsModal = this.props.modalOpen ?
      <React.Fragment>
        <JobDetails
            job={this.props.selectedJob}
            unselectJob={this.props.unselectJob}
            interestedTerm={this.props.interestedTerm}
        />
        <BackDrop onClick={this.props.unselectJob}/>
      </React.Fragment>
    : null;

    return (
      <div className="container col-12">
        <header className="header col-12">
          <h1>GitHub Jobs</h1>
        </header>

        <div className="search-section">
          <SearchBar
            setLocation={this.props.setSearchLocation}
            setDescription={this.props.setSearchDescription}
            setFullTime={this.props.setSearchFullTime}
            setInterestedTerm={this.props.setInterestedTerm}
            searchRequest={this.props.fetchJobs}
            search={this.props.search}
          />
        </div>

        <div className="resultsSection">
          <div className="list col-4">
            <h3 className="listTitle">Results ({this.props.allJobs.length})</h3>
            <JobList
              jobs={this.props.allJobs}
              addFavoriteJob={this.props.addFavoriteJob}
              removeFavoriteJob={this.props.removeFavoriteJob}
              selectJob={this.props.selectJob}
              type={"results"}
              isLoading={this.props.isFetching}
              interestedTerm={this.props.interestedTerm}
            />
          </div>
          <div className="list col-4">
            <h3 className="listTitle">My Favorites ({this.props.favJobs.length}) </h3>
            <JobList
              jobs={this.props.favJobs}
              addFavoriteJob={this.props.addFavoriteJob}
              removeFavoriteJob={this.props.removeFavoriteJob}
              selectJob={this.props.selectJob}
              type={"favorites"}
              interestedTerm={this.props.interestedTerm}
            />
          </div>
        </div>
        
        { jobDetailsModal }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.jobsReducer
}

const mapDispatchToProps = {
  setSearchLocation,
  setSearchDescription,
  setSearchFullTime,
  fetchJobs,
  addFavoriteJob,
  removeFavoriteJob,
  selectJob,
  unselectJob,
  setStateFromLocalStorage,
  setInterestedTerm
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);