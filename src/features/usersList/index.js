import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getUsersList } from "../../redux/modules/users/actions";

import UsersList from "./UsersList";

const mapStateToProps = state => {
  console.log("mapStateToProps users: ", state.users.list);
  return {
    usersList: state.users.list
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsersList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
